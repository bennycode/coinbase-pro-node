[coinbase-pro-node](../README.md) / [Exports](../modules.md) / client/WebSocketClient

# Module: client/WebSocketClient

## Table of contents

### Enumerations

- [WebSocketChannelName](../enums/client_websocketclient.websocketchannelname.md)
- [WebSocketEvent](../enums/client_websocketclient.websocketevent.md)
- [WebSocketRequestType](../enums/client_websocketclient.websocketrequesttype.md)
- [WebSocketResponseType](../enums/client_websocketclient.websocketresponsetype.md)

### Classes

- [WebSocketClient](../classes/client_websocketclient.websocketclient.md)

### Interfaces

- [WebSocketChannel](../interfaces/client_websocketclient.websocketchannel.md)
- [WebSocketErrorMessage](../interfaces/client_websocketclient.websocketerrormessage.md)
- [WebSocketMatchMessage](../interfaces/client_websocketclient.websocketmatchmessage.md)
- [WebSocketRequest](../interfaces/client_websocketclient.websocketrequest.md)
- [WebSocketStatusMessage](../interfaces/client_websocketclient.websocketstatusmessage.md)
- [WebSocketSubscription](../interfaces/client_websocketclient.websocketsubscription.md)
- [WebSocketTickerMessage](../interfaces/client_websocketclient.websockettickermessage.md)

### Type aliases

- [WebSocketLastMatchMessage](client_websocketclient.md#websocketlastmatchmessage)
- [WebSocketResponse](client_websocketclient.md#websocketresponse)

## Type aliases

### WebSocketLastMatchMessage

Ƭ **WebSocketLastMatchMessage**: *Omit*<[*WebSocketMatchMessage*](../interfaces/client_websocketclient.websocketmatchmessage.md), *type*\> & { `type`: [*LAST\_MATCH*](../enums/client_websocketclient.websocketresponsetype.md#last_match)  }

Defined in: [client/WebSocketClient.ts:186](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L186)

___

### WebSocketResponse

Ƭ **WebSocketResponse**: WebSocketMessage & { `type`: [*WebSocketResponseType*](../enums/client_websocketclient.websocketresponsetype.md)  }

Defined in: [client/WebSocketClient.ts:123](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L123)
