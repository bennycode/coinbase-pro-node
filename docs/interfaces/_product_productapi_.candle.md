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
- [time](_product_productapi_.candle.md#time)
- [timeString](_product_productapi_.candle.md#timestring)
- [volume](_product_productapi_.candle.md#volume)

## Properties

### close

• **close**: _Close_

_Defined in [src/product/ProductAPI.ts:142](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L142)_

Closing price (last trade) in the bucket interval

---

### high

• **high**: _High_

_Defined in [src/product/ProductAPI.ts:144](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L144)_

Highest price during the bucket interval

---

### low

• **low**: _Low_

_Defined in [src/product/ProductAPI.ts:146](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L146)_

Lowest price during the bucket interval

---

### open

• **open**: _Open_

_Defined in [src/product/ProductAPI.ts:148](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L148)_

Opening price (first trade) in the bucket interval

---

### time

• **time**: _Timestamp_

_Defined in [src/product/ProductAPI.ts:150](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L150)_

Bucket start time converted to milliseconds (note: Coinbase Pro actually uses seconds)

---

### timeString

• **timeString**: _ISO_8601_MS_UTC_

_Defined in [src/product/ProductAPI.ts:152](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L152)_

Bucket start time in simplified extended ISO 8601 format

---

### volume

• **volume**: _Volume_

_Defined in [src/product/ProductAPI.ts:154](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L154)_

Volume of trading activity during the bucket interval
