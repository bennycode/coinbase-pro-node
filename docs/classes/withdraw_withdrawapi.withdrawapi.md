[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [withdraw/WithdrawAPI](../modules/withdraw_withdrawapi.md) / WithdrawAPI

# Class: WithdrawAPI

[withdraw/WithdrawAPI](../modules/withdraw_withdrawapi.md).WithdrawAPI

## Table of contents

### Constructors

- [constructor](withdraw_withdrawapi.withdrawapi.md#constructor)

### Properties

- [URL](withdraw_withdrawapi.withdrawapi.md#url)

### Methods

- [getFeeEstimate](withdraw_withdrawapi.withdrawapi.md#getfeeestimate)
- [getPaymentMethods](withdraw_withdrawapi.withdrawapi.md#getpaymentmethods)
- [withdrawToCoinbaseAccount](withdraw_withdrawapi.withdrawapi.md#withdrawtocoinbaseaccount)
- [withdrawToCryptoAddress](withdraw_withdrawapi.withdrawapi.md#withdrawtocryptoaddress)
- [withdrawToPaymentMethod](withdraw_withdrawapi.withdrawapi.md#withdrawtopaymentmethod)

## Constructors

### constructor

\+ **new WithdrawAPI**(`apiClient`: AxiosInstance): [*WithdrawAPI*](withdraw_withdrawapi.withdrawapi.md)

#### Parameters:

Name | Type |
:------ | :------ |
`apiClient` | AxiosInstance |

**Returns:** [*WithdrawAPI*](withdraw_withdrawapi.withdrawapi.md)

Defined in: [withdraw/WithdrawAPI.ts:78](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/withdraw/WithdrawAPI.ts#L78)

## Properties

### URL

▪ `Static` `Readonly` **URL**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`LIST_PAYMENT_METHODS` | *string* |
`WITHDRAWALS` | *object* |
`WITHDRAWALS.COINBASE_ACCOUNT` | *string* |
`WITHDRAWALS.CRYPTO` | *string* |
`WITHDRAWALS.FEE_ESTIMATE` | *string* |
`WITHDRAWALS.PAYMENT_METHOD` | *string* |

Defined in: [withdraw/WithdrawAPI.ts:70](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/withdraw/WithdrawAPI.ts#L70)

## Methods

### getFeeEstimate

▸ **getFeeEstimate**(`currency`: *string*, `cryptoAddress`: *string*): *Promise*<[*WithdrawalFeeEstimate*](../interfaces/withdraw_withdrawapi.withdrawalfeeestimate.md)\>

Get the network fee estimate when sending to the given address.

**`see`** https://docs.pro.coinbase.com/#fee-estimate

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`currency` | *string* | The type of currency   |
`cryptoAddress` | *string* | A crypto address of the recipient   |

**Returns:** *Promise*<[*WithdrawalFeeEstimate*](../interfaces/withdraw_withdrawapi.withdrawalfeeestimate.md)\>

Defined in: [withdraw/WithdrawAPI.ts:170](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/withdraw/WithdrawAPI.ts#L170)

___

### getPaymentMethods

▸ **getPaymentMethods**(): *Promise*<[*PaymentMethod*](../interfaces/withdraw_withdrawapi.paymentmethod.md)[]\>

Get a list of your payment methods.

**`see`** https://docs.pro.coinbase.com/#list-payment-methods

**Returns:** *Promise*<[*PaymentMethod*](../interfaces/withdraw_withdrawapi.paymentmethod.md)[]\>

Defined in: [withdraw/WithdrawAPI.ts:183](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/withdraw/WithdrawAPI.ts#L183)

___

### withdrawToCoinbaseAccount

▸ **withdrawToCoinbaseAccount**(`amount`: *string*, `currency`: *string*, `coinbaseAccountId`: *string*): *Promise*<[*CryptoWithdrawal*](../interfaces/withdraw_withdrawapi.cryptowithdrawal.md)\>

Withdraw funds to a Coinbase account. You can move funds between your Coinbase accounts and your Coinbase Pro
trading accounts within your daily limits.

**`see`** https://docs.pro.coinbase.com/#coinbase56

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`amount` | *string* | The amount to withdraw   |
`currency` | *string* | The type of currency   |
`coinbaseAccountId` | *string* | ID of the Coinbase or Coinbase Pro account   |

**Returns:** *Promise*<[*CryptoWithdrawal*](../interfaces/withdraw_withdrawapi.cryptowithdrawal.md)\>

Defined in: [withdraw/WithdrawAPI.ts:125](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/withdraw/WithdrawAPI.ts#L125)

___

### withdrawToCryptoAddress

▸ **withdrawToCryptoAddress**(`amount`: *string*, `currency`: *string*, `cryptoAddress`: *string*, `destinationTag?`: *string*, `addNetworkFeeToTotal?`: *boolean*): *Promise*<[*CryptoWithdrawal*](../interfaces/withdraw_withdrawapi.cryptowithdrawal.md)\>

Withdraws funds to a crypto address.

**`see`** https://docs.pro.coinbase.com/#crypto

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`amount` | *string* | The amount to withdraw   |
`currency` | *string* | The type of currency   |
`cryptoAddress` | *string* | A crypto address of the recipient   |
`destinationTag?` | *string* | A destination tag for currencies that support one   |
`addNetworkFeeToTotal?` | *boolean* | A boolean flag to add the network fee on top of the amount. If this is blank, it will default to deducting the network fee from the amount.   |

**Returns:** *Promise*<[*CryptoWithdrawal*](../interfaces/withdraw_withdrawapi.cryptowithdrawal.md)\>

Defined in: [withdraw/WithdrawAPI.ts:93](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/withdraw/WithdrawAPI.ts#L93)

___

### withdrawToPaymentMethod

▸ **withdrawToPaymentMethod**(`amount`: *string*, `currency`: *string*, `paymentMethodId`: *string*): *Promise*<[*PaymentMethodWithdrawal*](../interfaces/withdraw_withdrawapi.paymentmethodwithdrawal.md)\>

Withdraw funds to a payment method.

**`see`** https://docs.pro.coinbase.com/#payment-method55

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`amount` | *string* | The amount to withdraw   |
`currency` | *string* | The type of currency   |
`paymentMethodId` | *string* | ID of the payment method   |

**Returns:** *Promise*<[*PaymentMethodWithdrawal*](../interfaces/withdraw_withdrawapi.paymentmethodwithdrawal.md)\>

Defined in: [withdraw/WithdrawAPI.ts:148](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/withdraw/WithdrawAPI.ts#L148)
