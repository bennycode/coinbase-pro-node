import {CoinbasePro} from './CoinbasePro';

describe('CoinbasePro', () => {
  describe('constructor', () => {
    it("supports Coinbase's production environment", () => {
      const client = new CoinbasePro({
        apiKey: '',
        apiSecret: '',
        passphrase: '',
        useSandbox: false,
      });

      expect(client.url.REST).toBe(CoinbasePro.SETUP.PRODUCTION.REST);
    });

    it("supports Coinbase's sandbox for testing", () => {
      const client = new CoinbasePro({
        apiKey: '',
        apiSecret: '',
        passphrase: '',
        useSandbox: true,
      });

      expect(client.url.REST).toBe(CoinbasePro.SETUP.SANDBOX.REST);
    });
  });
});
