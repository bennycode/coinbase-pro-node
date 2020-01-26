import nock from 'nock';
import {TimeAPI} from '../time/TimeAPI';
import {NewOrder, OrderAPI, OrderSide, OrderStatus, OrderType, SelfTradePrevention} from './OrderAPI';

describe('OrderAPI', () => {
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
            epoch: now.getTime() / 1000,
            iso: now.toISOString(),
          }),
        ];
      })
      .persist();
  });

  describe('placeOrder', () => {
    it('places market buy orders', async () => {
      nock(global.REST_URL)
        .post(OrderAPI.URL.ORDERS)
        .query(() => true)
        .reply((uri, body) => {
          const newOrder: NewOrder = typeof body === 'string' ? JSON.parse(body) : body;

          return [
            200,
            JSON.stringify({
              created_at: '2019-04-22T20:21:20.897409Z',
              executed_value: '0.0000000000000000',
              fill_fees: '0.0000000000000000',
              filled_size: '0.00000000',
              funds: '207850.8486540300000000',
              id: '8eba9e7b-08d6-4667-90ca-6db445d743c0',
              post_only: false,
              product_id: newOrder.product_id,
              settled: false,
              side: newOrder.side,
              size: '0.10000000',
              status: OrderStatus.PENDING,
              stp: SelfTradePrevention.DECREMENT_AND_CANCEL,
              type: newOrder.type,
            }),
          ];
        });

      const placedOrder = await global.client.rest.order.placeOrder({
        product_id: 'BTC-EUR',
        side: OrderSide.BUY,
        size: '0.1',
        type: OrderType.MARKET,
      });

      expect(placedOrder.size).toBe('0.10000000');
      expect(placedOrder.status).toBe(OrderStatus.PENDING);
    });
  });

  describe('getOpenOrders', () => {
    it('returns list of open orders', async () => {
      nock(global.REST_URL)
        .get(OrderAPI.URL.ORDERS)
        .query(() => true)
        .reply(
          200,
          JSON.stringify([
            {
              created_at: '2019-04-22T20:21:20.897409Z',
              executed_value: '0.0000000000000000',
              fill_fees: '0.0000000000000000',
              filled_size: '0.00000000',
              funds: '207850.8486540300000000',
              id: '8eba9e7b-08d6-4667-90ca-6db445d743c0',
              post_only: false,
              product_id: 'BTC-EUR',
              settled: false,
              side: OrderSide.BUY,
              size: '0.10000000',
              status: OrderStatus.OPEN,
              stp: SelfTradePrevention.DECREMENT_AND_CANCEL,
              type: OrderType.MARKET,
            },
          ])
        );

      const openOrders = await global.client.rest.order.getOpenOrders();

      expect(openOrders.length).toBe(1);
      expect(openOrders[0].status).toBe(OrderStatus.OPEN);
    });
  });

  describe('getOrder', () => {
    it('returns correct order information', async () => {
      nock(global.REST_URL)
        .get(`${OrderAPI.URL.ORDERS}/8eba9e7b-08d6-4667-90ca-6db445d743c1`)
        .query(() => true)
        .reply(
          200,
          JSON.stringify({
            created_at: '2016-12-08T20:09:05.508883Z',
            done_at: '2016-12-08T20:09:05.527Z',
            done_reason: 'filled',
            executed_value: '9.9750556620000000',
            fill_fees: '0.0249376391550000',
            filled_size: '0.01291771',
            funds: '9.9750623400000000',
            id: '8eba9e7b-08d6-4667-90ca-6db445d743c1',
            post_only: false,
            product_id: 'BTC-USD',
            settled: true,
            side: OrderSide.BUY,
            size: '1.00000000',
            specified_funds: '10.0000000000000000',
            status: 'done',
            stp: SelfTradePrevention.DECREMENT_AND_CANCEL,
            type: 'market',
          })
        );

      const order = await global.client.rest.order.getOrder('8eba9e7b-08d6-4667-90ca-6db445d743c1');
      expect(order!.id).toBe('8eba9e7b-08d6-4667-90ca-6db445d743c1');
    });

    it('returns null for 404', async () => {
      nock(global.REST_URL)
        .get(`${OrderAPI.URL.ORDERS}/123`)
        .query(() => true)
        .reply(404);

      const order = await global.client.rest.order.getOrder('123');

      expect(order).toEqual(null);
    });

    it('re-throws errors with status code other than 404', async () => {
      nock(global.REST_URL)
        .get(`${OrderAPI.URL.ORDERS}/123`)
        .query(() => true)
        .reply(500);

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      expectAsync(global.client.rest.order.getOrder('123')).toBeRejected();
    });
  });

  describe('cancelOpenOrders', () => {
    it('correctly deletes all open orders if no productId is passed', async () => {
      nock(global.REST_URL)
        .delete(`${OrderAPI.URL.ORDERS}`)
        .query(() => true)
        .reply(200, ['8eba9e7b-08d6-4667-90ca-6db445d743c1']);

      const canceledOrderIds = await global.client.rest.order.cancelOpenOrders();

      expect(canceledOrderIds).toEqual(['8eba9e7b-08d6-4667-90ca-6db445d743c1']);
    });

    it('correctly deletes all open orders for just the provided productId', async () => {
      nock(global.REST_URL)
        .delete(`${OrderAPI.URL.ORDERS}?product_id=ETH-EUR`)
        .reply(200, ['8eba9e7b-08d6-4667-90ca-6db445d743c1']);

      const canceledOrderIds = await global.client.rest.order.cancelOpenOrders('ETH-EUR');

      expect(canceledOrderIds).toEqual(['8eba9e7b-08d6-4667-90ca-6db445d743c1']);
    });
  });
});
