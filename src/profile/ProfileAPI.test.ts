import nock from 'nock';
import {ProfileAPI} from './ProfileAPI';
import url from 'url';

describe('ProfileAPI', () => {
  afterEach(() => nock.cleanAll());

  describe('listProfiles', () => {
    it('lists your profiles', async () => {
      const profileId = '86602c68-306a-4500-ac73-4ce56a91d83c';

      nock(global.REST_URL)
        .get(ProfileAPI.URL.PROFILES)
        .query(true)
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

    it('can list only active profiles', async () => {
      nock(global.REST_URL)
        .get(ProfileAPI.URL.PROFILES)
        .query(true)
        .reply(requestUrl => {
          const {query} = url.parse(requestUrl, true);
          return [
            200,
            JSON.stringify(
              [
                {
                  active: true,
                  created_at: '2019-11-18T15:08:40.236309Z',
                  id: '86602c68-306a-4500-ac73-4ce56a91d83c',
                  is_default: true,
                  name: 'default',
                  user_id: '5844eceecf7e803e259d0365',
                },
                {
                  active: false,
                  created_at: '2021-02-01T00:00:01.236309Z',
                  id: '54481c48-288a-4511-ad59-5dx77a51d84d',
                  is_default: false,
                  name: 'default',
                  user_id: '6755eceecf7e803e259d0365',
                },
              ].filter(profile => String(profile.active) === query.active)
            ),
          ];
        });

      const profiles = await global.client.rest.profile.listProfiles(true);

      expect(profiles.length).toBe(1);
    });
  });

  describe('getProfile', () => {
    it('returns a single profile by profile ID', async () => {
      const profileId = '86602c68-306a-4500-ac73-4ce56a91d83c';

      nock(global.REST_URL)
        .get(`${ProfileAPI.URL.PROFILES}/${profileId}`)
        .query(true)
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

      nock(global.REST_URL).get(`${ProfileAPI.URL.PROFILES}/${profileId}`).query(true).reply(404);

      const profile = await global.client.rest.profile.getProfile(profileId);

      expect(profile).toEqual(null);
    });

    it('rethrows errors with status code other than 404', async () => {
      const profileId = '86602c68-306a-4500-ac73-4ce56a91d83d';

      nock(global.REST_URL).get(`${ProfileAPI.URL.PROFILES}/${profileId}`).query(true).reply(403);

      try {
        await global.client.rest.profile.getProfile(profileId);
      } catch (error) {
        expect(error.response.status).toBe(403);
      }
    });
  });

  describe('transferFunds', () => {
    it('transfers funds from one profile to another', async done => {
      nock(global.REST_URL).post(`${ProfileAPI.URL.PROFILES}/transfer`).query(true).reply(200);

      const transfer = {
        amount: '1000.00',
        currency: 'BTC',
        from: '86602c68-306a-4500-ac73-4ce56a91d83c',
        to: 'e87429d3-f0a7-4f28-8dff-8dd93d383de1',
      };

      await global.client.rest.profile.transferFunds(transfer);
      done();
    });
  });
});
