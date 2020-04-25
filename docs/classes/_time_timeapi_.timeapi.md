[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["time/TimeAPI"](../modules/_time_timeapi_.md) › [TimeAPI](_time_timeapi_.timeapi.md)

# Class: TimeAPI

## Hierarchy

- **TimeAPI**

## Index

### Methods

- [getClockSkew](_time_timeapi_.timeapi.md#static-getclockskew)
- [getTime](_time_timeapi_.timeapi.md#static-gettime)

### Object literals

- [URL](_time_timeapi_.timeapi.md#static-url)

## Methods

### `Static` getClockSkew

▸ **getClockSkew**(`baseURL`: string): _Promise‹number›_

_Defined in [src/time/TimeAPI.ts:19](https://github.com/bennyn/coinbase-pro-node/blob/0c3235f/src/time/TimeAPI.ts#L19)_

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `baseURL` | string |

**Returns:** _Promise‹number›_

---

### `Static` getTime

▸ **getTime**(`baseURL`: string): _Promise‹[TimeSkew](../interfaces/_time_timeapi_.timeskew.md)›_

_Defined in [src/time/TimeAPI.ts:14](https://github.com/bennyn/coinbase-pro-node/blob/0c3235f/src/time/TimeAPI.ts#L14)_

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `baseURL` | string |

**Returns:** _Promise‹[TimeSkew](../interfaces/_time_timeapi_.timeskew.md)›_

## Object literals

### `Static` URL

### ▪ **URL**: _object_

_Defined in [src/time/TimeAPI.ts:9](https://github.com/bennyn/coinbase-pro-node/blob/0c3235f/src/time/TimeAPI.ts#L9)_

### TIME

• **TIME**: _string_ = `/time`

_Defined in [src/time/TimeAPI.ts:10](https://github.com/bennyn/coinbase-pro-node/blob/0c3235f/src/time/TimeAPI.ts#L10)_
