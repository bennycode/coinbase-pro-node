[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["client/WebSocketClient"](../modules/_client_websocketclient_.md) › [WebSocketResponseType](_client_websocketclient_.websocketresponsetype.md)

# Enumeration: WebSocketResponseType

## Index

### Enumeration members

- [ERROR](_client_websocketclient_.websocketresponsetype.md#error)
- [FULL_ACTIVATE](_client_websocketclient_.websocketresponsetype.md#full_activate)
- [FULL_CHANGE](_client_websocketclient_.websocketresponsetype.md#full_change)
- [FULL_DONE](_client_websocketclient_.websocketresponsetype.md#full_done)
- [FULL_MATCH](_client_websocketclient_.websocketresponsetype.md#full_match)
- [FULL_OPEN](_client_websocketclient_.websocketresponsetype.md#full_open)
- [FULL_RECEIVED](_client_websocketclient_.websocketresponsetype.md#full_received)
- [HEARTBEAT](_client_websocketclient_.websocketresponsetype.md#heartbeat)
- [LAST_MATCH](_client_websocketclient_.websocketresponsetype.md#last_match)
- [LEVEL2_SNAPSHOT](_client_websocketclient_.websocketresponsetype.md#level2_snapshot)
- [LEVEL2_UPDATE](_client_websocketclient_.websocketresponsetype.md#level2_update)
- [STATUS](_client_websocketclient_.websocketresponsetype.md#status)
- [SUBSCRIPTIONS](_client_websocketclient_.websocketresponsetype.md#subscriptions)
- [TICKER](_client_websocketclient_.websocketresponsetype.md#ticker)

## Enumeration members

### ERROR

• **ERROR**: = "error"

_Defined in [src/client/WebSocketClient.ts:41](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L41)_

Most failure cases will cause an error message (a message with the type "error") to be emitted.

---

### FULL_ACTIVATE

• **FULL_ACTIVATE**: = "activate"

_Defined in [src/client/WebSocketClient.ts:46](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L46)_

An `activate` message is sent when a stop order is placed. When the stop is triggered the order will be placed and go through the order lifecycle.

---

### FULL_CHANGE

• **FULL_CHANGE**: = "change"

_Defined in [src/client/WebSocketClient.ts:60](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L60)_

An order has changed. This is the result of self-trade prevention adjusting the order size or available funds. Orders can only decrease in size or funds. All `change` messages are sent anytime an order changes in size; this includes resting orders (open) as well as received but not yet open. All `change` messages are also sent when a new market order goes through self trade prevention and the funds for the market order have changed.

Note: `change` messages for received but not yet open orders can be ignored when building a real-time order book. The `side` field of a change message and `price` can be used as indicators for whether the change message is relevant if building from a level 2 book.

Any `change` message where the price is `null` indicates that the `change` message is for a market order. Change messages for limit orders will always have a price specified.

---

### FULL_DONE

• **FULL_DONE**: = "done"

_Defined in [src/client/WebSocketClient.ts:74](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L74)_

The order is no longer on the order book. Sent for all orders for which there was a received message. This message can result from an order being canceled or filled. There will be no more messages for this `order_id ` after a done message. The `remaining_size` indicates how much of the order went unfilled; this will be "0" for `filled` orders.

All `market` orders will not have a `remaining_size` or `price` field as they are never on the open order book at a given price.

A `done` message will be sent for received orders which are fully filled or canceled due to self-trade prevention. There will be no `open` message for such orders. All `done` messages for orders which are not on the book should be ignored when maintaining a real-time order book.

---

### FULL_MATCH

• **FULL_MATCH**: = "match"

_Defined in [src/client/WebSocketClient.ts:81](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L81)_

A trade occurred between two orders. The aggressor or `taker` order is the one executing immediately after being received and the `maker` order is a resting order on the book. The `side` field indicates the maker order side. If the side is `sell` this indicates the maker was a sell order and the `match` is considered an up-tick. A `buy` side match is a down-tick.

---

### FULL_OPEN

• **FULL_OPEN**: = "open"

_Defined in [src/client/WebSocketClient.ts:89](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L89)_

The order is now open on the order book. This message will only be sent for orders which are not fully filled immediately. The `remaining_size` will indicate how much of the order is unfilled and going on the book.

There will be no `open` message for orders which will be filled immediately. There will be no open message for market orders since they are filled immediately.

---

### FULL_RECEIVED

• **FULL_RECEIVED**: = "received"

_Defined in [src/client/WebSocketClient.ts:104](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L104)_

A valid order has been received and is now active. This message is emitted for every single valid order as soon as the matching engine receives it whether it fills immediately or not.

The `received` message does not indicate a resting order on the order book. It simply indicates a new incoming order which as been accepted by the matching engine for processing. Received orders may cause `match` message to follow if they are able to begin being filled (taker behavior). Self-trade prevention may also trigger change messages to follow if the order size needs to be adjusted. Orders which are not fully filled or canceled due to self-trade prevention result in an `open` message and become resting orders on the order book.

Market orders (indicated by the `order_type` field) may have an optional `funds` field which indicates how much quote currency will be used to buy or sell. For example, a `funds` field of "100.00" for the "BTC-USD" product would indicate a purchase of up to "100.00" USD worth of Bitcoin.

---

### HEARTBEAT

• **HEARTBEAT**: = "heartbeat"

_Defined in [src/client/WebSocketClient.ts:106](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L106)_

Heartbeats include sequence numbers and last trade ids that can be used to verify no messages were missed.

---

### LAST_MATCH

• **LAST_MATCH**: = "last_match"

_Defined in [src/client/WebSocketClient.ts:110](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L110)_

Latest match between two orders.

---

### LEVEL2_SNAPSHOT

• **LEVEL2_SNAPSHOT**: = "snapshot"

_Defined in [src/client/WebSocketClient.ts:112](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L112)_

When subscribing to the 'level2' channel it will send an initial snapshot message with the corresponding product ids, bids and asks to represent the entire order book.

---

### LEVEL2_UPDATE

• **LEVEL2_UPDATE**: = "l2update"

_Defined in [src/client/WebSocketClient.ts:114](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L114)_

Subsequent updates of a 'level2' subscription. The `time` property of `l2update` is the time of the event as recorded by our trading engine. Please note that `size` is the updated size at that price level, not a delta. A size of "0" indicates the price level can be removed.

---

### STATUS

• **STATUS**: = "status"

_Defined in [src/client/WebSocketClient.ts:116](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L116)_

The status channel will send all products and currencies on a preset interval.

---

### SUBSCRIPTIONS

• **SUBSCRIPTIONS**: = "subscriptions"

_Defined in [src/client/WebSocketClient.ts:118](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L118)_

Once a subscribe or unsubscribe message is received, the server will respond with a subscriptions message that lists all channels you are subscribed to.

---

### TICKER

• **TICKER**: = "ticker"

_Defined in [src/client/WebSocketClient.ts:120](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/client/WebSocketClient.ts#L120)_

The ticker channel provides real-time price updates every time a match happens.
