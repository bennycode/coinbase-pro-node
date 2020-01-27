import nock from 'nock';
import verifyPayload from '../test/fixtures/rest/users/self/verify/GET-200.json';
import trailingVolume from '../test/fixtures/rest/users/self/trailing-volume/GET-200.json';
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

    nock(global.REST_URL)
      .get(`${UserAPI.URL.USERS}/self/trailing-volume`)
      .query(() => true)
      .reply(() => [200, JSON.stringify(trailingVolume)])
      .persist();
  });

  describe('verifyAuthentication', () => {
    it('verifies the authentication data', async () => {
      const verifiedUser = await global.client.rest.user.verifyAuthentication();
      expect(verifiedUser.id).toBe('7cbb4d09b95cee4dea90e9a7');
    });
  });

  describe('getTrailingVolume', () => {
    it('lists your 30-day trailing volume', async () => {
      const trailingVolume = await global.client.rest.user.getTrailingVolume();
      expect(trailingVolume[0].product_id).toBe('BTC-EUR');
    });
  });
});
