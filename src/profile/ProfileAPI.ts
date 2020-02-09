import {AxiosInstance} from 'axios';
import {ISO_8601_MS_UTC, UUID_V4} from '../payload/common';

type Nickname = 'default' | string;

export interface Profile {
  active: boolean;
  created_at: ISO_8601_MS_UTC;
  id: UUID_V4;
  is_default: boolean;
  name: Nickname;
  user_id: string;
}

export interface FundTransfer {
  amount: string;
  currency: string;
  from: UUID_V4;
  to: UUID_V4;
}

export class ProfileAPI {
  static readonly URL = {
    PROFILES: `/profiles`,
  };

  constructor(private readonly apiClient: AxiosInstance) {}

  /**
   * List your profiles. Profiles are equivalent to portfolios.
   * This endpoint requires the “view” permission and is accessible by any profile’s API key.
   *
   * @see https://docs.pro.coinbase.com/#list-profiles
   */
  async listProfiles(): Promise<Profile[]> {
    const resource = ProfileAPI.URL.PROFILES;
    const response = await this.apiClient.get<Profile[]>(resource);
    return response.data;
  }

  /**
   * Get a single profile by profile ID.
   * This endpoint requires the “view” permission and is accessible by any profile’s API key.
   *
   * @param profileId - Profile ID
   * @returns A single profile.
   */
  async getProfile(profileId: string): Promise<Profile | null> {
    const resource = `${ProfileAPI.URL.PROFILES}/${profileId}`;
    try {
      const response = await this.apiClient.get<Profile>(resource);
      return response.data;
    } catch (error) {
      if (error.response.status === 404) {
        return null;
      }

      throw error;
    }
  }

  /**
   * Transfer funds from API key’s profile to another user owned profile.
   * This endpoint requires the “transfer” permission.
   * @see https://docs.pro.coinbase.com/#create-profile-transfer
   */
  async transferFunds(transfer: FundTransfer): Promise<void> {
    const resource = `${ProfileAPI.URL.PROFILES}/transfer`;
    await this.apiClient.post(resource, transfer);
  }
}
