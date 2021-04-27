[coinbase-pro-node](../README.md) / [Exports](../modules.md) / OrderAPI

# Class: OrderAPI

## Table of contents

### Constructors

- [constructor](orderapi.md#constructor)

### Properties

- [URL](orderapi.md#url)

### Methods

- [cancelOpenOrders](orderapi.md#cancelopenorders)
- [cancelOrder](orderapi.md#cancelorder)
- [getOrder](orderapi.md#getorder)
- [getOrders](orderapi.md#getorders)
- [placeOrder](orderapi.md#placeorder)

## Constructors

### constructor

\+ **new OrderAPI**(`apiClient`: AxiosInstance): [_OrderAPI_](orderapi.md)

#### Parameters:

| Name        | Type          |
| :---------- | :------------ |
| `apiClient` | AxiosInstance |

**Returns:** [_OrderAPI_](orderapi.md)

Defined in: [order/OrderAPI.ts:111](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/order/OrderAPI.ts#L111)

## Properties

### URL

▪ `Static` `Readonly` **URL**: _object_

#### Type declaration:

| Name     | Type     |
| :------- | :------- |
| `ORDERS` | _string_ |

Defined in: [order/OrderAPI.ts:109](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/order/OrderAPI.ts#L109)

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

Defined in: [order/OrderAPI.ts:122](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/order/OrderAPI.ts#L122)

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

Defined in: [order/OrderAPI.ts:138](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/order/OrderAPI.ts#L138)

---

### getOrder

▸ **getOrder**(`orderId`: _string_): _Promise_<`null` \| [_Order_](../modules.md#order)\>

Get a single order by order id from the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#get-an-order

#### Parameters:

| Name      | Type     | Description                   |
| :-------- | :------- | :---------------------------- |
| `orderId` | _string_ | ID of previously placed order |

**Returns:** _Promise_<`null` \| [_Order_](../modules.md#order)\>

Defined in: [order/OrderAPI.ts:176](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/order/OrderAPI.ts#L176)

---

### getOrders

▸ **getOrders**(`query?`: [_OrderListQueryParam_](../interfaces/orderlistqueryparam.md)): _Promise_<[_PaginatedData_](../interfaces/paginateddata.md)<[_Order_](../modules.md#order)\>\>

List your orders from the profile that the API key belongs to. Only open or un-settled orders are returned. As soon as an order is no longer open and settled, it will no longer appear in the default request.

**`note`** Depending on your activity, fetching all data from this endpoint can take very long (measured already 25 seconds!)

**`see`** https://docs.pro.coinbase.com/#list-orders

#### Parameters:

| Name | Type | Description |
| :-- | :-- | :-- |
| `query?` | [_OrderListQueryParam_](../interfaces/orderlistqueryparam.md) | Available query parameters (Pagination, Product ID and/or Order Status) |

**Returns:** _Promise_<[_PaginatedData_](../interfaces/paginateddata.md)<[_Order_](../modules.md#order)\>\>

Defined in: [order/OrderAPI.ts:155](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/order/OrderAPI.ts#L155)

---

### placeOrder

▸ **placeOrder**(`newOrder`: [_NewOrder_](../modules.md#neworder)): _Promise_<[_Order_](../modules.md#order)\>

You can place two types of orders: limit and market. Orders can only be placed if your account has sufficient funds. Once an order is placed, your account funds will be put on hold for the duration of the order.

**`see`** https://docs.pro.coinbase.com/#place-a-new-order

#### Parameters:

| Name       | Type                                 | Description               |
| :--------- | :----------------------------------- | :------------------------ |
| `newOrder` | [_NewOrder_](../modules.md#neworder) | Order type and parameters |

**Returns:** _Promise_<[_Order_](../modules.md#order)\>

Defined in: [order/OrderAPI.ts:201](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/order/OrderAPI.ts#L201)
