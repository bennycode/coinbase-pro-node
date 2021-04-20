[coinbase-pro-node](../README.md) / [Exports](../modules.md) / LimitOrder

# Interface: LimitOrder

## Hierarchy

- _BaseOrder_

  ↳ **LimitOrder**

  ↳↳ [_AutoCancelLimitOrder_](autocancellimitorder.md)

  ↳↳ [_PostOnlyLimitOrder_](postonlylimitorder.md)

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

• `Optional` **client_oid**: _string_

Inherited from: BaseOrder.client_oid

Defined in: [order/OrderAPI.ts:31](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L31)

---

### price

• **price**: _string_

Defined in: [order/OrderAPI.ts:69](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L69)

---

### product_id

• **product_id**: _string_

Inherited from: BaseOrder.product_id

Defined in: [order/OrderAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L32)

---

### side

• **side**: [_OrderSide_](../enums/orderside.md)

Inherited from: BaseOrder.side

Defined in: [order/OrderAPI.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L33)

---

### size

• **size**: _string_

Defined in: [order/OrderAPI.ts:70](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L70)

---

### stop

• `Optional` **stop**: `"loss"` \| `"entry"`

Inherited from: BaseOrder.stop

Defined in: [order/OrderAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L34)

---

### stop_price

• `Optional` **stop_price**: _string_

Inherited from: BaseOrder.stop_price

Defined in: [order/OrderAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L35)

---

### stp

• `Optional` **stp**: [_SelfTradePrevention_](../enums/selftradeprevention.md)

Inherited from: BaseOrder.stp

Defined in: [order/OrderAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L36)

---

### time_in_force

• `Optional` **time_in_force**: [_TimeInForce_](../enums/timeinforce.md)

Default is 'GTC'.

Defined in: [order/OrderAPI.ts:72](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L72)

---

### type

• **type**: [_LIMIT_](../enums/ordertype.md#limit)

Defined in: [order/OrderAPI.ts:73](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/order/OrderAPI.ts#L73)
