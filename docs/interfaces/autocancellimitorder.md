[coinbase-pro-node](../README.md) / [Exports](../modules.md) / AutoCancelLimitOrder

# Interface: AutoCancelLimitOrder

## Hierarchy

* [*LimitOrder*](limitorder.md)

  ↳ **AutoCancelLimitOrder**

## Table of contents

### Properties

- [cancel\_after](autocancellimitorder.md#cancel_after)
- [client\_oid](autocancellimitorder.md#client_oid)
- [price](autocancellimitorder.md#price)
- [product\_id](autocancellimitorder.md#product_id)
- [side](autocancellimitorder.md#side)
- [size](autocancellimitorder.md#size)
- [stop](autocancellimitorder.md#stop)
- [stop\_price](autocancellimitorder.md#stop_price)
- [stp](autocancellimitorder.md#stp)
- [time\_in\_force](autocancellimitorder.md#time_in_force)
- [type](autocancellimitorder.md#type)

## Properties

### cancel\_after

• **cancel\_after**: [*CancelOrderPeriod*](../enums/cancelorderperiod.md)

Defined in: [order/OrderAPI.ts:59](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L59)

___

### client\_oid

• `Optional` **client\_oid**: *string*

Inherited from: [LimitOrder](limitorder.md).[client_oid](limitorder.md#client_oid)

Defined in: [order/OrderAPI.ts:31](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L31)

___

### price

• **price**: *string*

Inherited from: [LimitOrder](limitorder.md).[price](limitorder.md#price)

Defined in: [order/OrderAPI.ts:69](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L69)

___

### product\_id

• **product\_id**: *string*

Inherited from: [LimitOrder](limitorder.md).[product_id](limitorder.md#product_id)

Defined in: [order/OrderAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L32)

___

### side

• **side**: [*OrderSide*](../enums/orderside.md)

Inherited from: [LimitOrder](limitorder.md).[side](limitorder.md#side)

Defined in: [order/OrderAPI.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L33)

___

### size

• **size**: *string*

Inherited from: [LimitOrder](limitorder.md).[size](limitorder.md#size)

Defined in: [order/OrderAPI.ts:70](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L70)

___

### stop

• `Optional` **stop**: *loss* \| *entry*

Inherited from: [LimitOrder](limitorder.md).[stop](limitorder.md#stop)

Defined in: [order/OrderAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L34)

___

### stop\_price

• `Optional` **stop\_price**: *string*

Inherited from: [LimitOrder](limitorder.md).[stop_price](limitorder.md#stop_price)

Defined in: [order/OrderAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L35)

___

### stp

• `Optional` **stp**: [*SelfTradePrevention*](../enums/selftradeprevention.md)

Inherited from: [LimitOrder](limitorder.md).[stp](limitorder.md#stp)

Defined in: [order/OrderAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L36)

___

### time\_in\_force

• **time\_in\_force**: [*GOOD\_TILL\_TIME*](../enums/timeinforce.md#good_till_time)

Default is 'GTC'.

Overrides: [LimitOrder](limitorder.md).[time_in_force](limitorder.md#time_in_force)

Defined in: [order/OrderAPI.ts:60](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L60)

___

### type

• **type**: [*LIMIT*](../enums/ordertype.md#limit)

Inherited from: [LimitOrder](limitorder.md).[type](limitorder.md#type)

Defined in: [order/OrderAPI.ts:73](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L73)
