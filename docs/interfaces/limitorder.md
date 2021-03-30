[coinbase-pro-node](../README.md) / [Exports](../modules.md) / LimitOrder

# Interface: LimitOrder

## Hierarchy

* *BaseOrder*

  ↳ **LimitOrder**

  ↳↳ [*AutoCancelLimitOrder*](autocancellimitorder.md)

  ↳↳ [*PostOnlyLimitOrder*](postonlylimitorder.md)

## Table of contents

### Properties

- [client\_oid](limitorder.md#client_oid)
- [price](limitorder.md#price)
- [product\_id](limitorder.md#product_id)
- [side](limitorder.md#side)
- [size](limitorder.md#size)
- [stop](limitorder.md#stop)
- [stop\_price](limitorder.md#stop_price)
- [stp](limitorder.md#stp)
- [time\_in\_force](limitorder.md#time_in_force)
- [type](limitorder.md#type)

## Properties

### client\_oid

• `Optional` **client\_oid**: *string*

Inherited from: void

Defined in: [order/OrderAPI.ts:31](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L31)

___

### price

• **price**: *string*

Defined in: [order/OrderAPI.ts:69](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L69)

___

### product\_id

• **product\_id**: *string*

Inherited from: void

Defined in: [order/OrderAPI.ts:32](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L32)

___

### side

• **side**: [*OrderSide*](../enums/orderside.md)

Inherited from: void

Defined in: [order/OrderAPI.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L33)

___

### size

• **size**: *string*

Defined in: [order/OrderAPI.ts:70](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L70)

___

### stop

• `Optional` **stop**: *loss* \| *entry*

Inherited from: void

Defined in: [order/OrderAPI.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L34)

___

### stop\_price

• `Optional` **stop\_price**: *string*

Inherited from: void

Defined in: [order/OrderAPI.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L35)

___

### stp

• `Optional` **stp**: [*SelfTradePrevention*](../enums/selftradeprevention.md)

Inherited from: void

Defined in: [order/OrderAPI.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L36)

___

### time\_in\_force

• `Optional` **time\_in\_force**: [*TimeInForce*](../enums/timeinforce.md)

Default is 'GTC'.

Defined in: [order/OrderAPI.ts:72](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L72)

___

### type

• **type**: [*LIMIT*](../enums/ordertype.md#limit)

Defined in: [order/OrderAPI.ts:73](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L73)
