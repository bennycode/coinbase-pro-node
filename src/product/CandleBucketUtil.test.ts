import {CandleBucketUtil, CandleGranularity} from '.';

describe('CandleBucketUtil', () => {
  describe('expectedBuckets', () => {
    it('calculates the amount of required candles for a week', () => {
      const fromInMillis = new Date('2020-02-03T00:00:00.000Z').getTime();
      const toInMillis = new Date('2020-02-10T00:00:00.000Z').getTime();
      const candleSizeInMillis = CandleGranularity.ONE_DAY * 1000;

      const candles = CandleBucketUtil.expectedBuckets(fromInMillis, toInMillis, candleSizeInMillis);

      expect(candles).toBe(7);
    });

    it('calculates the amount of required candles for a year', () => {
      const fromInMillis = new Date('2019-01-01T00:00:00.000Z').getTime();
      const toInMillis = new Date('2020-01-01T00:00:00.000Z').getTime();
      const candleSizeInMillis = CandleGranularity.ONE_DAY * 1000;

      const candles = CandleBucketUtil.expectedBuckets(fromInMillis, toInMillis, candleSizeInMillis);

      expect(candles).toBe(365);
    });
  });

  describe('getBucketsInMillis', () => {
    it('returns the intervals in milliseconds if historic rates API requests must be batched', () => {
      const expected = [1546300800000, 1572220799999, 1572220800000, 1577836800000];

      const fromInMillis = new Date('2019-01-01T00:00:00.000Z').getTime();
      const toInMillis = new Date('2020-01-01T00:00:00.000Z').getTime();
      const candleSizeInMillis = CandleGranularity.ONE_DAY * 1000;

      const actual = CandleBucketUtil.getBucketsInMillis(fromInMillis, toInMillis, candleSizeInMillis);

      expect(actual).toEqual(expected);
    });
  });

  describe('getBucketsInISO', () => {
    it('converts millisecond buckets into ISO string buckets', () => {
      const bucketsInMillis = [1546300800000, 1572220799999, 1572220800000, 1577836800000];
      const bucketsInISO = CandleBucketUtil.getBucketsInISO(bucketsInMillis);
      expect(bucketsInISO).toEqual([
        {
          start: '2019-01-01T00:00:00.000Z',
          stop: '2019-10-27T23:59:59.999Z',
        },
        {
          start: '2019-10-28T00:00:00.000Z',
          stop: '2020-01-01T00:00:00.000Z',
        },
      ]);
    });
  });
});
