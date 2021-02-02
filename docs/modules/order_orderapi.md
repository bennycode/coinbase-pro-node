[coinbase-pro-node](../README.md) / [Exports](../modules.md) / order/OrderAPI

# Module: order/OrderAPI

## Table of contents

### Enumerations

- [CancelOrderPeriod](../enums/order_orderapi.cancelorderperiod.md)
- [OrderStatus](../enums/order_orderapi.orderstatus.md)
- [OrderType](../enums/order_orderapi.ordertype.md)
- [SelfTradePrevention](../enums/order_orderapi.selftradeprevention.md)
- [TimeInForce](../enums/order_orderapi.timeinforce.md)

### Classes

- [OrderAPI](../classes/order_orderapi.orderapi.md)

### Interfaces

- [AutoCancelLimitOrder](../interfaces/order_orderapi.autocancellimitorder.md)
- [FilledOrder](../interfaces/order_orderapi.filledorder.md)
- [LimitOrder](../interfaces/order_orderapi.limitorder.md)
- [PendingOrder](../interfaces/order_orderapi.pendingorder.md)
- [PostOnlyLimitOrder](../interfaces/order_orderapi.postonlylimitorder.md)

### Type aliases

- [MarketOrder](order_orderapi.md#marketorder)
- [NewOrder](order_orderapi.md#neworder)
- [Order](order_orderapi.md#order)

## Type aliases

### MarketOrder

Ƭ **MarketOrder**: BaseOrder & { `type`: [_MARKET_](../enums/order_orderapi.ordertype.md#market) } & { `size`: _string_ } | { `funds`: _string_ }

Defined in: [order/OrderAPI.ts:76](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/order/OrderAPI.ts#L76)

---

### NewOrder

Ƭ **NewOrder**: [_LimitOrder_](../interfaces/order_orderapi.limitorder.md) | [_AutoCancelLimitOrder_](../interfaces/order_orderapi.autocancellimitorder.md) | [_PostOnlyLimitOrder_](../interfaces/order_orderapi.postonlylimitorder.md) | [_MarketOrder_](order_orderapi.md#marketorder)

Defined in: [order/OrderAPI.ts:56](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/order/OrderAPI.ts#L56)

---

### Order

Ƭ **Order**: [_PendingOrder_](../interfaces/order_orderapi.pendingorder.md) | [_FilledOrder_](../interfaces/order_orderapi.filledorder.md)

Defined in: [order/OrderAPI.ts:97](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/order/OrderAPI.ts#L97)
