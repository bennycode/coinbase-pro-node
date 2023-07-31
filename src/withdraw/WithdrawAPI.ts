import {z} from 'zod';
import {AxiosInstance} from 'axios';

export interface CryptoWithdrawal {
  amount: string;
  currency: string;
  id: string;
}

export interface PaymentMethodWithdrawal extends CryptoWithdrawal {
  payout_at: string;
}

export interface CryptoWithdrawalRequest {
  add_network_fee_to_total?: boolean;
  amount: string;
  crypto_address: string;
  currency: string;
  destination_tag?: string;
  no_destination_tag?: boolean;
}

export interface CoinbaseAccountWithdrawalRequest {
  amount: string;
  coinbase_account_id: string;
  currency: string;
}

export interface PaymentMethodWithdrawalRequest {
  amount: string;
  currency: string;
  payment_method_id: string;
}

export interface WithdrawalFeeEstimate {
  fee: string;
}

export const PaymentMethodLimitSchema = z.object({
  period_in_days: z.number(),
  remaining: z.object({
    amount: z.string(),
    currency: z.string(),
  }),
  total: z.object({
    amount: z.string(),
    currency: z.string(),
  }),
});

export type PaymentMethodLimit = z.infer<typeof PaymentMethodLimitSchema>;

export const PaymentMethodSchema = z.object({
  allow_buy: z.boolean(),
  allow_deposit: z.boolean(),
  allow_sell: z.boolean(),
  allow_withdraw: z.boolean(),
  created_at: z.string().nullable().or(z.undefined()),
  currency: z.string().nullable().or(z.undefined()),
  fiat_account: z
    .object({
      id: z.string(),
      resource: z.string(),
    })
    .optional(),
  id: z.string(),
  limits: z
    .object({
      buy: z.array(PaymentMethodLimitSchema).optional(),
      deposit: z.array(PaymentMethodLimitSchema).optional(),
      instant_buy: z.array(PaymentMethodLimitSchema).optional(),
      sell: z.array(PaymentMethodLimitSchema).optional(),
    })
    .or(z.object({})),
  name: z.string(),
  primary_buy: z.boolean(),
  primary_sell: z.boolean(),
  resource: z.string().nullable().or(z.undefined()),
  resource_path: z.string().nullable().or(z.undefined()),
  type: z.string(),
  updated_at: z.string().nullable().or(z.undefined()),
});

export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;

export class WithdrawAPI {
  static readonly URL = {
    LIST_PAYMENT_METHODS: '/payment-methods',
    WITHDRAWALS: {
      COINBASE_ACCOUNT: '/withdrawals/coinbase-account',
      CRYPTO: '/withdrawals/crypto',
      FEE_ESTIMATE: '/withdrawals/fee-estimate',
      PAYMENT_METHOD: '/withdrawals/payment-method',
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
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postwithdrawcrypto
   */
  async withdrawToCryptoAddress(
    amount: string,
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
    const response = await this.apiClient.post<CryptoWithdrawal>(resource, withdrawal);
    return response.data;
  }

  /**
   * Withdraw funds to a Coinbase account. You can move funds between your Coinbase accounts and your Coinbase Pro
   * trading accounts within your daily limits.
   *
   * @param amount - The amount to withdraw
   * @param currency - The type of currency
   * @param coinbaseAccountId - ID of the Coinbase or Coinbase Pro account
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postwithdrawcoinbaseaccount
   */
  async withdrawToCoinbaseAccount(
    amount: string,
    currency: string,
    coinbaseAccountId: string
  ): Promise<CryptoWithdrawal> {
    const resource = WithdrawAPI.URL.WITHDRAWALS.COINBASE_ACCOUNT;
    const withdrawal: CoinbaseAccountWithdrawalRequest = {
      amount,
      coinbase_account_id: coinbaseAccountId,
      currency,
    };
    const response = await this.apiClient.post<CryptoWithdrawal>(resource, withdrawal);
    return response.data;
  }

  /**
   * Withdraw funds to a payment method.
   *
   * @param amount - The amount to withdraw
   * @param currency - The type of currency
   * @param paymentMethodId - ID of the payment method
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postwithdrawpaymentmethod
   */
  async withdrawToPaymentMethod(
    amount: string,
    currency: string,
    paymentMethodId: string
  ): Promise<PaymentMethodWithdrawal> {
    const resource = WithdrawAPI.URL.WITHDRAWALS.PAYMENT_METHOD;
    const withdrawal: PaymentMethodWithdrawalRequest = {
      amount,
      currency,
      payment_method_id: paymentMethodId,
    };
    const response = await this.apiClient.post<PaymentMethodWithdrawal>(resource, withdrawal);
    return response.data;
  }

  /**
   * Get the network fee estimate when sending to the given address.
   *
   * @param currency - The type of currency
   * @param cryptoAddress - A crypto address of the recipient
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getwithdrawfeeestimate
   */
  async getFeeEstimate(currency: string, cryptoAddress: string): Promise<WithdrawalFeeEstimate> {
    const resource = WithdrawAPI.URL.WITHDRAWALS.FEE_ESTIMATE;
    const response = await this.apiClient.get<WithdrawalFeeEstimate>(resource, {
      params: {crypto_address: cryptoAddress, currency},
    });
    return response.data;
  }

  /**
   * Get a list of your payment methods.
   *
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getpaymentmethods
   */
  async getPaymentMethods(): Promise<PaymentMethod[]> {
    const resource = WithdrawAPI.URL.LIST_PAYMENT_METHODS;
    const response = await this.apiClient.get<PaymentMethod[]>(resource);
    return z.array(PaymentMethodSchema).parse(response.data);
  }
}
