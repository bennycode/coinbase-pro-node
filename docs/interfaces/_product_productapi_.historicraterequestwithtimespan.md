[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["product/ProductAPI"](../modules/_product_productapi_.md) › [HistoricRateRequestWithTimeSpan](_product_productapi_.historicraterequestwithtimespan.md)

# Interface: HistoricRateRequestWithTimeSpan

## Hierarchy

- [BaseHistoricRateRequest](_product_productapi_.basehistoricraterequest.md)

  ↳ **HistoricRateRequestWithTimeSpan**

## Index

### Properties

- [end](_product_productapi_.historicraterequestwithtimespan.md#end)
- [granularity](_product_productapi_.historicraterequestwithtimespan.md#granularity)
- [start](_product_productapi_.historicraterequestwithtimespan.md#start)

## Properties

### end

• **end**: _ISO_8601_MS_UTC_

_Defined in [src/product/ProductAPI.ts:77](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/product/ProductAPI.ts#L77)_

Opening time (ISO 8601) of last candle, i.e. "2020-04-28T23:00:00.000Z"

---

### granularity

• **granularity**: _[CandleGranularity](../enums/_product_productapi_.candlegranularity.md)_

_Inherited from [BaseHistoricRateRequest](_product_productapi_.basehistoricraterequest.md).[granularity](_product_productapi_.basehistoricraterequest.md#granularity)_

_Defined in [src/product/ProductAPI.ts:72](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/product/ProductAPI.ts#L72)_

Desired time slice in seconds.

---

### start

• **start**: _ISO_8601_MS_UTC_

_Defined in [src/product/ProductAPI.ts:79](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/product/ProductAPI.ts#L79)_

Opening time (ISO 8601) of first candle, i.e. "2020-04-28T00:00:00.000Z"
