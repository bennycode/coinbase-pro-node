import {AxiosRequestConfig} from 'axios';
import nock from 'nock';
import {AccountAPI} from '../account/index.js';
import listAccounts from '../test/fixtures/rest/accounts/GET-200.json' assert {type: 'json'};
import {RESTClient} from './RESTClient.js';

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
      const rest = createRESTClient();
      expect(rest.defaults.timeout).toBe(50_000);
      rest.defaults.timeout = 2500;
      expect(rest.defaults.timeout).toBe(2500);
    });
  });

  describe('interceptors', () => {
    afterAll(() => nock.cleanAll());

    beforeAll(() => {
      nock(global.REST_URL).persist().get(AccountAPI.URL.ACCOUNTS).query(true).reply(200, JSON.stringify(listAccounts));
    });

    it('supports custom HTTP interceptors', async () => {
      const rest = createRESTClient();

      const onRequest = jasmine.createSpy('onRequest').and.callFake((config: AxiosRequestConfig) => config);

      const myInterceptor = rest.interceptors.request.use(onRequest);
      await rest.account.listAccounts();
      expect(onRequest).toHaveBeenCalledTimes(1);

      rest.interceptors.request.eject(myInterceptor);
      await rest.account.listAccounts();
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

      const rest = createRESTClient();
      const promise = rest.account.listAccounts();
      await expectAsync(promise).toBeResolved();
    });

    it('retries when getting rate limited', async () => {
      nock(global.REST_URL).get(AccountAPI.URL.ACCOUNTS).query(true).reply(429);

      nock(global.REST_URL).get(AccountAPI.URL.ACCOUNTS).query(true).reply(200, JSON.stringify(listAccounts));

      const rest = createRESTClient();
      const promise = rest.account.listAccounts();
      await expectAsync(promise).toBeResolved();
    });
  });
});
