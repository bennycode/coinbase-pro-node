[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["transfer/TransferAPI"](../modules/_transfer_transferapi_.md) › [TransferAPI](_transfer_transferapi_.transferapi.md)

# Class: TransferAPI

## Hierarchy

- **TransferAPI**

## Index

### Constructors

- [constructor](_transfer_transferapi_.transferapi.md#constructor)

### Methods

- [getTransfers](_transfer_transferapi_.transferapi.md#gettransfers)

### Object literals

- [URL](_transfer_transferapi_.transferapi.md#static-readonly-url)

## Constructors

### constructor

\+ **new TransferAPI**(`apiClient`: AxiosInstance): _[TransferAPI](_transfer_transferapi_.transferapi.md)_

_Defined in [src/transfer/TransferAPI.ts:32](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/transfer/TransferAPI.ts#L32)_

**Parameters:**

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** _[TransferAPI](_transfer_transferapi_.transferapi.md)_

## Methods

### getTransfers

▸ **getTransfers**(`transferType`: string, `profileId?`: undefined | string, `pagination?`: Pagination): _Promise‹object›_

_Defined in [src/transfer/TransferAPI.ts:45](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/transfer/TransferAPI.ts#L45)_

Get a list of deposits/withdrawals from the profile of the API key, in descending order by created time. See the Pagination section for retrieving additional entries after the first page.

**`see`** https://docs.pro.coinbase.com/#list-deposits

**`see`** https://docs.pro.coinbase.com/#list-withdrawals

**Parameters:**

| Name           | Type                    | Description      |
| -------------- | ----------------------- | ---------------- |
| `transferType` | string                  | -                |
| `profileId?`   | undefined &#124; string | -                |
| `pagination?`  | Pagination              | Pagination field |

**Returns:** _Promise‹object›_

## Object literals

### `Static` `Readonly` URL

### ▪ **URL**: _object_

_Defined in [src/transfer/TransferAPI.ts:30](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/transfer/TransferAPI.ts#L30)_

### TRANSFERS

• **TRANSFERS**: _string_ = `/transfers`

_Defined in [src/transfer/TransferAPI.ts:31](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/transfer/TransferAPI.ts#L31)_
