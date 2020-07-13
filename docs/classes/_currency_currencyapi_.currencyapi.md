[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["currency/CurrencyAPI"](../modules/_currency_currencyapi_.md) › [CurrencyAPI](_currency_currencyapi_.currencyapi.md)

# Class: CurrencyAPI

## Hierarchy

- **CurrencyAPI**

## Index

### Constructors

- [constructor](_currency_currencyapi_.currencyapi.md#constructor)

### Methods

- [listCurrencies](_currency_currencyapi_.currencyapi.md#listcurrencies)

### Object literals

- [URL](_currency_currencyapi_.currencyapi.md#static-readonly-url)

## Constructors

### constructor

\+ **new CurrencyAPI**(`apiClient`: AxiosInstance): _[CurrencyAPI](_currency_currencyapi_.currencyapi.md)_

_Defined in [src/currency/CurrencyAPI.ts:27](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/currency/CurrencyAPI.ts#L27)_

**Parameters:**

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** _[CurrencyAPI](_currency_currencyapi_.currencyapi.md)_

## Methods

### listCurrencies

▸ **listCurrencies**(): _Promise‹[Currency](../interfaces/_currency_currencyapi_.currency.md)[]›_

_Defined in [src/currency/CurrencyAPI.ts:38](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/currency/CurrencyAPI.ts#L38)_

List known currencies. Currency codes will conform to the ISO 4217 standard where possible. Currencies which have or had no representation in ISO 4217 may use a custom code.

**`see`** https://docs.pro.coinbase.com/#get-currencies

**Returns:** _Promise‹[Currency](../interfaces/_currency_currencyapi_.currency.md)[]›_

## Object literals

### `Static` `Readonly` URL

### ▪ **URL**: _object_

_Defined in [src/currency/CurrencyAPI.ts:25](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/currency/CurrencyAPI.ts#L25)_

### CURRENCIES

• **CURRENCIES**: _string_ = `/currencies`

_Defined in [src/currency/CurrencyAPI.ts:26](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/currency/CurrencyAPI.ts#L26)_
