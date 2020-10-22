import nock from 'nock';
import {WithdrawAPI, CryptoWithdrawal, WithdrawalFeeEstimate} from './WithdrawAPI';

describe('WithdrawAPI', () => {
  const currency = 'BTC';
  const cryptoAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';
  const expectedFeeEstimate: WithdrawalFeeEstimate = {fee: '.01'};
  const withdrawalId = 'fake-withdrawal-id-abcd-01234';

  afterAll(() => nock.cleanAll());

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
      .query({currency, crypto_address: cryptoAddress})
      .reply(200, JSON.stringify(expectedFeeEstimate));
  });

  describe('postCryptoWithdrawal', () => {
    const amount = 1.23;
    const destinationTag = 'satoshi-nakamoto';

    it('creates a new withdrawal to crypto address', async () => {
      const withdrawal = await global.client.rest.withdraw.postCryptoWithdrawal(amount, currency, cryptoAddress);
      expect(withdrawal).toEqual({amount, currency, id: withdrawalId});
    });

    it('creates a new withdrawal to crypto address (with destination tag)', async () => {
      const withdrawal = await global.client.rest.withdraw.postCryptoWithdrawal(
        amount,
        currency,
        cryptoAddress,
        destinationTag
      );
      expect(withdrawal).toEqual({amount, currency, id: withdrawalId});
    });
  });

  describe('getFeeEstimate', () => {
    it('gets a fee estimate', async () => {
      const estimate = await global.client.rest.withdraw.getFeeEstimate(currency, cryptoAddress);
      expect(estimate).toEqual(expectedFeeEstimate);
    });
  });
});
