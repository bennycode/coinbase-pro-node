[coinbase-pro-node](../README.md) / [Exports](../modules.md) / order/OrderAPI

# Module: order/OrderAPI

## Table of contents

### Enumerations

- [CancelOrderPeriod](../enums/order/orderapi.cancelorderperiod.md)
- [OrderStatus](../enums/order/orderapi.orderstatus.md)
- [OrderType](../enums/order/orderapi.ordertype.md)
- [SelfTradePrevention](../enums/order/orderapi.selftradeprevention.md)
- [TimeInForce](../enums/order/orderapi.timeinforce.md)

### Classes

- [OrderAPI](../classes/order/orderapi.orderapi.md)

### Interfaces

- [AutoCancelLimitOrder](../interfaces/order/orderapi.autocancellimitorder.md)
- [FilledOrder](../interfaces/order/orderapi.filledorder.md)
- [LimitOrder](../interfaces/order/orderapi.limitorder.md)
- [PendingOrder](../interfaces/order/orderapi.pendingorder.md)
- [PostOnlyLimitOrder](../interfaces/order/orderapi.postonlylimitorder.md)

### Type aliases

- [MarketOrder](order_orderapi.md#marketorder)
- [NewOrder](order_orderapi.md#neworder)
- [Order](order_orderapi.md#order)

## Type aliases

### MarketOrder

Ƭ **MarketOrder**: BaseOrder & { `type`: [_MARKET_](../enums/order/orderapi.ordertype.md#market) } & { `size`: _string_ } \| { `funds`: _string_ }

Defined in: [order/OrderAPI.ts:76](https://github.com/bennycode/coinbase-pro-node/blob/aa07e6d/src/order/OrderAPI.ts#L76)

---

### NewOrder

Ƭ **NewOrder**: [_LimitOrder_](../interfaces/order/orderapi.limitorder.md) \| [_AutoCancelLimitOrder_](../interfaces/order/orderapi.autocancellimitorder.md) \| [_PostOnlyLimitOrder_](../interfaces/order/orderapi.postonlylimitorder.md) \| [_MarketOrder_](order_orderapi.md#marketorder)

Defined in: [order/OrderAPI.ts:56](https://github.com/bennycode/coinbase-pro-node/blob/aa07e6d/src/order/OrderAPI.ts#L56)

---

### Order

Ƭ **Order**: [_PendingOrder_](../interfaces/order/orderapi.pendingorder.md) \| [_FilledOrder_](../interfaces/order/orderapi.filledorder.md)

Defined in: [order/OrderAPI.ts:97](https://github.com/bennycode/coinbase-pro-node/blob/aa07e6d/src/order/OrderAPI.ts#L97)
