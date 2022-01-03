[coinbase-pro-node](../README.md) / [Exports](../modules.md) / PostOnlyLimitOrder

# Interface: PostOnlyLimitOrder

## Hierarchy

- [`LimitOrder`](LimitOrder.md)

  ↳ **`PostOnlyLimitOrder`**

## Table of contents

### Properties

- [client_oid](PostOnlyLimitOrder.md#client_oid)
- [post_only](PostOnlyLimitOrder.md#post_only)
- [price](PostOnlyLimitOrder.md#price)
- [product_id](PostOnlyLimitOrder.md#product_id)
- [side](PostOnlyLimitOrder.md#side)
- [size](PostOnlyLimitOrder.md#size)
- [stop](PostOnlyLimitOrder.md#stop)
- [stop_price](PostOnlyLimitOrder.md#stop_price)
- [stp](PostOnlyLimitOrder.md#stp)
- [time_in_force](PostOnlyLimitOrder.md#time_in_force)
- [type](PostOnlyLimitOrder.md#type)

## Properties

### client_oid

• `Optional` **client_oid**: `string`

#### Inherited from

[LimitOrder](LimitOrder.md).[client_oid](LimitOrder.md#client_oid)

#### Defined in

[order/OrderAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L32)

---

### post_only

• **post_only**: `boolean`

#### Defined in

[order/OrderAPI.ts:65](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L65)

---

### price

• **price**: `string`

#### Inherited from

[LimitOrder](LimitOrder.md).[price](LimitOrder.md#price)

#### Defined in

[order/OrderAPI.ts:70](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L70)

---

### product_id

• **product_id**: `string`

#### Inherited from

[LimitOrder](LimitOrder.md).[product_id](LimitOrder.md#product_id)

#### Defined in

[order/OrderAPI.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L33)

---

### side

• **side**: `OrderSide`

#### Inherited from

[LimitOrder](LimitOrder.md).[side](LimitOrder.md#side)

#### Defined in

[order/OrderAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L34)

---

### size

• **size**: `string`

#### Inherited from

[LimitOrder](LimitOrder.md).[size](LimitOrder.md#size)

#### Defined in

[order/OrderAPI.ts:71](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L71)

---

### stop

• `Optional` **stop**: `"loss"` \| `"entry"`

#### Inherited from

[LimitOrder](LimitOrder.md).[stop](LimitOrder.md#stop)

#### Defined in

[order/OrderAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L35)

---

### stop_price

• `Optional` **stop_price**: `string`

#### Inherited from

[LimitOrder](LimitOrder.md).[stop_price](LimitOrder.md#stop_price)

#### Defined in

[order/OrderAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L36)

---

### stp

• `Optional` **stp**: [`SelfTradePrevention`](../enums/SelfTradePrevention.md)

#### Inherited from

[LimitOrder](LimitOrder.md).[stp](LimitOrder.md#stp)

#### Defined in

[order/OrderAPI.ts:37](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L37)

---

### time_in_force

• **time_in_force**: [`GOOD_TILL_CANCELED`](../enums/TimeInForce.md#good_till_canceled) \| [`GOOD_TILL_TIME`](../enums/TimeInForce.md#good_till_time)

Default is 'GTC'.

#### Overrides

[LimitOrder](LimitOrder.md).[time_in_force](LimitOrder.md#time_in_force)

#### Defined in

[order/OrderAPI.ts:66](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L66)

---

### type

• **type**: [`LIMIT`](../enums/OrderType.md#limit)

#### Inherited from

[LimitOrder](LimitOrder.md).[type](LimitOrder.md#type)

#### Defined in

[order/OrderAPI.ts:74](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L74)
