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

  /**
   * Verify your authentication with Coinbase Pro.
   *
   * @returns Your account
   * @see https://docs.cloud.coinbase.com/exchange/docs/websocket-overview#authentication
   */
  async verifyAuthentication(): Promise<VerifiedUser> {
    const resource = `${UserAPI.URL.USERS}/self/verify`;
    const response = await this.apiClient.get<VerifiedUser>(resource);
    return response.data;
  }

  /**
   * This request will return your 30-day trailing volume for all products of the API key’s profile. This is a cached
   * value that’s calculated every day at midnight UTC.
   *
   * @note This endpoint requires either the “view” or “trade” permission
   * @returns Your 30-day trailing volume for all products of the API key’s profile
   * @see https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getfees
   * @deprecated The Trailing Volume endpoint has been deprecated in favor of the Fees endpoint to get the latest volumes: https://docs.cloud.coinbase.com/exchange/docs/changelog#2021-feb-04
   */
  async getTrailingVolume(): Promise<TrailingVolume[]> {
    const resource = `${UserAPI.URL.USERS}/self/trailing-volume`;
    const response = await this.apiClient.get<TrailingVolume[]>(resource);
    return response.data;
  }
}
