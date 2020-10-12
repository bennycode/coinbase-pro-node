[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["client/WebSocketClient"](../modules/_client_websocketclient_.md) › [WebSocketClient](_client_websocketclient_.websocketclient.md)

# Class: WebSocketClient

## Hierarchy

- EventEmitter

  ↳ **WebSocketClient**

## Index

### Constructors

- [constructor](_client_websocketclient_.websocketclient.md#constructor)

### Properties

- [defaultMaxListeners](_client_websocketclient_.websocketclient.md#static-defaultmaxlisteners)
- [errorMonitor](_client_websocketclient_.websocketclient.md#static-readonly-errormonitor)

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
- [listenerCount](_client_websocketclient_.websocketclient.md#static-listenercount)

### Object literals

- [CLOSE_EVENT_CODE](_client_websocketclient_.websocketclient.md#static-close_event_code)

## Constructors

### constructor

\+ **new WebSocketClient**(`baseURL`: string, `signRequest`: function): _[WebSocketClient](_client_websocketclient_.websocketclient.md)_

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:238](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L238)_

**Parameters:**

▪ **baseURL**: _string_

▪ **signRequest**: _function_

▸ (`setup`: [RequestSetup](../interfaces/_auth_requestsigner_.requestsetup.md)): _Promise‹[SignedRequest](../interfaces/_auth_requestsigner_.signedrequest.md)›_

**Parameters:**

| Name    | Type                                                               |
| ------- | ------------------------------------------------------------------ |
| `setup` | [RequestSetup](../interfaces/_auth_requestsigner_.requestsetup.md) |

**Returns:** _[WebSocketClient](_client_websocketclient_.websocketclient.md)_

## Properties

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

### connect

▸ **connect**(`reconnectOptions?`: Options): _ReconnectingWebSocket_

_Defined in [src/client/WebSocketClient.ts:252](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L252)_

The websocket feed is publicly available, but connections to it are rate-limited to 1 per 4 seconds per IP.

**`see`** https://docs.pro.coinbase.com/#websocket-feed

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `reconnectOptions?` | Options | Reconnect options to be used with the "reconnecting-websocket" package. Note: Options will be merged with sensible default values. |

**Returns:** _ReconnectingWebSocket_

---

### disconnect

▸ **disconnect**(`reason`: string): _void_

_Defined in [src/client/WebSocketClient.ts:304](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L304)_

**Parameters:**

| Name     | Type   | Default          |
| -------- | ------ | ---------------- |
| `reason` | string | "Unknown reason" |

**Returns:** _void_

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

▸ **on**(`event`: [ON_CLOSE](../enums/_client_websocketclient_.websocketevent.md#on_close), `listener`: function): _this_

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:206](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L206)_

**Parameters:**

▪ **event**: _[ON_CLOSE](../enums/_client_websocketclient_.websocketevent.md#on_close)_

▪ **listener**: _function_

▸ (`event`: CloseEvent): _void_

**Parameters:**

| Name    | Type       |
| ------- | ---------- |
| `event` | CloseEvent |

**Returns:** _this_

▸ **on**(`event`: [ON_ERROR](../enums/_client_websocketclient_.websocketevent.md#on_error), `listener`: function): _this_

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:208](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L208)_

**Parameters:**

▪ **event**: _[ON_ERROR](../enums/_client_websocketclient_.websocketevent.md#on_error)_

▪ **listener**: _function_

▸ (`event`: ErrorEvent): _void_

**Parameters:**

| Name    | Type       |
| ------- | ---------- |
| `event` | ErrorEvent |

**Returns:** _this_

▸ **on**(`event`: [ON_MESSAGE](../enums/_client_websocketclient_.websocketevent.md#on_message), `listener`: function): _this_

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:210](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L210)_

**Parameters:**

▪ **event**: _[ON_MESSAGE](../enums/_client_websocketclient_.websocketevent.md#on_message)_

▪ **listener**: _function_

▸ (`response`: [WebSocketResponse](../modules/_client_websocketclient_.md#websocketresponse)): _void_

**Parameters:**

| Name       | Type                                                                          |
| ---------- | ----------------------------------------------------------------------------- |
| `response` | [WebSocketResponse](../modules/_client_websocketclient_.md#websocketresponse) |

**Returns:** _this_

▸ **on**(`event`: [ON_MESSAGE_ERROR](../enums/_client_websocketclient_.websocketevent.md#on_message_error), `listener`: function): _this_

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:212](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L212)_

**Parameters:**

▪ **event**: _[ON_MESSAGE_ERROR](../enums/_client_websocketclient_.websocketevent.md#on_message_error)_

▪ **listener**: _function_

▸ (`errorMessage`: [WebSocketErrorMessage](../modules/_client_websocketclient_.md#websocketerrormessage)): _void_

**Parameters:**

| Name           | Type                                                                                  |
| -------------- | ------------------------------------------------------------------------------------- |
| `errorMessage` | [WebSocketErrorMessage](../modules/_client_websocketclient_.md#websocketerrormessage) |

**Returns:** _this_

▸ **on**(`event`: [ON_MESSAGE_MATCHES](../enums/_client_websocketclient_.websocketevent.md#on_message_matches), `listener`: function): _this_

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:214](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L214)_

**Parameters:**

▪ **event**: _[ON_MESSAGE_MATCHES](../enums/_client_websocketclient_.websocketevent.md#on_message_matches)_

▪ **listener**: _function_

▸ (`matchMessage`: [WebSocketLastMatchMessage](../modules/_client_websocketclient_.md#websocketlastmatchmessage) | [WebSocketMatchMessage](../modules/_client_websocketclient_.md#websocketmatchmessage)): _void_

**Parameters:**

| Name | Type |
| --- | --- |
| `matchMessage` | [WebSocketLastMatchMessage](../modules/_client_websocketclient_.md#websocketlastmatchmessage) &#124; [WebSocketMatchMessage](../modules/_client_websocketclient_.md#websocketmatchmessage) |

**Returns:** _this_

▸ **on**(`event`: [ON_MESSAGE_STATUS](../enums/_client_websocketclient_.websocketevent.md#on_message_status), `listener`: function): _this_

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:219](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L219)_

**Parameters:**

▪ **event**: _[ON_MESSAGE_STATUS](../enums/_client_websocketclient_.websocketevent.md#on_message_status)_

▪ **listener**: _function_

▸ (`statusMessage`: [WebSocketStatusMessage](../modules/_client_websocketclient_.md#websocketstatusmessage)): _void_

**Parameters:**

| Name            | Type                                                                                    |
| --------------- | --------------------------------------------------------------------------------------- |
| `statusMessage` | [WebSocketStatusMessage](../modules/_client_websocketclient_.md#websocketstatusmessage) |

**Returns:** _this_

▸ **on**(`event`: [ON_MESSAGE_TICKER](../enums/_client_websocketclient_.websocketevent.md#on_message_ticker), `listener`: function): _this_

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:221](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L221)_

**Parameters:**

▪ **event**: _[ON_MESSAGE_TICKER](../enums/_client_websocketclient_.websocketevent.md#on_message_ticker)_

▪ **listener**: _function_

▸ (`tickerMessage`: [WebSocketTickerMessage](../modules/_client_websocketclient_.md#websockettickermessage)): _void_

**Parameters:**

| Name            | Type                                                                                    |
| --------------- | --------------------------------------------------------------------------------------- |
| `tickerMessage` | [WebSocketTickerMessage](../modules/_client_websocketclient_.md#websockettickermessage) |

**Returns:** _this_

▸ **on**(`event`: [ON_SUBSCRIPTION_UPDATE](../enums/_client_websocketclient_.websocketevent.md#on_subscription_update), `listener`: function): _this_

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:223](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L223)_

**Parameters:**

▪ **event**: _[ON_SUBSCRIPTION_UPDATE](../enums/_client_websocketclient_.websocketevent.md#on_subscription_update)_

▪ **listener**: _function_

▸ (`subscriptions`: [WebSocketSubscription](../modules/_client_websocketclient_.md#websocketsubscription)): _void_

**Parameters:**

| Name            | Type                                                                                  |
| --------------- | ------------------------------------------------------------------------------------- |
| `subscriptions` | [WebSocketSubscription](../modules/_client_websocketclient_.md#websocketsubscription) |

**Returns:** _this_

▸ **on**(`event`: [ON_OPEN](../enums/_client_websocketclient_.websocketevent.md#on_open), `listener`: function): _this_

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:225](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L225)_

**Parameters:**

▪ **event**: _[ON_OPEN](../enums/_client_websocketclient_.websocketevent.md#on_open)_

▪ **listener**: _function_

▸ (`event`: Event): _void_

**Parameters:**

| Name    | Type  |
| ------- | ----- |
| `event` | Event |

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

### sendMessage

▸ **sendMessage**(`message`: [WebSocketRequest](../interfaces/_client_websocketclient_.websocketrequest.md)): _Promise‹void›_

_Defined in [src/client/WebSocketClient.ts:325](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L325)_

**Parameters:**

| Name      | Type                                                                           |
| --------- | ------------------------------------------------------------------------------ |
| `message` | [WebSocketRequest](../interfaces/_client_websocketclient_.websocketrequest.md) |

**Returns:** _Promise‹void›_

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

### subscribe

▸ **subscribe**(`channel`: [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md) | [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md)[]): _void_

_Defined in [src/client/WebSocketClient.ts:311](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L311)_

**Parameters:**

| Name | Type |
| --- | --- |
| `channel` | [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md) &#124; [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md)[] |

**Returns:** _void_

---

### unsubscribe

▸ **unsubscribe**(`channel`: [WebSocketChannelName](../enums/_client_websocketclient_.websocketchannelname.md) | [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md) | [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md)[]): _void_

_Defined in [src/client/WebSocketClient.ts:318](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L318)_

**Parameters:**

| Name | Type |
| --- | --- |
| `channel` | [WebSocketChannelName](../enums/_client_websocketclient_.websocketchannelname.md) &#124; [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md) &#124; [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md)[] |

**Returns:** _void_

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

## Object literals

### `Static` CLOSE_EVENT_CODE

### ▪ **CLOSE_EVENT_CODE**: _object_

_Defined in [src/client/WebSocketClient.ts:230](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L230)_

### GOING_AWAY

• **GOING_AWAY**: _number_ = 1001

_Defined in [src/client/WebSocketClient.ts:231](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L231)_

### NORMAL_CLOSURE

• **NORMAL_CLOSURE**: _number_ = 1000

_Defined in [src/client/WebSocketClient.ts:232](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L232)_

### PROTOCOL_ERROR

• **PROTOCOL_ERROR**: _number_ = 1002

_Defined in [src/client/WebSocketClient.ts:233](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L233)_

### UNSUPPORTED_DATA

• **UNSUPPORTED_DATA**: _number_ = 1003

_Defined in [src/client/WebSocketClient.ts:234](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L234)_
