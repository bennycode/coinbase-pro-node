[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [account/AccountAPI](../modules/account_accountapi.md) / AccountAPI

# Class: AccountAPI

[account/AccountAPI](../modules/account_accountapi.md).AccountAPI

## Table of contents

### Constructors

- [constructor](account_accountapi.accountapi.md#constructor)

### Properties

- [URL](account_accountapi.accountapi.md#url)

### Methods

- [getAccount](account_accountapi.accountapi.md#getaccount)
- [getAccountHistory](account_accountapi.accountapi.md#getaccounthistory)
- [getHolds](account_accountapi.accountapi.md#getholds)
- [listAccounts](account_accountapi.accountapi.md#listaccounts)
- [listCoinbaseAccounts](account_accountapi.accountapi.md#listcoinbaseaccounts)

## Constructors

### constructor

\+ **new AccountAPI**(`apiClient`: AxiosInstance): [_AccountAPI_](account_accountapi.accountapi.md)

#### Parameters:

| Name        | Type          |
| :---------- | :------------ |
| `apiClient` | AxiosInstance |

**Returns:** [_AccountAPI_](account_accountapi.accountapi.md)

Defined in: [account/AccountAPI.ts:92](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/account/AccountAPI.ts#L92)

## Properties

### URL

▪ `Static` `Readonly` **URL**: _object_

#### Type declaration:

| Name               | Type     |
| :----------------- | :------- |
| `ACCOUNTS`         | _string_ |
| `COINBASE_ACCOUNT` | _string_ |

Defined in: [account/AccountAPI.ts:89](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/account/AccountAPI.ts#L89)

## Methods

### getAccount

▸ **getAccount**(`accountId`: _string_): _Promise_<[_Account_](../interfaces/account_accountapi.account.md)\>

Get information for a single account. API key must belong to the same profile as the account.

**`see`** https://docs.pro.coinbase.com/#get-an-account

#### Parameters:

| Name        | Type     | Description                                   |
| :---------- | :------- | :-------------------------------------------- |
| `accountId` | _string_ | Account ID belonging to the API key’s profile |

**Returns:** _Promise_<[_Account_](../interfaces/account_accountapi.account.md)\>

Defined in: [account/AccountAPI.ts:102](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/account/AccountAPI.ts#L102)

---

### getAccountHistory

▸ **getAccountHistory**(`accountId`: _string_, `pagination?`: Pagination): _Promise_<PaginatedData<[_AccountHistory_](../interfaces/account_accountapi.accounthistory.md)\>\>

List account activity of the API key’s profile. Account activity either increases or decreases your account balance. Items are paginated and sorted latest first.

**`see`** https://docs.pro.coinbase.com/#get-account-history

#### Parameters:

| Name          | Type       | Description                                   |
| :------------ | :--------- | :-------------------------------------------- |
| `accountId`   | _string_   | Account ID belonging to the API key’s profile |
| `pagination?` | Pagination | Pagination field                              |

**Returns:** _Promise_<PaginatedData<[_AccountHistory_](../interfaces/account_accountapi.accounthistory.md)\>\>

Defined in: [account/AccountAPI.ts:116](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/account/AccountAPI.ts#L116)

---

### getHolds

▸ **getHolds**(`accountId`: _string_, `pagination?`: Pagination): _Promise_<PaginatedData<[_Hold_](../interfaces/account_accountapi.hold.md)\>\>

List holds of an account that belong to the same profile as the API key. Holds are placed on an account for any active orders or pending withdraw requests. As an order is filled, the hold amount is updated. If an order is canceled, any remaining hold is removed. For a withdraw, once it is completed, the hold is removed.

**`see`** https://docs.pro.coinbase.com/#get-holds

#### Parameters:

| Name          | Type       | Description                                   |
| :------------ | :--------- | :-------------------------------------------- |
| `accountId`   | _string_   | Account ID belonging to the API key’s profile |
| `pagination?` | Pagination | Pagination field                              |

**Returns:** _Promise_<PaginatedData<[_Hold_](../interfaces/account_accountapi.hold.md)\>\>

Defined in: [account/AccountAPI.ts:137](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/account/AccountAPI.ts#L137)

---

### listAccounts

▸ **listAccounts**(): _Promise_<[_Account_](../interfaces/account_accountapi.account.md)[]\>

Get a list of trading accounts from the profile of the API key.

**`see`** https://docs.pro.coinbase.com/#list-accounts

**Returns:** _Promise_<[_Account_](../interfaces/account_accountapi.account.md)[]\>

Defined in: [account/AccountAPI.ts:154](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/account/AccountAPI.ts#L154)

---

### listCoinbaseAccounts

▸ **listCoinbaseAccounts**(): _Promise_<[_CoinbaseAccount_](../interfaces/account_accountapi.coinbaseaccount.md)[]\>

Get a list of your coinbase accounts.

**`see`** https://docs.pro.coinbase.com/#coinbase-accounts

**Returns:** _Promise_<[_CoinbaseAccount_](../interfaces/account_accountapi.coinbaseaccount.md)[]\>

Defined in: [account/AccountAPI.ts:165](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/account/AccountAPI.ts#L165)
