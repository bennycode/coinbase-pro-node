**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["fee/FeeAPI"](../modules/_fee_feeapi_.md) / FeeAPI

# Class: FeeAPI

## Hierarchy

- **FeeAPI**

## Index

### Constructors

- [constructor](_fee_feeapi_.feeapi.md#constructor)

### Methods

- [getCurrentFees](_fee_feeapi_.feeapi.md#getcurrentfees)

### Object literals

- [URL](_fee_feeapi_.feeapi.md#url)

## Constructors

### constructor

\+ **new FeeAPI**(`apiClient`: AxiosInstance): [FeeAPI](_fee_feeapi_.feeapi.md)

_Defined in [src/fee/FeeAPI.ts:20](https://github.com/bennycode/coinbase-pro-node/blob/cb84fec/src/fee/FeeAPI.ts#L20)_

#### Parameters:

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** [FeeAPI](_fee_feeapi_.feeapi.md)

## Methods

### getCurrentFees

▸ **getCurrentFees**(): Promise\<[FeeTier](../interfaces/_fee_feeapi_.feetier.md)>

_Defined in [src/fee/FeeAPI.ts:31](https://github.com/bennycode/coinbase-pro-node/blob/cb84fec/src/fee/FeeAPI.ts#L31)_

Get your current maker & taker fee rates, as well as your 30-day trailing volume. Quoted rates are subject to change.

**`see`** https://docs.pro.coinbase.com/#fees

**`see`** https://help.coinbase.com/en/pro/trading-and-funding/trading-rules-and-fees/fees.html

**Returns:** Promise\<[FeeTier](../interfaces/_fee_feeapi_.feetier.md)>

## Object literals

### URL

▪ `Static` `Readonly` **URL**: object

_Defined in [src/fee/FeeAPI.ts:18](https://github.com/bennycode/coinbase-pro-node/blob/cb84fec/src/fee/FeeAPI.ts#L18)_

#### Properties:

| Name   | Type   | Value     |
| ------ | ------ | --------- |
| `FEES` | string | \`/fees\` |
