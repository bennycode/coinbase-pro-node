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

_Defined in [src/fill/FillAPI.ts:28](https://github.com/bennyn/coinbase-pro-node/blob/a33aec9/src/fill/FillAPI.ts#L28)_

**Parameters:**

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** _[FillAPI](_fill_fillapi_.fillapi.md)_

## Methods

### getFillsByOrderId

▸ **getFillsByOrderId**(`orderId`: string): _Promise‹[Fill](../interfaces/_fill_fillapi_.fill.md)[]›_

_Defined in [src/fill/FillAPI.ts:34](https://github.com/bennyn/coinbase-pro-node/blob/a33aec9/src/fill/FillAPI.ts#L34)_

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `orderId` | string |

**Returns:** _Promise‹[Fill](../interfaces/_fill_fillapi_.fill.md)[]›_

---

### getFillsByProductId

▸ **getFillsByProductId**(`productId`: string): _Promise‹[Fill](../interfaces/_fill_fillapi_.fill.md)[]›_

_Defined in [src/fill/FillAPI.ts:46](https://github.com/bennyn/coinbase-pro-node/blob/a33aec9/src/fill/FillAPI.ts#L46)_

**Parameters:**

| Name        | Type   |
| ----------- | ------ |
| `productId` | string |

**Returns:** _Promise‹[Fill](../interfaces/_fill_fillapi_.fill.md)[]›_

## Object literals

### `Static` URL

### ▪ **URL**: _object_

_Defined in [src/fill/FillAPI.ts:26](https://github.com/bennyn/coinbase-pro-node/blob/a33aec9/src/fill/FillAPI.ts#L26)_

### FILLS

• **FILLS**: _string_ = `/fills`

_Defined in [src/fill/FillAPI.ts:27](https://github.com/bennyn/coinbase-pro-node/blob/a33aec9/src/fill/FillAPI.ts#L27)_
