[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["order/OrderAPI"](../modules/_order_orderapi_.md) › [OrderAPI](_order_orderapi_.orderapi.md)

# Class: OrderAPI

## Hierarchy

- **OrderAPI**

## Index

### Constructors

- [constructor](_order_orderapi_.orderapi.md#constructor)

### Methods

- [cancelOpenOrders](_order_orderapi_.orderapi.md#cancelopenorders)
- [getOpenOrders](_order_orderapi_.orderapi.md#getopenorders)
- [getOrder](_order_orderapi_.orderapi.md#getorder)
- [placeOrder](_order_orderapi_.orderapi.md#placeorder)

### Object literals

- [URL](_order_orderapi_.orderapi.md#static-url)

## Constructors

### constructor

\+ **new OrderAPI**(`apiClient`: AxiosInstance): _[OrderAPI](_order_orderapi_.orderapi.md)_

_Defined in [src/order/OrderAPI.ts:63](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/order/OrderAPI.ts#L63)_

**Parameters:**

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** _[OrderAPI](_order_orderapi_.orderapi.md)_

## Methods

### cancelOpenOrders

▸ **cancelOpenOrders**(`productId?`: undefined | string): _Promise‹string[]›_

_Defined in [src/order/OrderAPI.ts:68](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/order/OrderAPI.ts#L68)_

**Parameters:**

| Name         | Type                    |
| ------------ | ----------------------- |
| `productId?` | undefined &#124; string |

**Returns:** _Promise‹string[]›_

---

### getOpenOrders

▸ **getOpenOrders**(): _Promise‹[Order](../interfaces/_order_orderapi_.order.md)[]›_

_Defined in [src/order/OrderAPI.ts:77](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/order/OrderAPI.ts#L77)_

**Returns:** _Promise‹[Order](../interfaces/_order_orderapi_.order.md)[]›_

---

### getOrder

▸ **getOrder**(`orderId`: string): _Promise‹[Order](../interfaces/_order_orderapi_.order.md) | null›_

_Defined in [src/order/OrderAPI.ts:84](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/order/OrderAPI.ts#L84)_

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `orderId` | string |

**Returns:** _Promise‹[Order](../interfaces/_order_orderapi_.order.md) | null›_

---

### placeOrder

▸ **placeOrder**(`newOrder`: [NewOrder](../interfaces/_order_orderapi_.neworder.md)): _Promise‹[Order](../interfaces/_order_orderapi_.order.md)›_

_Defined in [src/order/OrderAPI.ts:103](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/order/OrderAPI.ts#L103)_

**Parameters:**

| Name       | Type                                                   |
| ---------- | ------------------------------------------------------ |
| `newOrder` | [NewOrder](../interfaces/_order_orderapi_.neworder.md) |

**Returns:** _Promise‹[Order](../interfaces/_order_orderapi_.order.md)›_

## Object literals

### `Static` URL

### ▪ **URL**: _object_

_Defined in [src/order/OrderAPI.ts:61](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/order/OrderAPI.ts#L61)_

### ORDERS

• **ORDERS**: _string_ = `/orders`

_Defined in [src/order/OrderAPI.ts:62](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/order/OrderAPI.ts#L62)_
