import {RESTClient} from './client/RESTClient';
import {WebSocketClient} from './client/WebSocketClient';

export interface ClientAuthentication {
  apiKey: string;
  apiSecret: string;
  passphrase: string;
  useSandbox: boolean;
}

export interface ClientConnection {
  REST: string;
  WebSocket: string;
}

export class CoinbasePro {
  readonly rest: RESTClient;
  readonly url: ClientConnection;
  readonly ws: WebSocketClient;

  static readonly SETUP: {
    PRODUCTION: ClientConnection;
    SANDBOX: ClientConnection;
  } = {
    PRODUCTION: {
      REST: 'https://api.pro.coinbase.com',
      WebSocket: 'wss://ws-feed.pro.coinbase.com',
    },
    SANDBOX: {
      REST: 'https://api-public.sandbox.pro.coinbase.com',
      WebSocket: 'wss://ws-feed-public.sandbox.pro.coinbase.com',
    },
  };

  constructor(
    auth: ClientAuthentication = {
      apiKey: '',
      apiSecret: '',
      passphrase: '',
      useSandbox: false,
    }
  ) {
    this.url = auth.useSandbox === true ? CoinbasePro.SETUP.SANDBOX : CoinbasePro.SETUP.PRODUCTION;
    this.rest = new RESTClient(this.url.REST, auth);
    this.ws = new WebSocketClient(this.url.WebSocket);
  }
}
