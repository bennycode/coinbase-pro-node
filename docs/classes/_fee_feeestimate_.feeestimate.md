[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["fee/FeeEstimate"](../modules/_fee_feeestimate_.md) › [FeeEstimate](_fee_feeestimate_.feeestimate.md)

# Class: FeeEstimate

## Hierarchy

- **FeeEstimate**

## Index

### Constructors

- [constructor](_fee_feeestimate_.feeestimate.md#constructor)

### Properties

- [amount](_fee_feeestimate_.feeestimate.md#readonly-amount)
- [effectivePricePerUnit](_fee_feeestimate_.feeestimate.md#readonly-effectivepriceperunit)
- [effectiveTotal](_fee_feeestimate_.feeestimate.md#readonly-effectivetotal)
- [feeAsset](_fee_feeestimate_.feeestimate.md#readonly-feeasset)
- [pricePerUnit](_fee_feeestimate_.feeestimate.md#readonly-priceperunit)
- [total](_fee_feeestimate_.feeestimate.md#readonly-total)
- [totalFee](_fee_feeestimate_.feeestimate.md#readonly-totalfee)

### Methods

- [toJSON](_fee_feeestimate_.feeestimate.md#tojson)
- [toString](_fee_feeestimate_.feeestimate.md#tostring)

## Constructors

### constructor

\+ **new FeeEstimate**(`params`: [FeeEstimatePayload](../interfaces/_fee_feeestimate_.feeestimatepayload.md)): _[FeeEstimate](_fee_feeestimate_.feeestimate.md)_

_Defined in [src/fee/FeeEstimate.ts:37](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fee/FeeEstimate.ts#L37)_

**Parameters:**

| Name     | Type                                                                        |
| -------- | --------------------------------------------------------------------------- |
| `params` | [FeeEstimatePayload](../interfaces/_fee_feeestimate_.feeestimatepayload.md) |

**Returns:** _[FeeEstimate](_fee_feeestimate_.feeestimate.md)_

## Properties

### `Readonly` amount

• **amount**: _Big_

_Defined in [src/fee/FeeEstimate.ts:25](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fee/FeeEstimate.ts#L25)_

Amount of base units.

---

### `Readonly` effectivePricePerUnit

• **effectivePricePerUnit**: _Big_

_Defined in [src/fee/FeeEstimate.ts:27](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fee/FeeEstimate.ts#L27)_

Price per base unit in counter value plus fee (BUY) / minus fee (SELL).

---

### `Readonly` effectiveTotal

• **effectiveTotal**: _Big_

_Defined in [src/fee/FeeEstimate.ts:29](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fee/FeeEstimate.ts#L29)_

What needs to be paid plus fee (BUY) / what you will receive minus fee (SELL).

---

### `Readonly` feeAsset

• **feeAsset**: _string_

_Defined in [src/fee/FeeEstimate.ts:31](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fee/FeeEstimate.ts#L31)_

Product with which the fees are paid.

---

### `Readonly` pricePerUnit

• **pricePerUnit**: _Big_

_Defined in [src/fee/FeeEstimate.ts:33](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fee/FeeEstimate.ts#L33)_

Price per base unit in counter value.

---

### `Readonly` total

• **total**: _Big_

_Defined in [src/fee/FeeEstimate.ts:37](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fee/FeeEstimate.ts#L37)_

Executed value (total before fees).

---

### `Readonly` totalFee

• **totalFee**: _Big_

_Defined in [src/fee/FeeEstimate.ts:35](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fee/FeeEstimate.ts#L35)_

Total fee, usually paid in counter value.

## Methods

### toJSON

▸ **toJSON**(): _[FeeEstimateJSON](../interfaces/_fee_feeestimate_.feeestimatejson.md)_

_Defined in [src/fee/FeeEstimate.ts:49](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fee/FeeEstimate.ts#L49)_

**Returns:** _[FeeEstimateJSON](../interfaces/_fee_feeestimate_.feeestimatejson.md)_

---

### toString

▸ **toString**(): _string_

_Defined in [src/fee/FeeEstimate.ts:61](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fee/FeeEstimate.ts#L61)_

**Returns:** _string_
