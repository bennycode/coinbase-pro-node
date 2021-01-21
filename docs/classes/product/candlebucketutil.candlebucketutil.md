[coinbase-pro-node](../../README.md) / [Exports](../../modules.md) / [product/CandleBucketUtil](../../modules/product_candlebucketutil.md) / CandleBucketUtil

# Class: CandleBucketUtil

[product/CandleBucketUtil](../../modules/product_candlebucketutil.md).CandleBucketUtil

## Hierarchy

- **CandleBucketUtil**

## Table of contents

### Constructors

- [constructor](candlebucketutil.candlebucketutil.md#constructor)

### Methods

- [addUnitISO](candlebucketutil.candlebucketutil.md#addunitiso)
- [addUnitMillis](candlebucketutil.candlebucketutil.md#addunitmillis)
- [expectedBuckets](candlebucketutil.candlebucketutil.md#expectedbuckets)
- [getBucketsInISO](candlebucketutil.candlebucketutil.md#getbucketsiniso)
- [getBucketsInMillis](candlebucketutil.candlebucketutil.md#getbucketsinmillis)
- [getIntervals](candlebucketutil.candlebucketutil.md#getintervals)
- [getMaxPrice](candlebucketutil.candlebucketutil.md#getmaxprice)
- [getMinPrice](candlebucketutil.candlebucketutil.md#getminprice)
- [mapGranularity](candlebucketutil.candlebucketutil.md#mapgranularity)
- [mapInterval](candlebucketutil.candlebucketutil.md#mapinterval)
- [removeUnitISO](candlebucketutil.candlebucketutil.md#removeunitiso)
- [removeUnitMillis](candlebucketutil.candlebucketutil.md#removeunitmillis)

## Constructors

### constructor

\+ **new CandleBucketUtil**(): [_CandleBucketUtil_](candlebucketutil.candlebucketutil.md)

**Returns:** [_CandleBucketUtil_](candlebucketutil.candlebucketutil.md)

## Methods

### addUnitISO

▸ `Static`**addUnitISO**(`openTime`: _string_ \| _number_, `granularityInSeconds`: [_CandleGranularity_](../../enums/product/productapi.candlegranularity.md), `amount`: _number_): _string_

#### Parameters:

| Name                   | Type                                                                       |
| ---------------------- | -------------------------------------------------------------------------- |
| `openTime`             | _string_ \| _number_                                                       |
| `granularityInSeconds` | [_CandleGranularity_](../../enums/product/productapi.candlegranularity.md) |
| `amount`               | _number_                                                                   |

**Returns:** _string_

Defined in: [product/CandleBucketUtil.ts:29](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/product/CandleBucketUtil.ts#L29)

---

### addUnitMillis

▸ `Static`**addUnitMillis**(`openTime`: _string_ \| _number_, `granularityInSeconds`: [_CandleGranularity_](../../enums/product/productapi.candlegranularity.md), `amount`: _number_): _number_

#### Parameters:

| Name                   | Type                                                                       |
| ---------------------- | -------------------------------------------------------------------------- |
| `openTime`             | _string_ \| _number_                                                       |
| `granularityInSeconds` | [_CandleGranularity_](../../enums/product/productapi.candlegranularity.md) |
| `amount`               | _number_                                                                   |

**Returns:** _number_

Defined in: [product/CandleBucketUtil.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/product/CandleBucketUtil.ts#L23)

---

### expectedBuckets

▸ `Static`**expectedBuckets**(`fromInMillis`: _number_, `toInMillis`: _number_, `candleSizeInMillis`: [_CandleGranularity_](../../enums/product/productapi.candlegranularity.md)): _number_

#### Parameters:

| Name                 | Type                                                                       |
| -------------------- | -------------------------------------------------------------------------- |
| `fromInMillis`       | _number_                                                                   |
| `toInMillis`         | _number_                                                                   |
| `candleSizeInMillis` | [_CandleGranularity_](../../enums/product/productapi.candlegranularity.md) |

**Returns:** _number_

Defined in: [product/CandleBucketUtil.ts:67](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/product/CandleBucketUtil.ts#L67)

---

### getBucketsInISO

▸ `Static`**getBucketsInISO**(`bucketsInMillis`: _number_[]): [_CandleBatchBucket_](../../interfaces/product/candlebucketutil.candlebatchbucket.md)[]

#### Parameters:

| Name              | Type       |
| ----------------- | ---------- |
| `bucketsInMillis` | _number_[] |

**Returns:** [_CandleBatchBucket_](../../interfaces/product/candlebucketutil.candlebatchbucket.md)[]

Defined in: [product/CandleBucketUtil.ts:90](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/product/CandleBucketUtil.ts#L90)

---

### getBucketsInMillis

▸ `Static`**getBucketsInMillis**(`fromInMillis`: _number_, `toInMillis`: _number_, `candleSizeInMillis`: _number_): _number_[]

#### Parameters:

| Name                 | Type     |
| -------------------- | -------- |
| `fromInMillis`       | _number_ |
| `toInMillis`         | _number_ |
| `candleSizeInMillis` | _number_ |

**Returns:** _number_[]

Defined in: [product/CandleBucketUtil.ts:72](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/product/CandleBucketUtil.ts#L72)

---

### getIntervals

▸ `Static`**getIntervals**(): _number_[]

**Returns:** _number_[]

Defined in: [product/CandleBucketUtil.ts:53](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/product/CandleBucketUtil.ts#L53)

---

### getMaxPrice

▸ `Static`**getMaxPrice**(`candles`: [_Candle_](../../interfaces/product/productapi.candle.md)[], `property?`: _close_ \| _high_ \| _low_ \| _open_): _number_

#### Parameters:

| Name       | Type                                                        | Default value |
| ---------- | ----------------------------------------------------------- | ------------- |
| `candles`  | [_Candle_](../../interfaces/product/productapi.candle.md)[] | -             |
| `property` | _close_ \| _high_ \| _low_ \| _open_                        | 'close'       |

**Returns:** _number_

Defined in: [product/CandleBucketUtil.ts:18](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/product/CandleBucketUtil.ts#L18)

---

### getMinPrice

▸ `Static`**getMinPrice**(`candles`: [_Candle_](../../interfaces/product/productapi.candle.md)[], `property?`: _close_ \| _high_ \| _low_ \| _open_): _number_

#### Parameters:

| Name       | Type                                                        | Default value |
| ---------- | ----------------------------------------------------------- | ------------- |
| `candles`  | [_Candle_](../../interfaces/product/productapi.candle.md)[] | -             |
| `property` | _close_ \| _high_ \| _low_ \| _open_                        | 'close'       |

**Returns:** _number_

Defined in: [product/CandleBucketUtil.ts:13](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/product/CandleBucketUtil.ts#L13)

---

### mapGranularity

▸ `Static`**mapGranularity**(`candleSizeInMillis`: _number_): [_CandleGranularity_](../../enums/product/productapi.candlegranularity.md)

#### Parameters:

| Name                 | Type     |
| -------------------- | -------- |
| `candleSizeInMillis` | _number_ |

**Returns:** [_CandleGranularity_](../../enums/product/productapi.candlegranularity.md)

Defined in: [product/CandleBucketUtil.ts:63](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/product/CandleBucketUtil.ts#L63)

---

### mapInterval

▸ `Static`**mapInterval**(`intervals`: _number_[], `interval`: _number_): _number_

#### Parameters:

| Name        | Type       |
| ----------- | ---------- |
| `intervals` | _number_[] |
| `interval`  | _number_   |

**Returns:** _number_

Defined in: [product/CandleBucketUtil.ts:57](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/product/CandleBucketUtil.ts#L57)

---

### removeUnitISO

▸ `Static`**removeUnitISO**(`openTime`: _string_ \| _number_, `granularityInSeconds`: [_CandleGranularity_](../../enums/product/productapi.candlegranularity.md), `amount`: _number_): _string_

#### Parameters:

| Name                   | Type                                                                       |
| ---------------------- | -------------------------------------------------------------------------- |
| `openTime`             | _string_ \| _number_                                                       |
| `granularityInSeconds` | [_CandleGranularity_](../../enums/product/productapi.candlegranularity.md) |
| `amount`               | _number_                                                                   |

**Returns:** _string_

Defined in: [product/CandleBucketUtil.ts:44](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/product/CandleBucketUtil.ts#L44)

---

### removeUnitMillis

▸ `Static`**removeUnitMillis**(`openTime`: _string_ \| _number_, `granularityInSeconds`: [_CandleGranularity_](../../enums/product/productapi.candlegranularity.md), `amount`: _number_): _number_

#### Parameters:

| Name                   | Type                                                                       |
| ---------------------- | -------------------------------------------------------------------------- |
| `openTime`             | _string_ \| _number_                                                       |
| `granularityInSeconds` | [_CandleGranularity_](../../enums/product/productapi.candlegranularity.md) |
| `amount`               | _number_                                                                   |

**Returns:** _number_

Defined in: [product/CandleBucketUtil.ts:38](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/product/CandleBucketUtil.ts#L38)
