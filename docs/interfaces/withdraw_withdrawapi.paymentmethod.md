[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [withdraw/WithdrawAPI](../modules/withdraw_withdrawapi.md) / PaymentMethod

# Interface: PaymentMethod

[withdraw/WithdrawAPI](../modules/withdraw_withdrawapi.md).PaymentMethod

## Table of contents

### Properties

- [allow_buy](withdraw_withdrawapi.paymentmethod.md#allow_buy)
- [allow_deposit](withdraw_withdrawapi.paymentmethod.md#allow_deposit)
- [allow_sell](withdraw_withdrawapi.paymentmethod.md#allow_sell)
- [allow_withdraw](withdraw_withdrawapi.paymentmethod.md#allow_withdraw)
- [currency](withdraw_withdrawapi.paymentmethod.md#currency)
- [id](withdraw_withdrawapi.paymentmethod.md#id)
- [limits](withdraw_withdrawapi.paymentmethod.md#limits)
- [name](withdraw_withdrawapi.paymentmethod.md#name)
- [primary_buy](withdraw_withdrawapi.paymentmethod.md#primary_buy)
- [primary_sell](withdraw_withdrawapi.paymentmethod.md#primary_sell)
- [type](withdraw_withdrawapi.paymentmethod.md#type)

## Properties

### allow_buy

• **allow_buy**: _boolean_

Defined in: [withdraw/WithdrawAPI.ts:51](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/withdraw/WithdrawAPI.ts#L51)

---

### allow_deposit

• **allow_deposit**: _boolean_

Defined in: [withdraw/WithdrawAPI.ts:52](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/withdraw/WithdrawAPI.ts#L52)

---

### allow_sell

• **allow_sell**: _boolean_

Defined in: [withdraw/WithdrawAPI.ts:53](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/withdraw/WithdrawAPI.ts#L53)

---

### allow_withdraw

• **allow_withdraw**: _boolean_

Defined in: [withdraw/WithdrawAPI.ts:54](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/withdraw/WithdrawAPI.ts#L54)

---

### currency

• **currency**: _string_

Defined in: [withdraw/WithdrawAPI.ts:55](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/withdraw/WithdrawAPI.ts#L55)

---

### id

• **id**: _string_

Defined in: [withdraw/WithdrawAPI.ts:56](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/withdraw/WithdrawAPI.ts#L56)

---

### limits

• **limits**: _object_

#### Type declaration:

| Name          | Type                                                                 |
| :------------ | :------------------------------------------------------------------- |
| `buy`         | [_PaymentMethodLimit_](withdraw_withdrawapi.paymentmethodlimit.md)[] |
| `deposit`     | [_PaymentMethodLimit_](withdraw_withdrawapi.paymentmethodlimit.md)[] |
| `instant_buy` | [_PaymentMethodLimit_](withdraw_withdrawapi.paymentmethodlimit.md)[] |
| `sell`        | [_PaymentMethodLimit_](withdraw_withdrawapi.paymentmethodlimit.md)[] |

Defined in: [withdraw/WithdrawAPI.ts:57](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/withdraw/WithdrawAPI.ts#L57)

---

### name

• **name**: _string_

Defined in: [withdraw/WithdrawAPI.ts:63](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/withdraw/WithdrawAPI.ts#L63)

---

### primary_buy

• **primary_buy**: _boolean_

Defined in: [withdraw/WithdrawAPI.ts:64](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/withdraw/WithdrawAPI.ts#L64)

---

### primary_sell

• **primary_sell**: _boolean_

Defined in: [withdraw/WithdrawAPI.ts:65](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/withdraw/WithdrawAPI.ts#L65)

---

### type

• **type**: _string_

Defined in: [withdraw/WithdrawAPI.ts:66](https://github.com/bennycode/coinbase-pro-node/blob/3a89239/src/withdraw/WithdrawAPI.ts#L66)
