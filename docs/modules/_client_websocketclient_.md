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

- [WebSocketLastMatchMessage](_client_websocketclient_.md#websocketlastmatchmessage)
- [WebSocketMatchMessage](_client_websocketclient_.md#websocketmatchmessage)
- [WebSocketResponse](_client_websocketclient_.md#websocketresponse)
- [WebSocketSubscription](_client_websocketclient_.md#websocketsubscription)
- [WebSocketTickerMessage](_client_websocketclient_.md#websockettickermessage)

## Type aliases

### WebSocketLastMatchMessage

Ƭ **WebSocketLastMatchMessage**: _Omit‹[WebSocketMatchMessage](_client_websocketclient_.md#websocketmatchmessage), "type"› & object_

_Defined in [src/client/WebSocketClient.ts:159](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L159)_

---

### WebSocketMatchMessage

Ƭ **WebSocketMatchMessage**: _object_

_Defined in [src/client/WebSocketClient.ts:146](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L146)_

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

_Defined in [src/client/WebSocketClient.ts:123](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L123)_

---

### WebSocketSubscription

Ƭ **WebSocketSubscription**: _object_

_Defined in [src/client/WebSocketClient.ts:161](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L161)_

#### Type declaration:

- **channels**: _[WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md)[]_

- **type**: _[SUBSCRIPTIONS](../enums/_client_websocketclient_.websocketresponsetype.md#subscriptions)_

---

### WebSocketTickerMessage

Ƭ **WebSocketTickerMessage**: _object_

_Defined in [src/client/WebSocketClient.ts:128](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/client/WebSocketClient.ts#L128)_

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
