[coinbase-pro-node](../README.md) / [Exports](../modules.md) / OrderListQueryParam

# Interface: OrderListQueryParam

**`see`** https://docs.pro.coinbase.com/#list-orders

## Hierarchy

- `Pagination`

  ↳ **`OrderListQueryParam`**

## Table of contents

### Properties

- [product\_id](OrderListQueryParam.md#product_id)
- [status](OrderListQueryParam.md#status)

## Properties

### product\_id

• `Optional` **product\_id**: `string`

Only list orders for a specific product.

#### Defined in

[order/OrderAPI.ts:101](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L101)

___

### status

• `Optional` **status**: ([`OrderStatus`](../enums/OrderStatus.md) \| ``"all"``)[]

Limit list of orders to these statuses. Passing "all" returns orders of all statuses. Default: [open, pending, active]

#### Defined in

[order/OrderAPI.ts:103](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/order/OrderAPI.ts#L103)
