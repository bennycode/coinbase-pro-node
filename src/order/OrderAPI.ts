import {AxiosInstance} from 'axios';
import {OrderSide, Pagination} from '../payload/common';

export enum OrderType {
  LIMIT = 'limit',
  MARKET = 'market',
}

export enum TimeInForce {
  FILL_OR_KILL = 'FOK',
  GOOD_TILL_CANCELED = 'GTC',
  GOOD_TILL_TIME = 'GTT',
  IMMEDIATE_OR_CANCEL = 'IOC',
}

// https://docs.pro.coinbase.com/#self-trade-prevention
export enum SelfTradePrevention {
  CANCEL_BOTH = 'cb',
  CANCEL_NEWEST = 'cn',
  CANCEL_OLDEST = 'co',
  DECREMENT_AND_CANCEL = 'dc',
}

export interface NewOrder {
  client_oid?: string;
  funds?: string;
  product_id: string;
  side: OrderSide;
  size?: string;
  stop?: 'loss' | 'entry';
  stop_price?: string;
  stp?: SelfTradePrevention;
  type: OrderType;
}

export enum OrderStatus {
  ACTIVE = 'active',
  OPEN = 'open',
  PENDING = 'pending',
}

export interface Order {
  created_at: string;
  executed_value: string;
  fill_fees: string;
  filled_size: string;
  id: string;
  post_only: false;
  price: string;
  product_id: string;
  settled: boolean;
  side: OrderSide;
  size: string;
  status: OrderStatus;
  stp: SelfTradePrevention;
  time_in_force: TimeInForce;
  type: OrderType;
}

export class OrderAPI {
  static readonly URL = {
    ORDERS: `/orders`,
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  // https://docs.pro.coinbase.com/#cancel-all
  async cancelOpenOrders(productId?: string): Promise<string[]> {
    const resource = OrderAPI.URL.ORDERS;
    const response = await this.apiClient.delete(resource, {
      params: productId ? {product_id: productId} : {},
    });
    return response.data;
  }

  /**
   * List your current open orders from the profile that the API key belongs to. Only open or un-settled
   * orders are returned. As soon as an order is no longer open and settled, it will no longer appear
   * in the default request.
   *
   * @param pagination
   * @see https://docs.pro.coinbase.com/#list-orders
   */
  async getOpenOrders(
    pagination?: Pagination
  ): Promise<{data: Order[]; pagination: {after?: string; before?: string}}> {
    const resource = OrderAPI.URL.ORDERS;
    const response = await this.apiClient.get(resource, {params: pagination});
    return {
      data: response.data,
      pagination: {
        after: response.headers['cb-after'],
        before: response.headers['cb-before'],
      },
    };
  }

  /**
   * Get a single order by order id from the profile that the API key belongs to.
   *
   * @param orderId
   * @see https://docs.pro.coinbase.com/#get-an-order
   */
  async getOrder(orderId: string): Promise<Order | null> {
    const resource = `${OrderAPI.URL.ORDERS}/${orderId}`;
    try {
      const response = await this.apiClient.get<Order>(resource);
      return response.data;
    } catch (error) {
      /**
       * If the order is canceled the response may
       * have status code 404 if the order had no matches.
       */
      if (error.response.status === 404) {
        return null;
      }

      throw error;
    }
  }

  // https://docs.pro.coinbase.com/#place-a-new-order
  async placeOrder(newOrder: NewOrder): Promise<Order> {
    const resource = OrderAPI.URL.ORDERS;
    const response = await this.apiClient.post<Order>(resource, newOrder);
    return response.data;
  }
}
