**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["order/OrderAPI"](../modules/_order_orderapi_.md) / PendingOrder

# Interface: PendingOrder

## Hierarchy

- { created*at: ISO_8601_MS_UTC ; executed_value: string ; fill_fees: string ; filled_size: string ; id: string ; post_only: false ; price: string ; product_id: string ; settled: boolean ; side: OrderSide ; size: string ; status: [OrderStatus](../enums/\_order_orderapi*.orderstatus.md) ; time*in_force: [TimeInForce](../enums/\_order_orderapi*.timeinforce.md) ; type: [OrderType](../enums/_order_orderapi_.ordertype.md) }

  ↳ **PendingOrder**

## Index

### Properties

- [created_at](_order_orderapi_.pendingorder.md#created_at)
- [executed_value](_order_orderapi_.pendingorder.md#executed_value)
- [fill_fees](_order_orderapi_.pendingorder.md#fill_fees)
- [filled_size](_order_orderapi_.pendingorder.md#filled_size)
- [id](_order_orderapi_.pendingorder.md#id)
- [post_only](_order_orderapi_.pendingorder.md#post_only)
- [price](_order_orderapi_.pendingorder.md#price)
- [product_id](_order_orderapi_.pendingorder.md#product_id)
- [settled](_order_orderapi_.pendingorder.md#settled)
- [side](_order_orderapi_.pendingorder.md#side)
- [size](_order_orderapi_.pendingorder.md#size)
- [status](_order_orderapi_.pendingorder.md#status)
- [stp](_order_orderapi_.pendingorder.md#stp)
- [time_in_force](_order_orderapi_.pendingorder.md#time_in_force)
- [type](_order_orderapi_.pendingorder.md#type)

## Properties

### created_at

• **created_at**: ISO_8601_MS_UTC

_Inherited from \_\_type.created_at_

_Defined in [src/order/OrderAPI.ts:40](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L40)_

---

### executed_value

• **executed_value**: string

_Inherited from \_\_type.executed_value_

_Defined in [src/order/OrderAPI.ts:41](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L41)_

---

### fill_fees

• **fill_fees**: string

_Inherited from \_\_type.fill_fees_

_Defined in [src/order/OrderAPI.ts:42](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L42)_

---

### filled_size

• **filled_size**: string

_Inherited from \_\_type.filled_size_

_Defined in [src/order/OrderAPI.ts:43](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L43)_

---

### id

• **id**: string

_Inherited from \_\_type.id_

_Defined in [src/order/OrderAPI.ts:44](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L44)_

---

### post_only

• **post_only**: false

_Inherited from \_\_type.post_only_

_Defined in [src/order/OrderAPI.ts:45](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L45)_

---

### price

• **price**: string

_Inherited from \_\_type.price_

_Defined in [src/order/OrderAPI.ts:46](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L46)_

---

### product_id

• **product_id**: string

_Inherited from [AutoCancelLimitOrder](_order_orderapi_.autocancellimitorder.md).[product_id](_order_orderapi_.autocancellimitorder.md#product_id)_

_Defined in [src/order/OrderAPI.ts:47](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L47)_

---

### settled

• **settled**: boolean

_Inherited from \_\_type.settled_

_Defined in [src/order/OrderAPI.ts:48](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L48)_

---

### side

• **side**: OrderSide

_Inherited from [AutoCancelLimitOrder](_order_orderapi_.autocancellimitorder.md).[side](_order_orderapi_.autocancellimitorder.md#side)_

_Defined in [src/order/OrderAPI.ts:49](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L49)_

---

### size

• **size**: string

_Inherited from \_\_type.size_

_Defined in [src/order/OrderAPI.ts:50](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L50)_

---

### status

• **status**: [PENDING](../enums/_order_orderapi_.orderstatus.md#pending)

_Overrides \_\_type.status_

_Defined in [src/order/OrderAPI.ts:86](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L86)_

---

### stp

• **stp**: [SelfTradePrevention](../enums/_order_orderapi_.selftradeprevention.md)

_Defined in [src/order/OrderAPI.ts:87](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L87)_

---

### time_in_force

• **time_in_force**: [TimeInForce](../enums/_order_orderapi_.timeinforce.md)

_Inherited from \_\_type.time_in_force_

_Defined in [src/order/OrderAPI.ts:52](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L52)_

---

### type

• **type**: [OrderType](../enums/_order_orderapi_.ordertype.md)

_Inherited from \_\_type.type_

_Defined in [src/order/OrderAPI.ts:53](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L53)_
