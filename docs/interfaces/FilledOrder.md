[coinbase-pro-node](../README.md) / [Exports](../modules.md) / FilledOrder

# Interface: FilledOrder

## Hierarchy

- `BasePlacedOrder`

  ↳ **`FilledOrder`**

## Table of contents

### Properties

- [created_at](FilledOrder.md#created_at)
- [done_at](FilledOrder.md#done_at)
- [done_reason](FilledOrder.md#done_reason)
- [executed_value](FilledOrder.md#executed_value)
- [fill_fees](FilledOrder.md#fill_fees)
- [filled_size](FilledOrder.md#filled_size)
- [id](FilledOrder.md#id)
- [post_only](FilledOrder.md#post_only)
- [price](FilledOrder.md#price)
- [product_id](FilledOrder.md#product_id)
- [profile_id](FilledOrder.md#profile_id)
- [settled](FilledOrder.md#settled)
- [side](FilledOrder.md#side)
- [size](FilledOrder.md#size)
- [status](FilledOrder.md#status)
- [time_in_force](FilledOrder.md#time_in_force)
- [type](FilledOrder.md#type)

## Properties

### created_at

• **created_at**: `string`

#### Inherited from

BasePlacedOrder.created_at

#### Defined in

[order/OrderAPI.ts:41](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L41)

---

### done_at

• **done_at**: `string`

#### Defined in

[order/OrderAPI.ts:92](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L92)

---

### done_reason

• **done_reason**: `"filled"`

#### Defined in

[order/OrderAPI.ts:93](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L93)

---

### executed_value

• **executed_value**: `string`

#### Inherited from

BasePlacedOrder.executed_value

#### Defined in

[order/OrderAPI.ts:42](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L42)

---

### fill_fees

• **fill_fees**: `string`

#### Inherited from

BasePlacedOrder.fill_fees

#### Defined in

[order/OrderAPI.ts:43](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L43)

---

### filled_size

• **filled_size**: `string`

#### Inherited from

BasePlacedOrder.filled_size

#### Defined in

[order/OrderAPI.ts:44](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L44)

---

### id

• **id**: `string`

#### Inherited from

BasePlacedOrder.id

#### Defined in

[order/OrderAPI.ts:45](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L45)

---

### post_only

• **post_only**: `false`

#### Inherited from

BasePlacedOrder.post_only

#### Defined in

[order/OrderAPI.ts:46](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L46)

---

### price

• **price**: `string`

#### Inherited from

BasePlacedOrder.price

#### Defined in

[order/OrderAPI.ts:47](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L47)

---

### product_id

• **product_id**: `string`

#### Inherited from

BasePlacedOrder.product_id

#### Defined in

[order/OrderAPI.ts:48](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L48)

---

### profile_id

• **profile_id**: `string`

#### Defined in

[order/OrderAPI.ts:94](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L94)

---

### settled

• **settled**: `boolean`

#### Inherited from

BasePlacedOrder.settled

#### Defined in

[order/OrderAPI.ts:49](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L49)

---

### side

• **side**: `OrderSide`

#### Inherited from

BasePlacedOrder.side

#### Defined in

[order/OrderAPI.ts:50](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L50)

---

### size

• **size**: `string`

#### Inherited from

BasePlacedOrder.size

#### Defined in

[order/OrderAPI.ts:51](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L51)

---

### status

• **status**: [`DONE`](../enums/OrderStatus.md#done)

#### Overrides

BasePlacedOrder.status

#### Defined in

[order/OrderAPI.ts:95](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L95)

---

### time_in_force

• **time_in_force**: [`TimeInForce`](../enums/TimeInForce.md)

#### Inherited from

BasePlacedOrder.time_in_force

#### Defined in

[order/OrderAPI.ts:53](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L53)

---

### type

• **type**: [`OrderType`](../enums/OrderType.md)

#### Inherited from

BasePlacedOrder.type

#### Defined in

[order/OrderAPI.ts:54](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L54)
