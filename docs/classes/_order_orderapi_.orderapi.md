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

- [URL](_order_orderapi_.orderapi.md#static-readonly-url)

## Constructors

### constructor

\+ **new OrderAPI**(`apiClient`: AxiosInstance): _[OrderAPI](_order_orderapi_.orderapi.md)_

_Defined in [src/order/OrderAPI.ts:102](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/order/OrderAPI.ts#L102)_

**Parameters:**

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** _[OrderAPI](_order_orderapi_.orderapi.md)_

## Methods

### cancelOpenOrders

▸ **cancelOpenOrders**(`productId?`: undefined | string): _Promise‹string[]›_

_Defined in [src/order/OrderAPI.ts:114](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/order/OrderAPI.ts#L114)_

Cancel a previously placed order. Order must belong to the profile that the API key belongs to. If no product is specified, all open orders from the profile that the API key belongs to will be canceled.

**`see`** https://docs.pro.coinbase.com/#cancel-all

**Parameters:**

| Name         | Type                    | Description                         |
| ------------ | ----------------------- | ----------------------------------- |
| `productId?` | undefined &#124; string | Representation for base and counter |

**Returns:** _Promise‹string[]›_

A list of ids of the canceled orders

---

### getOpenOrders

▸ **getOpenOrders**(`pagination?`: Pagination): _Promise‹PaginatedData‹[Order](../modules/_order_orderapi_.md#order)››_

_Defined in [src/order/OrderAPI.ts:130](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/order/OrderAPI.ts#L130)_

List your current open orders from the profile that the API key belongs to. Only open or un-settled orders are returned. As soon as an order is no longer open and settled, it will no longer appear in the default request.

**`see`** https://docs.pro.coinbase.com/#list-orders

**Parameters:**

| Name          | Type       | Description      |
| ------------- | ---------- | ---------------- |
| `pagination?` | Pagination | Pagination field |

**Returns:** _Promise‹PaginatedData‹[Order](../modules/_order_orderapi_.md#order)››_

---

### getOrder

▸ **getOrder**(`orderId`: string): _Promise‹[Order](../modules/_order_orderapi_.md#order) | null›_

_Defined in [src/order/OrderAPI.ts:148](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/order/OrderAPI.ts#L148)_

Get a single order by order id from the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#get-an-order

**Parameters:**

| Name      | Type   | Description                   |
| --------- | ------ | ----------------------------- |
| `orderId` | string | ID of previously placed order |

**Returns:** _Promise‹[Order](../modules/_order_orderapi_.md#order) | null›_

---

### placeOrder

▸ **placeOrder**(`newOrder`: [NewOrder](../modules/_order_orderapi_.md#neworder)): _Promise‹[Order](../modules/_order_orderapi_.md#order)›_

_Defined in [src/order/OrderAPI.ts:173](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/order/OrderAPI.ts#L173)_

You can place two types of orders: limit and market. Orders can only be placed if your account has sufficient funds. Once an order is placed, your account funds will be put on hold for the duration of the order.

**`see`** https://docs.pro.coinbase.com/#place-a-new-order

**Parameters:**

| Name       | Type                                                | Description               |
| ---------- | --------------------------------------------------- | ------------------------- |
| `newOrder` | [NewOrder](../modules/_order_orderapi_.md#neworder) | Order type and parameters |

**Returns:** _Promise‹[Order](../modules/_order_orderapi_.md#order)›_

## Object literals

### `Static` `Readonly` URL

### ▪ **URL**: _object_

_Defined in [src/order/OrderAPI.ts:100](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/order/OrderAPI.ts#L100)_

### ORDERS

• **ORDERS**: _string_ = `/orders`

_Defined in [src/order/OrderAPI.ts:101](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/order/OrderAPI.ts#L101)_
