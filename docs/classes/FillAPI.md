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

[fill/FillAPI.ts:30](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/fill/FillAPI.ts#L30)

## Properties

### URL

▪ `Static` `Readonly` **URL**: `Object`

#### Type declaration

| Name    | Type     |
| :------ | :------- |
| `FILLS` | `string` |

#### Defined in

[fill/FillAPI.ts:26](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/fill/FillAPI.ts#L26)

## Methods

### getFillsByOrderId

▸ **getFillsByOrderId**(`orderId`, `pagination?`): `Promise`<`PaginatedData`<[`Fill`](../interfaces/Fill.md)\>\>

Get a list of recent fills for a given Order of the API key's profile.

**`see`** https://docs.pro.coinbase.com/#list-fills

**`see`** https://pro.coinbase.com/orders/filled

#### Parameters

| Name          | Type         | Description                   |
| :------------ | :----------- | :---------------------------- |
| `orderId`     | `string`     | ID of previously placed order |
| `pagination?` | `Pagination` | Pagination field              |

#### Returns

`Promise`<`PaginatedData`<[`Fill`](../interfaces/Fill.md)\>\>

#### Defined in

[fill/FillAPI.ts:40](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/fill/FillAPI.ts#L40)

---

### getFillsByProductId

▸ **getFillsByProductId**(`productId`, `pagination?`): `Promise`<`PaginatedData`<[`Fill`](../interfaces/Fill.md)\>\>

Get a list of recent fills for a given Product of the API key's profile.

**`see`** https://docs.pro.coinbase.com/#list-fills

**`see`** https://pro.coinbase.com/orders/filled

#### Parameters

| Name          | Type         | Description                         |
| :------------ | :----------- | :---------------------------------- |
| `productId`   | `string`     | Representation for base and counter |
| `pagination?` | `Pagination` | Pagination field                    |

#### Returns

`Promise`<`PaginatedData`<[`Fill`](../interfaces/Fill.md)\>\>

#### Defined in

[fill/FillAPI.ts:60](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/fill/FillAPI.ts#L60)
