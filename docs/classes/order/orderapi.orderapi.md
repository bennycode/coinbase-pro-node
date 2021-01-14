[coinbase-pro-node](../../README.md) / [Exports](../../modules.md) / [order/OrderAPI](../../modules/order_orderapi.md) / OrderAPI

# Class: OrderAPI

[order/OrderAPI](../../modules/order_orderapi.md).OrderAPI

## Hierarchy

- **OrderAPI**

## Table of contents

### Constructors

- [constructor](orderapi.orderapi.md#constructor)

### Properties

- [URL](orderapi.orderapi.md#url)

### Methods

- [cancelOpenOrders](orderapi.orderapi.md#cancelopenorders)
- [cancelOrder](orderapi.orderapi.md#cancelorder)
- [getOpenOrders](orderapi.orderapi.md#getopenorders)
- [getOrder](orderapi.orderapi.md#getorder)
- [placeOrder](orderapi.orderapi.md#placeorder)

## Constructors

### constructor

\+ **new OrderAPI**(`apiClient`: AxiosInstance): [_OrderAPI_](orderapi.orderapi.md)

#### Parameters:

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** [_OrderAPI_](orderapi.orderapi.md)

Defined in: [order/OrderAPI.ts:102](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/order/OrderAPI.ts#L102)

## Properties

### URL

▪ `Readonly` `Static` **URL**: { `ORDERS`: _string_ }

#### Type declaration:

| Name     | Type     |
| -------- | -------- |
| `ORDERS` | _string_ |

Defined in: [order/OrderAPI.ts:100](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/order/OrderAPI.ts#L100)

## Methods

### cancelOpenOrders

▸ **cancelOpenOrders**(`productId?`: _string_): _Promise_<_string_[]\>

With best effort, cancel all open orders from the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#cancel-all

#### Parameters:

| Name         | Type     | Description                         |
| ------------ | -------- | ----------------------------------- |
| `productId?` | _string_ | Representation for base and counter |

**Returns:** _Promise_<_string_[]\>

A list of ids of the canceled orders

Defined in: [order/OrderAPI.ts:113](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/order/OrderAPI.ts#L113)

---

### cancelOrder

▸ **cancelOrder**(`orderId`: _string_, `productId?`: _string_): _Promise_<_string_\>

Cancel a previously placed order. Order must belong to the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#cancel-an-order

#### Parameters:

| Name         | Type     | Description                                                                           |
| ------------ | -------- | ------------------------------------------------------------------------------------- |
| `orderId`    | _string_ | ID of the order to cancel                                                             |
| `productId?` | _string_ | While not required, the request will be more performant if you include the product ID |

**Returns:** _Promise_<_string_\>

The ID of the canceled order

Defined in: [order/OrderAPI.ts:129](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/order/OrderAPI.ts#L129)

---

### getOpenOrders

▸ **getOpenOrders**(`pagination?`: Pagination): _Promise_<_PaginatedData_<[_Order_](../../modules/order_orderapi.md#order)\>\>

List your current open orders from the profile that the API key belongs to. Only open or un-settled orders are returned. As soon as an order is no longer open and settled, it will no longer appear in the default request.

**`see`** https://docs.pro.coinbase.com/#list-orders

#### Parameters:

| Name          | Type       | Description      |
| ------------- | ---------- | ---------------- |
| `pagination?` | Pagination | Pagination field |

**Returns:** _Promise_<_PaginatedData_<[_Order_](../../modules/order_orderapi.md#order)\>\>

Defined in: [order/OrderAPI.ts:145](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/order/OrderAPI.ts#L145)

---

### getOrder

▸ **getOrder**(`orderId`: _string_): _Promise_<_null_ \| [_PendingOrder_](../../interfaces/order/orderapi.pendingorder.md) \| [_FilledOrder_](../../interfaces/order/orderapi.filledorder.md)\>

Get a single order by order id from the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#get-an-order

#### Parameters:

| Name      | Type     | Description                   |
| --------- | -------- | ----------------------------- |
| `orderId` | _string_ | ID of previously placed order |

**Returns:** _Promise_<_null_ \| [_PendingOrder_](../../interfaces/order/orderapi.pendingorder.md) \| [_FilledOrder_](../../interfaces/order/orderapi.filledorder.md)\>

Defined in: [order/OrderAPI.ts:163](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/order/OrderAPI.ts#L163)

---

### placeOrder

▸ **placeOrder**(`newOrder`: [_NewOrder_](../../modules/order_orderapi.md#neworder)): _Promise_<[_Order_](../../modules/order_orderapi.md#order)\>

You can place two types of orders: limit and market. Orders can only be placed if your account has sufficient funds. Once an order is placed, your account funds will be put on hold for the duration of the order.

**`see`** https://docs.pro.coinbase.com/#place-a-new-order

#### Parameters:

| Name       | Type                                                   | Description               |
| ---------- | ------------------------------------------------------ | ------------------------- |
| `newOrder` | [_NewOrder_](../../modules/order_orderapi.md#neworder) | Order type and parameters |

**Returns:** _Promise_<[_Order_](../../modules/order_orderapi.md#order)\>

Defined in: [order/OrderAPI.ts:188](https://github.com/bennycode/coinbase-pro-node/blob/ac883aa/src/order/OrderAPI.ts#L188)
