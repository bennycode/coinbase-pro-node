[coinbase-pro-node](../README.md) / [Exports](../modules.md) / CurrencyAPI

# Class: CurrencyAPI

## Table of contents

### Constructors

- [constructor](currencyapi.md#constructor)

### Properties

- [URL](currencyapi.md#url)

### Methods

- [listCurrencies](currencyapi.md#listcurrencies)

## Constructors

### constructor

\+ **new CurrencyAPI**(`apiClient`: AxiosInstance): [_CurrencyAPI_](currencyapi.md)

#### Parameters:

| Name        | Type          |
| :---------- | :------------ |
| `apiClient` | AxiosInstance |

**Returns:** [_CurrencyAPI_](currencyapi.md)

Defined in: [currency/CurrencyAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/currency/CurrencyAPI.ts#L32)

## Properties

### URL

▪ `Static` `Readonly` **URL**: _object_

#### Type declaration:

| Name         | Type     |
| :----------- | :------- |
| `CURRENCIES` | _string_ |

Defined in: [currency/CurrencyAPI.ts:30](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/currency/CurrencyAPI.ts#L30)

## Methods

### listCurrencies

▸ **listCurrencies**(): _Promise_<[_Currency_](../interfaces/currency.md)[]\>

List known currencies. Currency codes will conform to the ISO 4217 standard where possible. Currencies which have or had no representation in ISO 4217 may use a custom code.

**`see`** https://docs.pro.coinbase.com/#get-currencies

**Returns:** _Promise_<[_Currency_](../interfaces/currency.md)[]\>

Defined in: [currency/CurrencyAPI.ts:43](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/currency/CurrencyAPI.ts#L43)
