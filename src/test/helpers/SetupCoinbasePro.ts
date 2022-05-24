import {CoinbasePro} from '../../CoinbasePro';
import nock from 'nock';
import {TimeAPI} from '../../time/TimeAPI';

declare global {
  /* eslint-disable no-var */
  var client: CoinbasePro;
  var REST_URL: string;
  /* eslint-enable no-var */
}

// URL to mock a server using "nock":
global.REST_URL = CoinbasePro.SETUP.SANDBOX.REST;

beforeEach(() => {
  nock(global.REST_URL)
    .persist()
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
    });

  global.client = new CoinbasePro({
    apiKey: '',
    apiSecret: '',
    passphrase: '',
    useSandbox: true,
  });
});
