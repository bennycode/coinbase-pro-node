**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["product/ProductAPI"](../modules/_product_productapi_.md) / ProductAPI

# Class: ProductAPI

## Hierarchy

- **ProductAPI**

## Index

### Constructors

- [constructor](_product_productapi_.productapi.md#constructor)

### Methods

- [getCandles](_product_productapi_.productapi.md#getcandles)
- [getProduct](_product_productapi_.productapi.md#getproduct)
- [getProductOrderBook](_product_productapi_.productapi.md#getproductorderbook)
- [getProductStats](_product_productapi_.productapi.md#getproductstats)
- [getProductTicker](_product_productapi_.productapi.md#getproductticker)
- [getProducts](_product_productapi_.productapi.md#getproducts)
- [getTrades](_product_productapi_.productapi.md#gettrades)
- [unwatchCandles](_product_productapi_.productapi.md#unwatchcandles)
- [watchCandles](_product_productapi_.productapi.md#watchcandles)

### Object literals

- [URL](_product_productapi_.productapi.md#url)

## Constructors

### constructor

\+ **new ProductAPI**(`apiClient`: AxiosInstance, `restClient`: [RESTClient](_client_restclient_.restclient.md)): [ProductAPI](_product_productapi_.productapi.md)

_Defined in [src/product/ProductAPI.ts:189](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/product/ProductAPI.ts#L189)_

#### Parameters:

| Name         | Type                                            |
| ------------ | ----------------------------------------------- |
| `apiClient`  | AxiosInstance                                   |
| `restClient` | [RESTClient](_client_restclient_.restclient.md) |

**Returns:** [ProductAPI](_product_productapi_.productapi.md)

## Methods

### getCandles

▸ **getCandles**(`productId`: string, `params`: [HistoricRateRequest](../modules/_product_productapi_.md#historicraterequest)): Promise<[Candle](../interfaces/_product_productapi_.candle.md)[]\>

_Defined in [src/product/ProductAPI.ts:205](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/product/ProductAPI.ts#L205)_

Get historic rates for a product. Rates are returned in grouped buckets (candlesticks) based on requested granularity.

Note: The maximum number of data points for a single request is 300 candles. If your selection of start/end time and granularity will result in more than 300 data points, your request will be rejected. If you wish to retrieve fine granularity data over a larger time range, you will need to make multiple requests with new start/end ranges.

**`see`** https://docs.pro.coinbase.com/#get-historic-rates

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `productId` | string | Representation for base and counter |
| `params` | [HistoricRateRequest](../modules/_product_productapi_.md#historicraterequest) | - |

**Returns:** Promise<[Candle](../interfaces/_product_productapi_.candle.md)[]\>

---

### getProduct

▸ **getProduct**(`productId`: string): Promise<[Product](../interfaces/_product_productapi_.product.md) \| undefined\>

_Defined in [src/product/ProductAPI.ts:286](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/product/ProductAPI.ts#L286)_

Get trading details for a specified product.

**`see`** https://docs.pro.coinbase.com/#get-products

#### Parameters:

| Name        | Type   |
| ----------- | ------ |
| `productId` | string |

**Returns:** Promise<[Product](../interfaces/_product_productapi_.product.md) \| undefined\>

---

### getProductOrderBook

▸ **getProductOrderBook**(`productId`: string, `params?`: undefined \| { level: [ONLY_BEST_BID_AND_ASK](../enums/_product_productapi_.orderbooklevel.md#only_best_bid_and_ask) }): Promise<[OrderBookLevel1](../interfaces/_product_productapi_.orderbooklevel1.md)\>

_Defined in [src/product/ProductAPI.ts:329](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/product/ProductAPI.ts#L329)_

Get a list of open orders for a product. The amount of detail shown can be customized with the level parameter. By default, only the inside (i.e. best) bid and ask are returned. This is equivalent to a book depth of 1 level.

**`see`** https://docs.pro.coinbase.com/#get-product-order-book

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `productId` | string | Representation for base and counter |
| `params?` | undefined \| { level: [ONLY_BEST_BID_AND_ASK](../enums/_product_productapi_.orderbooklevel.md#only_best_bid_and_ask) } | Amount of detail |

**Returns:** Promise<[OrderBookLevel1](../interfaces/_product_productapi_.orderbooklevel1.md)\>

▸ **getProductOrderBook**(`productId`: string, `params?`: undefined \| { level: [TOP_50_BIDS_AND_ASKS](../enums/_product_productapi_.orderbooklevel.md#top_50_bids_and_asks) }): Promise<[OrderBookLevel2](../interfaces/_product_productapi_.orderbooklevel2.md)\>

_Defined in [src/product/ProductAPI.ts:333](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/product/ProductAPI.ts#L333)_

#### Parameters:

| Name | Type |
| --- | --- |
| `productId` | string |
| `params?` | undefined \| { level: [TOP_50_BIDS_AND_ASKS](../enums/_product_productapi_.orderbooklevel.md#top_50_bids_and_asks) } |

**Returns:** Promise<[OrderBookLevel2](../interfaces/_product_productapi_.orderbooklevel2.md)\>

▸ **getProductOrderBook**(`productId`: string, `params?`: undefined \| { level: [FULL_ORDER_BOOK](../enums/_product_productapi_.orderbooklevel.md#full_order_book) }): Promise<[OrderBookLevel3](../interfaces/_product_productapi_.orderbooklevel3.md)\>

_Defined in [src/product/ProductAPI.ts:337](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/product/ProductAPI.ts#L337)_

#### Parameters:

| Name | Type |
| --- | --- |
| `productId` | string |
| `params?` | undefined \| { level: [FULL_ORDER_BOOK](../enums/_product_productapi_.orderbooklevel.md#full_order_book) } |

**Returns:** Promise<[OrderBookLevel3](../interfaces/_product_productapi_.orderbooklevel3.md)\>

---

### getProductStats

▸ **getProductStats**(`productId`: string): Promise<[ProductStats](../interfaces/_product_productapi_.productstats.md)\>

_Defined in [src/product/ProductAPI.ts:368](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/product/ProductAPI.ts#L368)_

Get latest 24 hours of movement data for a product.

**`see`** https://docs.pro.coinbase.com/#get-24hr-stats

#### Parameters:

| Name        | Type   | Description                         |
| ----------- | ------ | ----------------------------------- |
| `productId` | string | Representation for base and counter |

**Returns:** Promise<[ProductStats](../interfaces/_product_productapi_.productstats.md)\>

---

### getProductTicker

▸ **getProductTicker**(`productId`: string): Promise<[ProductTicker](../interfaces/_product_productapi_.productticker.md)\>

_Defined in [src/product/ProductAPI.ts:380](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/product/ProductAPI.ts#L380)_

Get snapshot information about the last trade (tick), best bid/ask and 24h volume.

**`see`** https://docs.pro.coinbase.com/#get-product-ticker

#### Parameters:

| Name        | Type   | Description                         |
| ----------- | ------ | ----------------------------------- |
| `productId` | string | Representation for base and counter |

**Returns:** Promise<[ProductTicker](../interfaces/_product_productapi_.productticker.md)\>

---

### getProducts

▸ **getProducts**(): Promise<[Product](../interfaces/_product_productapi_.product.md)[]\>

_Defined in [src/product/ProductAPI.ts:296](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/product/ProductAPI.ts#L296)_

Get trading details of all available products.

**`see`** https://docs.pro.coinbase.com/#get-products

**Returns:** Promise<[Product](../interfaces/_product_productapi_.product.md)[]\>

---

### getTrades

▸ **getTrades**(`productId`: string, `pagination?`: Pagination): Promise<PaginatedData<[Trade](../interfaces/_product_productapi_.trade.md)\>\>

_Defined in [src/product/ProductAPI.ts:309](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/product/ProductAPI.ts#L309)_

Get latest trades for a product.

**`see`** https://docs.pro.coinbase.com/#get-trades

#### Parameters:

| Name          | Type       | Description                         |
| ------------- | ---------- | ----------------------------------- |
| `productId`   | string     | Representation for base and counter |
| `pagination?` | Pagination | Pagination field                    |

**Returns:** Promise<PaginatedData<[Trade](../interfaces/_product_productapi_.trade.md)\>\>

---

### unwatchCandles

▸ **unwatchCandles**(`productId`: string, `granularity`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md)): void

_Defined in [src/product/ProductAPI.ts:272](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/product/ProductAPI.ts#L272)_

Stop watching a specific candle interval.

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `productId` | string | Representation for base and counter |
| `granularity` | [CandleGranularity](../enums/_product_productapi_.candlegranularity.md) | Desired candle size |

**Returns:** void

---

### watchCandles

▸ **watchCandles**(`productId`: string, `granularity`: [CandleGranularity](../enums/_product_productapi_.candlegranularity.md), `lastCandleTime`: ISO_8601_MS_UTC): void

_Defined in [src/product/ProductAPI.ts:249](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/product/ProductAPI.ts#L249)_

Watch a specific product ID for new candles. Candles will be emitted through the `ProductEvent.NEW_CANDLE` event.

#### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `productId` | string | Representation for base and counter |
| `granularity` | [CandleGranularity](../enums/_product_productapi_.candlegranularity.md) | Desired candle size |
| `lastCandleTime` | ISO_8601_MS_UTC | Timestamp (ISO 8601) of last candle received |

**Returns:** void

Handle to stop the watch interval

## Object literals

### URL

▪ `Static` `Readonly` **URL**: object

_Defined in [src/product/ProductAPI.ts:178](https://github.com/bennycode/coinbase-pro-node/blob/e431220/src/product/ProductAPI.ts#L178)_

#### Properties:

| Name       | Type   | Value         |
| ---------- | ------ | ------------- |
| `PRODUCTS` | string | \`/products\` |
