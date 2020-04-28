[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["product/ProductAPI"](../modules/_product_productapi_.md) › [Candle](_product_productapi_.candle.md)

# Interface: Candle

## Hierarchy

- **Candle**

## Index

### Properties

- [close](_product_productapi_.candle.md#close)
- [high](_product_productapi_.candle.md#high)
- [low](_product_productapi_.candle.md#low)
- [open](_product_productapi_.candle.md#open)
- [openTime](_product_productapi_.candle.md#opentime)
- [openTimeString](_product_productapi_.candle.md#opentimestring)
- [volume](_product_productapi_.candle.md#volume)

## Properties

### close

• **close**: _Close_

_Defined in [src/product/ProductAPI.ts:147](https://github.com/bennyn/coinbase-pro-node/blob/1a12582/src/product/ProductAPI.ts#L147)_

Closing price (last trade) in the bucket interval

---

### high

• **high**: _High_

_Defined in [src/product/ProductAPI.ts:149](https://github.com/bennyn/coinbase-pro-node/blob/1a12582/src/product/ProductAPI.ts#L149)_

Highest price during the bucket interval

---

### low

• **low**: _Low_

_Defined in [src/product/ProductAPI.ts:151](https://github.com/bennyn/coinbase-pro-node/blob/1a12582/src/product/ProductAPI.ts#L151)_

Lowest price during the bucket interval

---

### open

• **open**: _Open_

_Defined in [src/product/ProductAPI.ts:153](https://github.com/bennyn/coinbase-pro-node/blob/1a12582/src/product/ProductAPI.ts#L153)_

Opening price (first trade) in the bucket interval

---

### openTime

• **openTime**: _Timestamp_

_Defined in [src/product/ProductAPI.ts:155](https://github.com/bennyn/coinbase-pro-node/blob/1a12582/src/product/ProductAPI.ts#L155)_

Bucket start time converted to milliseconds (note: Coinbase Pro actually uses seconds)

---

### openTimeString

• **openTimeString**: _ISO_8601_MS_UTC_

_Defined in [src/product/ProductAPI.ts:157](https://github.com/bennyn/coinbase-pro-node/blob/1a12582/src/product/ProductAPI.ts#L157)_

Bucket start time in simplified extended ISO 8601 format

---

### volume

• **volume**: _Volume_

_Defined in [src/product/ProductAPI.ts:159](https://github.com/bennyn/coinbase-pro-node/blob/1a12582/src/product/ProductAPI.ts#L159)_

Volume of trading activity during the bucket interval
