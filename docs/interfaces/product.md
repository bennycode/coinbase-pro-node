[coinbase-pro-node](../README.md) / [Exports](../modules.md) / Product

# Interface: Product

## Table of contents

### Properties

- [base_currency](product.md#base_currency)
- [base_increment](product.md#base_increment)
- [base_max_size](product.md#base_max_size)
- [base_min_size](product.md#base_min_size)
- [cancel_only](product.md#cancel_only)
- [display_name](product.md#display_name)
- [id](product.md#id)
- [limit_only](product.md#limit_only)
- [margin_enabled](product.md#margin_enabled)
- [max_market_funds](product.md#max_market_funds)
- [min_market_funds](product.md#min_market_funds)
- [post_only](product.md#post_only)
- [quote_currency](product.md#quote_currency)
- [quote_increment](product.md#quote_increment)
- [status](product.md#status)
- [status_message](product.md#status_message)
- [trading_disabled](product.md#trading_disabled)

## Properties

### base_currency

• **base_currency**: _string_

Defined in: [product/ProductAPI.ts:7](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L7)

---

### base_increment

• **base_increment**: _string_

Defined in: [product/ProductAPI.ts:8](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L8)

---

### base_max_size

• **base_max_size**: _string_

Maximum order size

Defined in: [product/ProductAPI.ts:10](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L10)

---

### base_min_size

• **base_min_size**: _string_

Minimum order size

Defined in: [product/ProductAPI.ts:12](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L12)

---

### cancel_only

• **cancel_only**: _boolean_

Defined in: [product/ProductAPI.ts:13](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L13)

---

### display_name

• **display_name**: _string_

Defined in: [product/ProductAPI.ts:14](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L14)

---

### id

• **id**: _string_

Defined in: [product/ProductAPI.ts:15](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L15)

---

### limit_only

• **limit_only**: _boolean_

Defined in: [product/ProductAPI.ts:16](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L16)

---

### margin_enabled

• **margin_enabled**: _boolean_

Defined in: [product/ProductAPI.ts:17](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L17)

---

### max_market_funds

• **max_market_funds**: _string_

Defined in: [product/ProductAPI.ts:18](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L18)

---

### min_market_funds

• **min_market_funds**: _string_

Defined in: [product/ProductAPI.ts:19](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L19)

---

### post_only

• **post_only**: _boolean_

Defined in: [product/ProductAPI.ts:20](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L20)

---

### quote_currency

• **quote_currency**: _string_

Defined in: [product/ProductAPI.ts:21](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L21)

---

### quote_increment

• **quote_increment**: _string_

Increment steps for min/max order size. The order price must be a multiple of this increment (i.e. if the increment is 0.01, order prices of 0.001 or 0.021 would be rejected).

Defined in: [product/ProductAPI.ts:26](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L26)

---

### status

• **status**: `"online"`

Defined in: [product/ProductAPI.ts:27](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L27)

---

### status_message

• **status_message**: _string_

Defined in: [product/ProductAPI.ts:28](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L28)

---

### trading_disabled

• **trading_disabled**: _boolean_

Defined in: [product/ProductAPI.ts:29](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L29)
