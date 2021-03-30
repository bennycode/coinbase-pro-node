[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [currency/CurrencyAPI](../modules/currency_currencyapi.md) / CurrencyAPI

# Class: CurrencyAPI

[currency/CurrencyAPI](../modules/currency_currencyapi.md).CurrencyAPI

## Table of contents

### Constructors

- [constructor](currency_currencyapi.currencyapi.md#constructor)

### Properties

- [URL](currency_currencyapi.currencyapi.md#url)

### Methods

- [listCurrencies](currency_currencyapi.currencyapi.md#listcurrencies)

## Constructors

### constructor

\+ **new CurrencyAPI**(`apiClient`: AxiosInstance): [*CurrencyAPI*](currency_currencyapi.currencyapi.md)

#### Parameters:

Name | Type |
:------ | :------ |
`apiClient` | AxiosInstance |

**Returns:** [*CurrencyAPI*](currency_currencyapi.currencyapi.md)

Defined in: [currency/CurrencyAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/currency/CurrencyAPI.ts#L32)

## Properties

### URL

▪ `Static` `Readonly` **URL**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`CURRENCIES` | *string* |

Defined in: [currency/CurrencyAPI.ts:30](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/currency/CurrencyAPI.ts#L30)

## Methods

### listCurrencies

▸ **listCurrencies**(): *Promise*<[*Currency*](../interfaces/currency_currencyapi.currency.md)[]\>

List known currencies.
Currency codes will conform to the ISO 4217 standard where possible.
Currencies which have or had no representation in ISO 4217 may use a custom code.

**`see`** https://docs.pro.coinbase.com/#get-currencies

**Returns:** *Promise*<[*Currency*](../interfaces/currency_currencyapi.currency.md)[]\>

Defined in: [currency/CurrencyAPI.ts:43](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/currency/CurrencyAPI.ts#L43)
