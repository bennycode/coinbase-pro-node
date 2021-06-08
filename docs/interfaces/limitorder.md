[coinbase-pro-node](../README.md) / [Exports](../modules.md) / LimitOrder

# Interface: LimitOrder

## Hierarchy

- `BaseOrder`

  ↳ **LimitOrder**

  ↳↳ [AutoCancelLimitOrder](autocancellimitorder.md)

  ↳↳ [PostOnlyLimitOrder](postonlylimitorder.md)

## Table of contents

### Properties

- [client_oid](limitorder.md#client_oid)
- [price](limitorder.md#price)
- [product_id](limitorder.md#product_id)
- [side](limitorder.md#side)
- [size](limitorder.md#size)
- [stop](limitorder.md#stop)
- [stop_price](limitorder.md#stop_price)
- [stp](limitorder.md#stp)
- [time_in_force](limitorder.md#time_in_force)
- [type](limitorder.md#type)

## Properties

### client_oid

• `Optional` **client_oid**: `string`

#### Inherited from

BaseOrder.client_oid

#### Defined in

[order/OrderAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L32)

---

### price

• **price**: `string`

#### Defined in

[order/OrderAPI.ts:70](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L70)

---

### product_id

• **product_id**: `string`

#### Inherited from

BaseOrder.product_id

#### Defined in

[order/OrderAPI.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L33)

---

### side

• **side**: `OrderSide`

#### Inherited from

BaseOrder.side

#### Defined in

[order/OrderAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L34)

---

### size

• **size**: `string`

#### Defined in

[order/OrderAPI.ts:71](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L71)

---

### stop

• `Optional` **stop**: `"loss"` \| `"entry"`

#### Inherited from

BaseOrder.stop

#### Defined in

[order/OrderAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L35)

---

### stop_price

• `Optional` **stop_price**: `string`

#### Inherited from

BaseOrder.stop_price

#### Defined in

[order/OrderAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L36)

---

### stp

• `Optional` **stp**: [SelfTradePrevention](../enums/selftradeprevention.md)

#### Inherited from

BaseOrder.stp

#### Defined in

[order/OrderAPI.ts:37](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L37)

---

### time_in_force

• `Optional` **time_in_force**: [TimeInForce](../enums/timeinforce.md)

Default is 'GTC'.

#### Defined in

[order/OrderAPI.ts:73](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L73)

---

### type

• **type**: [LIMIT](../enums/ordertype.md#limit)

#### Defined in

[order/OrderAPI.ts:74](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L74)
