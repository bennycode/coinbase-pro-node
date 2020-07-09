import nock from 'nock';
import {Candle, CandleGranularity, OrderBookLevel, ProductAPI, ProductEvent} from '.';
import Level1OrderBookBTCEUR from '../test/fixtures/rest/products/BTC-EUR/book/level-1.json';
import Level2OrderBookBTCEUR from '../test/fixtures/rest/products/BTC-EUR/book/level-2.json';
import Level2OrderBookBTCUSD from '../test/fixtures/rest/products/BTC-USD/book/level-2.json';
import Level3OrderBookBTCUSD from '../test/fixtures/rest/products/BTC-USD/book/level-3.json';
import TradesBTCEUR from '../test/fixtures/rest/products/BTC-EUR/trades/GET-200.json';
import CandlesBTCUSD from '../test/fixtures/rest/products/BTC-USD/candles/GET-200.json';
import FirstCandleBatch from '../test/fixtures/rest/products/BTC-USD/candles/2020-03-20-00-00.json';
import SecondCandleBatch from '../test/fixtures/rest/products/BTC-USD/candles/2020-03-20-05-00.json';

describe('ProductAPI', () => {
  afterEach(() => nock.cleanAll());

  describe('getProducts', () => {
    it('returns list of products', async () => {
      nock(global.REST_URL)
        .get(ProductAPI.URL.PRODUCTS)
        .query(true)
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

  describe('getTrades', () => {
    it('lists the latest public trades for a product', async () => {
      const productId = 'BTC-EUR';
      nock(global.REST_URL)
        .get(`${ProductAPI.URL.PRODUCTS}/${productId}/trades`)
        .reply(200, JSON.stringify(TradesBTCEUR));
      const trades = await global.client.rest.product.getTrades(productId);
      expect(trades.data.length).toBe(100);
    });
  });

  describe('getProductOrderBook', () => {
    it('lists only the best bid and ask by default', async () => {
      const productId = 'BTC-EUR';
      nock(global.REST_URL)
        .get(`${ProductAPI.URL.PRODUCTS}/${productId}/book?level=1`)
        .reply(200, JSON.stringify(Level1OrderBookBTCEUR));

      const orderBook = await global.client.rest.product.getProductOrderBook(productId);
      expect(orderBook.asks.length).toBe(1);
      expect(orderBook.bids.length).toBe(1);
    });

    it('lists up to 50 bids and asks with a depth of level 2', async () => {
      nock(global.REST_URL)
        .get(`${ProductAPI.URL.PRODUCTS}/BTC-USD/book?level=2`)
        .reply(200, JSON.stringify(Level2OrderBookBTCUSD));

      nock(global.REST_URL)
        .get(`${ProductAPI.URL.PRODUCTS}/BTC-EUR/book?level=2`)
        .reply(200, JSON.stringify(Level2OrderBookBTCEUR));

      const orderBookBTCUSD = await global.client.rest.product.getProductOrderBook('BTC-USD', {
        level: OrderBookLevel.TOP_50_BIDS_AND_ASKS,
      });
      expect(orderBookBTCUSD.asks.length).toBe(50);
      expect(orderBookBTCUSD.bids.length).toBe(50);

      const orderBookBTCEUR = await global.client.rest.product.getProductOrderBook('BTC-EUR', {
        level: OrderBookLevel.TOP_50_BIDS_AND_ASKS,
      });
      expect(orderBookBTCEUR.asks.length).toBe(1);
      expect(orderBookBTCEUR.bids.length).toBe(36);
    });

    it('lists the full order book with a depth of level 3', async () => {
      const productId = 'BTC-USD';
      const level = OrderBookLevel.FULL_ORDER_BOOK;

      nock(global.REST_URL)
        .get(`${ProductAPI.URL.PRODUCTS}/${productId}/book?level=${level}`)
        .reply(200, JSON.stringify(Level3OrderBookBTCUSD));

      const orderBook = await global.client.rest.product.getProductOrderBook(productId, {level});
      expect(orderBook.asks.length).toBe(60);
      expect(orderBook.bids.length).toBe(877);
    });
  });

  describe('getProductTicker', () => {
    it('returns ticker information', async () => {
      nock(global.REST_URL)
        .get(`${ProductAPI.URL.PRODUCTS}/BTC-USD/ticker`)
        .query(true)
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
        .query(true)
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
    it('returns the latest candles when not giving any parameters', async () => {
      nock(global.REST_URL)
        .get(`${ProductAPI.URL.PRODUCTS}/BTC-USD/candles`)
        .query(() => true)
        .reply(200, [
          [1558261140, 8089.99, 8101.7, 8101.7, 8099.68, 14.62],
          [1558261200, 8099.52, 8129.9, 8099.52, 8109.66, 12.16],
          [1558261260, 8109.88, 8109.88, 8109.88, 8109.88, 0.038],
        ]);

      const candles = await global.client.rest.product.getCandles('BTC-USD', {
        granularity: CandleGranularity.ONE_MINUTE,
      });

      expect(candles.length).toEqual(3);
      expect(candles[0].openTimeInMillis).toEqual(1558261140000);
      expect(candles[1].openTimeInMillis).toEqual(1558261200000);
      expect(candles[2].openTimeInMillis).toEqual(1558261260000);
      expect(candles[2].sizeInMillis).toEqual(60000);
    });

    it('sorts candles ascending by timestamp', async () => {
      const from = '2020-03-09T00:00:00.000Z';
      const to = '2020-03-15T23:59:59.999Z';
      const productId = 'BTC-USD';

      nock(global.REST_URL)
        .get(`${ProductAPI.URL.PRODUCTS}/${productId}/candles`)
        .query(true)
        .reply(() => {
          const min = new Date(from).getTime();
          const max = new Date(to).getTime();
          // Note: Fixture test set is larger than the requested time slice, so we have to filter:
          const data = CandlesBTCUSD.filter(candle => {
            const [time] = candle;
            const timeInMillis = time * 1000;
            return timeInMillis >= min && timeInMillis <= max;
          });
          return [200, JSON.stringify(data)];
        });

      const candles = await global.client.rest.product.getCandles(productId, {
        end: to,
        granularity: CandleGranularity.ONE_HOUR,
        start: from,
      });

      const firstCandle = candles[0];

      expect(candles.length).withContext('7 days * 24 hours = 168 hours / candles').toBe(168);
      expect(firstCandle.sizeInMillis).withContext('Candle size').toBe(3600000);
      expect(firstCandle.base).withContext('Base asset').toBe('BTC');
      expect(firstCandle.counter).withContext('Quote asset').toBe('USD');
      expect(firstCandle.productId).withContext('Product ID').toBe(productId);
      expect(firstCandle.openTimeInISO).withContext('Starting time of first time slice').toBe(from);
      expect(candles[candles.length - 1].openTimeInISO)
        .withContext('Starting time of last time slice')
        .toBe('2020-03-15T23:00:00.000Z');
    });

    it('makes multiple requests when the selection of start/end time and granularity will result in more than 300 data points', async () => {
      const from = '2020-03-20T00:00:00.000Z';
      const to = '2020-03-20T09:59:59.999Z';

      nock(global.REST_URL)
        .persist()
        .get(`${ProductAPI.URL.PRODUCTS}/BTC-USD/candles`)
        .query(true)
        .reply(uri => {
          if (uri.includes('start=2020-03-20T00:00:00.000Z')) {
            return [200, JSON.stringify(FirstCandleBatch)];
          } else if (uri.includes('start=2020-03-20T05:00:00.000Z')) {
            return [200, JSON.stringify(SecondCandleBatch)];
          }
          return [500];
        });

      const candles = await global.client.rest.product.getCandles('BTC-USD', {
        end: to,
        granularity: CandleGranularity.ONE_MINUTE,
        start: from,
      });

      expect(candles.length).withContext('10 hours are 600 minutes').toBe(600);
    });
  });

  describe('watchCandles', () => {
    beforeEach(() => jasmine.clock().install());

    afterEach(() => jasmine.clock().uninstall());

    it('starts an interval to check for new candles', async () => {
      const productId = 'BTC-USD';
      const granularity = CandleGranularity.ONE_HOUR;
      const updateInterval = 60000;

      nock(global.REST_URL)
        .get(`${ProductAPI.URL.PRODUCTS}/${productId}/candles`)
        .query(true)
        .reply(200, JSON.stringify(CandlesBTCUSD));

      const spy = spyOn<any>(global.client.rest.product, 'checkNewCandles').and.callThrough();

      global.client.rest.product.watchCandles(productId, granularity, '2020-03-08T23:00:00.000Z');

      jasmine.clock().tick(updateInterval);
      expect(spy).toHaveBeenCalledWith(productId, granularity);
    });

    it('throws an error when trying to watch a candle setup multiple times', async done => {
      const productId = 'BTC-USD';
      const granularity = CandleGranularity.ONE_HOUR;

      nock(global.REST_URL)
        .get(`${ProductAPI.URL.PRODUCTS}/${productId}/candles`)
        .query(true)
        .reply(200, JSON.stringify(CandlesBTCUSD));

      global.client.rest.product.watchCandles(productId, granularity, '2020-03-08T23:00:00.000Z');
      try {
        global.client.rest.product.watchCandles(productId, granularity, '2020-03-08T23:00:00.000Z');
        done.fail('No error has been thrown');
      } catch (error) {
        done();
      }
    });

    it('emits new candles', async done => {
      const productId = 'BTC-USD';
      const granularity = CandleGranularity.ONE_HOUR;
      const updateInterval = 60000;
      const expectedISO = '2020-03-09T00:00:00.000Z';

      const responses = [JSON.stringify([]), JSON.stringify(CandlesBTCUSD)];

      nock(global.REST_URL)
        .persist(true)
        .get(`${ProductAPI.URL.PRODUCTS}/${productId}/candles`)
        .query(true)
        .reply(() => [200, responses.shift()]);

      global.client.rest.on(
        ProductEvent.NEW_CANDLE,
        (emittedProductId: string, emittedGranularity: CandleGranularity, candle: Candle) => {
          expect(emittedProductId).toBe(productId);
          expect(emittedGranularity).toBe(granularity);
          const {openTimeInISO} = candle;
          if (openTimeInISO === expectedISO) {
            done();
          } else {
            fail(`Received "${openTimeInISO}" but expected "${expectedISO}".`);
          }
        }
      );

      global.client.rest.product.watchCandles(productId, granularity, '2020-03-08T23:00:00.000Z');

      jasmine.clock().tick(updateInterval);
      jasmine.clock().tick(updateInterval);
    });
  });

  describe('unwatchCandles', () => {
    it('removes running candle watching intervals', async () => {
      const productId = 'BTC-USD';

      nock(global.REST_URL)
        .persist(true)
        .get(`${ProductAPI.URL.PRODUCTS}/${productId}/candles`)
        .query(true)
        .reply(200, JSON.stringify(CandlesBTCUSD));

      global.client.rest.product.watchCandles(productId, CandleGranularity.ONE_HOUR, '2020-03-08T23:00:00.000Z');
      global.client.rest.product.watchCandles(productId, CandleGranularity.SIX_HOURS, '2020-03-09T00:00:00.000Z');
      global.client.rest.product.unwatchCandles(productId, CandleGranularity.ONE_HOUR);
      global.client.rest.product.unwatchCandles(productId, CandleGranularity.SIX_HOURS);
    });
  });
});
