[coinbase-pro-node](../README.md) / [Exports](../modules.md) / AccountAPI

# Class: AccountAPI

## Table of contents

### Constructors

- [constructor](AccountAPI.md#constructor)

### Properties

- [URL](AccountAPI.md#url)

### Methods

- [generateDepositAddress](AccountAPI.md#generatedepositaddress)
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

[account/AccountAPI.ts:124](https://github.com/bennycode/coinbase-pro-node/blob/01e6d53/src/account/AccountAPI.ts#L124)

## Properties

### URL

▪ `Static` `Readonly` **URL**: `Object`

#### Type declaration

| Name               | Type     |
| :----------------- | :------- |
| `ACCOUNTS`         | `string` |
| `COINBASE_ACCOUNT` | `string` |

#### Defined in

[account/AccountAPI.ts:119](https://github.com/bennycode/coinbase-pro-node/blob/01e6d53/src/account/AccountAPI.ts#L119)

## Methods

### generateDepositAddress

▸ **generateDepositAddress**(`accountId`): `Promise`<[`GeneratedAddress`](../interfaces/GeneratedAddress.md)\>

Generate a new deposit address for a given account.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_postcoinbaseaccountaddresses

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `accountId` | `string` |

#### Returns

`Promise`<[`GeneratedAddress`](../interfaces/GeneratedAddress.md)\>

#### Defined in

[account/AccountAPI.ts:206](https://github.com/bennycode/coinbase-pro-node/blob/01e6d53/src/account/AccountAPI.ts#L206)

---

### getAccount

▸ **getAccount**(`accountId`): `Promise`<[`Account`](../interfaces/Account.md)\>

Get information for a single account. API key must belong to the same profile as the account.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getaccount

#### Parameters

| Name        | Type     | Description                                   |
| :---------- | :------- | :-------------------------------------------- |
| `accountId` | `string` | Account ID belonging to the API key’s profile |

#### Returns

`Promise`<[`Account`](../interfaces/Account.md)\>

#### Defined in

[account/AccountAPI.ts:132](https://github.com/bennycode/coinbase-pro-node/blob/01e6d53/src/account/AccountAPI.ts#L132)

---

### getAccountHistory

▸ **getAccountHistory**(`accountId`, `pagination?`): `Promise`<`PaginatedData`<[`AccountHistory`](../interfaces/AccountHistory.md)\>\>

List account activity of the API key’s profile. Account activity either increases or decreases your account balance. Items are paginated and sorted latest first.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getaccountledger

#### Parameters

| Name          | Type         | Description                                   |
| :------------ | :----------- | :-------------------------------------------- |
| `accountId`   | `string`     | Account ID belonging to the API key’s profile |
| `pagination?` | `Pagination` | Pagination field                              |

#### Returns

`Promise`<`PaginatedData`<[`AccountHistory`](../interfaces/AccountHistory.md)\>\>

#### Defined in

[account/AccountAPI.ts:146](https://github.com/bennycode/coinbase-pro-node/blob/01e6d53/src/account/AccountAPI.ts#L146)

---

### getHolds

▸ **getHolds**(`accountId`, `pagination?`): `Promise`<`PaginatedData`<[`Hold`](../interfaces/Hold.md)\>\>

List holds of an account that belong to the same profile as the API key. Holds are placed on an account for any active orders or pending withdraw requests. As an order is filled, the hold amount is updated. If an order is canceled, any remaining hold is removed. For a withdraw, once it is completed, the hold is removed.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getaccountholds

#### Parameters

| Name          | Type         | Description                                   |
| :------------ | :----------- | :-------------------------------------------- |
| `accountId`   | `string`     | Account ID belonging to the API key’s profile |
| `pagination?` | `Pagination` | Pagination field                              |

#### Returns

`Promise`<`PaginatedData`<[`Hold`](../interfaces/Hold.md)\>\>

#### Defined in

[account/AccountAPI.ts:167](https://github.com/bennycode/coinbase-pro-node/blob/01e6d53/src/account/AccountAPI.ts#L167)

---

### listAccounts

▸ **listAccounts**(): `Promise`<[`Account`](../interfaces/Account.md)[]\>

Get a list of trading accounts from the profile of the API key.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getaccounts

#### Returns

`Promise`<[`Account`](../interfaces/Account.md)[]\>

#### Defined in

[account/AccountAPI.ts:184](https://github.com/bennycode/coinbase-pro-node/blob/01e6d53/src/account/AccountAPI.ts#L184)

---

### listCoinbaseAccounts

▸ **listCoinbaseAccounts**(): `Promise`<[`CoinbaseAccount`](../interfaces/CoinbaseAccount.md)[]\>

Get a list of your coinbase accounts.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getcoinbaseaccounts

#### Returns

`Promise`<[`CoinbaseAccount`](../interfaces/CoinbaseAccount.md)[]\>

#### Defined in

[account/AccountAPI.ts:195](https://github.com/bennycode/coinbase-pro-node/blob/01e6d53/src/account/AccountAPI.ts#L195)
