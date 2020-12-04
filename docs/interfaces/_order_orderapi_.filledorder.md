**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["order/OrderAPI"](../modules/_order_orderapi_.md) / FilledOrder

# Interface: FilledOrder

## Hierarchy

- { created*at: ISO_8601_MS_UTC ; executed_value: string ; fill_fees: string ; filled_size: string ; id: string ; post_only: false ; price: string ; product_id: string ; settled: boolean ; side: OrderSide ; size: string ; status: [OrderStatus](../enums/\_order_orderapi*.orderstatus.md) ; time*in_force: [TimeInForce](../enums/\_order_orderapi*.timeinforce.md) ; type: [OrderType](../enums/_order_orderapi_.ordertype.md) }

  ↳ **FilledOrder**

## Index

### Properties

- [created_at](_order_orderapi_.filledorder.md#created_at)
- [done_at](_order_orderapi_.filledorder.md#done_at)
- [done_reason](_order_orderapi_.filledorder.md#done_reason)
- [executed_value](_order_orderapi_.filledorder.md#executed_value)
- [fill_fees](_order_orderapi_.filledorder.md#fill_fees)
- [filled_size](_order_orderapi_.filledorder.md#filled_size)
- [id](_order_orderapi_.filledorder.md#id)
- [post_only](_order_orderapi_.filledorder.md#post_only)
- [price](_order_orderapi_.filledorder.md#price)
- [product_id](_order_orderapi_.filledorder.md#product_id)
- [profile_id](_order_orderapi_.filledorder.md#profile_id)
- [settled](_order_orderapi_.filledorder.md#settled)
- [side](_order_orderapi_.filledorder.md#side)
- [size](_order_orderapi_.filledorder.md#size)
- [status](_order_orderapi_.filledorder.md#status)
- [time_in_force](_order_orderapi_.filledorder.md#time_in_force)
- [type](_order_orderapi_.filledorder.md#type)

## Properties

### created_at

• **created_at**: ISO_8601_MS_UTC

_Inherited from \_\_type.created_at_

_Defined in [src/order/OrderAPI.ts:40](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L40)_

---

### done_at

• **done_at**: ISO_8601_MS_UTC

_Defined in [src/order/OrderAPI.ts:91](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L91)_

---

### done_reason

• **done_reason**: \"filled\"

_Defined in [src/order/OrderAPI.ts:92](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L92)_

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

### profile_id

• **profile_id**: string

_Defined in [src/order/OrderAPI.ts:93](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L93)_

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

• **status**: [DONE](../enums/_order_orderapi_.orderstatus.md#done)

_Overrides \_\_type.status_

_Defined in [src/order/OrderAPI.ts:94](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/order/OrderAPI.ts#L94)_

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
