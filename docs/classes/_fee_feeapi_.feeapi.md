[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["fee/FeeAPI"](../modules/_fee_feeapi_.md) › [FeeAPI](_fee_feeapi_.feeapi.md)

# Class: FeeAPI

## Hierarchy

- **FeeAPI**

## Index

### Constructors

- [constructor](_fee_feeapi_.feeapi.md#constructor)

### Methods

- [getCurrentFees](_fee_feeapi_.feeapi.md#getcurrentfees)

### Object literals

- [URL](_fee_feeapi_.feeapi.md#static-readonly-url)

## Constructors

### constructor

\+ **new FeeAPI**(`apiClient`: AxiosInstance): _[FeeAPI](_fee_feeapi_.feeapi.md)_

_Defined in [src/fee/FeeAPI.ts:20](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fee/FeeAPI.ts#L20)_

**Parameters:**

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** _[FeeAPI](_fee_feeapi_.feeapi.md)_

## Methods

### getCurrentFees

▸ **getCurrentFees**(): _Promise‹[FeeTier](../interfaces/_fee_feeapi_.feetier.md)›_

_Defined in [src/fee/FeeAPI.ts:31](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fee/FeeAPI.ts#L31)_

Get your current maker & taker fee rates, as well as your 30-day trailing volume. Quoted rates are subject to change.

**`see`** https://docs.pro.coinbase.com/#fees

**`see`** https://help.coinbase.com/en/pro/trading-and-funding/trading-rules-and-fees/fees.html

**Returns:** _Promise‹[FeeTier](../interfaces/_fee_feeapi_.feetier.md)›_

## Object literals

### `Static` `Readonly` URL

### ▪ **URL**: _object_

_Defined in [src/fee/FeeAPI.ts:18](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fee/FeeAPI.ts#L18)_

### FEES

• **FEES**: _string_ = `/fees`

_Defined in [src/fee/FeeAPI.ts:19](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fee/FeeAPI.ts#L19)_
