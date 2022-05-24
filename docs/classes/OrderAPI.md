[coinbase-pro-node](../README.md) / [Exports](../modules.md) / OrderAPI

# Class: OrderAPI

## Table of contents

### Constructors

- [constructor](OrderAPI.md#constructor)

### Properties

- [URL](OrderAPI.md#url)

### Methods

- [cancelOpenOrders](OrderAPI.md#cancelopenorders)
- [cancelOrder](OrderAPI.md#cancelorder)
- [getOrder](OrderAPI.md#getorder)
- [getOrders](OrderAPI.md#getorders)
- [placeOrder](OrderAPI.md#placeorder)

## Constructors

### constructor

• **new OrderAPI**(`apiClient`)

#### Parameters

| Name        | Type            |
| :---------- | :-------------- |
| `apiClient` | `AxiosInstance` |

#### Defined in

[order/OrderAPI.ts:113](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L113)

## Properties

### URL

▪ `Static` `Readonly` **URL**: `Object`

#### Type declaration

| Name     | Type     |
| :------- | :------- |
| `ORDERS` | `string` |

#### Defined in

[order/OrderAPI.ts:109](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L109)

## Methods

### cancelOpenOrders

▸ **cancelOpenOrders**(`productId?`): `Promise`<`string`[]\>

With best effort, cancel all open orders from the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#cancel-all

#### Parameters

| Name         | Type     | Description                         |
| :----------- | :------- | :---------------------------------- |
| `productId?` | `string` | Representation for base and counter |

#### Returns

`Promise`<`string`[]\>

A list of ids of the canceled orders

#### Defined in

[order/OrderAPI.ts:122](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L122)

---

### cancelOrder

▸ **cancelOrder**(`orderId`, `productId?`): `Promise`<`string`\>

Cancel a previously placed order. Order must belong to the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#cancel-an-order

#### Parameters

| Name         | Type     | Description                                                                           |
| :----------- | :------- | :------------------------------------------------------------------------------------ |
| `orderId`    | `string` | ID of the order to cancel                                                             |
| `productId?` | `string` | While not required, the request will be more performant if you include the product ID |

#### Returns

`Promise`<`string`\>

The ID of the canceled order

#### Defined in

[order/OrderAPI.ts:138](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L138)

---

### getOrder

▸ **getOrder**(`orderId`): `Promise`<`null` \| [`Order`](../modules.md#order)\>

Get a single order by order id from the profile that the API key belongs to.

**`see`** https://docs.pro.coinbase.com/#get-an-order

#### Parameters

| Name      | Type     | Description                   |
| :-------- | :------- | :---------------------------- |
| `orderId` | `string` | ID of previously placed order |

#### Returns

`Promise`<`null` \| [`Order`](../modules.md#order)\>

#### Defined in

[order/OrderAPI.ts:176](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L176)

---

### getOrders

▸ **getOrders**(`query?`): `Promise`<`PaginatedData`<[`Order`](../modules.md#order)\>\>

List your orders from the profile that the API key belongs to. Only open or un-settled orders are returned. As soon as an order is no longer open and settled, it will no longer appear in the default request.

**`note`** Depending on your activity, fetching all data from this endpoint can take very long (measured already 25 seconds!)

**`see`** https://docs.pro.coinbase.com/#list-orders

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `query?` | [`OrderListQueryParam`](../interfaces/OrderListQueryParam.md) | Available query parameters (Pagination, Product ID and/or Order Status) |

#### Returns

`Promise`<`PaginatedData`<[`Order`](../modules.md#order)\>\>

#### Defined in

[order/OrderAPI.ts:155](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L155)

---

### placeOrder

▸ **placeOrder**(`newOrder`): `Promise`<[`Order`](../modules.md#order)\>

You can place two types of orders: limit and market. Orders can only be placed if your account has sufficient funds. Once an order is placed, your account funds will be put on hold for the duration of the order.

**`see`** https://docs.pro.coinbase.com/#place-a-new-order

#### Parameters

| Name       | Type                                 | Description               |
| :--------- | :----------------------------------- | :------------------------ |
| `newOrder` | [`NewOrder`](../modules.md#neworder) | Order type and parameters |

#### Returns

`Promise`<[`Order`](../modules.md#order)\>

#### Defined in

[order/OrderAPI.ts:201](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L201)
