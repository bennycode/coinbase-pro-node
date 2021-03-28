[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [order/OrderAPI](../modules/order_orderapi.md) / OrderAPI

# Class: OrderAPI

[order/OrderAPI](../modules/order_orderapi.md).OrderAPI

## Table of contents

### Constructors

- [constructor](order_orderapi.orderapi.md#constructor)

### Properties

- [URL](order_orderapi.orderapi.md#url)

### Methods

- [cancelOpenOrders](order_orderapi.orderapi.md#cancelopenorders)
- [cancelOrder](order_orderapi.orderapi.md#cancelorder)
- [getOrder](order_orderapi.orderapi.md#getorder)
- [getOrders](order_orderapi.orderapi.md#getorders)
- [placeOrder](order_orderapi.orderapi.md#placeorder)

## Constructors

### constructor

\+ **new OrderAPI**(`apiClient`: AxiosInstance): [_OrderAPI_](order_orderapi.orderapi.md)

#### Parameters:

| Name        | Type          |
| :---------- | :------------ |
| `apiClient` | AxiosInstance |

**Returns:** [_OrderAPI_](order_orderapi.orderapi.md)

Defined in: [order/OrderAPI.ts:110](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/order/OrderAPI.ts#L110)

## Properties

### URL

▪ `Static` `Readonly` **URL**: _object_

#### Type declaration:

| Name     | Type     |
| :------- | :------- |
| `ORDERS` | _string_ |

Defined in: [order/OrderAPI.ts:108](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/order/OrderAPI.ts#L108)

## Methods

### cancelOpenOrders

▸ **cancelOpenOrders**(`productId?`: _string_): _Promise_<string[]\>

With best effort, cancel all open orders from the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#cancel-all

#### Parameters:

| Name         | Type     | Description                         |
| :----------- | :------- | :---------------------------------- |
| `productId?` | _string_ | Representation for base and counter |

**Returns:** _Promise_<string[]\>

A list of ids of the canceled orders

Defined in: [order/OrderAPI.ts:121](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/order/OrderAPI.ts#L121)

---

### cancelOrder

▸ **cancelOrder**(`orderId`: _string_, `productId?`: _string_): _Promise_<string\>

Cancel a previously placed order. Order must belong to the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#cancel-an-order

#### Parameters:

| Name         | Type     | Description                                                                           |
| :----------- | :------- | :------------------------------------------------------------------------------------ |
| `orderId`    | _string_ | ID of the order to cancel                                                             |
| `productId?` | _string_ | While not required, the request will be more performant if you include the product ID |

**Returns:** _Promise_<string\>

The ID of the canceled order

Defined in: [order/OrderAPI.ts:137](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/order/OrderAPI.ts#L137)

---

### getOrder

▸ **getOrder**(`orderId`: _string_): _Promise_<_null_ \| [_Order_](../modules/order_orderapi.md#order)\>

Get a single order by order id from the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#get-an-order

#### Parameters:

| Name      | Type     | Description                   |
| :-------- | :------- | :---------------------------- |
| `orderId` | _string_ | ID of previously placed order |

**Returns:** _Promise_<_null_ \| [_Order_](../modules/order_orderapi.md#order)\>

Defined in: [order/OrderAPI.ts:175](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/order/OrderAPI.ts#L175)

---

### getOrders

▸ **getOrders**(`query?`: [_OrderListQueryParam_](../interfaces/order_orderapi.orderlistqueryparam.md)): _Promise_<PaginatedData<[_Order_](../modules/order_orderapi.md#order)\>\>

List your orders from the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#list-orders

#### Parameters:

| Name | Type | Description |
| :-- | :-- | :-- |
| `query?` | [_OrderListQueryParam_](../interfaces/order_orderapi.orderlistqueryparam.md) | Available query parameters (Pagination, Product ID and/or Order Status) |

**Returns:** _Promise_<PaginatedData<[_Order_](../modules/order_orderapi.md#order)\>\>

Defined in: [order/OrderAPI.ts:151](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/order/OrderAPI.ts#L151)

---

### placeOrder

▸ **placeOrder**(`newOrder`: [_NewOrder_](../modules/order_orderapi.md#neworder)): _Promise_<[_Order_](../modules/order_orderapi.md#order)\>

You can place two types of orders: limit and market. Orders can only be placed if your account has sufficient funds. Once an order is placed, your account funds will be put on hold for the duration of the order.

**`see`** https://docs.pro.coinbase.com/#place-a-new-order

#### Parameters:

| Name       | Type                                                | Description               |
| :--------- | :-------------------------------------------------- | :------------------------ |
| `newOrder` | [_NewOrder_](../modules/order_orderapi.md#neworder) | Order type and parameters |

**Returns:** _Promise_<[_Order_](../modules/order_orderapi.md#order)\>

Defined in: [order/OrderAPI.ts:200](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/order/OrderAPI.ts#L200)
