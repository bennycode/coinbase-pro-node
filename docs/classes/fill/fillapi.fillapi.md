[coinbase-pro-node](../../README.md) / [Exports](../../modules.md) / [fill/FillAPI](../../modules/fill_fillapi.md) / FillAPI

# Class: FillAPI

[fill/FillAPI](../../modules/fill_fillapi.md).FillAPI

## Hierarchy

- **FillAPI**

## Table of contents

### Constructors

- [constructor](fillapi.fillapi.md#constructor)

### Properties

- [URL](fillapi.fillapi.md#url)

### Methods

- [getFillsByOrderId](fillapi.fillapi.md#getfillsbyorderid)
- [getFillsByProductId](fillapi.fillapi.md#getfillsbyproductid)

## Constructors

### constructor

\+ **new FillAPI**(`apiClient`: AxiosInstance): [_FillAPI_](fillapi.fillapi.md)

#### Parameters:

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** [_FillAPI_](fillapi.fillapi.md)

Defined in: [fill/FillAPI.ts:28](https://github.com/bennycode/coinbase-pro-node/blob/aa07e6d/src/fill/FillAPI.ts#L28)

## Properties

### URL

▪ `Readonly` `Static` **URL**: { `FILLS`: _string_ }

#### Type declaration:

| Name    | Type     |
| ------- | -------- |
| `FILLS` | _string_ |

Defined in: [fill/FillAPI.ts:26](https://github.com/bennycode/coinbase-pro-node/blob/aa07e6d/src/fill/FillAPI.ts#L26)

## Methods

### getFillsByOrderId

▸ **getFillsByOrderId**(`orderId`: _string_, `pagination?`: Pagination): _Promise_<_PaginatedData_<[_Fill_](../../interfaces/fill/fillapi.fill.md)\>\>

Get a list of recent fills for a given Order of the API key's profile.

**`see`** https://docs.pro.coinbase.com/#list-fills

**`see`** https://pro.coinbase.com/orders/filled

#### Parameters:

| Name          | Type       | Description                   |
| ------------- | ---------- | ----------------------------- |
| `orderId`     | _string_   | ID of previously placed order |
| `pagination?` | Pagination | Pagination field              |

**Returns:** _Promise_<_PaginatedData_<[_Fill_](../../interfaces/fill/fillapi.fill.md)\>\>

Defined in: [fill/FillAPI.ts:40](https://github.com/bennycode/coinbase-pro-node/blob/aa07e6d/src/fill/FillAPI.ts#L40)

---

### getFillsByProductId

▸ **getFillsByProductId**(`productId`: _string_, `pagination?`: Pagination): _Promise_<_PaginatedData_<[_Fill_](../../interfaces/fill/fillapi.fill.md)\>\>

Get a list of recent fills for a given Product of the API key's profile.

**`see`** https://docs.pro.coinbase.com/#list-fills

**`see`** https://pro.coinbase.com/orders/filled

#### Parameters:

| Name          | Type       | Description                         |
| ------------- | ---------- | ----------------------------------- |
| `productId`   | _string_   | Representation for base and counter |
| `pagination?` | Pagination | Pagination field                    |

**Returns:** _Promise_<_PaginatedData_<[_Fill_](../../interfaces/fill/fillapi.fill.md)\>\>

Defined in: [fill/FillAPI.ts:60](https://github.com/bennycode/coinbase-pro-node/blob/aa07e6d/src/fill/FillAPI.ts#L60)
