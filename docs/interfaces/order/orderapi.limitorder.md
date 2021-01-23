[coinbase-pro-node](../../README.md) / [Exports](../../modules.md) / [order/OrderAPI](../../modules/order_orderapi.md) / LimitOrder

# Interface: LimitOrder

[order/OrderAPI](../../modules/order_orderapi.md).LimitOrder

## Hierarchy

- _BaseOrder_

  ↳ **LimitOrder**

  ↳↳ [_AutoCancelLimitOrder_](orderapi.autocancellimitorder.md)

  ↳↳ [_PostOnlyLimitOrder_](orderapi.postonlylimitorder.md)

## Table of contents

### Properties

- [client_oid](orderapi.limitorder.md#client_oid)
- [price](orderapi.limitorder.md#price)
- [product_id](orderapi.limitorder.md#product_id)
- [side](orderapi.limitorder.md#side)
- [size](orderapi.limitorder.md#size)
- [stop](orderapi.limitorder.md#stop)
- [stop_price](orderapi.limitorder.md#stop_price)
- [stp](orderapi.limitorder.md#stp)
- [time_in_force](orderapi.limitorder.md#time_in_force)
- [type](orderapi.limitorder.md#type)

## Properties

### client_oid

• `Optional` **client_oid**: _undefined_ \| _string_

Defined in: [order/OrderAPI.ts:31](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/order/OrderAPI.ts#L31)

---

### price

• **price**: _string_

Defined in: [order/OrderAPI.ts:69](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/order/OrderAPI.ts#L69)

---

### product_id

• **product_id**: _string_

Defined in: [order/OrderAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/order/OrderAPI.ts#L32)

---

### side

• **side**: OrderSide

Defined in: [order/OrderAPI.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/order/OrderAPI.ts#L33)

---

### size

• **size**: _string_

Defined in: [order/OrderAPI.ts:70](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/order/OrderAPI.ts#L70)

---

### stop

• `Optional` **stop**: _undefined_ \| _loss_ \| _entry_

Defined in: [order/OrderAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/order/OrderAPI.ts#L34)

---

### stop_price

• `Optional` **stop_price**: _undefined_ \| _string_

Defined in: [order/OrderAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/order/OrderAPI.ts#L35)

---

### stp

• `Optional` **stp**: _undefined_ \| [_CANCEL_BOTH_](../../enums/order/orderapi.selftradeprevention.md#cancel_both) \| [_CANCEL_NEWEST_](../../enums/order/orderapi.selftradeprevention.md#cancel_newest) \| [_CANCEL_OLDEST_](../../enums/order/orderapi.selftradeprevention.md#cancel_oldest) \| [_DECREMENT_AND_CANCEL_](../../enums/order/orderapi.selftradeprevention.md#decrement_and_cancel)

Defined in: [order/OrderAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/order/OrderAPI.ts#L36)

---

### time_in_force

• `Optional` **time_in_force**: _undefined_ \| [_FILL_OR_KILL_](../../enums/order/orderapi.timeinforce.md#fill_or_kill) \| [_GOOD_TILL_CANCELED_](../../enums/order/orderapi.timeinforce.md#good_till_canceled) \| [_GOOD_TILL_TIME_](../../enums/order/orderapi.timeinforce.md#good_till_time) \| [_IMMEDIATE_OR_CANCEL_](../../enums/order/orderapi.timeinforce.md#immediate_or_cancel)

Default is 'GTC'.

Defined in: [order/OrderAPI.ts:72](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/order/OrderAPI.ts#L72)

---

### type

• **type**: [_LIMIT_](../../enums/order/orderapi.ordertype.md#limit)

Defined in: [order/OrderAPI.ts:73](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/order/OrderAPI.ts#L73)
