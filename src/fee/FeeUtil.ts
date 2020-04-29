import {OrderSide, OrderType} from '..';
import {FeeTier} from './FeeAPI';

export interface EstimatedFee {
  /** Price per base unit in counter value after fees. */
  effectivePricePerUnit: number;
  /** What needs to be paid plus fee (BUY) / what you will receive minus fee (SELL). */
  effectiveTotal: number;
  /** Product with which the fees are paid. */
  feeAsset: string;
  /** Price per base unit in counter value. */
  pricePerUnit: number;
  /** Total fee, usually paid in counter value. */
  totalFee: number;
  /** Amount of base units. */
  units: number;
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
    feeTier: FeeTier,
    feeAsset: string
  ): EstimatedFee {
    const feeRate = FeeUtil.getFeeRate(type, feeTier);
    const amount = baseAmount;
    const price = counterPrice;
    const subTotal = baseAmount * price;
    const fee = subTotal * feeRate;
    const total = side === OrderSide.BUY ? subTotal + fee : subTotal - fee;
    const effectivePrice = total / amount;
    return {
      units: amount,
      effectivePricePerUnit: effectivePrice,
      totalFee: fee,
      feeAsset,
      pricePerUnit: price,
      effectiveTotal: total,
    };
  }
}
