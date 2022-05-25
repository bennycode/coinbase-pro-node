import {AxiosInstance} from 'axios';
import {ISO_8601_MS_UTC, UUID_V4, OrderSide, Pagination, PaginatedData} from '../payload/common';

export enum Liquidity {
  MAKER = 'M',
  TAKER = 'T',
}

export interface Fill {
  created_at: ISO_8601_MS_UTC;
  fee: string;
  liquidity: Liquidity;
  order_id: UUID_V4;
  price: string;
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

  /**
   * Get a list of recent fills for a given Order of the API key's profile.
   *
   * @param orderId - ID of previously placed order
   * @param pagination - Pagination field
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getfills
   */
  async getFillsByOrderId(orderId: string, pagination?: Pagination): Promise<PaginatedData<Fill>> {
    const resource = FillAPI.URL.FILLS;
    const response = await this.apiClient.get<Fill[]>(resource, {params: {order_id: orderId, ...pagination}});
    return {
      data: response.data,
      pagination: {
        after: response.headers['cb-after'],
        before: response.headers['cb-before'],
      },
    };
  }

  /**
   * Get a list of recent fills for a given Product of the API key's profile.
   *
   * @param productId - Representation for base and counter
   * @param pagination - Pagination field
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getfills
   */
  async getFillsByProductId(productId: string, pagination?: Pagination): Promise<PaginatedData<Fill>> {
    const resource = FillAPI.URL.FILLS;
    const response = await this.apiClient.get<Fill[]>(resource, {params: {product_id: productId, ...pagination}});
    return {
      data: response.data,
      pagination: {
        after: response.headers['cb-after'],
        before: response.headers['cb-before'],
      },
    };
  }
}
