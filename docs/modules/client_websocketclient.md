[coinbase-pro-node](../README.md) / [Exports](../modules.md) / client/WebSocketClient

# Module: client/WebSocketClient

## Table of contents

### Enumerations

- [WebSocketChannelName](../enums/client/websocketclient.websocketchannelname.md)
- [WebSocketEvent](../enums/client/websocketclient.websocketevent.md)
- [WebSocketRequestType](../enums/client/websocketclient.websocketrequesttype.md)
- [WebSocketResponseType](../enums/client/websocketclient.websocketresponsetype.md)

### Classes

- [WebSocketClient](../classes/client/websocketclient.websocketclient.md)

### Interfaces

- [WebSocketChannel](../interfaces/client/websocketclient.websocketchannel.md)
- [WebSocketErrorMessage](../interfaces/client/websocketclient.websocketerrormessage.md)
- [WebSocketMatchMessage](../interfaces/client/websocketclient.websocketmatchmessage.md)
- [WebSocketRequest](../interfaces/client/websocketclient.websocketrequest.md)
- [WebSocketStatusMessage](../interfaces/client/websocketclient.websocketstatusmessage.md)
- [WebSocketSubscription](../interfaces/client/websocketclient.websocketsubscription.md)
- [WebSocketTickerMessage](../interfaces/client/websocketclient.websockettickermessage.md)

### Type aliases

- [WebSocketLastMatchMessage](client_websocketclient.md#websocketlastmatchmessage)
- [WebSocketResponse](client_websocketclient.md#websocketresponse)

## Type aliases

### WebSocketLastMatchMessage

Ƭ **WebSocketLastMatchMessage**: _Omit_<[_WebSocketMatchMessage_](../interfaces/client/websocketclient.websocketmatchmessage.md), _type_\> & { `type`: [_LAST_MATCH_](../enums/client/websocketclient.websocketresponsetype.md#last_match) }

Defined in: [client/WebSocketClient.ts:186](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/client/WebSocketClient.ts#L186)

---

### WebSocketResponse

Ƭ **WebSocketResponse**: WebSocketMessage & { `type`: [_WebSocketResponseType_](../enums/client/websocketclient.websocketresponsetype.md) }

Defined in: [client/WebSocketClient.ts:123](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/client/WebSocketClient.ts#L123)
