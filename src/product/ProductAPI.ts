import {AxiosInstance} from 'axios';
import {ISO_8601_MS_UTC} from '../payload/common';

export interface Product {
  base_currency: string;
  base_increment: string;
  base_max_size: string;
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

export type CandleGranularity = 60 | 300 | 900 | 3600 | 21600 | 86400;

export interface CandlesRequestParameters {
  end?: ISO_8601_MS_UTC;
  granularity: CandleGranularity;
  start?: ISO_8601_MS_UTC;
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
  /** Bucket start time */
  time: Timestamp;
  /** Volume of trading activity during the bucket interval */
  volume: Volume;
}

type RawCandle = [Timestamp, Low, High, Open, Close, Volume];

export class ProductAPI {
  static readonly URL = {
    PRODUCTS: `/products`,
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  // https://docs.pro.coinbase.com/#get-historic-rates
  async getCandles(productId: string, params?: CandlesRequestParameters): Promise<Candle[]> {
    const resource = `${ProductAPI.URL.PRODUCTS}/${productId}/candles`;
    const response = await this.apiClient.get<RawCandle[]>(resource, {params});

    const candles = response.data.map(([time, low, high, open, close, volume]) => ({
      close,
      high,
      low,
      open,
      time,
      volume,
    }));

    return candles;
  }

  // https://docs.pro.coinbase.com/#get-products
  async getProducts(): Promise<Product[]> {
    const resource = ProductAPI.URL.PRODUCTS;
    const response = await this.apiClient.get<Product[]>(resource);
    return response.data;
  }

  // https://docs.pro.coinbase.com/#get-24hr-stats
  async getProductStats(productId: string): Promise<ProductStats> {
    const resource = `${ProductAPI.URL.PRODUCTS}/${productId}/stats`;
    const response = await this.apiClient.get<ProductStats>(resource);
    return response.data;
  }

  // https://docs.pro.coinbase.com/#get-product-ticker
  async getProductTicker(productId: string): Promise<ProductTicker> {
    const resource = `${ProductAPI.URL.PRODUCTS}/${productId}/ticker`;
    const response = await this.apiClient.get<ProductTicker>(resource);
    return response.data;
  }
}
