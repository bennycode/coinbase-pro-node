[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["product/CandleBucketUtil"](../modules/_product_candlebucketutil_.md) › [CandleBucketUtil](_product_candlebucketutil_.candlebucketutil.md)

# Class: CandleBucketUtil

## Hierarchy

- **CandleBucketUtil**

## Index

### Methods

- [addUnitISO](_product_candlebucketutil_.candlebucketutil.md#static-addunitiso)
- [addUnitMillis](_product_candlebucketutil_.candlebucketutil.md#static-addunitmillis)
- [expectedBuckets](_product_candlebucketutil_.candlebucketutil.md#static-expectedbuckets)
- [getBucketsInISO](_product_candlebucketutil_.candlebucketutil.md#static-getbucketsiniso)
- [getBucketsInMillis](_product_candlebucketutil_.candlebucketutil.md#static-getbucketsinmillis)
- [getIntervals](_product_candlebucketutil_.candlebucketutil.md#static-getintervals)
- [getMaxPrice](_product_candlebucketutil_.candlebucketutil.md#static-getmaxprice)
- [getMinPrice](_product_candlebucketutil_.candlebucketutil.md#static-getminprice)
- [mapGranularity](_product_candlebucketutil_.candlebucketutil.md#static-mapgranularity)
- [mapInterval](_product_candlebucketutil_.candlebucketutil.md#static-mapinterval)
- [removeUnitISO](_product_candlebucketutil_.candlebucketutil.md#static-removeunitiso)
- [removeUnitMillis](_product_candlebucketutil_.candlebucketutil.md#static-removeunitmillis)

## Methods

### `Static` addUnitISO

▸ **addUnitISO**(`openTime`: number | string, `granularity`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md), `amount`: number): _ISO_8601_MS_UTC_

_Defined in [src/product/CandleBucketUtil.ts:29](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/CandleBucketUtil.ts#L29)_

**Parameters:**

| Name          | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| `openTime`    | number &#124; string                                                    |
| `granularity` | [CandleGranularity](../enums/_product_productapi_.candlegranularity.md) |
| `amount`      | number                                                                  |

**Returns:** _ISO_8601_MS_UTC_

---

### `Static` addUnitMillis

▸ **addUnitMillis**(`openTime`: number | string, `granularity`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md), `amount`: number): _number_

_Defined in [src/product/CandleBucketUtil.ts:23](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/CandleBucketUtil.ts#L23)_

**Parameters:**

| Name          | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| `openTime`    | number &#124; string                                                    |
| `granularity` | [CandleGranularity](../enums/_product_productapi_.candlegranularity.md) |
| `amount`      | number                                                                  |

**Returns:** _number_

---

### `Static` expectedBuckets

▸ **expectedBuckets**(`fromInMillis`: number, `toInMillis`: number, `candleSizeInMillis`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md)): _number_

_Defined in [src/product/CandleBucketUtil.ts:59](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/CandleBucketUtil.ts#L59)_

**Parameters:**

| Name                 | Type                                                                    |
| -------------------- | ----------------------------------------------------------------------- |
| `fromInMillis`       | number                                                                  |
| `toInMillis`         | number                                                                  |
| `candleSizeInMillis` | [CandleGranularity](../enums/_product_productapi_.candlegranularity.md) |

**Returns:** _number_

---

### `Static` getBucketsInISO

▸ **getBucketsInISO**(`bucketsInMillis`: number[]): _[CandleBatchBucket](../interfaces/_product_candlebucketutil_.candlebatchbucket.md)[]_

_Defined in [src/product/CandleBucketUtil.ts:82](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/CandleBucketUtil.ts#L82)_

**Parameters:**

| Name              | Type     |
| ----------------- | -------- |
| `bucketsInMillis` | number[] |

**Returns:** _[CandleBatchBucket](../interfaces/_product_candlebucketutil_.candlebatchbucket.md)[]_

---

### `Static` getBucketsInMillis

▸ **getBucketsInMillis**(`fromInMillis`: number, `toInMillis`: number, `candleSizeInMillis`: number): _number[]_

_Defined in [src/product/CandleBucketUtil.ts:64](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/CandleBucketUtil.ts#L64)_

**Parameters:**

| Name                 | Type   |
| -------------------- | ------ |
| `fromInMillis`       | number |
| `toInMillis`         | number |
| `candleSizeInMillis` | number |

**Returns:** _number[]_

---

### `Static` getIntervals

▸ **getIntervals**(): _number[]_

_Defined in [src/product/CandleBucketUtil.ts:45](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/CandleBucketUtil.ts#L45)_

**Returns:** _number[]_

---

### `Static` getMaxPrice

▸ **getMaxPrice**(`candles`: [Candle](../interfaces/_product_productapi_.candle.md)[], `property`: "close" | "high" | "low" | "open"): _number_

_Defined in [src/product/CandleBucketUtil.ts:18](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/CandleBucketUtil.ts#L18)_

**Parameters:**

| Name       | Type                                                     | Default |
| ---------- | -------------------------------------------------------- | ------- |
| `candles`  | [Candle](../interfaces/_product_productapi_.candle.md)[] | -       |
| `property` | "close" &#124; "high" &#124; "low" &#124; "open"         | "close" |

**Returns:** _number_

---

### `Static` getMinPrice

▸ **getMinPrice**(`candles`: [Candle](../interfaces/_product_productapi_.candle.md)[], `property`: "close" | "high" | "low" | "open"): _number_

_Defined in [src/product/CandleBucketUtil.ts:13](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/CandleBucketUtil.ts#L13)_

**Parameters:**

| Name       | Type                                                     | Default |
| ---------- | -------------------------------------------------------- | ------- |
| `candles`  | [Candle](../interfaces/_product_productapi_.candle.md)[] | -       |
| `property` | "close" &#124; "high" &#124; "low" &#124; "open"         | "close" |

**Returns:** _number_

---

### `Static` mapGranularity

▸ **mapGranularity**(`candleSizeInMillis`: number): _[CandleGranularity](../enums/_product_productapi_.candlegranularity.md)_

_Defined in [src/product/CandleBucketUtil.ts:55](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/CandleBucketUtil.ts#L55)_

**Parameters:**

| Name                 | Type   |
| -------------------- | ------ |
| `candleSizeInMillis` | number |

**Returns:** _[CandleGranularity](../enums/_product_productapi_.candlegranularity.md)_

---

### `Static` mapInterval

▸ **mapInterval**(`intervals`: number[], `interval`: number): _number_

_Defined in [src/product/CandleBucketUtil.ts:49](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/CandleBucketUtil.ts#L49)_

**Parameters:**

| Name        | Type     |
| ----------- | -------- |
| `intervals` | number[] |
| `interval`  | number   |

**Returns:** _number_

---

### `Static` removeUnitISO

▸ **removeUnitISO**(`openTime`: number | string, `granularity`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md), `amount`: number): _ISO_8601_MS_UTC_

_Defined in [src/product/CandleBucketUtil.ts:40](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/CandleBucketUtil.ts#L40)_

**Parameters:**

| Name          | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| `openTime`    | number &#124; string                                                    |
| `granularity` | [CandleGranularity](../enums/_product_productapi_.candlegranularity.md) |
| `amount`      | number                                                                  |

**Returns:** _ISO_8601_MS_UTC_

---

### `Static` removeUnitMillis

▸ **removeUnitMillis**(`openTime`: number | string, `granularity`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md), `amount`: number): _number_

_Defined in [src/product/CandleBucketUtil.ts:34](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/CandleBucketUtil.ts#L34)_

**Parameters:**

| Name          | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| `openTime`    | number &#124; string                                                    |
| `granularity` | [CandleGranularity](../enums/_product_productapi_.candlegranularity.md) |
| `amount`      | number                                                                  |

**Returns:** _number_
