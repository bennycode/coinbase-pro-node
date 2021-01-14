[coinbase-pro-node](../../README.md) / [Exports](../../modules.md) / [fee/FeeAPI](../../modules/fee_feeapi.md) / FeeAPI

# Class: FeeAPI

[fee/FeeAPI](../../modules/fee_feeapi.md).FeeAPI

## Hierarchy

- **FeeAPI**

## Table of contents

### Constructors

- [constructor](feeapi.feeapi.md#constructor)

### Properties

- [URL](feeapi.feeapi.md#url)

### Methods

- [getCurrentFees](feeapi.feeapi.md#getcurrentfees)

## Constructors

### constructor

\+ **new FeeAPI**(`apiClient`: AxiosInstance): [_FeeAPI_](feeapi.feeapi.md)

#### Parameters:

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** [_FeeAPI_](feeapi.feeapi.md)

Defined in: [fee/FeeAPI.ts:20](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/fee/FeeAPI.ts#L20)

## Properties

### URL

▪ `Readonly` `Static` **URL**: { `FEES`: _string_ }

#### Type declaration:

| Name   | Type     |
| ------ | -------- |
| `FEES` | _string_ |

Defined in: [fee/FeeAPI.ts:18](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/fee/FeeAPI.ts#L18)

## Methods

### getCurrentFees

▸ **getCurrentFees**(): _Promise_<[_FeeTier_](../../interfaces/fee/feeapi.feetier.md)\>

Get your current maker & taker fee rates, as well as your 30-day trailing volume. Quoted rates are subject to change.

**`see`** https://docs.pro.coinbase.com/#fees

**`see`** https://help.coinbase.com/en/pro/trading-and-funding/trading-rules-and-fees/fees.html

**Returns:** _Promise_<[_FeeTier_](../../interfaces/fee/feeapi.feetier.md)\>

Defined in: [fee/FeeAPI.ts:31](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/fee/FeeAPI.ts#L31)
