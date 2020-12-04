/** ISO 8601 timestamp with microseconds in Coordinated Universal Time (UTC), i.e. "2014-11-06T10:34:47.123456Z" */
export type ISO_8601_MS_UTC = string;

/** UUID, both forms (with and without dashes) are accepted, i.e. "132fb6ae-456b-4654-b4e0-d681ac05cea1" or "132fb6ae456b4654b4e0d681ac05cea1" */
export type UUID_V4 = string;

export enum OrderSide {
  BUY = 'buy',
  SELL = 'sell',
}

/** @see https://docs.pro.coinbase.com/#pagination */
export interface Pagination {
  /** Request page after (older) this pagination id. */
  after?: string;
  /** Request page before (newer) this pagination id. */
  before?: string;
  /** Number of results per request. Maximum 100. Default 100. */
  limit?: number;
}

export interface PaginatedData<PayloadType> {
  data: PayloadType[];
  pagination: {after?: string; before?: string};
}
