[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["fee/FeeUtil"](../modules/_fee_feeutil_.md) › [FeeUtil](_fee_feeutil_.feeutil.md)

# Class: FeeUtil

## Hierarchy

- **FeeUtil**

## Index

### Methods

- [estimateFee](_fee_feeutil_.feeutil.md#static-estimatefee)
- [getFeeRate](_fee_feeutil_.feeutil.md#static-getfeerate)

## Methods

### `Static` estimateFee

▸ **estimateFee**(`baseAmount`: number, `counterPrice`: number, `side`: OrderSide, `type`: [OrderType](../enums/_order_orderapi_.ordertype.md), `feeTier`: [FeeTier](../interfaces/_fee_feeapi_.feetier.md)): _[EstimatedFee](../interfaces/_fee_feeutil_.estimatedfee.md)_

_Defined in [src/fee/FeeUtil.ts:20](https://github.com/bennyn/coinbase-pro-node/blob/2c257dd/src/fee/FeeUtil.ts#L20)_

**Parameters:**

| Name           | Type                                                |
| -------------- | --------------------------------------------------- |
| `baseAmount`   | number                                              |
| `counterPrice` | number                                              |
| `side`         | OrderSide                                           |
| `type`         | [OrderType](../enums/_order_orderapi_.ordertype.md) |
| `feeTier`      | [FeeTier](../interfaces/_fee_feeapi_.feetier.md)    |

**Returns:** _[EstimatedFee](../interfaces/_fee_feeutil_.estimatedfee.md)_

---

### `Static` getFeeRate

▸ **getFeeRate**(`type`: [OrderType](../enums/_order_orderapi_.ordertype.md), `feeTier`: [FeeTier](../interfaces/_fee_feeapi_.feetier.md)): _number_

_Defined in [src/fee/FeeUtil.ts:13](https://github.com/bennyn/coinbase-pro-node/blob/2c257dd/src/fee/FeeUtil.ts#L13)_

**Parameters:**

| Name      | Type                                                |
| --------- | --------------------------------------------------- |
| `type`    | [OrderType](../enums/_order_orderapi_.ordertype.md) |
| `feeTier` | [FeeTier](../interfaces/_fee_feeapi_.feetier.md)    |

**Returns:** _number_
