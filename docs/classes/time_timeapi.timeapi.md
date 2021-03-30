[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [time/TimeAPI](../modules/time_timeapi.md) / TimeAPI

# Class: TimeAPI

[time/TimeAPI](../modules/time_timeapi.md).TimeAPI

## Table of contents

### Constructors

- [constructor](time_timeapi.timeapi.md#constructor)

### Properties

- [URL](time_timeapi.timeapi.md#url)

### Methods

- [getClockSkew](time_timeapi.timeapi.md#getclockskew)
- [getTime](time_timeapi.timeapi.md#gettime)

## Constructors

### constructor

\+ **new TimeAPI**(`baseURL`: *string*): [*TimeAPI*](time_timeapi.timeapi.md)

#### Parameters:

Name | Type |
:------ | :------ |
`baseURL` | *string* |

**Returns:** [*TimeAPI*](time_timeapi.timeapi.md)

Defined in: [time/TimeAPI.ts:13](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/time/TimeAPI.ts#L13)

## Properties

### URL

▪ `Static` `Readonly` **URL**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`TIME` | *string* |

Defined in: [time/TimeAPI.ts:11](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/time/TimeAPI.ts#L11)

## Methods

### getClockSkew

▸ **getClockSkew**(`time`: *string* \| [*TimeSkew*](../interfaces/time_timeapi.timeskew.md)): *Promise*<number\>

Get the absolute difference between server time and local time.

#### Parameters:

Name | Type |
:------ | :------ |
`time` | *string* \| [*TimeSkew*](../interfaces/time_timeapi.timeskew.md) |

**Returns:** *Promise*<number\>

Defined in: [time/TimeAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/time/TimeAPI.ts#L34)

___

### getTime

▸ **getTime**(): *Promise*<[*TimeSkew*](../interfaces/time_timeapi.timeskew.md)\>

Get the server time from Coinbase Pro API. It has been reported that sometimes the return value is a string:
https://github.com/bennycode/coinbase-pro-node/issues/354

**`see`** https://docs.pro.coinbase.com/#time

**Returns:** *Promise*<[*TimeSkew*](../interfaces/time_timeapi.timeskew.md)\>

Defined in: [time/TimeAPI.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/time/TimeAPI.ts#L23)
