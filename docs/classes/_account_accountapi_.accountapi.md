[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["account/AccountAPI"](../modules/_account_accountapi_.md) › [AccountAPI](_account_accountapi_.accountapi.md)

# Class: AccountAPI

## Hierarchy

- **AccountAPI**

## Index

### Constructors

- [constructor](_account_accountapi_.accountapi.md#constructor)

### Methods

- [getAccount](_account_accountapi_.accountapi.md#getaccount)
- [getAccountHistory](_account_accountapi_.accountapi.md#getaccounthistory)
- [getHolds](_account_accountapi_.accountapi.md#getholds)
- [listAccounts](_account_accountapi_.accountapi.md#listaccounts)

### Object literals

- [URL](_account_accountapi_.accountapi.md#static-url)

## Constructors

### constructor

\+ **new AccountAPI**(`apiClient`: AxiosInstance): _[AccountAPI](_account_accountapi_.accountapi.md)_

_Defined in [src/account/AccountAPI.ts:40](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/account/AccountAPI.ts#L40)_

**Parameters:**

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** _[AccountAPI](_account_accountapi_.accountapi.md)_

## Methods

### getAccount

▸ **getAccount**(`accountId`: string): _Promise‹[Account](../interfaces/_account_accountapi_.account.md)›_

_Defined in [src/account/AccountAPI.ts:50](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/account/AccountAPI.ts#L50)_

Get information for a single account. API key must belong to the same profile as the account.

**`see`** https://docs.pro.coinbase.com/#get-an-account

**Parameters:**

| Name        | Type   | Description                                   |
| ----------- | ------ | --------------------------------------------- |
| `accountId` | string | Account ID belonging to the API key’s profile |

**Returns:** _Promise‹[Account](../interfaces/_account_accountapi_.account.md)›_

---

### getAccountHistory

▸ **getAccountHistory**(`accountId`: string): _Promise‹[AccountHistory](../interfaces/_account_accountapi_.accounthistory.md)[]›_

_Defined in [src/account/AccountAPI.ts:63](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/account/AccountAPI.ts#L63)_

List account activity of the API key’s profile. Account activity either increases or decreases your account balance. Items are paginated and sorted latest first.

**`see`** https://docs.pro.coinbase.com/#get-account-history

**Parameters:**

| Name        | Type   | Description                                   |
| ----------- | ------ | --------------------------------------------- |
| `accountId` | string | Account ID belonging to the API key’s profile |

**Returns:** _Promise‹[AccountHistory](../interfaces/_account_accountapi_.accounthistory.md)[]›_

---

### getHolds

▸ **getHolds**(`accountId`: string): _Promise‹[Hold](../interfaces/_account_accountapi_.hold.md)[]›_

_Defined in [src/account/AccountAPI.ts:77](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/account/AccountAPI.ts#L77)_

List holds of an account that belong to the same profile as the API key. Holds are placed on an account for any active orders or pending withdraw requests. As an order is filled, the hold amount is updated. If an order is canceled, any remaining hold is removed. For a withdraw, once it is completed, the hold is removed.

**`see`** https://docs.pro.coinbase.com/#get-holds

**Parameters:**

| Name        | Type   | Description                                   |
| ----------- | ------ | --------------------------------------------- |
| `accountId` | string | Account ID belonging to the API key’s profile |

**Returns:** _Promise‹[Hold](../interfaces/_account_accountapi_.hold.md)[]›_

---

### listAccounts

▸ **listAccounts**(): _Promise‹[Account](../interfaces/_account_accountapi_.account.md)[]›_

_Defined in [src/account/AccountAPI.ts:88](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/account/AccountAPI.ts#L88)_

Get a list of trading accounts from the profile of the API key.

**`see`** https://docs.pro.coinbase.com/#list-accounts

**Returns:** _Promise‹[Account](../interfaces/_account_accountapi_.account.md)[]›_

## Object literals

### `Static` URL

### ▪ **URL**: _object_

_Defined in [src/account/AccountAPI.ts:38](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/account/AccountAPI.ts#L38)_

### ACCOUNTS

• **ACCOUNTS**: _string_ = `/accounts`

_Defined in [src/account/AccountAPI.ts:39](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/account/AccountAPI.ts#L39)_
