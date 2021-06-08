[coinbase-pro-node](../README.md) / [Exports](../modules.md) / AutoCancelLimitOrder

# Interface: AutoCancelLimitOrder

## Hierarchy

- [LimitOrder](limitorder.md)

  ↳ **AutoCancelLimitOrder**

## Table of contents

### Properties

- [cancel_after](autocancellimitorder.md#cancel_after)
- [client_oid](autocancellimitorder.md#client_oid)
- [price](autocancellimitorder.md#price)
- [product_id](autocancellimitorder.md#product_id)
- [side](autocancellimitorder.md#side)
- [size](autocancellimitorder.md#size)
- [stop](autocancellimitorder.md#stop)
- [stop_price](autocancellimitorder.md#stop_price)
- [stp](autocancellimitorder.md#stp)
- [time_in_force](autocancellimitorder.md#time_in_force)
- [type](autocancellimitorder.md#type)

## Properties

### cancel_after

• **cancel_after**: [CancelOrderPeriod](../enums/cancelorderperiod.md)

#### Defined in

[order/OrderAPI.ts:60](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L60)

---

### client_oid

• `Optional` **client_oid**: `string`

#### Inherited from

[LimitOrder](limitorder.md).[client_oid](limitorder.md#client_oid)

#### Defined in

[order/OrderAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L32)

---

### price

• **price**: `string`

#### Inherited from

[LimitOrder](limitorder.md).[price](limitorder.md#price)

#### Defined in

[order/OrderAPI.ts:70](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L70)

---

### product_id

• **product_id**: `string`

#### Inherited from

[LimitOrder](limitorder.md).[product_id](limitorder.md#product_id)

#### Defined in

[order/OrderAPI.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L33)

---

### side

• **side**: `OrderSide`

#### Inherited from

[LimitOrder](limitorder.md).[side](limitorder.md#side)

#### Defined in

[order/OrderAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L34)

---

### size

• **size**: `string`

#### Inherited from

[LimitOrder](limitorder.md).[size](limitorder.md#size)

#### Defined in

[order/OrderAPI.ts:71](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L71)

---

### stop

• `Optional` **stop**: `"loss"` \| `"entry"`

#### Inherited from

[LimitOrder](limitorder.md).[stop](limitorder.md#stop)

#### Defined in

[order/OrderAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L35)

---

### stop_price

• `Optional` **stop_price**: `string`

#### Inherited from

[LimitOrder](limitorder.md).[stop_price](limitorder.md#stop_price)

#### Defined in

[order/OrderAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L36)

---

### stp

• `Optional` **stp**: [SelfTradePrevention](../enums/selftradeprevention.md)

#### Inherited from

[LimitOrder](limitorder.md).[stp](limitorder.md#stp)

#### Defined in

[order/OrderAPI.ts:37](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L37)

---

### time_in_force

• **time_in_force**: [GOOD_TILL_TIME](../enums/timeinforce.md#good_till_time)

Default is 'GTC'.

#### Overrides

[LimitOrder](limitorder.md).[time_in_force](limitorder.md#time_in_force)

#### Defined in

[order/OrderAPI.ts:61](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L61)

---

### type

• **type**: [LIMIT](../enums/ordertype.md#limit)

#### Inherited from

[LimitOrder](limitorder.md).[type](limitorder.md#type)

#### Defined in

[order/OrderAPI.ts:74](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L74)
