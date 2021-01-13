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
  async getTime(): Promise<TimeSkew> {
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
    const {epoch} = await this.getTime();
    const now = Date.now() / 1000;
    return parseFloat(`${epoch}`) - now;
  }
}
