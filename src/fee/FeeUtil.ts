import {FeeEstimate, OrderSide, OrderType} from '..';
import {FeeTier} from '.';
import Big, {BigSource} from 'big.js';

export class FeeUtil {
  static getFeeRate(type: OrderType, feeTier: FeeTier): number {
    if (type === OrderType.MARKET) {
      return parseFloat(feeTier.taker_fee_rate);
    }
    return parseFloat(feeTier.maker_fee_rate);
  }

  /**
   * Calculate the fee which must be paid (often deducted from the revenues) when selling or buying a product.
   *
   * @param baseAmount - Amount you want to buy or sell
   * @param counterPrice - Price on Coinbase Pro
   * @param side - Whether you want to buy or sell
   * @param type - Type of order which is used to determine fees (maker or taker)
   * @param feeTier - Your account's fee tier
   * @param feeAsset - Currency in which the fee should be paid
   * @returns Estimated fee details
   */
  static estimateFee(
    baseAmount: BigSource,
    counterPrice: BigSource,
    side: OrderSide,
    type: OrderType,
    feeTier: FeeTier,
    feeAsset: string
  ): FeeEstimate {
    const amount = new Big(baseAmount);
    const pricePerUnit = new Big(counterPrice);

    const subTotal = amount.mul(pricePerUnit);
    const feeRate = FeeUtil.getFeeRate(type, feeTier);
    const totalFee = subTotal.mul(new Big(feeRate));

    const effectiveTotal = side === OrderSide.BUY ? subTotal.plus(totalFee) : subTotal.minus(totalFee);
    const effectivePricePerUnit = effectiveTotal.div(amount);

    return new FeeEstimate({
      amount,
      effectivePricePerUnit,
      effectiveTotal,
      feeAsset,
      pricePerUnit,
      total: subTotal,
      totalFee,
    });
  }
}
