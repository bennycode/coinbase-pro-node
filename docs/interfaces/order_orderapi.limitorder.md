[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [order/OrderAPI](../modules/order_orderapi.md) / LimitOrder

# Interface: LimitOrder

[order/OrderAPI](../modules/order_orderapi.md).LimitOrder

## Hierarchy

- _BaseOrder_

  ↳ **LimitOrder**

  ↳↳ [_AutoCancelLimitOrder_](order_orderapi.autocancellimitorder.md)

  ↳↳ [_PostOnlyLimitOrder_](order_orderapi.postonlylimitorder.md)

## Table of contents

### Properties

- [client_oid](order_orderapi.limitorder.md#client_oid)
- [price](order_orderapi.limitorder.md#price)
- [product_id](order_orderapi.limitorder.md#product_id)
- [side](order_orderapi.limitorder.md#side)
- [size](order_orderapi.limitorder.md#size)
- [stop](order_orderapi.limitorder.md#stop)
- [stop_price](order_orderapi.limitorder.md#stop_price)
- [stp](order_orderapi.limitorder.md#stp)
- [time_in_force](order_orderapi.limitorder.md#time_in_force)
- [type](order_orderapi.limitorder.md#type)

## Properties

### client_oid

• `Optional` **client_oid**: _string_

Inherited from: void

Defined in: [order/OrderAPI.ts:31](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/order/OrderAPI.ts#L31)

---

### price

• **price**: _string_

Defined in: [order/OrderAPI.ts:69](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/order/OrderAPI.ts#L69)

---

### product_id

• **product_id**: _string_

Inherited from: void

Defined in: [order/OrderAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/order/OrderAPI.ts#L32)

---

### side

• **side**: OrderSide

Inherited from: void

Defined in: [order/OrderAPI.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/order/OrderAPI.ts#L33)

---

### size

• **size**: _string_

Defined in: [order/OrderAPI.ts:70](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/order/OrderAPI.ts#L70)

---

### stop

• `Optional` **stop**: _loss_ \| _entry_

Inherited from: void

Defined in: [order/OrderAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/order/OrderAPI.ts#L34)

---

### stop_price

• `Optional` **stop_price**: _string_

Inherited from: void

Defined in: [order/OrderAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/order/OrderAPI.ts#L35)

---

### stp

• `Optional` **stp**: [_SelfTradePrevention_](../enums/order_orderapi.selftradeprevention.md)

Inherited from: void

Defined in: [order/OrderAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/order/OrderAPI.ts#L36)

---

### time_in_force

• `Optional` **time_in_force**: [_TimeInForce_](../enums/order_orderapi.timeinforce.md)

Default is 'GTC'.

Defined in: [order/OrderAPI.ts:72](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/order/OrderAPI.ts#L72)

---

### type

• **type**: [_LIMIT_](../enums/order_orderapi.ordertype.md#limit)

Defined in: [order/OrderAPI.ts:73](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/order/OrderAPI.ts#L73)
