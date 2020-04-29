import {OrderSide, OrderType} from '..';
import {FeeTier} from './FeeAPI';
import Big, {BigSource} from 'big.js';

export interface EstimatedFee {
  /** Amount of base units. */
  amount: Big;
  /** Price per base unit in counter value after fees. */
  effectivePricePerUnit: Big;
  /** What needs to be paid plus fee (BUY) / what you will receive minus fee (SELL). */
  effectiveTotal: Big;
  /** Product with which the fees are paid. */
  feeAsset: string;
  /** Price per base unit in counter value. */
  pricePerUnit: Big;
  /** Total fee, usually paid in counter value. */
  totalFee: Big;
}

export class FeeUtil {
  static getFeeRate(type: OrderType, feeTier: FeeTier): number {
    if (type === OrderType.MARKET) {
      return parseFloat(feeTier.taker_fee_rate);
    }
    return parseFloat(feeTier.maker_fee_rate);
  }

  static estimateFee(
    baseAmount: BigSource,
    counterPrice: BigSource,
    side: OrderSide,
    type: OrderType,
    feeTier: FeeTier,
    feeAsset: string
  ): EstimatedFee {
    const feeRate = FeeUtil.getFeeRate(type, feeTier);
    const amount = new Big(baseAmount);
    const pricePerUnit = new Big(counterPrice);
    const subTotal = amount.mul(pricePerUnit);
    const totalFee = subTotal.mul(new Big(feeRate));
    const effectiveTotal = side === OrderSide.BUY ? subTotal.plus(totalFee) : subTotal.minus(totalFee);
    const effectivePricePerUnit = effectiveTotal.div(amount);
    return {
      amount,
      effectivePricePerUnit,
      effectiveTotal,
      feeAsset,
      pricePerUnit,
      totalFee,
    };
  }
}
