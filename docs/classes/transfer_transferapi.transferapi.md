[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [transfer/TransferAPI](../modules/transfer_transferapi.md) / TransferAPI

# Class: TransferAPI

[transfer/TransferAPI](../modules/transfer_transferapi.md).TransferAPI

## Table of contents

### Constructors

- [constructor](transfer_transferapi.transferapi.md#constructor)

### Properties

- [URL](transfer_transferapi.transferapi.md#url)

### Methods

- [getTransfer](transfer_transferapi.transferapi.md#gettransfer)
- [getTransfers](transfer_transferapi.transferapi.md#gettransfers)

## Constructors

### constructor

\+ **new TransferAPI**(`apiClient`: AxiosInstance): [*TransferAPI*](transfer_transferapi.transferapi.md)

#### Parameters:

Name | Type |
:------ | :------ |
`apiClient` | AxiosInstance |

**Returns:** [*TransferAPI*](transfer_transferapi.transferapi.md)

Defined in: [transfer/TransferAPI.ts:37](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/transfer/TransferAPI.ts#L37)

## Properties

### URL

▪ `Static` `Readonly` **URL**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`TRANSFERS` | *string* |

Defined in: [transfer/TransferAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/transfer/TransferAPI.ts#L35)

## Methods

### getTransfer

▸ **getTransfer**(`transferId`: *string*): *Promise*<[*TransferInformation*](../interfaces/transfer_transferapi.transferinformation.md)\>

Get information on a single deposit/withdrawal.

**`see`** https://docs.pro.coinbase.com/#single-deposit

**`see`** https://docs.pro.coinbase.com/#single-withdrawal

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`transferId` | *string* | id of the requested resource   |

**Returns:** *Promise*<[*TransferInformation*](../interfaces/transfer_transferapi.transferinformation.md)\>

Defined in: [transfer/TransferAPI.ts:81](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/transfer/TransferAPI.ts#L81)

___

### getTransfers

▸ **getTransfers**(`transferType`: [*TransferType*](../enums/transfer_transferapi.transfertype.md), `profileId?`: *string*, `pagination?`: Pagination): *Promise*<PaginatedData<[*TransferInformation*](../interfaces/transfer_transferapi.transferinformation.md)\>\>

Get a list of deposits/withdrawals from the profile of the API key, in descending order by created time.

**`see`** https://docs.pro.coinbase.com/#list-deposits

**`see`** https://docs.pro.coinbase.com/#list-withdrawals

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`transferType` | [*TransferType*](../enums/transfer_transferapi.transfertype.md) | - |
`profileId?` | *string* | - |
`pagination?` | Pagination | Pagination field   |

**Returns:** *Promise*<PaginatedData<[*TransferInformation*](../interfaces/transfer_transferapi.transferinformation.md)\>\>

Defined in: [transfer/TransferAPI.ts:48](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/transfer/TransferAPI.ts#L48)
