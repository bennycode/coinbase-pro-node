import {CoinbasePro} from './CoinbasePro';

require('dotenv').config();

let client: CoinbasePro;

if (process.env.USE_SANDBOX === 'true') {
  console.info('Using Coinbase Public Sandbox...');

  client = new CoinbasePro({
    apiKey: process.env.COINBASE_PRO_API_KEY!,
    apiSecret: process.env.COINBASE_PRO_API_SECRET!,
    passphrase: process.env.COINBASE_PRO_PASSPHRASE!,
    useSandbox: false,
  });
} else if (process.env.USE_SANDBOX === 'false') {
  console.info('Using Coinbase Production Environment...');

  client = new CoinbasePro({
    apiKey: process.env.COINBASE_PRO_SANDBOX_API_KEY!,
    apiSecret: process.env.COINBASE_PRO_SANDBOX_API_SECRET!,
    passphrase: process.env.COINBASE_PRO_SANDBOX_PASSPHRASE!,
    useSandbox: true,
  });
} else {
  throw Error('No environment specified.');
}

async function main(): Promise<void> {
  const payload = await client.rest.account.listAccounts();
  const message = `You can trade "${payload.length}" different symbols.`;
  console.info(message);
}

main().catch(console.error);
