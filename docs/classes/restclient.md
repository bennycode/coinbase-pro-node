[coinbase-pro-node](../README.md) / [Exports](../modules.md) / RESTClient

# Class: RESTClient

## Hierarchy

- `EventEmitter`

  ↳ **`RESTClient`**

## Table of contents

### Constructors

- [constructor](RESTClient.md#constructor)

### Properties

- [account](RESTClient.md#account)
- [currency](RESTClient.md#currency)
- [fee](RESTClient.md#fee)
- [fill](RESTClient.md#fill)
- [order](RESTClient.md#order)
- [product](RESTClient.md#product)
- [profile](RESTClient.md#profile)
- [time](RESTClient.md#time)
- [transfer](RESTClient.md#transfer)
- [user](RESTClient.md#user)
- [withdraw](RESTClient.md#withdraw)

### Accessors

- [defaults](RESTClient.md#defaults)
- [interceptors](RESTClient.md#interceptors)

### Methods

- [on](RESTClient.md#on)
- [stringifyPayload](RESTClient.md#stringifypayload)

## Constructors

### constructor

• **new RESTClient**(`baseURL`, `signRequest`)

#### Parameters

| Name          | Type                                                     |
| :------------ | :------------------------------------------------------- |
| `baseURL`     | `string`                                                 |
| `signRequest` | (`setup`: `RequestSetup`) => `Promise`<`SignedRequest`\> |

#### Defined in

[client/RESTClient.ts:55](https://github.com/bennycode/coinbase-pro-node/blob/48475f6/src/client/RESTClient.ts#L55)

## Properties

### account

• `Readonly` **account**: [`AccountAPI`](AccountAPI.md)

#### Defined in

[client/RESTClient.ts:40](https://github.com/bennycode/coinbase-pro-node/blob/48475f6/src/client/RESTClient.ts#L40)

---

### currency

• `Readonly` **currency**: [`CurrencyAPI`](CurrencyAPI.md)

#### Defined in

[client/RESTClient.ts:41](https://github.com/bennycode/coinbase-pro-node/blob/48475f6/src/client/RESTClient.ts#L41)

---

### fee

• `Readonly` **fee**: [`FeeAPI`](FeeAPI.md)

#### Defined in

[client/RESTClient.ts:42](https://github.com/bennycode/coinbase-pro-node/blob/48475f6/src/client/RESTClient.ts#L42)

---

### fill

• `Readonly` **fill**: [`FillAPI`](FillAPI.md)

#### Defined in

[client/RESTClient.ts:43](https://github.com/bennycode/coinbase-pro-node/blob/48475f6/src/client/RESTClient.ts#L43)

---

### order

• `Readonly` **order**: [`OrderAPI`](OrderAPI.md)

#### Defined in

[client/RESTClient.ts:44](https://github.com/bennycode/coinbase-pro-node/blob/48475f6/src/client/RESTClient.ts#L44)

---

### product

• `Readonly` **product**: [`ProductAPI`](ProductAPI.md)

#### Defined in

[client/RESTClient.ts:45](https://github.com/bennycode/coinbase-pro-node/blob/48475f6/src/client/RESTClient.ts#L45)

---

### profile

• `Readonly` **profile**: [`ProfileAPI`](ProfileAPI.md)

#### Defined in

[client/RESTClient.ts:46](https://github.com/bennycode/coinbase-pro-node/blob/48475f6/src/client/RESTClient.ts#L46)

---

### time

• `Readonly` **time**: [`TimeAPI`](TimeAPI.md)

#### Defined in

[client/RESTClient.ts:47](https://github.com/bennycode/coinbase-pro-node/blob/48475f6/src/client/RESTClient.ts#L47)

---

### transfer

• `Readonly` **transfer**: `TransferAPI`

#### Defined in

[client/RESTClient.ts:48](https://github.com/bennycode/coinbase-pro-node/blob/48475f6/src/client/RESTClient.ts#L48)

---

### user

• `Readonly` **user**: [`UserAPI`](UserAPI.md)

#### Defined in

[client/RESTClient.ts:49](https://github.com/bennycode/coinbase-pro-node/blob/48475f6/src/client/RESTClient.ts#L49)

---

### withdraw

• `Readonly` **withdraw**: `WithdrawAPI`

#### Defined in

[client/RESTClient.ts:50](https://github.com/bennycode/coinbase-pro-node/blob/48475f6/src/client/RESTClient.ts#L50)

## Accessors

### defaults

• `get` **defaults**(): `AxiosRequestConfig`

#### Returns

`AxiosRequestConfig`

#### Defined in

[client/RESTClient.ts:29](https://github.com/bennycode/coinbase-pro-node/blob/48475f6/src/client/RESTClient.ts#L29)

---

### interceptors

• `get` **interceptors**(): `Object`

#### Returns

`Object`

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `request`  | `AxiosInterceptorManager`<`AxiosRequestConfig`\>    |
| `response` | `AxiosInterceptorManager`<`AxiosResponse`<`any`\>\> |

#### Defined in

[client/RESTClient.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/48475f6/src/client/RESTClient.ts#L33)

## Methods

### on

▸ **on**(`event`, `listener`): [`RESTClient`](RESTClient.md)

#### Parameters

| Name | Type |
| :-- | :-- |
| `event` | [`NEW_CANDLE`](../enums/ProductEvent.md#new_candle) |
| `listener` | (`productId`: `string`, `granularity`: [`CandleGranularity`](../enums/CandleGranularity.md), `candle`: [`Candle`](../interfaces/Candle.md)) => `void` |

#### Returns

[`RESTClient`](RESTClient.md)

#### Defined in

[client/RESTClient.ts:21](https://github.com/bennycode/coinbase-pro-node/blob/48475f6/src/client/RESTClient.ts#L21)

---

### stringifyPayload

▸ `Static` **stringifyPayload**(`config`): `string`

#### Parameters

| Name     | Type                 |
| :------- | :------------------- |
| `config` | `AxiosRequestConfig` |

#### Returns

`string`

#### Defined in

[client/RESTClient.ts:120](https://github.com/bennycode/coinbase-pro-node/blob/48475f6/src/client/RESTClient.ts#L120)
