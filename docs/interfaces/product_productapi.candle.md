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

• **base**: *string*

ID of base asset

Defined in: [product/ProductAPI.ts:148](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/product/ProductAPI.ts#L148)

___

### close

• **close**: *number*

Closing price (last trade) in the bucket interval

Defined in: [product/ProductAPI.ts:150](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/product/ProductAPI.ts#L150)

___

### counter

• **counter**: *string*

ID of quote asset

Defined in: [product/ProductAPI.ts:152](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/product/ProductAPI.ts#L152)

___

### high

• **high**: *number*

Highest price during the bucket interval

Defined in: [product/ProductAPI.ts:154](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/product/ProductAPI.ts#L154)

___

### low

• **low**: *number*

Lowest price during the bucket interval

Defined in: [product/ProductAPI.ts:156](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/product/ProductAPI.ts#L156)

___

### open

• **open**: *number*

Opening price (first trade) in the bucket interval

Defined in: [product/ProductAPI.ts:158](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/product/ProductAPI.ts#L158)

___

### openTimeInISO

• **openTimeInISO**: *string*

Bucket start time in simplified extended ISO 8601 format

Defined in: [product/ProductAPI.ts:160](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/product/ProductAPI.ts#L160)

___

### openTimeInMillis

• **openTimeInMillis**: *number*

Bucket start time converted to milliseconds (note: Coinbase Pro actually uses seconds)

Defined in: [product/ProductAPI.ts:162](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/product/ProductAPI.ts#L162)

___

### productId

• **productId**: *string*

Product ID / Symbol

Defined in: [product/ProductAPI.ts:164](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/product/ProductAPI.ts#L164)

___

### sizeInMillis

• **sizeInMillis**: *number*

Candle size in milliseconds

Defined in: [product/ProductAPI.ts:166](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/product/ProductAPI.ts#L166)

___

### volume

• **volume**: *number*

Volume of trading activity during the bucket interval

Defined in: [product/ProductAPI.ts:168](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/product/ProductAPI.ts#L168)
