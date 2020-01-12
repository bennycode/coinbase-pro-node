/// <reference types="../test/typings/global" />
import nock = require('nock');
import {TimeAPI} from '../time/TimeAPI';
import {ProductAPI} from './ProductAPI';

describe('ProductAPI', () => {
  afterAll(() => nock.cleanAll());

  beforeAll(() => {
    nock(global.REST_URL)
      .get(TimeAPI.URL.TIME)
      .query(() => true)
      .reply(() => {
        const now = new Date();
        return [
          200,
          JSON.stringify({
            epoch: now.getTime() * 1000,
            iso: now.toISOString(),
          }),
        ];
      })
      .persist();
  });

  describe('getProducts', () => {
    it('returns list of products', async () => {
      nock(global.REST_URL)
        .get(ProductAPI.URL.PRODUCTS)
        .query(() => true)
        .reply(
          200,
          JSON.stringify([
            {
              base_currency: 'BTC',
              base_increment: '0.00000001',
              base_max_size: '200',
              base_min_size: '0.001',
              cancel_only: false,
              display_name: 'BTC/EUR',
              id: 'BTC-EUR',
              limit_only: false,
              margin_enabled: false,
              max_market_funds: '600000',
              min_market_funds: '10',
              post_only: false,
              quote_currency: 'EUR',
              quote_increment: '0.01',
              status: 'online',
              status_message: '',
            },
            {
              base_currency: 'XRP',
              base_increment: '1',
              base_max_size: '500000',
              base_min_size: '1',
              cancel_only: false,
              display_name: 'XRP/USD',
              id: 'XRP-USD',
              limit_only: false,
              margin_enabled: false,
              max_market_funds: '100000',
              min_market_funds: '10',
              post_only: false,
              quote_currency: 'USD',
              quote_increment: '0.0001',
              status: 'online',
              status_message: '',
            },
          ])
        );

      const products = await global.client.rest.product.getProducts();

      expect(products.length).toBe(2);
      expect(products[0].id).toBe('BTC-EUR');
      expect(products[1].id).toBe('XRP-USD');
    });
  });

  describe('getProductTicker', () => {
    it('returns ticker information', async () => {
      nock(global.REST_URL)
        .get(`${ProductAPI.URL.PRODUCTS}/BTC-USD/ticker`)
        .query(() => true)
        .reply(
          200,
          JSON.stringify({
            ask: '8092.04',
            bid: '8090.99',
            price: '8092.78000000',
            size: '0.07131466',
            time: '2019-05-19T10:13:55.895Z',
            trade_id: 64378404,
            volume: '16915.34524427',
          })
        );

      const ticker = await global.client.rest.product.getProductTicker('BTC-USD');

      expect(ticker.trade_id).toBeDefined();
      expect(ticker.price).toBe('8092.78000000');
    });
  });

  describe('getProductStats', () => {
    it('returns correct product stats', async () => {
      nock(global.REST_URL)
        .get(`${ProductAPI.URL.PRODUCTS}/BTC-USD/stats`)
        .query(() => true)
        .reply(
          200,
          JSON.stringify({
            high: '8139.00000000',
            last: '8137.06000000',
            low: '7215.61000000',
            open: '7277.79000000',
            volume: '16921.40292722',
            volume_30day: '529555.64078247',
          })
        );

      const stats = await global.client.rest.product.getProductStats('BTC-USD');
      expect(stats.open).toBe('7277.79000000');
      expect(stats.volume).toBe('16921.40292722');
    });
  });

  describe('getCandles', () => {
    it('correctly returns candle objects', async () => {
      nock(global.REST_URL)
        .get(`${ProductAPI.URL.PRODUCTS}/BTC-USD/candles`)
        .query(() => true)
        .reply(200, [
          [1558261260, 8109.88, 8109.88, 8109.88, 8109.88, 0.038],
          [1558261200, 8099.52, 8129.9, 8099.52, 8109.66, 12.16],
          [1558261140, 8089.99, 8101.7, 8101.7, 8099.68, 14.62],
        ]);

      const candles = await global.client.rest.product.getCandles('BTC-USD');

      expect(candles.length).toEqual(3);
      expect(candles[0].time).toEqual(1558261260);
      expect(candles[1].time).toEqual(1558261200);
      expect(candles[2].time).toEqual(1558261140);
    });
  });
});
