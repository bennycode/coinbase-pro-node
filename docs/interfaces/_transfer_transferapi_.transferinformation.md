**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["transfer/TransferAPI"](../modules/_transfer_transferapi_.md) / TransferInformation

# Interface: TransferInformation

## Hierarchy

- **TransferInformation**

## Index

### Properties

- [account_id](_transfer_transferapi_.transferinformation.md#account_id)
- [amount](_transfer_transferapi_.transferinformation.md#amount)
- [canceled_at](_transfer_transferapi_.transferinformation.md#canceled_at)
- [completed_at](_transfer_transferapi_.transferinformation.md#completed_at)
- [created_at](_transfer_transferapi_.transferinformation.md#created_at)
- [details](_transfer_transferapi_.transferinformation.md#details)
- [id](_transfer_transferapi_.transferinformation.md#id)
- [processed_at](_transfer_transferapi_.transferinformation.md#processed_at)
- [type](_transfer_transferapi_.transferinformation.md#type)
- [user_id](_transfer_transferapi_.transferinformation.md#user_id)
- [user_nonce](_transfer_transferapi_.transferinformation.md#user_nonce)

## Properties

### account_id

• **account_id**: string

_Defined in [src/transfer/TransferAPI.ts:5](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/transfer/TransferAPI.ts#L5)_

---

### amount

• **amount**: string

_Defined in [src/transfer/TransferAPI.ts:6](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/transfer/TransferAPI.ts#L6)_

---

### canceled_at

• `Optional` **canceled_at**: ISO_8601_MS_UTC

_Defined in [src/transfer/TransferAPI.ts:7](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/transfer/TransferAPI.ts#L7)_

---

### completed_at

• `Optional` **completed_at**: ISO_8601_MS_UTC

_Defined in [src/transfer/TransferAPI.ts:8](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/transfer/TransferAPI.ts#L8)_

---

### created_at

• **created_at**: ISO_8601_MS_UTC

_Defined in [src/transfer/TransferAPI.ts:9](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/transfer/TransferAPI.ts#L9)_

---

### details

• **details**: { coinbase_account_id?: undefined \| string ; coinbase_payment_method_id?: undefined \| string ; coinbase_transaction_id?: undefined \| string ; coinbase_withdrawal_id?: undefined \| string ; crypto_address?: undefined \| string ; crypto_transaction_hash?: undefined \| string ; crypto_transaction_id?: undefined \| string ; destination_tag: string ; destination_tag_name?: undefined \| string ; sent_to_address?: undefined \| string }

_Defined in [src/transfer/TransferAPI.ts:10](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/transfer/TransferAPI.ts#L10)_

#### Type declaration:

| Name                          | Type                |
| ----------------------------- | ------------------- |
| `coinbase_account_id?`        | undefined \| string |
| `coinbase_payment_method_id?` | undefined \| string |
| `coinbase_transaction_id?`    | undefined \| string |
| `coinbase_withdrawal_id?`     | undefined \| string |
| `crypto_address?`             | undefined \| string |
| `crypto_transaction_hash?`    | undefined \| string |
| `crypto_transaction_id?`      | undefined \| string |
| `destination_tag`             | string              |
| `destination_tag_name?`       | undefined \| string |
| `sent_to_address?`            | undefined \| string |

---

### id

• **id**: string

_Defined in [src/transfer/TransferAPI.ts:22](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/transfer/TransferAPI.ts#L22)_

---

### processed_at

• `Optional` **processed_at**: ISO_8601_MS_UTC

_Defined in [src/transfer/TransferAPI.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/transfer/TransferAPI.ts#L23)_

---

### type

• **type**: string

_Defined in [src/transfer/TransferAPI.ts:24](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/transfer/TransferAPI.ts#L24)_

---

### user_id

• **user_id**: string

_Defined in [src/transfer/TransferAPI.ts:25](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/transfer/TransferAPI.ts#L25)_

---

### user_nonce

• `Optional` **user_nonce**: undefined \| string

_Defined in [src/transfer/TransferAPI.ts:26](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/transfer/TransferAPI.ts#L26)_
