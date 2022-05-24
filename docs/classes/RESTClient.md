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

[client/RESTClient.ts:62](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/RESTClient.ts#L62)

## Properties

### account

• `Readonly` **account**: [`AccountAPI`](AccountAPI.md)

#### Defined in

[client/RESTClient.ts:47](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/RESTClient.ts#L47)

---

### currency

• `Readonly` **currency**: [`CurrencyAPI`](CurrencyAPI.md)

#### Defined in

[client/RESTClient.ts:48](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/RESTClient.ts#L48)

---

### fee

• `Readonly` **fee**: [`FeeAPI`](FeeAPI.md)

#### Defined in

[client/RESTClient.ts:49](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/RESTClient.ts#L49)

---

### fill

• `Readonly` **fill**: [`FillAPI`](FillAPI.md)

#### Defined in

[client/RESTClient.ts:50](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/RESTClient.ts#L50)

---

### order

• `Readonly` **order**: [`OrderAPI`](OrderAPI.md)

#### Defined in

[client/RESTClient.ts:51](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/RESTClient.ts#L51)

---

### product

• `Readonly` **product**: [`ProductAPI`](ProductAPI.md)

#### Defined in

[client/RESTClient.ts:52](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/RESTClient.ts#L52)

---

### profile

• `Readonly` **profile**: [`ProfileAPI`](ProfileAPI.md)

#### Defined in

[client/RESTClient.ts:53](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/RESTClient.ts#L53)

---

### time

• `Readonly` **time**: [`TimeAPI`](TimeAPI.md)

#### Defined in

[client/RESTClient.ts:54](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/RESTClient.ts#L54)

---

### transfer

• `Readonly` **transfer**: `TransferAPI`

#### Defined in

[client/RESTClient.ts:55](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/RESTClient.ts#L55)

---

### user

• `Readonly` **user**: [`UserAPI`](UserAPI.md)

#### Defined in

[client/RESTClient.ts:56](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/RESTClient.ts#L56)

---

### withdraw

• `Readonly` **withdraw**: `WithdrawAPI`

#### Defined in

[client/RESTClient.ts:57](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/RESTClient.ts#L57)

## Accessors

### defaults

• `get` **defaults**(): `AxiosDefaults`<`any`\>

#### Returns

`AxiosDefaults`<`any`\>

#### Defined in

[client/RESTClient.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/RESTClient.ts#L36)

---

### interceptors

• `get` **interceptors**(): `Object`

#### Returns

`Object`

| Name       | Type                                                       |
| :--------- | :--------------------------------------------------------- |
| `request`  | `AxiosInterceptorManager`<`AxiosRequestConfig`<`any`\>\>   |
| `response` | `AxiosInterceptorManager`<`AxiosResponse`<`any`, `any`\>\> |

#### Defined in

[client/RESTClient.ts:40](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/RESTClient.ts#L40)

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

[client/RESTClient.ts:28](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/RESTClient.ts#L28)

---

### stringifyPayload

▸ `Static` **stringifyPayload**(`config`): `string`

#### Parameters

| Name     | Type                         |
| :------- | :--------------------------- |
| `config` | `AxiosRequestConfig`<`any`\> |

#### Returns

`string`

#### Defined in

[client/RESTClient.ts:127](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/RESTClient.ts#L127)
