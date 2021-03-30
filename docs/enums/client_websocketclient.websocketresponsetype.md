[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [client/WebSocketClient](../modules/client_websocketclient.md) / WebSocketResponseType

# Enumeration: WebSocketResponseType

[client/WebSocketClient](../modules/client_websocketclient.md).WebSocketResponseType

## Table of contents

### Enumeration members

- [ERROR](client_websocketclient.websocketresponsetype.md#error)
- [FULL\_ACTIVATE](client_websocketclient.websocketresponsetype.md#full_activate)
- [FULL\_CHANGE](client_websocketclient.websocketresponsetype.md#full_change)
- [FULL\_DONE](client_websocketclient.websocketresponsetype.md#full_done)
- [FULL\_MATCH](client_websocketclient.websocketresponsetype.md#full_match)
- [FULL\_OPEN](client_websocketclient.websocketresponsetype.md#full_open)
- [FULL\_RECEIVED](client_websocketclient.websocketresponsetype.md#full_received)
- [HEARTBEAT](client_websocketclient.websocketresponsetype.md#heartbeat)
- [LAST\_MATCH](client_websocketclient.websocketresponsetype.md#last_match)
- [LEVEL2\_SNAPSHOT](client_websocketclient.websocketresponsetype.md#level2_snapshot)
- [LEVEL2\_UPDATE](client_websocketclient.websocketresponsetype.md#level2_update)
- [STATUS](client_websocketclient.websocketresponsetype.md#status)
- [SUBSCRIPTIONS](client_websocketclient.websocketresponsetype.md#subscriptions)
- [TICKER](client_websocketclient.websocketresponsetype.md#ticker)

## Enumeration members

### ERROR

• **ERROR**: = "error"

Most failure cases will cause an error message (a message with the type "error") to be emitted.

Defined in: [client/WebSocketClient.ts:41](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L41)

___

### FULL\_ACTIVATE

• **FULL\_ACTIVATE**: = "activate"

An `activate` message is sent when a stop order is placed. When the stop is triggered the order will be placed and
go through the order lifecycle.

Defined in: [client/WebSocketClient.ts:46](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L46)

___

### FULL\_CHANGE

• **FULL\_CHANGE**: = "change"

An order has changed. This is the result of self-trade prevention adjusting the order size or available funds.
Orders can only decrease in size or funds. All `change` messages are sent anytime an order changes in size; this
includes resting orders (open) as well as received but not yet open. All `change` messages are also sent when a
new market order goes through self trade prevention and the funds for the market order have changed.

Note: `change` messages for received but not yet open orders can be ignored when building a real-time order book.
The `side` field of a change message and `price` can be used as indicators for whether the change message is
relevant if building from a level 2 book.

Any `change` message where the price is `null` indicates that the `change` message is for a market order. Change
messages for limit orders will always have a price specified.

Defined in: [client/WebSocketClient.ts:60](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L60)

___

### FULL\_DONE

• **FULL\_DONE**: = "done"

The order is no longer on the order book. Sent for all orders for which there was a received message. This message
can result from an order being canceled or filled. There will be no more messages for this `order_id ` after a
done message. The `remaining_size` indicates how much of the order went unfilled; this will be "0" for `filled`
orders.

All `market` orders will not have a `remaining_size` or `price` field as they are never on the open order book at
a given price.

A `done` message will be sent for received orders which are fully filled or canceled due to self-trade prevention.
There will be no `open` message for such orders. All `done` messages for orders which are not on the book should
be ignored when maintaining a real-time order book.

Defined in: [client/WebSocketClient.ts:74](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L74)

___

### FULL\_MATCH

• **FULL\_MATCH**: = "match"

A trade occurred between two orders. The aggressor or `taker` order is the one executing immediately after being
received and the `maker` order is a resting order on the book. The `side` field indicates the maker order side. If
the side is `sell` this indicates the maker was a sell order and the `match` is considered an up-tick. A `buy`
side match is a down-tick.

Defined in: [client/WebSocketClient.ts:81](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L81)

___

### FULL\_OPEN

• **FULL\_OPEN**: = "open"

The order is now open on the order book. This message will only be sent for orders which are not fully filled
immediately. The `remaining_size` will indicate how much of the order is unfilled and going on the book.

There will be no `open` message for orders which will be filled immediately. There will be no open message for
market orders since they are filled immediately.

Defined in: [client/WebSocketClient.ts:89](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L89)

___

### FULL\_RECEIVED

• **FULL\_RECEIVED**: = "received"

A valid order has been received and is now active. This message is emitted for every single valid order as soon as
the matching engine receives it whether it fills immediately or not.

The `received` message does not indicate a resting order on the order book. It simply indicates a new incoming
order which as been accepted by the matching engine for processing. Received orders may cause `match` message to
follow if they are able to begin being filled (taker behavior). Self-trade prevention may also trigger change
messages to follow if the order size needs to be adjusted. Orders which are not fully filled or canceled due to
self-trade prevention result in an `open` message and become resting orders on the order book.

Market orders (indicated by the `order_type` field) may have an optional `funds` field which indicates how much
quote currency will be used to buy or sell. For example, a `funds` field of "100.00" for the "BTC-USD" product
would indicate a purchase of up to "100.00" USD worth of Bitcoin.

Defined in: [client/WebSocketClient.ts:104](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L104)

___

### HEARTBEAT

• **HEARTBEAT**: = "heartbeat"

Heartbeats include sequence numbers and last trade ids that can be used to verify no messages were missed.

Defined in: [client/WebSocketClient.ts:106](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L106)

___

### LAST\_MATCH

• **LAST\_MATCH**: = "last\_match"

Latest match between two orders.

Defined in: [client/WebSocketClient.ts:110](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L110)

___

### LEVEL2\_SNAPSHOT

• **LEVEL2\_SNAPSHOT**: = "snapshot"

When subscribing to the 'level2' channel it will send an initial snapshot message with the corresponding product ids, bids and asks to represent the entire order book.

Defined in: [client/WebSocketClient.ts:112](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L112)

___

### LEVEL2\_UPDATE

• **LEVEL2\_UPDATE**: = "l2update"

Subsequent updates of a 'level2' subscription. The `time` property of `l2update` is the time of the event as recorded by our trading engine. Please note that `size` is the updated size at that price level, not a delta. A size of "0" indicates the price level can be removed.

Defined in: [client/WebSocketClient.ts:114](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L114)

___

### STATUS

• **STATUS**: = "status"

The status channel will send all products and currencies on a preset interval.

Defined in: [client/WebSocketClient.ts:116](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L116)

___

### SUBSCRIPTIONS

• **SUBSCRIPTIONS**: = "subscriptions"

Once a subscribe or unsubscribe message is received, the server will respond with a subscriptions message that lists all channels you are subscribed to.

Defined in: [client/WebSocketClient.ts:118](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L118)

___

### TICKER

• **TICKER**: = "ticker"

The ticker channel provides real-time price updates every time a match happens.

Defined in: [client/WebSocketClient.ts:120](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L120)
