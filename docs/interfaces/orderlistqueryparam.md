[coinbase-pro-node](../README.md) / [Exports](../modules.md) / OrderListQueryParam

# Interface: OrderListQueryParam

**`see`** https://docs.pro.coinbase.com/#list-orders

## Hierarchy

* [*Pagination*](pagination.md)

  ↳ **OrderListQueryParam**

## Table of contents

### Properties

- [after](orderlistqueryparam.md#after)
- [before](orderlistqueryparam.md#before)
- [limit](orderlistqueryparam.md#limit)
- [product\_id](orderlistqueryparam.md#product_id)
- [status](orderlistqueryparam.md#status)

## Properties

### after

• `Optional` **after**: *string*

Request page after (older) this pagination id.

Inherited from: [Pagination](pagination.md).[after](pagination.md#after)

Defined in: [payload/common.ts:15](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/payload/common.ts#L15)

___

### before

• `Optional` **before**: *string*

Request page before (newer) this pagination id.

Inherited from: [Pagination](pagination.md).[before](pagination.md#before)

Defined in: [payload/common.ts:17](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/payload/common.ts#L17)

___

### limit

• `Optional` **limit**: *number*

Number of results per request. Maximum 100. Default 100.

Inherited from: [Pagination](pagination.md).[limit](pagination.md#limit)

Defined in: [payload/common.ts:19](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/payload/common.ts#L19)

___

### product\_id

• `Optional` **product\_id**: *string*

Only list orders for a specific product.

Defined in: [order/OrderAPI.ts:100](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/order/OrderAPI.ts#L100)

___

### status

• `Optional` **status**: ([*OrderStatus*](../enums/orderstatus.md) \| *all*)[]

Limit list of orders to these statuses. Passing "all" returns orders of all statuses. Default: [open, pending, active]

Defined in: [order/OrderAPI.ts:102](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/order/OrderAPI.ts#L102)
