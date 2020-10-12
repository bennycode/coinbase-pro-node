[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["user/UserAPI"](../modules/_user_userapi_.md) › [UserAPI](_user_userapi_.userapi.md)

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

- [URL](_user_userapi_.userapi.md#static-readonly-url)

## Constructors

### constructor

\+ **new UserAPI**(`apiClient`: AxiosInstance): _[UserAPI](_user_userapi_.userapi.md)_

_Defined in [src/user/UserAPI.ts:17](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/user/UserAPI.ts#L17)_

**Parameters:**

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** _[UserAPI](_user_userapi_.userapi.md)_

## Methods

### getTrailingVolume

▸ **getTrailingVolume**(): _Promise‹[TrailingVolume](../interfaces/_user_userapi_.trailingvolume.md)[]›_

_Defined in [src/user/UserAPI.ts:41](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/user/UserAPI.ts#L41)_

This request will return your 30-day trailing volume for all products of the API key’s profile. This is a cached value that’s calculated every day at midnight UTC.

**`note`** This endpoint requires either the “view” or “trade” permission

**`see`** https://docs.pro.coinbase.com/#trailing-volume

**Returns:** _Promise‹[TrailingVolume](../interfaces/_user_userapi_.trailingvolume.md)[]›_

Your 30-day trailing volume for all products of the API key’s profile

---

### verifyAuthentication

▸ **verifyAuthentication**(): _Promise‹[VerifiedUser](../interfaces/_user_userapi_.verifieduser.md)›_

_Defined in [src/user/UserAPI.ts:27](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/user/UserAPI.ts#L27)_

Verify your authentication with Coinbase Pro.

**`see`** https://docs.pro.coinbase.com/#subscribe

**Returns:** _Promise‹[VerifiedUser](../interfaces/_user_userapi_.verifieduser.md)›_

Your account

## Object literals

### `Static` `Readonly` URL

### ▪ **URL**: _object_

_Defined in [src/user/UserAPI.ts:15](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/user/UserAPI.ts#L15)_

### USERS

• **USERS**: _string_ = `/users`

_Defined in [src/user/UserAPI.ts:16](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/user/UserAPI.ts#L16)_
