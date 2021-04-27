[coinbase-pro-node](../README.md) / [Exports](../modules.md) / FillAPI

# Class: FillAPI

## Table of contents

### Constructors

- [constructor](fillapi.md#constructor)

### Properties

- [URL](fillapi.md#url)

### Methods

- [getFillsByOrderId](fillapi.md#getfillsbyorderid)
- [getFillsByProductId](fillapi.md#getfillsbyproductid)

## Constructors

### constructor

\+ **new FillAPI**(`apiClient`: AxiosInstance): [_FillAPI_](fillapi.md)

#### Parameters:

| Name        | Type          |
| :---------- | :------------ |
| `apiClient` | AxiosInstance |

**Returns:** [_FillAPI_](fillapi.md)

Defined in: [fill/FillAPI.ts:28](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/fill/FillAPI.ts#L28)

## Properties

### URL

▪ `Static` `Readonly` **URL**: _object_

#### Type declaration:

| Name    | Type     |
| :------ | :------- |
| `FILLS` | _string_ |

Defined in: [fill/FillAPI.ts:26](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/fill/FillAPI.ts#L26)

## Methods

### getFillsByOrderId

▸ **getFillsByOrderId**(`orderId`: _string_, `pagination?`: [_Pagination_](../interfaces/pagination.md)): _Promise_<[_PaginatedData_](../interfaces/paginateddata.md)<[_Fill_](../interfaces/fill.md)\>\>

Get a list of recent fills for a given Order of the API key's profile.

**`see`** https://docs.pro.coinbase.com/#list-fills

**`see`** https://pro.coinbase.com/orders/filled

#### Parameters:

| Name          | Type                                        | Description                   |
| :------------ | :------------------------------------------ | :---------------------------- |
| `orderId`     | _string_                                    | ID of previously placed order |
| `pagination?` | [_Pagination_](../interfaces/pagination.md) | Pagination field              |

**Returns:** _Promise_<[_PaginatedData_](../interfaces/paginateddata.md)<[_Fill_](../interfaces/fill.md)\>\>

Defined in: [fill/FillAPI.ts:40](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/fill/FillAPI.ts#L40)

---

### getFillsByProductId

▸ **getFillsByProductId**(`productId`: _string_, `pagination?`: [_Pagination_](../interfaces/pagination.md)): _Promise_<[_PaginatedData_](../interfaces/paginateddata.md)<[_Fill_](../interfaces/fill.md)\>\>

Get a list of recent fills for a given Product of the API key's profile.

**`see`** https://docs.pro.coinbase.com/#list-fills

**`see`** https://pro.coinbase.com/orders/filled

#### Parameters:

| Name          | Type                                        | Description                         |
| :------------ | :------------------------------------------ | :---------------------------------- |
| `productId`   | _string_                                    | Representation for base and counter |
| `pagination?` | [_Pagination_](../interfaces/pagination.md) | Pagination field                    |

**Returns:** _Promise_<[_PaginatedData_](../interfaces/paginateddata.md)<[_Fill_](../interfaces/fill.md)\>\>

Defined in: [fill/FillAPI.ts:60](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/fill/FillAPI.ts#L60)
