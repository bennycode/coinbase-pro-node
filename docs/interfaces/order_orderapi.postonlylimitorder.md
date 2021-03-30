[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [order/OrderAPI](../modules/order_orderapi.md) / PostOnlyLimitOrder

# Interface: PostOnlyLimitOrder

[order/OrderAPI](../modules/order_orderapi.md).PostOnlyLimitOrder

## Hierarchy

* [*LimitOrder*](order_orderapi.limitorder.md)

  ↳ **PostOnlyLimitOrder**

## Table of contents

### Properties

- [client\_oid](order_orderapi.postonlylimitorder.md#client_oid)
- [post\_only](order_orderapi.postonlylimitorder.md#post_only)
- [price](order_orderapi.postonlylimitorder.md#price)
- [product\_id](order_orderapi.postonlylimitorder.md#product_id)
- [side](order_orderapi.postonlylimitorder.md#side)
- [size](order_orderapi.postonlylimitorder.md#size)
- [stop](order_orderapi.postonlylimitorder.md#stop)
- [stop\_price](order_orderapi.postonlylimitorder.md#stop_price)
- [stp](order_orderapi.postonlylimitorder.md#stp)
- [time\_in\_force](order_orderapi.postonlylimitorder.md#time_in_force)
- [type](order_orderapi.postonlylimitorder.md#type)

## Properties

### client\_oid

• `Optional` **client\_oid**: *string*

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[client_oid](order_orderapi.limitorder.md#client_oid)

Defined in: [order/OrderAPI.ts:31](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L31)

___

### post\_only

• **post\_only**: *boolean*

Defined in: [order/OrderAPI.ts:64](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L64)

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

• **time\_in\_force**: [*GOOD\_TILL\_CANCELED*](../enums/order_orderapi.timeinforce.md#good_till_canceled) \| [*GOOD\_TILL\_TIME*](../enums/order_orderapi.timeinforce.md#good_till_time)

Default is 'GTC'.

Overrides: [LimitOrder](order_orderapi.limitorder.md).[time_in_force](order_orderapi.limitorder.md#time_in_force)

Defined in: [order/OrderAPI.ts:65](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L65)

___

### type

• **type**: [*LIMIT*](../enums/order_orderapi.ordertype.md#limit)

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[type](order_orderapi.limitorder.md#type)

Defined in: [order/OrderAPI.ts:73](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L73)
