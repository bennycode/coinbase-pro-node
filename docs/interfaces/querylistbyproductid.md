[coinbase-pro-node](../README.md) / [Exports](../modules.md) / QueryListByProductId

# Interface: QueryListByProductId

## Hierarchy

- [_Pagination_](pagination.md)

  ↳ **QueryListByProductId**

## Table of contents

### Properties

- [after](querylistbyproductid.md#after)
- [before](querylistbyproductid.md#before)
- [limit](querylistbyproductid.md#limit)
- [product_id](querylistbyproductid.md#product_id)

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

### product_id

• **product_id**: _string_

Only list orders for a specific product.

Defined in: [order/OrderAPI.ts:99](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/order/OrderAPI.ts#L99)
