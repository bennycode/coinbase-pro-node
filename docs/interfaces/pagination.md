[coinbase-pro-node](../README.md) / [Exports](../modules.md) / Pagination

# Interface: Pagination

**`see`** https://docs.pro.coinbase.com/#pagination

## Hierarchy

- **Pagination**

  ↳ [_OrderListQueryParam_](orderlistqueryparam.md)

## Table of contents

### Properties

- [after](pagination.md#after)
- [before](pagination.md#before)
- [limit](pagination.md#limit)

## Properties

### after

• `Optional` **after**: _string_

Request page after (older) this pagination id.

Defined in: [payload/common.ts:15](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/payload/common.ts#L15)

---

### before

• `Optional` **before**: _string_

Request page before (newer) this pagination id.

Defined in: [payload/common.ts:17](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/payload/common.ts#L17)

---

### limit

• `Optional` **limit**: _number_

Number of results per request. Maximum 100. Default 100.

Defined in: [payload/common.ts:19](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/payload/common.ts#L19)
