import {AxiosInstance} from 'axios';

export interface Currency {
  id: string;
  name: string;
  min_size: string;
  status: string;
  details: CurrencyDetail;
  max_precision: string;
}

export interface CurrencyDetail {
  type: string;
  symbol: string;
  network_confirmations: number;
  sort_order: number;
  crypto_address_link: string;
  crypto_transaction_link: string;
  push_payment_methods: string[];
  processing_time_seconds: number;
  min_withdrawal_amount: number;
}

export class CurrencyAPI {
  static readonly URL = {
    CURRENCIES: `/currencies`,
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  /**
   * List known currencies.
   * Currency codes will conform to the ISO 4217 standard where possible.
   * Currencies which have or had no representation in ISO 4217 may use a custom code.
   *
   * @see https://docs.pro.coinbase.com/#get-currencies
   */
  async listCurrencies(): Promise<Currency[]> {
    const resource = CurrencyAPI.URL.CURRENCIES;
    const response = await this.apiClient.get<Currency[]>(resource);
    return response.data;
  }
}
