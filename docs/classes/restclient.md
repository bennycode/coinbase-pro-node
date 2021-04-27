[coinbase-pro-node](../README.md) / [Exports](../modules.md) / RESTClient

# Class: RESTClient

## Hierarchy

- _EventEmitter_

  ↳ **RESTClient**

## Table of contents

### Constructors

- [constructor](restclient.md#constructor)

### Properties

- [account](restclient.md#account)
- [currency](restclient.md#currency)
- [fee](restclient.md#fee)
- [fill](restclient.md#fill)
- [order](restclient.md#order)
- [product](restclient.md#product)
- [profile](restclient.md#profile)
- [time](restclient.md#time)
- [transfer](restclient.md#transfer)
- [user](restclient.md#user)
- [withdraw](restclient.md#withdraw)

### Accessors

- [defaults](restclient.md#defaults)
- [interceptors](restclient.md#interceptors)

### Methods

- [on](restclient.md#on)
- [stringifyPayload](restclient.md#stringifypayload)

## Constructors

### constructor

\+ **new RESTClient**(`baseURL`: _string_, `signRequest`: (`setup`: RequestSetup) => _Promise_<SignedRequest\>): [_RESTClient_](restclient.md)

#### Parameters:

| Name          | Type                                                 |
| :------------ | :--------------------------------------------------- |
| `baseURL`     | _string_                                             |
| `signRequest` | (`setup`: RequestSetup) => _Promise_<SignedRequest\> |

**Returns:** [_RESTClient_](restclient.md)

Defined in: [client/RESTClient.ts:53](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/client/RESTClient.ts#L53)

## Properties

### account

• `Readonly` **account**: [_AccountAPI_](accountapi.md)

Defined in: [client/RESTClient.ts:40](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/client/RESTClient.ts#L40)

---

### currency

• `Readonly` **currency**: [_CurrencyAPI_](currencyapi.md)

Defined in: [client/RESTClient.ts:41](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/client/RESTClient.ts#L41)

---

### fee

• `Readonly` **fee**: [_FeeAPI_](feeapi.md)

Defined in: [client/RESTClient.ts:42](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/client/RESTClient.ts#L42)

---

### fill

• `Readonly` **fill**: [_FillAPI_](fillapi.md)

Defined in: [client/RESTClient.ts:43](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/client/RESTClient.ts#L43)

---

### order

• `Readonly` **order**: [_OrderAPI_](orderapi.md)

Defined in: [client/RESTClient.ts:44](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/client/RESTClient.ts#L44)

---

### product

• `Readonly` **product**: [_ProductAPI_](productapi.md)

Defined in: [client/RESTClient.ts:45](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/client/RESTClient.ts#L45)

---

### profile

• `Readonly` **profile**: [_ProfileAPI_](profileapi.md)

Defined in: [client/RESTClient.ts:46](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/client/RESTClient.ts#L46)

---

### time

• `Readonly` **time**: [_TimeAPI_](timeapi.md)

Defined in: [client/RESTClient.ts:47](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/client/RESTClient.ts#L47)

---

### transfer

• `Readonly` **transfer**: _TransferAPI_

Defined in: [client/RESTClient.ts:48](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/client/RESTClient.ts#L48)

---

### user

• `Readonly` **user**: [_UserAPI_](userapi.md)

Defined in: [client/RESTClient.ts:49](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/client/RESTClient.ts#L49)

---

### withdraw

• `Readonly` **withdraw**: _WithdrawAPI_

Defined in: [client/RESTClient.ts:50](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/client/RESTClient.ts#L50)

## Accessors

### defaults

• get **defaults**(): AxiosRequestConfig

**Returns:** AxiosRequestConfig

Defined in: [client/RESTClient.ts:29](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/client/RESTClient.ts#L29)

---

### interceptors

• get **interceptors**(): _object_

**Returns:** _object_

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `request`  | _AxiosInterceptorManager_<AxiosRequestConfig\>  |
| `response` | _AxiosInterceptorManager_<AxiosResponse<any\>\> |

Defined in: [client/RESTClient.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/client/RESTClient.ts#L33)

## Methods

### on

▸ **on**(`event`: [_NEW_CANDLE_](../enums/productevent.md#new_candle), `listener`: (`productId`: _string_, `granularity`: [_CandleGranularity_](../enums/candlegranularity.md), `candle`: [_Candle_](../interfaces/candle.md)) => _void_): [_RESTClient_](restclient.md)

#### Parameters:

| Name | Type |
| :-- | :-- |
| `event` | [_NEW_CANDLE_](../enums/productevent.md#new_candle) |
| `listener` | (`productId`: _string_, `granularity`: [_CandleGranularity_](../enums/candlegranularity.md), `candle`: [_Candle_](../interfaces/candle.md)) => _void_ |

**Returns:** [_RESTClient_](restclient.md)

Defined in: [client/RESTClient.ts:21](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/client/RESTClient.ts#L21)

---

### stringifyPayload

▸ `Static`**stringifyPayload**(`config`: AxiosRequestConfig): _string_

#### Parameters:

| Name     | Type               |
| :------- | :----------------- |
| `config` | AxiosRequestConfig |

**Returns:** _string_

Defined in: [client/RESTClient.ts:120](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/client/RESTClient.ts#L120)
