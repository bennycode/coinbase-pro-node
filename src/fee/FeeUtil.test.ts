import {FeeEstimateJSON, OrderSide, OrderType} from '..';
import {FeeUtil} from './FeeUtil';

describe('FeeUtil', () => {
  describe('calculateFee', () => {
    it('estimates maker fees for buy orders (0.2 BTC)', () => {
      const amountOfBTC = 0.2;
      const pricePerBTC = 7120;
      const orderSide = OrderSide.BUY;
      const type = OrderType.LIMIT;
      const fee = {
        maker_fee_rate: '0.0050',
        taker_fee_rate: '0.0050',
        usd_volume: null,
      };
      const estimatedFee = FeeUtil.estimateFee(amountOfBTC, pricePerBTC, orderSide, type, fee, 'EUR');
      expect(estimatedFee.effectivePricePerUnit.valueOf()).toBe('7155.6');
      expect(estimatedFee.effectiveTotal.valueOf()).toBe('1431.12');
      expect(estimatedFee.feeAsset).toBe('EUR');
      expect(estimatedFee.pricePerUnit.valueOf()).toBe('7120');
      expect(estimatedFee.totalFee.valueOf()).toBe('7.12');
      expect(estimatedFee.amount.valueOf()).toBe('0.2');
    });

    it('estimates maker fees for buy orders (1 BTC)', () => {
      const amountOfBTC = 1;
      const pricePerBTC = 7120;
      const orderSide = OrderSide.BUY;
      const type = OrderType.LIMIT;
      const fee = {
        maker_fee_rate: '0.0050',
        taker_fee_rate: '0.0050',
        usd_volume: null,
      };
      const estimatedFee = FeeUtil.estimateFee(amountOfBTC, pricePerBTC, orderSide, type, fee, 'EUR');
      expect(estimatedFee.effectivePricePerUnit.valueOf()).toBe('7155.6');
      expect(estimatedFee.effectiveTotal.valueOf()).toBe('7155.6');
      expect(estimatedFee.feeAsset).toBe('EUR');
      expect(estimatedFee.pricePerUnit.valueOf()).toBe('7120');
      expect(estimatedFee.totalFee.valueOf()).toBe('35.6');
      expect(estimatedFee.amount.valueOf()).toBe('1');
    });

    it('estimates taker fees for buy orders (1 BTC)', () => {
      const amountOfBTC = 1;
      const pricePerBTC = 7120;
      const orderSide = OrderSide.BUY;
      const type = OrderType.MARKET;
      const fee = {
        maker_fee_rate: '0.0015',
        taker_fee_rate: '0.0025',
        usd_volume: null,
      };
      const estimatedFee = FeeUtil.estimateFee(amountOfBTC, pricePerBTC, orderSide, type, fee, 'EUR');
      expect(estimatedFee.effectivePricePerUnit.valueOf()).toBe('7137.8');
      expect(estimatedFee.effectiveTotal.valueOf()).toBe('7137.8');
      expect(estimatedFee.feeAsset).toBe('EUR');
      expect(estimatedFee.pricePerUnit.valueOf()).toBe('7120');
      expect(estimatedFee.totalFee.valueOf()).toBe('17.8');
      expect(estimatedFee.amount.valueOf()).toBe('1');
    });

    it('estimates maker fees for buy orders (2 BTC)', () => {
      const amountOfBTC = 2;
      const pricePerBTC = 7120;
      const orderSide = OrderSide.BUY;
      const type = OrderType.LIMIT;
      const fee = {
        maker_fee_rate: '0.0050',
        taker_fee_rate: '0.0050',
        usd_volume: null,
      };
      const estimatedFee = FeeUtil.estimateFee(amountOfBTC, pricePerBTC, orderSide, type, fee, 'EUR');
      expect(estimatedFee.effectivePricePerUnit.valueOf()).toBe('7155.6');
      expect(estimatedFee.effectiveTotal.valueOf()).toBe('14311.2');
      expect(estimatedFee.feeAsset).toBe('EUR');
      expect(estimatedFee.pricePerUnit.valueOf()).toBe('7120');
      expect(estimatedFee.totalFee.valueOf()).toBe('71.2');
      expect(estimatedFee.amount.valueOf()).toBe('2');
    });

    it('estimates maker fees for sell orders (1 BTC)', () => {
      const amountOfBTC = 1;
      const pricePerBTC = 7120;
      const orderSide = OrderSide.SELL;
      const type = OrderType.LIMIT;
      const fee = {
        maker_fee_rate: '0.0050',
        taker_fee_rate: '0.0050',
        usd_volume: null,
      };
      const estimatedFee = FeeUtil.estimateFee(amountOfBTC, pricePerBTC, orderSide, type, fee, 'EUR');
      expect(estimatedFee.effectivePricePerUnit.valueOf()).toBe('7084.4');
      expect(estimatedFee.effectiveTotal.valueOf()).toBe('7084.4');
      expect(estimatedFee.feeAsset).toBe('EUR');
      expect(estimatedFee.pricePerUnit.valueOf()).toBe('7120');
      expect(estimatedFee.totalFee.valueOf()).toBe('35.6');
      expect(estimatedFee.amount.valueOf()).toBe('1');
    });

    /*
     * Expected values have been verified on "https://pro.coinbase.com/trade/DASH-BTC" at "2020-06-27T12:13:06.770Z".
     */
    it('estimates accurate fees for digital currencies (wallet)', () => {
      const dashAmount = '2.023';
      const price = '0.00777501';
      const side = OrderSide.BUY;
      const type = OrderType.LIMIT;
      const tier = {
        maker_fee_rate: '0.0050',
        taker_fee_rate: '0.0050',
        usd_volume: null,
      };
      const counter = 'BTC';

      const estimatedFee = FeeUtil.estimateFee(dashAmount, price, side, type, tier, counter);
      // When buying, you pay more than you get (because of fees)
      expect(estimatedFee.effectivePricePerUnit.gt(estimatedFee.pricePerUnit)).toBeTrue();

      const fee = estimatedFee.toJSON();
      expect(fee.amount).toBe(dashAmount);
      expect(fee.pricePerUnit).toBe(price);
      expect(estimatedFee.totalFee.toFixed(8)).toBe('0.00007864');
      expect(estimatedFee.effectiveTotal.toFixed(8)).toBe('0.01580749');
      expect(fee.feeAsset).toBe(counter);
    });

    /*
     * Expected values have been verified on "https://pro.coinbase.com/trade/BTC-EUR" at "2020-06-27T14:16:09.805Z".
     */
    it('estimates accurate fees for money (fiat)', () => {
      const btcAmount = '0.01581142';
      const price = '8175';
      const side = OrderSide.SELL;
      const type = OrderType.LIMIT;
      const tier = {
        maker_fee_rate: '0.0050',
        taker_fee_rate: '0.0050',
        usd_volume: null,
      };
      const counter = 'EUR';

      const estimatedFee = FeeUtil.estimateFee(btcAmount, price, side, type, tier, counter);
      // When selling, you get less than you ask for (because of fees)
      expect(estimatedFee.effectivePricePerUnit.lt(estimatedFee.pricePerUnit)).toBeTrue();

      // The order's "size"
      expect(estimatedFee.amount.toFixed(8)).toBe(btcAmount);
      expect(estimatedFee.feeAsset).toBe(counter);
      // The order's "price"
      expect(estimatedFee.pricePerUnit.toFixed(8)).toBe('8175.00000000');
      expect(estimatedFee.effectivePricePerUnit.toFixed(8)).toBe('8134.12500000');
      // The order's "fill_fees" (Coinbase Pro uses up to 16 decimal places here)
      expect(estimatedFee.totalFee.toFixed(16)).toBe('0.6462917925000000');
      // The order's "executed_value" (Coinbase Pro uses up to 16 decimal places here)
      expect(estimatedFee.total.toFixed(16)).toBe('129.2583585000000000');
      expect(estimatedFee.effectiveTotal.toFixed(2)).toBe('128.61');
    });

    it('returns a serializable payload', () => {
      const amount = '2.023';
      const price = '0.00777501';
      const side = OrderSide.BUY;
      const type = OrderType.LIMIT;
      const tier = {
        maker_fee_rate: '0.0050',
        taker_fee_rate: '0.0050',
        usd_volume: null,
      };

      const estimatedFee = FeeUtil.estimateFee(amount, price, side, type, tier, 'BTC');
      const stringified = estimatedFee.toString();
      expect(typeof stringified).toBe('string');

      const json: FeeEstimateJSON = JSON.parse(stringified);
      expect(json.pricePerUnit).toBe(price);
    });
  });
});
