[coinbase-pro-node](../README.md) / [Exports](../modules.md) / TimeAPI

# Class: TimeAPI

## Table of contents

### Constructors

- [constructor](timeapi.md#constructor)

### Properties

- [URL](timeapi.md#url)

### Methods

- [getClockSkew](timeapi.md#getclockskew)
- [getTime](timeapi.md#gettime)

## Constructors

### constructor

\+ **new TimeAPI**(`baseURL`: _string_): [_TimeAPI_](timeapi.md)

#### Parameters:

| Name      | Type     |
| :-------- | :------- |
| `baseURL` | _string_ |

**Returns:** [_TimeAPI_](timeapi.md)

Defined in: [time/TimeAPI.ts:13](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/time/TimeAPI.ts#L13)

## Properties

### URL

▪ `Static` `Readonly` **URL**: _object_

#### Type declaration:

| Name   | Type     |
| :----- | :------- |
| `TIME` | _string_ |

Defined in: [time/TimeAPI.ts:11](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/time/TimeAPI.ts#L11)

## Methods

### getClockSkew

▸ **getClockSkew**(`time`: _string_ \| [_TimeSkew_](../interfaces/timeskew.md)): _Promise_<number\>

Get the absolute difference between server time and local time.

#### Parameters:

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `time` | _string_ \| [_TimeSkew_](../interfaces/timeskew.md) |

**Returns:** _Promise_<number\>

Defined in: [time/TimeAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/time/TimeAPI.ts#L34)

---

### getTime

▸ **getTime**(): _Promise_<[_TimeSkew_](../interfaces/timeskew.md)\>

Get the server time from Coinbase Pro API. It has been reported that sometimes the return value is a string: https://github.com/bennycode/coinbase-pro-node/issues/354

**`see`** https://docs.pro.coinbase.com/#time

**Returns:** _Promise_<[_TimeSkew_](../interfaces/timeskew.md)\>

Defined in: [time/TimeAPI.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/1018fbd/src/time/TimeAPI.ts#L23)
