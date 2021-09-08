[coinbase-pro-node](../README.md) / [Exports](../modules.md) / WebSocketClient

# Class: WebSocketClient

## Hierarchy

- `EventEmitter`

  ↳ **`WebSocketClient`**

## Table of contents

### Constructors

- [constructor](WebSocketClient.md#constructor)

### Properties

- [CLOSE_EVENT_CODE](WebSocketClient.md#close_event_code)

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

[client/WebSocketClient.ts:246](https://github.com/bennycode/coinbase-pro-node/blob/6b575f0/src/client/WebSocketClient.ts#L246)

## Properties

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

[client/WebSocketClient.ts:230](https://github.com/bennycode/coinbase-pro-node/blob/6b575f0/src/client/WebSocketClient.ts#L230)

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

[client/WebSocketClient.ts:260](https://github.com/bennycode/coinbase-pro-node/blob/6b575f0/src/client/WebSocketClient.ts#L260)

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

[client/WebSocketClient.ts:325](https://github.com/bennycode/coinbase-pro-node/blob/6b575f0/src/client/WebSocketClient.ts#L325)

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

[client/WebSocketClient.ts:206](https://github.com/bennycode/coinbase-pro-node/blob/6b575f0/src/client/WebSocketClient.ts#L206)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name       | Type                                              |
| :--------- | :------------------------------------------------ |
| `event`    | [`ON_ERROR`](../enums/WebSocketEvent.md#on_error) |
| `listener` | (`event`: `ErrorEvent`) => `void`                 |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:208](https://github.com/bennycode/coinbase-pro-node/blob/6b575f0/src/client/WebSocketClient.ts#L208)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name       | Type                                                                           |
| :--------- | :----------------------------------------------------------------------------- |
| `event`    | [`ON_MESSAGE`](../enums/WebSocketEvent.md#on_message)                          |
| `listener` | (`response`: [`WebSocketResponse`](../modules.md#websocketresponse)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:210](https://github.com/bennycode/coinbase-pro-node/blob/6b575f0/src/client/WebSocketClient.ts#L210)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name       | Type                                                                                          |
| :--------- | :-------------------------------------------------------------------------------------------- |
| `event`    | [`ON_MESSAGE_ERROR`](../enums/WebSocketEvent.md#on_message_error)                             |
| `listener` | (`errorMessage`: [`WebSocketErrorMessage`](../interfaces/WebSocketErrorMessage.md)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:212](https://github.com/bennycode/coinbase-pro-node/blob/6b575f0/src/client/WebSocketClient.ts#L212)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name | Type |
| :-- | :-- |
| `event` | [`ON_MESSAGE_MATCHES`](../enums/WebSocketEvent.md#on_message_matches) |
| `listener` | (`matchMessage`: [`WebSocketMatchMessage`](../interfaces/WebSocketMatchMessage.md) \| [`WebSocketLastMatchMessage`](../modules.md#websocketlastmatchmessage)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:214](https://github.com/bennycode/coinbase-pro-node/blob/6b575f0/src/client/WebSocketClient.ts#L214)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name       | Type                                                                                             |
| :--------- | :----------------------------------------------------------------------------------------------- |
| `event`    | [`ON_MESSAGE_STATUS`](../enums/WebSocketEvent.md#on_message_status)                              |
| `listener` | (`statusMessage`: [`WebSocketStatusMessage`](../interfaces/WebSocketStatusMessage.md)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:219](https://github.com/bennycode/coinbase-pro-node/blob/6b575f0/src/client/WebSocketClient.ts#L219)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name       | Type                                                                                             |
| :--------- | :----------------------------------------------------------------------------------------------- |
| `event`    | [`ON_MESSAGE_TICKER`](../enums/WebSocketEvent.md#on_message_ticker)                              |
| `listener` | (`tickerMessage`: [`WebSocketTickerMessage`](../interfaces/WebSocketTickerMessage.md)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:221](https://github.com/bennycode/coinbase-pro-node/blob/6b575f0/src/client/WebSocketClient.ts#L221)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name       | Type                                                                                           |
| :--------- | :--------------------------------------------------------------------------------------------- |
| `event`    | [`ON_SUBSCRIPTION_UPDATE`](../enums/WebSocketEvent.md#on_subscription_update)                  |
| `listener` | (`subscriptions`: [`WebSocketSubscription`](../interfaces/WebSocketSubscription.md)) => `void` |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:223](https://github.com/bennycode/coinbase-pro-node/blob/6b575f0/src/client/WebSocketClient.ts#L223)

▸ **on**(`event`, `listener`): [`WebSocketClient`](WebSocketClient.md)

#### Parameters

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `event`    | [`ON_OPEN`](../enums/WebSocketEvent.md#on_open) |
| `listener` | (`event`: `Event`) => `void`                    |

#### Returns

[`WebSocketClient`](WebSocketClient.md)

#### Defined in

[client/WebSocketClient.ts:225](https://github.com/bennycode/coinbase-pro-node/blob/6b575f0/src/client/WebSocketClient.ts#L225)

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

[client/WebSocketClient.ts:332](https://github.com/bennycode/coinbase-pro-node/blob/6b575f0/src/client/WebSocketClient.ts#L332)

---

### subscribe

▸ **subscribe**(`channel`): `void`

#### Parameters

| Name | Type |
| :-- | :-- |
| `channel` | [`WebSocketChannel`](../interfaces/WebSocketChannel.md) \| [`WebSocketChannel`](../interfaces/WebSocketChannel.md)[] |

#### Returns

`void`

#### Defined in

[client/WebSocketClient.ts:353](https://github.com/bennycode/coinbase-pro-node/blob/6b575f0/src/client/WebSocketClient.ts#L353)

---

### unsubscribe

▸ **unsubscribe**(`channel`): `void`

#### Parameters

| Name | Type |
| :-- | :-- |
| `channel` | [`WebSocketChannel`](../interfaces/WebSocketChannel.md) \| [`WebSocketChannelName`](../enums/WebSocketChannelName.md) \| [`WebSocketChannel`](../interfaces/WebSocketChannel.md)[] |

#### Returns

`void`

#### Defined in

[client/WebSocketClient.ts:360](https://github.com/bennycode/coinbase-pro-node/blob/6b575f0/src/client/WebSocketClient.ts#L360)
