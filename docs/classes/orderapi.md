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

\+ **new OrderAPI**(`apiClient`: AxiosInstance): [*OrderAPI*](orderapi.md)

#### Parameters:

Name | Type |
:------ | :------ |
`apiClient` | AxiosInstance |

**Returns:** [*OrderAPI*](orderapi.md)

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

▸ **getOrder**(`orderId`: *string*): *Promise*<*null* \| [*Order*](../modules.md#order)\>

Get a single order by order id from the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#get-an-order

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`orderId` | *string* | ID of previously placed order   |

**Returns:** *Promise*<*null* \| [*Order*](../modules.md#order)\>

Defined in: [order/OrderAPI.ts:175](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L175)

___

### getOrders

▸ **getOrders**(`query?`: [*OrderListQueryParam*](../interfaces/orderlistqueryparam.md)): *Promise*<[*PaginatedData*](../interfaces/paginateddata.md)<[*Order*](../modules.md#order)\>\>

List your orders from the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#list-orders

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`query?` | [*OrderListQueryParam*](../interfaces/orderlistqueryparam.md) | Available query parameters (Pagination, Product ID and/or Order Status)   |

**Returns:** *Promise*<[*PaginatedData*](../interfaces/paginateddata.md)<[*Order*](../modules.md#order)\>\>

Defined in: [order/OrderAPI.ts:151](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L151)

___

### placeOrder

▸ **placeOrder**(`newOrder`: [*NewOrder*](../modules.md#neworder)): *Promise*<[*Order*](../modules.md#order)\>

You can place two types of orders: limit and market. Orders can only be placed if your account has sufficient
funds. Once an order is placed, your account funds will be put on hold for the duration of the order.

**`see`** https://docs.pro.coinbase.com/#place-a-new-order

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`newOrder` | [*NewOrder*](../modules.md#neworder) | Order type and parameters   |

**Returns:** *Promise*<[*Order*](../modules.md#order)\>

Defined in: [order/OrderAPI.ts:200](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L200)
