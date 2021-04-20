[coinbase-pro-node](../README.md) / [Exports](../modules.md) / PostOnlyLimitOrder

# Interface: PostOnlyLimitOrder

## Hierarchy

- [_LimitOrder_](limitorder.md)

  ↳ **PostOnlyLimitOrder**

## Table of contents

### Properties

- [client_oid](postonlylimitorder.md#client_oid)
- [post_only](postonlylimitorder.md#post_only)
- [price](postonlylimitorder.md#price)
- [product_id](postonlylimitorder.md#product_id)
- [side](postonlylimitorder.md#side)
- [size](postonlylimitorder.md#size)
- [stop](postonlylimitorder.md#stop)
- [stop_price](postonlylimitorder.md#stop_price)
- [stp](postonlylimitorder.md#stp)
- [time_in_force](postonlylimitorder.md#time_in_force)
- [type](postonlylimitorder.md#type)

## Properties

### client_oid

• `Optional` **client_oid**: _string_

Inherited from: [LimitOrder](limitorder.md).[client_oid](limitorder.md#client_oid)

Defined in: [order/OrderAPI.ts:31](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L31)

---

### post_only

• **post_only**: _boolean_

Defined in: [order/OrderAPI.ts:64](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L64)

---

### price

• **price**: _string_

Inherited from: [LimitOrder](limitorder.md).[price](limitorder.md#price)

Defined in: [order/OrderAPI.ts:69](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L69)

---

### product_id

• **product_id**: _string_

Inherited from: [LimitOrder](limitorder.md).[product_id](limitorder.md#product_id)

Defined in: [order/OrderAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L32)

---

### side

• **side**: [_OrderSide_](../enums/orderside.md)

Inherited from: [LimitOrder](limitorder.md).[side](limitorder.md#side)

Defined in: [order/OrderAPI.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L33)

---

### size

• **size**: _string_

Inherited from: [LimitOrder](limitorder.md).[size](limitorder.md#size)

Defined in: [order/OrderAPI.ts:70](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L70)

---

### stop

• `Optional` **stop**: `"loss"` \| `"entry"`

Inherited from: [LimitOrder](limitorder.md).[stop](limitorder.md#stop)

Defined in: [order/OrderAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L34)

---

### stop_price

• `Optional` **stop_price**: _string_

Inherited from: [LimitOrder](limitorder.md).[stop_price](limitorder.md#stop_price)

Defined in: [order/OrderAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L35)

---

### stp

• `Optional` **stp**: [_SelfTradePrevention_](../enums/selftradeprevention.md)

Inherited from: [LimitOrder](limitorder.md).[stp](limitorder.md#stp)

Defined in: [order/OrderAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L36)

---

### time_in_force

• **time_in_force**: [_GOOD_TILL_CANCELED_](../enums/timeinforce.md#good_till_canceled) \| [_GOOD_TILL_TIME_](../enums/timeinforce.md#good_till_time)

Default is 'GTC'.

Overrides: [LimitOrder](limitorder.md).[time_in_force](limitorder.md#time_in_force)

Defined in: [order/OrderAPI.ts:65](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L65)

---

### type

• **type**: [_LIMIT_](../enums/ordertype.md#limit)

Inherited from: [LimitOrder](limitorder.md).[type](limitorder.md#type)

Defined in: [order/OrderAPI.ts:73](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L73)
