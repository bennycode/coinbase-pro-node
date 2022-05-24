[coinbase-pro-node](../README.md) / [Exports](../modules.md) / UserAPI

# Class: UserAPI

## Table of contents

### Constructors

- [constructor](UserAPI.md#constructor)

### Properties

- [URL](UserAPI.md#url)

### Methods

- [getTrailingVolume](UserAPI.md#gettrailingvolume)
- [verifyAuthentication](UserAPI.md#verifyauthentication)

## Constructors

### constructor

• **new UserAPI**(`apiClient`)

#### Parameters

| Name        | Type            |
| :---------- | :-------------- |
| `apiClient` | `AxiosInstance` |

#### Defined in

[user/UserAPI.ts:19](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/user/UserAPI.ts#L19)

## Properties

### URL

▪ `Static` `Readonly` **URL**: `Object`

#### Type declaration

| Name    | Type     |
| :------ | :------- |
| `USERS` | `string` |

#### Defined in

[user/UserAPI.ts:15](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/user/UserAPI.ts#L15)

## Methods

### getTrailingVolume

▸ **getTrailingVolume**(): `Promise`<[`TrailingVolume`](../interfaces/TrailingVolume.md)[]\>

This request will return your 30-day trailing volume for all products of the API key’s profile. This is a cached value that’s calculated every day at midnight UTC.

**`note`** This endpoint requires either the “view” or “trade” permission

**`see`** https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getfees

**`deprecated`** The Trailing Volume endpoint has been deprecated in favor of the Fees endpoint to get the latest volumes: https://docs.cloud.coinbase.com/exchange/docs/changelog#2021-feb-04

#### Returns

`Promise`<[`TrailingVolume`](../interfaces/TrailingVolume.md)[]\>

Your 30-day trailing volume for all products of the API key’s profile

#### Defined in

[user/UserAPI.ts:42](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/user/UserAPI.ts#L42)

---

### verifyAuthentication

▸ **verifyAuthentication**(): `Promise`<[`VerifiedUser`](../interfaces/VerifiedUser.md)\>

Verify your authentication with Coinbase Pro.

**`see`** https://docs.cloud.coinbase.com/exchange/docs/websocket-overview#authentication

#### Returns

`Promise`<[`VerifiedUser`](../interfaces/VerifiedUser.md)\>

Your account

#### Defined in

[user/UserAPI.ts:27](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/user/UserAPI.ts#L27)
