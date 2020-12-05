**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / "client/WebSocketClient"

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
- [WebSocketErrorMessage](../interfaces/_client_websocketclient_.websocketerrormessage.md)
- [WebSocketMatchMessage](../interfaces/_client_websocketclient_.websocketmatchmessage.md)
- [WebSocketRequest](../interfaces/_client_websocketclient_.websocketrequest.md)
- [WebSocketStatusMessage](../interfaces/_client_websocketclient_.websocketstatusmessage.md)
- [WebSocketSubscription](../interfaces/_client_websocketclient_.websocketsubscription.md)
- [WebSocketTickerMessage](../interfaces/_client_websocketclient_.websockettickermessage.md)

### Type aliases

- [WebSocketLastMatchMessage](_client_websocketclient_.md#websocketlastmatchmessage)
- [WebSocketResponse](_client_websocketclient_.md#websocketresponse)

## Type aliases

### WebSocketLastMatchMessage

Ƭ **WebSocketLastMatchMessage**: Omit\<[WebSocketMatchMessage](../interfaces/_client_websocketclient_.websocketmatchmessage.md), \"type\"> & { type: [LAST_MATCH](../enums/_client_websocketclient_.websocketresponsetype.md#last_match) }

_Defined in [src/client/WebSocketClient.ts:186](https://github.com/bennycode/coinbase-pro-node/blob/cb84fec/src/client/WebSocketClient.ts#L186)_

---

### WebSocketResponse

Ƭ **WebSocketResponse**: WebSocketMessage & { type: [WebSocketResponseType](../enums/_client_websocketclient_.websocketresponsetype.md) }

_Defined in [src/client/WebSocketClient.ts:123](https://github.com/bennycode/coinbase-pro-node/blob/cb84fec/src/client/WebSocketClient.ts#L123)_
