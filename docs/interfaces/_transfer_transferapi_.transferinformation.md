[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["transfer/TransferAPI"](../modules/_transfer_transferapi_.md) › [TransferInformation](_transfer_transferapi_.transferinformation.md)

# Interface: TransferInformation

## Hierarchy

- **TransferInformation**

## Index

### Properties

- [account_id](_transfer_transferapi_.transferinformation.md#account_id)
- [amount](_transfer_transferapi_.transferinformation.md#amount)
- [canceled_at](_transfer_transferapi_.transferinformation.md#optional-canceled_at)
- [completed_at](_transfer_transferapi_.transferinformation.md#optional-completed_at)
- [created_at](_transfer_transferapi_.transferinformation.md#created_at)
- [details](_transfer_transferapi_.transferinformation.md#details)
- [id](_transfer_transferapi_.transferinformation.md#id)
- [processed_at](_transfer_transferapi_.transferinformation.md#optional-processed_at)
- [type](_transfer_transferapi_.transferinformation.md#type)
- [user_id](_transfer_transferapi_.transferinformation.md#user_id)
- [user_nonce](_transfer_transferapi_.transferinformation.md#optional-user_nonce)

## Properties

### account_id

• **account_id**: _string_

_Defined in [src/transfer/TransferAPI.ts:5](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/transfer/TransferAPI.ts#L5)_

---

### amount

• **amount**: _string_

_Defined in [src/transfer/TransferAPI.ts:6](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/transfer/TransferAPI.ts#L6)_

---

### `Optional` canceled_at

• **canceled_at**? : _ISO_8601_MS_UTC_

_Defined in [src/transfer/TransferAPI.ts:7](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/transfer/TransferAPI.ts#L7)_

---

### `Optional` completed_at

• **completed_at**? : _ISO_8601_MS_UTC_

_Defined in [src/transfer/TransferAPI.ts:8](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/transfer/TransferAPI.ts#L8)_

---

### created_at

• **created_at**: _ISO_8601_MS_UTC_

_Defined in [src/transfer/TransferAPI.ts:9](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/transfer/TransferAPI.ts#L9)_

---

### details

• **details**: _object_

_Defined in [src/transfer/TransferAPI.ts:10](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/transfer/TransferAPI.ts#L10)_

#### Type declaration:

- **coinbase_account_id**? : _undefined | string_

- **coinbase_payment_method_id**? : _undefined | string_

- **coinbase_transaction_id**? : _undefined | string_

- **coinbase_withdrawal_id**? : _undefined | string_

- **crypto_address**? : _undefined | string_

- **crypto_transaction_hash**? : _undefined | string_

- **crypto_transaction_id**? : _undefined | string_

- **destination_tag**: _string_

- **destination_tag_name**? : _undefined | string_

- **sent_to_address**? : _undefined | string_

---

### id

• **id**: _string_

_Defined in [src/transfer/TransferAPI.ts:22](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/transfer/TransferAPI.ts#L22)_

---

### `Optional` processed_at

• **processed_at**? : _ISO_8601_MS_UTC_

_Defined in [src/transfer/TransferAPI.ts:23](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/transfer/TransferAPI.ts#L23)_

---

### type

• **type**: _string_

_Defined in [src/transfer/TransferAPI.ts:24](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/transfer/TransferAPI.ts#L24)_

---

### user_id

• **user_id**: _string_

_Defined in [src/transfer/TransferAPI.ts:25](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/transfer/TransferAPI.ts#L25)_

---

### `Optional` user_nonce

• **user_nonce**? : _undefined | string_

_Defined in [src/transfer/TransferAPI.ts:26](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/transfer/TransferAPI.ts#L26)_
