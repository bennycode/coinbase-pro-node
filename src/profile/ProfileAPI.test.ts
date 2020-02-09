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
              id: profileId,
              user_id: '5844eceecf7e803e259d0365',
              name: 'default',
              active: true,
              is_default: true,
              created_at: '2019-11-18T15:08:40.236309Z',
            },
          ])
        );

      const profiles = await global.client.rest.profile.listProfiles();

      expect(profiles.length).toBe(1);
      expect(profiles[0].id).toBe(profileId);
    });
  });
});
