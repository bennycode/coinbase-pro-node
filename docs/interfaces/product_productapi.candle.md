[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [product/ProductAPI](../modules/product_productapi.md) / Candle

# Interface: Candle

[product/ProductAPI](../modules/product_productapi.md).Candle

## Table of contents

### Properties

- [base](product_productapi.candle.md#base)
- [close](product_productapi.candle.md#close)
- [counter](product_productapi.candle.md#counter)
- [high](product_productapi.candle.md#high)
- [low](product_productapi.candle.md#low)
- [open](product_productapi.candle.md#open)
- [openTimeInISO](product_productapi.candle.md#opentimeiniso)
- [openTimeInMillis](product_productapi.candle.md#opentimeinmillis)
- [productId](product_productapi.candle.md#productid)
- [sizeInMillis](product_productapi.candle.md#sizeinmillis)
- [volume](product_productapi.candle.md#volume)

## Properties

### base

• **base**: _string_

ID of base asset

Defined in: [product/ProductAPI.ts:148](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/product/ProductAPI.ts#L148)

---

### close

• **close**: _number_

Closing price (last trade) in the bucket interval

Defined in: [product/ProductAPI.ts:150](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/product/ProductAPI.ts#L150)

---

### counter

• **counter**: _string_

ID of quote asset

Defined in: [product/ProductAPI.ts:152](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/product/ProductAPI.ts#L152)

---

### high

• **high**: _number_

Highest price during the bucket interval

Defined in: [product/ProductAPI.ts:154](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/product/ProductAPI.ts#L154)

---

### low

• **low**: _number_

Lowest price during the bucket interval

Defined in: [product/ProductAPI.ts:156](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/product/ProductAPI.ts#L156)

---

### open

• **open**: _number_

Opening price (first trade) in the bucket interval

Defined in: [product/ProductAPI.ts:158](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/product/ProductAPI.ts#L158)

---

### openTimeInISO

• **openTimeInISO**: _string_

Bucket start time in simplified extended ISO 8601 format

Defined in: [product/ProductAPI.ts:160](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/product/ProductAPI.ts#L160)

---

### openTimeInMillis

• **openTimeInMillis**: _number_

Bucket start time converted to milliseconds (note: Coinbase Pro actually uses seconds)

Defined in: [product/ProductAPI.ts:162](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/product/ProductAPI.ts#L162)

---

### productId

• **productId**: _string_

Product ID / Symbol

Defined in: [product/ProductAPI.ts:164](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/product/ProductAPI.ts#L164)

---

### sizeInMillis

• **sizeInMillis**: _number_

Candle size in milliseconds

Defined in: [product/ProductAPI.ts:166](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/product/ProductAPI.ts#L166)

---

### volume

• **volume**: _number_

Volume of trading activity during the bucket interval

Defined in: [product/ProductAPI.ts:168](https://github.com/bennycode/coinbase-pro-node/blob/845b71d/src/product/ProductAPI.ts#L168)
