import {AxiosInstance} from 'axios';

export interface VerifiedUser {
  id: string;
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
}
