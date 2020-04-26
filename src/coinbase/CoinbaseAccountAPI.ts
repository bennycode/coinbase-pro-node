import {AxiosInstance} from 'axios';

export enum AccountType {
  FIAT = 'fiat',
  WALLET = 'wallet',
}

export interface CoinbaseAccount {
  id: string;
  name: string;
  balance: string;
  currency: string;
  type: AccountType;
  primary: boolean;
  active: boolean;
  available_on_consumer: true;
  hold_balance: string;
  hold_currency: string;
  destination_tag_name: string;
  destination_tag_regex: string;
  wire_deposit_information: WireDepositInformation;
  sepa_deposit_information: SEPADepositInformation;
}

export interface WireDepositInformation {
  account_number: string;
  routing_number: string;
  bank_name: string;
  bank_address: string;
  bank_country: {
    code: string;
    name: string;
  };
  account_name: string;
  account_address: string;
  reference: string;
}

export interface SEPADepositInformation {
  iban: string;
  swift: string;
  bank_name: string;
  bank_address: string;
  bank_country: {
    code: string;
    name: string;
  };
  account_name: string;
  account_address: string;
  reference: string;
}

export class CoinbaseAccountAPI {
  static readonly URL = {
    COINBASE_ACCOUNT: `/coinbase-accounts`,
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  /**
   * Get a list of your coinbase accounts.
   *
   * @see https://docs.pro.coinbase.com/#coinbase-accounts
   */
  async listAccounts(): Promise<CoinbaseAccount[]> {
    const resource = CoinbaseAccountAPI.URL.COINBASE_ACCOUNT;
    const response = await this.apiClient.get(resource);
    return response.data;
  }
}
