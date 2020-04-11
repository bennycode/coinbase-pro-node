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

\+ **new WebSocketClient**(`baseURL`: string): _[WebSocketClient](_client_websocketclient_.websocketclient.md)_

_Defined in [src/client/WebSocketClient.ts:204](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L204)_

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `baseURL` | string |

**Returns:** _[WebSocketClient](_client_websocketclient_.websocketclient.md)_

## Properties

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: _number_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[defaultMaxListeners](_client_websocketclient_.websocketclient.md#static-defaultmaxlisteners)_

Defined in node_modules/@types/node/events.d.ts:18

## Methods

### addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): _this_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[addListener](_client_websocketclient_.websocketclient.md#addlistener)_

_Overrides void_

Defined in node_modules/@types/node/events.d.ts:20

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

_Defined in [src/client/WebSocketClient.ts:218](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L218)_

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

_Defined in [src/client/WebSocketClient.ts:264](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L264)_

**Parameters:**

| Name     | Type   | Default          |
| -------- | ------ | ---------------- |
| `reason` | string | "Unknown reason" |

**Returns:** _void_

---

### emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): _boolean_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[emit](_client_websocketclient_.websocketclient.md#emit)_

_Overrides void_

Defined in node_modules/@types/node/events.d.ts:32

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

_Overrides void_

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** _Array‹string | symbol›_

---

### getMaxListeners

▸ **getMaxListeners**(): _number_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[getMaxListeners](_client_websocketclient_.websocketclient.md#getmaxlisteners)_

_Overrides void_

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** _number_

---

### listenerCount

▸ **listenerCount**(`type`: string | symbol): _number_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[listenerCount](_client_websocketclient_.websocketclient.md#static-listenercount)_

_Overrides void_

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

| Name   | Type                 |
| ------ | -------------------- |
| `type` | string &#124; symbol |

**Returns:** _number_

---

### listeners

▸ **listeners**(`event`: string | symbol): _Function[]_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[listeners](_client_websocketclient_.websocketclient.md#listeners)_

_Overrides void_

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

| Name    | Type                 |
| ------- | -------------------- |
| `event` | string &#124; symbol |

**Returns:** _Function[]_

---

### off

▸ **off**(`event`: string | symbol, `listener`: function): _this_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[off](_client_websocketclient_.websocketclient.md#off)_

_Overrides void_

Defined in node_modules/@types/node/events.d.ts:26

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

_Defined in [src/client/WebSocketClient.ts:177](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L177)_

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

_Defined in [src/client/WebSocketClient.ts:179](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L179)_

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

_Defined in [src/client/WebSocketClient.ts:181](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L181)_

**Parameters:**

▪ **event**: _[ON_MESSAGE](../enums/_client_websocketclient_.websocketevent.md#on_message)_

▪ **listener**: _function_

▸ (`response`: [WebSocketResponse](../modules/_client_websocketclient_.md#websocketresponse)): _void_

**Parameters:**

| Name       | Type                                                                          |
| ---------- | ----------------------------------------------------------------------------- |
| `response` | [WebSocketResponse](../modules/_client_websocketclient_.md#websocketresponse) |

**Returns:** _this_

▸ **on**(`event`: [ON_MESSAGE_MATCHES](../enums/_client_websocketclient_.websocketevent.md#on_message_matches), `listener`: function): _this_

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:183](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L183)_

**Parameters:**

▪ **event**: _[ON_MESSAGE_MATCHES](../enums/_client_websocketclient_.websocketevent.md#on_message_matches)_

▪ **listener**: _function_

▸ (`matchMessage`: [WebSocketLastMatchMessage](../modules/_client_websocketclient_.md#websocketlastmatchmessage) | [WebSocketMatchMessage](../modules/_client_websocketclient_.md#websocketmatchmessage)): _void_

**Parameters:**

| Name | Type |
| --- | --- |
| `matchMessage` | [WebSocketLastMatchMessage](../modules/_client_websocketclient_.md#websocketlastmatchmessage) &#124; [WebSocketMatchMessage](../modules/_client_websocketclient_.md#websocketmatchmessage) |

**Returns:** _this_

▸ **on**(`event`: [ON_MESSAGE_TICKER](../enums/_client_websocketclient_.websocketevent.md#on_message_ticker), `listener`: function): _this_

_Overrides void_

_Defined in [src/client/WebSocketClient.ts:188](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L188)_

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

_Defined in [src/client/WebSocketClient.ts:190](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L190)_

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

_Defined in [src/client/WebSocketClient.ts:192](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L192)_

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

_Overrides void_

Defined in node_modules/@types/node/events.d.ts:22

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

_Overrides void_

Defined in node_modules/@types/node/events.d.ts:23

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

_Overrides void_

Defined in node_modules/@types/node/events.d.ts:24

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

_Overrides void_

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

| Name    | Type                 |
| ------- | -------------------- |
| `event` | string &#124; symbol |

**Returns:** _Function[]_

---

### removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): _this_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[removeAllListeners](_client_websocketclient_.websocketclient.md#removealllisteners)_

_Overrides void_

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

| Name     | Type                 |
| -------- | -------------------- |
| `event?` | string &#124; symbol |

**Returns:** _this_

---

### removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): _this_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[removeListener](_client_websocketclient_.websocketclient.md#removelistener)_

_Overrides void_

Defined in node_modules/@types/node/events.d.ts:25

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

▸ **sendMessage**(`message`: [WebSocketRequest](../interfaces/_client_websocketclient_.websocketrequest.md), `signature?`: [SignedRequest](../interfaces/_auth_requestsigner_.signedrequest.md)): _void_

_Defined in [src/client/WebSocketClient.ts:271](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L271)_

**Parameters:**

| Name         | Type                                                                           |
| ------------ | ------------------------------------------------------------------------------ |
| `message`    | [WebSocketRequest](../interfaces/_client_websocketclient_.websocketrequest.md) |
| `signature?` | [SignedRequest](../interfaces/_auth_requestsigner_.signedrequest.md)           |

**Returns:** _void_

---

### setMaxListeners

▸ **setMaxListeners**(`n`: number): _this_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[setMaxListeners](_client_websocketclient_.websocketclient.md#setmaxlisteners)_

_Overrides void_

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

| Name | Type   |
| ---- | ------ |
| `n`  | number |

**Returns:** _this_

---

### subscribe

▸ **subscribe**(`channels`: [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md)[]): _void_

_Defined in [src/client/WebSocketClient.ts:283](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L283)_

**Parameters:**

| Name       | Type                                                                             |
| ---------- | -------------------------------------------------------------------------------- |
| `channels` | [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md)[] |

**Returns:** _void_

---

### unsubscribe

▸ **unsubscribe**(`channels`: [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md)[]): _void_

_Defined in [src/client/WebSocketClient.ts:290](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L290)_

**Parameters:**

| Name       | Type                                                                             |
| ---------- | -------------------------------------------------------------------------------- |
| `channels` | [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md)[] |

**Returns:** _void_

---

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): _number_

_Inherited from [WebSocketClient](_client_websocketclient_.websocketclient.md).[listenerCount](_client_websocketclient_.websocketclient.md#static-listenercount)_

Defined in node_modules/@types/node/events.d.ts:17

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

_Defined in [src/client/WebSocketClient.ts:196](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L196)_

### GOING_AWAY

• **GOING_AWAY**: _number_ = 1001

_Defined in [src/client/WebSocketClient.ts:197](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L197)_

### NORMAL_CLOSURE

• **NORMAL_CLOSURE**: _number_ = 1000

_Defined in [src/client/WebSocketClient.ts:198](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L198)_

### PROTOCOL_ERROR

• **PROTOCOL_ERROR**: _number_ = 1002

_Defined in [src/client/WebSocketClient.ts:199](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L199)_

### UNSUPPORTED_DATA

• **UNSUPPORTED_DATA**: _number_ = 1003

_Defined in [src/client/WebSocketClient.ts:200](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L200)_
