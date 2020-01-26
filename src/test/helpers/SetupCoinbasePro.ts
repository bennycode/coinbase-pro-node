import {CoinbasePro} from '../../CoinbasePro';

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

beforeEach(
  () =>
    (global.client = new CoinbasePro(
      {
        apiKey: '',
        apiSecret: '',
        passphrase: '',
      },
      CoinbasePro.SETUP.SANDBOX
    ))
);
