[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["product/ProductAPI"](../modules/_product_productapi_.md) › [CandlesRequestParameters](_product_productapi_.candlesrequestparameters.md)

# Interface: CandlesRequestParameters

## Hierarchy

- **CandlesRequestParameters**

## Index

### Properties

- [end](_product_productapi_.candlesrequestparameters.md#optional-end)
- [granularity](_product_productapi_.candlesrequestparameters.md#granularity)
- [start](_product_productapi_.candlesrequestparameters.md#optional-start)

## Properties

### `Optional` end

• **end**? : _ISO_8601_MS_UTC_

_Defined in [src/product/ProductAPI.ts:71](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L71)_

Ending date (inclusive) as ISO 8601 string, i.e. "2020-03-15T23:59:59.999Z"

---

### granularity

• **granularity**: _[CandleGranularity](../enums/_product_productapi_.candlegranularity.md)_

_Defined in [src/product/ProductAPI.ts:73](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L73)_

Desired time slice in seconds.

---

### `Optional` start

• **start**? : _ISO_8601_MS_UTC_

_Defined in [src/product/ProductAPI.ts:75](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L75)_

Starting date (inclusive) as ISO 8601 string, i.e. "2020-03-09T00:00:00.000Z"
