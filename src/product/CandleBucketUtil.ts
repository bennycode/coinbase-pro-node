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
    const bucketsInMillis = [];
    const batch = MAXIMUM_HISTORIC_DATA_POINTS * candleSizeInMillis;

    let current = fromInMillis;
    bucketsInMillis.push(current); // push initial start
    current = current + batch;

    while (current < toInMillis) {
      bucketsInMillis.push(current - 1); // intermediate stop
      bucketsInMillis.push(current); // intermediate start
      current = current + batch;
    }

    bucketsInMillis.push(toInMillis); // push initial stop
    return bucketsInMillis;
  }

  static getBuckets(bucketsInMillis: number[]): CandleBatchBucket[] {
    const bucketsInISO = [];

    for (let i = 0; i < bucketsInMillis.length - 1; i += 2) {
      const start = new Date(bucketsInMillis[i]).toISOString();
      const stop = new Date(bucketsInMillis[i + 1]).toISOString();
      bucketsInISO.push({
        start,
        stop,
      });
    }

    return bucketsInISO;
  }
}
