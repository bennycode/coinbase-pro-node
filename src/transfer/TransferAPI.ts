import {AxiosInstance} from 'axios';
import {ISO_8601_MS_UTC, PaginatedData, Pagination} from '../payload/common';
import querystring from 'querystring';

export interface TransferInformation {
  account_id: string;
  amount: string;
  canceled_at?: ISO_8601_MS_UTC;
  completed_at?: ISO_8601_MS_UTC;
  created_at: ISO_8601_MS_UTC;
  details: {
    coinbase_account_id?: string;
    coinbase_payment_method_id?: string;
    coinbase_transaction_id?: string;
    coinbase_withdrawal_id?: string;
    crypto_address?: string;
    crypto_transaction_hash?: string;
    crypto_transaction_id?: string;
    destination_tag: string;
    destination_tag_name?: string;
    sent_to_address?: string;
  };
  id: string;
  processed_at?: ISO_8601_MS_UTC;
  type: string;
  user_id: string;
  user_nonce?: string;
}

export enum TransferType {
  DEPOSIT = 'deposit',
  INTERNAL_DEPOSIT = 'internal_deposit',
  INTERNAL_WITHDRAW = 'internal_withdraw',
  WITHDRAW = 'withdraw',
}

export class TransferAPI {
  static readonly URL = {
    TRANSFERS: `/transfers`,
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  /**
   * Get a list of deposits/withdrawals from the profile of the API key, in descending order by created time.
   *
   * @param pagination - Pagination field
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_gettransfers
   */
  async getTransfers(
    transferType: TransferType,
    profileId?: string,
    pagination?: Pagination
  ): Promise<PaginatedData<TransferInformation>> {
    const resource = TransferAPI.URL.TRANSFERS;
    const params: Pagination & {
      profile_id?: string;
      type: TransferType;
    } = {
      ...pagination,
      type: transferType,
    };
    if (profileId) {
      params.profile_id = profileId;
    }
    const response = await this.apiClient.get<TransferInformation[]>(resource, {
      params,
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
   * Get information on a single deposit/withdrawal.
   *
   * @param transferId - id of the requested resource
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_gettransfer
   */
  async getTransfer(transferId: string): Promise<TransferInformation> {
    const resource = `${TransferAPI.URL.TRANSFERS}/${transferId}`;
    const response = await this.apiClient.get<TransferInformation>(resource);
    return response.data;
  }
}
