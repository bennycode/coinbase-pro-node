import {CandleGranularity} from '.';
import {ISO_8601_MS_UTC} from '..';

/** The maximum number of data points for a single historic rates API request on Coinbase Pro is 300 candles: https://docs.pro.coinbase.com/#get-historic-rates */
const MAXIMUM_HISTORIC_DATA_POINTS = 300;

export interface CandleBatchBucket {
  start: ISO_8601_MS_UTC;
  stop: ISO_8601_MS_UTC;
}

export class CandleBucketUtil {
  static expectedBuckets(fromInMillis: number, toInMillis: number, candleSizeInMillis: CandleGranularity): number {
    const timeSpanInMillis = toInMillis - fromInMillis;
    return timeSpanInMillis / candleSizeInMillis;
  }

  static getBucketsInMillis(fromInMillis: number, toInMillis: number, candleSizeInMillis: number): number[] {
    const buckets = [];
    const batch = MAXIMUM_HISTORIC_DATA_POINTS * candleSizeInMillis;
    let current = fromInMillis;
    while (current < toInMillis) {
      buckets.push(current);
      current = current + batch;
    }
    buckets.push(toInMillis);
    return buckets;
  }

  static getBuckets(bucketsInMillis: number[]): CandleBatchBucket[] {
    const buckets = [];

    for (let i = 0; i < bucketsInMillis.length - 1; i++) {
      const start = new Date(bucketsInMillis[i]).toISOString();
      const stop = new Date(bucketsInMillis[i + 1]).toISOString();
      buckets.push({
        start,
        stop,
      });
    }

    return buckets;
  }
}
