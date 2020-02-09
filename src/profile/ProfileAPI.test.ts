import nock from 'nock';
import {ProfileAPI} from './ProfileAPI';

describe('ProfileAPI', () => {
  afterEach(() => nock.cleanAll());

  describe('listProfiles', () => {
    it('lists your profiles', async () => {
      const profileId = '86602c68-306a-4500-ac73-4ce56a91d83c';

      nock(global.REST_URL)
        .get(ProfileAPI.URL.PROFILES)
        .query(() => true)
        .reply(
          200,
          JSON.stringify([
            {
              active: true,
              created_at: '2019-11-18T15:08:40.236309Z',
              id: profileId,
              is_default: true,
              name: 'default',
              user_id: '5844eceecf7e803e259d0365',
            },
          ])
        );

      const profiles = await global.client.rest.profile.listProfiles();

      expect(profiles.length).toBe(1);
      expect(profiles[0].id).toBe(profileId);
    });
  });

  describe('getProfile', () => {
    it('returns a single profile by profile ID', async () => {
      const profileId = '86602c68-306a-4500-ac73-4ce56a91d83c';

      nock(global.REST_URL)
        .get(`${ProfileAPI.URL.PROFILES}/${profileId}`)
        .query(() => true)
        .reply(
          200,
          JSON.stringify({
            active: true,
            created_at: '2019-11-18T15:08:40.236309Z',
            id: profileId,
            is_default: true,
            name: 'default',
            user_id: '5844eceecf7e803e259d0365',
          })
        );

      const profile = await global.client.rest.profile.getProfile(profileId);

      expect(profile!.id).toBe(profileId);
    });

    it('returns null if a profile cannot be found', async () => {
      const profileId = '86602c68-306a-4500-ac73-4ce56a91d83d';

      nock(global.REST_URL)
        .get(`${ProfileAPI.URL.PROFILES}/${profileId}`)
        .query(() => true)
        .reply(404);

      const profile = await global.client.rest.profile.getProfile(profileId);

      expect(profile).toEqual(null);
    });

    it('rethrows errors with status code other than 404', async () => {
      const profileId = '86602c68-306a-4500-ac73-4ce56a91d83d';

      nock(global.REST_URL)
        .get(`${ProfileAPI.URL.PROFILES}/${profileId}`)
        .query(() => true)
        .reply(500);

      try {
        await global.client.rest.profile.getProfile(profileId);
      } catch (error) {
        expect(error.response.status).toBe(500);
      }
    });
  });
});
