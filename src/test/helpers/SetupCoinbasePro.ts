import {CoinbasePro} from '../../CoinbasePro';
import nock from 'nock';
import {TimeAPI} from '../../time/TimeAPI';

declare global {
  module NodeJS {
    interface Global {
      client: CoinbasePro;
      REST_URL: string;
    }
  }
}

// URL to mock a server using "nock":
global.REST_URL = CoinbasePro.SETUP.SANDBOX.REST;

beforeEach(() => {
  nock(global.REST_URL)
    .get(TimeAPI.URL.TIME)
    .query(true)
    .reply(() => {
      const now = new Date();
      return [
        200,
        JSON.stringify({
          epoch: now.getTime() / 1000,
          iso: now.toISOString(),
        }),
      ];
    })
    .persist();

  global.client = new CoinbasePro({
    apiKey: '',
    apiSecret: '',
    passphrase: '',
    useSandbox: true,
  });
});
