[coinbase-pro-node](../README.md) / [Exports](../modules.md) / UserAPI

# Class: UserAPI

## Table of contents

### Constructors

- [constructor](userapi.md#constructor)

### Properties

- [URL](userapi.md#url)

### Methods

- [getTrailingVolume](userapi.md#gettrailingvolume)
- [verifyAuthentication](userapi.md#verifyauthentication)

## Constructors

### constructor

\+ **new UserAPI**(`apiClient`: AxiosInstance): [*UserAPI*](userapi.md)

#### Parameters:

Name | Type |
:------ | :------ |
`apiClient` | AxiosInstance |

**Returns:** [*UserAPI*](userapi.md)

Defined in: [user/UserAPI.ts:17](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/user/UserAPI.ts#L17)

## Properties

### URL

▪ `Static` `Readonly` **URL**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`USERS` | *string* |

Defined in: [user/UserAPI.ts:15](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/user/UserAPI.ts#L15)

## Methods

### getTrailingVolume

▸ **getTrailingVolume**(): *Promise*<[*TrailingVolume*](../interfaces/trailingvolume.md)[]\>

This request will return your 30-day trailing volume for all products of the API key’s profile. This is a cached
value that’s calculated every day at midnight UTC.

**`note`** This endpoint requires either the “view” or “trade” permission

**`see`** https://docs.pro.coinbase.com/#trailing-volume

**Returns:** *Promise*<[*TrailingVolume*](../interfaces/trailingvolume.md)[]\>

Your 30-day trailing volume for all products of the API key’s profile

Defined in: [user/UserAPI.ts:41](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/user/UserAPI.ts#L41)

___

### verifyAuthentication

▸ **verifyAuthentication**(): *Promise*<[*VerifiedUser*](../interfaces/verifieduser.md)\>

Verify your authentication with Coinbase Pro.

**`see`** https://docs.pro.coinbase.com/#subscribe

**Returns:** *Promise*<[*VerifiedUser*](../interfaces/verifieduser.md)\>

Your account

Defined in: [user/UserAPI.ts:27](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/user/UserAPI.ts#L27)
