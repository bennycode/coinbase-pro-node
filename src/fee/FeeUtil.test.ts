import {OrderSide, OrderType} from '..';
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
  });
});
