[coinbase-pro-node](../README.md) / [Exports](../modules.md) / CandleBucketUtil

# Class: CandleBucketUtil

## Table of contents

### Constructors

- [constructor](candlebucketutil.md#constructor)

### Methods

- [addUnitISO](candlebucketutil.md#addunitiso)
- [addUnitMillis](candlebucketutil.md#addunitmillis)
- [expectedBuckets](candlebucketutil.md#expectedbuckets)
- [getBucketsInISO](candlebucketutil.md#getbucketsiniso)
- [getBucketsInMillis](candlebucketutil.md#getbucketsinmillis)
- [getIntervals](candlebucketutil.md#getintervals)
- [getMaxPrice](candlebucketutil.md#getmaxprice)
- [getMinPrice](candlebucketutil.md#getminprice)
- [mapGranularity](candlebucketutil.md#mapgranularity)
- [mapInterval](candlebucketutil.md#mapinterval)
- [removeUnitISO](candlebucketutil.md#removeunitiso)
- [removeUnitMillis](candlebucketutil.md#removeunitmillis)

## Constructors

### constructor

• **new CandleBucketUtil**()

## Methods

### addUnitISO

▸ `Static` **addUnitISO**(`openTime`, `granularityInSeconds`, `amount`): `string`

#### Parameters

| Name                   | Type                                               |
| :--------------------- | :------------------------------------------------- |
| `openTime`             | `string` \| `number`                               |
| `granularityInSeconds` | [CandleGranularity](../enums/candlegranularity.md) |
| `amount`               | `number`                                           |

#### Returns

`string`

#### Defined in

[product/CandleBucketUtil.ts:29](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/CandleBucketUtil.ts#L29)

---

### addUnitMillis

▸ `Static` **addUnitMillis**(`openTime`, `granularityInSeconds`, `amount`): `number`

#### Parameters

| Name                   | Type                                               |
| :--------------------- | :------------------------------------------------- |
| `openTime`             | `string` \| `number`                               |
| `granularityInSeconds` | [CandleGranularity](../enums/candlegranularity.md) |
| `amount`               | `number`                                           |

#### Returns

`number`

#### Defined in

[product/CandleBucketUtil.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/CandleBucketUtil.ts#L23)

---

### expectedBuckets

▸ `Static` **expectedBuckets**(`fromInMillis`, `toInMillis`, `candleSizeInMillis`): `number`

#### Parameters

| Name                 | Type                                               |
| :------------------- | :------------------------------------------------- |
| `fromInMillis`       | `number`                                           |
| `toInMillis`         | `number`                                           |
| `candleSizeInMillis` | [CandleGranularity](../enums/candlegranularity.md) |

#### Returns

`number`

#### Defined in

[product/CandleBucketUtil.ts:67](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/CandleBucketUtil.ts#L67)

---

### getBucketsInISO

▸ `Static` **getBucketsInISO**(`bucketsInMillis`): [CandleBatchBucket](../interfaces/candlebatchbucket.md)[]

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `bucketsInMillis` | `number`[] |

#### Returns

[CandleBatchBucket](../interfaces/candlebatchbucket.md)[]

#### Defined in

[product/CandleBucketUtil.ts:90](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/CandleBucketUtil.ts#L90)

---

### getBucketsInMillis

▸ `Static` **getBucketsInMillis**(`fromInMillis`, `toInMillis`, `candleSizeInMillis`): `number`[]

#### Parameters

| Name                 | Type     |
| :------------------- | :------- |
| `fromInMillis`       | `number` |
| `toInMillis`         | `number` |
| `candleSizeInMillis` | `number` |

#### Returns

`number`[]

#### Defined in

[product/CandleBucketUtil.ts:72](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/CandleBucketUtil.ts#L72)

---

### getIntervals

▸ `Static` **getIntervals**(): `number`[]

#### Returns

`number`[]

#### Defined in

[product/CandleBucketUtil.ts:53](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/CandleBucketUtil.ts#L53)

---

### getMaxPrice

▸ `Static` **getMaxPrice**(`candles`, `property?`): `number`

#### Parameters

| Name       | Type                                         | Default value |
| :--------- | :------------------------------------------- | :------------ |
| `candles`  | [Candle](../interfaces/candle.md)[]          | `undefined`   |
| `property` | `"close"` \| `"high"` \| `"low"` \| `"open"` | 'close'       |

#### Returns

`number`

#### Defined in

[product/CandleBucketUtil.ts:18](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/CandleBucketUtil.ts#L18)

---

### getMinPrice

▸ `Static` **getMinPrice**(`candles`, `property?`): `number`

#### Parameters

| Name       | Type                                         | Default value |
| :--------- | :------------------------------------------- | :------------ |
| `candles`  | [Candle](../interfaces/candle.md)[]          | `undefined`   |
| `property` | `"close"` \| `"high"` \| `"low"` \| `"open"` | 'close'       |

#### Returns

`number`

#### Defined in

[product/CandleBucketUtil.ts:13](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/CandleBucketUtil.ts#L13)

---

### mapGranularity

▸ `Static` **mapGranularity**(`candleSizeInMillis`): [CandleGranularity](../enums/candlegranularity.md)

#### Parameters

| Name                 | Type     |
| :------------------- | :------- |
| `candleSizeInMillis` | `number` |

#### Returns

[CandleGranularity](../enums/candlegranularity.md)

#### Defined in

[product/CandleBucketUtil.ts:63](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/CandleBucketUtil.ts#L63)

---

### mapInterval

▸ `Static` **mapInterval**(`intervals`, `interval`): `number`

#### Parameters

| Name        | Type       |
| :---------- | :--------- |
| `intervals` | `number`[] |
| `interval`  | `number`   |

#### Returns

`number`

#### Defined in

[product/CandleBucketUtil.ts:57](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/CandleBucketUtil.ts#L57)

---

### removeUnitISO

▸ `Static` **removeUnitISO**(`openTime`, `granularityInSeconds`, `amount`): `string`

#### Parameters

| Name                   | Type                                               |
| :--------------------- | :------------------------------------------------- |
| `openTime`             | `string` \| `number`                               |
| `granularityInSeconds` | [CandleGranularity](../enums/candlegranularity.md) |
| `amount`               | `number`                                           |

#### Returns

`string`

#### Defined in

[product/CandleBucketUtil.ts:44](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/CandleBucketUtil.ts#L44)

---

### removeUnitMillis

▸ `Static` **removeUnitMillis**(`openTime`, `granularityInSeconds`, `amount`): `number`

#### Parameters

| Name                   | Type                                               |
| :--------------------- | :------------------------------------------------- |
| `openTime`             | `string` \| `number`                               |
| `granularityInSeconds` | [CandleGranularity](../enums/candlegranularity.md) |
| `amount`               | `number`                                           |

#### Returns

`number`

#### Defined in

[product/CandleBucketUtil.ts:38](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/CandleBucketUtil.ts#L38)
