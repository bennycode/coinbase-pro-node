/// <reference types="../test/typings/global" />
import {AxiosRequestConfig} from 'axios';
import nock = require('nock');
import {AccountAPI} from '../account/AccountAPI';
import {ClientAuthentication} from '../CoinbasePro';
import listAccounts from '../test/fixtures/rest/accounts/GET-200.json';
import {TimeAPI} from '../time/TimeAPI';
import {RESTClient} from './RESTClient';

describe('RESTClient', () => {
  function createClient(): RESTClient {
    const auth: ClientAuthentication = {
      apiKey: '',
      apiSecret: '',
      passphrase: '',
    };
    const baseURL = global.REST_URL;
    return new RESTClient(baseURL, auth);
  }

  describe('defaults', () => {
    it('supports overriding the timeout limit', () => {
      const client = createClient();
      expect(client.defaults.timeout).toBe(5000);
      client.defaults.timeout = 2500;
      expect(client.defaults.timeout).toBe(2500);
    });
  });

  describe('interceptors', () => {
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
        .get(AccountAPI.URL.ACCOUNTS)
        .query(() => true)
        .reply(() => [200, JSON.stringify(listAccounts)])
        .persist();
    });

    it('supports custom HTTP interceptors', async () => {
      const client = createClient();

      const onRequest = jasmine.createSpy('onRequest').and.callFake((config: AxiosRequestConfig) => {
        return config;
      });

      const myInterceptor = client.interceptors.request.use(onRequest);
      await client.account.listAccounts();
      expect(onRequest).toHaveBeenCalledTimes(1);

      client.interceptors.request.eject(myInterceptor);
      await client.account.listAccounts();
      expect(onRequest).toHaveBeenCalledTimes(1);
    });
  });
});
