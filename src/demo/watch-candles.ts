import {Candle, CandleGranularity, ProductEvent} from '../product';
import {CoinbasePro} from '../CoinbasePro';

async function main(): Promise<void> {
  // 1. Base configuration
  const productId = 'BTC-USD';
  const granularity = CandleGranularity.ONE_MINUTE;

  // 2. Setup candle subscription
  const client = new CoinbasePro();

  client.rest.on(ProductEvent.NEW_CANDLE, (productId: string, granularity: CandleGranularity, candle: Candle) => {
    console.info('Recent candle', productId, granularity, candle.openTimeString);
  });

  // 3. Get latest candle
  const candles = await client.rest.product.getCandles(productId, {
    granularity,
  });
  const latestCandle = candles[candles.length - 1];
  const latestOpen = latestCandle.openTimeString;
  console.info('Initial candle', productId, granularity, latestOpen);

  // 4. Subscribe to upcoming candles
  client.rest.product.watchCandles(productId, granularity, latestOpen);
}

main().catch(console.error);
