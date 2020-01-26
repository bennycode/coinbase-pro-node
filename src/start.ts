import {CoinbasePro} from './CoinbasePro';

require('dotenv').config();

const {COINBASE_PRO_SANDBOX_API_KEY, COINBASE_PRO_SANDBOX_API_SECRET, COINBASE_PRO_SANDBOX_PASSPHRASE} = process.env;

const client = new CoinbasePro(
  {
    apiKey: COINBASE_PRO_SANDBOX_API_KEY!,
    apiSecret: COINBASE_PRO_SANDBOX_API_SECRET!,
    passphrase: COINBASE_PRO_SANDBOX_PASSPHRASE!,
  },
  true
);

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async (): Promise<void> => {
  const payload = await client.rest.account.listAccounts();
  const message = `You can trade "${payload.length}" different symbols in Coinbase's Public Sandbox.`;
  console.info(message);
})();
