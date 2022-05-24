[coinbase-pro-node](../README.md) / [Exports](../modules.md) / PendingOrder

# Interface: PendingOrder

## Hierarchy

- `BasePlacedOrder`

  ↳ **`PendingOrder`**

## Table of contents

### Properties

- [created_at](PendingOrder.md#created_at)
- [executed_value](PendingOrder.md#executed_value)
- [fill_fees](PendingOrder.md#fill_fees)
- [filled_size](PendingOrder.md#filled_size)
- [id](PendingOrder.md#id)
- [post_only](PendingOrder.md#post_only)
- [price](PendingOrder.md#price)
- [product_id](PendingOrder.md#product_id)
- [settled](PendingOrder.md#settled)
- [side](PendingOrder.md#side)
- [size](PendingOrder.md#size)
- [status](PendingOrder.md#status)
- [stp](PendingOrder.md#stp)
- [time_in_force](PendingOrder.md#time_in_force)
- [type](PendingOrder.md#type)

## Properties

### created_at

• **created_at**: `string`

#### Inherited from

BasePlacedOrder.created_at

#### Defined in

[order/OrderAPI.ts:41](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L41)

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

• **status**: [`PENDING`](../enums/OrderStatus.md#pending)

#### Overrides

BasePlacedOrder.status

#### Defined in

[order/OrderAPI.ts:87](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L87)

---

### stp

• **stp**: [`SelfTradePrevention`](../enums/SelfTradePrevention.md)

#### Defined in

[order/OrderAPI.ts:88](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L88)

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
