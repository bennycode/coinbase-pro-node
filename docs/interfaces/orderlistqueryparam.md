[coinbase-pro-node](../README.md) / [Exports](../modules.md) / OrderListQueryParam

# Interface: OrderListQueryParam

**`see`** https://docs.pro.coinbase.com/#list-orders

## Hierarchy

- [_Pagination_](pagination.md)

  ↳ **OrderListQueryParam**

## Table of contents

### Properties

- [after](orderlistqueryparam.md#after)
- [before](orderlistqueryparam.md#before)
- [limit](orderlistqueryparam.md#limit)
- [product_id](orderlistqueryparam.md#product_id)
- [status](orderlistqueryparam.md#status)

## Properties

### after

• `Optional` **after**: _string_

Request page after (older) this pagination id.

Inherited from: [Pagination](pagination.md).[after](pagination.md#after)

Defined in: [payload/common.ts:15](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/payload/common.ts#L15)

---

### before

• `Optional` **before**: _string_

Request page before (newer) this pagination id.

Inherited from: [Pagination](pagination.md).[before](pagination.md#before)

Defined in: [payload/common.ts:17](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/payload/common.ts#L17)

---

### limit

• `Optional` **limit**: _number_

Number of results per request. Maximum 100. Default 100.

Inherited from: [Pagination](pagination.md).[limit](pagination.md#limit)

Defined in: [payload/common.ts:19](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/payload/common.ts#L19)

---

### product_id

• `Optional` **product_id**: _string_

Only list orders for a specific product.

Defined in: [order/OrderAPI.ts:101](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/order/OrderAPI.ts#L101)

---

### status

• `Optional` **status**: ([_OrderStatus_](../enums/orderstatus.md) \| `"all"`)[]

Limit list of orders to these statuses. Passing "all" returns orders of all statuses. Default: [open, pending, active]

Defined in: [order/OrderAPI.ts:103](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/order/OrderAPI.ts#L103)
