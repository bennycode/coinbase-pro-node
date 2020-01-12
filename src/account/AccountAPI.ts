import {AxiosInstance} from 'axios';

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
  created_at: string;
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
  created_at: string;
  id: string;
  ref: string;
  type: string;
  updated_at: string;
}

export class AccountAPI {
  static readonly URL = {
    ACCOUNTS: `/accounts`,
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  // https://docs.pro.coinbase.com/#get-an-account
  async getAccount(accountId: string): Promise<Account> {
    const resource = [AccountAPI.URL.ACCOUNTS, accountId].join('/');
    const response = await this.apiClient.get<Account>(resource);
    return response.data;
  }

  // https://docs.pro.coinbase.com/#get-account-history
  // TODO: Implement Pagination: https://docs.pro.coinbase.com/#pagination
  async getAccountHistory(accountId: string): Promise<AccountHistory[]> {
    const resource = [AccountAPI.URL.ACCOUNTS, accountId, 'ledger'].join('/');
    const response = await this.apiClient.get<AccountHistory[]>(resource);
    return response.data;
  }

  // https://docs.pro.coinbase.com/#get-holds
  async getHolds(accountId: string): Promise<Hold[]> {
    const resource = [AccountAPI.URL.ACCOUNTS, accountId, 'holds'].join('/');
    const response = await this.apiClient.get<Hold[]>(resource);
    return response.data;
  }

  // https://docs.pro.coinbase.com/#list-accounts
  async listAccounts(): Promise<Account[]> {
    const resource = AccountAPI.URL.ACCOUNTS;
    const response = await this.apiClient.get<Account[]>(resource);
    return response.data;
  }
}
