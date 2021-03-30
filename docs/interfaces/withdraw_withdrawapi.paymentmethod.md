[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [withdraw/WithdrawAPI](../modules/withdraw_withdrawapi.md) / PaymentMethod

# Interface: PaymentMethod

[withdraw/WithdrawAPI](../modules/withdraw_withdrawapi.md).PaymentMethod

## Table of contents

### Properties

- [allow\_buy](withdraw_withdrawapi.paymentmethod.md#allow_buy)
- [allow\_deposit](withdraw_withdrawapi.paymentmethod.md#allow_deposit)
- [allow\_sell](withdraw_withdrawapi.paymentmethod.md#allow_sell)
- [allow\_withdraw](withdraw_withdrawapi.paymentmethod.md#allow_withdraw)
- [currency](withdraw_withdrawapi.paymentmethod.md#currency)
- [id](withdraw_withdrawapi.paymentmethod.md#id)
- [limits](withdraw_withdrawapi.paymentmethod.md#limits)
- [name](withdraw_withdrawapi.paymentmethod.md#name)
- [primary\_buy](withdraw_withdrawapi.paymentmethod.md#primary_buy)
- [primary\_sell](withdraw_withdrawapi.paymentmethod.md#primary_sell)
- [type](withdraw_withdrawapi.paymentmethod.md#type)

## Properties

### allow\_buy

• **allow\_buy**: *boolean*

Defined in: [withdraw/WithdrawAPI.ts:51](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/withdraw/WithdrawAPI.ts#L51)

___

### allow\_deposit

• **allow\_deposit**: *boolean*

Defined in: [withdraw/WithdrawAPI.ts:52](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/withdraw/WithdrawAPI.ts#L52)

___

### allow\_sell

• **allow\_sell**: *boolean*

Defined in: [withdraw/WithdrawAPI.ts:53](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/withdraw/WithdrawAPI.ts#L53)

___

### allow\_withdraw

• **allow\_withdraw**: *boolean*

Defined in: [withdraw/WithdrawAPI.ts:54](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/withdraw/WithdrawAPI.ts#L54)

___

### currency

• **currency**: *string*

Defined in: [withdraw/WithdrawAPI.ts:55](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/withdraw/WithdrawAPI.ts#L55)

___

### id

• **id**: *string*

Defined in: [withdraw/WithdrawAPI.ts:56](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/withdraw/WithdrawAPI.ts#L56)

___

### limits

• **limits**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`buy` | [*PaymentMethodLimit*](withdraw_withdrawapi.paymentmethodlimit.md)[] |
`deposit` | [*PaymentMethodLimit*](withdraw_withdrawapi.paymentmethodlimit.md)[] |
`instant_buy` | [*PaymentMethodLimit*](withdraw_withdrawapi.paymentmethodlimit.md)[] |
`sell` | [*PaymentMethodLimit*](withdraw_withdrawapi.paymentmethodlimit.md)[] |

Defined in: [withdraw/WithdrawAPI.ts:57](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/withdraw/WithdrawAPI.ts#L57)

___

### name

• **name**: *string*

Defined in: [withdraw/WithdrawAPI.ts:63](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/withdraw/WithdrawAPI.ts#L63)

___

### primary\_buy

• **primary\_buy**: *boolean*

Defined in: [withdraw/WithdrawAPI.ts:64](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/withdraw/WithdrawAPI.ts#L64)

___

### primary\_sell

• **primary\_sell**: *boolean*

Defined in: [withdraw/WithdrawAPI.ts:65](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/withdraw/WithdrawAPI.ts#L65)

___

### type

• **type**: *string*

Defined in: [withdraw/WithdrawAPI.ts:66](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/withdraw/WithdrawAPI.ts#L66)
