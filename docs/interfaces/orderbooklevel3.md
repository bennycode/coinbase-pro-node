[coinbase-pro-node](../README.md) / [Exports](../modules.md) / OrderBookLevel3

# Interface: OrderBookLevel3

Full order book (non aggregated): Level 3 is only recommended for users wishing to maintain a full real-time order book using the websocket stream. Abuse of Level 3 via polling will cause your access to be limited or blocked.

## Table of contents

### Properties

- [asks](orderbooklevel3.md#asks)
- [bids](orderbooklevel3.md#bids)
- [sequence](orderbooklevel3.md#sequence)

## Properties

### asks

• **asks**: `NonAggregatedOrder`[]

#### Defined in

[product/ProductAPI.ts:128](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/ProductAPI.ts#L128)

---

### bids

• **bids**: `NonAggregatedOrder`[]

#### Defined in

[product/ProductAPI.ts:129](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/ProductAPI.ts#L129)

---

### sequence

• **sequence**: `number`

#### Defined in

[product/ProductAPI.ts:130](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/ProductAPI.ts#L130)
