import {AxiosInstance} from 'axios';
import {ISO_8601_MS_UTC, PaginatedData, Pagination} from '../payload/common';

export interface Account {
  available: string;
  balance: string;
  currency: string;
  hold: string;
  id: string;
  profile_id: string;
}

export interface AccountHistory {
  amount: string;
  balance: string;
  created_at: ISO_8601_MS_UTC;
  details: AccountHistoryDetails;
  id: string;
  type: string;
}

export interface AccountHistoryDetails {
  order_id: string;
  product_id: string;
  trade_id: string;
}

export interface Hold {
  account_id: string;
  amount: string;
  created_at: ISO_8601_MS_UTC;
  id: string;
  ref: string;
  type: string;
  updated_at: ISO_8601_MS_UTC;
}

export enum AccountType {
  FIAT = 'fiat',
  WALLET = 'wallet',
}

export interface CoinbaseAccount {
  active: boolean;
  available_on_consumer?: true;
  balance: string;
  currency: string;
  destination_tag_name?: string;
  destination_tag_regex?: string;
  hold_balance?: string;
  hold_currency?: string;
  id: string;
  name: string;
  primary: boolean;
  sepa_deposit_information?: SEPADepositInformation;
  type: AccountType;
  wire_deposit_information?: WireDepositInformation;
}

export interface GeneratedAddress {
  address: string;
  address_info: AddressInfo;
  callback_url?: string;
  created_at: Date;
  deposit_uri?: string;
  destination_tag?: string;
  exchange_deposit_address: boolean;
  id: string;
  legacy_address?: string;
  name: string;
  network: string;
  resource: string;
  resource_path: string;
  updated_at: Date;
  uri_scheme: string;
  warnings: Warning[];
}

export interface AddressInfo {
  address: string;
  destination_tag?: string;
}

export interface Warning {
  details: string;
  image_url: string;
  title: string;
}

export interface WireDepositInformation {
  account_address: string;
  account_name: string;
  account_number: string;
  bank_address: string;
  bank_country: {
    code: string;
    name: string;
  };
  bank_name: string;
  reference: string;
  routing_number: string;
}

export interface SEPADepositInformation {
  account_address: string;
  account_name: string;
  bank_address: string;
  bank_country: {
    code: string;
    name: string;
  };
  bank_name: string;
  iban: string;
  reference: string;
  swift: string;
}

export class AccountAPI {
  static readonly URL = {
    ACCOUNTS: `/accounts`,
    COINBASE_ACCOUNT: `/coinbase-accounts`,
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  /**
   * Get information for a single account. API key must belong to the same profile as the account.
   *
   * @param accountId - Account ID belonging to the API key’s profile
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getaccount
   */
  async getAccount(accountId: string): Promise<Account> {
    const resource = `${AccountAPI.URL.ACCOUNTS}/${accountId}`;
    const response = await this.apiClient.get<Account>(resource);
    return response.data;
  }

  /**
   * List account activity of the API key’s profile. Account activity either increases or decreases your account
   * balance. Items are paginated and sorted latest first.
   *
   * @param accountId - Account ID belonging to the API key’s profile
   * @param pagination - Pagination field
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getaccountledger
   */
  async getAccountHistory(accountId: string, pagination?: Pagination): Promise<PaginatedData<AccountHistory>> {
    const resource = `${AccountAPI.URL.ACCOUNTS}/${accountId}/ledger`;
    const response = await this.apiClient.get<AccountHistory[]>(resource, {params: pagination});
    return {
      data: response.data,
      pagination: {
        after: response.headers['cb-after'],
        before: response.headers['cb-before'],
      },
    };
  }

  /**
   * List holds of an account that belong to the same profile as the API key. Holds are placed on an account for any
   * active orders or pending withdraw requests. As an order is filled, the hold amount is updated. If an order is
   * canceled, any remaining hold is removed. For a withdraw, once it is completed, the hold is removed.
   *
   * @param accountId - Account ID belonging to the API key’s profile
   * @param pagination - Pagination field
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getaccountholds
   */
  async getHolds(accountId: string, pagination?: Pagination): Promise<PaginatedData<Hold>> {
    const resource = `${AccountAPI.URL.ACCOUNTS}/${accountId}/holds`;
    const response = await this.apiClient.get<Hold[]>(resource, {params: pagination});
    return {
      data: response.data,
      pagination: {
        after: response.headers['cb-after'],
        before: response.headers['cb-before'],
      },
    };
  }

  /**
   * Get a list of trading accounts from the profile of the API key.
   *
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getaccounts
   */
  async listAccounts(): Promise<Account[]> {
    const resource = AccountAPI.URL.ACCOUNTS;
    const response = await this.apiClient.get<Account[]>(resource);
    return response.data;
  }

  /**
   * Get a list of your coinbase accounts.
   *
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getcoinbaseaccounts
   */
  async listCoinbaseAccounts(): Promise<CoinbaseAccount[]> {
    const resource = AccountAPI.URL.COINBASE_ACCOUNT;
    const response = await this.apiClient.get<CoinbaseAccount[]>(resource);
    return response.data;
  }

  /**
   * Generate a new deposit address for a given account.
   *
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postcoinbaseaccountaddresses
   */
  async generateDepositAddress(accountId: string): Promise<GeneratedAddress> {
    const resource = `${AccountAPI.URL.COINBASE_ACCOUNT}/${accountId}/addresses`;
    const response = await this.apiClient.post<GeneratedAddress>(resource);
    return response.data;
  }
}
