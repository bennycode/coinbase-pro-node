[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["profile/ProfileAPI"](../modules/_profile_profileapi_.md) › [ProfileAPI](_profile_profileapi_.profileapi.md)

# Class: ProfileAPI

## Hierarchy

- **ProfileAPI**

## Index

### Constructors

- [constructor](_profile_profileapi_.profileapi.md#constructor)

### Methods

- [getProfile](_profile_profileapi_.profileapi.md#getprofile)
- [listProfiles](_profile_profileapi_.profileapi.md#listprofiles)
- [transferFunds](_profile_profileapi_.profileapi.md#transferfunds)

### Object literals

- [URL](_profile_profileapi_.profileapi.md#static-readonly-url)

## Constructors

### constructor

\+ **new ProfileAPI**(`apiClient`: AxiosInstance): _[ProfileAPI](_profile_profileapi_.profileapi.md)_

_Defined in [src/profile/ProfileAPI.ts:25](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/profile/ProfileAPI.ts#L25)_

**Parameters:**

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** _[ProfileAPI](_profile_profileapi_.profileapi.md)_

## Methods

### getProfile

▸ **getProfile**(`profileId`: string): _Promise‹[Profile](../interfaces/_profile_profileapi_.profile.md) | null›_

_Defined in [src/profile/ProfileAPI.ts:48](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/profile/ProfileAPI.ts#L48)_

Get a single profile by profile ID. This endpoint requires the “view” permission and is accessible by any profile’s API key.

**Parameters:**

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| `profileId` | string | Profile ID  |

**Returns:** _Promise‹[Profile](../interfaces/_profile_profileapi_.profile.md) | null›_

A single profile

---

### listProfiles

▸ **listProfiles**(): _Promise‹[Profile](../interfaces/_profile_profileapi_.profile.md)[]›_

_Defined in [src/profile/ProfileAPI.ts:35](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/profile/ProfileAPI.ts#L35)_

List your profiles. Profiles are equivalent to portfolios. This endpoint requires the “view” permission and is accessible by any profile’s API key.

**`see`** https://docs.pro.coinbase.com/#list-profiles

**Returns:** _Promise‹[Profile](../interfaces/_profile_profileapi_.profile.md)[]›_

---

### transferFunds

▸ **transferFunds**(`transfer`: [FundTransfer](../interfaces/_profile_profileapi_.fundtransfer.md)): _Promise‹void›_

_Defined in [src/profile/ProfileAPI.ts:68](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/profile/ProfileAPI.ts#L68)_

Transfer funds from API key’s profile to another user owned profile. This endpoint requires the “transfer” permission.

**`see`** https://docs.pro.coinbase.com/#create-profile-transfer

**Parameters:**

| Name       | Type                                                               |
| ---------- | ------------------------------------------------------------------ |
| `transfer` | [FundTransfer](../interfaces/_profile_profileapi_.fundtransfer.md) |

**Returns:** _Promise‹void›_

## Object literals

### `Static` `Readonly` URL

### ▪ **URL**: _object_

_Defined in [src/profile/ProfileAPI.ts:23](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/profile/ProfileAPI.ts#L23)_

### PROFILES

• **PROFILES**: _string_ = `/profiles`

_Defined in [src/profile/ProfileAPI.ts:24](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/profile/ProfileAPI.ts#L24)_
