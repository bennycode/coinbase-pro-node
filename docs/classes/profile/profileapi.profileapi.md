[coinbase-pro-node](../../README.md) / [Exports](../../modules.md) / [profile/ProfileAPI](../../modules/profile_profileapi.md) / ProfileAPI

# Class: ProfileAPI

[profile/ProfileAPI](../../modules/profile_profileapi.md).ProfileAPI

## Hierarchy

- **ProfileAPI**

## Table of contents

### Constructors

- [constructor](profileapi.profileapi.md#constructor)

### Properties

- [URL](profileapi.profileapi.md#url)

### Methods

- [getProfile](profileapi.profileapi.md#getprofile)
- [listProfiles](profileapi.profileapi.md#listprofiles)
- [transferFunds](profileapi.profileapi.md#transferfunds)

## Constructors

### constructor

\+ **new ProfileAPI**(`apiClient`: AxiosInstance): [_ProfileAPI_](profileapi.profileapi.md)

#### Parameters:

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** [_ProfileAPI_](profileapi.profileapi.md)

Defined in: [profile/ProfileAPI.ts:25](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/profile/ProfileAPI.ts#L25)

## Properties

### URL

▪ `Readonly` `Static` **URL**: { `PROFILES`: _string_ }

#### Type declaration:

| Name       | Type     |
| ---------- | -------- |
| `PROFILES` | _string_ |

Defined in: [profile/ProfileAPI.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/profile/ProfileAPI.ts#L23)

## Methods

### getProfile

▸ **getProfile**(`profileId`: _string_): _Promise_<_null_ \| [_Profile_](../../interfaces/profile/profileapi.profile.md)\>

Get a single profile by profile ID. This endpoint requires the “view” permission and is accessible by any profile’s API key.

#### Parameters:

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| `profileId` | _string_ | Profile ID  |

**Returns:** _Promise_<_null_ \| [_Profile_](../../interfaces/profile/profileapi.profile.md)\>

A single profile

Defined in: [profile/ProfileAPI.ts:48](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/profile/ProfileAPI.ts#L48)

---

### listProfiles

▸ **listProfiles**(): _Promise_<[_Profile_](../../interfaces/profile/profileapi.profile.md)[]\>

List your profiles. Profiles are equivalent to portfolios. This endpoint requires the “view” permission and is accessible by any profile’s API key.

**`see`** https://docs.pro.coinbase.com/#list-profiles

**Returns:** _Promise_<[_Profile_](../../interfaces/profile/profileapi.profile.md)[]\>

Defined in: [profile/ProfileAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/profile/ProfileAPI.ts#L35)

---

### transferFunds

▸ **transferFunds**(`transfer`: [_FundTransfer_](../../interfaces/profile/profileapi.fundtransfer.md)): _Promise_<_void_\>

Transfer funds from API key’s profile to another user owned profile. This endpoint requires the “transfer” permission.

**`see`** https://docs.pro.coinbase.com/#create-profile-transfer

#### Parameters:

| Name       | Type                                                                  |
| ---------- | --------------------------------------------------------------------- |
| `transfer` | [_FundTransfer_](../../interfaces/profile/profileapi.fundtransfer.md) |

**Returns:** _Promise_<_void_\>

Defined in: [profile/ProfileAPI.ts:68](https://github.com/bennycode/coinbase-pro-node/blob/3350621/src/profile/ProfileAPI.ts#L68)
