[coinbase-pro-node](../README.md) / [Exports](../modules.md) / ProductAPI

# Class: ProductAPI

## Table of contents

### Constructors

- [constructor](productapi.md#constructor)

### Properties

- [URL](productapi.md#url)

### Methods

- [getCandles](productapi.md#getcandles)
- [getProduct](productapi.md#getproduct)
- [getProductOrderBook](productapi.md#getproductorderbook)
- [getProductStats](productapi.md#getproductstats)
- [getProductTicker](productapi.md#getproductticker)
- [getProducts](productapi.md#getproducts)
- [getTrades](productapi.md#gettrades)
- [unwatchCandles](productapi.md#unwatchcandles)
- [watchCandles](productapi.md#watchcandles)

## Constructors

### constructor

\+ **new ProductAPI**(`apiClient`: AxiosInstance, `restClient`: [_RESTClient_](restclient.md)): [_ProductAPI_](productapi.md)

#### Parameters:

| Name         | Type                          |
| :----------- | :---------------------------- |
| `apiClient`  | AxiosInstance                 |
| `restClient` | [_RESTClient_](restclient.md) |

**Returns:** [_ProductAPI_](productapi.md)

Defined in: [product/ProductAPI.ts:189](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/product/ProductAPI.ts#L189)

## Properties

### URL

▪ `Static` `Readonly` **URL**: _object_

#### Type declaration:

| Name       | Type     |
| :--------- | :------- |
| `PRODUCTS` | _string_ |

Defined in: [product/ProductAPI.ts:178](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/product/ProductAPI.ts#L178)

## Methods

### getCandles

▸ **getCandles**(`productId`: _string_, `params`: [_HistoricRateRequest_](../modules.md#historicraterequest)): _Promise_<[_Candle_](../interfaces/candle.md)[]\>

Get historic rates for a product. Rates are returned in grouped buckets (candlesticks) based on requested granularity.

Note: The maximum number of data points for a single request is 300 candles. If your selection of start/end time and granularity will result in more than 300 data points, your request will be rejected. If you wish to retrieve fine granularity data over a larger time range, you will need to make multiple requests with new start/end ranges.

**`see`** https://docs.pro.coinbase.com/#get-historic-rates

#### Parameters:

| Name        | Type                                                       | Description                         |
| :---------- | :--------------------------------------------------------- | :---------------------------------- |
| `productId` | _string_                                                   | Representation for base and counter |
| `params`    | [_HistoricRateRequest_](../modules.md#historicraterequest) | -                                   |

**Returns:** _Promise_<[_Candle_](../interfaces/candle.md)[]\>

Defined in: [product/ProductAPI.ts:205](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/product/ProductAPI.ts#L205)

---

### getProduct

▸ **getProduct**(`productId`: _string_): _Promise_<undefined \| [_Product_](../interfaces/product.md)\>

Get trading details for a specified product.

**`see`** https://docs.pro.coinbase.com/#get-products

#### Parameters:

| Name        | Type     |
| :---------- | :------- |
| `productId` | _string_ |

**Returns:** _Promise_<undefined \| [_Product_](../interfaces/product.md)\>

Defined in: [product/ProductAPI.ts:286](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/product/ProductAPI.ts#L286)

---

### getProductOrderBook

▸ **getProductOrderBook**(`productId`: _string_, `params?`: { `level`: [_ONLY_BEST_BID_AND_ASK_](../enums/orderbooklevel.md#only_best_bid_and_ask) }): _Promise_<[_OrderBookLevel1_](../interfaces/orderbooklevel1.md)\>

Get a list of open orders for a product. The amount of detail shown can be customized with the level parameter. By default, only the inside (i.e. best) bid and ask are returned. This is equivalent to a book depth of 1 level.

**`see`** https://docs.pro.coinbase.com/#get-product-order-book

#### Parameters:

| Name | Type | Description |
| :-- | :-- | :-- |
| `productId` | _string_ | Representation for base and counter |
| `params?` | _object_ | Amount of detail |
| `params.level` | [_ONLY_BEST_BID_AND_ASK_](../enums/orderbooklevel.md#only_best_bid_and_ask) | - |

**Returns:** _Promise_<[_OrderBookLevel1_](../interfaces/orderbooklevel1.md)\>

Defined in: [product/ProductAPI.ts:329](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/product/ProductAPI.ts#L329)

▸ **getProductOrderBook**(`productId`: _string_, `params?`: { `level`: [_TOP_50_BIDS_AND_ASKS_](../enums/orderbooklevel.md#top_50_bids_and_asks) }): _Promise_<[_OrderBookLevel2_](../interfaces/orderbooklevel2.md)\>

#### Parameters:

| Name           | Type                                                                      |
| :------------- | :------------------------------------------------------------------------ |
| `productId`    | _string_                                                                  |
| `params?`      | _object_                                                                  |
| `params.level` | [_TOP_50_BIDS_AND_ASKS_](../enums/orderbooklevel.md#top_50_bids_and_asks) |

**Returns:** _Promise_<[_OrderBookLevel2_](../interfaces/orderbooklevel2.md)\>

Defined in: [product/ProductAPI.ts:333](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/product/ProductAPI.ts#L333)

▸ **getProductOrderBook**(`productId`: _string_, `params?`: { `level`: [_FULL_ORDER_BOOK_](../enums/orderbooklevel.md#full_order_book) }): _Promise_<[_OrderBookLevel3_](../interfaces/orderbooklevel3.md)\>

#### Parameters:

| Name           | Type                                                            |
| :------------- | :-------------------------------------------------------------- |
| `productId`    | _string_                                                        |
| `params?`      | _object_                                                        |
| `params.level` | [_FULL_ORDER_BOOK_](../enums/orderbooklevel.md#full_order_book) |

**Returns:** _Promise_<[_OrderBookLevel3_](../interfaces/orderbooklevel3.md)\>

Defined in: [product/ProductAPI.ts:337](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/product/ProductAPI.ts#L337)

---

### getProductStats

▸ **getProductStats**(`productId`: _string_): _Promise_<[_ProductStats_](../interfaces/productstats.md)\>

Get latest 24 hours of movement data for a product.

**`see`** https://docs.pro.coinbase.com/#get-24hr-stats

#### Parameters:

| Name        | Type     | Description                         |
| :---------- | :------- | :---------------------------------- |
| `productId` | _string_ | Representation for base and counter |

**Returns:** _Promise_<[_ProductStats_](../interfaces/productstats.md)\>

Defined in: [product/ProductAPI.ts:368](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/product/ProductAPI.ts#L368)

---

### getProductTicker

▸ **getProductTicker**(`productId`: _string_): _Promise_<[_ProductTicker_](../interfaces/productticker.md)\>

Get snapshot information about the last trade (tick), best bid/ask and 24h volume.

**`see`** https://docs.pro.coinbase.com/#get-product-ticker

#### Parameters:

| Name        | Type     | Description                         |
| :---------- | :------- | :---------------------------------- |
| `productId` | _string_ | Representation for base and counter |

**Returns:** _Promise_<[_ProductTicker_](../interfaces/productticker.md)\>

Defined in: [product/ProductAPI.ts:380](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/product/ProductAPI.ts#L380)

---

### getProducts

▸ **getProducts**(): _Promise_<[_Product_](../interfaces/product.md)[]\>

Get trading details of all available products.

**`see`** https://docs.pro.coinbase.com/#get-products

**Returns:** _Promise_<[_Product_](../interfaces/product.md)[]\>

Defined in: [product/ProductAPI.ts:296](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/product/ProductAPI.ts#L296)

---

### getTrades

▸ **getTrades**(`productId`: _string_, `pagination?`: [_Pagination_](../interfaces/pagination.md)): _Promise_<[_PaginatedData_](../interfaces/paginateddata.md)<[_Trade_](../interfaces/trade.md)\>\>

Get latest trades for a product.

**`see`** https://docs.pro.coinbase.com/#get-trades

#### Parameters:

| Name          | Type                                        | Description                         |
| :------------ | :------------------------------------------ | :---------------------------------- |
| `productId`   | _string_                                    | Representation for base and counter |
| `pagination?` | [_Pagination_](../interfaces/pagination.md) | Pagination field                    |

**Returns:** _Promise_<[_PaginatedData_](../interfaces/paginateddata.md)<[_Trade_](../interfaces/trade.md)\>\>

Defined in: [product/ProductAPI.ts:309](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/product/ProductAPI.ts#L309)

---

### unwatchCandles

▸ **unwatchCandles**(`productId`: _string_, `granularity`: [_CandleGranularity_](../enums/candlegranularity.md)): _void_

Stop watching a specific candle interval.

#### Parameters:

| Name          | Type                                                 | Description                         |
| :------------ | :--------------------------------------------------- | :---------------------------------- |
| `productId`   | _string_                                             | Representation for base and counter |
| `granularity` | [_CandleGranularity_](../enums/candlegranularity.md) | Desired candle size                 |

**Returns:** _void_

Defined in: [product/ProductAPI.ts:272](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/product/ProductAPI.ts#L272)

---

### watchCandles

▸ **watchCandles**(`productId`: _string_, `granularity`: [_CandleGranularity_](../enums/candlegranularity.md), `lastCandleTime`: _string_): _void_

Watch a specific product ID for new candles. Candles will be emitted through the `ProductEvent.NEW_CANDLE` event.

#### Parameters:

| Name | Type | Description |
| :-- | :-- | :-- |
| `productId` | _string_ | Representation for base and counter |
| `granularity` | [_CandleGranularity_](../enums/candlegranularity.md) | Desired candle size |
| `lastCandleTime` | _string_ | Timestamp (ISO 8601) of last candle received |

**Returns:** _void_

Handle to stop the watch interval

Defined in: [product/ProductAPI.ts:249](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/product/ProductAPI.ts#L249)
