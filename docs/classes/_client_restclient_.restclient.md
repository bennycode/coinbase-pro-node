[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["client/RESTClient"](../modules/_client_restclient_.md) › [RESTClient](_client_restclient_.restclient.md)

# Class: RESTClient

## Hierarchy

- EventEmitter

  ↳ **RESTClient**

## Index

### Constructors

- [constructor](_client_restclient_.restclient.md#constructor)

### Properties

- [account](_client_restclient_.restclient.md#readonly-account)
- [currency](_client_restclient_.restclient.md#readonly-currency)
- [fee](_client_restclient_.restclient.md#readonly-fee)
- [fill](_client_restclient_.restclient.md#readonly-fill)
- [order](_client_restclient_.restclient.md#readonly-order)
- [product](_client_restclient_.restclient.md#readonly-product)
- [profile](_client_restclient_.restclient.md#readonly-profile)
- [time](_client_restclient_.restclient.md#readonly-time)
- [transfer](_client_restclient_.restclient.md#readonly-transfer)
- [user](_client_restclient_.restclient.md#readonly-user)
- [withdraw](_client_restclient_.restclient.md#readonly-withdraw)
- [defaultMaxListeners](_client_restclient_.restclient.md#static-defaultmaxlisteners)
- [errorMonitor](_client_restclient_.restclient.md#static-readonly-errormonitor)

### Accessors

- [defaults](_client_restclient_.restclient.md#defaults)
- [interceptors](_client_restclient_.restclient.md#interceptors)

### Methods

- [addListener](_client_restclient_.restclient.md#addlistener)
- [emit](_client_restclient_.restclient.md#emit)
- [eventNames](_client_restclient_.restclient.md#eventnames)
- [getMaxListeners](_client_restclient_.restclient.md#getmaxlisteners)
- [listenerCount](_client_restclient_.restclient.md#listenercount)
- [listeners](_client_restclient_.restclient.md#listeners)
- [off](_client_restclient_.restclient.md#off)
- [on](_client_restclient_.restclient.md#on)
- [once](_client_restclient_.restclient.md#once)
- [prependListener](_client_restclient_.restclient.md#prependlistener)
- [prependOnceListener](_client_restclient_.restclient.md#prependoncelistener)
- [rawListeners](_client_restclient_.restclient.md#rawlisteners)
- [removeAllListeners](_client_restclient_.restclient.md#removealllisteners)
- [removeListener](_client_restclient_.restclient.md#removelistener)
- [setMaxListeners](_client_restclient_.restclient.md#setmaxlisteners)
- [listenerCount](_client_restclient_.restclient.md#static-listenercount)
- [stringifyPayload](_client_restclient_.restclient.md#static-stringifypayload)

## Constructors

### constructor

\+ **new RESTClient**(`baseURL`: string, `signRequest`: function): _[RESTClient](_client_restclient_.restclient.md)_

_Overrides void_

_Defined in [src/client/RESTClient.ts:53](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/RESTClient.ts#L53)_

**Parameters:**

▪ **baseURL**: _string_

▪ **signRequest**: _function_

▸ (`setup`: [RequestSetup](../interfaces/_auth_requestsigner_.requestsetup.md)): _Promise‹[SignedRequest](../interfaces/_auth_requestsigner_.signedrequest.md)›_

**Parameters:**

| Name    | Type                                                               |
| ------- | ------------------------------------------------------------------ |
| `setup` | [RequestSetup](../interfaces/_auth_requestsigner_.requestsetup.md) |

**Returns:** _[RESTClient](_client_restclient_.restclient.md)_

## Properties

### `Readonly` account

• **account**: _[AccountAPI](_account_accountapi_.accountapi.md)_

_Defined in [src/client/RESTClient.ts:40](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/RESTClient.ts#L40)_

---

### `Readonly` currency

• **currency**: _[CurrencyAPI](_currency_currencyapi_.currencyapi.md)_

_Defined in [src/client/RESTClient.ts:41](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/RESTClient.ts#L41)_

---

### `Readonly` fee

• **fee**: _[FeeAPI](_fee_feeapi_.feeapi.md)_

_Defined in [src/client/RESTClient.ts:42](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/RESTClient.ts#L42)_

---

### `Readonly` fill

• **fill**: _[FillAPI](_fill_fillapi_.fillapi.md)_

_Defined in [src/client/RESTClient.ts:43](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/RESTClient.ts#L43)_

---

### `Readonly` order

• **order**: _[OrderAPI](_order_orderapi_.orderapi.md)_

_Defined in [src/client/RESTClient.ts:44](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/RESTClient.ts#L44)_

---

### `Readonly` product

• **product**: _[ProductAPI](_product_productapi_.productapi.md)_

_Defined in [src/client/RESTClient.ts:45](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/RESTClient.ts#L45)_

---

### `Readonly` profile

• **profile**: _[ProfileAPI](_profile_profileapi_.profileapi.md)_

_Defined in [src/client/RESTClient.ts:46](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/RESTClient.ts#L46)_

---

### `Readonly` time

• **time**: _[TimeAPI](_time_timeapi_.timeapi.md)_

_Defined in [src/client/RESTClient.ts:47](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/RESTClient.ts#L47)_

---

### `Readonly` transfer

• **transfer**: _[TransferAPI](_transfer_transferapi_.transferapi.md)_

_Defined in [src/client/RESTClient.ts:48](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/RESTClient.ts#L48)_

---

### `Readonly` user

• **user**: _[UserAPI](_user_userapi_.userapi.md)_

_Defined in [src/client/RESTClient.ts:49](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/RESTClient.ts#L49)_

---

### `Readonly` withdraw

• **withdraw**: _[WithdrawAPI](_withdraw_withdrawapi_.withdrawapi.md)_

_Defined in [src/client/RESTClient.ts:50](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/RESTClient.ts#L50)_

---

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: _number_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[defaultMaxListeners](_client_websocketclient_.websocketclient.md#static-defaultmaxlisteners)_

Defined in node_modules/@types/node/events.d.ts:45

---

### `Static` `Readonly` errorMonitor

▪ **errorMonitor**: _unique symbol_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[errorMonitor](_client_websocketclient_.websocketclient.md#static-readonly-errormonitor)_

Defined in node_modules/@types/node/events.d.ts:55

This symbol shall be used to install a listener for only monitoring `'error'` events. Listeners installed using this symbol are called before the regular `'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an `'error'` event is emitted, therefore the process will still crash if no regular `'error'` listener is installed.

## Accessors

### defaults

• **get defaults**(): _AxiosRequestConfig_

_Defined in [src/client/RESTClient.ts:29](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/RESTClient.ts#L29)_

**Returns:** _AxiosRequestConfig_

---

### interceptors

• **get interceptors**(): _object_

_Defined in [src/client/RESTClient.ts:33](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/RESTClient.ts#L33)_

**Returns:** _object_

- **request**: _AxiosInterceptorManager‹AxiosRequestConfig›_

- **response**: _AxiosInterceptorManager‹AxiosResponse›_

## Methods

### addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): _this_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[addListener](_client_websocketclient_.websocketclient.md#addlistener)_

Defined in node_modules/@types/node/events.d.ts:62

**Parameters:**

▪ **event**: _string | symbol_

▪ **listener**: _function_

▸ (...`args`: any[]): _void_

**Parameters:**

| Name      | Type  |
| --------- | ----- |
| `...args` | any[] |

**Returns:** _this_

---

### emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): _boolean_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[emit](_client_websocketclient_.websocketclient.md#emit)_

Defined in node_modules/@types/node/events.d.ts:72

**Parameters:**

| Name      | Type                 |
| --------- | -------------------- |
| `event`   | string &#124; symbol |
| `...args` | any[]                |

**Returns:** _boolean_

---

### eventNames

▸ **eventNames**(): _Array‹string | symbol›_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[eventNames](_client_websocketclient_.websocketclient.md#eventnames)_

Defined in node_modules/@types/node/events.d.ts:77

**Returns:** _Array‹string | symbol›_

---

### getMaxListeners

▸ **getMaxListeners**(): _number_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[getMaxListeners](_client_websocketclient_.websocketclient.md#getmaxlisteners)_

Defined in node_modules/@types/node/events.d.ts:69

**Returns:** _number_

---

### listenerCount

▸ **listenerCount**(`type`: string | symbol): _number_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[listenerCount](_client_websocketclient_.websocketclient.md#listenercount)_

Defined in node_modules/@types/node/events.d.ts:73

**Parameters:**

| Name   | Type                 |
| ------ | -------------------- |
| `type` | string &#124; symbol |

**Returns:** _number_

---

### listeners

▸ **listeners**(`event`: string | symbol): _Function[]_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[listeners](_client_websocketclient_.websocketclient.md#listeners)_

Defined in node_modules/@types/node/events.d.ts:70

**Parameters:**

| Name    | Type                 |
| ------- | -------------------- |
| `event` | string &#124; symbol |

**Returns:** _Function[]_

---

### off

▸ **off**(`event`: string | symbol, `listener`: function): _this_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[off](_client_websocketclient_.websocketclient.md#off)_

Defined in node_modules/@types/node/events.d.ts:66

**Parameters:**

▪ **event**: _string | symbol_

▪ **listener**: _function_

▸ (...`args`: any[]): _void_

**Parameters:**

| Name      | Type  |
| --------- | ----- |
| `...args` | any[] |

**Returns:** _this_

---

### on

▸ **on**(`event`: [NEW_CANDLE](../enums/_product_productapi_.productevent.md#new_candle), `listener`: function): _this_

_Overrides void_

_Defined in [src/client/RESTClient.ts:21](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/RESTClient.ts#L21)_

**Parameters:**

▪ **event**: _[NEW_CANDLE](../enums/_product_productapi_.productevent.md#new_candle)_

▪ **listener**: _function_

▸ (`productId`: string, `granularity`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md), `candle`: [Candle](../interfaces/_product_productapi_.candle.md)): _void_

**Parameters:**

| Name          | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| `productId`   | string                                                                  |
| `granularity` | [CandleGranularity](../enums/_product_productapi_.candlegranularity.md) |
| `candle`      | [Candle](../interfaces/_product_productapi_.candle.md)                  |

**Returns:** _this_

---

### once

▸ **once**(`event`: string | symbol, `listener`: function): _this_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[once](_client_websocketclient_.websocketclient.md#once)_

Defined in node_modules/@types/node/events.d.ts:64

**Parameters:**

▪ **event**: _string | symbol_

▪ **listener**: _function_

▸ (...`args`: any[]): _void_

**Parameters:**

| Name      | Type  |
| --------- | ----- |
| `...args` | any[] |

**Returns:** _this_

---

### prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): _this_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[prependListener](_client_websocketclient_.websocketclient.md#prependlistener)_

Defined in node_modules/@types/node/events.d.ts:75

**Parameters:**

▪ **event**: _string | symbol_

▪ **listener**: _function_

▸ (...`args`: any[]): _void_

**Parameters:**

| Name      | Type  |
| --------- | ----- |
| `...args` | any[] |

**Returns:** _this_

---

### prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): _this_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[prependOnceListener](_client_websocketclient_.websocketclient.md#prependoncelistener)_

Defined in node_modules/@types/node/events.d.ts:76

**Parameters:**

▪ **event**: _string | symbol_

▪ **listener**: _function_

▸ (...`args`: any[]): _void_

**Parameters:**

| Name      | Type  |
| --------- | ----- |
| `...args` | any[] |

**Returns:** _this_

---

### rawListeners

▸ **rawListeners**(`event`: string | symbol): _Function[]_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[rawListeners](_client_websocketclient_.websocketclient.md#rawlisteners)_

Defined in node_modules/@types/node/events.d.ts:71

**Parameters:**

| Name    | Type                 |
| ------- | -------------------- |
| `event` | string &#124; symbol |

**Returns:** _Function[]_

---

### removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): _this_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[removeAllListeners](_client_websocketclient_.websocketclient.md#removealllisteners)_

Defined in node_modules/@types/node/events.d.ts:67

**Parameters:**

| Name     | Type                 |
| -------- | -------------------- |
| `event?` | string &#124; symbol |

**Returns:** _this_

---

### removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): _this_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[removeListener](_client_websocketclient_.websocketclient.md#removelistener)_

Defined in node_modules/@types/node/events.d.ts:65

**Parameters:**

▪ **event**: _string | symbol_

▪ **listener**: _function_

▸ (...`args`: any[]): _void_

**Parameters:**

| Name      | Type  |
| --------- | ----- |
| `...args` | any[] |

**Returns:** _this_

---

### setMaxListeners

▸ **setMaxListeners**(`n`: number): _this_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[setMaxListeners](_client_websocketclient_.websocketclient.md#setmaxlisteners)_

Defined in node_modules/@types/node/events.d.ts:68

**Parameters:**

| Name | Type   |
| ---- | ------ |
| `n`  | number |

**Returns:** _this_

---

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): _number_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[listenerCount](_client_websocketclient_.websocketclient.md#static-listenercount)_

Defined in node_modules/@types/node/events.d.ts:44

**`deprecated`** since v4.0.0

**Parameters:**

| Name      | Type                 |
| --------- | -------------------- |
| `emitter` | EventEmitter         |
| `event`   | string &#124; symbol |

**Returns:** _number_

---

### `Static` stringifyPayload

▸ **stringifyPayload**(`config`: AxiosRequestConfig): _string_

_Defined in [src/client/RESTClient.ts:119](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/RESTClient.ts#L119)_

**Parameters:**

| Name     | Type               |
| -------- | ------------------ |
| `config` | AxiosRequestConfig |

**Returns:** _string_
