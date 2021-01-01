**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["order/OrderAPI"](../modules/_order_orderapi_.md) / OrderAPI

# Class: OrderAPI

## Hierarchy

- **OrderAPI**

## Index

### Constructors

- [constructor](_order_orderapi_.orderapi.md#constructor)

### Methods

- [cancelOpenOrders](_order_orderapi_.orderapi.md#cancelopenorders)
- [cancelOrder](_order_orderapi_.orderapi.md#cancelorder)
- [getOpenOrders](_order_orderapi_.orderapi.md#getopenorders)
- [getOrder](_order_orderapi_.orderapi.md#getorder)
- [placeOrder](_order_orderapi_.orderapi.md#placeorder)

### Object literals

- [URL](_order_orderapi_.orderapi.md#url)

## Constructors

### constructor

\+ **new OrderAPI**(`apiClient`: AxiosInstance): [OrderAPI](_order_orderapi_.orderapi.md)

_Defined in [src/order/OrderAPI.ts:102](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/order/OrderAPI.ts#L102)_

#### Parameters:

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** [OrderAPI](_order_orderapi_.orderapi.md)

## Methods

### cancelOpenOrders

▸ **cancelOpenOrders**(`productId?`: undefined \| string): Promise<string[]\>

_Defined in [src/order/OrderAPI.ts:113](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/order/OrderAPI.ts#L113)_

With best effort, cancel all open orders from the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#cancel-all

#### Parameters:

| Name         | Type                | Description                         |
| ------------ | ------------------- | ----------------------------------- |
| `productId?` | undefined \| string | Representation for base and counter |

**Returns:** Promise<string[]\>

A list of ids of the canceled orders

---

### cancelOrder

▸ **cancelOrder**(`orderId`: string, `productId?`: undefined \| string): Promise<string\>

_Defined in [src/order/OrderAPI.ts:129](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/order/OrderAPI.ts#L129)_

Cancel a previously placed order. Order must belong to the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#cancel-an-order

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `orderId` | string | ID of the order to cancel |
| `productId?` | undefined \| string | While not required, the request will be more performant if you include the product ID |

**Returns:** Promise<string\>

The ID of the canceled order

---

### getOpenOrders

▸ **getOpenOrders**(`pagination?`: Pagination): Promise<PaginatedData<[Order](../modules/_order_orderapi_.md#order)\>\>

_Defined in [src/order/OrderAPI.ts:145](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/order/OrderAPI.ts#L145)_

List your current open orders from the profile that the API key belongs to. Only open or un-settled orders are returned. As soon as an order is no longer open and settled, it will no longer appear in the default request.

**`see`** https://docs.pro.coinbase.com/#list-orders

#### Parameters:

| Name          | Type       | Description      |
| ------------- | ---------- | ---------------- |
| `pagination?` | Pagination | Pagination field |

**Returns:** Promise<PaginatedData<[Order](../modules/_order_orderapi_.md#order)\>\>

---

### getOrder

▸ **getOrder**(`orderId`: string): Promise<[Order](../modules/_order_orderapi_.md#order) \| null\>

_Defined in [src/order/OrderAPI.ts:163](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/order/OrderAPI.ts#L163)_

Get a single order by order id from the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#get-an-order

#### Parameters:

| Name      | Type   | Description                   |
| --------- | ------ | ----------------------------- |
| `orderId` | string | ID of previously placed order |

**Returns:** Promise<[Order](../modules/_order_orderapi_.md#order) \| null\>

---

### placeOrder

▸ **placeOrder**(`newOrder`: [NewOrder](../modules/_order_orderapi_.md#neworder)): Promise<[Order](../modules/_order_orderapi_.md#order)\>

_Defined in [src/order/OrderAPI.ts:188](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/order/OrderAPI.ts#L188)_

You can place two types of orders: limit and market. Orders can only be placed if your account has sufficient funds. Once an order is placed, your account funds will be put on hold for the duration of the order.

**`see`** https://docs.pro.coinbase.com/#place-a-new-order

#### Parameters:

| Name       | Type                                                | Description               |
| ---------- | --------------------------------------------------- | ------------------------- |
| `newOrder` | [NewOrder](../modules/_order_orderapi_.md#neworder) | Order type and parameters |

**Returns:** Promise<[Order](../modules/_order_orderapi_.md#order)\>

## Object literals

### URL

▪ `Static` `Readonly` **URL**: object

_Defined in [src/order/OrderAPI.ts:100](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/order/OrderAPI.ts#L100)_

#### Properties:

| Name     | Type   | Value       |
| -------- | ------ | ----------- |
| `ORDERS` | string | \`/orders\` |
