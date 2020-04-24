import {AxiosInstance, AxiosResponse} from 'axios';
import {ISO_8601_MS_UTC, OrderSide, Pagination} from '../payload/common';
import {CandleBucketUtil} from './CandleBucketUtil';
import {RESTClient} from '..';

export interface Product {
  base_currency: string;
  base_increment: string;
  /** Maximum order size */
  base_max_size: string;
  /** Minimum order size */
  base_min_size: string;
  cancel_only: boolean;
  display_name: string;
  id: string;
  limit_only: boolean;
  margin_enabled: boolean;
  max_market_funds: string;
  min_market_funds: string;
  post_only: boolean;
  quote_currency: string;
  /**
   * Increment steps for min/max order size. The order price must be a multiple of this increment (i.e. if the
   * increment is 0.01, order prices of 0.001 or 0.021 would be rejected).
   */
  quote_increment: string;
  status: string;
  status_message: string;
}

// Snapshot information about the last trade (tick), best bid/ask and 24h volume.
export interface ProductTicker {
  ask: string;
  bid: string;
  price: string;
  size: string;
  time: string;
  trade_id: number;
  volume: string;
}

export interface ProductStats {
  high: string;
  last: string;
  low: string;
  open: string;
  volume: string;
  volume_30day: string;
}

export interface Trade {
  time: ISO_8601_MS_UTC;
  trade_id: number;
  price: string;
  size: string;
  side: OrderSide;
}

/** Accepted granularity in seconds to group historic rates. */
export enum CandleGranularity {
  ONE_MINUTE = 60,
  FIVE_MINUTES = 300,
  FIFTEEN_MINUTES = 900,
  ONE_HOUR = 3600,
  SIX_HOURS = 21600,
  ONE_DAY = 86400,
}

export interface BaseHistoricRateRequest {
  /** Desired time slice in seconds. */
  granularity: CandleGranularity;
}

export interface HistoricRateRequestWithTimeSpan extends BaseHistoricRateRequest {
  /** Opening time (ISO 8601) of last candle, i.e. "2020-03-15T23:59:59.999Z" */
  end: ISO_8601_MS_UTC;
  /** Opening time (ISO 8601) of first candle, i.e. "2020-03-09T00:00:00.000Z" */
  start: ISO_8601_MS_UTC;
}

export type HistoricRateRequest = BaseHistoricRateRequest | HistoricRateRequestWithTimeSpan;

export enum OrderBookLevel {
  ONLY_BEST_BID_AND_ASK = 1,
  TOP_50_BIDS_AND_ASKS = 2,
  FULL_ORDER_BOOK = 3,
}

/** Active order price */
type ActiveOrderPrice = string;
/** Sum of the size of the orders at active order price. Size should not be multiplied by number of orders. */
type OrderSumSize = string;
/** Number of orders at active order price. */
type NumberOfOrders = string;
type OrderId = string;
/** Aggregated levels return only one size for each active order price. */
type AggregatedOrder = [ActiveOrderPrice, OrderSumSize, NumberOfOrders];
type NonAggregatedOrder = [ActiveOrderPrice, OrderSumSize, OrderId];

/**
 * Sequence numbers are increasing integer values for each product with every new message being exactly 1 sequence
 * number than the one before it. If you see a sequence number that is more than one value from the previous, it means
 * a message has been dropped. A sequence number less than one you have seen can be ignored or has arrived
 * out-of-order. In both situations you may need to perform logic to make sure your system is in the correct state.
 */
type SequenceNumber = number;

/** Represents only the best bid and ask. */
export interface OrderBookLevel1 {
  sequence: SequenceNumber;
  bids: AggregatedOrder[];
  asks: AggregatedOrder[];
}

/** Top 50 bids and asks (aggregated) BUT if there are not 50 then less bids and asks are returned. */
export interface OrderBookLevel2 {
  sequence: SequenceNumber;
  bids: AggregatedOrder[];
  asks: AggregatedOrder[];
}

/**
 * Full order book (non aggregated): Level 3 is only recommended for users wishing to maintain a full real-time order
 * book using the websocket stream. Abuse of Level 3 via polling will cause your access to be limited or blocked.
 */
export interface OrderBookLevel3 {
  sequence: SequenceNumber;
  bids: NonAggregatedOrder[];
  asks: NonAggregatedOrder[];
}

export type OrderBook = OrderBookLevel1 | OrderBookLevel2 | OrderBookLevel3;

export interface OrderBookRequestParameters {
  level: OrderBookLevel;
}

type Close = number;
type High = number;
type Low = number;
type Open = number;
type Timestamp = number;
type Volume = number;

export interface Candle {
  /** Closing price (last trade) in the bucket interval */
  close: Close;
  /** Highest price during the bucket interval */
  high: High;
  /** Lowest price during the bucket interval */
  low: Low;
  /** Opening price (first trade) in the bucket interval */
  open: Open;
  /** Bucket start time in simplified extended ISO 8601 format */
  openTimeString: ISO_8601_MS_UTC;
  /** Bucket start time converted to milliseconds (note: Coinbase Pro actually uses seconds) */
  openTime: Timestamp;
  /** Volume of trading activity during the bucket interval */
  volume: Volume;
}

type RawCandle = [Timestamp, Low, High, Open, Close, Volume];

export enum ProductEvent {
  NEW_CANDLE = 'ProductEvent.NEW_CANDLE',
}

export class ProductAPI {
  static readonly URL = {
    PRODUCTS: `/products`,
  };

  private watchCandlesConfig: {
    [productId: string]: {
      [granularity: number]: {
        expectedISO: ISO_8601_MS_UTC;
        intervalId: NodeJS.Timeout;
      };
    };
  } = {};

  constructor(private readonly apiClient: AxiosInstance, private readonly restClient: RESTClient) {}

  /**
   * Get historic rates for a product. Rates are returned in grouped buckets (candlesticks) based on requested
   * granularity.
   *
   * Note: The maximum number of data points for a single request is 300 candles. If your selection of start/end time
   * and granularity will result in more than 300 data points, your request will be rejected. If you wish to retrieve
   * fine granularity data over a larger time range, you will need to make multiple requests with new start/end ranges.
   *
   * @param productId - Representation for base and counter
   * @param [params] - Desired timespan
   * @see https://docs.pro.coinbase.com/#get-historic-rates
   */
  async getCandles(productId: string, params: HistoricRateRequest): Promise<Candle[]> {
    const resource = `${ProductAPI.URL.PRODUCTS}/${productId}/candles`;
    let rawCandles: RawCandle[] = [];

    const potentialParams = params as HistoricRateRequestWithTimeSpan;
    if (potentialParams.start && potentialParams.end) {
      const fromInMillis = new Date(potentialParams.start).getTime();
      const toInMillis = new Date(potentialParams.end).getTime();
      const candleSizeInMillis = params.granularity * 1000;

      const bucketsInMillis = CandleBucketUtil.getBucketsInMillis(fromInMillis, toInMillis, candleSizeInMillis);
      const bucketsInISO = CandleBucketUtil.getBucketsInISO(bucketsInMillis);

      for (let index = 0; index < bucketsInISO.length; index++) {
        const bucket = bucketsInISO[index];
        const response = await this.apiClient.get<RawCandle[]>(resource, {
          params: {
            end: bucket.stop,
            granularity: params.granularity,
            start: bucket.start,
          },
        });
        rawCandles.push(...response.data);
      }
    } else {
      const response = await this.apiClient.get<RawCandle[]>(resource, {params});
      rawCandles = response.data;
    }

    return rawCandles.map(this.mapCandle).sort((a, b) => a.openTime - b.openTime);
  }

  /**
   * Watch a specific product ID for new candles. Candles will be emitted through the `ProductEvent.NEW_CANDLE` event.
   *
   * @param productId - Representation for base and counter
   * @param granularity - Desired candle size
   * @param lastCandleTime - Timestamp (ISO 8601) of last candle received
   * @returns Handle to stop the watch interval.
   */
  watchCandles(productId: string, granularity: CandleGranularity, lastCandleTime: ISO_8601_MS_UTC): void {
    this.watchCandlesConfig[productId] = this.watchCandlesConfig[productId] || {};
    if (this.watchCandlesConfig[productId][granularity]) {
      throw new Error(
        `You are already watching "${productId}" with an interval of "${granularity}" seconds. Please clear this interval before creating a new one.`
      );
    } else {
      const expectedISO = CandleBucketUtil.addUnitISO(lastCandleTime, granularity, 1);
      const intervalId = this.startCandleInterval(productId, granularity);

      this.watchCandlesConfig[productId][granularity] = {
        expectedISO,
        intervalId,
      };
    }
  }

  unwatchCandles(productId: string, granularity: CandleGranularity): void {
    const intervalId = this.watchCandlesConfig[productId][granularity].intervalId;
    clearInterval(intervalId);
    delete this.watchCandlesConfig[productId][granularity];
    if (Object.values(this.watchCandlesConfig[productId]).length === 0) {
      delete this.watchCandlesConfig[productId];
    }
  }

  /**
   * Get a list of available currency pairs for trading.
   *
   * @see https://docs.pro.coinbase.com/#get-products
   */
  async getProducts(): Promise<Product[]> {
    const resource = ProductAPI.URL.PRODUCTS;
    const response = await this.apiClient.get<Product[]>(resource);
    return response.data;
  }

  /**
   * Get latest trades for a product.
   *
   * @param productId - Representation for base and counter
   * @param pagination
   */
  async getTrades(
    productId: string,
    pagination?: Pagination
  ): Promise<{data: Trade[]; pagination: {after?: string; before?: string}}> {
    const resource = `${ProductAPI.URL.PRODUCTS}/${productId}/trades`;
    const response = await this.apiClient.get<Trade[]>(resource, {params: pagination});
    return {
      data: response.data,
      pagination: {
        after: response.headers['cb-after'],
        before: response.headers['cb-before'],
      },
    };
  }

  /**
   * Get a list of open orders for a product. The amount of detail shown can be customized with the level parameter.
   * By default, only the inside (i.e. best) bid and ask are returned. This is equivalent to a book depth of 1 level.
   *
   * @param productId - Representation for base and counter
   * @param params - Amount of detail
   * @see https://docs.pro.coinbase.com/#get-product-order-book
   */
  async getProductOrderBook(
    productId: string,
    params?: {level: OrderBookLevel.ONLY_BEST_BID_AND_ASK}
  ): Promise<OrderBookLevel1>;
  async getProductOrderBook(
    productId: string,
    params?: {level: OrderBookLevel.TOP_50_BIDS_AND_ASKS}
  ): Promise<OrderBookLevel2>;
  async getProductOrderBook(
    productId: string,
    params?: {level: OrderBookLevel.FULL_ORDER_BOOK}
  ): Promise<OrderBookLevel3>;
  async getProductOrderBook(
    productId: string,
    params: OrderBookRequestParameters = {level: OrderBookLevel.ONLY_BEST_BID_AND_ASK}
  ): Promise<OrderBook> {
    const resource = `${ProductAPI.URL.PRODUCTS}/${productId}/book`;
    let response: AxiosResponse;

    switch (params.level) {
      case OrderBookLevel.TOP_50_BIDS_AND_ASKS:
        response = await this.apiClient.get<OrderBookLevel2>(resource, {params});
        break;
      case OrderBookLevel.FULL_ORDER_BOOK:
        response = await this.apiClient.get<OrderBookLevel3>(resource, {params});
        break;
      default:
        response = await this.apiClient.get<OrderBookLevel1>(resource, {params});
    }

    return response.data;
  }

  /**
   * Get latest 24 hours of movement data for a product.
   *
   * @param productId - Representation for base and counter
   */
  async getProductStats(productId: string): Promise<ProductStats> {
    const resource = `${ProductAPI.URL.PRODUCTS}/${productId}/stats`;
    const response = await this.apiClient.get<ProductStats>(resource);
    return response.data;
  }

  /**
   * Get snapshot information about the last trade (tick), best bid/ask and 24h volume.
   * @param productId - Representation for base and counter
   */
  async getProductTicker(productId: string): Promise<ProductTicker> {
    const resource = `${ProductAPI.URL.PRODUCTS}/${productId}/ticker`;
    const response = await this.apiClient.get<ProductTicker>(resource);
    return response.data;
  }

  private mapCandle(payload: number[]): Candle {
    const [time, low, high, open, close, volume] = payload;
    const openTime = time * 1000; // Map seconds to milliseconds
    return {
      close,
      high,
      low,
      open,
      openTime,
      openTimeString: new Date(openTime).toISOString(),
      volume,
    };
  }

  private emitCandle(productId: string, granularity: CandleGranularity, candle: Candle): void {
    // Emit matched candle
    this.restClient.emit(ProductEvent.NEW_CANDLE, productId, granularity, candle);
    // Cache timestamp of upcoming candle
    const {openTime} = candle;
    const nextOpenTime = CandleBucketUtil.addUnitISO(openTime, granularity, 1);
    this.watchCandlesConfig[productId][granularity].expectedISO = nextOpenTime;
  }

  private async checkNewCandles(productId: string, granularity: CandleGranularity): Promise<void> {
    const expectedTimestampISO = this.watchCandlesConfig[productId][granularity].expectedISO;

    const candles = await this.getCandles('BTC-USD', {
      granularity,
      start: expectedTimestampISO,
    });

    const matches = candles.filter(candle => candle.openTimeString === expectedTimestampISO);
    if (matches.length > 0) {
      const matchedCandle = matches[0];
      this.emitCandle(productId, granularity, matchedCandle);
    }
  }

  private startCandleInterval(productId: string, granularity: CandleGranularity): NodeJS.Timeout {
    // Check for new candles in the smallest candle interval possible, which is 1 minute
    const updateInterval = CandleGranularity.ONE_MINUTE * 1000;
    return (setInterval(
      this.checkNewCandles.bind(this, productId, granularity),
      updateInterval
    ) as unknown) as NodeJS.Timeout;
  }
}
