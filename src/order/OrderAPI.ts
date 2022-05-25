import {AxiosError, AxiosInstance} from 'axios';
import {ISO_8601_MS_UTC, OrderSide, PaginatedData, Pagination} from '../payload';
import querystring from 'querystring';

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

export enum CancelOrderPeriod {
  ONE_DAY = 'day',
  ONE_HOUR = 'hour',
  ONE_MINUTE = 'min',
}

/** @see https://docs.cloud.coinbase.com/exchange/docs/matching-engine#self-trade-prevention */
export enum SelfTradePrevention {
  CANCEL_BOTH = 'cb',
  CANCEL_NEWEST = 'cn',
  CANCEL_OLDEST = 'co',
  DECREMENT_AND_CANCEL = 'dc',
}

type BaseOrder = {
  client_oid?: string;
  product_id: string;
  side: OrderSide;
  stop?: 'loss' | 'entry';
  stop_price?: string;
  stp?: SelfTradePrevention;
};

type BasePlacedOrder = {
  created_at: ISO_8601_MS_UTC;
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
  time_in_force: TimeInForce;
  type: OrderType;
};

export type NewOrder = LimitOrder | AutoCancelLimitOrder | PostOnlyLimitOrder | MarketOrder;

export interface AutoCancelLimitOrder extends LimitOrder {
  cancel_after: CancelOrderPeriod;
  time_in_force: TimeInForce.GOOD_TILL_TIME;
}

export interface PostOnlyLimitOrder extends LimitOrder {
  post_only: boolean;
  time_in_force: TimeInForce.GOOD_TILL_CANCELED | TimeInForce.GOOD_TILL_TIME;
}

export interface LimitOrder extends BaseOrder {
  price: string;
  size: string;
  /** Default is 'GTC'. */
  time_in_force?: TimeInForce;
  type: OrderType.LIMIT;
}

export type MarketOrder = BaseOrder & {type: OrderType.MARKET} & ({size: string} | {funds: string});

export enum OrderStatus {
  ACTIVE = 'active',
  DONE = 'done',
  OPEN = 'open',
  PENDING = 'pending',
}

export interface PendingOrder extends BasePlacedOrder {
  status: OrderStatus.PENDING;
  stp: SelfTradePrevention;
}

export interface FilledOrder extends BasePlacedOrder {
  done_at: ISO_8601_MS_UTC;
  done_reason: 'filled';
  profile_id: string;
  status: OrderStatus.DONE;
}

/** @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getorders */
export interface OrderListQueryParam extends Pagination {
  /** Only list orders for a specific product. */
  product_id?: string;
  /** Limit list of orders to these statuses. Passing "all" returns orders of all statuses. Default: [open, pending, active] */
  status?: (OrderStatus | 'all')[];
}

export type Order = PendingOrder | FilledOrder;

export class OrderAPI {
  static readonly URL = {
    ORDERS: `/orders`,
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  /**
   * With best effort, cancel all open orders from the profile that the API key belongs to.
   *
   * @param productId - Representation for base and counter
   * @returns A list of ids of the canceled orders
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_deleteorders
   */
  async cancelOpenOrders(productId?: string): Promise<string[]> {
    const resource = OrderAPI.URL.ORDERS;
    const response = await this.apiClient.delete<string[]>(resource, {
      params: productId ? {product_id: productId} : {},
    });
    return response.data;
  }

  /**
   * Cancel a previously placed order. Order must belong to the profile that the API key belongs to.
   *
   * @param orderId - ID of the order to cancel
   * @param productId - While not required, the request will be more performant if you include the product ID
   * @returns The ID of the canceled order
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_deleteorder
   */
  async cancelOrder(orderId: string, productId?: string): Promise<string> {
    const resource = `${OrderAPI.URL.ORDERS}/${orderId}`;
    const response = await this.apiClient.delete<string>(resource, {
      params: productId ? {product_id: productId} : {},
    });
    return response.data;
  }

  /**
   * List your orders from the profile that the API key belongs to. Only open or un-settled orders are returned. As
   * soon as an order is no longer open and settled, it will no longer appear in the default request.
   *
   * @note Depending on your activity, fetching all data from this endpoint can take very long (measured already 25
   *   seconds!)
   * @param query - Available query parameters (Pagination, Product ID and/or Order Status)
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getorders
   */
  async getOrders(query?: OrderListQueryParam): Promise<PaginatedData<Order>> {
    const resource = OrderAPI.URL.ORDERS;
    const response = await this.apiClient.get<Order[]>(`${resource}`, {
      params: query,
      paramsSerializer: querystring.stringify,
    });
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
   * @param orderId - ID of previously placed order
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getorder
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
      if ((error as AxiosError).response!.status === 404) {
        return null;
      }

      throw error;
    }
  }

  /**
   * You can place two types of orders: limit and market. Orders can only be placed if your account has sufficient
   * funds. Once an order is placed, your account funds will be put on hold for the duration of the order.
   *
   * @param newOrder - Order type and parameters
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postorders
   */
  async placeOrder(newOrder: NewOrder): Promise<Order> {
    const resource = OrderAPI.URL.ORDERS;
    const response = await this.apiClient.post<Order>(resource, newOrder);
    return response.data;
  }
}
