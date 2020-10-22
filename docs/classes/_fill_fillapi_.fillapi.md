**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["fill/FillAPI"](../modules/_fill_fillapi_.md) / FillAPI

# Class: FillAPI

## Hierarchy

- **FillAPI**

## Index

### Constructors

- [constructor](_fill_fillapi_.fillapi.md#constructor)

### Methods

- [getFillsByOrderId](_fill_fillapi_.fillapi.md#getfillsbyorderid)
- [getFillsByProductId](_fill_fillapi_.fillapi.md#getfillsbyproductid)

### Object literals

- [URL](_fill_fillapi_.fillapi.md#url)

## Constructors

### constructor

\+ **new FillAPI**(`apiClient`: AxiosInstance): [FillAPI](_fill_fillapi_.fillapi.md)

_Defined in [src/fill/FillAPI.ts:28](https://github.com/bennyn/coinbase-pro-node/blob/26bf4d8/src/fill/FillAPI.ts#L28)_

#### Parameters:

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** [FillAPI](_fill_fillapi_.fillapi.md)

## Methods

### getFillsByOrderId

▸ **getFillsByOrderId**(`orderId`: string, `pagination?`: Pagination): Promise\<PaginatedData\<[Fill](../interfaces/_fill_fillapi_.fill.md)>>

_Defined in [src/fill/FillAPI.ts:40](https://github.com/bennyn/coinbase-pro-node/blob/26bf4d8/src/fill/FillAPI.ts#L40)_

Get a list of recent fills for a given Order of the API key's profile.

**`see`** https://docs.pro.coinbase.com/#list-fills

**`see`** https://pro.coinbase.com/orders/filled

#### Parameters:

| Name          | Type       | Description                   |
| ------------- | ---------- | ----------------------------- |
| `orderId`     | string     | ID of previously placed order |
| `pagination?` | Pagination | Pagination field              |

**Returns:** Promise\<PaginatedData\<[Fill](../interfaces/_fill_fillapi_.fill.md)>>

---

### getFillsByProductId

▸ **getFillsByProductId**(`productId`: string, `pagination?`: Pagination): Promise\<PaginatedData\<[Fill](../interfaces/_fill_fillapi_.fill.md)>>

_Defined in [src/fill/FillAPI.ts:60](https://github.com/bennyn/coinbase-pro-node/blob/26bf4d8/src/fill/FillAPI.ts#L60)_

Get a list of recent fills for a given Product of the API key's profile.

**`see`** https://docs.pro.coinbase.com/#list-fills

**`see`** https://pro.coinbase.com/orders/filled

#### Parameters:

| Name          | Type       | Description                         |
| ------------- | ---------- | ----------------------------------- |
| `productId`   | string     | Representation for base and counter |
| `pagination?` | Pagination | Pagination field                    |

**Returns:** Promise\<PaginatedData\<[Fill](../interfaces/_fill_fillapi_.fill.md)>>

## Object literals

### URL

▪ `Static` `Readonly` **URL**: object

_Defined in [src/fill/FillAPI.ts:26](https://github.com/bennyn/coinbase-pro-node/blob/26bf4d8/src/fill/FillAPI.ts#L26)_

#### Properties:

| Name    | Type   | Value      |
| ------- | ------ | ---------- |
| `FILLS` | string | \`/fills\` |
