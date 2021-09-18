[coinbase-pro-node](../README.md) / [Exports](../modules.md) / PostOnlyLimitOrder

# Interface: PostOnlyLimitOrder

## Hierarchy

- [`LimitOrder`](LimitOrder.md)

  ↳ **`PostOnlyLimitOrder`**

## Table of contents

### Properties

- [client\_oid](PostOnlyLimitOrder.md#client_oid)
- [post\_only](PostOnlyLimitOrder.md#post_only)
- [price](PostOnlyLimitOrder.md#price)
- [product\_id](PostOnlyLimitOrder.md#product_id)
- [side](PostOnlyLimitOrder.md#side)
- [size](PostOnlyLimitOrder.md#size)
- [stop](PostOnlyLimitOrder.md#stop)
- [stop\_price](PostOnlyLimitOrder.md#stop_price)
- [stp](PostOnlyLimitOrder.md#stp)
- [time\_in\_force](PostOnlyLimitOrder.md#time_in_force)
- [type](PostOnlyLimitOrder.md#type)

## Properties

### client\_oid

• `Optional` **client\_oid**: `string`

#### Inherited from

[LimitOrder](LimitOrder.md).[client_oid](LimitOrder.md#client_oid)

#### Defined in

[order/OrderAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L32)

___

### post\_only

• **post\_only**: `boolean`

#### Defined in

[order/OrderAPI.ts:65](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L65)

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

• **time\_in\_force**: [`GOOD_TILL_CANCELED`](../enums/TimeInForce.md#good_till_canceled) \| [`GOOD_TILL_TIME`](../enums/TimeInForce.md#good_till_time)

Default is 'GTC'.

#### Overrides

[LimitOrder](LimitOrder.md).[time_in_force](LimitOrder.md#time_in_force)

#### Defined in

[order/OrderAPI.ts:66](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L66)

___

### type

• **type**: [`LIMIT`](../enums/OrderType.md#limit)

#### Inherited from

[LimitOrder](LimitOrder.md).[type](LimitOrder.md#type)

#### Defined in

[order/OrderAPI.ts:74](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L74)
