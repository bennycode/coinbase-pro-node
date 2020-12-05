**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["time/TimeAPI"](../modules/_time_timeapi_.md) / TimeAPI

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

- [URL](_time_timeapi_.timeapi.md#url)

## Constructors

### constructor

\+ **new TimeAPI**(`baseURL`: string): [TimeAPI](_time_timeapi_.timeapi.md)

_Defined in [src/time/TimeAPI.ts:13](https://github.com/bennycode/coinbase-pro-node/blob/cb84fec/src/time/TimeAPI.ts#L13)_

#### Parameters:

| Name      | Type   |
| --------- | ------ |
| `baseURL` | string |

**Returns:** [TimeAPI](_time_timeapi_.timeapi.md)

## Methods

### getClockSkew

▸ **getClockSkew**(): Promise\<number>

_Defined in [src/time/TimeAPI.ts:30](https://github.com/bennycode/coinbase-pro-node/blob/cb84fec/src/time/TimeAPI.ts#L30)_

Get the absolute difference between server time and local time.

**Returns:** Promise\<number>

---

### getTime

▸ **getTime**(): Promise\<[TimeSkew](../interfaces/_time_timeapi_.timeskew.md)>

_Defined in [src/time/TimeAPI.ts:22](https://github.com/bennycode/coinbase-pro-node/blob/cb84fec/src/time/TimeAPI.ts#L22)_

Get the server time from Coinbase Pro API.

**`see`** https://docs.pro.coinbase.com/#time

**Returns:** Promise\<[TimeSkew](../interfaces/_time_timeapi_.timeskew.md)>

## Object literals

### URL

▪ `Static` `Readonly` **URL**: object

_Defined in [src/time/TimeAPI.ts:11](https://github.com/bennycode/coinbase-pro-node/blob/cb84fec/src/time/TimeAPI.ts#L11)_

#### Properties:

| Name   | Type   | Value     |
| ------ | ------ | --------- |
| `TIME` | string | \`/time\` |
