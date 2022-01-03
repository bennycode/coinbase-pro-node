[coinbase-pro-node](../README.md) / [Exports](../modules.md) / AccountAPI

# Class: AccountAPI

## Table of contents

### Constructors

- [constructor](AccountAPI.md#constructor)

### Properties

- [URL](AccountAPI.md#url)

### Methods

- [getAccount](AccountAPI.md#getaccount)
- [getAccountHistory](AccountAPI.md#getaccounthistory)
- [getHolds](AccountAPI.md#getholds)
- [listAccounts](AccountAPI.md#listaccounts)
- [listCoinbaseAccounts](AccountAPI.md#listcoinbaseaccounts)

## Constructors

### constructor

• **new AccountAPI**(`apiClient`)

#### Parameters

| Name        | Type            |
| :---------- | :-------------- |
| `apiClient` | `AxiosInstance` |

#### Defined in

[account/AccountAPI.ts:94](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/account/AccountAPI.ts#L94)

## Properties

### URL

▪ `Static` `Readonly` **URL**: `Object`

#### Type declaration

| Name               | Type     |
| :----------------- | :------- |
| `ACCOUNTS`         | `string` |
| `COINBASE_ACCOUNT` | `string` |

#### Defined in

[account/AccountAPI.ts:89](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/account/AccountAPI.ts#L89)

## Methods

### getAccount

▸ **getAccount**(`accountId`): `Promise`<[`Account`](../interfaces/Account.md)\>

Get information for a single account. API key must belong to the same profile as the account.

**`see`** https://docs.pro.coinbase.com/#get-an-account

#### Parameters

| Name        | Type     | Description                                   |
| :---------- | :------- | :-------------------------------------------- |
| `accountId` | `string` | Account ID belonging to the API key’s profile |

#### Returns

`Promise`<[`Account`](../interfaces/Account.md)\>

#### Defined in

[account/AccountAPI.ts:102](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/account/AccountAPI.ts#L102)

---

### getAccountHistory

▸ **getAccountHistory**(`accountId`, `pagination?`): `Promise`<`PaginatedData`<[`AccountHistory`](../interfaces/AccountHistory.md)\>\>

List account activity of the API key’s profile. Account activity either increases or decreases your account balance. Items are paginated and sorted latest first.

**`see`** https://docs.pro.coinbase.com/#get-account-history

#### Parameters

| Name          | Type         | Description                                   |
| :------------ | :----------- | :-------------------------------------------- |
| `accountId`   | `string`     | Account ID belonging to the API key’s profile |
| `pagination?` | `Pagination` | Pagination field                              |

#### Returns

`Promise`<`PaginatedData`<[`AccountHistory`](../interfaces/AccountHistory.md)\>\>

#### Defined in

[account/AccountAPI.ts:116](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/account/AccountAPI.ts#L116)

---

### getHolds

▸ **getHolds**(`accountId`, `pagination?`): `Promise`<`PaginatedData`<[`Hold`](../interfaces/Hold.md)\>\>

List holds of an account that belong to the same profile as the API key. Holds are placed on an account for any active orders or pending withdraw requests. As an order is filled, the hold amount is updated. If an order is canceled, any remaining hold is removed. For a withdraw, once it is completed, the hold is removed.

**`see`** https://docs.pro.coinbase.com/#get-holds

#### Parameters

| Name          | Type         | Description                                   |
| :------------ | :----------- | :-------------------------------------------- |
| `accountId`   | `string`     | Account ID belonging to the API key’s profile |
| `pagination?` | `Pagination` | Pagination field                              |

#### Returns

`Promise`<`PaginatedData`<[`Hold`](../interfaces/Hold.md)\>\>

#### Defined in

[account/AccountAPI.ts:137](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/account/AccountAPI.ts#L137)

---

### listAccounts

▸ **listAccounts**(): `Promise`<[`Account`](../interfaces/Account.md)[]\>

Get a list of trading accounts from the profile of the API key.

**`see`** https://docs.pro.coinbase.com/#list-accounts

#### Returns

`Promise`<[`Account`](../interfaces/Account.md)[]\>

#### Defined in

[account/AccountAPI.ts:154](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/account/AccountAPI.ts#L154)

---

### listCoinbaseAccounts

▸ **listCoinbaseAccounts**(): `Promise`<[`CoinbaseAccount`](../interfaces/CoinbaseAccount.md)[]\>

Get a list of your coinbase accounts.

**`see`** https://docs.pro.coinbase.com/#coinbase-accounts

#### Returns

`Promise`<[`CoinbaseAccount`](../interfaces/CoinbaseAccount.md)[]\>

#### Defined in

[account/AccountAPI.ts:165](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/account/AccountAPI.ts#L165)
