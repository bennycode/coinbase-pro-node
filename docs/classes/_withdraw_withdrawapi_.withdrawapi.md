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

_Defined in [src/withdraw/WithdrawAPI.ts:22](https://github.com/bennyn/coinbase-pro-node/blob/89f41a9/src/withdraw/WithdrawAPI.ts#L22)_

**Parameters:**

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** _[WithdrawAPI](_withdraw_withdrawapi_.withdrawapi.md)_

## Methods

### postCryptoWithdrawal

▸ **postCryptoWithdrawal**(`amount`: number, `currency`: string, `cryptoAddress`: string, `destinationTag?`: undefined | string): _Promise‹[CryptoWithdrawal](../interfaces/_withdraw_withdrawapi_.cryptowithdrawal.md)›_

_Defined in [src/withdraw/WithdrawAPI.ts:35](https://github.com/bennyn/coinbase-pro-node/blob/89f41a9/src/withdraw/WithdrawAPI.ts#L35)_

Withdraws funds to a crypto address.

**`see`** https://docs.pro.coinbase.com/#crypto

**Parameters:**

| Name              | Type                    | Description                                       |
| ----------------- | ----------------------- | ------------------------------------------------- |
| `amount`          | number                  | The amount to withdraw                            |
| `currency`        | string                  | The type of currency                              |
| `cryptoAddress`   | string                  | A crypto address of the recipient                 |
| `destinationTag?` | undefined &#124; string | A destination tag for currencies that support one |

**Returns:** _Promise‹[CryptoWithdrawal](../interfaces/_withdraw_withdrawapi_.cryptowithdrawal.md)›_

## Object literals

### `Static` `Readonly` URL

### ▪ **URL**: _object_

_Defined in [src/withdraw/WithdrawAPI.ts:18](https://github.com/bennyn/coinbase-pro-node/blob/89f41a9/src/withdraw/WithdrawAPI.ts#L18)_

▪ **WITHDRAWALS**: _object_

_Defined in [src/withdraw/WithdrawAPI.ts:19](https://github.com/bennyn/coinbase-pro-node/blob/89f41a9/src/withdraw/WithdrawAPI.ts#L19)_

- **CRYPTO**: _string_ = "/withdrawals/crypto"
