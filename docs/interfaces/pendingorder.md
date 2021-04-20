[coinbase-pro-node](../README.md) / [Exports](../modules.md) / PendingOrder

# Interface: PendingOrder

## Hierarchy

- _BasePlacedOrder_

  ↳ **PendingOrder**

## Table of contents

### Properties

- [created_at](pendingorder.md#created_at)
- [executed_value](pendingorder.md#executed_value)
- [fill_fees](pendingorder.md#fill_fees)
- [filled_size](pendingorder.md#filled_size)
- [id](pendingorder.md#id)
- [post_only](pendingorder.md#post_only)
- [price](pendingorder.md#price)
- [product_id](pendingorder.md#product_id)
- [settled](pendingorder.md#settled)
- [side](pendingorder.md#side)
- [size](pendingorder.md#size)
- [status](pendingorder.md#status)
- [stp](pendingorder.md#stp)
- [time_in_force](pendingorder.md#time_in_force)
- [type](pendingorder.md#type)

## Properties

### created_at

• **created_at**: _string_

Inherited from: BasePlacedOrder.created_at

Defined in: [order/OrderAPI.ts:40](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L40)

---

### executed_value

• **executed_value**: _string_

Inherited from: BasePlacedOrder.executed_value

Defined in: [order/OrderAPI.ts:41](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L41)

---

### fill_fees

• **fill_fees**: _string_

Inherited from: BasePlacedOrder.fill_fees

Defined in: [order/OrderAPI.ts:42](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L42)

---

### filled_size

• **filled_size**: _string_

Inherited from: BasePlacedOrder.filled_size

Defined in: [order/OrderAPI.ts:43](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L43)

---

### id

• **id**: _string_

Inherited from: BasePlacedOrder.id

Defined in: [order/OrderAPI.ts:44](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L44)

---

### post_only

• **post_only**: `false`

Inherited from: BasePlacedOrder.post_only

Defined in: [order/OrderAPI.ts:45](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L45)

---

### price

• **price**: _string_

Inherited from: BasePlacedOrder.price

Defined in: [order/OrderAPI.ts:46](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L46)

---

### product_id

• **product_id**: _string_

Inherited from: BasePlacedOrder.product_id

Defined in: [order/OrderAPI.ts:47](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L47)

---

### settled

• **settled**: _boolean_

Inherited from: BasePlacedOrder.settled

Defined in: [order/OrderAPI.ts:48](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L48)

---

### side

• **side**: [_OrderSide_](../enums/orderside.md)

Inherited from: BasePlacedOrder.side

Defined in: [order/OrderAPI.ts:49](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L49)

---

### size

• **size**: _string_

Inherited from: BasePlacedOrder.size

Defined in: [order/OrderAPI.ts:50](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L50)

---

### status

• **status**: [_PENDING_](../enums/orderstatus.md#pending)

Overrides: BasePlacedOrder.status

Defined in: [order/OrderAPI.ts:86](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L86)

---

### stp

• **stp**: [_SelfTradePrevention_](../enums/selftradeprevention.md)

Defined in: [order/OrderAPI.ts:87](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L87)

---

### time_in_force

• **time_in_force**: [_TimeInForce_](../enums/timeinforce.md)

Inherited from: BasePlacedOrder.time_in_force

Defined in: [order/OrderAPI.ts:52](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L52)

---

### type

• **type**: [_OrderType_](../enums/ordertype.md)

Inherited from: BasePlacedOrder.type

Defined in: [order/OrderAPI.ts:53](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L53)
