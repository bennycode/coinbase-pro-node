import {OrderSide, OrderType} from '..';
import {FeeTier} from './FeeAPI';

export interface EstimatedFee {
  amount: number;
  effectivePrice: number;
  fee: number;
  price: number;
  total: number;
}

export class FeeUtil {
  static getFeeRate(type: OrderType, feeTier: FeeTier): number {
    if (type === OrderType.MARKET) {
      return parseFloat(feeTier.taker_fee_rate);
    }
    return parseFloat(feeTier.maker_fee_rate);
  }

  static estimateFee(
    baseAmount: number,
    counterPrice: number,
    side: OrderSide,
    type: OrderType,
    feeTier: FeeTier
  ): EstimatedFee {
    const feeRate = FeeUtil.getFeeRate(type, feeTier);
    const amount = baseAmount;
    const price = counterPrice;
    const subTotal = baseAmount * price;
    const fee = subTotal * feeRate;
    const total = side === OrderSide.BUY ? subTotal + fee : subTotal - fee;
    const effectivePrice = total / amount;
    return {
      amount,
      effectivePrice,
      fee,
      price,
      total,
    };
  }
}
