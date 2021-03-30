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

\+ **new FillAPI**(`apiClient`: AxiosInstance): [*FillAPI*](fillapi.md)

#### Parameters:

Name | Type |
:------ | :------ |
`apiClient` | AxiosInstance |

**Returns:** [*FillAPI*](fillapi.md)

Defined in: [fill/FillAPI.ts:28](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/fill/FillAPI.ts#L28)

## Properties

### URL

▪ `Static` `Readonly` **URL**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`FILLS` | *string* |

Defined in: [fill/FillAPI.ts:26](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/fill/FillAPI.ts#L26)

## Methods

### getFillsByOrderId

▸ **getFillsByOrderId**(`orderId`: *string*, `pagination?`: [*Pagination*](../interfaces/pagination.md)): *Promise*<[*PaginatedData*](../interfaces/paginateddata.md)<[*Fill*](../interfaces/fill.md)\>\>

Get a list of recent fills for a given Order of the API key's profile.

**`see`** https://docs.pro.coinbase.com/#list-fills

**`see`** https://pro.coinbase.com/orders/filled

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`orderId` | *string* | ID of previously placed order   |
`pagination?` | [*Pagination*](../interfaces/pagination.md) | Pagination field   |

**Returns:** *Promise*<[*PaginatedData*](../interfaces/paginateddata.md)<[*Fill*](../interfaces/fill.md)\>\>

Defined in: [fill/FillAPI.ts:40](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/fill/FillAPI.ts#L40)

___

### getFillsByProductId

▸ **getFillsByProductId**(`productId`: *string*, `pagination?`: [*Pagination*](../interfaces/pagination.md)): *Promise*<[*PaginatedData*](../interfaces/paginateddata.md)<[*Fill*](../interfaces/fill.md)\>\>

Get a list of recent fills for a given Product of the API key's profile.

**`see`** https://docs.pro.coinbase.com/#list-fills

**`see`** https://pro.coinbase.com/orders/filled

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`productId` | *string* | Representation for base and counter   |
`pagination?` | [*Pagination*](../interfaces/pagination.md) | Pagination field   |

**Returns:** *Promise*<[*PaginatedData*](../interfaces/paginateddata.md)<[*Fill*](../interfaces/fill.md)\>\>

Defined in: [fill/FillAPI.ts:60](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/fill/FillAPI.ts#L60)
