[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["transfer/TransferAPI"](../modules/_transfer_transferapi_.md) › [TransferAPI](_transfer_transferapi_.transferapi.md)

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

- [URL](_transfer_transferapi_.transferapi.md#static-readonly-url)

## Constructors

### constructor

\+ **new TransferAPI**(`apiClient`: AxiosInstance): _[TransferAPI](_transfer_transferapi_.transferapi.md)_

_Defined in [src/transfer/TransferAPI.ts:37](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/transfer/TransferAPI.ts#L37)_

**Parameters:**

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** _[TransferAPI](_transfer_transferapi_.transferapi.md)_

## Methods

### getTransfer

▸ **getTransfer**(`transferId`: string): _Promise‹[TransferInformation](../interfaces/_transfer_transferapi_.transferinformation.md)›_

_Defined in [src/transfer/TransferAPI.ts:81](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/transfer/TransferAPI.ts#L81)_

Get information on a single deposit/withdrawal.

**`see`** https://docs.pro.coinbase.com/#single-deposit

**`see`** https://docs.pro.coinbase.com/#single-withdrawal

**Parameters:**

| Name         | Type   | Description                  |
| ------------ | ------ | ---------------------------- |
| `transferId` | string | id of the requested resource |

**Returns:** _Promise‹[TransferInformation](../interfaces/_transfer_transferapi_.transferinformation.md)›_

---

### getTransfers

▸ **getTransfers**(`transferType`: [TransferType](../enums/_transfer_transferapi_.transfertype.md), `profileId?`: undefined | string, `pagination?`: Pagination): _Promise‹PaginatedData‹[TransferInformation](../interfaces/_transfer_transferapi_.transferinformation.md)››_

_Defined in [src/transfer/TransferAPI.ts:48](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/transfer/TransferAPI.ts#L48)_

Get a list of deposits/withdrawals from the profile of the API key, in descending order by created time.

**`see`** https://docs.pro.coinbase.com/#list-deposits

**`see`** https://docs.pro.coinbase.com/#list-withdrawals

**Parameters:**

| Name           | Type                                                            | Description      |
| -------------- | --------------------------------------------------------------- | ---------------- |
| `transferType` | [TransferType](../enums/_transfer_transferapi_.transfertype.md) | -                |
| `profileId?`   | undefined &#124; string                                         | -                |
| `pagination?`  | Pagination                                                      | Pagination field |

**Returns:** _Promise‹PaginatedData‹[TransferInformation](../interfaces/_transfer_transferapi_.transferinformation.md)››_

## Object literals

### `Static` `Readonly` URL

### ▪ **URL**: _object_

_Defined in [src/transfer/TransferAPI.ts:35](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/transfer/TransferAPI.ts#L35)_

### TRANSFERS

• **TRANSFERS**: _string_ = `/transfers`

_Defined in [src/transfer/TransferAPI.ts:36](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/transfer/TransferAPI.ts#L36)_
