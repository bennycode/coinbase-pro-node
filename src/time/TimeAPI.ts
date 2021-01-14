import axios from 'axios';

export interface TimeSkew {
  /** The epoch field represents decimal seconds since Unix Epoch, i.e. "1420674445.201" */
  epoch: number;
  /** Time in ISO 8601 format, i.e. "2015-01-07T23:47:25.201Z" */
  iso: string;
}

export class TimeAPI {
  static readonly URL = {
    TIME: `/time`,
  };

  constructor(private readonly baseURL: string) {}

  /**
   * Get the server time from Coinbase Pro API.
   *
   * @see https://docs.pro.coinbase.com/#time
   */
  async getTime(): Promise<TimeSkew | string> {
    const response = await axios.get<TimeSkew>(`${this.baseURL}${TimeAPI.URL.TIME}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    return response.data;
  }

  /**
   * Get the absolute difference between server time and local time.
   */
  async getClockSkew(): Promise<number> {
    const time = await this.getTime();
    const epoch = (typeof time === 'string') ? parseFloat(time.match(/epoch":(.*)\./i)![1]) : time.epoch;
    const now = Date.now() / 1000;
    return epoch - now;
  }
}
