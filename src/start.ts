import {CoinbasePro} from './CoinbasePro';

require('dotenv').config();

const {COINBASE_PRO_SANDBOX_API_KEY, COINBASE_PRO_SANDBOX_API_SECRET, COINBASE_PRO_SANDBOX_PASSPHRASE} = process.env;

const client = new CoinbasePro(
  {
    apiKey: COINBASE_PRO_SANDBOX_API_KEY!,
    apiSecret: COINBASE_PRO_SANDBOX_API_SECRET!,
    passphrase: COINBASE_PRO_SANDBOX_PASSPHRASE!,
  },
  CoinbasePro.SETUP.SANDBOX
);

client.rest.account
  .listAccounts()
  .then(payload => {
    const message = `You can trade "${payload.length}" different symbols.`;
    console.info(message);
  })
  .catch(error => {
    console.error(error.message);
  });
