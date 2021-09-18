[coinbase-pro-node](../README.md) / [Exports](../modules.md) / AutoCancelLimitOrder

# Interface: AutoCancelLimitOrder

## Hierarchy

- [`LimitOrder`](LimitOrder.md)

  ↳ **`AutoCancelLimitOrder`**

## Table of contents

### Properties

- [cancel\_after](AutoCancelLimitOrder.md#cancel_after)
- [client\_oid](AutoCancelLimitOrder.md#client_oid)
- [price](AutoCancelLimitOrder.md#price)
- [product\_id](AutoCancelLimitOrder.md#product_id)
- [side](AutoCancelLimitOrder.md#side)
- [size](AutoCancelLimitOrder.md#size)
- [stop](AutoCancelLimitOrder.md#stop)
- [stop\_price](AutoCancelLimitOrder.md#stop_price)
- [stp](AutoCancelLimitOrder.md#stp)
- [time\_in\_force](AutoCancelLimitOrder.md#time_in_force)
- [type](AutoCancelLimitOrder.md#type)

## Properties

### cancel\_after

• **cancel\_after**: [`CancelOrderPeriod`](../enums/CancelOrderPeriod.md)

#### Defined in

[order/OrderAPI.ts:60](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L60)

___

### client\_oid

• `Optional` **client\_oid**: `string`

#### Inherited from

[LimitOrder](LimitOrder.md).[client_oid](LimitOrder.md#client_oid)

#### Defined in

[order/OrderAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L32)

___

### price

• **price**: `string`

#### Inherited from

[LimitOrder](LimitOrder.md).[price](LimitOrder.md#price)

#### Defined in

[order/OrderAPI.ts:70](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L70)

___

### product\_id

• **product\_id**: `string`

#### Inherited from

[LimitOrder](LimitOrder.md).[product_id](LimitOrder.md#product_id)

#### Defined in

[order/OrderAPI.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L33)

___

### side

• **side**: `OrderSide`

#### Inherited from

[LimitOrder](LimitOrder.md).[side](LimitOrder.md#side)

#### Defined in

[order/OrderAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L34)

___

### size

• **size**: `string`

#### Inherited from

[LimitOrder](LimitOrder.md).[size](LimitOrder.md#size)

#### Defined in

[order/OrderAPI.ts:71](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L71)

___

### stop

• `Optional` **stop**: ``"loss"`` \| ``"entry"``

#### Inherited from

[LimitOrder](LimitOrder.md).[stop](LimitOrder.md#stop)

#### Defined in

[order/OrderAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L35)

___

### stop\_price

• `Optional` **stop\_price**: `string`

#### Inherited from

[LimitOrder](LimitOrder.md).[stop_price](LimitOrder.md#stop_price)

#### Defined in

[order/OrderAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L36)

___

### stp

• `Optional` **stp**: [`SelfTradePrevention`](../enums/SelfTradePrevention.md)

#### Inherited from

[LimitOrder](LimitOrder.md).[stp](LimitOrder.md#stp)

#### Defined in

[order/OrderAPI.ts:37](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L37)

___

### time\_in\_force

• **time\_in\_force**: [`GOOD_TILL_TIME`](../enums/TimeInForce.md#good_till_time)

Default is 'GTC'.

#### Overrides

[LimitOrder](LimitOrder.md).[time_in_force](LimitOrder.md#time_in_force)

#### Defined in

[order/OrderAPI.ts:61](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L61)

___

### type

• **type**: [`LIMIT`](../enums/OrderType.md#limit)

#### Inherited from

[LimitOrder](LimitOrder.md).[type](LimitOrder.md#type)

#### Defined in

[order/OrderAPI.ts:74](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L74)
