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

- [URL](_fill_fillapi_.fillapi.md#static-readonly-url)

## Constructors

### constructor

\+ **new FillAPI**(`apiClient`: AxiosInstance): _[FillAPI](_fill_fillapi_.fillapi.md)_

_Defined in [src/fill/FillAPI.ts:28](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fill/FillAPI.ts#L28)_

**Parameters:**

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** _[FillAPI](_fill_fillapi_.fillapi.md)_

## Methods

### getFillsByOrderId

▸ **getFillsByOrderId**(`orderId`: string, `pagination?`: Pagination): _Promise‹PaginatedData‹[Fill](../interfaces/_fill_fillapi_.fill.md)››_

_Defined in [src/fill/FillAPI.ts:40](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fill/FillAPI.ts#L40)_

Get a list of recent fills for a given Order of the API key's profile.

**`see`** https://docs.pro.coinbase.com/#list-fills

**`see`** https://pro.coinbase.com/orders/filled

**Parameters:**

| Name          | Type       | Description                   |
| ------------- | ---------- | ----------------------------- |
| `orderId`     | string     | ID of previously placed order |
| `pagination?` | Pagination | Pagination field              |

**Returns:** _Promise‹PaginatedData‹[Fill](../interfaces/_fill_fillapi_.fill.md)››_

---

### getFillsByProductId

▸ **getFillsByProductId**(`productId`: string, `pagination?`: Pagination): _Promise‹PaginatedData‹[Fill](../interfaces/_fill_fillapi_.fill.md)››_

_Defined in [src/fill/FillAPI.ts:60](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fill/FillAPI.ts#L60)_

Get a list of recent fills for a given Product of the API key's profile.

**`see`** https://docs.pro.coinbase.com/#list-fills

**`see`** https://pro.coinbase.com/orders/filled

**Parameters:**

| Name          | Type       | Description                         |
| ------------- | ---------- | ----------------------------------- |
| `productId`   | string     | Representation for base and counter |
| `pagination?` | Pagination | Pagination field                    |

**Returns:** _Promise‹PaginatedData‹[Fill](../interfaces/_fill_fillapi_.fill.md)››_

## Object literals

### `Static` `Readonly` URL

### ▪ **URL**: _object_

_Defined in [src/fill/FillAPI.ts:26](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fill/FillAPI.ts#L26)_

### FILLS

• **FILLS**: _string_ = `/fills`

_Defined in [src/fill/FillAPI.ts:27](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fill/FillAPI.ts#L27)_
