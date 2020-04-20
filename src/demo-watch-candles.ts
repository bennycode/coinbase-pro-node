import {Candle, CandleGranularity, ProductEvent} from './product';
import {CoinbasePro} from './CoinbasePro';

async function main(): Promise<void> {
  const productId = 'BTC-USD';
  const granularity = CandleGranularity.ONE_MINUTE;

  const client = new CoinbasePro();

  client.rest.on(ProductEvent.NEW_CANDLE, (productId: string, granularity: CandleGranularity, candle: Candle) => {
    console.info('Recent candle', productId, granularity, candle.openTimeString);
  });

  const candles = await client.rest.product.getCandles(productId, {
    granularity,
  });
  const latestCandle = candles[candles.length - 1];

  const latestOpen = latestCandle.openTimeString;
  console.info('Initial candle', productId, granularity, latestOpen);
  client.rest.product.watchCandles(productId, granularity, latestOpen);
}

main().catch(console.error);
