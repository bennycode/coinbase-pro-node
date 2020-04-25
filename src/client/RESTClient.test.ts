import {AxiosRequestConfig} from 'axios';
import nock from 'nock';
import {AccountAPI} from '../account/AccountAPI';
import listAccounts from '../test/fixtures/rest/accounts/GET-200.json';
import {RESTClient} from './RESTClient';

describe('RESTClient', () => {
  function createRESTClient(): RESTClient {
    return new RESTClient(global.REST_URL, () => {
      return Promise.resolve({
        key: '',
        passphrase: '',
        signature: '',
        timestamp: Date.now() / 1000,
      });
    });
  }

  describe('defaults', () => {
    it('supports overriding the timeout limit', () => {
      const client = createRESTClient();
      expect(client.defaults.timeout).toBe(5000);
      client.defaults.timeout = 2500;
      expect(client.defaults.timeout).toBe(2500);
    });
  });

  describe('interceptors', () => {
    afterAll(() => nock.cleanAll());

    beforeAll(() => {
      nock(global.REST_URL).persist().get(AccountAPI.URL.ACCOUNTS).query(true).reply(200, JSON.stringify(listAccounts));
    });

    it('supports custom HTTP interceptors', async () => {
      const client = createRESTClient();

      const onRequest = jasmine.createSpy('onRequest').and.callFake((config: AxiosRequestConfig) => config);

      const myInterceptor = client.interceptors.request.use(onRequest);
      await client.account.listAccounts();
      expect(onRequest).toHaveBeenCalledTimes(1);

      client.interceptors.request.eject(myInterceptor);
      await client.account.listAccounts();
      expect(onRequest).toHaveBeenCalledTimes(1);
    });
  });

  describe('retries', () => {
    it('retries on HTTP 5xx status codes', async () => {
      nock(global.REST_URL)
        .get(AccountAPI.URL.ACCOUNTS)
        .query(true)
        .reply(() => [
          500,
          JSON.stringify({
            message: 'Test Error',
          }),
        ]);

      nock(global.REST_URL).get(AccountAPI.URL.ACCOUNTS).query(true).reply(200, JSON.stringify(listAccounts));

      const client = createRESTClient();
      const promise = client.account.listAccounts();
      await expectAsync(promise).toBeResolved();
    });

    it('retries when getting rate limited', async () => {
      nock(global.REST_URL).get(AccountAPI.URL.ACCOUNTS).query(true).reply(429);

      nock(global.REST_URL).get(AccountAPI.URL.ACCOUNTS).query(true).reply(200, JSON.stringify(listAccounts));

      const client = createRESTClient();
      const promise = client.account.listAccounts();
      await expectAsync(promise).toBeResolved();
    });
  });
});
