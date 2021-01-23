[coinbase-pro-node](../../README.md) / [Exports](../../modules.md) / [product/ProductAPI](../../modules/product_productapi.md) / HistoricRateRequestWithTimeSpan

# Interface: HistoricRateRequestWithTimeSpan

[product/ProductAPI](../../modules/product_productapi.md).HistoricRateRequestWithTimeSpan

## Hierarchy

- [_BaseHistoricRateRequest_](productapi.basehistoricraterequest.md)

  ↳ **HistoricRateRequestWithTimeSpan**

## Table of contents

### Properties

- [end](productapi.historicraterequestwithtimespan.md#end)
- [granularity](productapi.historicraterequestwithtimespan.md#granularity)
- [start](productapi.historicraterequestwithtimespan.md#start)

## Properties

### end

• **end**: _string_

Opening time (ISO 8601) of last candle, i.e. "2020-04-28T23:00:00.000Z"

Defined in: [product/ProductAPI.ts:77](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/product/ProductAPI.ts#L77)

---

### granularity

• **granularity**: [_CandleGranularity_](../../enums/product/productapi.candlegranularity.md)

Desired time slice in seconds.

Inherited from: [BaseHistoricRateRequest](productapi.basehistoricraterequest.md).[granularity](productapi.basehistoricraterequest.md#granularity)

Defined in: [product/ProductAPI.ts:72](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/product/ProductAPI.ts#L72)

---

### start

• **start**: _string_

Opening time (ISO 8601) of first candle, i.e. "2020-04-28T00:00:00.000Z"

Defined in: [product/ProductAPI.ts:79](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/product/ProductAPI.ts#L79)
