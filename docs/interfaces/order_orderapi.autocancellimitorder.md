[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [order/OrderAPI](../modules/order_orderapi.md) / AutoCancelLimitOrder

# Interface: AutoCancelLimitOrder

[order/OrderAPI](../modules/order_orderapi.md).AutoCancelLimitOrder

## Hierarchy

* [*LimitOrder*](order_orderapi.limitorder.md)

  ↳ **AutoCancelLimitOrder**

## Table of contents

### Properties

- [cancel\_after](order_orderapi.autocancellimitorder.md#cancel_after)
- [client\_oid](order_orderapi.autocancellimitorder.md#client_oid)
- [price](order_orderapi.autocancellimitorder.md#price)
- [product\_id](order_orderapi.autocancellimitorder.md#product_id)
- [side](order_orderapi.autocancellimitorder.md#side)
- [size](order_orderapi.autocancellimitorder.md#size)
- [stop](order_orderapi.autocancellimitorder.md#stop)
- [stop\_price](order_orderapi.autocancellimitorder.md#stop_price)
- [stp](order_orderapi.autocancellimitorder.md#stp)
- [time\_in\_force](order_orderapi.autocancellimitorder.md#time_in_force)
- [type](order_orderapi.autocancellimitorder.md#type)

## Properties

### cancel\_after

• **cancel\_after**: [*CancelOrderPeriod*](../enums/order_orderapi.cancelorderperiod.md)

Defined in: [order/OrderAPI.ts:59](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L59)

___

### client\_oid

• `Optional` **client\_oid**: *string*

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[client_oid](order_orderapi.limitorder.md#client_oid)

Defined in: [order/OrderAPI.ts:31](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L31)

___

### price

• **price**: *string*

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[price](order_orderapi.limitorder.md#price)

Defined in: [order/OrderAPI.ts:69](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L69)

___

### product\_id

• **product\_id**: *string*

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[product_id](order_orderapi.limitorder.md#product_id)

Defined in: [order/OrderAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L32)

___

### side

• **side**: OrderSide

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[side](order_orderapi.limitorder.md#side)

Defined in: [order/OrderAPI.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L33)

___

### size

• **size**: *string*

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[size](order_orderapi.limitorder.md#size)

Defined in: [order/OrderAPI.ts:70](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L70)

___

### stop

• `Optional` **stop**: *loss* \| *entry*

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[stop](order_orderapi.limitorder.md#stop)

Defined in: [order/OrderAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L34)

___

### stop\_price

• `Optional` **stop\_price**: *string*

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[stop_price](order_orderapi.limitorder.md#stop_price)

Defined in: [order/OrderAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L35)

___

### stp

• `Optional` **stp**: [*SelfTradePrevention*](../enums/order_orderapi.selftradeprevention.md)

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[stp](order_orderapi.limitorder.md#stp)

Defined in: [order/OrderAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L36)

___

### time\_in\_force

• **time\_in\_force**: [*GOOD\_TILL\_TIME*](../enums/order_orderapi.timeinforce.md#good_till_time)

Default is 'GTC'.

Overrides: [LimitOrder](order_orderapi.limitorder.md).[time_in_force](order_orderapi.limitorder.md#time_in_force)

Defined in: [order/OrderAPI.ts:60](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L60)

___

### type

• **type**: [*LIMIT*](../enums/order_orderapi.ordertype.md#limit)

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[type](order_orderapi.limitorder.md#type)

Defined in: [order/OrderAPI.ts:73](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L73)
