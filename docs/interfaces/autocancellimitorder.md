[coinbase-pro-node](../README.md) / [Exports](../modules.md) / AutoCancelLimitOrder

# Interface: AutoCancelLimitOrder

## Hierarchy

- [`LimitOrder`](LimitOrder.md)

  ↳ **`AutoCancelLimitOrder`**

## Table of contents

### Properties

- [cancel_after](AutoCancelLimitOrder.md#cancel_after)
- [client_oid](AutoCancelLimitOrder.md#client_oid)
- [price](AutoCancelLimitOrder.md#price)
- [product_id](AutoCancelLimitOrder.md#product_id)
- [side](AutoCancelLimitOrder.md#side)
- [size](AutoCancelLimitOrder.md#size)
- [stop](AutoCancelLimitOrder.md#stop)
- [stop_price](AutoCancelLimitOrder.md#stop_price)
- [stp](AutoCancelLimitOrder.md#stp)
- [time_in_force](AutoCancelLimitOrder.md#time_in_force)
- [type](AutoCancelLimitOrder.md#type)

## Properties

### cancel_after

• **cancel_after**: [`CancelOrderPeriod`](../enums/CancelOrderPeriod.md)

#### Defined in

[order/OrderAPI.ts:60](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L60)

---

### client_oid

• `Optional` **client_oid**: `string`

#### Inherited from

[LimitOrder](LimitOrder.md).[client_oid](LimitOrder.md#client_oid)

#### Defined in

[order/OrderAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L32)

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

• **time_in_force**: [`GOOD_TILL_TIME`](../enums/TimeInForce.md#good_till_time)

Default is 'GTC'.

#### Overrides

[LimitOrder](LimitOrder.md).[time_in_force](LimitOrder.md#time_in_force)

#### Defined in

[order/OrderAPI.ts:61](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L61)

---

### type

• **type**: [`LIMIT`](../enums/OrderType.md#limit)

#### Inherited from

[LimitOrder](LimitOrder.md).[type](LimitOrder.md#type)

#### Defined in

[order/OrderAPI.ts:74](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L74)
