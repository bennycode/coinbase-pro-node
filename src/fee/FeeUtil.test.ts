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
      const estimatedFee = FeeUtil.estimateFee(amountOfBTC, pricePerBTC, orderSide, type, fee);
      expect(estimatedFee.amount).toBe(amountOfBTC);
      expect(estimatedFee.price).toBe(pricePerBTC);
      expect(estimatedFee.fee).toBe(7.12);
      expect(estimatedFee.total).toBe(1431.12);
      expect(estimatedFee.effectivePrice).toBeCloseTo(7155.6, 2);
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
      const estimatedFee = FeeUtil.estimateFee(amountOfBTC, pricePerBTC, orderSide, type, fee);
      expect(estimatedFee.amount).toBe(amountOfBTC);
      expect(estimatedFee.price).toBe(pricePerBTC);
      expect(estimatedFee.fee).toBe(35.6);
      expect(estimatedFee.total).toBe(7155.6);
      expect(estimatedFee.effectivePrice).toBe(7155.6);
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
      const estimatedFee = FeeUtil.estimateFee(amountOfBTC, pricePerBTC, orderSide, type, fee);
      expect(estimatedFee.amount).toBe(amountOfBTC);
      expect(estimatedFee.price).toBe(pricePerBTC);
      expect(estimatedFee.fee).toBe(17.8);
      expect(estimatedFee.total).toBe(7137.8);
      expect(estimatedFee.effectivePrice).toBe(7137.8);
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
      const estimatedFee = FeeUtil.estimateFee(amountOfBTC, pricePerBTC, orderSide, type, fee);
      expect(estimatedFee.amount).toBe(amountOfBTC);
      expect(estimatedFee.price).toBe(pricePerBTC);
      expect(estimatedFee.fee).toBe(71.2);
      expect(estimatedFee.total).toBe(14311.2);
      expect(estimatedFee.effectivePrice).toBe(7155.6);
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
      const estimatedFee = FeeUtil.estimateFee(amountOfBTC, pricePerBTC, orderSide, type, fee);
      expect(estimatedFee.amount).toBe(amountOfBTC);
      expect(estimatedFee.price).toBe(pricePerBTC);
      expect(estimatedFee.fee).toBe(35.6);
      expect(estimatedFee.total).toBe(7084.4);
      expect(estimatedFee.effectivePrice).toBe(7084.4);
    });
  });
});
