import {initClient} from './init-client';
import {CandleGranularity} from '..';
import fs from 'fs';
import path from 'path';

async function main(): Promise<void> {
  const client = initClient();

  const productId = 'BTC-USD';
  const begin = '2020-04-11T00:00:00.000Z';
  const end = '2020-04-11T10:00:00.000Z';
  const granularity = CandleGranularity.ONE_HOUR;
  const directory = __dirname;

  const candles = await client.rest.product.getCandles(productId, {
    end,
    granularity,
    start: begin,
  });

  const start = candles[0].openTimeInMillis;
  const file = path.join(directory, `${productId}-${start}-${granularity}.json`);

  fs.writeFileSync(file, JSON.stringify(candles, null, 2));

  console.info(`Dumped "${candles.length}" candles in file "${file}".`);
}

main().catch(console.error);
