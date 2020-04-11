[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["product/CandleBucketUtil"](../modules/_product_candlebucketutil_.md) › [CandleBucketUtil](_product_candlebucketutil_.candlebucketutil.md)

# Class: CandleBucketUtil

## Hierarchy

- **CandleBucketUtil**

## Index

### Methods

- [expectedBuckets](_product_candlebucketutil_.candlebucketutil.md#static-expectedbuckets)
- [getBucketsInISO](_product_candlebucketutil_.candlebucketutil.md#static-getbucketsiniso)
- [getBucketsInMillis](_product_candlebucketutil_.candlebucketutil.md#static-getbucketsinmillis)

## Methods

### `Static` expectedBuckets

▸ **expectedBuckets**(`fromInMillis`: number, `toInMillis`: number, `candleSizeInMillis`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md)): _number_

_Defined in [src/product/CandleBucketUtil.ts:13](https://github.com/bennyn/coinbase-pro-node/blob/a33aec9/src/product/CandleBucketUtil.ts#L13)_

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

_Defined in [src/product/CandleBucketUtil.ts:36](https://github.com/bennyn/coinbase-pro-node/blob/a33aec9/src/product/CandleBucketUtil.ts#L36)_

**Parameters:**

| Name              | Type     |
| ----------------- | -------- |
| `bucketsInMillis` | number[] |

**Returns:** _[CandleBatchBucket](../interfaces/_product_candlebucketutil_.candlebatchbucket.md)[]_

---

### `Static` getBucketsInMillis

▸ **getBucketsInMillis**(`fromInMillis`: number, `toInMillis`: number, `candleSizeInMillis`: number): _number[]_

_Defined in [src/product/CandleBucketUtil.ts:18](https://github.com/bennyn/coinbase-pro-node/blob/a33aec9/src/product/CandleBucketUtil.ts#L18)_

**Parameters:**

| Name                 | Type   |
| -------------------- | ------ |
| `fromInMillis`       | number |
| `toInMillis`         | number |
| `candleSizeInMillis` | number |

**Returns:** _number[]_
