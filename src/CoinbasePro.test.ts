import {CoinbasePro} from './CoinbasePro.js';

describe('CoinbasePro', () => {
  describe('constructor', () => {
    it("uses Coinbase Pro's production environment by default", () => {
      const client = new CoinbasePro();

      expect(client.url.REST).toBe(CoinbasePro.SETUP.PRODUCTION.REST);
    });

    it("supports Coinbase Pro's production environment", () => {
      const client = new CoinbasePro({
        apiKey: '',
        apiSecret: '',
        passphrase: '',
        useSandbox: false,
      });

      expect(client.url.REST).toBe(CoinbasePro.SETUP.PRODUCTION.REST);
    });

    it("supports Coinbase Pro's sandbox for testing", () => {
      const client = new CoinbasePro({
        apiKey: '',
        apiSecret: '',
        passphrase: '',
        useSandbox: true,
      });

      expect(client.url.REST).toBe(CoinbasePro.SETUP.SANDBOX.REST);
    });

    it('supports custom URLs to use a proxy server', () => {
      const proxyUrl = 'http://localhost:3000/rest-proxy';

      const client = new CoinbasePro({
        apiKey: '',
        apiSecret: '',
        httpUrl: proxyUrl,
        passphrase: '',
        wsUrl: 'wss://ws-feed-public.sandbox.pro.coinbase.com',
      });

      expect(client.url.REST).toBe(proxyUrl);
    });
  });
});
