[coinbase-pro-node](../README.md) / [Exports](../modules.md) / TimeAPI

# Class: TimeAPI

## Table of contents

### Constructors

- [constructor](TimeAPI.md#constructor)

### Properties

- [URL](TimeAPI.md#url)

### Methods

- [getClockSkew](TimeAPI.md#getclockskew)
- [getTime](TimeAPI.md#gettime)

## Constructors

### constructor

• **new TimeAPI**(`baseURL`)

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `baseURL` | `string` |

#### Defined in

[time/TimeAPI.ts:15](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/time/TimeAPI.ts#L15)

## Properties

### URL

▪ `Static` `Readonly` **URL**: `Object`

#### Type declaration

| Name   | Type     |
| :----- | :------- |
| `TIME` | `string` |

#### Defined in

[time/TimeAPI.ts:11](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/time/TimeAPI.ts#L11)

## Methods

### getClockSkew

▸ **getClockSkew**(`time`): `Promise`<`number`\>

Get the absolute difference between server time and local time.

#### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `time` | `string` \| [`TimeSkew`](../interfaces/TimeSkew.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[time/TimeAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/time/TimeAPI.ts#L34)

---

### getTime

▸ **getTime**(): `Promise`<[`TimeSkew`](../interfaces/TimeSkew.md)\>

Get the server time from Coinbase Pro API. It has been reported that sometimes the return value is a string: https://github.com/bennycode/coinbase-pro-node/issues/354

**`see`** https://docs.pro.coinbase.com/#time

#### Returns

`Promise`<[`TimeSkew`](../interfaces/TimeSkew.md)\>

#### Defined in

[time/TimeAPI.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/time/TimeAPI.ts#L23)
