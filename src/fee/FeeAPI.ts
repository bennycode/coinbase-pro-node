import {AxiosInstance} from 'axios';

/**
 * Your fee tier is based upon total USD trading volume over the trailing 30 day period.
 *
 * @see https://help.coinbase.com/en/pro/trading-and-funding/trading-rules-and-fees/fees.html
 */
export interface FeeTier {
  /** A maker fee is paid when you create ("make") liquidity on the order book, i.e. you create an order which is not matched immediately. */
  maker_fee_rate: string;
  /** A taker fee is paid when you remove ("take") liquidity from the order book, i.e. you create an order which matches an existing order (this includes all market orders). */
  taker_fee_rate: string;
  /** Your 30-day trailing volume which impacts your fee rates. */
  usd_volume: string | null;
}

export class FeeAPI {
  static readonly URL = {
    FEES: `/fees`,
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  /**
   * Get your current maker & taker fee rates, as well as your 30-day trailing volume. Quoted rates are subject to
   * change.
   *
   * @see https://docs.pro.coinbase.com/#fees
   * @see https://help.coinbase.com/en/pro/trading-and-funding/trading-rules-and-fees/fees.html
   */
  async getCurrentFees(): Promise<FeeTier> {
    const resource = FeeAPI.URL.FEES;
    const response = await this.apiClient.get<FeeTier>(resource);
    return response.data;
  }
}
