[coinbase-pro-node](../../README.md) / [Exports](../../modules.md) / [product/ProductAPI](../../modules/product_productapi.md) / OrderBookLevel3

# Interface: OrderBookLevel3

[product/ProductAPI](../../modules/product_productapi.md).OrderBookLevel3

Full order book (non aggregated): Level 3 is only recommended for users wishing to maintain a full real-time order book using the websocket stream. Abuse of Level 3 via polling will cause your access to be limited or blocked.

## Hierarchy

- **OrderBookLevel3**

## Table of contents

### Properties

- [asks](productapi.orderbooklevel3.md#asks)
- [bids](productapi.orderbooklevel3.md#bids)
- [sequence](productapi.orderbooklevel3.md#sequence)

## Properties

### asks

• **asks**: NonAggregatedOrder[]

Defined in: [product/ProductAPI.ts:128](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/product/ProductAPI.ts#L128)

---

### bids

• **bids**: NonAggregatedOrder[]

Defined in: [product/ProductAPI.ts:129](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/product/ProductAPI.ts#L129)

---

### sequence

• **sequence**: _number_

Defined in: [product/ProductAPI.ts:130](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/product/ProductAPI.ts#L130)
