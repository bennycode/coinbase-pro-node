[coinbase-pro-node](../README.md) / [Exports](../modules.md) / CurrencyAPI

# Class: CurrencyAPI

## Table of contents

### Constructors

- [constructor](CurrencyAPI.md#constructor)

### Properties

- [URL](CurrencyAPI.md#url)

### Methods

- [listCurrencies](CurrencyAPI.md#listcurrencies)

## Constructors

### constructor

• **new CurrencyAPI**(`apiClient`)

#### Parameters

| Name        | Type            |
| :---------- | :-------------- |
| `apiClient` | `AxiosInstance` |

#### Defined in

[currency/CurrencyAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/currency/CurrencyAPI.ts#L34)

## Properties

### URL

▪ `Static` `Readonly` **URL**: `Object`

#### Type declaration

| Name         | Type     |
| :----------- | :------- |
| `CURRENCIES` | `string` |

#### Defined in

[currency/CurrencyAPI.ts:30](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/currency/CurrencyAPI.ts#L30)

## Methods

### listCurrencies

▸ **listCurrencies**(): `Promise`<[`Currency`](../interfaces/Currency.md)[]\>

List known currencies. Currency codes will conform to the ISO 4217 standard where possible. Currencies which have or had no representation in ISO 4217 may use a custom code.

**`see`** https://docs.cloud.coinbase.com/sign-in-with-coinbase/docs/api-currencies#get-currencies

#### Returns

`Promise`<[`Currency`](../interfaces/Currency.md)[]\>

#### Defined in

[currency/CurrencyAPI.ts:43](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/currency/CurrencyAPI.ts#L43)
