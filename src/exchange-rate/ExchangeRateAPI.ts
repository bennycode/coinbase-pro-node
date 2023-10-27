import axios from 'axios';

export interface ExchangeRate {
  currency: string;
  rates: {[currency: string]: string};
}

/**
 * @see https://docs.cloud.coinbase.com/sign-in-with-coinbase/docs/api-exchange-rates
 */
export class ExchangeRateAPI {
  static readonly URL = {
    V2_EXCHANGE_RATES: `/v2/exchange-rates`,
  };

  constructor(private readonly baseURL: string = 'https://api.coinbase.com') {}

  /**
   * Get current exchange rates. Default base currency is USD, but it can be defined as any supported currency.
   * Returned rates will define the exchange rate for one unit of the base currency.
   *
   * @see https://docs.cloud.coinbase.com/sign-in-with-coinbase/docs/api-exchange-rates#get-exchange-rates
   */
  async getExchangeRates(currency: string = 'USD'): Promise<ExchangeRate> {
    const response = await axios.default.get<{
      data: ExchangeRate;
    }>(`${this.baseURL}${ExchangeRateAPI.URL.V2_EXCHANGE_RATES}`, {params: {currency}});
    return response.data.data;
  }
}
