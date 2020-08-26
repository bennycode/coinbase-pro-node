import axios from 'axios';

export interface TimeSkew {
  epoch: number;
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
    const response = await axios.get<TimeSkew>(`${this.baseURL}${TimeAPI.URL.TIME}`);
    return response.data;
  }

  /**
   * Get the absolute difference between server time and local time.
   */
  async getClockSkew(): Promise<number> {
    const time = await this.getTime();
    const now = Date.now() / 1000;
    return time.epoch - now;
  }
}
