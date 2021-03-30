[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [fill/FillAPI](../modules/fill_fillapi.md) / FillAPI

# Class: FillAPI

[fill/FillAPI](../modules/fill_fillapi.md).FillAPI

## Table of contents

### Constructors

- [constructor](fill_fillapi.fillapi.md#constructor)

### Properties

- [URL](fill_fillapi.fillapi.md#url)

### Methods

- [getFillsByOrderId](fill_fillapi.fillapi.md#getfillsbyorderid)
- [getFillsByProductId](fill_fillapi.fillapi.md#getfillsbyproductid)

## Constructors

### constructor

\+ **new FillAPI**(`apiClient`: AxiosInstance): [*FillAPI*](fill_fillapi.fillapi.md)

#### Parameters:

Name | Type |
:------ | :------ |
`apiClient` | AxiosInstance |

**Returns:** [*FillAPI*](fill_fillapi.fillapi.md)

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

▸ **getFillsByOrderId**(`orderId`: *string*, `pagination?`: Pagination): *Promise*<PaginatedData<[*Fill*](../interfaces/fill_fillapi.fill.md)\>\>

Get a list of recent fills for a given Order of the API key's profile.

**`see`** https://docs.pro.coinbase.com/#list-fills

**`see`** https://pro.coinbase.com/orders/filled

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`orderId` | *string* | ID of previously placed order   |
`pagination?` | Pagination | Pagination field   |

**Returns:** *Promise*<PaginatedData<[*Fill*](../interfaces/fill_fillapi.fill.md)\>\>

Defined in: [fill/FillAPI.ts:40](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/fill/FillAPI.ts#L40)

___

### getFillsByProductId

▸ **getFillsByProductId**(`productId`: *string*, `pagination?`: Pagination): *Promise*<PaginatedData<[*Fill*](../interfaces/fill_fillapi.fill.md)\>\>

Get a list of recent fills for a given Product of the API key's profile.

**`see`** https://docs.pro.coinbase.com/#list-fills

**`see`** https://pro.coinbase.com/orders/filled

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`productId` | *string* | Representation for base and counter   |
`pagination?` | Pagination | Pagination field   |

**Returns:** *Promise*<PaginatedData<[*Fill*](../interfaces/fill_fillapi.fill.md)\>\>

Defined in: [fill/FillAPI.ts:60](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/fill/FillAPI.ts#L60)
