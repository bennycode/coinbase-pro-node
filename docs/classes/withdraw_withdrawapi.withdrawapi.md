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

\+ **new WithdrawAPI**(`apiClient`: AxiosInstance): [_WithdrawAPI_](withdraw_withdrawapi.withdrawapi.md)

#### Parameters:

| Name        | Type          |
| :---------- | :------------ |
| `apiClient` | AxiosInstance |

**Returns:** [_WithdrawAPI_](withdraw_withdrawapi.withdrawapi.md)

Defined in: [withdraw/WithdrawAPI.ts:78](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/withdraw/WithdrawAPI.ts#L78)

## Properties

### URL

▪ `Readonly` `Static` **URL**: _object_

#### Type declaration:

| Name                           | Type     |
| :----------------------------- | :------- |
| `LIST_PAYMENT_METHODS`         | _string_ |
| `WITHDRAWALS`                  | _object_ |
| `WITHDRAWALS.COINBASE_ACCOUNT` | _string_ |
| `WITHDRAWALS.CRYPTO`           | _string_ |
| `WITHDRAWALS.FEE_ESTIMATE`     | _string_ |
| `WITHDRAWALS.PAYMENT_METHOD`   | _string_ |

Defined in: [withdraw/WithdrawAPI.ts:70](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/withdraw/WithdrawAPI.ts#L70)

## Methods

### getFeeEstimate

▸ **getFeeEstimate**(`currency`: _string_, `cryptoAddress`: _string_): _Promise_<[_WithdrawalFeeEstimate_](../interfaces/withdraw_withdrawapi.withdrawalfeeestimate.md)\>

Get the network fee estimate when sending to the given address.

**`see`** https://docs.pro.coinbase.com/#fee-estimate

#### Parameters:

| Name            | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `currency`      | _string_ | The type of currency              |
| `cryptoAddress` | _string_ | A crypto address of the recipient |

**Returns:** _Promise_<[_WithdrawalFeeEstimate_](../interfaces/withdraw_withdrawapi.withdrawalfeeestimate.md)\>

Defined in: [withdraw/WithdrawAPI.ts:170](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/withdraw/WithdrawAPI.ts#L170)

---

### getPaymentMethods

▸ **getPaymentMethods**(): _Promise_<[_PaymentMethod_](../interfaces/withdraw_withdrawapi.paymentmethod.md)[]\>

Get a list of your payment methods.

**`see`** https://docs.pro.coinbase.com/#list-payment-methods

**Returns:** _Promise_<[_PaymentMethod_](../interfaces/withdraw_withdrawapi.paymentmethod.md)[]\>

Defined in: [withdraw/WithdrawAPI.ts:183](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/withdraw/WithdrawAPI.ts#L183)

---

### withdrawToCoinbaseAccount

▸ **withdrawToCoinbaseAccount**(`amount`: _string_, `currency`: _string_, `coinbaseAccountId`: _string_): _Promise_<[_CryptoWithdrawal_](../interfaces/withdraw_withdrawapi.cryptowithdrawal.md)\>

Withdraw funds to a Coinbase account. You can move funds between your Coinbase accounts and your Coinbase Pro trading accounts within your daily limits.

**`see`** https://docs.pro.coinbase.com/#coinbase56

#### Parameters:

| Name                | Type     | Description                                |
| :------------------ | :------- | :----------------------------------------- |
| `amount`            | _string_ | The amount to withdraw                     |
| `currency`          | _string_ | The type of currency                       |
| `coinbaseAccountId` | _string_ | ID of the Coinbase or Coinbase Pro account |

**Returns:** _Promise_<[_CryptoWithdrawal_](../interfaces/withdraw_withdrawapi.cryptowithdrawal.md)\>

Defined in: [withdraw/WithdrawAPI.ts:125](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/withdraw/WithdrawAPI.ts#L125)

---

### withdrawToCryptoAddress

▸ **withdrawToCryptoAddress**(`amount`: _string_, `currency`: _string_, `cryptoAddress`: _string_, `destinationTag?`: _string_, `addNetworkFeeToTotal?`: _boolean_): _Promise_<[_CryptoWithdrawal_](../interfaces/withdraw_withdrawapi.cryptowithdrawal.md)\>

Withdraws funds to a crypto address.

**`see`** https://docs.pro.coinbase.com/#crypto

#### Parameters:

| Name | Type | Description |
| :-- | :-- | :-- |
| `amount` | _string_ | The amount to withdraw |
| `currency` | _string_ | The type of currency |
| `cryptoAddress` | _string_ | A crypto address of the recipient |
| `destinationTag?` | _string_ | A destination tag for currencies that support one |
| `addNetworkFeeToTotal?` | _boolean_ | A boolean flag to add the network fee on top of the amount. If this is blank, it will default to deducting the network fee from the amount. |

**Returns:** _Promise_<[_CryptoWithdrawal_](../interfaces/withdraw_withdrawapi.cryptowithdrawal.md)\>

Defined in: [withdraw/WithdrawAPI.ts:93](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/withdraw/WithdrawAPI.ts#L93)

---

### withdrawToPaymentMethod

▸ **withdrawToPaymentMethod**(`amount`: _string_, `currency`: _string_, `paymentMethodId`: _string_): _Promise_<[_PaymentMethodWithdrawal_](../interfaces/withdraw_withdrawapi.paymentmethodwithdrawal.md)\>

Withdraw funds to a payment method.

**`see`** https://docs.pro.coinbase.com/#payment-method55

#### Parameters:

| Name              | Type     | Description              |
| :---------------- | :------- | :----------------------- |
| `amount`          | _string_ | The amount to withdraw   |
| `currency`        | _string_ | The type of currency     |
| `paymentMethodId` | _string_ | ID of the payment method |

**Returns:** _Promise_<[_PaymentMethodWithdrawal_](../interfaces/withdraw_withdrawapi.paymentmethodwithdrawal.md)\>

Defined in: [withdraw/WithdrawAPI.ts:148](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/withdraw/WithdrawAPI.ts#L148)
