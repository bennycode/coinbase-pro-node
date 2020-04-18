[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["product/ProductAPI"](../modules/_product_productapi_.md) › [OrderBookLevel3](_product_productapi_.orderbooklevel3.md)

# Interface: OrderBookLevel3

Full order book (non aggregated): Level 3 is only recommended for users wishing to maintain a full real-time order book using the websocket stream. Abuse of Level 3 via polling will cause your access to be limited or blocked.

## Hierarchy

- **OrderBookLevel3**

## Index

### Properties

- [asks](_product_productapi_.orderbooklevel3.md#asks)
- [bids](_product_productapi_.orderbooklevel3.md#bids)
- [sequence](_product_productapi_.orderbooklevel3.md#sequence)

## Properties

### asks

• **asks**: _NonAggregatedOrder[]_

_Defined in [src/product/ProductAPI.ts:129](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/product/ProductAPI.ts#L129)_

---

### bids

• **bids**: _NonAggregatedOrder[]_

_Defined in [src/product/ProductAPI.ts:128](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/product/ProductAPI.ts#L128)_

---

### sequence

• **sequence**: _SequenceNumber_

_Defined in [src/product/ProductAPI.ts:127](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/product/ProductAPI.ts#L127)_
