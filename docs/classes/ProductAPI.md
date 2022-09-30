[coinbase-pro-node](../README.md) / [Exports](../modules.md) / ProductAPI

# Class: ProductAPI

## Table of contents

### Constructors

- [constructor](ProductAPI.md#constructor)

### Properties

- [URL](ProductAPI.md#url)

### Methods

- [getCandleWatcherConfig](ProductAPI.md#getcandlewatcherconfig)
- [getCandles](ProductAPI.md#getcandles)
- [getProduct](ProductAPI.md#getproduct)
- [getProductOrderBook](ProductAPI.md#getproductorderbook)
- [getProductStats](ProductAPI.md#getproductstats)
- [getProductTicker](ProductAPI.md#getproductticker)
- [getProducts](ProductAPI.md#getproducts)
- [getTrades](ProductAPI.md#gettrades)
- [unwatchCandles](ProductAPI.md#unwatchcandles)
- [watchCandles](ProductAPI.md#watchcandles)

## Constructors

### constructor

• **new ProductAPI**(`apiClient`, `restClient`)

#### Parameters

| Name         | Type                          |
| :----------- | :---------------------------- |
| `apiClient`  | `AxiosInstance`               |
| `restClient` | [`RESTClient`](RESTClient.md) |

#### Defined in

[product/ProductAPI.ts:189](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/product/ProductAPI.ts#L189)

## Properties

### URL

▪ `Static` `Readonly` **URL**: `Object`

#### Type declaration

| Name       | Type     |
| :--------- | :------- |
| `PRODUCTS` | `string` |

#### Defined in

[product/ProductAPI.ts:183](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/product/ProductAPI.ts#L183)

## Methods

### getCandleWatcherConfig

▸ **getCandleWatcherConfig**(`productId`, `granularity`): `CandleWatcherConfig`

#### Parameters

| Name          | Type                                                 |
| :------------ | :--------------------------------------------------- |
| `productId`   | `string`                                             |
| `granularity` | [`CandleGranularity`](../enums/CandleGranularity.md) |

#### Returns

`CandleWatcherConfig`

#### Defined in

[product/ProductAPI.ts:243](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/product/ProductAPI.ts#L243)

---

### getCandles

▸ **getCandles**(`productId`, `params?`): `Promise`<[`Candle`](../interfaces/Candle.md)[]\>

Get historic rates for a product. Rates are returned in grouped buckets (candlesticks) based on requested granularity.

Note: The maximum number of data points for a single request is 300 candles. If your selection of start/end time and granularity will result in more than 300 data points, your request will be rejected. If you wish to retrieve fine granularity data over a larger time range, you will need to make multiple requests with new start/end ranges.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproductcandles

#### Parameters

| Name        | Type                                                       | Description                         |
| :---------- | :--------------------------------------------------------- | :---------------------------------- |
| `productId` | `string`                                                   | Representation for base and counter |
| `params?`   | [`HistoricRateRequest`](../modules.md#historicraterequest) | Desired timespan                    |

#### Returns

`Promise`<[`Candle`](../interfaces/Candle.md)[]\>

#### Defined in

[product/ProductAPI.ts:203](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/product/ProductAPI.ts#L203)

---

### getProduct

▸ **getProduct**(`productId`): `Promise`<`undefined` \| [`Product`](../interfaces/Product.md)\>

Get trading details for a specified product.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproduct

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `productId` | `string` |

#### Returns

`Promise`<`undefined` \| [`Product`](../interfaces/Product.md)\>

#### Defined in

[product/ProductAPI.ts:298](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/product/ProductAPI.ts#L298)

---

### getProductOrderBook

▸ **getProductOrderBook**(`productId`, `params?`): `Promise`<[`OrderBookLevel1`](../interfaces/OrderBookLevel1.md)\>

Get a list of open orders for a product. The amount of detail shown can be customized with the level parameter. By default, only the inside (i.e. best) bid and ask are returned. This is equivalent to a book depth of 1 level.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproductbook

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `productId` | `string` | Representation for base and counter |
| `params?` | `Object` | Amount of detail |
| `params.level` | [`ONLY_BEST_BID_AND_ASK`](../enums/OrderBookLevel.md#only_best_bid_and_ask) | - |

#### Returns

`Promise`<[`OrderBookLevel1`](../interfaces/OrderBookLevel1.md)\>

#### Defined in

[product/ProductAPI.ts:342](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/product/ProductAPI.ts#L342)

▸ **getProductOrderBook**(`productId`, `params?`): `Promise`<[`OrderBookLevel2`](../interfaces/OrderBookLevel2.md)\>

#### Parameters

| Name           | Type                                                                      |
| :------------- | :------------------------------------------------------------------------ |
| `productId`    | `string`                                                                  |
| `params?`      | `Object`                                                                  |
| `params.level` | [`TOP_50_BIDS_AND_ASKS`](../enums/OrderBookLevel.md#top_50_bids_and_asks) |

#### Returns

`Promise`<[`OrderBookLevel2`](../interfaces/OrderBookLevel2.md)\>

#### Defined in

[product/ProductAPI.ts:346](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/product/ProductAPI.ts#L346)

▸ **getProductOrderBook**(`productId`, `params?`): `Promise`<[`OrderBookLevel3`](../interfaces/OrderBookLevel3.md)\>

#### Parameters

| Name           | Type                                                            |
| :------------- | :-------------------------------------------------------------- |
| `productId`    | `string`                                                        |
| `params?`      | `Object`                                                        |
| `params.level` | [`FULL_ORDER_BOOK`](../enums/OrderBookLevel.md#full_order_book) |

#### Returns

`Promise`<[`OrderBookLevel3`](../interfaces/OrderBookLevel3.md)\>

#### Defined in

[product/ProductAPI.ts:350](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/product/ProductAPI.ts#L350)

---

### getProductStats

▸ **getProductStats**(`productId`): `Promise`<[`ProductStats`](../interfaces/ProductStats.md)\>

Get latest 24 hours of movement data for a product.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproductstats

#### Parameters

| Name        | Type     | Description                         |
| :---------- | :------- | :---------------------------------- |
| `productId` | `string` | Representation for base and counter |

#### Returns

`Promise`<[`ProductStats`](../interfaces/ProductStats.md)\>

#### Defined in

[product/ProductAPI.ts:381](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/product/ProductAPI.ts#L381)

---

### getProductTicker

▸ **getProductTicker**(`productId`): `Promise`<[`ProductTicker`](../interfaces/ProductTicker.md)\>

Get snapshot information about the last trade (tick), best bid/ask and 24h volume.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproductticker

#### Parameters

| Name        | Type     | Description                         |
| :---------- | :------- | :---------------------------------- |
| `productId` | `string` | Representation for base and counter |

#### Returns

`Promise`<[`ProductTicker`](../interfaces/ProductTicker.md)\>

#### Defined in

[product/ProductAPI.ts:393](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/product/ProductAPI.ts#L393)

---

### getProducts

▸ **getProducts**(): `Promise`<[`Product`](../interfaces/Product.md)[]\>

Get trading details of all available products.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproducts

#### Returns

`Promise`<[`Product`](../interfaces/Product.md)[]\>

#### Defined in

[product/ProductAPI.ts:309](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/product/ProductAPI.ts#L309)

---

### getTrades

▸ **getTrades**(`productId`, `pagination?`): `Promise`<`PaginatedData`<[`Trade`](../interfaces/Trade.md)\>\>

Get the latest trades for a product.

**`See`**

https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproducttrades

#### Parameters

| Name          | Type         | Description                         |
| :------------ | :----------- | :---------------------------------- |
| `productId`   | `string`     | Representation for base and counter |
| `pagination?` | `Pagination` | Pagination field                    |

#### Returns

`Promise`<`PaginatedData`<[`Trade`](../interfaces/Trade.md)\>\>

#### Defined in

[product/ProductAPI.ts:322](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/product/ProductAPI.ts#L322)

---

### unwatchCandles

▸ **unwatchCandles**(`productId`, `granularity`): `void`

Stop watching a specific candle interval.

#### Parameters

| Name          | Type                                                 | Description                         |
| :------------ | :--------------------------------------------------- | :---------------------------------- |
| `productId`   | `string`                                             | Representation for base and counter |
| `granularity` | [`CandleGranularity`](../enums/CandleGranularity.md) | Desired candle size                 |

#### Returns

`void`

#### Defined in

[product/ProductAPI.ts:284](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/product/ProductAPI.ts#L284)

---

### watchCandles

▸ **watchCandles**(`productId`, `granularity`, `lastCandleTime`): `void`

Watch a specific product ID for new candles. Candles will be emitted through the `ProductEvent.NEW_CANDLE` event.

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `productId` | `string` | Representation for base and counter |
| `granularity` | [`CandleGranularity`](../enums/CandleGranularity.md) | Desired candle size |
| `lastCandleTime` | `string` | Timestamp (ISO 8601) of last candle received |

#### Returns

`void`

Handle to stop the watch interval

#### Defined in

[product/ProductAPI.ts:260](https://github.com/bennycode/coinbase-pro-node/blob/2016513/src/product/ProductAPI.ts#L260)
