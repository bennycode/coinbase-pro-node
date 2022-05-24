[coinbase-pro-node](../README.md) / [Exports](../modules.md) / Product

# Interface: Product

## Table of contents

### Properties

- [base_currency](Product.md#base_currency)
- [base_increment](Product.md#base_increment)
- [base_max_size](Product.md#base_max_size)
- [base_min_size](Product.md#base_min_size)
- [cancel_only](Product.md#cancel_only)
- [display_name](Product.md#display_name)
- [id](Product.md#id)
- [limit_only](Product.md#limit_only)
- [margin_enabled](Product.md#margin_enabled)
- [max_market_funds](Product.md#max_market_funds)
- [min_market_funds](Product.md#min_market_funds)
- [post_only](Product.md#post_only)
- [quote_currency](Product.md#quote_currency)
- [quote_increment](Product.md#quote_increment)
- [status](Product.md#status)
- [status_message](Product.md#status_message)
- [trading_disabled](Product.md#trading_disabled)

## Properties

### base_currency

• **base_currency**: `string`

#### Defined in

[product/ProductAPI.ts:7](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L7)

---

### base_increment

• **base_increment**: `string`

#### Defined in

[product/ProductAPI.ts:8](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L8)

---

### base_max_size

• **base_max_size**: `string`

Maximum order size

#### Defined in

[product/ProductAPI.ts:10](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L10)

---

### base_min_size

• **base_min_size**: `string`

Minimum order size

#### Defined in

[product/ProductAPI.ts:12](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L12)

---

### cancel_only

• **cancel_only**: `boolean`

#### Defined in

[product/ProductAPI.ts:13](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L13)

---

### display_name

• **display_name**: `string`

#### Defined in

[product/ProductAPI.ts:14](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L14)

---

### id

• **id**: `string`

#### Defined in

[product/ProductAPI.ts:15](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L15)

---

### limit_only

• **limit_only**: `boolean`

#### Defined in

[product/ProductAPI.ts:16](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L16)

---

### margin_enabled

• **margin_enabled**: `boolean`

#### Defined in

[product/ProductAPI.ts:17](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L17)

---

### max_market_funds

• **max_market_funds**: `string`

#### Defined in

[product/ProductAPI.ts:18](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L18)

---

### min_market_funds

• **min_market_funds**: `string`

#### Defined in

[product/ProductAPI.ts:19](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L19)

---

### post_only

• **post_only**: `boolean`

#### Defined in

[product/ProductAPI.ts:20](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L20)

---

### quote_currency

• **quote_currency**: `string`

#### Defined in

[product/ProductAPI.ts:21](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L21)

---

### quote_increment

• **quote_increment**: `string`

Increment steps for min/max order size. The order price must be a multiple of this increment (i.e. if the increment is 0.01, order prices of 0.001 or 0.021 would be rejected).

#### Defined in

[product/ProductAPI.ts:26](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L26)

---

### status

• **status**: `"online"`

#### Defined in

[product/ProductAPI.ts:27](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L27)

---

### status_message

• **status_message**: `string`

#### Defined in

[product/ProductAPI.ts:28](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L28)

---

### trading_disabled

• **trading_disabled**: `boolean`

#### Defined in

[product/ProductAPI.ts:29](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L29)
