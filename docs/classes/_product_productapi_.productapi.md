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

- [URL](_product_productapi_.productapi.md#static-url)

## Constructors

### constructor

\+ **new ProductAPI**(`apiClient`: AxiosInstance, `restClient`: [RESTClient](_client_restclient_.restclient.md)): _[ProductAPI](_product_productapi_.productapi.md)_

_Defined in [src/product/ProductAPI.ts:180](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/product/ProductAPI.ts#L180)_

**Parameters:**

| Name         | Type                                            |
| ------------ | ----------------------------------------------- |
| `apiClient`  | AxiosInstance                                   |
| `restClient` | [RESTClient](_client_restclient_.restclient.md) |

**Returns:** _[ProductAPI](_product_productapi_.productapi.md)_

## Methods

### getCandles

▸ **getCandles**(`productId`: string, `params`: [HistoricRateRequest](../modules/_product_productapi_.md#historicraterequest)): _Promise‹[Candle](../interfaces/_product_productapi_.candle.md)[]›_

_Defined in [src/product/ProductAPI.ts:196](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/product/ProductAPI.ts#L196)_

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

_Defined in [src/product/ProductAPI.ts:301](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/product/ProductAPI.ts#L301)_

Get a list of open orders for a product. The amount of detail shown can be customized with the level parameter. By default, only the inside (i.e. best) bid and ask are returned. This is equivalent to a book depth of 1 level.

**`see`** https://docs.pro.coinbase.com/#get-product-order-book

**Parameters:**

| Name        | Type                    | Description                         |
| ----------- | ----------------------- | ----------------------------------- |
| `productId` | string                  | Representation for base and counter |
| `params?`   | undefined &#124; object | Amount of detail                    |

**Returns:** _Promise‹[OrderBookLevel1](../interfaces/_product_productapi_.orderbooklevel1.md)›_

▸ **getProductOrderBook**(`productId`: string, `params?`: undefined | object): _Promise‹[OrderBookLevel2](../interfaces/_product_productapi_.orderbooklevel2.md)›_

_Defined in [src/product/ProductAPI.ts:305](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/product/ProductAPI.ts#L305)_

**Parameters:**

| Name        | Type                    |
| ----------- | ----------------------- |
| `productId` | string                  |
| `params?`   | undefined &#124; object |

**Returns:** _Promise‹[OrderBookLevel2](../interfaces/_product_productapi_.orderbooklevel2.md)›_

▸ **getProductOrderBook**(`productId`: string, `params?`: undefined | object): _Promise‹[OrderBookLevel3](../interfaces/_product_productapi_.orderbooklevel3.md)›_

_Defined in [src/product/ProductAPI.ts:309](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/product/ProductAPI.ts#L309)_

**Parameters:**

| Name        | Type                    |
| ----------- | ----------------------- |
| `productId` | string                  |
| `params?`   | undefined &#124; object |

**Returns:** _Promise‹[OrderBookLevel3](../interfaces/_product_productapi_.orderbooklevel3.md)›_

---

### getProductStats

▸ **getProductStats**(`productId`: string): _Promise‹[ProductStats](../interfaces/_product_productapi_.productstats.md)›_

_Defined in [src/product/ProductAPI.ts:339](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/product/ProductAPI.ts#L339)_

Get latest 24 hours of movement data for a product.

**Parameters:**

| Name        | Type   | Description                         |
| ----------- | ------ | ----------------------------------- |
| `productId` | string | Representation for base and counter |

**Returns:** _Promise‹[ProductStats](../interfaces/_product_productapi_.productstats.md)›_

---

### getProductTicker

▸ **getProductTicker**(`productId`: string): _Promise‹[ProductTicker](../interfaces/_product_productapi_.productticker.md)›_

_Defined in [src/product/ProductAPI.ts:349](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/product/ProductAPI.ts#L349)_

Get snapshot information about the last trade (tick), best bid/ask and 24h volume.

**Parameters:**

| Name        | Type   | Description                         |
| ----------- | ------ | ----------------------------------- |
| `productId` | string | Representation for base and counter |

**Returns:** _Promise‹[ProductTicker](../interfaces/_product_productapi_.productticker.md)›_

---

### getProducts

▸ **getProducts**(): _Promise‹[Product](../interfaces/_product_productapi_.product.md)[]›_

_Defined in [src/product/ProductAPI.ts:276](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/product/ProductAPI.ts#L276)_

Get a list of available currency pairs for trading.

**`see`** https://docs.pro.coinbase.com/#get-products

**Returns:** _Promise‹[Product](../interfaces/_product_productapi_.product.md)[]›_

---

### getTrades

▸ **getTrades**(`productId`: string): _Promise‹[Trade](../interfaces/_product_productapi_.trade.md)[]›_

_Defined in [src/product/ProductAPI.ts:287](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/product/ProductAPI.ts#L287)_

Get latest trades for a product.

**Parameters:**

| Name        | Type   | Description                         |
| ----------- | ------ | ----------------------------------- |
| `productId` | string | Representation for base and counter |

**Returns:** _Promise‹[Trade](../interfaces/_product_productapi_.trade.md)[]›_

---

### unwatchCandles

▸ **unwatchCandles**(`productId`: string, `granularity`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md)): _void_

_Defined in [src/product/ProductAPI.ts:262](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/product/ProductAPI.ts#L262)_

**Parameters:**

| Name          | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| `productId`   | string                                                                  |
| `granularity` | [CandleGranularity](../enums/_product_productapi_.candlegranularity.md) |

**Returns:** _void_

---

### watchCandles

▸ **watchCandles**(`productId`: string, `granularity`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md)): _Promise‹void›_

_Defined in [src/product/ProductAPI.ts:235](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/product/ProductAPI.ts#L235)_

Watch a specific product ID for new candles. Candles will be emitted through the `ProductEvent.NEW_CANDLE` event.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `productId` | string | Representation for base and counter |
| `granularity` | [CandleGranularity](../enums/_product_productapi_.candlegranularity.md) | Desired candle size |

**Returns:** _Promise‹void›_

Handle to stop the watch interval.

## Object literals

### `Static` URL

### ▪ **URL**: _object_

_Defined in [src/product/ProductAPI.ts:169](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/product/ProductAPI.ts#L169)_

### PRODUCTS

• **PRODUCTS**: _string_ = `/products`

_Defined in [src/product/ProductAPI.ts:170](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/product/ProductAPI.ts#L170)_
