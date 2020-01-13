import {RESTClient} from './client/RESTClient';
import {WebSocketClient} from './client/WebSocketClient';

export interface ClientAuthentication {
  apiKey: string;
  apiSecret: string;
  passphrase: string;
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

  constructor(auth: ClientAuthentication, url: ClientConnection = CoinbasePro.SETUP.PRODUCTION) {
    this.rest = new RESTClient(url.REST, auth);
    this.url = url;
    this.ws = new WebSocketClient(url.WebSocket);
  }
}
