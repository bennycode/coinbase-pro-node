**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["withdraw/WithdrawAPI"](../modules/_withdraw_withdrawapi_.md) / WithdrawAPI

# Class: WithdrawAPI

## Hierarchy

- **WithdrawAPI**

## Index

### Constructors

- [constructor](_withdraw_withdrawapi_.withdrawapi.md#constructor)

### Methods

- [postCryptoWithdrawal](_withdraw_withdrawapi_.withdrawapi.md#postcryptowithdrawal)

### Object literals

- [URL](_withdraw_withdrawapi_.withdrawapi.md#url)

## Constructors

### constructor

\+ **new WithdrawAPI**(`apiClient`: AxiosInstance): [WithdrawAPI](_withdraw_withdrawapi_.withdrawapi.md)

_Defined in [src/withdraw/WithdrawAPI.ts:23](https://github.com/bennyn/coinbase-pro-node/blob/7eff64a/src/withdraw/WithdrawAPI.ts#L23)_

#### Parameters:

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** [WithdrawAPI](_withdraw_withdrawapi_.withdrawapi.md)

## Methods

### postCryptoWithdrawal

▸ **postCryptoWithdrawal**(`amount`: number, `currency`: string, `cryptoAddress`: string, `destinationTag?`: undefined \| string, `addNetworkFeeToTotal?`: undefined \| false \| true): Promise\<[CryptoWithdrawal](../interfaces/_withdraw_withdrawapi_.cryptowithdrawal.md)>

_Defined in [src/withdraw/WithdrawAPI.ts:38](https://github.com/bennyn/coinbase-pro-node/blob/7eff64a/src/withdraw/WithdrawAPI.ts#L38)_

Withdraws funds to a crypto address.

**`see`** https://docs.pro.coinbase.com/#crypto

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `amount` | number | The amount to withdraw |
| `currency` | string | The type of currency |
| `cryptoAddress` | string | A crypto address of the recipient |
| `destinationTag?` | undefined \| string | A destination tag for currencies that support one |
| `addNetworkFeeToTotal?` | undefined \| false \| true | A boolean flag to add the network fee on top of the amount. If this is blank, it will default to deducting the network fee from the amount. |

**Returns:** Promise\<[CryptoWithdrawal](../interfaces/_withdraw_withdrawapi_.cryptowithdrawal.md)>

## Object literals

### URL

▪ `Static` `Readonly` **URL**: object

_Defined in [src/withdraw/WithdrawAPI.ts:19](https://github.com/bennyn/coinbase-pro-node/blob/7eff64a/src/withdraw/WithdrawAPI.ts#L19)_

#### Properties:

| Name          | Type   | Value                                      |
| ------------- | ------ | ------------------------------------------ |
| `WITHDRAWALS` | object | { CRYPTO: string = "/withdrawals/crypto" } |
