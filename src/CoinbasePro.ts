import {RESTClient} from './client/RESTClient';
import {WebSocketClient} from './client/WebSocketClient';
import {RequestSetup, RequestSigner, SignedRequest} from './auth/RequestSigner';

export interface ClientAuthenticationBase {
  apiKey: string;
  apiSecret: string;
  passphrase: string;
}

export interface ClientAuthenticationBaseUrls extends ClientAuthenticationBase {
  apiKey: string;
  apiSecret: string;
  passphrase: string;
  useSandbox: boolean;
}

export interface ClientAuthenticationCustomUrls extends ClientAuthenticationBase {
  apiKey: string;
  apiSecret: string;
  httpUrl: string;
  passphrase: string;
  wsUrl: string;
}

export type ClientAuthentication = ClientAuthenticationBaseUrls | ClientAuthenticationCustomUrls;

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

  private clockSkew: number = -1;

  constructor(
    auth: ClientAuthentication = {
      apiKey: '',
      apiSecret: '',
      passphrase: '',
      useSandbox: false,
    }
  ) {
    if (typeof (auth as ClientAuthenticationBaseUrls).useSandbox === 'boolean') {
      this.url =
        (auth as ClientAuthenticationBaseUrls).useSandbox === true
          ? CoinbasePro.SETUP.SANDBOX
          : CoinbasePro.SETUP.PRODUCTION;
    } else {
      const {httpUrl, wsUrl} = auth as ClientAuthenticationCustomUrls;
      this.url = {
        REST: httpUrl,
        WebSocket: wsUrl,
      };
    }

    const signRequest = async (setup: RequestSetup): Promise<SignedRequest> => {
      /**
       * Cache clock skew to reduce the amount of API requests:
       * https://github.com/bennycode/coinbase-pro-node/issues/368#issuecomment-762122575
       */
      if (this.clockSkew === -1) {
        const time = await this.rest.time.getTime();
        this.clockSkew = await this.rest.time.getClockSkew(time);
      }

      return RequestSigner.signRequest(auth, setup, this.clockSkew);
    };

    this.rest = new RESTClient(this.url.REST, signRequest);
    this.ws = new WebSocketClient(this.url.WebSocket, signRequest);
  }
}
