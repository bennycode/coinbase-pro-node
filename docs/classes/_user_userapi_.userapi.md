**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["user/UserAPI"](../modules/_user_userapi_.md) / UserAPI

# Class: UserAPI

## Hierarchy

- **UserAPI**

## Index

### Constructors

- [constructor](_user_userapi_.userapi.md#constructor)

### Methods

- [getTrailingVolume](_user_userapi_.userapi.md#gettrailingvolume)
- [verifyAuthentication](_user_userapi_.userapi.md#verifyauthentication)

### Object literals

- [URL](_user_userapi_.userapi.md#url)

## Constructors

### constructor

\+ **new UserAPI**(`apiClient`: AxiosInstance): [UserAPI](_user_userapi_.userapi.md)

_Defined in [src/user/UserAPI.ts:17](https://github.com/bennyn/coinbase-pro-node/blob/26bf4d8/src/user/UserAPI.ts#L17)_

#### Parameters:

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** [UserAPI](_user_userapi_.userapi.md)

## Methods

### getTrailingVolume

▸ **getTrailingVolume**(): Promise\<[TrailingVolume](../interfaces/_user_userapi_.trailingvolume.md)[]>

_Defined in [src/user/UserAPI.ts:41](https://github.com/bennyn/coinbase-pro-node/blob/26bf4d8/src/user/UserAPI.ts#L41)_

This request will return your 30-day trailing volume for all products of the API key’s profile. This is a cached value that’s calculated every day at midnight UTC.

**`note`** This endpoint requires either the “view” or “trade” permission

**`see`** https://docs.pro.coinbase.com/#trailing-volume

**Returns:** Promise\<[TrailingVolume](../interfaces/_user_userapi_.trailingvolume.md)[]>

Your 30-day trailing volume for all products of the API key’s profile

---

### verifyAuthentication

▸ **verifyAuthentication**(): Promise\<[VerifiedUser](../interfaces/_user_userapi_.verifieduser.md)>

_Defined in [src/user/UserAPI.ts:27](https://github.com/bennyn/coinbase-pro-node/blob/26bf4d8/src/user/UserAPI.ts#L27)_

Verify your authentication with Coinbase Pro.

**`see`** https://docs.pro.coinbase.com/#subscribe

**Returns:** Promise\<[VerifiedUser](../interfaces/_user_userapi_.verifieduser.md)>

Your account

## Object literals

### URL

▪ `Static` `Readonly` **URL**: object

_Defined in [src/user/UserAPI.ts:15](https://github.com/bennyn/coinbase-pro-node/blob/26bf4d8/src/user/UserAPI.ts#L15)_

#### Properties:

| Name    | Type   | Value      |
| ------- | ------ | ---------- |
| `USERS` | string | \`/users\` |
