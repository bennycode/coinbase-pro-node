import {RequestSetup, RequestSigner, SignedRequest} from './RequestSigner.js';
import {ClientAuthentication} from '../CoinbasePro.js';

describe('RequestSigner', () => {
  describe('signRequest', () => {
    beforeAll(() => {
      jasmine.clock().install();
      const baseTime = new Date(1580066918897);
      jasmine.clock().mockDate(baseTime);
    });

    afterAll(() => {
      jasmine.clock().uninstall();
    });

    it('signs GET requests with parameters', () => {
      const auth: ClientAuthentication = {
        apiKey: '163c69bf6c849427616c7e04ee99df52',
        apiSecret: 'kv+3DPw2yHWQWkDsmpN4uXWtgtuBrFFLu7zRk9gipjdrFpUjwZ0mK6KzGAPFpxOjDLdna20xozy+9fqRU5zJZQ==',
        passphrase: 'wvp2pxkmx5',
        useSandbox: true,
      };
      const setup: RequestSetup = {
        httpMethod: 'GET',
        payload: '?product_id=BTC-EUR',
        requestPath: '/fills',
      };
      const clockSkew = 0;
      const expected: SignedRequest = {
        key: '163c69bf6c849427616c7e04ee99df52',
        passphrase: 'wvp2pxkmx5',
        signature: 'qGB3X7LOAhNXPpRqV73F08sMU1hKuX+s7vQypcEErV8=',
        timestamp: 1580066918.897,
      };
      const signature = RequestSigner.signRequest(auth, setup, clockSkew);
      expect(signature).toEqual(expected);
    });
  });
});
