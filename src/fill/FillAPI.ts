import {AxiosInstance} from 'axios';

type ISO_8601_UTC = string;

type UUID_V4 = string;

export enum OrderSide {
  BUY = 'buy',
  SELL = 'sell',
}

export enum Liquidity {
  MAKER = 'M',
  TAKER = 'T',
}

export interface Fill {
  created_at: ISO_8601_UTC;
  fee: string;
  liquidity: Liquidity;
  order_id: UUID_V4;
  price: '7755.01000000';
  product_id: string;
  profile_id: UUID_V4;
  settled: boolean;
  side: OrderSide;
  size: string;
  trade_id: number;
  usd_volume: string;
  user_id: string;
}

export class FillAPI {
  static readonly URL = {
    FILLS: `/fills`,
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  // https://docs.pro.coinbase.com/#list-fills
  // https://pro.coinbase.com/orders/filled
  async getFillsByOrderId(orderId: string): Promise<Fill[]> {
    const resource = FillAPI.URL.FILLS;
    const response = await this.apiClient.get(resource, {params: {order_id: orderId}});
    return response.data;
  }

  // https://docs.pro.coinbase.com/#list-fills
  // https://pro.coinbase.com/orders/filled
  /* TODO: Implement "CB-BEFORE" header:
   * The CB-BEFORE header will have this first trade id so that future requests using the cb-before parameter will
   * fetch fills with a greater trade id (newer fills)
   */
  async getFillsByProductId(productId: string): Promise<Fill[]> {
    const resource = FillAPI.URL.FILLS;
    const response = await this.apiClient.get(resource, {params: {product_id: productId}});
    return response.data;
  }
}
