[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["order/OrderAPI"](_order_orderapi_.md)

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

### Type aliases

- [AutoCancelLimitOrder](_order_orderapi_.md#autocancellimitorder)
- [FilledOrder](_order_orderapi_.md#filledorder)
- [LimitOrder](_order_orderapi_.md#limitorder)
- [MarketOrder](_order_orderapi_.md#marketorder)
- [NewOrder](_order_orderapi_.md#neworder)
- [Order](_order_orderapi_.md#order)
- [PendingOrder](_order_orderapi_.md#pendingorder)
- [PostOnlyLimitOrder](_order_orderapi_.md#postonlylimitorder)

## Type aliases

### AutoCancelLimitOrder

Ƭ **AutoCancelLimitOrder**: _[LimitOrder](_order_orderapi_.md#limitorder) & object_

_Defined in [src/order/OrderAPI.ts:58](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/order/OrderAPI.ts#L58)_

---

### FilledOrder

Ƭ **FilledOrder**: _BasePlacedOrder & object_

_Defined in [src/order/OrderAPI.ts:90](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/order/OrderAPI.ts#L90)_

---

### LimitOrder

Ƭ **LimitOrder**: _BaseOrder & object_

_Defined in [src/order/OrderAPI.ts:68](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/order/OrderAPI.ts#L68)_

---

### MarketOrder

Ƭ **MarketOrder**: _BaseOrder & object & object | object_

_Defined in [src/order/OrderAPI.ts:76](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/order/OrderAPI.ts#L76)_

---

### NewOrder

Ƭ **NewOrder**: _[LimitOrder](_order_orderapi_.md#limitorder) | [AutoCancelLimitOrder](_order_orderapi_.md#autocancellimitorder) | [PostOnlyLimitOrder](_order_orderapi_.md#postonlylimitorder) | [MarketOrder](_order_orderapi_.md#marketorder)_

_Defined in [src/order/OrderAPI.ts:56](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/order/OrderAPI.ts#L56)_

---

### Order

Ƭ **Order**: _[PendingOrder](_order_orderapi_.md#pendingorder) | [FilledOrder](_order_orderapi_.md#filledorder)_

_Defined in [src/order/OrderAPI.ts:97](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/order/OrderAPI.ts#L97)_

---

### PendingOrder

Ƭ **PendingOrder**: _BasePlacedOrder & object_

_Defined in [src/order/OrderAPI.ts:85](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/order/OrderAPI.ts#L85)_

---

### PostOnlyLimitOrder

Ƭ **PostOnlyLimitOrder**: _[LimitOrder](_order_orderapi_.md#limitorder) & object_

_Defined in [src/order/OrderAPI.ts:63](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/order/OrderAPI.ts#L63)_
