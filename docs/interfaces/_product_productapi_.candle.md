[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["product/ProductAPI"](../modules/_product_productapi_.md) › [Candle](_product_productapi_.candle.md)

# Interface: Candle

## Hierarchy

- **Candle**

## Index

### Properties

- [base](_product_productapi_.candle.md#base)
- [close](_product_productapi_.candle.md#close)
- [counter](_product_productapi_.candle.md#counter)
- [high](_product_productapi_.candle.md#high)
- [low](_product_productapi_.candle.md#low)
- [open](_product_productapi_.candle.md#open)
- [openTimeInISO](_product_productapi_.candle.md#opentimeiniso)
- [openTimeInMillis](_product_productapi_.candle.md#opentimeinmillis)
- [productId](_product_productapi_.candle.md#productid)
- [sizeInMillis](_product_productapi_.candle.md#sizeinmillis)
- [volume](_product_productapi_.candle.md#volume)

## Properties

### base

• **base**: _string_

_Defined in [src/product/ProductAPI.ts:148](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/product/ProductAPI.ts#L148)_

ID of base asset

---

### close

• **close**: _Close_

_Defined in [src/product/ProductAPI.ts:150](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/product/ProductAPI.ts#L150)_

Closing price (last trade) in the bucket interval

---

### counter

• **counter**: _string_

_Defined in [src/product/ProductAPI.ts:152](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/product/ProductAPI.ts#L152)_

ID of quote asset

---

### high

• **high**: _High_

_Defined in [src/product/ProductAPI.ts:154](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/product/ProductAPI.ts#L154)_

Highest price during the bucket interval

---

### low

• **low**: _Low_

_Defined in [src/product/ProductAPI.ts:156](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/product/ProductAPI.ts#L156)_

Lowest price during the bucket interval

---

### open

• **open**: _Open_

_Defined in [src/product/ProductAPI.ts:158](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/product/ProductAPI.ts#L158)_

Opening price (first trade) in the bucket interval

---

### openTimeInISO

• **openTimeInISO**: _ISO_8601_MS_UTC_

_Defined in [src/product/ProductAPI.ts:160](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/product/ProductAPI.ts#L160)_

Bucket start time in simplified extended ISO 8601 format

---

### openTimeInMillis

• **openTimeInMillis**: _number_

_Defined in [src/product/ProductAPI.ts:162](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/product/ProductAPI.ts#L162)_

Bucket start time converted to milliseconds (note: Coinbase Pro actually uses seconds)

---

### productId

• **productId**: _string_

_Defined in [src/product/ProductAPI.ts:164](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/product/ProductAPI.ts#L164)_

Product ID / Symbol

---

### sizeInMillis

• **sizeInMillis**: _number_

_Defined in [src/product/ProductAPI.ts:166](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/product/ProductAPI.ts#L166)_

Candle size in milliseconds

---

### volume

• **volume**: _Volume_

_Defined in [src/product/ProductAPI.ts:168](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/product/ProductAPI.ts#L168)_

Volume of trading activity during the bucket interval
