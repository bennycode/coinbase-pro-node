[coinbase-pro-node](../README.md) / [Exports](../modules.md) / FeeAPI

# Class: FeeAPI

## Table of contents

### Constructors

- [constructor](FeeAPI.md#constructor)

### Properties

- [URL](FeeAPI.md#url)

### Methods

- [getCurrentFees](FeeAPI.md#getcurrentfees)

## Constructors

### constructor

• **new FeeAPI**(`apiClient`)

#### Parameters

| Name        | Type            |
| :---------- | :-------------- |
| `apiClient` | `AxiosInstance` |

#### Defined in

[fee/FeeAPI.ts:22](https://github.com/bennycode/coinbase-pro-node/blob/dacd532/src/fee/FeeAPI.ts#L22)

## Properties

### URL

▪ `Static` `Readonly` **URL**: `Object`

#### Type declaration

| Name   | Type     |
| :----- | :------- |
| `FEES` | `string` |

#### Defined in

[fee/FeeAPI.ts:18](https://github.com/bennycode/coinbase-pro-node/blob/dacd532/src/fee/FeeAPI.ts#L18)

## Methods

### getCurrentFees

▸ **getCurrentFees**(): `Promise`<[`FeeTier`](../interfaces/FeeTier.md)\>

Get your current maker & taker fee rates, as well as your 30-day trailing volume. Quoted rates are subject to change.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getfees

#### Returns

`Promise`<[`FeeTier`](../interfaces/FeeTier.md)\>

#### Defined in

[fee/FeeAPI.ts:30](https://github.com/bennycode/coinbase-pro-node/blob/dacd532/src/fee/FeeAPI.ts#L30)
