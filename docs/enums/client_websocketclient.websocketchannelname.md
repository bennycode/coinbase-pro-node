[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [client/WebSocketClient](../modules/client_websocketclient.md) / WebSocketChannelName

# Enumeration: WebSocketChannelName

[client/WebSocketClient](../modules/client_websocketclient.md).WebSocketChannelName

## Table of contents

### Enumeration members

- [FULL](client_websocketclient.websocketchannelname.md#full)
- [HEARTBEAT](client_websocketclient.websocketchannelname.md#heartbeat)
- [LEVEL2](client_websocketclient.websocketchannelname.md#level2)
- [MATCHES](client_websocketclient.websocketchannelname.md#matches)
- [STATUS](client_websocketclient.websocketchannelname.md#status)
- [TICKER](client_websocketclient.websocketchannelname.md#ticker)
- [USER](client_websocketclient.websocketchannelname.md#user)

## Enumeration members

### FULL

• **FULL**: = "full"

The full channel provides real-time updates on orders and trades. These updates can be applied on to a level 3 order book snapshot to maintain an accurate and up-to-date copy of the exchange order book.

Defined in: [client/WebSocketClient.ts:14](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L14)

___

### HEARTBEAT

• **HEARTBEAT**: = "heartbeat"

To receive heartbeat messages for specific products once a second subscribe to the heartbeat channel. Heartbeats also include sequence numbers and last trade ids that can be used to verify no messages were missed.

Defined in: [client/WebSocketClient.ts:16](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L16)

___

### LEVEL2

• **LEVEL2**: = "level2"

The easiest way to keep a snapshot of the order book is to use the level2 channel. It guarantees delivery of all updates, which reduce a lot of the overhead required when consuming the full channel.

Defined in: [client/WebSocketClient.ts:18](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L18)

___

### MATCHES

• **MATCHES**: = "matches"

If you are only interested in match messages you can subscribe to the matches channel. This is useful when you’re consuming the remaining feed using the level 2 channel. Please note that messages can be dropped from this channel. By using the heartbeat channel you can track the last trade id and fetch trades that you missed from the REST API.

Defined in: [client/WebSocketClient.ts:20](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L20)

___

### STATUS

• **STATUS**: = "status"

The status channel will send all products and currencies on a preset interval.

Defined in: [client/WebSocketClient.ts:22](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L22)

___

### TICKER

• **TICKER**: = "ticker"

The ticker channel provides real-time price updates every time a match happens. It batches updates in case of cascading matches, greatly reducing bandwidth requirements.

Defined in: [client/WebSocketClient.ts:24](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L24)

___

### USER

• **USER**: = "user"

This channel is a version of the full channel that only contains messages that include the authenticated user. Consequently, you need to be authenticated to receive any messages.

Defined in: [client/WebSocketClient.ts:26](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L26)
