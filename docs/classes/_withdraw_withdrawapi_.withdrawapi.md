[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["withdraw/WithdrawAPI"](../modules/_withdraw_withdrawapi_.md) › [WithdrawAPI](_withdraw_withdrawapi_.withdrawapi.md)

# Class: WithdrawAPI

## Hierarchy

- **WithdrawAPI**

## Index

### Constructors

- [constructor](_withdraw_withdrawapi_.withdrawapi.md#constructor)

### Methods

- [postCryptoWithdrawal](_withdraw_withdrawapi_.withdrawapi.md#postcryptowithdrawal)

### Object literals

- [URL](_withdraw_withdrawapi_.withdrawapi.md#static-readonly-url)

## Constructors

### constructor

\+ **new WithdrawAPI**(`apiClient`: AxiosInstance): _[WithdrawAPI](_withdraw_withdrawapi_.withdrawapi.md)_

_Defined in [src/withdraw/WithdrawAPI.ts:23](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/withdraw/WithdrawAPI.ts#L23)_

**Parameters:**

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** _[WithdrawAPI](_withdraw_withdrawapi_.withdrawapi.md)_

## Methods

### postCryptoWithdrawal

▸ **postCryptoWithdrawal**(`amount`: number, `currency`: string, `cryptoAddress`: string, `destinationTag?`: undefined | string, `addNetworkFeeToTotal?`: undefined | false | true): _Promise‹[CryptoWithdrawal](../interfaces/_withdraw_withdrawapi_.cryptowithdrawal.md)›_

_Defined in [src/withdraw/WithdrawAPI.ts:38](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/withdraw/WithdrawAPI.ts#L38)_

Withdraws funds to a crypto address.

**`see`** https://docs.pro.coinbase.com/#crypto

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `amount` | number | The amount to withdraw |
| `currency` | string | The type of currency |
| `cryptoAddress` | string | A crypto address of the recipient |
| `destinationTag?` | undefined &#124; string | A destination tag for currencies that support one |
| `addNetworkFeeToTotal?` | undefined &#124; false &#124; true | A boolean flag to add the network fee on top of the amount. If this is blank, it will default to deducting the network fee from the amount. |

**Returns:** _Promise‹[CryptoWithdrawal](../interfaces/_withdraw_withdrawapi_.cryptowithdrawal.md)›_

## Object literals

### `Static` `Readonly` URL

### ▪ **URL**: _object_

_Defined in [src/withdraw/WithdrawAPI.ts:19](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/withdraw/WithdrawAPI.ts#L19)_

▪ **WITHDRAWALS**: _object_

_Defined in [src/withdraw/WithdrawAPI.ts:20](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/withdraw/WithdrawAPI.ts#L20)_

- **CRYPTO**: _string_ = "/withdrawals/crypto"
