[coinbase-pro-node](../README.md) / [Exports](../modules.md) / OrderListQueryParam

# Interface: OrderListQueryParam

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getorders

## Hierarchy

- `Pagination`

  ↳ **`OrderListQueryParam`**

## Table of contents

### Properties

- [product_id](OrderListQueryParam.md#product_id)
- [status](OrderListQueryParam.md#status)

## Properties

### product_id

• `Optional` **product_id**: `string`

Only list orders for a specific product.

#### Defined in

[order/OrderAPI.ts:101](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/order/OrderAPI.ts#L101)

---

### status

• `Optional` **status**: (`"all"` \| [`OrderStatus`](../enums/OrderStatus.md))[]

Limit list of orders to these statuses. Passing "all" returns orders of all statuses. Default: [open, pending, active]

#### Defined in

[order/OrderAPI.ts:103](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/order/OrderAPI.ts#L103)
