[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [transfer/TransferAPI](../modules/transfer_transferapi.md) / TransferInformation

# Interface: TransferInformation

[transfer/TransferAPI](../modules/transfer_transferapi.md).TransferInformation

## Table of contents

### Properties

- [account\_id](transfer_transferapi.transferinformation.md#account_id)
- [amount](transfer_transferapi.transferinformation.md#amount)
- [canceled\_at](transfer_transferapi.transferinformation.md#canceled_at)
- [completed\_at](transfer_transferapi.transferinformation.md#completed_at)
- [created\_at](transfer_transferapi.transferinformation.md#created_at)
- [details](transfer_transferapi.transferinformation.md#details)
- [id](transfer_transferapi.transferinformation.md#id)
- [processed\_at](transfer_transferapi.transferinformation.md#processed_at)
- [type](transfer_transferapi.transferinformation.md#type)
- [user\_id](transfer_transferapi.transferinformation.md#user_id)
- [user\_nonce](transfer_transferapi.transferinformation.md#user_nonce)

## Properties

### account\_id

• **account\_id**: *string*

Defined in: [transfer/TransferAPI.ts:5](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/transfer/TransferAPI.ts#L5)

___

### amount

• **amount**: *string*

Defined in: [transfer/TransferAPI.ts:6](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/transfer/TransferAPI.ts#L6)

___

### canceled\_at

• `Optional` **canceled\_at**: *string*

Defined in: [transfer/TransferAPI.ts:7](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/transfer/TransferAPI.ts#L7)

___

### completed\_at

• `Optional` **completed\_at**: *string*

Defined in: [transfer/TransferAPI.ts:8](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/transfer/TransferAPI.ts#L8)

___

### created\_at

• **created\_at**: *string*

Defined in: [transfer/TransferAPI.ts:9](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/transfer/TransferAPI.ts#L9)

___

### details

• **details**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`coinbase_account_id`? | *string* |
`coinbase_payment_method_id`? | *string* |
`coinbase_transaction_id`? | *string* |
`coinbase_withdrawal_id`? | *string* |
`crypto_address`? | *string* |
`crypto_transaction_hash`? | *string* |
`crypto_transaction_id`? | *string* |
`destination_tag` | *string* |
`destination_tag_name`? | *string* |
`sent_to_address`? | *string* |

Defined in: [transfer/TransferAPI.ts:10](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/transfer/TransferAPI.ts#L10)

___

### id

• **id**: *string*

Defined in: [transfer/TransferAPI.ts:22](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/transfer/TransferAPI.ts#L22)

___

### processed\_at

• `Optional` **processed\_at**: *string*

Defined in: [transfer/TransferAPI.ts:23](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/transfer/TransferAPI.ts#L23)

___

### type

• **type**: *string*

Defined in: [transfer/TransferAPI.ts:24](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/transfer/TransferAPI.ts#L24)

___

### user\_id

• **user\_id**: *string*

Defined in: [transfer/TransferAPI.ts:25](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/transfer/TransferAPI.ts#L25)

___

### user\_nonce

• `Optional` **user\_nonce**: *string*

Defined in: [transfer/TransferAPI.ts:26](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/transfer/TransferAPI.ts#L26)
