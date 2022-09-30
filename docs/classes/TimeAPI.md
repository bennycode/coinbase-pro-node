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

[time/TimeAPI.ts:15](https://github.com/bennycode/coinbase-pro-node/blob/01e6d53/src/time/TimeAPI.ts#L15)

## Properties

### URL

▪ `Static` `Readonly` **URL**: `Object`

#### Type declaration

| Name   | Type     |
| :----- | :------- |
| `TIME` | `string` |

#### Defined in

[time/TimeAPI.ts:11](https://github.com/bennycode/coinbase-pro-node/blob/01e6d53/src/time/TimeAPI.ts#L11)

## Methods

### getClockSkew

▸ **getClockSkew**(`time`): `number`

Get the absolute difference between server time and local time.

#### Parameters

| Name   | Type                                    |
| :----- | :-------------------------------------- |
| `time` | [`TimeSkew`](../interfaces/TimeSkew.md) |

#### Returns

`number`

#### Defined in

[time/TimeAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/01e6d53/src/time/TimeAPI.ts#L34)

---

### getTime

▸ **getTime**(): `Promise`<[`TimeSkew`](../interfaces/TimeSkew.md)\>

Get the server time from Coinbase Pro API. It has been reported that sometimes the return value is a string: https://github.com/bennycode/coinbase-pro-node/issues/354

**`See`**

https://docs.cloud.coinbase.com/sign-in-with-coinbase/docs/api-time

#### Returns

`Promise`<[`TimeSkew`](../interfaces/TimeSkew.md)\>

#### Defined in

[time/TimeAPI.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/01e6d53/src/time/TimeAPI.ts#L23)
