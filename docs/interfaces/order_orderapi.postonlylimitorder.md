[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [order/OrderAPI](../modules/order_orderapi.md) / PostOnlyLimitOrder

# Interface: PostOnlyLimitOrder

[order/OrderAPI](../modules/order_orderapi.md).PostOnlyLimitOrder

## Hierarchy

- [_LimitOrder_](order_orderapi.limitorder.md)

  ↳ **PostOnlyLimitOrder**

## Table of contents

### Properties

- [client_oid](order_orderapi.postonlylimitorder.md#client_oid)
- [post_only](order_orderapi.postonlylimitorder.md#post_only)
- [price](order_orderapi.postonlylimitorder.md#price)
- [product_id](order_orderapi.postonlylimitorder.md#product_id)
- [side](order_orderapi.postonlylimitorder.md#side)
- [size](order_orderapi.postonlylimitorder.md#size)
- [stop](order_orderapi.postonlylimitorder.md#stop)
- [stop_price](order_orderapi.postonlylimitorder.md#stop_price)
- [stp](order_orderapi.postonlylimitorder.md#stp)
- [time_in_force](order_orderapi.postonlylimitorder.md#time_in_force)
- [type](order_orderapi.postonlylimitorder.md#type)

## Properties

### client_oid

• `Optional` **client_oid**: _undefined_ | _string_

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[client_oid](order_orderapi.limitorder.md#client_oid)

Defined in: [order/OrderAPI.ts:31](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/order/OrderAPI.ts#L31)

---

### post_only

• **post_only**: _boolean_

Defined in: [order/OrderAPI.ts:64](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/order/OrderAPI.ts#L64)

---

### price

• **price**: _string_

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[price](order_orderapi.limitorder.md#price)

Defined in: [order/OrderAPI.ts:69](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/order/OrderAPI.ts#L69)

---

### product_id

• **product_id**: _string_

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[product_id](order_orderapi.limitorder.md#product_id)

Defined in: [order/OrderAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/order/OrderAPI.ts#L32)

---

### side

• **side**: OrderSide

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[side](order_orderapi.limitorder.md#side)

Defined in: [order/OrderAPI.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/order/OrderAPI.ts#L33)

---

### size

• **size**: _string_

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[size](order_orderapi.limitorder.md#size)

Defined in: [order/OrderAPI.ts:70](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/order/OrderAPI.ts#L70)

---

### stop

• `Optional` **stop**: _undefined_ | _loss_ | _entry_

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[stop](order_orderapi.limitorder.md#stop)

Defined in: [order/OrderAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/order/OrderAPI.ts#L34)

---

### stop_price

• `Optional` **stop_price**: _undefined_ | _string_

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[stop_price](order_orderapi.limitorder.md#stop_price)

Defined in: [order/OrderAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/order/OrderAPI.ts#L35)

---

### stp

• `Optional` **stp**: _undefined_ | [_CANCEL_BOTH_](../enums/order_orderapi.selftradeprevention.md#cancel_both) | [_CANCEL_NEWEST_](../enums/order_orderapi.selftradeprevention.md#cancel_newest) | [_CANCEL_OLDEST_](../enums/order_orderapi.selftradeprevention.md#cancel_oldest) | [_DECREMENT_AND_CANCEL_](../enums/order_orderapi.selftradeprevention.md#decrement_and_cancel)

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[stp](order_orderapi.limitorder.md#stp)

Defined in: [order/OrderAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/order/OrderAPI.ts#L36)

---

### time_in_force

• **time_in_force**: [_GOOD_TILL_CANCELED_](../enums/order_orderapi.timeinforce.md#good_till_canceled) | [_GOOD_TILL_TIME_](../enums/order_orderapi.timeinforce.md#good_till_time)

Overrides: [LimitOrder](order_orderapi.limitorder.md).[time_in_force](order_orderapi.limitorder.md#time_in_force)

Defined in: [order/OrderAPI.ts:65](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/order/OrderAPI.ts#L65)

---

### type

• **type**: [_LIMIT_](../enums/order_orderapi.ordertype.md#limit)

Inherited from: [LimitOrder](order_orderapi.limitorder.md).[type](order_orderapi.limitorder.md#type)

Defined in: [order/OrderAPI.ts:73](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/order/OrderAPI.ts#L73)
