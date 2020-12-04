**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["currency/CurrencyAPI"](../modules/_currency_currencyapi_.md) / CurrencyAPI

# Class: CurrencyAPI

## Hierarchy

- **CurrencyAPI**

## Index

### Constructors

- [constructor](_currency_currencyapi_.currencyapi.md#constructor)

### Methods

- [listCurrencies](_currency_currencyapi_.currencyapi.md#listcurrencies)

### Object literals

- [URL](_currency_currencyapi_.currencyapi.md#url)

## Constructors

### constructor

\+ **new CurrencyAPI**(`apiClient`: AxiosInstance): [CurrencyAPI](_currency_currencyapi_.currencyapi.md)

_Defined in [src/currency/CurrencyAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/currency/CurrencyAPI.ts#L32)_

#### Parameters:

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** [CurrencyAPI](_currency_currencyapi_.currencyapi.md)

## Methods

### listCurrencies

▸ **listCurrencies**(): Promise\<[Currency](../interfaces/_currency_currencyapi_.currency.md)[]>

_Defined in [src/currency/CurrencyAPI.ts:43](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/currency/CurrencyAPI.ts#L43)_

List known currencies. Currency codes will conform to the ISO 4217 standard where possible. Currencies which have or had no representation in ISO 4217 may use a custom code.

**`see`** https://docs.pro.coinbase.com/#get-currencies

**Returns:** Promise\<[Currency](../interfaces/_currency_currencyapi_.currency.md)[]>

## Object literals

### URL

▪ `Static` `Readonly` **URL**: object

_Defined in [src/currency/CurrencyAPI.ts:30](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/currency/CurrencyAPI.ts#L30)_

#### Properties:

| Name         | Type   | Value           |
| ------------ | ------ | --------------- |
| `CURRENCIES` | string | \`/currencies\` |
