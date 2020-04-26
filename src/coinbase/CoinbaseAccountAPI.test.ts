import nock from 'nock';
import {CoinbaseAccountAPI} from './CoinbaseAccountAPI';

describe('CoinbaseAccountAPI', () => {
  describe('listAccounts', () => {
    it('returns the list of the coinbase accounts for a given user', async () => {
      const response = {
        active: true,
        balance: '0.00000000',
        currency: 'ETH',
        id: 'fc3a8a57-7142-542d-8436-95a3d82e1622',
        name: 'ETH Wallet',
        primary: false,
        type: 'wallet',
      };
      nock(global.REST_URL).get(CoinbaseAccountAPI.URL.COINBASE_ACCOUNT).reply(200, response);
      const coinbaseAccounts = await global.client.rest.coinbase.listAccounts;
      expect(coinbaseAccounts).toEqual(response);
    });
  });
});
