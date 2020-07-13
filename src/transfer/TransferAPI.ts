import {AxiosInstance} from 'axios';
import {Pagination} from '../payload/common';

export type TransferInformation = {
  account_id: string;
  amount: string;
  canceled_at?: string;
  completed_at?: string;
  created_at: string;
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
  processed_at?: string;
  type: string;
  user_id: string;
  user_nonce?: string;
};

export class TransferAPI {
  static readonly URL = {
    TRANSFERS: `/transfers`,
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  /**
   * Get a list of deposits/withdrawals from the profile of the API key, in descending order by created time.
   * See the Pagination section for retrieving additional entries after the first page.
   *
   * @param pagination - Pagination field
   * @see https://docs.pro.coinbase.com/#list-deposits
   * @see https://docs.pro.coinbase.com/#list-withdrawals
   */

  async getTransfers(
    transferType: string,
    profileId?: string,
    pagination?: Pagination
  ): Promise<{data: TransferInformation[]; pagination: {after?: string; before?: string}}> {
    const resource = TransferAPI.URL.TRANSFERS;
    const response = await this.apiClient.get<TransferInformation[]>(resource, {
      params: {
        ...pagination,
        profile_id: profileId ? profileId : null,
        type: transferType,
      },
    });
    return {
      data: response.data,
      pagination: {
        after: response.headers['cb-after'],
        before: response.headers['cb-before'],
      },
    };
  }
}
