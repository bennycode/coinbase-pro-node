[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["product/ProductAPI"](../modules/_product_productapi_.md) › [ProductAPI](_product_productapi_.productapi.md)

# Class: ProductAPI

## Hierarchy

- **ProductAPI**

## Index

### Constructors

- [constructor](_product_productapi_.productapi.md#constructor)

### Methods

- [getCandles](_product_productapi_.productapi.md#getcandles)
- [getProductOrderBook](_product_productapi_.productapi.md#getproductorderbook)
- [getProductStats](_product_productapi_.productapi.md#getproductstats)
- [getProductTicker](_product_productapi_.productapi.md#getproductticker)
- [getProducts](_product_productapi_.productapi.md#getproducts)
- [getTrades](_product_productapi_.productapi.md#gettrades)
- [unwatchCandles](_product_productapi_.productapi.md#unwatchcandles)
- [watchCandles](_product_productapi_.productapi.md#watchcandles)

### Object literals

- [URL](_product_productapi_.productapi.md#static-readonly-url)

## Constructors

### constructor

\+ **new ProductAPI**(`apiClient`: AxiosInstance, `restClient`: [RESTClient](_client_restclient_.restclient.md)): _[ProductAPI](_product_productapi_.productapi.md)_

_Defined in [src/product/ProductAPI.ts:188](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/ProductAPI.ts#L188)_

**Parameters:**

| Name         | Type                                            |
| ------------ | ----------------------------------------------- |
| `apiClient`  | AxiosInstance                                   |
| `restClient` | [RESTClient](_client_restclient_.restclient.md) |

**Returns:** _[ProductAPI](_product_productapi_.productapi.md)_

## Methods

### getCandles

▸ **getCandles**(`productId`: string, `params`: [HistoricRateRequest](../modules/_product_productapi_.md#historicraterequest)): _Promise‹[Candle](../interfaces/_product_productapi_.candle.md)[]›_

_Defined in [src/product/ProductAPI.ts:204](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/ProductAPI.ts#L204)_

Get historic rates for a product. Rates are returned in grouped buckets (candlesticks) based on requested granularity.

Note: The maximum number of data points for a single request is 300 candles. If your selection of start/end time and granularity will result in more than 300 data points, your request will be rejected. If you wish to retrieve fine granularity data over a larger time range, you will need to make multiple requests with new start/end ranges.

**`see`** https://docs.pro.coinbase.com/#get-historic-rates

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `productId` | string | Representation for base and counter |
| `params` | [HistoricRateRequest](../modules/_product_productapi_.md#historicraterequest) | - |

**Returns:** _Promise‹[Candle](../interfaces/_product_productapi_.candle.md)[]›_

---

### getProductOrderBook

▸ **getProductOrderBook**(`productId`: string, `params?`: undefined | object): _Promise‹[OrderBookLevel1](../interfaces/_product_productapi_.orderbooklevel1.md)›_

_Defined in [src/product/ProductAPI.ts:321](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/ProductAPI.ts#L321)_

Get a list of open orders for a product. The amount of detail shown can be customized with the level parameter. By default, only the inside (i.e. best) bid and ask are returned. This is equivalent to a book depth of 1 level.

**`see`** https://docs.pro.coinbase.com/#get-product-order-book

**Parameters:**

| Name        | Type                    | Description                         |
| ----------- | ----------------------- | ----------------------------------- |
| `productId` | string                  | Representation for base and counter |
| `params?`   | undefined &#124; object | Amount of detail                    |

**Returns:** _Promise‹[OrderBookLevel1](../interfaces/_product_productapi_.orderbooklevel1.md)›_

▸ **getProductOrderBook**(`productId`: string, `params?`: undefined | object): _Promise‹[OrderBookLevel2](../interfaces/_product_productapi_.orderbooklevel2.md)›_

_Defined in [src/product/ProductAPI.ts:325](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/ProductAPI.ts#L325)_

**Parameters:**

| Name        | Type                    |
| ----------- | ----------------------- |
| `productId` | string                  |
| `params?`   | undefined &#124; object |

**Returns:** _Promise‹[OrderBookLevel2](../interfaces/_product_productapi_.orderbooklevel2.md)›_

▸ **getProductOrderBook**(`productId`: string, `params?`: undefined | object): _Promise‹[OrderBookLevel3](../interfaces/_product_productapi_.orderbooklevel3.md)›_

_Defined in [src/product/ProductAPI.ts:329](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/ProductAPI.ts#L329)_

**Parameters:**

| Name        | Type                    |
| ----------- | ----------------------- |
| `productId` | string                  |
| `params?`   | undefined &#124; object |

**Returns:** _Promise‹[OrderBookLevel3](../interfaces/_product_productapi_.orderbooklevel3.md)›_

---

### getProductStats

▸ **getProductStats**(`productId`: string): _Promise‹[ProductStats](../interfaces/_product_productapi_.productstats.md)›_

_Defined in [src/product/ProductAPI.ts:360](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/ProductAPI.ts#L360)_

Get latest 24 hours of movement data for a product.

**`see`** https://docs.pro.coinbase.com/#get-24hr-stats

**Parameters:**

| Name        | Type   | Description                         |
| ----------- | ------ | ----------------------------------- |
| `productId` | string | Representation for base and counter |

**Returns:** _Promise‹[ProductStats](../interfaces/_product_productapi_.productstats.md)›_

---

### getProductTicker

▸ **getProductTicker**(`productId`: string): _Promise‹[ProductTicker](../interfaces/_product_productapi_.productticker.md)›_

_Defined in [src/product/ProductAPI.ts:372](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/ProductAPI.ts#L372)_

Get snapshot information about the last trade (tick), best bid/ask and 24h volume.

**`see`** https://docs.pro.coinbase.com/#get-product-ticker

**Parameters:**

| Name        | Type   | Description                         |
| ----------- | ------ | ----------------------------------- |
| `productId` | string | Representation for base and counter |

**Returns:** _Promise‹[ProductTicker](../interfaces/_product_productapi_.productticker.md)›_

---

### getProducts

▸ **getProducts**(): _Promise‹[Product](../interfaces/_product_productapi_.product.md)[]›_

_Defined in [src/product/ProductAPI.ts:285](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/ProductAPI.ts#L285)_

Get a list of available currency pairs for trading.

**`see`** https://docs.pro.coinbase.com/#get-products

**Returns:** _Promise‹[Product](../interfaces/_product_productapi_.product.md)[]›_

---

### getTrades

▸ **getTrades**(`productId`: string, `pagination?`: Pagination): _Promise‹object›_

_Defined in [src/product/ProductAPI.ts:298](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/ProductAPI.ts#L298)_

Get latest trades for a product.

**`see`** https://docs.pro.coinbase.com/#get-trades

**Parameters:**

| Name          | Type       | Description                         |
| ------------- | ---------- | ----------------------------------- |
| `productId`   | string     | Representation for base and counter |
| `pagination?` | Pagination | Pagination field                    |

**Returns:** _Promise‹object›_

---

### unwatchCandles

▸ **unwatchCandles**(`productId`: string, `granularity`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md)): _void_

_Defined in [src/product/ProductAPI.ts:271](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/ProductAPI.ts#L271)_

Stop watching a specific candle interval.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `productId` | string | Representation for base and counter |
| `granularity` | [CandleGranularity](../enums/_product_productapi_.candlegranularity.md) | Desired candle size |

**Returns:** _void_

---

### watchCandles

▸ **watchCandles**(`productId`: string, `granularity`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md), `lastCandleTime`: ISO_8601_MS_UTC): _void_

_Defined in [src/product/ProductAPI.ts:248](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/ProductAPI.ts#L248)_

Watch a specific product ID for new candles. Candles will be emitted through the `ProductEvent.NEW_CANDLE` event.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `productId` | string | Representation for base and counter |
| `granularity` | [CandleGranularity](../enums/_product_productapi_.candlegranularity.md) | Desired candle size |
| `lastCandleTime` | ISO_8601_MS_UTC | Timestamp (ISO 8601) of last candle received |

**Returns:** _void_

Handle to stop the watch interval.

## Object literals

### `Static` `Readonly` URL

### ▪ **URL**: _object_

_Defined in [src/product/ProductAPI.ts:177](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/ProductAPI.ts#L177)_

### PRODUCTS

• **PRODUCTS**: _string_ = `/products`

_Defined in [src/product/ProductAPI.ts:178](https://github.com/bennyn/coinbase-pro-node/blob/128ca39/src/product/ProductAPI.ts#L178)_
