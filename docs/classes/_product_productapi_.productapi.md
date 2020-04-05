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
- [watchCandles](_product_productapi_.productapi.md#watchcandles)

### Object literals

- [URL](_product_productapi_.productapi.md#static-url)

## Constructors

### constructor

\+ **new ProductAPI**(`apiClient`: AxiosInstance, `restClient`: [RESTClient](_client_restclient_.restclient.md)): _[ProductAPI](_product_productapi_.productapi.md)_

_Defined in [src/product/ProductAPI.ts:168](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L168)_

**Parameters:**

| Name         | Type                                            |
| ------------ | ----------------------------------------------- |
| `apiClient`  | AxiosInstance                                   |
| `restClient` | [RESTClient](_client_restclient_.restclient.md) |

**Returns:** _[ProductAPI](_product_productapi_.productapi.md)_

## Methods

### getCandles

▸ **getCandles**(`productId`: string, `params?`: [CandlesRequestParameters](../interfaces/_product_productapi_.candlesrequestparameters.md)): _Promise‹[Candle](../interfaces/_product_productapi_.candle.md)[]›_

_Defined in [src/product/ProductAPI.ts:184](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L184)_

Get historic rates for a product. Rates are returned in grouped buckets (candlesticks) based on requested granularity.

Note: The maximum number of data points for a single request is 300 candles. If your selection of start/end time and granularity will result in more than 300 data points, your request will be rejected. If you wish to retrieve fine granularity data over a larger time range, you will need to make multiple requests with new start/end ranges.

**`see`** https://docs.pro.coinbase.com/#get-historic-rates

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `productId` | string | Representation for base and counter |
| `params?` | [CandlesRequestParameters](../interfaces/_product_productapi_.candlesrequestparameters.md) | - |

**Returns:** _Promise‹[Candle](../interfaces/_product_productapi_.candle.md)[]›_

---

### getProductOrderBook

▸ **getProductOrderBook**(`productId`: string, `params?`: undefined | object): _Promise‹[OrderBookLevel1](../interfaces/_product_productapi_.orderbooklevel1.md)›_

_Defined in [src/product/ProductAPI.ts:263](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L263)_

Get a list of open orders for a product. The amount of detail shown can be customized with the level parameter. By default, only the inside (i.e. best) bid and ask are returned. This is equivalent to a book depth of 1 level.

**`see`** https://docs.pro.coinbase.com/#get-product-order-book

**Parameters:**

| Name        | Type                    | Description                         |
| ----------- | ----------------------- | ----------------------------------- |
| `productId` | string                  | Representation for base and counter |
| `params?`   | undefined &#124; object | Amount of detail                    |

**Returns:** _Promise‹[OrderBookLevel1](../interfaces/_product_productapi_.orderbooklevel1.md)›_

▸ **getProductOrderBook**(`productId`: string, `params?`: undefined | object): _Promise‹[OrderBookLevel2](../interfaces/_product_productapi_.orderbooklevel2.md)›_

_Defined in [src/product/ProductAPI.ts:267](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L267)_

**Parameters:**

| Name        | Type                    |
| ----------- | ----------------------- |
| `productId` | string                  |
| `params?`   | undefined &#124; object |

**Returns:** _Promise‹[OrderBookLevel2](../interfaces/_product_productapi_.orderbooklevel2.md)›_

▸ **getProductOrderBook**(`productId`: string, `params?`: undefined | object): _Promise‹[OrderBookLevel3](../interfaces/_product_productapi_.orderbooklevel3.md)›_

_Defined in [src/product/ProductAPI.ts:271](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L271)_

**Parameters:**

| Name        | Type                    |
| ----------- | ----------------------- |
| `productId` | string                  |
| `params?`   | undefined &#124; object |

**Returns:** _Promise‹[OrderBookLevel3](../interfaces/_product_productapi_.orderbooklevel3.md)›_

---

### getProductStats

▸ **getProductStats**(`productId`: string): _Promise‹[ProductStats](../interfaces/_product_productapi_.productstats.md)›_

_Defined in [src/product/ProductAPI.ts:301](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L301)_

Get latest 24 hours of movement data for a product.

**Parameters:**

| Name        | Type   | Description                         |
| ----------- | ------ | ----------------------------------- |
| `productId` | string | Representation for base and counter |

**Returns:** _Promise‹[ProductStats](../interfaces/_product_productapi_.productstats.md)›_

---

### getProductTicker

▸ **getProductTicker**(`productId`: string): _Promise‹[ProductTicker](../interfaces/_product_productapi_.productticker.md)›_

_Defined in [src/product/ProductAPI.ts:311](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L311)_

Get snapshot information about the last trade (tick), best bid/ask and 24h volume.

**Parameters:**

| Name        | Type   | Description                         |
| ----------- | ------ | ----------------------------------- |
| `productId` | string | Representation for base and counter |

**Returns:** _Promise‹[ProductTicker](../interfaces/_product_productapi_.productticker.md)›_

---

### getProducts

▸ **getProducts**(): _Promise‹[Product](../interfaces/_product_productapi_.product.md)[]›_

_Defined in [src/product/ProductAPI.ts:238](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L238)_

Get a list of available currency pairs for trading.

**`see`** https://docs.pro.coinbase.com/#get-products

**Returns:** _Promise‹[Product](../interfaces/_product_productapi_.product.md)[]›_

---

### getTrades

▸ **getTrades**(`productId`: string): _Promise‹[Trade](../interfaces/_product_productapi_.trade.md)[]›_

_Defined in [src/product/ProductAPI.ts:249](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L249)_

Get latest trades for a product.

**Parameters:**

| Name        | Type   | Description                         |
| ----------- | ------ | ----------------------------------- |
| `productId` | string | Representation for base and counter |

**Returns:** _Promise‹[Trade](../interfaces/_product_productapi_.trade.md)[]›_

---

### watchCandles

▸ **watchCandles**(`productId`: string, `granularity`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md)): _Promise‹Timeout›_

_Defined in [src/product/ProductAPI.ts:222](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L222)_

Watch a specific product ID for new candles. Candles will be emitted through the `ProductEvent.NEW_CANDLE` event.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `productId` | string | Representation for base and counter |
| `granularity` | [CandleGranularity](../enums/_product_productapi_.candlegranularity.md) | Desired candle size |

**Returns:** _Promise‹Timeout›_

Handle to stop the watch interval.

## Object literals

### `Static` URL

### ▪ **URL**: _object_

_Defined in [src/product/ProductAPI.ts:164](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L164)_

### PRODUCTS

• **PRODUCTS**: _string_ = `/products`

_Defined in [src/product/ProductAPI.ts:165](https://github.com/bennyn/coinbase-pro-node/blob/411b7a7/src/product/ProductAPI.ts#L165)_
