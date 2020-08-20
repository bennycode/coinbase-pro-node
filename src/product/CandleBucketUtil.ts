import {Candle, CandleGranularity} from '.';
import {ISO_8601_MS_UTC} from '..';

/** The maximum number of data points for a single historic rates API request on Coinbase Pro is 300 candles: https://docs.pro.coinbase.com/#get-historic-rates */
const MAXIMUM_HISTORIC_DATA_POINTS = 300;

export interface CandleBatchBucket {
  start: ISO_8601_MS_UTC;
  stop: ISO_8601_MS_UTC;
}

export class CandleBucketUtil {
  static getMinPrice(candles: Candle[], property: 'close' | 'high' | 'low' | 'open' = 'close'): number {
    const values: number[] = candles.map(candle => candle[property]);
    return Math.min(...values);
  }

  static getMaxPrice(candles: Candle[], property: 'close' | 'high' | 'low' | 'open' = 'close'): number {
    const values: number[] = candles.map(candle => candle[property]);
    return Math.max(...values);
  }

  static addUnitMillis(openTime: number | string, granularityInSeconds: CandleGranularity, amount: number): number {
    const granularityInMillis = granularityInSeconds * 1000;
    const units = amount * granularityInMillis;
    return new Date(openTime).getTime() + units;
  }

  static addUnitISO(
    openTime: number | string,
    granularityInSeconds: CandleGranularity,
    amount: number
  ): ISO_8601_MS_UTC {
    const nextTimestamp = CandleBucketUtil.addUnitMillis(openTime, granularityInSeconds, amount);
    return new Date(nextTimestamp).toISOString();
  }

  static removeUnitMillis(openTime: number | string, granularityInSeconds: CandleGranularity, amount: number): number {
    const granularityInMillis = granularityInSeconds * 1000;
    const units = amount * granularityInMillis;
    return new Date(openTime).getTime() - units;
  }

  static removeUnitISO(
    openTime: number | string,
    granularityInSeconds: CandleGranularity,
    amount: number
  ): ISO_8601_MS_UTC {
    const nextTimestamp = CandleBucketUtil.removeUnitMillis(openTime, granularityInSeconds, amount);
    return new Date(nextTimestamp).toISOString();
  }

  static getIntervals(): number[] {
    return [60, 300, 900, 3600, 21600, 86400];
  }

  static mapInterval(intervals: number[], interval: number): number {
    return intervals.reduce((previous, current) => {
      return Math.abs(current - interval) < Math.abs(previous - interval) ? current : previous;
    });
  }

  static mapGranularity(candleSizeInMillis: number): CandleGranularity {
    return this.mapInterval(CandleBucketUtil.getIntervals(), candleSizeInMillis);
  }

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

  static getBucketsInISO(bucketsInMillis: number[]): CandleBatchBucket[] {
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
