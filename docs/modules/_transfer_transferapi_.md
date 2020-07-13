[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["transfer/TransferAPI"](_transfer_transferapi_.md)

# Module: "transfer/TransferAPI"

## Index

### Classes

- [TransferAPI](../classes/_transfer_transferapi_.transferapi.md)

### Type aliases

- [TransferInformation](_transfer_transferapi_.md#transferinformation)

## Type aliases

### TransferInformation

Ƭ **TransferInformation**: _object_

_Defined in [src/transfer/TransferAPI.ts:4](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/transfer/TransferAPI.ts#L4)_

#### Type declaration:

- **account_id**: _string_

- **amount**: _string_

- **canceled_at**? : _undefined | string_

- **completed_at**? : _undefined | string_

- **created_at**: _string_

- **details**(): _object_

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

- **id**: _string_

- **processed_at**? : _undefined | string_

- **type**: _string_

- **user_id**: _string_

- **user_nonce**? : _undefined | string_
