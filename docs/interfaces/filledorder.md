[coinbase-pro-node](../README.md) / [Exports](../modules.md) / FilledOrder

# Interface: FilledOrder

## Hierarchy

- `BasePlacedOrder`

  ↳ **`FilledOrder`**

## Table of contents

### Properties

- [created\_at](FilledOrder.md#created_at)
- [done\_at](FilledOrder.md#done_at)
- [done\_reason](FilledOrder.md#done_reason)
- [executed\_value](FilledOrder.md#executed_value)
- [fill\_fees](FilledOrder.md#fill_fees)
- [filled\_size](FilledOrder.md#filled_size)
- [id](FilledOrder.md#id)
- [post\_only](FilledOrder.md#post_only)
- [price](FilledOrder.md#price)
- [product\_id](FilledOrder.md#product_id)
- [profile\_id](FilledOrder.md#profile_id)
- [settled](FilledOrder.md#settled)
- [side](FilledOrder.md#side)
- [size](FilledOrder.md#size)
- [status](FilledOrder.md#status)
- [time\_in\_force](FilledOrder.md#time_in_force)
- [type](FilledOrder.md#type)

## Properties

### created\_at

• **created\_at**: `string`

#### Inherited from

BasePlacedOrder.created\_at

#### Defined in

[order/OrderAPI.ts:41](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L41)

___

### done\_at

• **done\_at**: `string`

#### Defined in

[order/OrderAPI.ts:92](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L92)

___

### done\_reason

• **done\_reason**: ``"filled"``

#### Defined in

[order/OrderAPI.ts:93](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L93)

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

### profile\_id

• **profile\_id**: `string`

#### Defined in

[order/OrderAPI.ts:94](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L94)

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

• **status**: [`DONE`](../enums/OrderStatus.md#done)

#### Overrides

BasePlacedOrder.status

#### Defined in

[order/OrderAPI.ts:95](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L95)

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
