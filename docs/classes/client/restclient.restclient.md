[coinbase-pro-node](../../README.md) / [Exports](../../modules.md) / [client/RESTClient](../../modules/client_restclient.md) / RESTClient

# Class: RESTClient

[client/RESTClient](../../modules/client_restclient.md).RESTClient

## Hierarchy

- _EventEmitter_

  ↳ **RESTClient**

## Table of contents

### Constructors

- [constructor](restclient.restclient.md#constructor)

### Properties

- [account](restclient.restclient.md#account)
- [currency](restclient.restclient.md#currency)
- [fee](restclient.restclient.md#fee)
- [fill](restclient.restclient.md#fill)
- [order](restclient.restclient.md#order)
- [product](restclient.restclient.md#product)
- [profile](restclient.restclient.md#profile)
- [time](restclient.restclient.md#time)
- [transfer](restclient.restclient.md#transfer)
- [user](restclient.restclient.md#user)
- [withdraw](restclient.restclient.md#withdraw)

### Accessors

- [defaults](restclient.restclient.md#defaults)
- [interceptors](restclient.restclient.md#interceptors)

### Methods

- [on](restclient.restclient.md#on)
- [stringifyPayload](restclient.restclient.md#stringifypayload)

## Constructors

### constructor

\+ **new RESTClient**(`baseURL`: _string_, `signRequest`: (`setup`: [_RequestSetup_](../../interfaces/auth/requestsigner.requestsetup.md)) => _Promise_<[_SignedRequest_](../../interfaces/auth/requestsigner.signedrequest.md)\>): [_RESTClient_](restclient.restclient.md)

#### Parameters:

| Name | Type |
| --- | --- |
| `baseURL` | _string_ |
| `signRequest` | (`setup`: [_RequestSetup_](../../interfaces/auth/requestsigner.requestsetup.md)) => _Promise_<[_SignedRequest_](../../interfaces/auth/requestsigner.signedrequest.md)\> |

**Returns:** [_RESTClient_](restclient.restclient.md)

Defined in: [client/RESTClient.ts:53](https://github.com/bennycode/coinbase-pro-node/blob/7d07dce/src/client/RESTClient.ts#L53)

## Properties

### account

• `Readonly` **account**: [_AccountAPI_](../account/accountapi.accountapi.md)

Defined in: [client/RESTClient.ts:40](https://github.com/bennycode/coinbase-pro-node/blob/7d07dce/src/client/RESTClient.ts#L40)

---

### currency

• `Readonly` **currency**: [_CurrencyAPI_](../currency/currencyapi.currencyapi.md)

Defined in: [client/RESTClient.ts:41](https://github.com/bennycode/coinbase-pro-node/blob/7d07dce/src/client/RESTClient.ts#L41)

---

### fee

• `Readonly` **fee**: [_FeeAPI_](../fee/feeapi.feeapi.md)

Defined in: [client/RESTClient.ts:42](https://github.com/bennycode/coinbase-pro-node/blob/7d07dce/src/client/RESTClient.ts#L42)

---

### fill

• `Readonly` **fill**: [_FillAPI_](../fill/fillapi.fillapi.md)

Defined in: [client/RESTClient.ts:43](https://github.com/bennycode/coinbase-pro-node/blob/7d07dce/src/client/RESTClient.ts#L43)

---

### order

• `Readonly` **order**: [_OrderAPI_](../order/orderapi.orderapi.md)

Defined in: [client/RESTClient.ts:44](https://github.com/bennycode/coinbase-pro-node/blob/7d07dce/src/client/RESTClient.ts#L44)

---

### product

• `Readonly` **product**: [_ProductAPI_](../product/productapi.productapi.md)

Defined in: [client/RESTClient.ts:45](https://github.com/bennycode/coinbase-pro-node/blob/7d07dce/src/client/RESTClient.ts#L45)

---

### profile

• `Readonly` **profile**: [_ProfileAPI_](../profile/profileapi.profileapi.md)

Defined in: [client/RESTClient.ts:46](https://github.com/bennycode/coinbase-pro-node/blob/7d07dce/src/client/RESTClient.ts#L46)

---

### time

• `Readonly` **time**: [_TimeAPI_](../time/timeapi.timeapi.md)

Defined in: [client/RESTClient.ts:47](https://github.com/bennycode/coinbase-pro-node/blob/7d07dce/src/client/RESTClient.ts#L47)

---

### transfer

• `Readonly` **transfer**: [_TransferAPI_](../transfer/transferapi.transferapi.md)

Defined in: [client/RESTClient.ts:48](https://github.com/bennycode/coinbase-pro-node/blob/7d07dce/src/client/RESTClient.ts#L48)

---

### user

• `Readonly` **user**: [_UserAPI_](../user/userapi.userapi.md)

Defined in: [client/RESTClient.ts:49](https://github.com/bennycode/coinbase-pro-node/blob/7d07dce/src/client/RESTClient.ts#L49)

---

### withdraw

• `Readonly` **withdraw**: [_WithdrawAPI_](../withdraw/withdrawapi.withdrawapi.md)

Defined in: [client/RESTClient.ts:50](https://github.com/bennycode/coinbase-pro-node/blob/7d07dce/src/client/RESTClient.ts#L50)

## Accessors

### defaults

• **defaults**(): AxiosRequestConfig

**Returns:** AxiosRequestConfig

Defined in: [client/RESTClient.ts:29](https://github.com/bennycode/coinbase-pro-node/blob/7d07dce/src/client/RESTClient.ts#L29)

---

### interceptors

• **interceptors**(): _object_

**Returns:** _object_

| Name       | Type                                                |
| ---------- | --------------------------------------------------- |
| `request`  | _AxiosInterceptorManager_<AxiosRequestConfig\>      |
| `response` | _AxiosInterceptorManager_<_AxiosResponse_<_any_\>\> |

Defined in: [client/RESTClient.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/7d07dce/src/client/RESTClient.ts#L33)

## Methods

### on

▸ **on**(`event`: [_NEW_CANDLE_](../../enums/product/productapi.productevent.md#new_candle), `listener`: (`productId`: _string_, `granularity`: [_CandleGranularity_](../../enums/product/productapi.candlegranularity.md), `candle`: [_Candle_](../../interfaces/product/productapi.candle.md)) => _void_): [_RESTClient_](restclient.restclient.md)

#### Parameters:

| Name | Type |
| --- | --- |
| `event` | [_NEW_CANDLE_](../../enums/product/productapi.productevent.md#new_candle) |
| `listener` | (`productId`: _string_, `granularity`: [_CandleGranularity_](../../enums/product/productapi.candlegranularity.md), `candle`: [_Candle_](../../interfaces/product/productapi.candle.md)) => _void_ |

**Returns:** [_RESTClient_](restclient.restclient.md)

Defined in: [client/RESTClient.ts:21](https://github.com/bennycode/coinbase-pro-node/blob/7d07dce/src/client/RESTClient.ts#L21)

---

### stringifyPayload

▸ `Static`**stringifyPayload**(`config`: AxiosRequestConfig): _string_

#### Parameters:

| Name     | Type               |
| -------- | ------------------ |
| `config` | AxiosRequestConfig |

**Returns:** _string_

Defined in: [client/RESTClient.ts:119](https://github.com/bennycode/coinbase-pro-node/blob/7d07dce/src/client/RESTClient.ts#L119)
