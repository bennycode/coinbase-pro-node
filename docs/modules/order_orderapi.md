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
- [OrderListQueryParam](../interfaces/order_orderapi.orderlistqueryparam.md)
- [PendingOrder](../interfaces/order_orderapi.pendingorder.md)
- [PostOnlyLimitOrder](../interfaces/order_orderapi.postonlylimitorder.md)

### Type aliases

- [MarketOrder](order_orderapi.md#marketorder)
- [NewOrder](order_orderapi.md#neworder)
- [Order](order_orderapi.md#order)

## Type aliases

### MarketOrder

Ƭ **MarketOrder**: BaseOrder & { `type`: [*MARKET*](../enums/order_orderapi.ordertype.md#market)  } & { `size`: *string*  } \| { `funds`: *string*  }

Defined in: [order/OrderAPI.ts:76](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L76)

___

### NewOrder

Ƭ **NewOrder**: [*LimitOrder*](../interfaces/order_orderapi.limitorder.md) \| [*AutoCancelLimitOrder*](../interfaces/order_orderapi.autocancellimitorder.md) \| [*PostOnlyLimitOrder*](../interfaces/order_orderapi.postonlylimitorder.md) \| [*MarketOrder*](order_orderapi.md#marketorder)

Defined in: [order/OrderAPI.ts:56](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L56)

___

### Order

Ƭ **Order**: [*PendingOrder*](../interfaces/order_orderapi.pendingorder.md) \| [*FilledOrder*](../interfaces/order_orderapi.filledorder.md)

Defined in: [order/OrderAPI.ts:105](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L105)
