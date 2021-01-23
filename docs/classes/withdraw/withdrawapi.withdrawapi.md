[coinbase-pro-node](../../README.md) / [Exports](../../modules.md) / [withdraw/WithdrawAPI](../../modules/withdraw_withdrawapi.md) / WithdrawAPI

# Class: WithdrawAPI

[withdraw/WithdrawAPI](../../modules/withdraw_withdrawapi.md).WithdrawAPI

## Hierarchy

- **WithdrawAPI**

## Table of contents

### Constructors

- [constructor](withdrawapi.withdrawapi.md#constructor)

### Properties

- [URL](withdrawapi.withdrawapi.md#url)

### Methods

- [getFeeEstimate](withdrawapi.withdrawapi.md#getfeeestimate)
- [postCryptoWithdrawal](withdrawapi.withdrawapi.md#postcryptowithdrawal)

## Constructors

### constructor

\+ **new WithdrawAPI**(`apiClient`: AxiosInstance): [_WithdrawAPI_](withdrawapi.withdrawapi.md)

#### Parameters:

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** [_WithdrawAPI_](withdrawapi.withdrawapi.md)

Defined in: [withdraw/WithdrawAPI.ts:28](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/withdraw/WithdrawAPI.ts#L28)

## Properties

### URL

▪ `Readonly` `Static` **URL**: { `WITHDRAWALS`: { `CRYPTO`: _string_ = '/withdrawals/crypto'; `FEE_ESTIMATE`: _string_ = '/withdrawals/fee-estimate' } }

#### Type declaration:

| Name | Type |
| --- | --- |
| `WITHDRAWALS` | { `CRYPTO`: _string_ = '/withdrawals/crypto'; `FEE_ESTIMATE`: _string_ = '/withdrawals/fee-estimate' } |

Defined in: [withdraw/WithdrawAPI.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/withdraw/WithdrawAPI.ts#L23)

## Methods

### getFeeEstimate

▸ **getFeeEstimate**(`currency`: _string_, `cryptoAddress`: _string_): _Promise_<[_WithdrawalFeeEstimate_](../../interfaces/withdraw/withdrawapi.withdrawalfeeestimate.md)\>

Gets the network fee estimate when sending to the given address.

**`see`** https://docs.pro.coinbase.com/#fee-estimate

#### Parameters:

| Name            | Type     | Description                       |
| --------------- | -------- | --------------------------------- |
| `currency`      | _string_ | The type of currency              |
| `cryptoAddress` | _string_ | A crypto address of the recipient |

**Returns:** _Promise_<[_WithdrawalFeeEstimate_](../../interfaces/withdraw/withdrawapi.withdrawalfeeestimate.md)\>

Defined in: [withdraw/WithdrawAPI.ts:73](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/withdraw/WithdrawAPI.ts#L73)

---

### postCryptoWithdrawal

▸ **postCryptoWithdrawal**(`amount`: _number_, `currency`: _string_, `cryptoAddress`: _string_, `destinationTag?`: _string_, `addNetworkFeeToTotal?`: _boolean_): _Promise_<[_CryptoWithdrawal_](../../interfaces/withdraw/withdrawapi.cryptowithdrawal.md)\>

Withdraws funds to a crypto address.

**`see`** https://docs.pro.coinbase.com/#crypto

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `amount` | _number_ | The amount to withdraw |
| `currency` | _string_ | The type of currency |
| `cryptoAddress` | _string_ | A crypto address of the recipient |
| `destinationTag?` | _string_ | A destination tag for currencies that support one |
| `addNetworkFeeToTotal?` | _boolean_ | A boolean flag to add the network fee on top of the amount. If this is blank, it will default to deducting the network fee from the amount. |

**Returns:** _Promise_<[_CryptoWithdrawal_](../../interfaces/withdraw/withdrawapi.cryptowithdrawal.md)\>

Defined in: [withdraw/WithdrawAPI.ts:43](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/withdraw/WithdrawAPI.ts#L43)
