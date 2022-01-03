[coinbase-pro-node](../README.md) / [Exports](../modules.md) / WebSocketChannelName

# Enumeration: WebSocketChannelName

## Table of contents

### Enumeration members

- [FULL](WebSocketChannelName.md#full)
- [HEARTBEAT](WebSocketChannelName.md#heartbeat)
- [LEVEL2](WebSocketChannelName.md#level2)
- [MATCHES](WebSocketChannelName.md#matches)
- [STATUS](WebSocketChannelName.md#status)
- [TICKER](WebSocketChannelName.md#ticker)
- [TICKER_1000](WebSocketChannelName.md#ticker_1000)
- [USER](WebSocketChannelName.md#user)

## Enumeration members

### FULL

• **FULL** = `"full"`

The full channel provides real-time updates on orders and trades. These updates can be applied on to a level 3 order book snapshot to maintain an accurate and up-to-date copy of the exchange order book.

#### Defined in

[client/WebSocketClient.ts:14](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L14)

---

### HEARTBEAT

• **HEARTBEAT** = `"heartbeat"`

To receive heartbeat messages for specific products once a second subscribe to the heartbeat channel. Heartbeats also include sequence numbers and last trade ids that can be used to verify no messages were missed.

#### Defined in

[client/WebSocketClient.ts:16](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L16)

---

### LEVEL2

• **LEVEL2** = `"level2"`

The easiest way to keep a snapshot of the order book is to use the level2 channel. It guarantees delivery of all updates, which reduce a lot of the overhead required when consuming the full channel.

#### Defined in

[client/WebSocketClient.ts:18](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L18)

---

### MATCHES

• **MATCHES** = `"matches"`

If you are only interested in match messages you can subscribe to the matches channel. This is useful when you’re consuming the remaining feed using the level 2 channel. Please note that messages can be dropped from this channel. By using the heartbeat channel you can track the last trade id and fetch trades that you missed from the REST API.

#### Defined in

[client/WebSocketClient.ts:20](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L20)

---

### STATUS

• **STATUS** = `"status"`

The status channel will send all products and currencies on a preset interval.

#### Defined in

[client/WebSocketClient.ts:22](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L22)

---

### TICKER

• **TICKER** = `"ticker"`

The ticker channel provides real-time price updates every time a match happens. It batches updates in case of cascading matches, greatly reducing bandwidth requirements.

#### Defined in

[client/WebSocketClient.ts:24](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L24)

---

### TICKER_1000

• **TICKER_1000** = `"ticker_1000"`

A special version of the ticker channel that only provides a ticker update about every 5 seconds.

#### Defined in

[client/WebSocketClient.ts:26](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L26)

---

### USER

• **USER** = `"user"`

This channel is a version of the full channel that only contains messages that include the authenticated user. Consequently, you need to be authenticated to receive any messages.

#### Defined in

[client/WebSocketClient.ts:28](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L28)
