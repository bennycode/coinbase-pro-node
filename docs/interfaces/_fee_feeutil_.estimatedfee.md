[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["fee/FeeUtil"](../modules/_fee_feeutil_.md) › [EstimatedFee](_fee_feeutil_.estimatedfee.md)

# Interface: EstimatedFee

## Hierarchy

- **EstimatedFee**

## Index

### Properties

- [amount](_fee_feeutil_.estimatedfee.md#amount)
- [effectivePricePerUnit](_fee_feeutil_.estimatedfee.md#effectivepriceperunit)
- [effectiveTotal](_fee_feeutil_.estimatedfee.md#effectivetotal)
- [feeAsset](_fee_feeutil_.estimatedfee.md#feeasset)
- [pricePerUnit](_fee_feeutil_.estimatedfee.md#priceperunit)
- [totalFee](_fee_feeutil_.estimatedfee.md#totalfee)

## Properties

### amount

• **amount**: _Big_

_Defined in [src/fee/FeeUtil.ts:7](https://github.com/bennyn/coinbase-pro-node/blob/68f4a94/src/fee/FeeUtil.ts#L7)_

Amount of base units.

---

### effectivePricePerUnit

• **effectivePricePerUnit**: _Big_

_Defined in [src/fee/FeeUtil.ts:9](https://github.com/bennyn/coinbase-pro-node/blob/68f4a94/src/fee/FeeUtil.ts#L9)_

Price per base unit in counter value after fees.

---

### effectiveTotal

• **effectiveTotal**: _Big_

_Defined in [src/fee/FeeUtil.ts:11](https://github.com/bennyn/coinbase-pro-node/blob/68f4a94/src/fee/FeeUtil.ts#L11)_

What needs to be paid plus fee (BUY) / what you will receive minus fee (SELL).

---

### feeAsset

• **feeAsset**: _string_

_Defined in [src/fee/FeeUtil.ts:13](https://github.com/bennyn/coinbase-pro-node/blob/68f4a94/src/fee/FeeUtil.ts#L13)_

Product with which the fees are paid.

---

### pricePerUnit

• **pricePerUnit**: _Big_

_Defined in [src/fee/FeeUtil.ts:15](https://github.com/bennyn/coinbase-pro-node/blob/68f4a94/src/fee/FeeUtil.ts#L15)_

Price per base unit in counter value.

---

### totalFee

• **totalFee**: _Big_

_Defined in [src/fee/FeeUtil.ts:17](https://github.com/bennyn/coinbase-pro-node/blob/68f4a94/src/fee/FeeUtil.ts#L17)_

Total fee, usually paid in counter value.
