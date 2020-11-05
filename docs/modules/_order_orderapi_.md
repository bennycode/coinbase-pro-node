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

Ƭ **AutoCancelLimitOrder**: [LimitOrder](_order_orderapi_.md#limitorder) & { cancel*after: [CancelOrderPeriod](../enums/\_order_orderapi*.cancelorderperiod.md) ; time*in_force: [GOOD\_TILL\_TIME](../enums/\_order_orderapi*.timeinforce.md#good_till_time) }

_Defined in [src/order/OrderAPI.ts:58](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/order/OrderAPI.ts#L58)_

---

### FilledOrder

Ƭ **FilledOrder**: BasePlacedOrder & { done*at: ISO_8601_MS_UTC ; done_reason: \"filled\" ; profile_id: string ; status: [DONE](../enums/\_order_orderapi*.orderstatus.md#done) }

_Defined in [src/order/OrderAPI.ts:90](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/order/OrderAPI.ts#L90)_

---

### LimitOrder

Ƭ **LimitOrder**: BaseOrder & { price: string ; size: string ; time*in_force?: [TimeInForce](../enums/\_order_orderapi*.timeinforce.md) ; type: [LIMIT](../enums/_order_orderapi_.ordertype.md#limit) }

_Defined in [src/order/OrderAPI.ts:68](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/order/OrderAPI.ts#L68)_

---

### MarketOrder

Ƭ **MarketOrder**: BaseOrder & { type: [MARKET](../enums/_order_orderapi_.ordertype.md#market) } & { size: string } \| { funds: string }

_Defined in [src/order/OrderAPI.ts:76](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/order/OrderAPI.ts#L76)_

---

### NewOrder

Ƭ **NewOrder**: [LimitOrder](_order_orderapi_.md#limitorder) \| [AutoCancelLimitOrder](_order_orderapi_.md#autocancellimitorder) \| [PostOnlyLimitOrder](_order_orderapi_.md#postonlylimitorder) \| [MarketOrder](_order_orderapi_.md#marketorder)

_Defined in [src/order/OrderAPI.ts:56](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/order/OrderAPI.ts#L56)_

---

### Order

Ƭ **Order**: [PendingOrder](_order_orderapi_.md#pendingorder) \| [FilledOrder](_order_orderapi_.md#filledorder)

_Defined in [src/order/OrderAPI.ts:97](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/order/OrderAPI.ts#L97)_

---

### PendingOrder

Ƭ **PendingOrder**: BasePlacedOrder & { status: [PENDING](../enums/_order_orderapi_.orderstatus.md#pending) ; stp: [SelfTradePrevention](../enums/_order_orderapi_.selftradeprevention.md) }

_Defined in [src/order/OrderAPI.ts:85](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/order/OrderAPI.ts#L85)_

---

### PostOnlyLimitOrder

Ƭ **PostOnlyLimitOrder**: [LimitOrder](_order_orderapi_.md#limitorder) & { post*only: boolean ; time_in_force: [GOOD\_TILL\_CANCELED](../enums/\_order_orderapi*.timeinforce.md#good*till_canceled) \| [GOOD\_TILL\_TIME](../enums/\_order_orderapi*.timeinforce.md#good_till_time) }

_Defined in [src/order/OrderAPI.ts:63](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/order/OrderAPI.ts#L63)_
