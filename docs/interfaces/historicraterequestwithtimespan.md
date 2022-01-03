[coinbase-pro-node](../README.md) / [Exports](../modules.md) / HistoricRateRequestWithTimeSpan

# Interface: HistoricRateRequestWithTimeSpan

## Hierarchy

- [`BaseHistoricRateRequest`](BaseHistoricRateRequest.md)

  ↳ **`HistoricRateRequestWithTimeSpan`**

## Table of contents

### Properties

- [end](HistoricRateRequestWithTimeSpan.md#end)
- [granularity](HistoricRateRequestWithTimeSpan.md#granularity)
- [start](HistoricRateRequestWithTimeSpan.md#start)

## Properties

### end

• **end**: `string`

Opening time (ISO 8601) of last candle, i.e. "2020-04-28T23:00:00.000Z"

#### Defined in

[product/ProductAPI.ts:77](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/product/ProductAPI.ts#L77)

---

### granularity

• **granularity**: [`CandleGranularity`](../enums/CandleGranularity.md)

Desired time slice in seconds.

#### Inherited from

[BaseHistoricRateRequest](BaseHistoricRateRequest.md).[granularity](BaseHistoricRateRequest.md#granularity)

#### Defined in

[product/ProductAPI.ts:72](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/product/ProductAPI.ts#L72)

---

### start

• **start**: `string`

Opening time (ISO 8601) of first candle, i.e. "2020-04-28T00:00:00.000Z"

#### Defined in

[product/ProductAPI.ts:79](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/product/ProductAPI.ts#L79)
