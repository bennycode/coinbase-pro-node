[coinbase-pro-node](../README.md) / [Exports](../modules.md) / FillAPI

# Class: FillAPI

## Table of contents

### Constructors

- [constructor](FillAPI.md#constructor)

### Properties

- [URL](FillAPI.md#url)

### Methods

- [getFillsByOrderId](FillAPI.md#getfillsbyorderid)
- [getFillsByProductId](FillAPI.md#getfillsbyproductid)

## Constructors

### constructor

• **new FillAPI**(`apiClient`)

#### Parameters

| Name        | Type            |
| :---------- | :-------------- |
| `apiClient` | `AxiosInstance` |

#### Defined in

[fill/FillAPI.ts:30](https://github.com/bennycode/coinbase-pro-node/blob/dacd532/src/fill/FillAPI.ts#L30)

## Properties

### URL

▪ `Static` `Readonly` **URL**: `Object`

#### Type declaration

| Name    | Type     |
| :------ | :------- |
| `FILLS` | `string` |

#### Defined in

[fill/FillAPI.ts:26](https://github.com/bennycode/coinbase-pro-node/blob/dacd532/src/fill/FillAPI.ts#L26)

## Methods

### getFillsByOrderId

▸ **getFillsByOrderId**(`orderId`, `pagination?`): `Promise`<`PaginatedData`<[`Fill`](../interfaces/Fill.md)\>\>

Get a list of recent fills for a given Order of the API key's profile.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getfills

#### Parameters

| Name          | Type         | Description                   |
| :------------ | :----------- | :---------------------------- |
| `orderId`     | `string`     | ID of previously placed order |
| `pagination?` | `Pagination` | Pagination field              |

#### Returns

`Promise`<`PaginatedData`<[`Fill`](../interfaces/Fill.md)\>\>

#### Defined in

[fill/FillAPI.ts:39](https://github.com/bennycode/coinbase-pro-node/blob/dacd532/src/fill/FillAPI.ts#L39)

---

### getFillsByProductId

▸ **getFillsByProductId**(`productId`, `pagination?`): `Promise`<`PaginatedData`<[`Fill`](../interfaces/Fill.md)\>\>

Get a list of recent fills for a given Product of the API key's profile.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getfills

#### Parameters

| Name          | Type         | Description                         |
| :------------ | :----------- | :---------------------------------- |
| `productId`   | `string`     | Representation for base and counter |
| `pagination?` | `Pagination` | Pagination field                    |

#### Returns

`Promise`<`PaginatedData`<[`Fill`](../interfaces/Fill.md)\>\>

#### Defined in

[fill/FillAPI.ts:58](https://github.com/bennycode/coinbase-pro-node/blob/dacd532/src/fill/FillAPI.ts#L58)
