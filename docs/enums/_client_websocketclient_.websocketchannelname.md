[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["client/WebSocketClient"](../modules/_client_websocketclient_.md) › [WebSocketChannelName](_client_websocketclient_.websocketchannelname.md)

# Enumeration: WebSocketChannelName

## Index

### Enumeration members

- [FULL](_client_websocketclient_.websocketchannelname.md#full)
- [HEARTBEAT](_client_websocketclient_.websocketchannelname.md#heartbeat)
- [LEVEL2](_client_websocketclient_.websocketchannelname.md#level2)
- [MATCHES](_client_websocketclient_.websocketchannelname.md#matches)
- [STATUS](_client_websocketclient_.websocketchannelname.md#status)
- [TICKER](_client_websocketclient_.websocketchannelname.md#ticker)
- [USER](_client_websocketclient_.websocketchannelname.md#user)

## Enumeration members

### FULL

• **FULL**: = "full"

_Defined in [src/client/WebSocketClient.ts:14](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L14)_

The full channel provides real-time updates on orders and trades. These updates can be applied on to a level 3 order book snapshot to maintain an accurate and up-to-date copy of the exchange order book.

---

### HEARTBEAT

• **HEARTBEAT**: = "heartbeat"

_Defined in [src/client/WebSocketClient.ts:16](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L16)_

To receive heartbeat messages for specific products once a second subscribe to the heartbeat channel. Heartbeats also include sequence numbers and last trade ids that can be used to verify no messages were missed.

---

### LEVEL2

• **LEVEL2**: = "level2"

_Defined in [src/client/WebSocketClient.ts:18](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L18)_

The easiest way to keep a snapshot of the order book is to use the level2 channel. It guarantees delivery of all updates, which reduce a lot of the overhead required when consuming the full channel.

---

### MATCHES

• **MATCHES**: = "matches"

_Defined in [src/client/WebSocketClient.ts:20](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L20)_

If you are only interested in match messages you can subscribe to the matches channel. This is useful when you’re consuming the remaining feed using the level 2 channel. Please note that messages can be dropped from this channel. By using the heartbeat channel you can track the last trade id and fetch trades that you missed from the REST API.

---

### STATUS

• **STATUS**: = "status"

_Defined in [src/client/WebSocketClient.ts:22](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L22)_

The status channel will send all products and currencies on a preset interval.

---

### TICKER

• **TICKER**: = "ticker"

_Defined in [src/client/WebSocketClient.ts:24](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L24)_

The ticker channel provides real-time price updates every time a match happens. It batches updates in case of cascading matches, greatly reducing bandwidth requirements.

---

### USER

• **USER**: = "user"

_Defined in [src/client/WebSocketClient.ts:26](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L26)_

This channel is a version of the full channel that only contains messages that include the authenticated user. Consequently, you need to be authenticated to receive any messages.
