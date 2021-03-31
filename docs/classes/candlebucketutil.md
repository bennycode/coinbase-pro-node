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

\+ **new CandleBucketUtil**(): [*CandleBucketUtil*](candlebucketutil.md)

**Returns:** [*CandleBucketUtil*](candlebucketutil.md)

## Methods

### addUnitISO

▸ `Static`**addUnitISO**(`openTime`: *string* \| *number*, `granularityInSeconds`: [*CandleGranularity*](../enums/candlegranularity.md), `amount`: *number*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`openTime` | *string* \| *number* |
`granularityInSeconds` | [*CandleGranularity*](../enums/candlegranularity.md) |
`amount` | *number* |

**Returns:** *string*

Defined in: [product/CandleBucketUtil.ts:29](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/CandleBucketUtil.ts#L29)

___

### addUnitMillis

▸ `Static`**addUnitMillis**(`openTime`: *string* \| *number*, `granularityInSeconds`: [*CandleGranularity*](../enums/candlegranularity.md), `amount`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`openTime` | *string* \| *number* |
`granularityInSeconds` | [*CandleGranularity*](../enums/candlegranularity.md) |
`amount` | *number* |

**Returns:** *number*

Defined in: [product/CandleBucketUtil.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/CandleBucketUtil.ts#L23)

___

### expectedBuckets

▸ `Static`**expectedBuckets**(`fromInMillis`: *number*, `toInMillis`: *number*, `candleSizeInMillis`: [*CandleGranularity*](../enums/candlegranularity.md)): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`fromInMillis` | *number* |
`toInMillis` | *number* |
`candleSizeInMillis` | [*CandleGranularity*](../enums/candlegranularity.md) |

**Returns:** *number*

Defined in: [product/CandleBucketUtil.ts:67](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/CandleBucketUtil.ts#L67)

___

### getBucketsInISO

▸ `Static`**getBucketsInISO**(`bucketsInMillis`: *number*[]): [*CandleBatchBucket*](../interfaces/candlebatchbucket.md)[]

#### Parameters:

Name | Type |
:------ | :------ |
`bucketsInMillis` | *number*[] |

**Returns:** [*CandleBatchBucket*](../interfaces/candlebatchbucket.md)[]

Defined in: [product/CandleBucketUtil.ts:90](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/CandleBucketUtil.ts#L90)

___

### getBucketsInMillis

▸ `Static`**getBucketsInMillis**(`fromInMillis`: *number*, `toInMillis`: *number*, `candleSizeInMillis`: *number*): *number*[]

#### Parameters:

Name | Type |
:------ | :------ |
`fromInMillis` | *number* |
`toInMillis` | *number* |
`candleSizeInMillis` | *number* |

**Returns:** *number*[]

Defined in: [product/CandleBucketUtil.ts:72](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/CandleBucketUtil.ts#L72)

___

### getIntervals

▸ `Static`**getIntervals**(): *number*[]

**Returns:** *number*[]

Defined in: [product/CandleBucketUtil.ts:53](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/CandleBucketUtil.ts#L53)

___

### getMaxPrice

▸ `Static`**getMaxPrice**(`candles`: [*Candle*](../interfaces/candle.md)[], `property?`: *close* \| *high* \| *low* \| *open*): *number*

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`candles` | [*Candle*](../interfaces/candle.md)[] | - |
`property` | *close* \| *high* \| *low* \| *open* | 'close' |

**Returns:** *number*

Defined in: [product/CandleBucketUtil.ts:18](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/CandleBucketUtil.ts#L18)

___

### getMinPrice

▸ `Static`**getMinPrice**(`candles`: [*Candle*](../interfaces/candle.md)[], `property?`: *close* \| *high* \| *low* \| *open*): *number*

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`candles` | [*Candle*](../interfaces/candle.md)[] | - |
`property` | *close* \| *high* \| *low* \| *open* | 'close' |

**Returns:** *number*

Defined in: [product/CandleBucketUtil.ts:13](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/CandleBucketUtil.ts#L13)

___

### mapGranularity

▸ `Static`**mapGranularity**(`candleSizeInMillis`: *number*): [*CandleGranularity*](../enums/candlegranularity.md)

#### Parameters:

Name | Type |
:------ | :------ |
`candleSizeInMillis` | *number* |

**Returns:** [*CandleGranularity*](../enums/candlegranularity.md)

Defined in: [product/CandleBucketUtil.ts:63](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/CandleBucketUtil.ts#L63)

___

### mapInterval

▸ `Static`**mapInterval**(`intervals`: *number*[], `interval`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`intervals` | *number*[] |
`interval` | *number* |

**Returns:** *number*

Defined in: [product/CandleBucketUtil.ts:57](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/CandleBucketUtil.ts#L57)

___

### removeUnitISO

▸ `Static`**removeUnitISO**(`openTime`: *string* \| *number*, `granularityInSeconds`: [*CandleGranularity*](../enums/candlegranularity.md), `amount`: *number*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`openTime` | *string* \| *number* |
`granularityInSeconds` | [*CandleGranularity*](../enums/candlegranularity.md) |
`amount` | *number* |

**Returns:** *string*

Defined in: [product/CandleBucketUtil.ts:44](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/CandleBucketUtil.ts#L44)

___

### removeUnitMillis

▸ `Static`**removeUnitMillis**(`openTime`: *string* \| *number*, `granularityInSeconds`: [*CandleGranularity*](../enums/candlegranularity.md), `amount`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`openTime` | *string* \| *number* |
`granularityInSeconds` | [*CandleGranularity*](../enums/candlegranularity.md) |
`amount` | *number* |

**Returns:** *number*

Defined in: [product/CandleBucketUtil.ts:38](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/CandleBucketUtil.ts#L38)
