import {AxiosInstance} from 'axios';

export interface CryptoWithdrawal {
  amount: number;
  currency: string;
  id: string;
}

export class WithdrawAPI {
  static readonly URL = {
    WITHDRAWALS: {
      CRYPTO: '/withdrawals/crypto',
    },
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  /**
   * Withdraws funds to a crypto address.
   *
   * @param amount - The amount to withdraw
   * @param currency - The type of currency
   * @param cryptoAddress - A crypto address of the recipient
   * @param destinationTag - A destination tag for currencies that support one
   * @see https://docs.pro.coinbase.com/#crypto
   */
  async postCryptoWithdrawal(
    amount: number,
    currency: string,
    cryptoAddress: string,
    destinationTag?: string
  ): Promise<CryptoWithdrawal> {
    const resource = WithdrawAPI.URL.WITHDRAWALS.CRYPTO;
    const withdrawal: any = {amount, crypto_address: cryptoAddress, currency};
    if (destinationTag) {
      withdrawal.destination_tag = destinationTag;
    } else {
      withdrawal.no_destination_tag = true;
    }
    const response = await this.apiClient.post(resource, withdrawal);
    return response.data;
  }
}
