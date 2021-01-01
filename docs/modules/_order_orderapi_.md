**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / "order/OrderAPI"

# Module: "order/OrderAPI"

## Index

### Enumerations

- [CancelOrderPeriod](../enums/_order_orderapi_.cancelorderperiod.md)
- [OrderStatus](../enums/_order_orderapi_.orderstatus.md)
- [OrderType](../enums/_order_orderapi_.ordertype.md)
- [SelfTradePrevention](../enums/_order_orderapi_.selftradeprevention.md)
- [TimeInForce](../enums/_order_orderapi_.timeinforce.md)

### Classes

- [OrderAPI](../classes/_order_orderapi_.orderapi.md)

### Interfaces

- [AutoCancelLimitOrder](../interfaces/_order_orderapi_.autocancellimitorder.md)
- [FilledOrder](../interfaces/_order_orderapi_.filledorder.md)
- [LimitOrder](../interfaces/_order_orderapi_.limitorder.md)
- [PendingOrder](../interfaces/_order_orderapi_.pendingorder.md)
- [PostOnlyLimitOrder](../interfaces/_order_orderapi_.postonlylimitorder.md)

### Type aliases

- [MarketOrder](_order_orderapi_.md#marketorder)
- [NewOrder](_order_orderapi_.md#neworder)
- [Order](_order_orderapi_.md#order)

## Type aliases

### MarketOrder

Ƭ **MarketOrder**: BaseOrder & { type: [MARKET](../enums/_order_orderapi_.ordertype.md#market) } & { size: string } \| { funds: string }

_Defined in [src/order/OrderAPI.ts:76](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/order/OrderAPI.ts#L76)_

---

### NewOrder

Ƭ **NewOrder**: [LimitOrder](../interfaces/_order_orderapi_.limitorder.md) \| [AutoCancelLimitOrder](../interfaces/_order_orderapi_.autocancellimitorder.md) \| [PostOnlyLimitOrder](../interfaces/_order_orderapi_.postonlylimitorder.md) \| [MarketOrder](_order_orderapi_.md#marketorder)

_Defined in [src/order/OrderAPI.ts:56](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/order/OrderAPI.ts#L56)_

---

### Order

Ƭ **Order**: [PendingOrder](../interfaces/_order_orderapi_.pendingorder.md) \| [FilledOrder](../interfaces/_order_orderapi_.filledorder.md)

_Defined in [src/order/OrderAPI.ts:97](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/order/OrderAPI.ts#L97)_
