[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [order/OrderAPI](../modules/order_orderapi.md) / OrderListQueryParam

# Interface: OrderListQueryParam

[order/OrderAPI](../modules/order_orderapi.md).OrderListQueryParam

**`see`** https://docs.pro.coinbase.com/#list-orders

## Hierarchy

- _Pagination_

  ↳ **OrderListQueryParam**

## Table of contents

### Properties

- [after](order_orderapi.orderlistqueryparam.md#after)
- [before](order_orderapi.orderlistqueryparam.md#before)
- [limit](order_orderapi.orderlistqueryparam.md#limit)
- [product_id](order_orderapi.orderlistqueryparam.md#product_id)
- [status](order_orderapi.orderlistqueryparam.md#status)

## Properties

### after

• `Optional` **after**: _string_

Request page after (older) this pagination id.

Inherited from: void

Defined in: [payload/common.ts:15](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/payload/common.ts#L15)

---

### before

• `Optional` **before**: _string_

Request page before (newer) this pagination id.

Inherited from: void

Defined in: [payload/common.ts:17](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/payload/common.ts#L17)

---

### limit

• `Optional` **limit**: _number_

Number of results per request. Maximum 100. Default 100.

Inherited from: void

Defined in: [payload/common.ts:19](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/payload/common.ts#L19)

---

### product_id

• `Optional` **product_id**: _string_

Only list orders for a specific product.

Defined in: [order/OrderAPI.ts:100](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/order/OrderAPI.ts#L100)

---

### status

• `Optional` **status**: ([_OrderStatus_](../enums/order_orderapi.orderstatus.md) \| _all_)[]

Limit list of orders to these statuses. Passing "all" returns orders of all statuses. Default: [open, pending, active]

Defined in: [order/OrderAPI.ts:102](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/order/OrderAPI.ts#L102)
