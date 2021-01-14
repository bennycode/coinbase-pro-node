[coinbase-pro-node](../../README.md) / [Exports](../../modules.md) / [order/OrderAPI](../../modules/order_orderapi.md) / AutoCancelLimitOrder

# Interface: AutoCancelLimitOrder

[order/OrderAPI](../../modules/order_orderapi.md).AutoCancelLimitOrder

## Hierarchy

- [_LimitOrder_](orderapi.limitorder.md)

  ↳ **AutoCancelLimitOrder**

## Table of contents

### Properties

- [cancel_after](orderapi.autocancellimitorder.md#cancel_after)
- [client_oid](orderapi.autocancellimitorder.md#client_oid)
- [price](orderapi.autocancellimitorder.md#price)
- [product_id](orderapi.autocancellimitorder.md#product_id)
- [side](orderapi.autocancellimitorder.md#side)
- [size](orderapi.autocancellimitorder.md#size)
- [stop](orderapi.autocancellimitorder.md#stop)
- [stop_price](orderapi.autocancellimitorder.md#stop_price)
- [stp](orderapi.autocancellimitorder.md#stp)
- [time_in_force](orderapi.autocancellimitorder.md#time_in_force)
- [type](orderapi.autocancellimitorder.md#type)

## Properties

### cancel_after

• **cancel_after**: [_CancelOrderPeriod_](../../enums/order/orderapi.cancelorderperiod.md)

Defined in: [order/OrderAPI.ts:59](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/order/OrderAPI.ts#L59)

---

### client_oid

• `Optional` **client_oid**: _undefined_ \| _string_

Inherited from: [LimitOrder](orderapi.limitorder.md).[client_oid](orderapi.limitorder.md#client_oid)

Defined in: [order/OrderAPI.ts:31](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/order/OrderAPI.ts#L31)

---

### price

• **price**: _string_

Inherited from: [LimitOrder](orderapi.limitorder.md).[price](orderapi.limitorder.md#price)

Defined in: [order/OrderAPI.ts:69](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/order/OrderAPI.ts#L69)

---

### product_id

• **product_id**: _string_

Inherited from: [LimitOrder](orderapi.limitorder.md).[product_id](orderapi.limitorder.md#product_id)

Defined in: [order/OrderAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/order/OrderAPI.ts#L32)

---

### side

• **side**: OrderSide

Inherited from: [LimitOrder](orderapi.limitorder.md).[side](orderapi.limitorder.md#side)

Defined in: [order/OrderAPI.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/order/OrderAPI.ts#L33)

---

### size

• **size**: _string_

Inherited from: [LimitOrder](orderapi.limitorder.md).[size](orderapi.limitorder.md#size)

Defined in: [order/OrderAPI.ts:70](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/order/OrderAPI.ts#L70)

---

### stop

• `Optional` **stop**: _undefined_ \| _loss_ \| _entry_

Inherited from: [LimitOrder](orderapi.limitorder.md).[stop](orderapi.limitorder.md#stop)

Defined in: [order/OrderAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/order/OrderAPI.ts#L34)

---

### stop_price

• `Optional` **stop_price**: _undefined_ \| _string_

Inherited from: [LimitOrder](orderapi.limitorder.md).[stop_price](orderapi.limitorder.md#stop_price)

Defined in: [order/OrderAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/order/OrderAPI.ts#L35)

---

### stp

• `Optional` **stp**: _undefined_ \| [_CANCEL_BOTH_](../../enums/order/orderapi.selftradeprevention.md#cancel_both) \| [_CANCEL_NEWEST_](../../enums/order/orderapi.selftradeprevention.md#cancel_newest) \| [_CANCEL_OLDEST_](../../enums/order/orderapi.selftradeprevention.md#cancel_oldest) \| [_DECREMENT_AND_CANCEL_](../../enums/order/orderapi.selftradeprevention.md#decrement_and_cancel)

Inherited from: [LimitOrder](orderapi.limitorder.md).[stp](orderapi.limitorder.md#stp)

Defined in: [order/OrderAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/order/OrderAPI.ts#L36)

---

### time_in_force

• **time_in_force**: [_GOOD_TILL_TIME_](../../enums/order/orderapi.timeinforce.md#good_till_time)

Overrides: [LimitOrder](orderapi.limitorder.md).[time_in_force](orderapi.limitorder.md#time_in_force)

Defined in: [order/OrderAPI.ts:60](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/order/OrderAPI.ts#L60)

---

### type

• **type**: [_LIMIT_](../../enums/order/orderapi.ordertype.md#limit)

Inherited from: [LimitOrder](orderapi.limitorder.md).[type](orderapi.limitorder.md#type)

Defined in: [order/OrderAPI.ts:73](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/order/OrderAPI.ts#L73)
