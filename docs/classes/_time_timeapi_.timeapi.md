[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["time/TimeAPI"](../modules/_time_timeapi_.md) › [TimeAPI](_time_timeapi_.timeapi.md)

# Class: TimeAPI

## Hierarchy

- **TimeAPI**

## Index

### Constructors

- [constructor](_time_timeapi_.timeapi.md#constructor)

### Methods

- [getClockSkew](_time_timeapi_.timeapi.md#getclockskew)
- [getTime](_time_timeapi_.timeapi.md#gettime)

### Object literals

- [URL](_time_timeapi_.timeapi.md#static-readonly-url)

## Constructors

### constructor

\+ **new TimeAPI**(`baseURL`: string): _[TimeAPI](_time_timeapi_.timeapi.md)_

_Defined in [src/time/TimeAPI.ts:13](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/time/TimeAPI.ts#L13)_

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `baseURL` | string |

**Returns:** _[TimeAPI](_time_timeapi_.timeapi.md)_

## Methods

### getClockSkew

▸ **getClockSkew**(): _Promise‹number›_

_Defined in [src/time/TimeAPI.ts:30](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/time/TimeAPI.ts#L30)_

Get the absolute difference between server time and local time.

**Returns:** _Promise‹number›_

---

### getTime

▸ **getTime**(): _Promise‹[TimeSkew](../interfaces/_time_timeapi_.timeskew.md)›_

_Defined in [src/time/TimeAPI.ts:22](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/time/TimeAPI.ts#L22)_

Get the server time from Coinbase Pro API.

**`see`** https://docs.pro.coinbase.com/#time

**Returns:** _Promise‹[TimeSkew](../interfaces/_time_timeapi_.timeskew.md)›_

## Object literals

### `Static` `Readonly` URL

### ▪ **URL**: _object_

_Defined in [src/time/TimeAPI.ts:11](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/time/TimeAPI.ts#L11)_

### TIME

• **TIME**: _string_ = `/time`

_Defined in [src/time/TimeAPI.ts:12](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/time/TimeAPI.ts#L12)_
