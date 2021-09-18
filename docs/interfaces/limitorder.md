[coinbase-pro-node](../README.md) / [Exports](../modules.md) / LimitOrder

# Interface: LimitOrder

## Hierarchy

- `BaseOrder`

  ↳ **`LimitOrder`**

  ↳↳ [`AutoCancelLimitOrder`](AutoCancelLimitOrder.md)

  ↳↳ [`PostOnlyLimitOrder`](PostOnlyLimitOrder.md)

## Table of contents

### Properties

- [client\_oid](LimitOrder.md#client_oid)
- [price](LimitOrder.md#price)
- [product\_id](LimitOrder.md#product_id)
- [side](LimitOrder.md#side)
- [size](LimitOrder.md#size)
- [stop](LimitOrder.md#stop)
- [stop\_price](LimitOrder.md#stop_price)
- [stp](LimitOrder.md#stp)
- [time\_in\_force](LimitOrder.md#time_in_force)
- [type](LimitOrder.md#type)

## Properties

### client\_oid

• `Optional` **client\_oid**: `string`

#### Inherited from

BaseOrder.client\_oid

#### Defined in

[order/OrderAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L32)

___

### price

• **price**: `string`

#### Defined in

[order/OrderAPI.ts:70](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L70)

___

### product\_id

• **product\_id**: `string`

#### Inherited from

BaseOrder.product\_id

#### Defined in

[order/OrderAPI.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L33)

___

### side

• **side**: `OrderSide`

#### Inherited from

BaseOrder.side

#### Defined in

[order/OrderAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L34)

___

### size

• **size**: `string`

#### Defined in

[order/OrderAPI.ts:71](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L71)

___

### stop

• `Optional` **stop**: ``"loss"`` \| ``"entry"``

#### Inherited from

BaseOrder.stop

#### Defined in

[order/OrderAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L35)

___

### stop\_price

• `Optional` **stop\_price**: `string`

#### Inherited from

BaseOrder.stop\_price

#### Defined in

[order/OrderAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L36)

___

### stp

• `Optional` **stp**: [`SelfTradePrevention`](../enums/SelfTradePrevention.md)

#### Inherited from

BaseOrder.stp

#### Defined in

[order/OrderAPI.ts:37](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L37)

___

### time\_in\_force

• `Optional` **time\_in\_force**: [`TimeInForce`](../enums/TimeInForce.md)

Default is 'GTC'.

#### Defined in

[order/OrderAPI.ts:73](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L73)

___

### type

• **type**: [`LIMIT`](../enums/OrderType.md#limit)

#### Defined in

[order/OrderAPI.ts:74](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L74)
