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

\+ **new OrderAPI**(`apiClient`: AxiosInstance): [*OrderAPI*](order_orderapi.orderapi.md)

#### Parameters:

Name | Type |
:------ | :------ |
`apiClient` | AxiosInstance |

**Returns:** [*OrderAPI*](order_orderapi.orderapi.md)

Defined in: [order/OrderAPI.ts:110](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L110)

## Properties

### URL

▪ `Static` `Readonly` **URL**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`ORDERS` | *string* |

Defined in: [order/OrderAPI.ts:108](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L108)

## Methods

### cancelOpenOrders

▸ **cancelOpenOrders**(`productId?`: *string*): *Promise*<string[]\>

With best effort, cancel all open orders from the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#cancel-all

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`productId?` | *string* | Representation for base and counter   |

**Returns:** *Promise*<string[]\>

A list of ids of the canceled orders

Defined in: [order/OrderAPI.ts:121](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L121)

___

### cancelOrder

▸ **cancelOrder**(`orderId`: *string*, `productId?`: *string*): *Promise*<string\>

Cancel a previously placed order. Order must belong to the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#cancel-an-order

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`orderId` | *string* | ID of the order to cancel   |
`productId?` | *string* | While not required, the request will be more performant if you include the product ID   |

**Returns:** *Promise*<string\>

The ID of the canceled order

Defined in: [order/OrderAPI.ts:137](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L137)

___

### getOrder

▸ **getOrder**(`orderId`: *string*): *Promise*<*null* \| [*Order*](../modules/order_orderapi.md#order)\>

Get a single order by order id from the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#get-an-order

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`orderId` | *string* | ID of previously placed order   |

**Returns:** *Promise*<*null* \| [*Order*](../modules/order_orderapi.md#order)\>

Defined in: [order/OrderAPI.ts:175](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L175)

___

### getOrders

▸ **getOrders**(`query?`: [*OrderListQueryParam*](../interfaces/order_orderapi.orderlistqueryparam.md)): *Promise*<PaginatedData<[*Order*](../modules/order_orderapi.md#order)\>\>

List your orders from the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#list-orders

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`query?` | [*OrderListQueryParam*](../interfaces/order_orderapi.orderlistqueryparam.md) | Available query parameters (Pagination, Product ID and/or Order Status)   |

**Returns:** *Promise*<PaginatedData<[*Order*](../modules/order_orderapi.md#order)\>\>

Defined in: [order/OrderAPI.ts:151](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L151)

___

### placeOrder

▸ **placeOrder**(`newOrder`: [*NewOrder*](../modules/order_orderapi.md#neworder)): *Promise*<[*Order*](../modules/order_orderapi.md#order)\>

You can place two types of orders: limit and market. Orders can only be placed if your account has sufficient
funds. Once an order is placed, your account funds will be put on hold for the duration of the order.

**`see`** https://docs.pro.coinbase.com/#place-a-new-order

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`newOrder` | [*NewOrder*](../modules/order_orderapi.md#neworder) | Order type and parameters   |

**Returns:** *Promise*<[*Order*](../modules/order_orderapi.md#order)\>

Defined in: [order/OrderAPI.ts:200](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L200)
