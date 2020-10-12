[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["client/WebSocketClient"](_client_websocketclient_.md)

# Module: "client/WebSocketClient"

## Index

### Enumerations

- [WebSocketChannelName](../enums/_client_websocketclient_.websocketchannelname.md)
- [WebSocketEvent](../enums/_client_websocketclient_.websocketevent.md)
- [WebSocketRequestType](../enums/_client_websocketclient_.websocketrequesttype.md)
- [WebSocketResponseType](../enums/_client_websocketclient_.websocketresponsetype.md)

### Classes

- [WebSocketClient](../classes/_client_websocketclient_.websocketclient.md)

### Interfaces

- [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md)
- [WebSocketRequest](../interfaces/_client_websocketclient_.websocketrequest.md)

### Type aliases

- [WebSocketErrorMessage](_client_websocketclient_.md#websocketerrormessage)
- [WebSocketLastMatchMessage](_client_websocketclient_.md#websocketlastmatchmessage)
- [WebSocketMatchMessage](_client_websocketclient_.md#websocketmatchmessage)
- [WebSocketResponse](_client_websocketclient_.md#websocketresponse)
- [WebSocketStatusMessage](_client_websocketclient_.md#websocketstatusmessage)
- [WebSocketSubscription](_client_websocketclient_.md#websocketsubscription)
- [WebSocketTickerMessage](_client_websocketclient_.md#websockettickermessage)

## Type aliases

### WebSocketErrorMessage

Ƭ **WebSocketErrorMessage**: _object_

_Defined in [src/client/WebSocketClient.ts:133](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L133)_

#### Type declaration:

- **message**: _string_

- **reason**: _string_

- **type**: _[ERROR](../enums/_client_websocketclient_.websocketresponsetype.md#error)_

---

### WebSocketLastMatchMessage

Ƭ **WebSocketLastMatchMessage**: _Omit‹[WebSocketMatchMessage](_client_websocketclient_.md#websocketmatchmessage), "type"› & object_

_Defined in [src/client/WebSocketClient.ts:186](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L186)_

---

### WebSocketMatchMessage

Ƭ **WebSocketMatchMessage**: _object_

_Defined in [src/client/WebSocketClient.ts:139](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L139)_

#### Type declaration:

- **maker_order_id**: _UUID_V4_

- **price**: _string_

- **product_id**: _string_

- **sequence**: _number_

- **side**: _OrderSide_

- **size**: _string_

- **taker_order_id**: _UUID_V4_

- **time**: _ISO_8601_MS_UTC_

- **trade_id**: _number_

- **type**: _[FULL_MATCH](../enums/_client_websocketclient_.websocketresponsetype.md#full_match)_

---

### WebSocketResponse

Ƭ **WebSocketResponse**: _object & WebSocketMessage_

_Defined in [src/client/WebSocketClient.ts:123](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L123)_

---

### WebSocketStatusMessage

Ƭ **WebSocketStatusMessage**: _object_

_Defined in [src/client/WebSocketClient.ts:152](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L152)_

#### Type declaration:

- **currencies**: _object[]_

- **products**: _[Product](../interfaces/_product_productapi_.product.md) & object[]_

- **type**: _[STATUS](../enums/_client_websocketclient_.websocketresponsetype.md#status)_

---

### WebSocketSubscription

Ƭ **WebSocketSubscription**: _object_

_Defined in [src/client/WebSocketClient.ts:188](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L188)_

#### Type declaration:

- **channels**: _[WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md)[]_

- **type**: _[SUBSCRIPTIONS](../enums/_client_websocketclient_.websocketresponsetype.md#subscriptions)_

---

### WebSocketTickerMessage

Ƭ **WebSocketTickerMessage**: _object_

_Defined in [src/client/WebSocketClient.ts:168](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L168)_

#### Type declaration:

- **best_ask**: _string_

- **best_bid**: _string_

- **high_24h**: _string_

- **last_size**: _string_

- **low_24h**: _string_

- **open_24h**: _string_

- **price**: _string_

- **product_id**: _string_

- **sequence**: _number_

- **side**: _OrderSide_

- **time**: _ISO_8601_MS_UTC_

- **trade_id**: _number_

- **type**: _[TICKER](../enums/_client_websocketclient_.websocketresponsetype.md#ticker)_

- **volume_24h**: _string_

- **volume_30d**: _string_
