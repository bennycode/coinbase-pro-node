[coinbase-pro-node](../README.md) / [Exports](../modules.md) / WebSocketClient

# Class: WebSocketClient

## Hierarchy

* *EventEmitter*

  ↳ **WebSocketClient**

## Table of contents

### Constructors

- [constructor](websocketclient.md#constructor)

### Properties

- [CLOSE\_EVENT\_CODE](websocketclient.md#close_event_code)

### Methods

- [connect](websocketclient.md#connect)
- [disconnect](websocketclient.md#disconnect)
- [on](websocketclient.md#on)
- [sendMessage](websocketclient.md#sendmessage)
- [subscribe](websocketclient.md#subscribe)
- [unsubscribe](websocketclient.md#unsubscribe)

## Constructors

### constructor

\+ **new WebSocketClient**(`baseURL`: *string*, `signRequest`: (`setup`: RequestSetup) => *Promise*<SignedRequest\>): [*WebSocketClient*](websocketclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`baseURL` | *string* |
`signRequest` | (`setup`: RequestSetup) => *Promise*<SignedRequest\> |

**Returns:** [*WebSocketClient*](websocketclient.md)

Defined in: [client/WebSocketClient.ts:244](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L244)

## Properties

### CLOSE\_EVENT\_CODE

▪ `Static` **CLOSE\_EVENT\_CODE**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`GOING_AWAY` | *number* |
`NORMAL_CLOSURE` | *number* |
`PROTOCOL_ERROR` | *number* |
`UNSUPPORTED_DATA` | *number* |

Defined in: [client/WebSocketClient.ts:230](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L230)

## Methods

### connect

▸ **connect**(`reconnectOptions?`: Options): *default*

The websocket feed is publicly available, but connections to it are rate-limited to 1 per 4 seconds per IP.

**`see`** https://docs.pro.coinbase.com/#websocket-feed

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`reconnectOptions?` | Options | Reconnect options to be used with the "reconnecting-websocket" package. Note: Options   will be merged with sensible default values.   |

**Returns:** *default*

Defined in: [client/WebSocketClient.ts:260](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L260)

___

### disconnect

▸ **disconnect**(`reason?`: *string*): *void*

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`reason` | *string* | 'Unknown reason' |

**Returns:** *void*

Defined in: [client/WebSocketClient.ts:325](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L325)

___

### on

▸ **on**(`event`: [*ON\_CLOSE*](../enums/websocketevent.md#on_close), `listener`: (`event`: *CloseEvent*) => *void*): [*WebSocketClient*](websocketclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*ON\_CLOSE*](../enums/websocketevent.md#on_close) |
`listener` | (`event`: *CloseEvent*) => *void* |

**Returns:** [*WebSocketClient*](websocketclient.md)

Defined in: [client/WebSocketClient.ts:206](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L206)

▸ **on**(`event`: [*ON\_ERROR*](../enums/websocketevent.md#on_error), `listener`: (`event`: *ErrorEvent*) => *void*): [*WebSocketClient*](websocketclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*ON\_ERROR*](../enums/websocketevent.md#on_error) |
`listener` | (`event`: *ErrorEvent*) => *void* |

**Returns:** [*WebSocketClient*](websocketclient.md)

Defined in: [client/WebSocketClient.ts:208](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L208)

▸ **on**(`event`: [*ON\_MESSAGE*](../enums/websocketevent.md#on_message), `listener`: (`response`: [*WebSocketResponse*](../modules.md#websocketresponse)) => *void*): [*WebSocketClient*](websocketclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*ON\_MESSAGE*](../enums/websocketevent.md#on_message) |
`listener` | (`response`: [*WebSocketResponse*](../modules.md#websocketresponse)) => *void* |

**Returns:** [*WebSocketClient*](websocketclient.md)

Defined in: [client/WebSocketClient.ts:210](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L210)

▸ **on**(`event`: [*ON\_MESSAGE\_ERROR*](../enums/websocketevent.md#on_message_error), `listener`: (`errorMessage`: [*WebSocketErrorMessage*](../interfaces/websocketerrormessage.md)) => *void*): [*WebSocketClient*](websocketclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*ON\_MESSAGE\_ERROR*](../enums/websocketevent.md#on_message_error) |
`listener` | (`errorMessage`: [*WebSocketErrorMessage*](../interfaces/websocketerrormessage.md)) => *void* |

**Returns:** [*WebSocketClient*](websocketclient.md)

Defined in: [client/WebSocketClient.ts:212](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L212)

▸ **on**(`event`: [*ON\_MESSAGE\_MATCHES*](../enums/websocketevent.md#on_message_matches), `listener`: (`matchMessage`: [*WebSocketMatchMessage*](../interfaces/websocketmatchmessage.md) \| [*WebSocketLastMatchMessage*](../modules.md#websocketlastmatchmessage)) => *void*): [*WebSocketClient*](websocketclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*ON\_MESSAGE\_MATCHES*](../enums/websocketevent.md#on_message_matches) |
`listener` | (`matchMessage`: [*WebSocketMatchMessage*](../interfaces/websocketmatchmessage.md) \| [*WebSocketLastMatchMessage*](../modules.md#websocketlastmatchmessage)) => *void* |

**Returns:** [*WebSocketClient*](websocketclient.md)

Defined in: [client/WebSocketClient.ts:214](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L214)

▸ **on**(`event`: [*ON\_MESSAGE\_STATUS*](../enums/websocketevent.md#on_message_status), `listener`: (`statusMessage`: [*WebSocketStatusMessage*](../interfaces/websocketstatusmessage.md)) => *void*): [*WebSocketClient*](websocketclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*ON\_MESSAGE\_STATUS*](../enums/websocketevent.md#on_message_status) |
`listener` | (`statusMessage`: [*WebSocketStatusMessage*](../interfaces/websocketstatusmessage.md)) => *void* |

**Returns:** [*WebSocketClient*](websocketclient.md)

Defined in: [client/WebSocketClient.ts:219](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L219)

▸ **on**(`event`: [*ON\_MESSAGE\_TICKER*](../enums/websocketevent.md#on_message_ticker), `listener`: (`tickerMessage`: [*WebSocketTickerMessage*](../interfaces/websockettickermessage.md)) => *void*): [*WebSocketClient*](websocketclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*ON\_MESSAGE\_TICKER*](../enums/websocketevent.md#on_message_ticker) |
`listener` | (`tickerMessage`: [*WebSocketTickerMessage*](../interfaces/websockettickermessage.md)) => *void* |

**Returns:** [*WebSocketClient*](websocketclient.md)

Defined in: [client/WebSocketClient.ts:221](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L221)

▸ **on**(`event`: [*ON\_SUBSCRIPTION\_UPDATE*](../enums/websocketevent.md#on_subscription_update), `listener`: (`subscriptions`: [*WebSocketSubscription*](../interfaces/websocketsubscription.md)) => *void*): [*WebSocketClient*](websocketclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*ON\_SUBSCRIPTION\_UPDATE*](../enums/websocketevent.md#on_subscription_update) |
`listener` | (`subscriptions`: [*WebSocketSubscription*](../interfaces/websocketsubscription.md)) => *void* |

**Returns:** [*WebSocketClient*](websocketclient.md)

Defined in: [client/WebSocketClient.ts:223](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L223)

▸ **on**(`event`: [*ON\_OPEN*](../enums/websocketevent.md#on_open), `listener`: (`event`: *Event*) => *void*): [*WebSocketClient*](websocketclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*ON\_OPEN*](../enums/websocketevent.md#on_open) |
`listener` | (`event`: *Event*) => *void* |

**Returns:** [*WebSocketClient*](websocketclient.md)

Defined in: [client/WebSocketClient.ts:225](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L225)

___

### sendMessage

▸ **sendMessage**(`message`: [*WebSocketRequest*](../interfaces/websocketrequest.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`message` | [*WebSocketRequest*](../interfaces/websocketrequest.md) |

**Returns:** *Promise*<void\>

Defined in: [client/WebSocketClient.ts:332](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L332)

___

### subscribe

▸ **subscribe**(`channel`: [*WebSocketChannel*](../interfaces/websocketchannel.md) \| [*WebSocketChannel*](../interfaces/websocketchannel.md)[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`channel` | [*WebSocketChannel*](../interfaces/websocketchannel.md) \| [*WebSocketChannel*](../interfaces/websocketchannel.md)[] |

**Returns:** *void*

Defined in: [client/WebSocketClient.ts:353](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L353)

___

### unsubscribe

▸ **unsubscribe**(`channel`: [*WebSocketChannel*](../interfaces/websocketchannel.md) \| [*WebSocketChannelName*](../enums/websocketchannelname.md) \| [*WebSocketChannel*](../interfaces/websocketchannel.md)[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`channel` | [*WebSocketChannel*](../interfaces/websocketchannel.md) \| [*WebSocketChannelName*](../enums/websocketchannelname.md) \| [*WebSocketChannel*](../interfaces/websocketchannel.md)[] |

**Returns:** *void*

Defined in: [client/WebSocketClient.ts:360](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L360)
