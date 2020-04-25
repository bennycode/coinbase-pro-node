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

_Defined in [src/order/OrderAPI.ts:63](https://github.com/bennyn/coinbase-pro-node/blob/0c3235f/src/order/OrderAPI.ts#L63)_

**Parameters:**

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** _[OrderAPI](_order_orderapi_.orderapi.md)_

## Methods

### cancelOpenOrders

▸ **cancelOpenOrders**(`productId?`: undefined | string): _Promise‹string[]›_

_Defined in [src/order/OrderAPI.ts:68](https://github.com/bennyn/coinbase-pro-node/blob/0c3235f/src/order/OrderAPI.ts#L68)_

**Parameters:**

| Name         | Type                    |
| ------------ | ----------------------- |
| `productId?` | undefined &#124; string |

**Returns:** _Promise‹string[]›_

---

### getOpenOrders

▸ **getOpenOrders**(`pagination?`: Pagination): _Promise‹object›_

_Defined in [src/order/OrderAPI.ts:84](https://github.com/bennyn/coinbase-pro-node/blob/0c3235f/src/order/OrderAPI.ts#L84)_

List your current open orders from the profile that the API key belongs to. Only open or un-settled orders are returned. As soon as an order is no longer open and settled, it will no longer appear in the default request.

**`see`** https://docs.pro.coinbase.com/#list-orders

**Parameters:**

| Name          | Type       |
| ------------- | ---------- |
| `pagination?` | Pagination |

**Returns:** _Promise‹object›_

---

### getOrder

▸ **getOrder**(`orderId`: string): _Promise‹[Order](../interfaces/_order_orderapi_.order.md) | null›_

_Defined in [src/order/OrderAPI.ts:104](https://github.com/bennyn/coinbase-pro-node/blob/0c3235f/src/order/OrderAPI.ts#L104)_

Get a single order by order id from the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#get-an-order

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `orderId` | string |

**Returns:** _Promise‹[Order](../interfaces/_order_orderapi_.order.md) | null›_

---

### placeOrder

▸ **placeOrder**(`newOrder`: [NewOrder](../interfaces/_order_orderapi_.neworder.md)): _Promise‹[Order](../interfaces/_order_orderapi_.order.md)›_

_Defined in [src/order/OrderAPI.ts:123](https://github.com/bennyn/coinbase-pro-node/blob/0c3235f/src/order/OrderAPI.ts#L123)_

**Parameters:**

| Name       | Type                                                   |
| ---------- | ------------------------------------------------------ |
| `newOrder` | [NewOrder](../interfaces/_order_orderapi_.neworder.md) |

**Returns:** _Promise‹[Order](../interfaces/_order_orderapi_.order.md)›_

## Object literals

### `Static` URL

### ▪ **URL**: _object_

_Defined in [src/order/OrderAPI.ts:61](https://github.com/bennyn/coinbase-pro-node/blob/0c3235f/src/order/OrderAPI.ts#L61)_

### ORDERS

• **ORDERS**: _string_ = `/orders`

_Defined in [src/order/OrderAPI.ts:62](https://github.com/bennyn/coinbase-pro-node/blob/0c3235f/src/order/OrderAPI.ts#L62)_
