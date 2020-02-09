import {AxiosInstance} from 'axios';
import {ISO_8601_MS_UTC, UUID_V4} from '../payload/common';

export interface Profile {
  active: boolean;
  created_at: ISO_8601_MS_UTC;
  id: UUID_V4;
  is_default: boolean;
  name: string;
  user_id: string;
}

export class ProfileAPI {
  static readonly URL = {
    PROFILES: `/profiles`,
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  // https://docs.pro.coinbase.com/#list-profiles
  async listProfiles(): Promise<Profile[]> {
    const resource = ProfileAPI.URL.PROFILES;
    const response = await this.apiClient.get<Profile[]>(resource);
    return response.data;
  }
}
