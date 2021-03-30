[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [product/ProductAPI](../modules/product_productapi.md) / HistoricRateRequestWithTimeSpan

# Interface: HistoricRateRequestWithTimeSpan

[product/ProductAPI](../modules/product_productapi.md).HistoricRateRequestWithTimeSpan

## Hierarchy

* [*BaseHistoricRateRequest*](product_productapi.basehistoricraterequest.md)

  ↳ **HistoricRateRequestWithTimeSpan**

## Table of contents

### Properties

- [end](product_productapi.historicraterequestwithtimespan.md#end)
- [granularity](product_productapi.historicraterequestwithtimespan.md#granularity)
- [start](product_productapi.historicraterequestwithtimespan.md#start)

## Properties

### end

• **end**: *string*

Opening time (ISO 8601) of last candle, i.e. "2020-04-28T23:00:00.000Z"

Defined in: [product/ProductAPI.ts:77](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/product/ProductAPI.ts#L77)

___

### granularity

• **granularity**: [*CandleGranularity*](../enums/product_productapi.candlegranularity.md)

Desired time slice in seconds.

Inherited from: [BaseHistoricRateRequest](product_productapi.basehistoricraterequest.md).[granularity](product_productapi.basehistoricraterequest.md#granularity)

Defined in: [product/ProductAPI.ts:72](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/product/ProductAPI.ts#L72)

___

### start

• **start**: *string*

Opening time (ISO 8601) of first candle, i.e. "2020-04-28T00:00:00.000Z"

Defined in: [product/ProductAPI.ts:79](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/product/ProductAPI.ts#L79)
