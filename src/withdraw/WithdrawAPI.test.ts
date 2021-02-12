import nock from 'nock';
import {CryptoWithdrawal, WithdrawalFeeEstimate, WithdrawAPI} from './WithdrawAPI';

describe('WithdrawAPI', () => {
  const currency = 'BTC';
  const cryptoAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';
  const expectedFeeEstimate: WithdrawalFeeEstimate = {fee: '.01'};
  const withdrawalId = 'fake-withdrawal-id-abcd-01234';

  afterAll(() => nock.cleanAll());

  describe('withdrawToCryptoAddress', () => {
    beforeAll(() => {
      nock(global.REST_URL)
        .persist()
        .post(WithdrawAPI.URL.WITHDRAWALS.CRYPTO)
        .reply((_uri, body) => {
          const withdrawal = typeof body === 'string' ? JSON.parse(body) : body;
          const response: CryptoWithdrawal = {
            amount: withdrawal.amount,
            currency: withdrawal.currency,
            id: withdrawalId,
          };
          return [200, JSON.stringify(response)];
        })
        .get(WithdrawAPI.URL.WITHDRAWALS.FEE_ESTIMATE)
        .query({crypto_address: cryptoAddress, currency})
        .reply(200, JSON.stringify(expectedFeeEstimate));
    });

    const amount = '1.23';
    const destinationTag = 'satoshi-nakamoto';

    it('creates a new withdrawal to crypto address', async () => {
      const withdrawal = await global.client.rest.withdraw.withdrawToCryptoAddress(amount, currency, cryptoAddress);
      expect(withdrawal).toEqual({amount, currency, id: withdrawalId});
    });

    it('creates a new withdrawal to crypto address (with destination tag)', async () => {
      const withdrawal = await global.client.rest.withdraw.withdrawToCryptoAddress(
        amount,
        currency,
        cryptoAddress,
        destinationTag
      );
      expect(withdrawal).toEqual({amount, currency, id: withdrawalId});
    });
  });

  describe('withdrawToCoinbaseAccount', () => {
    it('withdraws funds to a Coinbase account', async () => {
      const amount = '10.00';
      const currency = 'BTC';

      nock(global.REST_URL)
        .persist()
        .post(WithdrawAPI.URL.WITHDRAWALS.COINBASE_ACCOUNT)
        .reply(
          200,
          JSON.stringify({
            id: '593533d2-ff31-46e0-b22e-ca754147a96a',
            amount: amount,
            currency: currency,
          })
        );

      const withdrawal = await global.client.rest.withdraw.withdrawToCoinbaseAccount(
        amount,
        currency,
        'c13cd0fc-72ca-55e9-843b-b84ef628c198'
      );
      expect(withdrawal.amount).toBe(amount);
      expect(withdrawal.currency).toBe(currency);
    });
  });

  describe('withdrawToPaymentMethod', () => {
    it('withdraws funds via a selected payment method', async () => {
      const amount = '10.00';
      const currency = 'USD';

      nock(global.REST_URL)
        .persist()
        .post(WithdrawAPI.URL.WITHDRAWALS.PAYMENT_METHOD)
        .reply(
          200,
          JSON.stringify({
            id: '593533d2-ff31-46e0-b22e-ca754147a96a',
            amount: '10.00',
            currency: 'USD',
            payout_at: '2016-08-20T00:31:09Z',
          })
        );

      const withdrawal = await global.client.rest.withdraw.withdrawToPaymentMethod(
        amount,
        currency,
        'bc677162-d934-5f1a-968c-a496b1c1270b'
      );
      expect(withdrawal.amount).toBe(amount);
      expect(withdrawal.currency).toBe(currency);
    });
  });

  describe('getFeeEstimate', () => {
    it('gets a fee estimate', async () => {
      nock(global.REST_URL)
        .persist()
        .get(WithdrawAPI.URL.WITHDRAWALS.FEE_ESTIMATE)
        .query({crypto_address: cryptoAddress, currency})
        .reply(200, JSON.stringify(expectedFeeEstimate));

      const estimate = await global.client.rest.withdraw.getFeeEstimate(currency, cryptoAddress);
      expect(estimate).toEqual(expectedFeeEstimate);
    });
  });

  describe('getPaymentMethods', () => {
    it('gets a list of your payment methods', async () => {
      nock(global.REST_URL)
        .persist()
        .get(WithdrawAPI.URL.LIST_PAYMENT_METHODS)
        .reply(
          200,
          JSON.stringify([
            {
              id: 'bc6d7162-d984-5ffa-963c-a493b1c1370b',
              type: 'ach_bank_account',
              name: 'Bank of America - eBan... ********7134',
              currency: 'USD',
              primary_buy: true,
              primary_sell: true,
              allow_buy: true,
              allow_sell: true,
              allow_deposit: true,
              allow_withdraw: true,
              limits: {
                buy: [
                  {
                    period_in_days: 1,
                    total: {
                      amount: '10000.00',
                      currency: 'USD',
                    },
                    remaining: {
                      amount: '10000.00',
                      currency: 'USD',
                    },
                  },
                ],
                instant_buy: [
                  {
                    period_in_days: 7,
                    total: {
                      amount: '0.00',
                      currency: 'USD',
                    },
                    remaining: {
                      amount: '0.00',
                      currency: 'USD',
                    },
                  },
                ],
                sell: [
                  {
                    period_in_days: 1,
                    total: {
                      amount: '10000.00',
                      currency: 'USD',
                    },
                    remaining: {
                      amount: '10000.00',
                      currency: 'USD',
                    },
                  },
                ],
                deposit: [
                  {
                    period_in_days: 1,
                    total: {
                      amount: '10000.00',
                      currency: 'USD',
                    },
                    remaining: {
                      amount: '10000.00',
                      currency: 'USD',
                    },
                  },
                ],
              },
            },
          ])
        );

      const paymentMethods = await global.client.rest.withdraw.getPaymentMethods();
      expect(paymentMethods[0].limits.instant_buy[0].period_in_days).toBe(7);
    });
  });
});
