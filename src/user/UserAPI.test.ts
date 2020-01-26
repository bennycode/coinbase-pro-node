import nock from 'nock';
import verifyPayload from '../test/fixtures/rest/users/self/verify/GET-200.json';
import {UserAPI} from './UserAPI';

describe('UserAPI', () => {
  afterAll(() => nock.cleanAll());

  beforeAll(() => {
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
