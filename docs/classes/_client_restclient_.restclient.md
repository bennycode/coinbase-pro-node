**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["client/RESTClient"](../modules/_client_restclient_.md) / RESTClient

# Class: RESTClient

## Hierarchy

- EventEmitter

  ↳ **RESTClient**

## Index

### Constructors

- [constructor](_client_restclient_.restclient.md#constructor)

### Properties

- [account](_client_restclient_.restclient.md#account)
- [currency](_client_restclient_.restclient.md#currency)
- [fee](_client_restclient_.restclient.md#fee)
- [fill](_client_restclient_.restclient.md#fill)
- [order](_client_restclient_.restclient.md#order)
- [product](_client_restclient_.restclient.md#product)
- [profile](_client_restclient_.restclient.md#profile)
- [time](_client_restclient_.restclient.md#time)
- [transfer](_client_restclient_.restclient.md#transfer)
- [user](_client_restclient_.restclient.md#user)
- [withdraw](_client_restclient_.restclient.md#withdraw)
- [defaultMaxListeners](_client_restclient_.restclient.md#defaultmaxlisteners)
- [errorMonitor](_client_restclient_.restclient.md#errormonitor)

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
- [listenerCount](_client_restclient_.restclient.md#listenercount)
- [stringifyPayload](_client_restclient_.restclient.md#stringifypayload)

## Constructors

### constructor

\+ **new RESTClient**(`baseURL`: string, `signRequest`: (setup: [RequestSetup](../interfaces/_auth_requestsigner_.requestsetup.md)) => Promise<[SignedRequest](../interfaces/_auth_requestsigner_.signedrequest.md)\>): [RESTClient](_client_restclient_.restclient.md)

_Overrides void_

_Defined in [src/client/RESTClient.ts:53](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/client/RESTClient.ts#L53)_

#### Parameters:

| Name | Type |
| --- | --- |
| `baseURL` | string |
| `signRequest` | (setup: [RequestSetup](../interfaces/_auth_requestsigner_.requestsetup.md)) => Promise<[SignedRequest](../interfaces/_auth_requestsigner_.signedrequest.md)\> |

**Returns:** [RESTClient](_client_restclient_.restclient.md)

## Properties

### account

• `Readonly` **account**: [AccountAPI](_account_accountapi_.accountapi.md)

_Defined in [src/client/RESTClient.ts:40](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/client/RESTClient.ts#L40)_

---

### currency

• `Readonly` **currency**: [CurrencyAPI](_currency_currencyapi_.currencyapi.md)

_Defined in [src/client/RESTClient.ts:41](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/client/RESTClient.ts#L41)_

---

### fee

• `Readonly` **fee**: [FeeAPI](_fee_feeapi_.feeapi.md)

_Defined in [src/client/RESTClient.ts:42](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/client/RESTClient.ts#L42)_

---

### fill

• `Readonly` **fill**: [FillAPI](_fill_fillapi_.fillapi.md)

_Defined in [src/client/RESTClient.ts:43](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/client/RESTClient.ts#L43)_

---

### order

• `Readonly` **order**: [OrderAPI](_order_orderapi_.orderapi.md)

_Defined in [src/client/RESTClient.ts:44](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/client/RESTClient.ts#L44)_

---

### product

• `Readonly` **product**: [ProductAPI](_product_productapi_.productapi.md)

_Defined in [src/client/RESTClient.ts:45](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/client/RESTClient.ts#L45)_

---

### profile

• `Readonly` **profile**: [ProfileAPI](_profile_profileapi_.profileapi.md)

_Defined in [src/client/RESTClient.ts:46](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/client/RESTClient.ts#L46)_

---

### time

• `Readonly` **time**: [TimeAPI](_time_timeapi_.timeapi.md)

_Defined in [src/client/RESTClient.ts:47](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/client/RESTClient.ts#L47)_

---

### transfer

• `Readonly` **transfer**: [TransferAPI](_transfer_transferapi_.transferapi.md)

_Defined in [src/client/RESTClient.ts:48](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/client/RESTClient.ts#L48)_

---

### user

• `Readonly` **user**: [UserAPI](_user_userapi_.userapi.md)

_Defined in [src/client/RESTClient.ts:49](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/client/RESTClient.ts#L49)_

---

### withdraw

• `Readonly` **withdraw**: [WithdrawAPI](_withdraw_withdrawapi_.withdrawapi.md)

_Defined in [src/client/RESTClient.ts:50](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/client/RESTClient.ts#L50)_

---

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: number

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[defaultMaxListeners](_client_websocketclient_.websocketclient.md#defaultmaxlisteners)_

_Defined in node_modules/@types/node/events.d.ts:45_

---

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: unique symbol

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[errorMonitor](_client_websocketclient_.websocketclient.md#errormonitor)_

_Defined in node_modules/@types/node/events.d.ts:55_

This symbol shall be used to install a listener for only monitoring `'error'` events. Listeners installed using this symbol are called before the regular `'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an `'error'` event is emitted, therefore the process will still crash if no regular `'error'` listener is installed.

## Accessors

### defaults

• get **defaults**(): AxiosRequestConfig

_Defined in [src/client/RESTClient.ts:29](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/client/RESTClient.ts#L29)_

**Returns:** AxiosRequestConfig

---

### interceptors

• get **interceptors**(): object

_Defined in [src/client/RESTClient.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/client/RESTClient.ts#L33)_

**Returns:** object

| Name       | Type                                         |
| ---------- | -------------------------------------------- |
| `request`  | AxiosInterceptorManager<AxiosRequestConfig\> |
| `response` | AxiosInterceptorManager<AxiosResponse\>      |

## Methods

### addListener

▸ **addListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[addListener](_client_websocketclient_.websocketclient.md#addlistener)_

_Defined in node_modules/@types/node/events.d.ts:62_

#### Parameters:

| Name       | Type                     |
| ---------- | ------------------------ |
| `event`    | string \| symbol         |
| `listener` | (...args: any[]) => void |

**Returns:** this

---

### emit

▸ **emit**(`event`: string \| symbol, ...`args`: any[]): boolean

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[emit](_client_websocketclient_.websocketclient.md#emit)_

_Defined in node_modules/@types/node/events.d.ts:72_

#### Parameters:

| Name      | Type             |
| --------- | ---------------- |
| `event`   | string \| symbol |
| `...args` | any[]            |

**Returns:** boolean

---

### eventNames

▸ **eventNames**(): Array<string \| symbol\>

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[eventNames](_client_websocketclient_.websocketclient.md#eventnames)_

_Defined in node_modules/@types/node/events.d.ts:77_

**Returns:** Array<string \| symbol\>

---

### getMaxListeners

▸ **getMaxListeners**(): number

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[getMaxListeners](_client_websocketclient_.websocketclient.md#getmaxlisteners)_

_Defined in node_modules/@types/node/events.d.ts:69_

**Returns:** number

---

### listenerCount

▸ **listenerCount**(`event`: string \| symbol): number

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[listenerCount](_client_websocketclient_.websocketclient.md#listenercount)_

_Defined in node_modules/@types/node/events.d.ts:73_

#### Parameters:

| Name    | Type             |
| ------- | ---------------- |
| `event` | string \| symbol |

**Returns:** number

---

### listeners

▸ **listeners**(`event`: string \| symbol): Function[]

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[listeners](_client_websocketclient_.websocketclient.md#listeners)_

_Defined in node_modules/@types/node/events.d.ts:70_

#### Parameters:

| Name    | Type             |
| ------- | ---------------- |
| `event` | string \| symbol |

**Returns:** Function[]

---

### off

▸ **off**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[off](_client_websocketclient_.websocketclient.md#off)_

_Defined in node_modules/@types/node/events.d.ts:66_

#### Parameters:

| Name       | Type                     |
| ---------- | ------------------------ |
| `event`    | string \| symbol         |
| `listener` | (...args: any[]) => void |

**Returns:** this

---

### on

▸ **on**(`event`: [NEW_CANDLE](../enums/_product_productapi_.productevent.md#new_candle), `listener`: (productId: string, granularity: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md), candle: [Candle](../interfaces/_product_productapi_.candle.md)) => void): this

_Overrides void_

_Defined in [src/client/RESTClient.ts:21](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/client/RESTClient.ts#L21)_

#### Parameters:

| Name | Type |
| --- | --- |
| `event` | [NEW_CANDLE](../enums/_product_productapi_.productevent.md#new_candle) |
| `listener` | (productId: string, granularity: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md), candle: [Candle](../interfaces/_product_productapi_.candle.md)) => void |

**Returns:** this

---

### once

▸ **once**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[once](_client_websocketclient_.websocketclient.md#once)_

_Defined in node_modules/@types/node/events.d.ts:64_

#### Parameters:

| Name       | Type                     |
| ---------- | ------------------------ |
| `event`    | string \| symbol         |
| `listener` | (...args: any[]) => void |

**Returns:** this

---

### prependListener

▸ **prependListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[prependListener](_client_websocketclient_.websocketclient.md#prependlistener)_

_Defined in node_modules/@types/node/events.d.ts:75_

#### Parameters:

| Name       | Type                     |
| ---------- | ------------------------ |
| `event`    | string \| symbol         |
| `listener` | (...args: any[]) => void |

**Returns:** this

---

### prependOnceListener

▸ **prependOnceListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[prependOnceListener](_client_websocketclient_.websocketclient.md#prependoncelistener)_

_Defined in node_modules/@types/node/events.d.ts:76_

#### Parameters:

| Name       | Type                     |
| ---------- | ------------------------ |
| `event`    | string \| symbol         |
| `listener` | (...args: any[]) => void |

**Returns:** this

---

### rawListeners

▸ **rawListeners**(`event`: string \| symbol): Function[]

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[rawListeners](_client_websocketclient_.websocketclient.md#rawlisteners)_

_Defined in node_modules/@types/node/events.d.ts:71_

#### Parameters:

| Name    | Type             |
| ------- | ---------------- |
| `event` | string \| symbol |

**Returns:** Function[]

---

### removeAllListeners

▸ **removeAllListeners**(`event?`: string \| symbol): this

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[removeAllListeners](_client_websocketclient_.websocketclient.md#removealllisteners)_

_Defined in node_modules/@types/node/events.d.ts:67_

#### Parameters:

| Name     | Type             |
| -------- | ---------------- |
| `event?` | string \| symbol |

**Returns:** this

---

### removeListener

▸ **removeListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[removeListener](_client_websocketclient_.websocketclient.md#removelistener)_

_Defined in node_modules/@types/node/events.d.ts:65_

#### Parameters:

| Name       | Type                     |
| ---------- | ------------------------ |
| `event`    | string \| symbol         |
| `listener` | (...args: any[]) => void |

**Returns:** this

---

### setMaxListeners

▸ **setMaxListeners**(`n`: number): this

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[setMaxListeners](_client_websocketclient_.websocketclient.md#setmaxlisteners)_

_Defined in node_modules/@types/node/events.d.ts:68_

#### Parameters:

| Name | Type   |
| ---- | ------ |
| `n`  | number |

**Returns:** this

---

### listenerCount

▸ `Static`**listenerCount**(`emitter`: EventEmitter, `event`: string \| symbol): number

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[listenerCount](_client_websocketclient_.websocketclient.md#listenercount)_

_Defined in node_modules/@types/node/events.d.ts:44_

**`deprecated`** since v4.0.0

#### Parameters:

| Name      | Type             |
| --------- | ---------------- |
| `emitter` | EventEmitter     |
| `event`   | string \| symbol |

**Returns:** number

---

### stringifyPayload

▸ `Static`**stringifyPayload**(`config`: AxiosRequestConfig): string

_Defined in [src/client/RESTClient.ts:119](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/client/RESTClient.ts#L119)_

#### Parameters:

| Name     | Type               |
| -------- | ------------------ |
| `config` | AxiosRequestConfig |

**Returns:** string
