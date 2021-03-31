[coinbase-pro-node](../README.md) / [Exports](../modules.md) / PostOnlyLimitOrder

# Interface: PostOnlyLimitOrder

## Hierarchy

* [*LimitOrder*](limitorder.md)

  ↳ **PostOnlyLimitOrder**

## Table of contents

### Properties

- [client\_oid](postonlylimitorder.md#client_oid)
- [post\_only](postonlylimitorder.md#post_only)
- [price](postonlylimitorder.md#price)
- [product\_id](postonlylimitorder.md#product_id)
- [side](postonlylimitorder.md#side)
- [size](postonlylimitorder.md#size)
- [stop](postonlylimitorder.md#stop)
- [stop\_price](postonlylimitorder.md#stop_price)
- [stp](postonlylimitorder.md#stp)
- [time\_in\_force](postonlylimitorder.md#time_in_force)
- [type](postonlylimitorder.md#type)

## Properties

### client\_oid

• `Optional` **client\_oid**: *string*

Inherited from: [LimitOrder](limitorder.md).[client_oid](limitorder.md#client_oid)

Defined in: [order/OrderAPI.ts:31](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/order/OrderAPI.ts#L31)

___

### post\_only

• **post\_only**: *boolean*

Defined in: [order/OrderAPI.ts:64](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/order/OrderAPI.ts#L64)

___

### price

• **price**: *string*

Inherited from: [LimitOrder](limitorder.md).[price](limitorder.md#price)

Defined in: [order/OrderAPI.ts:69](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/order/OrderAPI.ts#L69)

___

### product\_id

• **product\_id**: *string*

Inherited from: [LimitOrder](limitorder.md).[product_id](limitorder.md#product_id)

Defined in: [order/OrderAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/order/OrderAPI.ts#L32)

___

### side

• **side**: [*OrderSide*](../enums/orderside.md)

Inherited from: [LimitOrder](limitorder.md).[side](limitorder.md#side)

Defined in: [order/OrderAPI.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/order/OrderAPI.ts#L33)

___

### size

• **size**: *string*

Inherited from: [LimitOrder](limitorder.md).[size](limitorder.md#size)

Defined in: [order/OrderAPI.ts:70](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/order/OrderAPI.ts#L70)

___

### stop

• `Optional` **stop**: *loss* \| *entry*

Inherited from: [LimitOrder](limitorder.md).[stop](limitorder.md#stop)

Defined in: [order/OrderAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/order/OrderAPI.ts#L34)

___

### stop\_price

• `Optional` **stop\_price**: *string*

Inherited from: [LimitOrder](limitorder.md).[stop_price](limitorder.md#stop_price)

Defined in: [order/OrderAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/order/OrderAPI.ts#L35)

___

### stp

• `Optional` **stp**: [*SelfTradePrevention*](../enums/selftradeprevention.md)

Inherited from: [LimitOrder](limitorder.md).[stp](limitorder.md#stp)

Defined in: [order/OrderAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/order/OrderAPI.ts#L36)

___

### time\_in\_force

• **time\_in\_force**: [*GOOD\_TILL\_CANCELED*](../enums/timeinforce.md#good_till_canceled) \| [*GOOD\_TILL\_TIME*](../enums/timeinforce.md#good_till_time)

Default is 'GTC'.

Overrides: [LimitOrder](limitorder.md).[time_in_force](limitorder.md#time_in_force)

Defined in: [order/OrderAPI.ts:65](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/order/OrderAPI.ts#L65)

___

### type

• **type**: [*LIMIT*](../enums/ordertype.md#limit)

Inherited from: [LimitOrder](limitorder.md).[type](limitorder.md#type)

Defined in: [order/OrderAPI.ts:73](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/order/OrderAPI.ts#L73)
