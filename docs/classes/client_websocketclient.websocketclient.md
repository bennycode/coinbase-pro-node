[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [client/WebSocketClient](../modules/client_websocketclient.md) / WebSocketClient

# Class: WebSocketClient

[client/WebSocketClient](../modules/client_websocketclient.md).WebSocketClient

## Hierarchy

- _EventEmitter_

  ↳ **WebSocketClient**

## Table of contents

### Constructors

- [constructor](client_websocketclient.websocketclient.md#constructor)

### Properties

- [CLOSE_EVENT_CODE](client_websocketclient.websocketclient.md#close_event_code)

### Methods

- [connect](client_websocketclient.websocketclient.md#connect)
- [disconnect](client_websocketclient.websocketclient.md#disconnect)
- [on](client_websocketclient.websocketclient.md#on)
- [sendMessage](client_websocketclient.websocketclient.md#sendmessage)
- [subscribe](client_websocketclient.websocketclient.md#subscribe)
- [unsubscribe](client_websocketclient.websocketclient.md#unsubscribe)

## Constructors

### constructor

\+ **new WebSocketClient**(`baseURL`: _string_, `signRequest`: (`setup`: [_RequestSetup_](../interfaces/auth_requestsigner.requestsetup.md)) => _Promise_<[_SignedRequest_](../interfaces/auth_requestsigner.signedrequest.md)\>): [_WebSocketClient_](client_websocketclient.websocketclient.md)

#### Parameters:

| Name | Type |
| :-- | :-- |
| `baseURL` | _string_ |
| `signRequest` | (`setup`: [_RequestSetup_](../interfaces/auth_requestsigner.requestsetup.md)) => _Promise_<[_SignedRequest_](../interfaces/auth_requestsigner.signedrequest.md)\> |

**Returns:** [_WebSocketClient_](client_websocketclient.websocketclient.md)

Defined in: [client/WebSocketClient.ts:244](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/client/WebSocketClient.ts#L244)

## Properties

### CLOSE_EVENT_CODE

▪ `Static` **CLOSE_EVENT_CODE**: _object_

#### Type declaration:

| Name               | Type     |
| :----------------- | :------- |
| `GOING_AWAY`       | _number_ |
| `NORMAL_CLOSURE`   | _number_ |
| `PROTOCOL_ERROR`   | _number_ |
| `UNSUPPORTED_DATA` | _number_ |

Defined in: [client/WebSocketClient.ts:230](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/client/WebSocketClient.ts#L230)

## Methods

### connect

▸ **connect**(`reconnectOptions?`: Options): _default_

The websocket feed is publicly available, but connections to it are rate-limited to 1 per 4 seconds per IP.

**`see`** https://docs.pro.coinbase.com/#websocket-feed

#### Parameters:

| Name | Type | Description |
| :-- | :-- | :-- |
| `reconnectOptions?` | Options | Reconnect options to be used with the "reconnecting-websocket" package. Note: Options will be merged with sensible default values. |

**Returns:** _default_

Defined in: [client/WebSocketClient.ts:260](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/client/WebSocketClient.ts#L260)

---

### disconnect

▸ **disconnect**(`reason?`: _string_): _void_

#### Parameters:

| Name     | Type     | Default value    |
| :------- | :------- | :--------------- |
| `reason` | _string_ | 'Unknown reason' |

**Returns:** _void_

Defined in: [client/WebSocketClient.ts:325](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/client/WebSocketClient.ts#L325)

---

### on

▸ **on**(`event`: [_ON_CLOSE_](../enums/client_websocketclient.websocketevent.md#on_close), `listener`: (`event`: _CloseEvent_) => _void_): [_WebSocketClient_](client_websocketclient.websocketclient.md)

#### Parameters:

| Name       | Type                                                                     |
| :--------- | :----------------------------------------------------------------------- |
| `event`    | [_ON_CLOSE_](../enums/client_websocketclient.websocketevent.md#on_close) |
| `listener` | (`event`: _CloseEvent_) => _void_                                        |

**Returns:** [_WebSocketClient_](client_websocketclient.websocketclient.md)

Defined in: [client/WebSocketClient.ts:206](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/client/WebSocketClient.ts#L206)

▸ **on**(`event`: [_ON_ERROR_](../enums/client_websocketclient.websocketevent.md#on_error), `listener`: (`event`: _ErrorEvent_) => _void_): [_WebSocketClient_](client_websocketclient.websocketclient.md)

#### Parameters:

| Name       | Type                                                                     |
| :--------- | :----------------------------------------------------------------------- |
| `event`    | [_ON_ERROR_](../enums/client_websocketclient.websocketevent.md#on_error) |
| `listener` | (`event`: _ErrorEvent_) => _void_                                        |

**Returns:** [_WebSocketClient_](client_websocketclient.websocketclient.md)

Defined in: [client/WebSocketClient.ts:208](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/client/WebSocketClient.ts#L208)

▸ **on**(`event`: [_ON_MESSAGE_](../enums/client_websocketclient.websocketevent.md#on_message), `listener`: (`response`: [_WebSocketResponse_](../modules/client_websocketclient.md#websocketresponse)) => _void_): [_WebSocketClient_](client_websocketclient.websocketclient.md)

#### Parameters:

| Name       | Type                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| `event`    | [_ON_MESSAGE_](../enums/client_websocketclient.websocketevent.md#on_message)                          |
| `listener` | (`response`: [_WebSocketResponse_](../modules/client_websocketclient.md#websocketresponse)) => _void_ |

**Returns:** [_WebSocketClient_](client_websocketclient.websocketclient.md)

Defined in: [client/WebSocketClient.ts:210](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/client/WebSocketClient.ts#L210)

▸ **on**(`event`: [_ON_MESSAGE_ERROR_](../enums/client_websocketclient.websocketevent.md#on_message_error), `listener`: (`errorMessage`: [_WebSocketErrorMessage_](../interfaces/client_websocketclient.websocketerrormessage.md)) => _void_): [_WebSocketClient_](client_websocketclient.websocketclient.md)

#### Parameters:

| Name | Type |
| :-- | :-- |
| `event` | [_ON_MESSAGE_ERROR_](../enums/client_websocketclient.websocketevent.md#on_message_error) |
| `listener` | (`errorMessage`: [_WebSocketErrorMessage_](../interfaces/client_websocketclient.websocketerrormessage.md)) => _void_ |

**Returns:** [_WebSocketClient_](client_websocketclient.websocketclient.md)

Defined in: [client/WebSocketClient.ts:212](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/client/WebSocketClient.ts#L212)

▸ **on**(`event`: [_ON_MESSAGE_MATCHES_](../enums/client_websocketclient.websocketevent.md#on_message_matches), `listener`: (`matchMessage`: [_WebSocketMatchMessage_](../interfaces/client_websocketclient.websocketmatchmessage.md) \| [_WebSocketLastMatchMessage_](../modules/client_websocketclient.md#websocketlastmatchmessage)) => _void_): [_WebSocketClient_](client_websocketclient.websocketclient.md)

#### Parameters:

| Name | Type |
| :-- | :-- |
| `event` | [_ON_MESSAGE_MATCHES_](../enums/client_websocketclient.websocketevent.md#on_message_matches) |
| `listener` | (`matchMessage`: [_WebSocketMatchMessage_](../interfaces/client_websocketclient.websocketmatchmessage.md) \| [_WebSocketLastMatchMessage_](../modules/client_websocketclient.md#websocketlastmatchmessage)) => _void_ |

**Returns:** [_WebSocketClient_](client_websocketclient.websocketclient.md)

Defined in: [client/WebSocketClient.ts:214](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/client/WebSocketClient.ts#L214)

▸ **on**(`event`: [_ON_MESSAGE_STATUS_](../enums/client_websocketclient.websocketevent.md#on_message_status), `listener`: (`statusMessage`: [_WebSocketStatusMessage_](../interfaces/client_websocketclient.websocketstatusmessage.md)) => _void_): [_WebSocketClient_](client_websocketclient.websocketclient.md)

#### Parameters:

| Name | Type |
| :-- | :-- |
| `event` | [_ON_MESSAGE_STATUS_](../enums/client_websocketclient.websocketevent.md#on_message_status) |
| `listener` | (`statusMessage`: [_WebSocketStatusMessage_](../interfaces/client_websocketclient.websocketstatusmessage.md)) => _void_ |

**Returns:** [_WebSocketClient_](client_websocketclient.websocketclient.md)

Defined in: [client/WebSocketClient.ts:219](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/client/WebSocketClient.ts#L219)

▸ **on**(`event`: [_ON_MESSAGE_TICKER_](../enums/client_websocketclient.websocketevent.md#on_message_ticker), `listener`: (`tickerMessage`: [_WebSocketTickerMessage_](../interfaces/client_websocketclient.websockettickermessage.md)) => _void_): [_WebSocketClient_](client_websocketclient.websocketclient.md)

#### Parameters:

| Name | Type |
| :-- | :-- |
| `event` | [_ON_MESSAGE_TICKER_](../enums/client_websocketclient.websocketevent.md#on_message_ticker) |
| `listener` | (`tickerMessage`: [_WebSocketTickerMessage_](../interfaces/client_websocketclient.websockettickermessage.md)) => _void_ |

**Returns:** [_WebSocketClient_](client_websocketclient.websocketclient.md)

Defined in: [client/WebSocketClient.ts:221](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/client/WebSocketClient.ts#L221)

▸ **on**(`event`: [_ON_SUBSCRIPTION_UPDATE_](../enums/client_websocketclient.websocketevent.md#on_subscription_update), `listener`: (`subscriptions`: [_WebSocketSubscription_](../interfaces/client_websocketclient.websocketsubscription.md)) => _void_): [_WebSocketClient_](client_websocketclient.websocketclient.md)

#### Parameters:

| Name | Type |
| :-- | :-- |
| `event` | [_ON_SUBSCRIPTION_UPDATE_](../enums/client_websocketclient.websocketevent.md#on_subscription_update) |
| `listener` | (`subscriptions`: [_WebSocketSubscription_](../interfaces/client_websocketclient.websocketsubscription.md)) => _void_ |

**Returns:** [_WebSocketClient_](client_websocketclient.websocketclient.md)

Defined in: [client/WebSocketClient.ts:223](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/client/WebSocketClient.ts#L223)

▸ **on**(`event`: [_ON_OPEN_](../enums/client_websocketclient.websocketevent.md#on_open), `listener`: (`event`: _Event_) => _void_): [_WebSocketClient_](client_websocketclient.websocketclient.md)

#### Parameters:

| Name       | Type                                                                   |
| :--------- | :--------------------------------------------------------------------- |
| `event`    | [_ON_OPEN_](../enums/client_websocketclient.websocketevent.md#on_open) |
| `listener` | (`event`: _Event_) => _void_                                           |

**Returns:** [_WebSocketClient_](client_websocketclient.websocketclient.md)

Defined in: [client/WebSocketClient.ts:225](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/client/WebSocketClient.ts#L225)

---

### sendMessage

▸ **sendMessage**(`message`: [_WebSocketRequest_](../interfaces/client_websocketclient.websocketrequest.md)): _Promise_<void\>

#### Parameters:

| Name      | Type                                                                           |
| :-------- | :----------------------------------------------------------------------------- |
| `message` | [_WebSocketRequest_](../interfaces/client_websocketclient.websocketrequest.md) |

**Returns:** _Promise_<void\>

Defined in: [client/WebSocketClient.ts:332](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/client/WebSocketClient.ts#L332)

---

### subscribe

▸ **subscribe**(`channel`: [_WebSocketChannel_](../interfaces/client_websocketclient.websocketchannel.md) \| [_WebSocketChannel_](../interfaces/client_websocketclient.websocketchannel.md)[]): _void_

#### Parameters:

| Name | Type |
| :-- | :-- |
| `channel` | [_WebSocketChannel_](../interfaces/client_websocketclient.websocketchannel.md) \| [_WebSocketChannel_](../interfaces/client_websocketclient.websocketchannel.md)[] |

**Returns:** _void_

Defined in: [client/WebSocketClient.ts:353](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/client/WebSocketClient.ts#L353)

---

### unsubscribe

▸ **unsubscribe**(`channel`: [_WebSocketChannel_](../interfaces/client_websocketclient.websocketchannel.md) \| [_WebSocketChannelName_](../enums/client_websocketclient.websocketchannelname.md) \| [_WebSocketChannel_](../interfaces/client_websocketclient.websocketchannel.md)[]): _void_

#### Parameters:

| Name | Type |
| :-- | :-- |
| `channel` | [_WebSocketChannel_](../interfaces/client_websocketclient.websocketchannel.md) \| [_WebSocketChannelName_](../enums/client_websocketclient.websocketchannelname.md) \| [_WebSocketChannel_](../interfaces/client_websocketclient.websocketchannel.md)[] |

**Returns:** _void_

Defined in: [client/WebSocketClient.ts:360](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/client/WebSocketClient.ts#L360)
