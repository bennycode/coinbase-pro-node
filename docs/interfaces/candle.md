[coinbase-pro-node](../README.md) / [Exports](../modules.md) / Candle

# Interface: Candle

## Table of contents

### Properties

- [base](candle.md#base)
- [close](candle.md#close)
- [counter](candle.md#counter)
- [high](candle.md#high)
- [low](candle.md#low)
- [open](candle.md#open)
- [openTimeInISO](candle.md#opentimeiniso)
- [openTimeInMillis](candle.md#opentimeinmillis)
- [productId](candle.md#productid)
- [sizeInMillis](candle.md#sizeinmillis)
- [volume](candle.md#volume)

## Properties

### base

• **base**: `string`

ID of base asset

#### Defined in

[product/ProductAPI.ts:148](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/ProductAPI.ts#L148)

---

### close

• **close**: `number`

Closing price (last trade) in the bucket interval

#### Defined in

[product/ProductAPI.ts:150](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/ProductAPI.ts#L150)

---

### counter

• **counter**: `string`

ID of quote asset

#### Defined in

[product/ProductAPI.ts:152](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/ProductAPI.ts#L152)

---

### high

• **high**: `number`

Highest price during the bucket interval

#### Defined in

[product/ProductAPI.ts:154](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/ProductAPI.ts#L154)

---

### low

• **low**: `number`

Lowest price during the bucket interval

#### Defined in

[product/ProductAPI.ts:156](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/ProductAPI.ts#L156)

---

### open

• **open**: `number`

Opening price (first trade) in the bucket interval

#### Defined in

[product/ProductAPI.ts:158](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/ProductAPI.ts#L158)

---

### openTimeInISO

• **openTimeInISO**: `string`

Bucket start time in simplified extended ISO 8601 format

#### Defined in

[product/ProductAPI.ts:160](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/ProductAPI.ts#L160)

---

### openTimeInMillis

• **openTimeInMillis**: `number`

Bucket start time converted to milliseconds (note: Coinbase Pro actually uses seconds)

#### Defined in

[product/ProductAPI.ts:162](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/ProductAPI.ts#L162)

---

### productId

• **productId**: `string`

Product ID / Symbol

#### Defined in

[product/ProductAPI.ts:164](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/ProductAPI.ts#L164)

---

### sizeInMillis

• **sizeInMillis**: `number`

Candle size in milliseconds

#### Defined in

[product/ProductAPI.ts:166](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/ProductAPI.ts#L166)

---

### volume

• **volume**: `number`

Volume of trading activity during the bucket interval

#### Defined in

[product/ProductAPI.ts:168](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/ProductAPI.ts#L168)
