import {CoinbasePro} from './CoinbasePro';

describe('CoinbasePro', () => {
  describe('constructor', () => {
    it('defaults to the production environment', () => {
      const client = new CoinbasePro({
        apiKey: '',
        apiSecret: '',
        passphrase: '',
      });

      expect(client.url.REST).toBe(CoinbasePro.SETUP.PRODUCTION.REST);
    });

    it('supports the public sandbox for testing API connectivity', () => {
      const client = new CoinbasePro(
        {
          apiKey: '',
          apiSecret: '',
          passphrase: '',
        },
        CoinbasePro.SETUP.SANDBOX
      );

      expect(client.url.REST).toBe(CoinbasePro.SETUP.SANDBOX.REST);
    });
  });
});
