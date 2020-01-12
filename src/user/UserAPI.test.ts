/// <reference types="../test/typings/global" />
import nock = require('nock');
import verifyPayload from '../test/fixtures/rest/users/self/verify/GET-200.json';
import {TimeAPI} from '../time/TimeAPI';
import {UserAPI} from './UserAPI';

describe('UserAPI', () => {
  afterAll(() => nock.cleanAll());

  beforeAll(() => {
    nock(global.REST_URL)
      .get(TimeAPI.URL.TIME)

      .query(() => true)
      .reply(() => {
        const now = new Date();
        return [
          200,
          JSON.stringify({
            epoch: now.getTime() * 1000,
            iso: now.toISOString(),
          }),
        ];
      })
      .persist();

    nock(global.REST_URL)
      .get(`${UserAPI.URL.USERS}/self/verify`)
      .query(() => true)
      .reply(() => {
        return [200, JSON.stringify(verifyPayload)];
      })
      .persist();
  });

  describe('verifyAuthentication', () => {
    it('verifies the authentication data', async () => {
      const verifiedUser = await global.client.rest.user.verifyAuthentication();
      expect(verifiedUser.id).toBe('7cbb4d09b95cee4dea90e9a7');
    });
  });
});
