[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [profile/ProfileAPI](../modules/profile_profileapi.md) / ProfileAPI

# Class: ProfileAPI

[profile/ProfileAPI](../modules/profile_profileapi.md).ProfileAPI

## Table of contents

### Constructors

- [constructor](profile_profileapi.profileapi.md#constructor)

### Properties

- [URL](profile_profileapi.profileapi.md#url)

### Methods

- [getProfile](profile_profileapi.profileapi.md#getprofile)
- [listProfiles](profile_profileapi.profileapi.md#listprofiles)
- [transferFunds](profile_profileapi.profileapi.md#transferfunds)

## Constructors

### constructor

\+ **new ProfileAPI**(`apiClient`: AxiosInstance): [_ProfileAPI_](profile_profileapi.profileapi.md)

#### Parameters:

| Name        | Type          |
| :---------- | :------------ |
| `apiClient` | AxiosInstance |

**Returns:** [_ProfileAPI_](profile_profileapi.profileapi.md)

Defined in: [profile/ProfileAPI.ts:25](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/profile/ProfileAPI.ts#L25)

## Properties

### URL

▪ `Static` `Readonly` **URL**: _object_

#### Type declaration:

| Name       | Type     |
| :--------- | :------- |
| `PROFILES` | _string_ |

Defined in: [profile/ProfileAPI.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/profile/ProfileAPI.ts#L23)

## Methods

### getProfile

▸ **getProfile**(`profileId`: _string_): _Promise_<_null_ \| [_Profile_](../interfaces/profile_profileapi.profile.md)\>

Get a single profile by profile ID. This endpoint requires the “view” permission and is accessible by any profile’s API key.

#### Parameters:

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `profileId` | _string_ | Profile ID  |

**Returns:** _Promise_<_null_ \| [_Profile_](../interfaces/profile_profileapi.profile.md)\>

A single profile

Defined in: [profile/ProfileAPI.ts:57](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/profile/ProfileAPI.ts#L57)

---

### listProfiles

▸ **listProfiles**(`active?`: _true_): _Promise_<[_Profile_](../interfaces/profile_profileapi.profile.md)[]\>

List your profiles. Profiles are equivalent to portfolios. This endpoint requires the “view” permission and is accessible by any profile’s API key.

**`see`** https://docs.pro.coinbase.com/#list-profiles

#### Parameters:

| Name      | Type   | Description                             |
| :-------- | :----- | :-------------------------------------- |
| `active?` | _true_ | Only return active profiles if set true |

**Returns:** _Promise_<[_Profile_](../interfaces/profile_profileapi.profile.md)[]\>

Defined in: [profile/ProfileAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/profile/ProfileAPI.ts#L36)

---

### transferFunds

▸ **transferFunds**(`transfer`: [_FundTransfer_](../interfaces/profile_profileapi.fundtransfer.md)): _Promise_<void\>

Transfer funds from API key’s profile to another user owned profile. This endpoint requires the “transfer” permission.

**`see`** https://docs.pro.coinbase.com/#create-profile-transfer

#### Parameters:

| Name       | Type                                                               |
| :--------- | :----------------------------------------------------------------- |
| `transfer` | [_FundTransfer_](../interfaces/profile_profileapi.fundtransfer.md) |

**Returns:** _Promise_<void\>

Defined in: [profile/ProfileAPI.ts:77](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/profile/ProfileAPI.ts#L77)
