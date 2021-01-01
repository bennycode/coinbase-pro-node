import crypto from 'crypto';
import {ClientAuthentication} from '../CoinbasePro';
import {Buffer} from 'buffer/';

export interface RequestSetup {
  httpMethod: string;
  payload: string;
  requestPath: string;
}

export interface SignedRequest {
  key: string;
  passphrase: string;
  signature: string;
  timestamp: number;
}

export class RequestSigner {
  // https://docs.pro.coinbase.com/#creating-a-request
  static signRequest(auth: ClientAuthentication, setup: RequestSetup, clockSkew: number): SignedRequest {
    const timestamp = Date.now() / 1000 + clockSkew;
    const what = `${timestamp}${setup.httpMethod}${setup.requestPath}${setup.payload}`;
    const key = Buffer.from(auth.apiSecret, 'base64');
    const hmac = crypto.createHmac('sha256', key);
    const signature = hmac.update(what).digest('base64');

    return {
      key: auth.apiKey,
      passphrase: auth.passphrase,
      signature,
      timestamp,
    };
  }
}
