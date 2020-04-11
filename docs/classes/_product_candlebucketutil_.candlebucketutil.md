[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["product/CandleBucketUtil"](../modules/_product_candlebucketutil_.md) › [CandleBucketUtil](_product_candlebucketutil_.candlebucketutil.md)

# Class: CandleBucketUtil

## Hierarchy

- **CandleBucketUtil**

## Index

### Methods

- [expectedBuckets](_product_candlebucketutil_.candlebucketutil.md#static-expectedbuckets)
- [getBucketsInISO](_product_candlebucketutil_.candlebucketutil.md#static-getbucketsiniso)
- [getBucketsInMillis](_product_candlebucketutil_.candlebucketutil.md#static-getbucketsinmillis)
- [getIntervals](_product_candlebucketutil_.candlebucketutil.md#static-getintervals)
- [mapGranularity](_product_candlebucketutil_.candlebucketutil.md#static-mapgranularity)
- [mapInterval](_product_candlebucketutil_.candlebucketutil.md#static-mapinterval)

## Methods

### `Static` expectedBuckets

▸ **expectedBuckets**(`fromInMillis`: number, `toInMillis`: number, `candleSizeInMillis`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md)): _number_

_Defined in [src/product/CandleBucketUtil.ts:27](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/product/CandleBucketUtil.ts#L27)_

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

_Defined in [src/product/CandleBucketUtil.ts:50](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/product/CandleBucketUtil.ts#L50)_

**Parameters:**

| Name              | Type     |
| ----------------- | -------- |
| `bucketsInMillis` | number[] |

**Returns:** _[CandleBatchBucket](../interfaces/_product_candlebucketutil_.candlebatchbucket.md)[]_

---

### `Static` getBucketsInMillis

▸ **getBucketsInMillis**(`fromInMillis`: number, `toInMillis`: number, `candleSizeInMillis`: number): _number[]_

_Defined in [src/product/CandleBucketUtil.ts:32](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/product/CandleBucketUtil.ts#L32)_

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

_Defined in [src/product/CandleBucketUtil.ts:13](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/product/CandleBucketUtil.ts#L13)_

**Returns:** _number[]_

---

### `Static` mapGranularity

▸ **mapGranularity**(`candleSizeInMillis`: number): _[CandleGranularity](../enums/_product_productapi_.candlegranularity.md)_

_Defined in [src/product/CandleBucketUtil.ts:23](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/product/CandleBucketUtil.ts#L23)_

**Parameters:**

| Name                 | Type   |
| -------------------- | ------ |
| `candleSizeInMillis` | number |

**Returns:** _[CandleGranularity](../enums/_product_productapi_.candlegranularity.md)_

---

### `Static` mapInterval

▸ **mapInterval**(`intervals`: number[], `interval`: number): _number_

_Defined in [src/product/CandleBucketUtil.ts:17](https://github.com/bennyn/coinbase-pro-node/blob/1656a9e/src/product/CandleBucketUtil.ts#L17)_

**Parameters:**

| Name        | Type     |
| ----------- | -------- |
| `intervals` | number[] |
| `interval`  | number   |

**Returns:** _number_
