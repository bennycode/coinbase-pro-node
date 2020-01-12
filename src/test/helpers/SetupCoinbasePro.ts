/// <reference types="../typings/global" />
import {CoinbasePro} from '../../CoinbasePro';

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
