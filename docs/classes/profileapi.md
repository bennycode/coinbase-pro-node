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

\+ **new ProfileAPI**(`apiClient`: AxiosInstance): [_ProfileAPI_](profileapi.md)

#### Parameters:

| Name        | Type          |
| :---------- | :------------ |
| `apiClient` | AxiosInstance |

**Returns:** [_ProfileAPI_](profileapi.md)

Defined in: [profile/ProfileAPI.ts:25](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/profile/ProfileAPI.ts#L25)

## Properties

### URL

▪ `Static` `Readonly` **URL**: _object_

#### Type declaration:

| Name       | Type     |
| :--------- | :------- |
| `PROFILES` | _string_ |

Defined in: [profile/ProfileAPI.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/profile/ProfileAPI.ts#L23)

## Methods

### getProfile

▸ **getProfile**(`profileId`: _string_): _Promise_<`null` \| [_Profile_](../interfaces/profile.md)\>

Get a single profile by profile ID. This endpoint requires the “view” permission and is accessible by any profile’s API key.

#### Parameters:

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `profileId` | _string_ | Profile ID  |

**Returns:** _Promise_<`null` \| [_Profile_](../interfaces/profile.md)\>

A single profile

Defined in: [profile/ProfileAPI.ts:57](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/profile/ProfileAPI.ts#L57)

---

### listProfiles

▸ **listProfiles**(`active?`: `true`): _Promise_<[_Profile_](../interfaces/profile.md)[]\>

List your profiles. Profiles are equivalent to portfolios. This endpoint requires the “view” permission and is accessible by any profile’s API key.

**`see`** https://docs.pro.coinbase.com/#list-profiles

#### Parameters:

| Name      | Type   | Description                             |
| :-------- | :----- | :-------------------------------------- |
| `active?` | `true` | Only return active profiles if set true |

**Returns:** _Promise_<[_Profile_](../interfaces/profile.md)[]\>

Defined in: [profile/ProfileAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/profile/ProfileAPI.ts#L36)

---

### transferFunds

▸ **transferFunds**(`transfer`: [_FundTransfer_](../interfaces/fundtransfer.md)): _Promise_<void\>

Transfer funds from API key’s profile to another user owned profile. This endpoint requires the “transfer” permission.

**`see`** https://docs.pro.coinbase.com/#create-profile-transfer

#### Parameters:

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `transfer` | [_FundTransfer_](../interfaces/fundtransfer.md) |

**Returns:** _Promise_<void\>

Defined in: [profile/ProfileAPI.ts:77](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/profile/ProfileAPI.ts#L77)
