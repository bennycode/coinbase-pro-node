import nock from 'nock';

describe('FeeAPI', () => {
  describe('getCurrentFees', () => {
    it('returns maker & taker fee rates', async () => {
      const response = {
        maker_fee_rate: '0.0050',
        taker_fee_rate: '0.0050',
        usd_volume: null,
      };
      nock(global.REST_URL).get('/fees').reply(200, response);
      const canceledOrderIds = await global.client.rest.fee.getCurrentFees();
      expect(canceledOrderIds).toEqual(response);
    });
  });
});
