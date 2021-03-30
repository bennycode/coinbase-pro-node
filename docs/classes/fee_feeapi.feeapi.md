[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [fee/FeeAPI](../modules/fee_feeapi.md) / FeeAPI

# Class: FeeAPI

[fee/FeeAPI](../modules/fee_feeapi.md).FeeAPI

## Table of contents

### Constructors

- [constructor](fee_feeapi.feeapi.md#constructor)

### Properties

- [URL](fee_feeapi.feeapi.md#url)

### Methods

- [getCurrentFees](fee_feeapi.feeapi.md#getcurrentfees)

## Constructors

### constructor

\+ **new FeeAPI**(`apiClient`: AxiosInstance): [*FeeAPI*](fee_feeapi.feeapi.md)

#### Parameters:

Name | Type |
:------ | :------ |
`apiClient` | AxiosInstance |

**Returns:** [*FeeAPI*](fee_feeapi.feeapi.md)

Defined in: [fee/FeeAPI.ts:20](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/fee/FeeAPI.ts#L20)

## Properties

### URL

▪ `Static` `Readonly` **URL**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`FEES` | *string* |

Defined in: [fee/FeeAPI.ts:18](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/fee/FeeAPI.ts#L18)

## Methods

### getCurrentFees

▸ **getCurrentFees**(): *Promise*<[*FeeTier*](../interfaces/fee_feeapi.feetier.md)\>

Get your current maker & taker fee rates, as well as your 30-day trailing volume. Quoted rates are subject to
change.

**`see`** https://docs.pro.coinbase.com/#fees

**`see`** https://help.coinbase.com/en/pro/trading-and-funding/trading-rules-and-fees/fees.html

**Returns:** *Promise*<[*FeeTier*](../interfaces/fee_feeapi.feetier.md)\>

Defined in: [fee/FeeAPI.ts:31](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/fee/FeeAPI.ts#L31)
