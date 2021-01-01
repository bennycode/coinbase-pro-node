**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["product/CandleBucketUtil"](../modules/_product_candlebucketutil_.md) / CandleBucketUtil

# Class: CandleBucketUtil

## Hierarchy

- **CandleBucketUtil**

## Index

### Methods

- [addUnitISO](_product_candlebucketutil_.candlebucketutil.md#addunitiso)
- [addUnitMillis](_product_candlebucketutil_.candlebucketutil.md#addunitmillis)
- [expectedBuckets](_product_candlebucketutil_.candlebucketutil.md#expectedbuckets)
- [getBucketsInISO](_product_candlebucketutil_.candlebucketutil.md#getbucketsiniso)
- [getBucketsInMillis](_product_candlebucketutil_.candlebucketutil.md#getbucketsinmillis)
- [getIntervals](_product_candlebucketutil_.candlebucketutil.md#getintervals)
- [getMaxPrice](_product_candlebucketutil_.candlebucketutil.md#getmaxprice)
- [getMinPrice](_product_candlebucketutil_.candlebucketutil.md#getminprice)
- [mapGranularity](_product_candlebucketutil_.candlebucketutil.md#mapgranularity)
- [mapInterval](_product_candlebucketutil_.candlebucketutil.md#mapinterval)
- [removeUnitISO](_product_candlebucketutil_.candlebucketutil.md#removeunitiso)
- [removeUnitMillis](_product_candlebucketutil_.candlebucketutil.md#removeunitmillis)

## Methods

### addUnitISO

▸ `Static`**addUnitISO**(`openTime`: number \| string, `granularityInSeconds`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md), `amount`: number): ISO_8601_MS_UTC

_Defined in [src/product/CandleBucketUtil.ts:29](https://github.com/bennycode/coinbase-pro-node/blob/e6678df/src/product/CandleBucketUtil.ts#L29)_

#### Parameters:

| Name                   | Type                                                                    |
| ---------------------- | ----------------------------------------------------------------------- |
| `openTime`             | number \| string                                                        |
| `granularityInSeconds` | [CandleGranularity](../enums/_product_productapi_.candlegranularity.md) |
| `amount`               | number                                                                  |

**Returns:** ISO_8601_MS_UTC

---

### addUnitMillis

▸ `Static`**addUnitMillis**(`openTime`: number \| string, `granularityInSeconds`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md), `amount`: number): number

_Defined in [src/product/CandleBucketUtil.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/e6678df/src/product/CandleBucketUtil.ts#L23)_

#### Parameters:

| Name                   | Type                                                                    |
| ---------------------- | ----------------------------------------------------------------------- |
| `openTime`             | number \| string                                                        |
| `granularityInSeconds` | [CandleGranularity](../enums/_product_productapi_.candlegranularity.md) |
| `amount`               | number                                                                  |

**Returns:** number

---

### expectedBuckets

▸ `Static`**expectedBuckets**(`fromInMillis`: number, `toInMillis`: number, `candleSizeInMillis`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md)): number

_Defined in [src/product/CandleBucketUtil.ts:67](https://github.com/bennycode/coinbase-pro-node/blob/e6678df/src/product/CandleBucketUtil.ts#L67)_

#### Parameters:

| Name                 | Type                                                                    |
| -------------------- | ----------------------------------------------------------------------- |
| `fromInMillis`       | number                                                                  |
| `toInMillis`         | number                                                                  |
| `candleSizeInMillis` | [CandleGranularity](../enums/_product_productapi_.candlegranularity.md) |

**Returns:** number

---

### getBucketsInISO

▸ `Static`**getBucketsInISO**(`bucketsInMillis`: number[]): [CandleBatchBucket](../interfaces/_product_candlebucketutil_.candlebatchbucket.md)[]

_Defined in [src/product/CandleBucketUtil.ts:90](https://github.com/bennycode/coinbase-pro-node/blob/e6678df/src/product/CandleBucketUtil.ts#L90)_

#### Parameters:

| Name              | Type     |
| ----------------- | -------- |
| `bucketsInMillis` | number[] |

**Returns:** [CandleBatchBucket](../interfaces/_product_candlebucketutil_.candlebatchbucket.md)[]

---

### getBucketsInMillis

▸ `Static`**getBucketsInMillis**(`fromInMillis`: number, `toInMillis`: number, `candleSizeInMillis`: number): number[]

_Defined in [src/product/CandleBucketUtil.ts:72](https://github.com/bennycode/coinbase-pro-node/blob/e6678df/src/product/CandleBucketUtil.ts#L72)_

#### Parameters:

| Name                 | Type   |
| -------------------- | ------ |
| `fromInMillis`       | number |
| `toInMillis`         | number |
| `candleSizeInMillis` | number |

**Returns:** number[]

---

### getIntervals

▸ `Static`**getIntervals**(): number[]

_Defined in [src/product/CandleBucketUtil.ts:53](https://github.com/bennycode/coinbase-pro-node/blob/e6678df/src/product/CandleBucketUtil.ts#L53)_

**Returns:** number[]

---

### getMaxPrice

▸ `Static`**getMaxPrice**(`candles`: [Candle](../interfaces/_product_productapi_.candle.md)[], `property?`: \"close\" \| \"high\" \| \"low\" \| \"open\"): number

_Defined in [src/product/CandleBucketUtil.ts:18](https://github.com/bennycode/coinbase-pro-node/blob/e6678df/src/product/CandleBucketUtil.ts#L18)_

#### Parameters:

| Name       | Type                                                     | Default value |
| ---------- | -------------------------------------------------------- | ------------- |
| `candles`  | [Candle](../interfaces/_product_productapi_.candle.md)[] | -             |
| `property` | \"close\" \| \"high\" \| \"low\" \| \"open\"             | "close"       |

**Returns:** number

---

### getMinPrice

▸ `Static`**getMinPrice**(`candles`: [Candle](../interfaces/_product_productapi_.candle.md)[], `property?`: \"close\" \| \"high\" \| \"low\" \| \"open\"): number

_Defined in [src/product/CandleBucketUtil.ts:13](https://github.com/bennycode/coinbase-pro-node/blob/e6678df/src/product/CandleBucketUtil.ts#L13)_

#### Parameters:

| Name       | Type                                                     | Default value |
| ---------- | -------------------------------------------------------- | ------------- |
| `candles`  | [Candle](../interfaces/_product_productapi_.candle.md)[] | -             |
| `property` | \"close\" \| \"high\" \| \"low\" \| \"open\"             | "close"       |

**Returns:** number

---

### mapGranularity

▸ `Static`**mapGranularity**(`candleSizeInMillis`: number): [CandleGranularity](../enums/_product_productapi_.candlegranularity.md)

_Defined in [src/product/CandleBucketUtil.ts:63](https://github.com/bennycode/coinbase-pro-node/blob/e6678df/src/product/CandleBucketUtil.ts#L63)_

#### Parameters:

| Name                 | Type   |
| -------------------- | ------ |
| `candleSizeInMillis` | number |

**Returns:** [CandleGranularity](../enums/_product_productapi_.candlegranularity.md)

---

### mapInterval

▸ `Static`**mapInterval**(`intervals`: number[], `interval`: number): number

_Defined in [src/product/CandleBucketUtil.ts:57](https://github.com/bennycode/coinbase-pro-node/blob/e6678df/src/product/CandleBucketUtil.ts#L57)_

#### Parameters:

| Name        | Type     |
| ----------- | -------- |
| `intervals` | number[] |
| `interval`  | number   |

**Returns:** number

---

### removeUnitISO

▸ `Static`**removeUnitISO**(`openTime`: number \| string, `granularityInSeconds`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md), `amount`: number): ISO_8601_MS_UTC

_Defined in [src/product/CandleBucketUtil.ts:44](https://github.com/bennycode/coinbase-pro-node/blob/e6678df/src/product/CandleBucketUtil.ts#L44)_

#### Parameters:

| Name                   | Type                                                                    |
| ---------------------- | ----------------------------------------------------------------------- |
| `openTime`             | number \| string                                                        |
| `granularityInSeconds` | [CandleGranularity](../enums/_product_productapi_.candlegranularity.md) |
| `amount`               | number                                                                  |

**Returns:** ISO_8601_MS_UTC

---

### removeUnitMillis

▸ `Static`**removeUnitMillis**(`openTime`: number \| string, `granularityInSeconds`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md), `amount`: number): number

_Defined in [src/product/CandleBucketUtil.ts:38](https://github.com/bennycode/coinbase-pro-node/blob/e6678df/src/product/CandleBucketUtil.ts#L38)_

#### Parameters:

| Name                   | Type                                                                    |
| ---------------------- | ----------------------------------------------------------------------- |
| `openTime`             | number \| string                                                        |
| `granularityInSeconds` | [CandleGranularity](../enums/_product_productapi_.candlegranularity.md) |
| `amount`               | number                                                                  |

**Returns:** number
