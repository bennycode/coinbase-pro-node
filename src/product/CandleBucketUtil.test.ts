import {CandleBatchBucket, CandleBucketUtil, CandleGranularity} from '.';

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
      const expected = [1546300800000, 1572220800000, 1577836800000];

      const fromInMillis = new Date('2019-01-01T00:00:00.000Z').getTime();
      const toInMillis = new Date('2020-01-01T00:00:00.000Z').getTime();
      const candleSizeInMillis = CandleGranularity.ONE_DAY * 1000;

      const actual = CandleBucketUtil.getBucketsInMillis(fromInMillis, toInMillis, candleSizeInMillis);

      expect(actual).toEqual(expected);
    });
  });

  describe('getBuckets', () => {
    it('returns the intervals if historic rates API requests must be batched', () => {
      const expectedOneDayIntervals: CandleBatchBucket[] = [
        {
          start: '2019-01-01T00:00:00.000Z',
          stop: '2019-10-28T00:00:00.000Z',
        },
        {
          start: '2019-10-28T00:00:00.000Z',
          stop: '2020-01-01T00:00:00.000Z',
        },
      ];
      const expectedSixHoursIntervals: CandleBatchBucket[] = [
        {
          start: '2019-01-01T00:00:00.000Z',
          stop: '2019-03-17T00:00:00.000Z',
        },
        {
          start: '2019-03-17T00:00:00.000Z',
          stop: '2019-05-31T00:00:00.000Z',
        },
        {
          start: '2019-05-31T00:00:00.000Z',
          stop: '2019-08-14T00:00:00.000Z',
        },
        {
          start: '2019-08-14T00:00:00.000Z',
          stop: '2019-10-28T00:00:00.000Z',
        },
        {
          start: '2019-10-28T00:00:00.000Z',
          stop: '2020-01-01T00:00:00.000Z',
        },
      ];

      const fromInMillis = new Date('2019-01-01T00:00:00.000Z').getTime();
      const toInMillis = new Date('2020-01-01T00:00:00.000Z').getTime();
      const oneDayInMillis = CandleGranularity.ONE_DAY * 1000;
      const sixHoursInMillis = CandleGranularity.SIX_HOURS * 1000;

      const oneDayIntervalsInMillis = CandleBucketUtil.getBucketsInMillis(fromInMillis, toInMillis, oneDayInMillis);
      const oneDayIntervals = CandleBucketUtil.getBuckets(oneDayIntervalsInMillis);

      expect(oneDayIntervals).withContext('One day interval').toEqual(expectedOneDayIntervals);

      const sixHoursIntervalsInMillis = CandleBucketUtil.getBucketsInMillis(fromInMillis, toInMillis, sixHoursInMillis);
      const sixHoursIntervals = CandleBucketUtil.getBuckets(sixHoursIntervalsInMillis);

      expect(sixHoursIntervals).withContext('Six hours interval').toEqual(expectedSixHoursIntervals);
    });
  });
});
