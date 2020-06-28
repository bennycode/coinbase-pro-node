import Big from 'big.js';

export interface FeeEstimatePayload {
  amount: Big;
  effectivePricePerUnit: Big;
  effectiveTotal: Big;
  feeAsset: string;
  pricePerUnit: Big;
  total: Big;
  totalFee: Big;
}

export interface FeeEstimateJSON {
  amount: string;
  effectivePricePerUnit: string;
  effectiveTotal: string;
  feeAsset: string;
  pricePerUnit: string;
  total: string;
  totalFee: string;
}

export class FeeEstimate {
  /** Amount of base units. */
  readonly amount: Big;
  /** Price per base unit in counter value plus fee (BUY) / minus fee (SELL). */
  readonly effectivePricePerUnit: Big;
  /** What needs to be paid plus fee (BUY) / what you will receive minus fee (SELL). */
  readonly effectiveTotal: Big;
  /** Product with which the fees are paid. */
  readonly feeAsset: string;
  /** Price per base unit in counter value. */
  readonly pricePerUnit: Big;
  /** Total fee, usually paid in counter value. */
  readonly totalFee: Big;
  /** Executed value (total before fees). */
  readonly total: Big;

  constructor(params: FeeEstimatePayload) {
    this.amount = params.amount;
    this.total = params.total;
    this.effectivePricePerUnit = params.effectivePricePerUnit;
    this.effectiveTotal = params.effectiveTotal;
    this.feeAsset = params.feeAsset;
    this.pricePerUnit = params.pricePerUnit;
    this.totalFee = params.totalFee;
  }

  toJSON(): FeeEstimateJSON {
    return {
      amount: this.amount.valueOf(),
      effectivePricePerUnit: this.effectivePricePerUnit.valueOf(),
      effectiveTotal: this.effectiveTotal.valueOf(),
      feeAsset: this.feeAsset,
      pricePerUnit: this.pricePerUnit.valueOf(),
      total: this.total.valueOf(),
      totalFee: this.totalFee.valueOf(),
    };
  }

  toString(): string {
    return JSON.stringify(this.toJSON());
  }
}
