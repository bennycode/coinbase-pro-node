[coinbase-pro-node](../README.md) / [Exports](../modules.md) / OrderListByStatus

# Interface: OrderListByStatus

## Hierarchy

- [_Pagination_](pagination.md)

  ↳ **OrderListByStatus**

## Table of contents

### Properties

- [after](orderlistbystatus.md#after)
- [before](orderlistbystatus.md#before)
- [limit](orderlistbystatus.md#limit)
- [status](orderlistbystatus.md#status)

## Properties

### after

• `Optional` **after**: _string_

Request page after (older) this pagination id.

Inherited from: [Pagination](pagination.md).[after](pagination.md#after)

Defined in: [payload/common.ts:15](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/payload/common.ts#L15)

---

### before

• `Optional` **before**: _string_

Request page before (newer) this pagination id.

Inherited from: [Pagination](pagination.md).[before](pagination.md#before)

Defined in: [payload/common.ts:17](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/payload/common.ts#L17)

---

### limit

• `Optional` **limit**: _number_

Number of results per request. Maximum 100. Default 100.

Inherited from: [Pagination](pagination.md).[limit](pagination.md#limit)

Defined in: [payload/common.ts:19](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/payload/common.ts#L19)

---

### status

• `Optional` **status**: ([_OrderStatus_](../enums/orderstatus.md) \| `"all"`)[]

Limit list of orders to these statuses. Passing "all" returns orders of all statuses. Default: [open, pending, active]

Defined in: [order/OrderAPI.ts:104](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L104)
