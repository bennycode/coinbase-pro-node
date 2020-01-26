import {AxiosInstance} from 'axios';

export type Product = {
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
};

// Snapshot information about the last trade (tick), best bid/ask and 24h volume.
export type ProductTicker = {
  ask: string;
  bid: string;
  price: string;
  size: string;
  time: string;
  trade_id: number;
  volume: string;
};

export type ProductStats = {
  high: string;
  last: string;
  low: string;
  open: string;
  volume: string;
  volume_30day: string;
};

export type CandleGranularity = 60 | 300 | 900 | 3600 | 21600 | 86400;

export type CandlesRequestParameters = {
  /** End time in ISO 8601 */
  end?: string;
  /** Desired timeslice in seconds */
  granularity: CandleGranularity;
  /** Start time in ISO 8601 */
  start?: string;
};

export type Candle = {
  /** closing price (last trade) in the bucket interval */
  close: number;
  /**  highest price during the bucket interval */
  high: number;
  /** lowest price during the bucket interval */
  low: number;
  /** opening price (first trade) in the bucket interval */
  open: number;
  /** bucket start time */
  time: number;
  /** volume of trading activity during the bucket interval */
  volume: number;
};

/** [ time, low, high, open, close, volume ], */
type RawCandle = [number, number, number, number, number, number];

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
