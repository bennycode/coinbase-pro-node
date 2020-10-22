import {AxiosInstance} from 'axios';

export interface CryptoWithdrawal {
  amount: number;
  currency: string;
  id: string;
}

interface CryptoWithdrawalRequest {
  add_network_fee_to_total?: boolean;
  amount: number;
  crypto_address: string;
  currency: string;
  destination_tag?: string;
  no_destination_tag?: boolean;
}

interface FeeEstimate {
  fee: string;
}

export class WithdrawAPI {
  static readonly URL = {
    WITHDRAWALS: {
      CRYPTO: '/withdrawals/crypto',
      FEE_ESTIMATE: '/withdrawals/fee-estimate',
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
   * @param addNetworkFeeToTotal - A boolean flag to add the network fee on top of the amount.
   * If this is blank, it will default to deducting the network fee from the amount.
   * @see https://docs.pro.coinbase.com/#crypto
   */
  async postCryptoWithdrawal(
    amount: number,
    currency: string,
    cryptoAddress: string,
    destinationTag?: string,
    addNetworkFeeToTotal?: boolean
  ): Promise<CryptoWithdrawal> {
    const resource = WithdrawAPI.URL.WITHDRAWALS.CRYPTO;
    const withdrawal: CryptoWithdrawalRequest = {
      add_network_fee_to_total: addNetworkFeeToTotal,
      amount,
      crypto_address: cryptoAddress,
      currency,
    };
    if (destinationTag) {
      withdrawal.destination_tag = destinationTag;
    } else {
      withdrawal.no_destination_tag = true;
    }
    const response = await this.apiClient.post(resource, withdrawal);
    return response.data;
  }

  /**
   * Gets the network fee estimate when sending to the given address.
   *
   * @param currency - The type of currency
   * @param cryptoAddress - A crypto address of the recipient
   * @see https://docs.pro.coinbase.com//#fee-estimate
   */
  async getFeeEstimate(currency: string, cryptoAddress: string): Promise<FeeEstimate> {
    const resource = WithdrawAPI.URL.WITHDRAWALS.FEE_ESTIMATE;
    const response = await this.apiClient.get<FeeEstimate>(resource, {
      params: {crypto_address: cryptoAddress, currency},
    });
    return response.data;
  }
}
