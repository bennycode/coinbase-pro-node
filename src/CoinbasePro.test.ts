import {CoinbasePro} from './CoinbasePro';

describe('CoinbasePro', () => {
  describe('constructor', () => {
    it('defaults to Coinbase production environment', () => {
      const client = new CoinbasePro({
        apiKey: '',
        apiSecret: '',
        passphrase: '',
      });

      expect(client.url.REST).toBe(CoinbasePro.SETUP.PRODUCTION.REST);
    });

    it('supports Coinbase public sandbox for testing', () => {
      const client = new CoinbasePro(
        {
          apiKey: '',
          apiSecret: '',
          passphrase: '',
        },
        true
      );

      expect(client.url.REST).toBe(CoinbasePro.SETUP.SANDBOX.REST);
    });
  });
});
