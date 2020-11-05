**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["profile/ProfileAPI"](../modules/_profile_profileapi_.md) / ProfileAPI

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

- [URL](_profile_profileapi_.profileapi.md#url)

## Constructors

### constructor

\+ **new ProfileAPI**(`apiClient`: AxiosInstance): [ProfileAPI](_profile_profileapi_.profileapi.md)

_Defined in [src/profile/ProfileAPI.ts:25](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/profile/ProfileAPI.ts#L25)_

#### Parameters:

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** [ProfileAPI](_profile_profileapi_.profileapi.md)

## Methods

### getProfile

▸ **getProfile**(`profileId`: string): Promise\<[Profile](../interfaces/_profile_profileapi_.profile.md) \| null>

_Defined in [src/profile/ProfileAPI.ts:48](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/profile/ProfileAPI.ts#L48)_

Get a single profile by profile ID. This endpoint requires the “view” permission and is accessible by any profile’s API key.

#### Parameters:

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| `profileId` | string | Profile ID  |

**Returns:** Promise\<[Profile](../interfaces/_profile_profileapi_.profile.md) \| null>

A single profile

---

### listProfiles

▸ **listProfiles**(): Promise\<[Profile](../interfaces/_profile_profileapi_.profile.md)[]>

_Defined in [src/profile/ProfileAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/profile/ProfileAPI.ts#L35)_

List your profiles. Profiles are equivalent to portfolios. This endpoint requires the “view” permission and is accessible by any profile’s API key.

**`see`** https://docs.pro.coinbase.com/#list-profiles

**Returns:** Promise\<[Profile](../interfaces/_profile_profileapi_.profile.md)[]>

---

### transferFunds

▸ **transferFunds**(`transfer`: [FundTransfer](../interfaces/_profile_profileapi_.fundtransfer.md)): Promise\<void>

_Defined in [src/profile/ProfileAPI.ts:68](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/profile/ProfileAPI.ts#L68)_

Transfer funds from API key’s profile to another user owned profile. This endpoint requires the “transfer” permission.

**`see`** https://docs.pro.coinbase.com/#create-profile-transfer

#### Parameters:

| Name       | Type                                                               |
| ---------- | ------------------------------------------------------------------ |
| `transfer` | [FundTransfer](../interfaces/_profile_profileapi_.fundtransfer.md) |

**Returns:** Promise\<void>

## Object literals

### URL

▪ `Static` `Readonly` **URL**: object

_Defined in [src/profile/ProfileAPI.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/profile/ProfileAPI.ts#L23)_

#### Properties:

| Name       | Type   | Value         |
| ---------- | ------ | ------------- |
| `PROFILES` | string | \`/profiles\` |
