[coinbase-pro-node](../README.md) / [Exports](../modules.md) / WebSocketClient

# Class: WebSocketClient

## Hierarchy

- `EventEmitter`

  ↳ **`WebSocketClient`**

## Table of contents

### Constructors

- [constructor](WebSocketClient.md#constructor)

### Properties

- [socket](WebSocketClient.md#socket)
- [CLOSE_EVENT_CODE](WebSocketClient.md#close_event_code)

### Accessors

- [connected](WebSocketClient.md#connected)

### Methods

- [connect](WebSocketClient.md#connect)
- [disconnect](WebSocketClient.md#disconnect)
- [on](WebSocketClient.md#on)
- [sendMessage](WebSocketClient.md#sendmessage)
- [subscribe](WebSocketClient.md#subscribe)
- [unsubscribe](WebSocketClient.md#unsubscribe)

## Constructors

### constructor

• **new WebSocketClient**(`baseURL`, `signRequest`)

#### Parameters

| Name          | Type                                                     |
| :------------ | :------------------------------------------------------- |
| `baseURL`     | `string`                                                 |
| `signRequest` | (`setup`: `RequestSetup`) => `Promise`<`SignedRequest`\> |

#### Defined in

[client/WebSocketClient.ts:367](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L367)

## Properties

### socket

• **socket**: `undefined` \| `default`

#### Defined in

[client/WebSocketClient.ts:359](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L359)

---

### CLOSE_EVENT_CODE

▪ `Static` **CLOSE_EVENT_CODE**: `Object`

#### Type declaration

| Name               | Type     |
| :----------------- | :------- |
| `GOING_AWAY`       | `number` |
| `NORMAL_CLOSURE`   | `number` |
| `PROTOCOL_ERROR`   | `number` |
| `UNSUPPORTED_DATA` | `number` |

#### Defined in

[client/WebSocketClient.ts:351](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L351)

## Accessors

### connected

• `get` **connected**(): `boolean`

A simple function to determine if the websocket appears to be open.

#### Returns

`boolean`

True if the websocket has been opened and has not closed.

#### Defined in

[client/WebSocketClient.ts:479](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L479)

## Methods

### connect

▸ **connect**(`reconnectOptions?`): `default`

The websocket feed is publicly available, but connections to it are rate-limited to 1 per 4 seconds per IP.

**`see`** https://docs.pro.coinbase.com/#websocket-feed

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `reconnectOptions?` | `Options` | Reconnect options to be used with the "reconnecting-websocket" package. Note: Options will be merged with sensible default values. |

#### Returns

`default`

#### Defined in

[client/WebSocketClient.ts:381](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L381)

---

### disconnect

▸ **disconnect**(`reason?`): `void`

#### Parameters

| Name     | Type     | Default value      |
| :------- | :------- | :----------------- |
| `reason` | `string` | `'Unknown reason'` |

#### Returns

`void`

#### Defined in

[client/WebSocketClient.ts:467](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L467)

---

### on

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name       | Type                                              |
| :--------- | :------------------------------------------------ |
| `event`    | [`ON_CLOSE`](../enums/WebSocketEvent.md#on_close) |
| `listener` | (`event`: `CloseEvent`) => `void`                 |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:307](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L307)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name       | Type                                              |
| :--------- | :------------------------------------------------ |
| `event`    | [`ON_ERROR`](../enums/WebSocketEvent.md#on_error) |
| `listener` | (`event`: `ErrorEvent`) => `void`                 |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:309](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L309)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name       | Type                                                                           |
| :--------- | :----------------------------------------------------------------------------- |
| `event`    | [`ON_MESSAGE`](../enums/WebSocketEvent.md#on_message)                          |
| `listener` | (`response`: [`WebSocketResponse`](../modules.md#websocketresponse)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:311](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L311)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name       | Type                                                                                          |
| :--------- | :-------------------------------------------------------------------------------------------- |
| `event`    | [`ON_MESSAGE_ERROR`](../enums/WebSocketEvent.md#on_message_error)                             |
| `listener` | (`errorMessage`: [`WebSocketErrorMessage`](../interfaces/WebSocketErrorMessage.md)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:313](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L313)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name | Type |
| :-- | :-- |
| `event` | [`ON_MESSAGE_MATCHES`](../enums/WebSocketEvent.md#on_message_matches) |
| `listener` | (`matchMessage`: [`WebSocketMatchMessage`](../interfaces/WebSocketMatchMessage.md) \| [`WebSocketLastMatchMessage`](../modules.md#websocketlastmatchmessage)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:315](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L315)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name       | Type                                                                                             |
| :--------- | :----------------------------------------------------------------------------------------------- |
| `event`    | [`ON_MESSAGE_STATUS`](../enums/WebSocketEvent.md#on_message_status)                              |
| `listener` | (`statusMessage`: [`WebSocketStatusMessage`](../interfaces/WebSocketStatusMessage.md)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:320](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L320)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name       | Type                                                                                             |
| :--------- | :----------------------------------------------------------------------------------------------- |
| `event`    | [`ON_MESSAGE_TICKER`](../enums/WebSocketEvent.md#on_message_ticker)                              |
| `listener` | (`tickerMessage`: [`WebSocketTickerMessage`](../interfaces/WebSocketTickerMessage.md)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:322](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L322)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name       | Type                                                                                           |
| :--------- | :--------------------------------------------------------------------------------------------- |
| `event`    | [`ON_SUBSCRIPTION_UPDATE`](../enums/WebSocketEvent.md#on_subscription_update)                  |
| `listener` | (`subscriptions`: [`WebSocketSubscription`](../interfaces/WebSocketSubscription.md)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:324](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L324)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name | Type |
| :-- | :-- |
| `event` | [`ON_MESSAGE_L2SNAPSHOT`](../enums/WebSocketEvent.md#on_message_l2snapshot) |
| `listener` | (`subscriptions`: [`WebSocketL2SnapshotMessage`](../interfaces/WebSocketL2SnapshotMessage.md)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:326](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L326)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name       | Type                                                                                                 |
| :--------- | :--------------------------------------------------------------------------------------------------- |
| `event`    | [`ON_MESSAGE_L2UPDATE`](../enums/WebSocketEvent.md#on_message_l2update)                              |
| `listener` | (`subscriptions`: [`WebSocketL2UpdateMessage`](../interfaces/WebSocketL2UpdateMessage.md)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:328](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L328)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name | Type |
| :-- | :-- |
| `event` | [`ON_MESSAGE_FULL_RECEIVED`](../enums/WebSocketEvent.md#on_message_full_received) |
| `listener` | (`subscriptions`: [`WebSocketFullReceivedMessage`](../interfaces/WebSocketFullReceivedMessage.md)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:330](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L330)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name       | Type                                                                                                 |
| :--------- | :--------------------------------------------------------------------------------------------------- |
| `event`    | [`ON_MESSAGE_FULL_OPEN`](../enums/WebSocketEvent.md#on_message_full_open)                            |
| `listener` | (`subscriptions`: [`WebSocketFullOpenMessage`](../interfaces/WebSocketFullOpenMessage.md)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:335](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L335)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name       | Type                                                                                                 |
| :--------- | :--------------------------------------------------------------------------------------------------- |
| `event`    | [`ON_MESSAGE_FULL_DONE`](../enums/WebSocketEvent.md#on_message_full_done)                            |
| `listener` | (`subscriptions`: [`WebSocketFullDoneMessage`](../interfaces/WebSocketFullDoneMessage.md)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:337](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L337)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name | Type |
| :-- | :-- |
| `event` | [`ON_MESSAGE_FULL_CHANGE`](../enums/WebSocketEvent.md#on_message_full_change) |
| `listener` | (`subscriptions`: [`WebSocketFullChangeMessage`](../interfaces/WebSocketFullChangeMessage.md)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:339](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L339)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name | Type |
| :-- | :-- |
| `event` | [`ON_MESSAGE_FULL_ACTIVATE`](../enums/WebSocketEvent.md#on_message_full_activate) |
| `listener` | (`subscriptions`: [`WebSocketFullActivateMessage`](../interfaces/WebSocketFullActivateMessage.md)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:341](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L341)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `event`    | [`ON_OPEN`](../enums/WebSocketEvent.md#on_open) |
| `listener` | (`event`: `Event`) => `void`                    |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:346](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L346)

---

### sendMessage

▸ **sendMessage**(`message`): `Promise`<`void`\>

#### Parameters

| Name      | Type                                                    |
| :-------- | :------------------------------------------------------ |
| `message` | [`WebSocketRequest`](../interfaces/WebSocketRequest.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[client/WebSocketClient.ts:483](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L483)

---

### subscribe

▸ **subscribe**(`channel`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :-- | :-- |
| `channel` | [`WebSocketChannel`](../interfaces/WebSocketChannel.md) \| [`WebSocketChannel`](../interfaces/WebSocketChannel.md)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[client/WebSocketClient.ts:504](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L504)

---

### unsubscribe

▸ **unsubscribe**(`channel`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :-- | :-- |
| `channel` | [`WebSocketChannel`](../interfaces/WebSocketChannel.md) \| [`WebSocketChannelName`](../enums/WebSocketChannelName.md) \| [`WebSocketChannel`](../interfaces/WebSocketChannel.md)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[client/WebSocketClient.ts:511](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L511)
