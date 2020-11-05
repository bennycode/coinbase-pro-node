**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["transfer/TransferAPI"](../modules/_transfer_transferapi_.md) / TransferAPI

# Class: TransferAPI

## Hierarchy

- **TransferAPI**

## Index

### Constructors

- [constructor](_transfer_transferapi_.transferapi.md#constructor)

### Methods

- [getTransfer](_transfer_transferapi_.transferapi.md#gettransfer)
- [getTransfers](_transfer_transferapi_.transferapi.md#gettransfers)

### Object literals

- [URL](_transfer_transferapi_.transferapi.md#url)

## Constructors

### constructor

\+ **new TransferAPI**(`apiClient`: AxiosInstance): [TransferAPI](_transfer_transferapi_.transferapi.md)

_Defined in [src/transfer/TransferAPI.ts:37](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/transfer/TransferAPI.ts#L37)_

#### Parameters:

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** [TransferAPI](_transfer_transferapi_.transferapi.md)

## Methods

### getTransfer

▸ **getTransfer**(`transferId`: string): Promise\<[TransferInformation](../interfaces/_transfer_transferapi_.transferinformation.md)>

_Defined in [src/transfer/TransferAPI.ts:81](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/transfer/TransferAPI.ts#L81)_

Get information on a single deposit/withdrawal.

**`see`** https://docs.pro.coinbase.com/#single-deposit

**`see`** https://docs.pro.coinbase.com/#single-withdrawal

#### Parameters:

| Name         | Type   | Description                  |
| ------------ | ------ | ---------------------------- |
| `transferId` | string | id of the requested resource |

**Returns:** Promise\<[TransferInformation](../interfaces/_transfer_transferapi_.transferinformation.md)>

---

### getTransfers

▸ **getTransfers**(`transferType`: [TransferType](../enums/_transfer_transferapi_.transfertype.md), `profileId?`: undefined \| string, `pagination?`: Pagination): Promise\<PaginatedData\<[TransferInformation](../interfaces/_transfer_transferapi_.transferinformation.md)>>

_Defined in [src/transfer/TransferAPI.ts:48](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/transfer/TransferAPI.ts#L48)_

Get a list of deposits/withdrawals from the profile of the API key, in descending order by created time.

**`see`** https://docs.pro.coinbase.com/#list-deposits

**`see`** https://docs.pro.coinbase.com/#list-withdrawals

#### Parameters:

| Name           | Type                                                            | Description      |
| -------------- | --------------------------------------------------------------- | ---------------- |
| `transferType` | [TransferType](../enums/_transfer_transferapi_.transfertype.md) | -                |
| `profileId?`   | undefined \| string                                             | -                |
| `pagination?`  | Pagination                                                      | Pagination field |

**Returns:** Promise\<PaginatedData\<[TransferInformation](../interfaces/_transfer_transferapi_.transferinformation.md)>>

## Object literals

### URL

▪ `Static` `Readonly` **URL**: object

_Defined in [src/transfer/TransferAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/transfer/TransferAPI.ts#L35)_

#### Properties:

| Name        | Type   | Value          |
| ----------- | ------ | -------------- |
| `TRANSFERS` | string | \`/transfers\` |
