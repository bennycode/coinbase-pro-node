**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["product/ProductAPI"](../modules/_product_productapi_.md) / Candle

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

• **base**: string

_Defined in [src/product/ProductAPI.ts:148](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/product/ProductAPI.ts#L148)_

ID of base asset

---

### close

• **close**: Close

_Defined in [src/product/ProductAPI.ts:150](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/product/ProductAPI.ts#L150)_

Closing price (last trade) in the bucket interval

---

### counter

• **counter**: string

_Defined in [src/product/ProductAPI.ts:152](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/product/ProductAPI.ts#L152)_

ID of quote asset

---

### high

• **high**: High

_Defined in [src/product/ProductAPI.ts:154](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/product/ProductAPI.ts#L154)_

Highest price during the bucket interval

---

### low

• **low**: Low

_Defined in [src/product/ProductAPI.ts:156](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/product/ProductAPI.ts#L156)_

Lowest price during the bucket interval

---

### open

• **open**: Open

_Defined in [src/product/ProductAPI.ts:158](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/product/ProductAPI.ts#L158)_

Opening price (first trade) in the bucket interval

---

### openTimeInISO

• **openTimeInISO**: ISO_8601_MS_UTC

_Defined in [src/product/ProductAPI.ts:160](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/product/ProductAPI.ts#L160)_

Bucket start time in simplified extended ISO 8601 format

---

### openTimeInMillis

• **openTimeInMillis**: number

_Defined in [src/product/ProductAPI.ts:162](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/product/ProductAPI.ts#L162)_

Bucket start time converted to milliseconds (note: Coinbase Pro actually uses seconds)

---

### productId

• **productId**: string

_Defined in [src/product/ProductAPI.ts:164](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/product/ProductAPI.ts#L164)_

Product ID / Symbol

---

### sizeInMillis

• **sizeInMillis**: number

_Defined in [src/product/ProductAPI.ts:166](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/product/ProductAPI.ts#L166)_

Candle size in milliseconds

---

### volume

• **volume**: Volume

_Defined in [src/product/ProductAPI.ts:168](https://github.com/bennycode/coinbase-pro-node/blob/accd6f4/src/product/ProductAPI.ts#L168)_

Volume of trading activity during the bucket interval
