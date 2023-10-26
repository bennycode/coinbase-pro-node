import nock from 'nock';
import getExchangeRates from '../test/fixtures/rest/v2/exchange-rates/GET-200.json' assert {type: 'json'};
import getExchangeRatesEUR from '../test/fixtures/rest/v2/exchange-rates/GET-200-EUR.json' assert {type: 'json'};
import {ExchangeRateAPI} from './ExchangeRateAPI.js';

describe('ExchangeRateAPI', () => {
  afterEach(() => nock.cleanAll());

  beforeEach(() => {
    nock.cleanAll();
  });

  describe('getExchangeRates', () => {
    it('returns the exchange rates based on USD by default', async () => {
      nock('https://api.coinbase.com')
        .get(ExchangeRateAPI.URL.V2_EXCHANGE_RATES)
        .query({currency: 'USD'})
        .reply(200, JSON.stringify(getExchangeRates));

      const rates = await global.client.rest.exchangeRate.getExchangeRates();
      expect(rates.currency).toBe('USD');
      expect(rates.rates['EUR']).toBe('1.0208');
    });

    it('returns the exchange rates for a specific currency', async () => {
      nock('https://api.coinbase.com')
        .get(ExchangeRateAPI.URL.V2_EXCHANGE_RATES)
        .query({currency: 'EUR'})
        .reply(200, JSON.stringify(getExchangeRatesEUR));

      const rates = await global.client.rest.exchangeRate.getExchangeRates('EUR');
      expect(rates.currency).toBe('EUR');
      expect(rates.rates['IOTX']).toBe('29.4767870302137067');
    });
  });
});
