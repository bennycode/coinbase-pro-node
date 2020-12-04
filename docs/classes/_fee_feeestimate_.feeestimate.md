**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["fee/FeeEstimate"](../modules/_fee_feeestimate_.md) / FeeEstimate

# Class: FeeEstimate

## Hierarchy

- **FeeEstimate**

## Index

### Constructors

- [constructor](_fee_feeestimate_.feeestimate.md#constructor)

### Properties

- [amount](_fee_feeestimate_.feeestimate.md#amount)
- [effectivePricePerUnit](_fee_feeestimate_.feeestimate.md#effectivepriceperunit)
- [effectiveTotal](_fee_feeestimate_.feeestimate.md#effectivetotal)
- [feeAsset](_fee_feeestimate_.feeestimate.md#feeasset)
- [pricePerUnit](_fee_feeestimate_.feeestimate.md#priceperunit)
- [total](_fee_feeestimate_.feeestimate.md#total)
- [totalFee](_fee_feeestimate_.feeestimate.md#totalfee)

### Methods

- [toJSON](_fee_feeestimate_.feeestimate.md#tojson)
- [toString](_fee_feeestimate_.feeestimate.md#tostring)

## Constructors

### constructor

\+ **new FeeEstimate**(`params`: [FeeEstimatePayload](../interfaces/_fee_feeestimate_.feeestimatepayload.md)): [FeeEstimate](_fee_feeestimate_.feeestimate.md)

_Defined in [src/fee/FeeEstimate.ts:37](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/fee/FeeEstimate.ts#L37)_

#### Parameters:

| Name     | Type                                                                        |
| -------- | --------------------------------------------------------------------------- |
| `params` | [FeeEstimatePayload](../interfaces/_fee_feeestimate_.feeestimatepayload.md) |

**Returns:** [FeeEstimate](_fee_feeestimate_.feeestimate.md)

## Properties

### amount

• `Readonly` **amount**: Big

_Defined in [src/fee/FeeEstimate.ts:25](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/fee/FeeEstimate.ts#L25)_

Amount of base units.

---

### effectivePricePerUnit

• `Readonly` **effectivePricePerUnit**: Big

_Defined in [src/fee/FeeEstimate.ts:27](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/fee/FeeEstimate.ts#L27)_

Price per base unit in counter value plus fee (BUY) / minus fee (SELL).

---

### effectiveTotal

• `Readonly` **effectiveTotal**: Big

_Defined in [src/fee/FeeEstimate.ts:29](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/fee/FeeEstimate.ts#L29)_

What needs to be paid plus fee (BUY) / what you will receive minus fee (SELL).

---

### feeAsset

• `Readonly` **feeAsset**: string

_Defined in [src/fee/FeeEstimate.ts:31](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/fee/FeeEstimate.ts#L31)_

Product with which the fees are paid.

---

### pricePerUnit

• `Readonly` **pricePerUnit**: Big

_Defined in [src/fee/FeeEstimate.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/fee/FeeEstimate.ts#L33)_

Price per base unit in counter value.

---

### total

• `Readonly` **total**: Big

_Defined in [src/fee/FeeEstimate.ts:37](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/fee/FeeEstimate.ts#L37)_

Executed value (total before fees).

---

### totalFee

• `Readonly` **totalFee**: Big

_Defined in [src/fee/FeeEstimate.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/fee/FeeEstimate.ts#L35)_

Total fee, usually paid in counter value.

## Methods

### toJSON

▸ **toJSON**(): [FeeEstimateJSON](../interfaces/_fee_feeestimate_.feeestimatejson.md)

_Defined in [src/fee/FeeEstimate.ts:49](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/fee/FeeEstimate.ts#L49)_

**Returns:** [FeeEstimateJSON](../interfaces/_fee_feeestimate_.feeestimatejson.md)

---

### toString

▸ **toString**(): string

_Defined in [src/fee/FeeEstimate.ts:61](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/fee/FeeEstimate.ts#L61)_

**Returns:** string
