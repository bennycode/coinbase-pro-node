[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [order/OrderAPI](../modules/order_orderapi.md) / OrderListQueryParam

# Interface: OrderListQueryParam

[order/OrderAPI](../modules/order_orderapi.md).OrderListQueryParam

**`see`** https://docs.pro.coinbase.com/#list-orders

## Hierarchy

* *Pagination*

  ↳ **OrderListQueryParam**

## Table of contents

### Properties

- [after](order_orderapi.orderlistqueryparam.md#after)
- [before](order_orderapi.orderlistqueryparam.md#before)
- [limit](order_orderapi.orderlistqueryparam.md#limit)
- [product\_id](order_orderapi.orderlistqueryparam.md#product_id)
- [status](order_orderapi.orderlistqueryparam.md#status)

## Properties

### after

• `Optional` **after**: *string*

Request page after (older) this pagination id.

Inherited from: void

Defined in: [payload/common.ts:15](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/payload/common.ts#L15)

___

### before

• `Optional` **before**: *string*

Request page before (newer) this pagination id.

Inherited from: void

Defined in: [payload/common.ts:17](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/payload/common.ts#L17)

___

### limit

• `Optional` **limit**: *number*

Number of results per request. Maximum 100. Default 100.

Inherited from: void

Defined in: [payload/common.ts:19](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/payload/common.ts#L19)

___

### product\_id

• `Optional` **product\_id**: *string*

Only list orders for a specific product.

Defined in: [order/OrderAPI.ts:100](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L100)

___

### status

• `Optional` **status**: ([*OrderStatus*](../enums/order_orderapi.orderstatus.md) \| *all*)[]

Limit list of orders to these statuses. Passing "all" returns orders of all statuses. Default: [open, pending, active]

Defined in: [order/OrderAPI.ts:102](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/order/OrderAPI.ts#L102)
