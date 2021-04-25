[coinbase-pro-node](../README.md) / [Exports](../modules.md) / FilledOrder

# Interface: FilledOrder

## Hierarchy

- _BasePlacedOrder_

  ↳ **FilledOrder**

## Table of contents

### Properties

- [created_at](filledorder.md#created_at)
- [done_at](filledorder.md#done_at)
- [done_reason](filledorder.md#done_reason)
- [executed_value](filledorder.md#executed_value)
- [fill_fees](filledorder.md#fill_fees)
- [filled_size](filledorder.md#filled_size)
- [id](filledorder.md#id)
- [post_only](filledorder.md#post_only)
- [price](filledorder.md#price)
- [product_id](filledorder.md#product_id)
- [profile_id](filledorder.md#profile_id)
- [settled](filledorder.md#settled)
- [side](filledorder.md#side)
- [size](filledorder.md#size)
- [status](filledorder.md#status)
- [time_in_force](filledorder.md#time_in_force)
- [type](filledorder.md#type)

## Properties

### created_at

• **created_at**: _string_

Inherited from: BasePlacedOrder.created_at

Defined in: [order/OrderAPI.ts:40](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L40)

---

### done_at

• **done_at**: _string_

Defined in: [order/OrderAPI.ts:91](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L91)

---

### done_reason

• **done_reason**: `"filled"`

Defined in: [order/OrderAPI.ts:92](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L92)

---

### executed_value

• **executed_value**: _string_

Inherited from: BasePlacedOrder.executed_value

Defined in: [order/OrderAPI.ts:41](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L41)

---

### fill_fees

• **fill_fees**: _string_

Inherited from: BasePlacedOrder.fill_fees

Defined in: [order/OrderAPI.ts:42](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L42)

---

### filled_size

• **filled_size**: _string_

Inherited from: BasePlacedOrder.filled_size

Defined in: [order/OrderAPI.ts:43](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L43)

---

### id

• **id**: _string_

Inherited from: BasePlacedOrder.id

Defined in: [order/OrderAPI.ts:44](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L44)

---

### post_only

• **post_only**: `false`

Inherited from: BasePlacedOrder.post_only

Defined in: [order/OrderAPI.ts:45](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L45)

---

### price

• **price**: _string_

Inherited from: BasePlacedOrder.price

Defined in: [order/OrderAPI.ts:46](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L46)

---

### product_id

• **product_id**: _string_

Inherited from: BasePlacedOrder.product_id

Defined in: [order/OrderAPI.ts:47](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L47)

---

### profile_id

• **profile_id**: _string_

Defined in: [order/OrderAPI.ts:93](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L93)

---

### settled

• **settled**: _boolean_

Inherited from: BasePlacedOrder.settled

Defined in: [order/OrderAPI.ts:48](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L48)

---

### side

• **side**: [_OrderSide_](../enums/orderside.md)

Inherited from: BasePlacedOrder.side

Defined in: [order/OrderAPI.ts:49](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L49)

---

### size

• **size**: _string_

Inherited from: BasePlacedOrder.size

Defined in: [order/OrderAPI.ts:50](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L50)

---

### status

• **status**: [_DONE_](../enums/orderstatus.md#done)

Overrides: BasePlacedOrder.status

Defined in: [order/OrderAPI.ts:94](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L94)

---

### time_in_force

• **time_in_force**: [_TimeInForce_](../enums/timeinforce.md)

Inherited from: BasePlacedOrder.time_in_force

Defined in: [order/OrderAPI.ts:52](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L52)

---

### type

• **type**: [_OrderType_](../enums/ordertype.md)

Inherited from: BasePlacedOrder.type

Defined in: [order/OrderAPI.ts:53](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L53)
