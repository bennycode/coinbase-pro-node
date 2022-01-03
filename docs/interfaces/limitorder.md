[coinbase-pro-node](../README.md) / [Exports](../modules.md) / LimitOrder

# Interface: LimitOrder

## Hierarchy

- `BaseOrder`

  ↳ **`LimitOrder`**

  ↳↳ [`AutoCancelLimitOrder`](AutoCancelLimitOrder.md)

  ↳↳ [`PostOnlyLimitOrder`](PostOnlyLimitOrder.md)

## Table of contents

### Properties

- [client_oid](LimitOrder.md#client_oid)
- [price](LimitOrder.md#price)
- [product_id](LimitOrder.md#product_id)
- [side](LimitOrder.md#side)
- [size](LimitOrder.md#size)
- [stop](LimitOrder.md#stop)
- [stop_price](LimitOrder.md#stop_price)
- [stp](LimitOrder.md#stp)
- [time_in_force](LimitOrder.md#time_in_force)
- [type](LimitOrder.md#type)

## Properties

### client_oid

• `Optional` **client_oid**: `string`

#### Inherited from

BaseOrder.client_oid

#### Defined in

[order/OrderAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L32)

---

### price

• **price**: `string`

#### Defined in

[order/OrderAPI.ts:70](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L70)

---

### product_id

• **product_id**: `string`

#### Inherited from

BaseOrder.product_id

#### Defined in

[order/OrderAPI.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L33)

---

### side

• **side**: `OrderSide`

#### Inherited from

BaseOrder.side

#### Defined in

[order/OrderAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L34)

---

### size

• **size**: `string`

#### Defined in

[order/OrderAPI.ts:71](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L71)

---

### stop

• `Optional` **stop**: `"loss"` \| `"entry"`

#### Inherited from

BaseOrder.stop

#### Defined in

[order/OrderAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L35)

---

### stop_price

• `Optional` **stop_price**: `string`

#### Inherited from

BaseOrder.stop_price

#### Defined in

[order/OrderAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L36)

---

### stp

• `Optional` **stp**: [`SelfTradePrevention`](../enums/SelfTradePrevention.md)

#### Inherited from

BaseOrder.stp

#### Defined in

[order/OrderAPI.ts:37](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L37)

---

### time_in_force

• `Optional` **time_in_force**: [`TimeInForce`](../enums/TimeInForce.md)

Default is 'GTC'.

#### Defined in

[order/OrderAPI.ts:73](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L73)

---

### type

• **type**: [`LIMIT`](../enums/OrderType.md#limit)

#### Defined in

[order/OrderAPI.ts:74](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/order/OrderAPI.ts#L74)
