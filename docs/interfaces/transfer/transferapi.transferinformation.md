[coinbase-pro-node](../../README.md) / [Exports](../../modules.md) / [transfer/TransferAPI](../../modules/transfer_transferapi.md) / TransferInformation

# Interface: TransferInformation

[transfer/TransferAPI](../../modules/transfer_transferapi.md).TransferInformation

## Hierarchy

- **TransferInformation**

## Table of contents

### Properties

- [account_id](transferapi.transferinformation.md#account_id)
- [amount](transferapi.transferinformation.md#amount)
- [canceled_at](transferapi.transferinformation.md#canceled_at)
- [completed_at](transferapi.transferinformation.md#completed_at)
- [created_at](transferapi.transferinformation.md#created_at)
- [details](transferapi.transferinformation.md#details)
- [id](transferapi.transferinformation.md#id)
- [processed_at](transferapi.transferinformation.md#processed_at)
- [type](transferapi.transferinformation.md#type)
- [user_id](transferapi.transferinformation.md#user_id)
- [user_nonce](transferapi.transferinformation.md#user_nonce)

## Properties

### account_id

• **account_id**: _string_

Defined in: [transfer/TransferAPI.ts:5](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/transfer/TransferAPI.ts#L5)

---

### amount

• **amount**: _string_

Defined in: [transfer/TransferAPI.ts:6](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/transfer/TransferAPI.ts#L6)

---

### canceled_at

• `Optional` **canceled_at**: _undefined_ \| _string_

Defined in: [transfer/TransferAPI.ts:7](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/transfer/TransferAPI.ts#L7)

---

### completed_at

• `Optional` **completed_at**: _undefined_ \| _string_

Defined in: [transfer/TransferAPI.ts:8](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/transfer/TransferAPI.ts#L8)

---

### created_at

• **created_at**: _string_

Defined in: [transfer/TransferAPI.ts:9](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/transfer/TransferAPI.ts#L9)

---

### details

• **details**: { `coinbase_account_id?`: _undefined_ \| _string_ ; `coinbase_payment_method_id?`: _undefined_ \| _string_ ; `coinbase_transaction_id?`: _undefined_ \| _string_ ; `coinbase_withdrawal_id?`: _undefined_ \| _string_ ; `crypto_address?`: _undefined_ \| _string_ ; `crypto_transaction_hash?`: _undefined_ \| _string_ ; `crypto_transaction_id?`: _undefined_ \| _string_ ; `destination_tag`: _string_ ; `destination_tag_name?`: _undefined_ \| _string_ ; `sent_to_address?`: _undefined_ \| _string_ }

#### Type declaration:

| Name                          | Type                    |
| ----------------------------- | ----------------------- |
| `coinbase_account_id?`        | _undefined_ \| _string_ |
| `coinbase_payment_method_id?` | _undefined_ \| _string_ |
| `coinbase_transaction_id?`    | _undefined_ \| _string_ |
| `coinbase_withdrawal_id?`     | _undefined_ \| _string_ |
| `crypto_address?`             | _undefined_ \| _string_ |
| `crypto_transaction_hash?`    | _undefined_ \| _string_ |
| `crypto_transaction_id?`      | _undefined_ \| _string_ |
| `destination_tag`             | _string_                |
| `destination_tag_name?`       | _undefined_ \| _string_ |
| `sent_to_address?`            | _undefined_ \| _string_ |

Defined in: [transfer/TransferAPI.ts:10](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/transfer/TransferAPI.ts#L10)

---

### id

• **id**: _string_

Defined in: [transfer/TransferAPI.ts:22](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/transfer/TransferAPI.ts#L22)

---

### processed_at

• `Optional` **processed_at**: _undefined_ \| _string_

Defined in: [transfer/TransferAPI.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/transfer/TransferAPI.ts#L23)

---

### type

• **type**: _string_

Defined in: [transfer/TransferAPI.ts:24](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/transfer/TransferAPI.ts#L24)

---

### user_id

• **user_id**: _string_

Defined in: [transfer/TransferAPI.ts:25](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/transfer/TransferAPI.ts#L25)

---

### user_nonce

• `Optional` **user_nonce**: _undefined_ \| _string_

Defined in: [transfer/TransferAPI.ts:26](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/transfer/TransferAPI.ts#L26)
