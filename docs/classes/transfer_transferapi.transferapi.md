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

\+ **new TransferAPI**(`apiClient`: AxiosInstance): [_TransferAPI_](transfer_transferapi.transferapi.md)

#### Parameters:

| Name        | Type          |
| :---------- | :------------ |
| `apiClient` | AxiosInstance |

**Returns:** [_TransferAPI_](transfer_transferapi.transferapi.md)

Defined in: [transfer/TransferAPI.ts:37](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/transfer/TransferAPI.ts#L37)

## Properties

### URL

▪ `Readonly` `Static` **URL**: _object_

#### Type declaration:

| Name        | Type     |
| :---------- | :------- |
| `TRANSFERS` | _string_ |

Defined in: [transfer/TransferAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/transfer/TransferAPI.ts#L35)

## Methods

### getTransfer

▸ **getTransfer**(`transferId`: _string_): _Promise_<[_TransferInformation_](../interfaces/transfer_transferapi.transferinformation.md)\>

Get information on a single deposit/withdrawal.

**`see`** https://docs.pro.coinbase.com/#single-deposit

**`see`** https://docs.pro.coinbase.com/#single-withdrawal

#### Parameters:

| Name         | Type     | Description                  |
| :----------- | :------- | :--------------------------- |
| `transferId` | _string_ | id of the requested resource |

**Returns:** _Promise_<[_TransferInformation_](../interfaces/transfer_transferapi.transferinformation.md)\>

Defined in: [transfer/TransferAPI.ts:81](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/transfer/TransferAPI.ts#L81)

---

### getTransfers

▸ **getTransfers**(`transferType`: [_TransferType_](../enums/transfer_transferapi.transfertype.md), `profileId?`: _string_, `pagination?`: Pagination): _Promise_<PaginatedData<[_TransferInformation_](../interfaces/transfer_transferapi.transferinformation.md)\>\>

Get a list of deposits/withdrawals from the profile of the API key, in descending order by created time.

**`see`** https://docs.pro.coinbase.com/#list-deposits

**`see`** https://docs.pro.coinbase.com/#list-withdrawals

#### Parameters:

| Name           | Type                                                            | Description      |
| :------------- | :-------------------------------------------------------------- | :--------------- |
| `transferType` | [_TransferType_](../enums/transfer_transferapi.transfertype.md) | -                |
| `profileId?`   | _string_                                                        | -                |
| `pagination?`  | Pagination                                                      | Pagination field |

**Returns:** _Promise_<PaginatedData<[_TransferInformation_](../interfaces/transfer_transferapi.transferinformation.md)\>\>

Defined in: [transfer/TransferAPI.ts:48](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/transfer/TransferAPI.ts#L48)
