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
  static async getClockSkew(baseURL: string): Promise<number> {
    const response = await axios.get<TimeSkew>(`${baseURL}${TimeAPI.URL.TIME}`);
    const now = Date.now() / 1000;
    return response.data.epoch - now;
  }
}
