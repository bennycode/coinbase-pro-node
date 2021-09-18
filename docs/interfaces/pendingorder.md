[coinbase-pro-node](../README.md) / [Exports](../modules.md) / PendingOrder

# Interface: PendingOrder

## Hierarchy

- `BasePlacedOrder`

  ↳ **`PendingOrder`**

## Table of contents

### Properties

- [created\_at](PendingOrder.md#created_at)
- [executed\_value](PendingOrder.md#executed_value)
- [fill\_fees](PendingOrder.md#fill_fees)
- [filled\_size](PendingOrder.md#filled_size)
- [id](PendingOrder.md#id)
- [post\_only](PendingOrder.md#post_only)
- [price](PendingOrder.md#price)
- [product\_id](PendingOrder.md#product_id)
- [settled](PendingOrder.md#settled)
- [side](PendingOrder.md#side)
- [size](PendingOrder.md#size)
- [status](PendingOrder.md#status)
- [stp](PendingOrder.md#stp)
- [time\_in\_force](PendingOrder.md#time_in_force)
- [type](PendingOrder.md#type)

## Properties

### created\_at

• **created\_at**: `string`

#### Inherited from

BasePlacedOrder.created\_at

#### Defined in

[order/OrderAPI.ts:41](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L41)

___

### executed\_value

• **executed\_value**: `string`

#### Inherited from

BasePlacedOrder.executed\_value

#### Defined in

[order/OrderAPI.ts:42](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L42)

___

### fill\_fees

• **fill\_fees**: `string`

#### Inherited from

BasePlacedOrder.fill\_fees

#### Defined in

[order/OrderAPI.ts:43](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L43)

___

### filled\_size

• **filled\_size**: `string`

#### Inherited from

BasePlacedOrder.filled\_size

#### Defined in

[order/OrderAPI.ts:44](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L44)

___

### id

• **id**: `string`

#### Inherited from

BasePlacedOrder.id

#### Defined in

[order/OrderAPI.ts:45](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L45)

___

### post\_only

• **post\_only**: ``false``

#### Inherited from

BasePlacedOrder.post\_only

#### Defined in

[order/OrderAPI.ts:46](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L46)

___

### price

• **price**: `string`

#### Inherited from

BasePlacedOrder.price

#### Defined in

[order/OrderAPI.ts:47](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L47)

___

### product\_id

• **product\_id**: `string`

#### Inherited from

BasePlacedOrder.product\_id

#### Defined in

[order/OrderAPI.ts:48](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L48)

___

### settled

• **settled**: `boolean`

#### Inherited from

BasePlacedOrder.settled

#### Defined in

[order/OrderAPI.ts:49](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L49)

___

### side

• **side**: `OrderSide`

#### Inherited from

BasePlacedOrder.side

#### Defined in

[order/OrderAPI.ts:50](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L50)

___

### size

• **size**: `string`

#### Inherited from

BasePlacedOrder.size

#### Defined in

[order/OrderAPI.ts:51](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L51)

___

### status

• **status**: [`PENDING`](../enums/OrderStatus.md#pending)

#### Overrides

BasePlacedOrder.status

#### Defined in

[order/OrderAPI.ts:87](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L87)

___

### stp

• **stp**: [`SelfTradePrevention`](../enums/SelfTradePrevention.md)

#### Defined in

[order/OrderAPI.ts:88](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L88)

___

### time\_in\_force

• **time\_in\_force**: [`TimeInForce`](../enums/TimeInForce.md)

#### Inherited from

BasePlacedOrder.time\_in\_force

#### Defined in

[order/OrderAPI.ts:53](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L53)

___

### type

• **type**: [`OrderType`](../enums/OrderType.md)

#### Inherited from

BasePlacedOrder.type

#### Defined in

[order/OrderAPI.ts:54](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L54)
