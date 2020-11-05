**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["client/WebSocketClient"](../modules/_client_websocketclient_.md) / WebSocketClient

# Class: WebSocketClient

## Hierarchy

- EventEmitter

  ↳ **WebSocketClient**

## Index

### Constructors

- [constructor](_client_websocketclient_.websocketclient.md#constructor)

### Properties

- [defaultMaxListeners](_client_websocketclient_.websocketclient.md#defaultmaxlisteners)
- [errorMonitor](_client_websocketclient_.websocketclient.md#errormonitor)

### Methods

- [addListener](_client_websocketclient_.websocketclient.md#addlistener)
- [connect](_client_websocketclient_.websocketclient.md#connect)
- [disconnect](_client_websocketclient_.websocketclient.md#disconnect)
- [emit](_client_websocketclient_.websocketclient.md#emit)
- [eventNames](_client_websocketclient_.websocketclient.md#eventnames)
- [getMaxListeners](_client_websocketclient_.websocketclient.md#getmaxlisteners)
- [listenerCount](_client_websocketclient_.websocketclient.md#listenercount)
- [listeners](_client_websocketclient_.websocketclient.md#listeners)
- [off](_client_websocketclient_.websocketclient.md#off)
- [on](_client_websocketclient_.websocketclient.md#on)
- [once](_client_websocketclient_.websocketclient.md#once)
- [prependListener](_client_websocketclient_.websocketclient.md#prependlistener)
- [prependOnceListener](_client_websocketclient_.websocketclient.md#prependoncelistener)
- [rawListeners](_client_websocketclient_.websocketclient.md#rawlisteners)
- [removeAllListeners](_client_websocketclient_.websocketclient.md#removealllisteners)
- [removeListener](_client_websocketclient_.websocketclient.md#removelistener)
- [sendMessage](_client_websocketclient_.websocketclient.md#sendmessage)
- [setMaxListeners](_client_websocketclient_.websocketclient.md#setmaxlisteners)
- [subscribe](_client_websocketclient_.websocketclient.md#subscribe)
- [unsubscribe](_client_websocketclient_.websocketclient.md#unsubscribe)
- [listenerCount](_client_websocketclient_.websocketclient.md#listenercount)

### Object literals

- [CLOSE_EVENT_CODE](_client_websocketclient_.websocketclient.md#close_event_code)

## Constructors

### constructor

\+ **new WebSocketClient**(`baseURL`: string, `signRequest`: (setup: [RequestSetup](../interfaces/_auth_requestsigner_.requestsetup.md)) => Promise\<[SignedRequest](../interfaces/_auth_requestsigner_.signedrequest.md)>): [WebSocketClient](_client_websocketclient_.websocketclient.md)

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:238](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/client/WebSocketClient.ts#L238)_

#### Parameters:

| Name | Type |
| --- | --- |
| `baseURL` | string |
| `signRequest` | (setup: [RequestSetup](../interfaces/_auth_requestsigner_.requestsetup.md)) => Promise\<[SignedRequest](../interfaces/_auth_requestsigner_.signedrequest.md)> |

**Returns:** [WebSocketClient](_client_websocketclient_.websocketclient.md)

## Properties

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

### connect

▸ **connect**(`reconnectOptions?`: Options): ReconnectingWebSocket

_Defined in [src/client/WebSocketClient.ts:252](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/client/WebSocketClient.ts#L252)_

The websocket feed is publicly available, but connections to it are rate-limited to 1 per 4 seconds per IP.

**`see`** https://docs.pro.coinbase.com/#websocket-feed

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `reconnectOptions?` | Options | Reconnect options to be used with the "reconnecting-websocket" package. Note: Options will be merged with sensible default values. |

**Returns:** ReconnectingWebSocket

---

### disconnect

▸ **disconnect**(`reason?`: string): void

_Defined in [src/client/WebSocketClient.ts:304](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/client/WebSocketClient.ts#L304)_

#### Parameters:

| Name     | Type   | Default value    |
| -------- | ------ | ---------------- |
| `reason` | string | "Unknown reason" |

**Returns:** void

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

▸ **eventNames**(): Array\<string \| symbol>

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[eventNames](_client_websocketclient_.websocketclient.md#eventnames)_

_Defined in node_modules/@types/node/events.d.ts:77_

**Returns:** Array\<string \| symbol>

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

▸ **on**(`event`: [ON_CLOSE](../enums/_client_websocketclient_.websocketevent.md#on_close), `listener`: (event: CloseEvent) => void): this

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:206](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/client/WebSocketClient.ts#L206)_

#### Parameters:

| Name       | Type                                                                     |
| ---------- | ------------------------------------------------------------------------ |
| `event`    | [ON_CLOSE](../enums/_client_websocketclient_.websocketevent.md#on_close) |
| `listener` | (event: CloseEvent) => void                                              |

**Returns:** this

▸ **on**(`event`: [ON_ERROR](../enums/_client_websocketclient_.websocketevent.md#on_error), `listener`: (event: ErrorEvent) => void): this

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:208](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/client/WebSocketClient.ts#L208)_

#### Parameters:

| Name       | Type                                                                     |
| ---------- | ------------------------------------------------------------------------ |
| `event`    | [ON_ERROR](../enums/_client_websocketclient_.websocketevent.md#on_error) |
| `listener` | (event: ErrorEvent) => void                                              |

**Returns:** this

▸ **on**(`event`: [ON_MESSAGE](../enums/_client_websocketclient_.websocketevent.md#on_message), `listener`: (response: [WebSocketResponse](../modules/_client_websocketclient_.md#websocketresponse)) => void): this

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:210](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/client/WebSocketClient.ts#L210)_

#### Parameters:

| Name       | Type                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------- |
| `event`    | [ON_MESSAGE](../enums/_client_websocketclient_.websocketevent.md#on_message)                      |
| `listener` | (response: [WebSocketResponse](../modules/_client_websocketclient_.md#websocketresponse)) => void |

**Returns:** this

▸ **on**(`event`: [ON_MESSAGE_ERROR](../enums/_client_websocketclient_.websocketevent.md#on_message_error), `listener`: (errorMessage: [WebSocketErrorMessage](../modules/_client_websocketclient_.md#websocketerrormessage)) => void): this

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:212](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/client/WebSocketClient.ts#L212)_

#### Parameters:

| Name | Type |
| --- | --- |
| `event` | [ON_MESSAGE_ERROR](../enums/_client_websocketclient_.websocketevent.md#on_message_error) |
| `listener` | (errorMessage: [WebSocketErrorMessage](../modules/_client_websocketclient_.md#websocketerrormessage)) => void |

**Returns:** this

▸ **on**(`event`: [ON_MESSAGE_MATCHES](../enums/_client_websocketclient_.websocketevent.md#on_message_matches), `listener`: (matchMessage: [WebSocketLastMatchMessage](../modules/_client_websocketclient_.md#websocketlastmatchmessage) \| [WebSocketMatchMessage](../modules/_client_websocketclient_.md#websocketmatchmessage)) => void): this

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:214](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/client/WebSocketClient.ts#L214)_

#### Parameters:

| Name | Type |
| --- | --- |
| `event` | [ON_MESSAGE_MATCHES](../enums/_client_websocketclient_.websocketevent.md#on_message_matches) |
| `listener` | (matchMessage: [WebSocketLastMatchMessage](../modules/_client_websocketclient_.md#websocketlastmatchmessage) \| [WebSocketMatchMessage](../modules/_client_websocketclient_.md#websocketmatchmessage)) => void |

**Returns:** this

▸ **on**(`event`: [ON_MESSAGE_STATUS](../enums/_client_websocketclient_.websocketevent.md#on_message_status), `listener`: (statusMessage: [WebSocketStatusMessage](../modules/_client_websocketclient_.md#websocketstatusmessage)) => void): this

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:219](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/client/WebSocketClient.ts#L219)_

#### Parameters:

| Name | Type |
| --- | --- |
| `event` | [ON_MESSAGE_STATUS](../enums/_client_websocketclient_.websocketevent.md#on_message_status) |
| `listener` | (statusMessage: [WebSocketStatusMessage](../modules/_client_websocketclient_.md#websocketstatusmessage)) => void |

**Returns:** this

▸ **on**(`event`: [ON_MESSAGE_TICKER](../enums/_client_websocketclient_.websocketevent.md#on_message_ticker), `listener`: (tickerMessage: [WebSocketTickerMessage](../modules/_client_websocketclient_.md#websockettickermessage)) => void): this

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:221](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/client/WebSocketClient.ts#L221)_

#### Parameters:

| Name | Type |
| --- | --- |
| `event` | [ON_MESSAGE_TICKER](../enums/_client_websocketclient_.websocketevent.md#on_message_ticker) |
| `listener` | (tickerMessage: [WebSocketTickerMessage](../modules/_client_websocketclient_.md#websockettickermessage)) => void |

**Returns:** this

▸ **on**(`event`: [ON_SUBSCRIPTION_UPDATE](../enums/_client_websocketclient_.websocketevent.md#on_subscription_update), `listener`: (subscriptions: [WebSocketSubscription](../modules/_client_websocketclient_.md#websocketsubscription)) => void): this

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:223](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/client/WebSocketClient.ts#L223)_

#### Parameters:

| Name | Type |
| --- | --- |
| `event` | [ON_SUBSCRIPTION_UPDATE](../enums/_client_websocketclient_.websocketevent.md#on_subscription_update) |
| `listener` | (subscriptions: [WebSocketSubscription](../modules/_client_websocketclient_.md#websocketsubscription)) => void |

**Returns:** this

▸ **on**(`event`: [ON_OPEN](../enums/_client_websocketclient_.websocketevent.md#on_open), `listener`: (event: Event) => void): this

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:225](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/client/WebSocketClient.ts#L225)_

#### Parameters:

| Name       | Type                                                                   |
| ---------- | ---------------------------------------------------------------------- |
| `event`    | [ON_OPEN](../enums/_client_websocketclient_.websocketevent.md#on_open) |
| `listener` | (event: Event) => void                                                 |

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

### sendMessage

▸ **sendMessage**(`message`: [WebSocketRequest](../interfaces/_client_websocketclient_.websocketrequest.md)): Promise\<void>

_Defined in [src/client/WebSocketClient.ts:325](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/client/WebSocketClient.ts#L325)_

#### Parameters:

| Name      | Type                                                                           |
| --------- | ------------------------------------------------------------------------------ |
| `message` | [WebSocketRequest](../interfaces/_client_websocketclient_.websocketrequest.md) |

**Returns:** Promise\<void>

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

### subscribe

▸ **subscribe**(`channel`: [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md) \| [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md)[]): void

_Defined in [src/client/WebSocketClient.ts:311](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/client/WebSocketClient.ts#L311)_

#### Parameters:

| Name | Type |
| --- | --- |
| `channel` | [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md) \| [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md)[] |

**Returns:** void

---

### unsubscribe

▸ **unsubscribe**(`channel`: [WebSocketChannelName](../enums/_client_websocketclient_.websocketchannelname.md) \| [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md) \| [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md)[]): void

_Defined in [src/client/WebSocketClient.ts:318](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/client/WebSocketClient.ts#L318)_

#### Parameters:

| Name | Type |
| --- | --- |
| `channel` | [WebSocketChannelName](../enums/_client_websocketclient_.websocketchannelname.md) \| [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md) \| [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md)[] |

**Returns:** void

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

## Object literals

### CLOSE_EVENT_CODE

▪ `Static` **CLOSE_EVENT_CODE**: object

_Defined in [src/client/WebSocketClient.ts:230](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/client/WebSocketClient.ts#L230)_

#### Properties:

| Name               | Type   | Value |
| ------------------ | ------ | ----- |
| `GOING_AWAY`       | number | 1001  |
| `NORMAL_CLOSURE`   | number | 1000  |
| `PROTOCOL_ERROR`   | number | 1002  |
| `UNSUPPORTED_DATA` | number | 1003  |
