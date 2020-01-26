import axios from 'axios';

export interface TimeSkew {
  epoch: number;
  iso: string;
}

export class TimeAPI {
  static readonly URL = {
    TIME: `/time`,
  };

  // https://docs.pro.coinbase.com/#time
  static async getTime(baseURL: string): Promise<TimeSkew> {
    const response = await axios.get<TimeSkew>(`${baseURL}${TimeAPI.URL.TIME}`);
    return response.data;
  }

  static async getClockSkew(baseURL: string): Promise<number> {
    const time = await this.getTime(baseURL);
    const now = Date.now() / 1000;
    return time.epoch - now;
  }
}
