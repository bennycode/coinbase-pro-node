import {AxiosInstance} from 'axios';

export interface VerifiedUser {
  id: string;
}

export interface TrailingVolume {
  exchange_volume: string;
  product_id: string;
  recorded_at: string;
  volume: string;
}

export class UserAPI {
  static readonly URL: {USERS: string} = {
    USERS: `/users`,
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  // https://docs.pro.coinbase.com/#subscribe
  async verifyAuthentication(): Promise<VerifiedUser> {
    const resource = [UserAPI.URL.USERS, 'self', 'verify'].join('/');
    const response = await this.apiClient.get<VerifiedUser>(resource);
    return response.data;
  }

  /**
   * This request will return your 30-day trailing volume for all products of the API key’s profile. This is a cached
   * value that’s calculated every day at midnight UTC.
   * @note This endpoint requires either the “view” or “trade” permission
   * @returns {Promise<TrailingVolume>} Your 30-day trailing volume for all products of the API key’s profile
   * @see https://docs.pro.coinbase.com/#trailing-volume
   */
  async getTrailingVolume(): Promise<TrailingVolume[]> {
    const resource = `${UserAPI.URL.USERS}/self/trailing-volume`;
    const response = await this.apiClient.get<TrailingVolume[]>(resource);
    return response.data;
  }
}
