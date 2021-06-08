[coinbase-pro-node](../README.md) / [Exports](../modules.md) / ProfileAPI

# Class: ProfileAPI

## Table of contents

### Constructors

- [constructor](profileapi.md#constructor)

### Properties

- [URL](profileapi.md#url)

### Methods

- [getProfile](profileapi.md#getprofile)
- [listProfiles](profileapi.md#listprofiles)
- [transferFunds](profileapi.md#transferfunds)

## Constructors

### constructor

• **new ProfileAPI**(`apiClient`)

#### Parameters

| Name        | Type            |
| :---------- | :-------------- |
| `apiClient` | `AxiosInstance` |

#### Defined in

[profile/ProfileAPI.ts:25](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/profile/ProfileAPI.ts#L25)

## Properties

### URL

▪ `Static` `Readonly` **URL**: `Object`

#### Type declaration

| Name       | Type     |
| :--------- | :------- |
| `PROFILES` | `string` |

#### Defined in

[profile/ProfileAPI.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/profile/ProfileAPI.ts#L23)

## Methods

### getProfile

▸ **getProfile**(`profileId`): `Promise`<`null` \| [Profile](../interfaces/profile.md)\>

Get a single profile by profile ID. This endpoint requires the “view” permission and is accessible by any profile’s API key.

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `profileId` | `string` | Profile ID  |

#### Returns

`Promise`<`null` \| [Profile](../interfaces/profile.md)\>

A single profile

#### Defined in

[profile/ProfileAPI.ts:57](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/profile/ProfileAPI.ts#L57)

---

### listProfiles

▸ **listProfiles**(`active?`): `Promise`<[Profile](../interfaces/profile.md)[]\>

List your profiles. Profiles are equivalent to portfolios. This endpoint requires the “view” permission and is accessible by any profile’s API key.

**`see`** https://docs.pro.coinbase.com/#list-profiles

#### Parameters

| Name      | Type   | Description                             |
| :-------- | :----- | :-------------------------------------- |
| `active?` | `true` | Only return active profiles if set true |

#### Returns

`Promise`<[Profile](../interfaces/profile.md)[]\>

#### Defined in

[profile/ProfileAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/profile/ProfileAPI.ts#L36)

---

### transferFunds

▸ **transferFunds**(`transfer`): `Promise`<void\>

Transfer funds from API key’s profile to another user owned profile. This endpoint requires the “transfer” permission.

**`see`** https://docs.pro.coinbase.com/#create-profile-transfer

#### Parameters

| Name       | Type                                          |
| :--------- | :-------------------------------------------- |
| `transfer` | [FundTransfer](../interfaces/fundtransfer.md) |

#### Returns

`Promise`<void\>

#### Defined in

[profile/ProfileAPI.ts:77](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/profile/ProfileAPI.ts#L77)
