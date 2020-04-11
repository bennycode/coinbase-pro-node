import {CoinbasePro} from './CoinbasePro';
import {CandleGranularity} from './product';

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

  const candles = await client.rest.product.getCandles(`BTC-USD`, {
    end: '2020-04-11T10:00:00.000Z',
    granularity: CandleGranularity.ONE_HOUR,
    start: '2020-04-11T08:00:00.000Z',
  });
  console.info(`Received "${candles.length}" candles to represent 3 hours (08 - 11 AM).`, candles);
}

main().catch(console.error);
