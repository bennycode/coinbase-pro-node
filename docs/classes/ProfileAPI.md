[coinbase-pro-node](../README.md) / [Exports](../modules.md) / ProfileAPI

# Class: ProfileAPI

## Table of contents

### Constructors

- [constructor](ProfileAPI.md#constructor)

### Properties

- [URL](ProfileAPI.md#url)

### Methods

- [getProfile](ProfileAPI.md#getprofile)
- [listProfiles](ProfileAPI.md#listprofiles)
- [transferFunds](ProfileAPI.md#transferfunds)

## Constructors

### constructor

• **new ProfileAPI**(`apiClient`)

#### Parameters

| Name        | Type            |
| :---------- | :-------------- |
| `apiClient` | `AxiosInstance` |

#### Defined in

[profile/ProfileAPI.ts:27](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/profile/ProfileAPI.ts#L27)

## Properties

### URL

▪ `Static` `Readonly` **URL**: `Object`

#### Type declaration

| Name       | Type     |
| :--------- | :------- |
| `PROFILES` | `string` |

#### Defined in

[profile/ProfileAPI.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/profile/ProfileAPI.ts#L23)

## Methods

### getProfile

▸ **getProfile**(`profileId`): `Promise`<`null` \| [`Profile`](../interfaces/Profile.md)\>

Get a single profile by profile ID. This endpoint requires the “view” permission and is accessible by any profile’s API key.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getprofile

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `profileId` | `string` | Profile ID  |

#### Returns

`Promise`<`null` \| [`Profile`](../interfaces/Profile.md)\>

A single profile

#### Defined in

[profile/ProfileAPI.ts:58](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/profile/ProfileAPI.ts#L58)

---

### listProfiles

▸ **listProfiles**(`active?`): `Promise`<[`Profile`](../interfaces/Profile.md)[]\>

List your profiles. Profiles are equivalent to portfolios. This endpoint requires the “view” permission and is accessible by any profile’s API key.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getprofiles

#### Parameters

| Name      | Type   | Description                             |
| :-------- | :----- | :-------------------------------------- |
| `active?` | `true` | Only return active profiles if set true |

#### Returns

`Promise`<[`Profile`](../interfaces/Profile.md)[]\>

#### Defined in

[profile/ProfileAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/profile/ProfileAPI.ts#L36)

---

### transferFunds

▸ **transferFunds**(`transfer`): `Promise`<`void`\>

Transfer funds from API key’s profile to another user owned profile. This endpoint requires the “transfer” permission.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postprofiletransfer

#### Parameters

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `transfer` | [`FundTransfer`](../interfaces/FundTransfer.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[profile/ProfileAPI.ts:78](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/profile/ProfileAPI.ts#L78)
