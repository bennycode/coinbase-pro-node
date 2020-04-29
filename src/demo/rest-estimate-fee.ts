import {initClient} from './init-client';
import {OrderSide, OrderType, FeeUtil, CandleGranularity} from '..';

async function main(): Promise<void> {
  const client = initClient();

  const base = 'BTC';
  const counter = 'USD';

  const candles = await client.rest.product.getCandles(`${base}-${counter}`, {
    granularity: CandleGranularity.ONE_HOUR,
  });

  const lastClosingPrice = candles[candles.length - 1].close;

  const feeTier = await client.rest.fee.getCurrentFees();

  const amount = 1;

  const estimatedFee = FeeUtil.estimateFee(amount, lastClosingPrice, OrderSide.BUY, OrderType.LIMIT, feeTier, counter);

  console.info(`Buying "${amount} ${base}" would cost around "${estimatedFee.effectivePricePerUnit} ${counter}".`);
}

main().catch(console.error);
