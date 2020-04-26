import nock from 'nock';
import {CurrencyAPI} from './CurrencyAPI';

describe('CurrencyAPI', () => {
  afterEach(() => nock.cleanAll());

  describe('listCurrencies', () => {
    it('list available currencies', async () => {
      nock(global.REST_URL)
        .get(CurrencyAPI.URL.CURRENCIES)
        .query(true)
        .reply(
          200,
          JSON.stringify([
            {
              id: 'BTC',
              min_size: 0.00000001,
              name: 'Bitcoin',
            },
          ])
        );

      const currencies = await global.client.rest.currencies.listCurrencies();

      expect(currencies.length).toBe(1);
      expect(currencies[0].id).toBe('BTC');
    });
  });
});
