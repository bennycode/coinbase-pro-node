import {RESTClient} from './client/RESTClient';
import {WebSocketClient} from './client/WebSocketClient';
import {TimeAPI} from './time/TimeAPI';
import {RequestSetup, RequestSigner, SignedRequest} from './auth/RequestSigner';

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

    const signRequest = async (setup: RequestSetup): Promise<SignedRequest> => {
      const baseURL = this.url.REST;
      const clockSkew = await TimeAPI.getClockSkew(baseURL);

      return RequestSigner.signRequest(auth, setup, clockSkew);
    };

    this.rest = new RESTClient(this.url.REST, signRequest);
    this.ws = new WebSocketClient(this.url.WebSocket, signRequest);
  }
}

export default CoinbasePro;
