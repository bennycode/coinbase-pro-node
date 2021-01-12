**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["product/ProductAPI"](../modules/_product_productapi_.md) / Product

# Interface: Product

## Hierarchy

- **Product**

## Index

### Properties

- [base_currency](_product_productapi_.product.md#base_currency)
- [base_increment](_product_productapi_.product.md#base_increment)
- [base_max_size](_product_productapi_.product.md#base_max_size)
- [base_min_size](_product_productapi_.product.md#base_min_size)
- [cancel_only](_product_productapi_.product.md#cancel_only)
- [display_name](_product_productapi_.product.md#display_name)
- [id](_product_productapi_.product.md#id)
- [limit_only](_product_productapi_.product.md#limit_only)
- [margin_enabled](_product_productapi_.product.md#margin_enabled)
- [max_market_funds](_product_productapi_.product.md#max_market_funds)
- [min_market_funds](_product_productapi_.product.md#min_market_funds)
- [post_only](_product_productapi_.product.md#post_only)
- [quote_currency](_product_productapi_.product.md#quote_currency)
- [quote_increment](_product_productapi_.product.md#quote_increment)
- [status](_product_productapi_.product.md#status)
- [status_message](_product_productapi_.product.md#status_message)
- [trading_disabled](_product_productapi_.product.md#trading_disabled)

## Properties

### base_currency

• **base_currency**: string

_Defined in [src/product/ProductAPI.ts:7](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/product/ProductAPI.ts#L7)_

---

### base_increment

• **base_increment**: string

_Defined in [src/product/ProductAPI.ts:8](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/product/ProductAPI.ts#L8)_

---

### base_max_size

• **base_max_size**: string

_Defined in [src/product/ProductAPI.ts:10](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/product/ProductAPI.ts#L10)_

Maximum order size

---

### base_min_size

• **base_min_size**: string

_Defined in [src/product/ProductAPI.ts:12](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/product/ProductAPI.ts#L12)_

Minimum order size

---

### cancel_only

• **cancel_only**: boolean

_Defined in [src/product/ProductAPI.ts:13](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/product/ProductAPI.ts#L13)_

---

### display_name

• **display_name**: string

_Defined in [src/product/ProductAPI.ts:14](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/product/ProductAPI.ts#L14)_

---

### id

• **id**: string

_Defined in [src/product/ProductAPI.ts:15](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/product/ProductAPI.ts#L15)_

---

### limit_only

• **limit_only**: boolean

_Defined in [src/product/ProductAPI.ts:16](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/product/ProductAPI.ts#L16)_

---

### margin_enabled

• **margin_enabled**: boolean

_Defined in [src/product/ProductAPI.ts:17](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/product/ProductAPI.ts#L17)_

---

### max_market_funds

• **max_market_funds**: string

_Defined in [src/product/ProductAPI.ts:18](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/product/ProductAPI.ts#L18)_

---

### min_market_funds

• **min_market_funds**: string

_Defined in [src/product/ProductAPI.ts:19](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/product/ProductAPI.ts#L19)_

---

### post_only

• **post_only**: boolean

_Defined in [src/product/ProductAPI.ts:20](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/product/ProductAPI.ts#L20)_

---

### quote_currency

• **quote_currency**: string

_Defined in [src/product/ProductAPI.ts:21](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/product/ProductAPI.ts#L21)_

---

### quote_increment

• **quote_increment**: string

_Defined in [src/product/ProductAPI.ts:26](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/product/ProductAPI.ts#L26)_

Increment steps for min/max order size. The order price must be a multiple of this increment (i.e. if the increment is 0.01, order prices of 0.001 or 0.021 would be rejected).

---

### status

• **status**: \"online\"

_Defined in [src/product/ProductAPI.ts:27](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/product/ProductAPI.ts#L27)_

---

### status_message

• **status_message**: string

_Defined in [src/product/ProductAPI.ts:28](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/product/ProductAPI.ts#L28)_

---

### trading_disabled

• **trading_disabled**: boolean

_Defined in [src/product/ProductAPI.ts:29](https://github.com/bennycode/coinbase-pro-node/blob/a3ed45b/src/product/ProductAPI.ts#L29)_
