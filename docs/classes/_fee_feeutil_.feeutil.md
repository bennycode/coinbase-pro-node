**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["fee/FeeUtil"](../modules/_fee_feeutil_.md) / FeeUtil

# Class: FeeUtil

## Hierarchy

- **FeeUtil**

## Index

### Methods

- [estimateFee](_fee_feeutil_.feeutil.md#estimatefee)
- [getFeeRate](_fee_feeutil_.feeutil.md#getfeerate)

## Methods

### estimateFee

▸ `Static`**estimateFee**(`baseAmount`: BigSource, `counterPrice`: BigSource, `side`: OrderSide, `type`: [OrderType](../enums/_order_orderapi_.ordertype.md), `feeTier`: [FeeTier](../interfaces/_fee_feeapi_.feetier.md), `feeAsset`: string): [FeeEstimate](_fee_feeestimate_.feeestimate.md)

_Defined in [src/fee/FeeUtil.ts:24](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/fee/FeeUtil.ts#L24)_

Calculate the fee which must be paid (often deducted from the revenues) when selling or buying a product.

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `baseAmount` | BigSource | Amount you want to buy or sell |
| `counterPrice` | BigSource | Price on Coinbase Pro |
| `side` | OrderSide | Whether you want to buy or sell |
| `type` | [OrderType](../enums/_order_orderapi_.ordertype.md) | Type of order which is used to determine fees (maker or taker) |
| `feeTier` | [FeeTier](../interfaces/_fee_feeapi_.feetier.md) | Your account's fee tier |
| `feeAsset` | string | Currency in which the fee should be paid |

**Returns:** [FeeEstimate](_fee_feeestimate_.feeestimate.md)

Estimated fee details

---

### getFeeRate

▸ `Static`**getFeeRate**(`type`: [OrderType](../enums/_order_orderapi_.ordertype.md), `feeTier`: [FeeTier](../interfaces/_fee_feeapi_.feetier.md)): number

_Defined in [src/fee/FeeUtil.ts:6](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/fee/FeeUtil.ts#L6)_

#### Parameters:

| Name      | Type                                                |
| --------- | --------------------------------------------------- |
| `type`    | [OrderType](../enums/_order_orderapi_.ordertype.md) |
| `feeTier` | [FeeTier](../interfaces/_fee_feeapi_.feetier.md)    |

**Returns:** number
