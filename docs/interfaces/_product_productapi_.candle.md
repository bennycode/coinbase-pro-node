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

_Defined in [src/product/ProductAPI.ts:147](https://github.com/bennyn/coinbase-pro-node/blob/6dc414a/src/product/ProductAPI.ts#L147)_

ID of base asset

---

### close

• **close**: _Close_

_Defined in [src/product/ProductAPI.ts:149](https://github.com/bennyn/coinbase-pro-node/blob/6dc414a/src/product/ProductAPI.ts#L149)_

Closing price (last trade) in the bucket interval

---

### counter

• **counter**: _string_

_Defined in [src/product/ProductAPI.ts:151](https://github.com/bennyn/coinbase-pro-node/blob/6dc414a/src/product/ProductAPI.ts#L151)_

ID of quote asset

---

### high

• **high**: _High_

_Defined in [src/product/ProductAPI.ts:153](https://github.com/bennyn/coinbase-pro-node/blob/6dc414a/src/product/ProductAPI.ts#L153)_

Highest price during the bucket interval

---

### low

• **low**: _Low_

_Defined in [src/product/ProductAPI.ts:155](https://github.com/bennyn/coinbase-pro-node/blob/6dc414a/src/product/ProductAPI.ts#L155)_

Lowest price during the bucket interval

---

### open

• **open**: _Open_

_Defined in [src/product/ProductAPI.ts:157](https://github.com/bennyn/coinbase-pro-node/blob/6dc414a/src/product/ProductAPI.ts#L157)_

Opening price (first trade) in the bucket interval

---

### openTimeInISO

• **openTimeInISO**: _ISO_8601_MS_UTC_

_Defined in [src/product/ProductAPI.ts:159](https://github.com/bennyn/coinbase-pro-node/blob/6dc414a/src/product/ProductAPI.ts#L159)_

Bucket start time in simplified extended ISO 8601 format

---

### openTimeInMillis

• **openTimeInMillis**: _number_

_Defined in [src/product/ProductAPI.ts:161](https://github.com/bennyn/coinbase-pro-node/blob/6dc414a/src/product/ProductAPI.ts#L161)_

Bucket start time converted to milliseconds (note: Coinbase Pro actually uses seconds)

---

### productId

• **productId**: _string_

_Defined in [src/product/ProductAPI.ts:163](https://github.com/bennyn/coinbase-pro-node/blob/6dc414a/src/product/ProductAPI.ts#L163)_

Product ID / Symbol

---

### sizeInMillis

• **sizeInMillis**: _number_

_Defined in [src/product/ProductAPI.ts:165](https://github.com/bennyn/coinbase-pro-node/blob/6dc414a/src/product/ProductAPI.ts#L165)_

Candle size in milliseconds

---

### volume

• **volume**: _Volume_

_Defined in [src/product/ProductAPI.ts:167](https://github.com/bennyn/coinbase-pro-node/blob/6dc414a/src/product/ProductAPI.ts#L167)_

Volume of trading activity during the bucket interval
