import {z} from 'zod';
import {AxiosInstance} from 'axios';
import {PaginatedData, Pagination} from '../payload/common.js';
import querystring from 'querystring';

export enum TransferType {
  DEPOSIT = 'deposit',
  INTERNAL_DEPOSIT = 'internal_deposit',
  INTERNAL_WITHDRAW = 'internal_withdraw',
  WITHDRAW = 'withdraw',
}

export const TransferInformationSchema = z.object({
  account_id: z.string(),
  amount: z.string(),
  canceled_at: z.string().nullable().or(z.undefined()),
  completed_at: z.string().nullable().or(z.undefined()),
  created_at: z.string(),
  currency: z.string().nullable().or(z.undefined()),
  details: z.object({
    coinbase_account_id: z.string().nullable().or(z.undefined()),
    coinbase_payment_method_id: z.string().nullable().or(z.undefined()),
    coinbase_transaction_id: z.string().nullable().or(z.undefined()),
    coinbase_withdrawal_id: z.string().nullable().or(z.undefined()),
    crypto_address: z.string().nullable().or(z.undefined()),
    crypto_transaction_hash: z.string().nullable().or(z.undefined()),
    crypto_transaction_id: z.string().nullable().or(z.undefined()),
    destination_tag: z.string().nullable().or(z.undefined()),
    destination_tag_name: z.string().nullable().or(z.undefined()),
    sent_to_address: z.string().nullable().or(z.undefined()),
    tx_service_transaction_id: z.string().optional(),
  }),
  id: z.string(),
  idem: z.string().nullable().or(z.undefined()),
  processed_at: z.string().nullable().or(z.undefined()),
  profile_id: z.string().nullable().or(z.undefined()),
  type: z.nativeEnum(TransferType),
  user_id: z.string(),
  user_nonce: z.string().nullable().or(z.undefined()),
});

export type TransferInformation = z.infer<typeof TransferInformationSchema>;

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

    z.array(TransferInformationSchema).parse(response.data);

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
    return TransferInformationSchema.parse(response.data);
  }
}
