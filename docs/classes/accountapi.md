[coinbase-pro-node](../README.md) / [Exports](../modules.md) / AccountAPI

# Class: AccountAPI

## Table of contents

### Constructors

- [constructor](accountapi.md#constructor)

### Properties

- [URL](accountapi.md#url)

### Methods

- [getAccount](accountapi.md#getaccount)
- [getAccountHistory](accountapi.md#getaccounthistory)
- [getHolds](accountapi.md#getholds)
- [listAccounts](accountapi.md#listaccounts)
- [listCoinbaseAccounts](accountapi.md#listcoinbaseaccounts)

## Constructors

### constructor

\+ **new AccountAPI**(`apiClient`: AxiosInstance): [*AccountAPI*](accountapi.md)

#### Parameters:

Name | Type |
:------ | :------ |
`apiClient` | AxiosInstance |

**Returns:** [*AccountAPI*](accountapi.md)

Defined in: [account/AccountAPI.ts:92](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/account/AccountAPI.ts#L92)

## Properties

### URL

▪ `Static` `Readonly` **URL**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`ACCOUNTS` | *string* |
`COINBASE_ACCOUNT` | *string* |

Defined in: [account/AccountAPI.ts:89](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/account/AccountAPI.ts#L89)

## Methods

### getAccount

▸ **getAccount**(`accountId`: *string*): *Promise*<[*Account*](../interfaces/account.md)\>

Get information for a single account. API key must belong to the same profile as the account.

**`see`** https://docs.pro.coinbase.com/#get-an-account

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`accountId` | *string* | Account ID belonging to the API key’s profile   |

**Returns:** *Promise*<[*Account*](../interfaces/account.md)\>

Defined in: [account/AccountAPI.ts:102](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/account/AccountAPI.ts#L102)

___

### getAccountHistory

▸ **getAccountHistory**(`accountId`: *string*, `pagination?`: [*Pagination*](../interfaces/pagination.md)): *Promise*<[*PaginatedData*](../interfaces/paginateddata.md)<[*AccountHistory*](../interfaces/accounthistory.md)\>\>

List account activity of the API key’s profile. Account activity either increases or decreases your account
balance. Items are paginated and sorted latest first.

**`see`** https://docs.pro.coinbase.com/#get-account-history

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`accountId` | *string* | Account ID belonging to the API key’s profile   |
`pagination?` | [*Pagination*](../interfaces/pagination.md) | Pagination field   |

**Returns:** *Promise*<[*PaginatedData*](../interfaces/paginateddata.md)<[*AccountHistory*](../interfaces/accounthistory.md)\>\>

Defined in: [account/AccountAPI.ts:116](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/account/AccountAPI.ts#L116)

___

### getHolds

▸ **getHolds**(`accountId`: *string*, `pagination?`: [*Pagination*](../interfaces/pagination.md)): *Promise*<[*PaginatedData*](../interfaces/paginateddata.md)<[*Hold*](../interfaces/hold.md)\>\>

List holds of an account that belong to the same profile as the API key. Holds are placed on an account for any
active orders or pending withdraw requests. As an order is filled, the hold amount is updated. If an order is
canceled, any remaining hold is removed. For a withdraw, once it is completed, the hold is removed.

**`see`** https://docs.pro.coinbase.com/#get-holds

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`accountId` | *string* | Account ID belonging to the API key’s profile   |
`pagination?` | [*Pagination*](../interfaces/pagination.md) | Pagination field   |

**Returns:** *Promise*<[*PaginatedData*](../interfaces/paginateddata.md)<[*Hold*](../interfaces/hold.md)\>\>

Defined in: [account/AccountAPI.ts:137](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/account/AccountAPI.ts#L137)

___

### listAccounts

▸ **listAccounts**(): *Promise*<[*Account*](../interfaces/account.md)[]\>

Get a list of trading accounts from the profile of the API key.

**`see`** https://docs.pro.coinbase.com/#list-accounts

**Returns:** *Promise*<[*Account*](../interfaces/account.md)[]\>

Defined in: [account/AccountAPI.ts:154](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/account/AccountAPI.ts#L154)

___

### listCoinbaseAccounts

▸ **listCoinbaseAccounts**(): *Promise*<[*CoinbaseAccount*](../interfaces/coinbaseaccount.md)[]\>

Get a list of your coinbase accounts.

**`see`** https://docs.pro.coinbase.com/#coinbase-accounts

**Returns:** *Promise*<[*CoinbaseAccount*](../interfaces/coinbaseaccount.md)[]\>

Defined in: [account/AccountAPI.ts:165](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/account/AccountAPI.ts#L165)
