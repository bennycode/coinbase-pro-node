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

\+ **new ProfileAPI**(`apiClient`: AxiosInstance): [*ProfileAPI*](profile_profileapi.profileapi.md)

#### Parameters:

Name | Type |
:------ | :------ |
`apiClient` | AxiosInstance |

**Returns:** [*ProfileAPI*](profile_profileapi.profileapi.md)

Defined in: [profile/ProfileAPI.ts:25](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/profile/ProfileAPI.ts#L25)

## Properties

### URL

▪ `Static` `Readonly` **URL**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`PROFILES` | *string* |

Defined in: [profile/ProfileAPI.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/profile/ProfileAPI.ts#L23)

## Methods

### getProfile

▸ **getProfile**(`profileId`: *string*): *Promise*<*null* \| [*Profile*](../interfaces/profile_profileapi.profile.md)\>

Get a single profile by profile ID.
This endpoint requires the “view” permission and is accessible by any profile’s API key.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`profileId` | *string* | Profile ID   |

**Returns:** *Promise*<*null* \| [*Profile*](../interfaces/profile_profileapi.profile.md)\>

A single profile

Defined in: [profile/ProfileAPI.ts:57](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/profile/ProfileAPI.ts#L57)

___

### listProfiles

▸ **listProfiles**(`active?`: *true*): *Promise*<[*Profile*](../interfaces/profile_profileapi.profile.md)[]\>

List your profiles. Profiles are equivalent to portfolios.
This endpoint requires the “view” permission and is accessible by any profile’s API key.

**`see`** https://docs.pro.coinbase.com/#list-profiles

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`active?` | *true* | Only return active profiles if set true   |

**Returns:** *Promise*<[*Profile*](../interfaces/profile_profileapi.profile.md)[]\>

Defined in: [profile/ProfileAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/profile/ProfileAPI.ts#L36)

___

### transferFunds

▸ **transferFunds**(`transfer`: [*FundTransfer*](../interfaces/profile_profileapi.fundtransfer.md)): *Promise*<void\>

Transfer funds from API key’s profile to another user owned profile.
This endpoint requires the “transfer” permission.

**`see`** https://docs.pro.coinbase.com/#create-profile-transfer

#### Parameters:

Name | Type |
:------ | :------ |
`transfer` | [*FundTransfer*](../interfaces/profile_profileapi.fundtransfer.md) |

**Returns:** *Promise*<void\>

Defined in: [profile/ProfileAPI.ts:77](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/profile/ProfileAPI.ts#L77)
