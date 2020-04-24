[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["fill/FillAPI"](../modules/_fill_fillapi_.md) › [FillAPI](_fill_fillapi_.fillapi.md)

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

- [URL](_fill_fillapi_.fillapi.md#static-url)

## Constructors

### constructor

\+ **new FillAPI**(`apiClient`: AxiosInstance): _[FillAPI](_fill_fillapi_.fillapi.md)_

_Defined in [src/fill/FillAPI.ts:28](https://github.com/bennyn/coinbase-pro-node/blob/98aacfd/src/fill/FillAPI.ts#L28)_

**Parameters:**

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** _[FillAPI](_fill_fillapi_.fillapi.md)_

## Methods

### getFillsByOrderId

▸ **getFillsByOrderId**(`orderId`: string, `pagination?`: Pagination): _Promise‹object›_

_Defined in [src/fill/FillAPI.ts:39](https://github.com/bennyn/coinbase-pro-node/blob/98aacfd/src/fill/FillAPI.ts#L39)_

Get a list of recent fills for a given Order of the API key's profile.

**`see`** https://docs.pro.coinbase.com/#list-fills

**`see`** https://pro.coinbase.com/orders/filled

**Parameters:**

| Name          | Type       |
| ------------- | ---------- |
| `orderId`     | string     |
| `pagination?` | Pagination |

**Returns:** _Promise‹object›_

---

### getFillsByProductId

▸ **getFillsByProductId**(`productId`: string, `pagination?`: Pagination): _Promise‹object›_

_Defined in [src/fill/FillAPI.ts:62](https://github.com/bennyn/coinbase-pro-node/blob/98aacfd/src/fill/FillAPI.ts#L62)_

Get a list of recent fills for a given Product of the API key's profile.

**`see`** https://docs.pro.coinbase.com/#list-fills

**`see`** https://pro.coinbase.com/orders/filled

**Parameters:**

| Name          | Type       |
| ------------- | ---------- |
| `productId`   | string     |
| `pagination?` | Pagination |

**Returns:** _Promise‹object›_

## Object literals

### `Static` URL

### ▪ **URL**: _object_

_Defined in [src/fill/FillAPI.ts:26](https://github.com/bennyn/coinbase-pro-node/blob/98aacfd/src/fill/FillAPI.ts#L26)_

### FILLS

• **FILLS**: _string_ = `/fills`

_Defined in [src/fill/FillAPI.ts:27](https://github.com/bennyn/coinbase-pro-node/blob/98aacfd/src/fill/FillAPI.ts#L27)_
