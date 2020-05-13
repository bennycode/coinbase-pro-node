import nock from 'nock';
import {WithdrawAPI, CryptoWithdrawal} from './WithdrawAPI';

describe('WithdrawAPI', () => {
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
      });
  });

  describe('postCryptoWithdrawal', () => {
    const amount = 1.23;
    const currency = 'BTC';
    const cryptoAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';
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
});
