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

\+ **new ProductAPI**(`apiClient`: AxiosInstance, `restClient`: [*RESTClient*](restclient.md)): [*ProductAPI*](productapi.md)

#### Parameters:

Name | Type |
:------ | :------ |
`apiClient` | AxiosInstance |
`restClient` | [*RESTClient*](restclient.md) |

**Returns:** [*ProductAPI*](productapi.md)

Defined in: [product/ProductAPI.ts:189](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/ProductAPI.ts#L189)

## Properties

### URL

▪ `Static` `Readonly` **URL**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`PRODUCTS` | *string* |

Defined in: [product/ProductAPI.ts:178](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/ProductAPI.ts#L178)

## Methods

### getCandles

▸ **getCandles**(`productId`: *string*, `params`: [*HistoricRateRequest*](../modules.md#historicraterequest)): *Promise*<[*Candle*](../interfaces/candle.md)[]\>

Get historic rates for a product. Rates are returned in grouped buckets (candlesticks) based on requested
granularity.

Note: The maximum number of data points for a single request is 300 candles. If your selection of start/end time
and granularity will result in more than 300 data points, your request will be rejected. If you wish to retrieve
fine granularity data over a larger time range, you will need to make multiple requests with new start/end ranges.

**`see`** https://docs.pro.coinbase.com/#get-historic-rates

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`productId` | *string* | Representation for base and counter   |
`params` | [*HistoricRateRequest*](../modules.md#historicraterequest) | - |

**Returns:** *Promise*<[*Candle*](../interfaces/candle.md)[]\>

Defined in: [product/ProductAPI.ts:205](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/ProductAPI.ts#L205)

___

### getProduct

▸ **getProduct**(`productId`: *string*): *Promise*<undefined \| [*Product*](../interfaces/product.md)\>

Get trading details for a specified product.

**`see`** https://docs.pro.coinbase.com/#get-products

#### Parameters:

Name | Type |
:------ | :------ |
`productId` | *string* |

**Returns:** *Promise*<undefined \| [*Product*](../interfaces/product.md)\>

Defined in: [product/ProductAPI.ts:286](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/ProductAPI.ts#L286)

___

### getProductOrderBook

▸ **getProductOrderBook**(`productId`: *string*, `params?`: { `level`: [*ONLY\_BEST\_BID\_AND\_ASK*](../enums/orderbooklevel.md#only_best_bid_and_ask)  }): *Promise*<[*OrderBookLevel1*](../interfaces/orderbooklevel1.md)\>

Get a list of open orders for a product. The amount of detail shown can be customized with the level parameter.
By default, only the inside (i.e. best) bid and ask are returned. This is equivalent to a book depth of 1 level.

**`see`** https://docs.pro.coinbase.com/#get-product-order-book

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`productId` | *string* | Representation for base and counter   |
`params?` | *object* | Amount of detail   |
`params.level` | [*ONLY\_BEST\_BID\_AND\_ASK*](../enums/orderbooklevel.md#only_best_bid_and_ask) | - |

**Returns:** *Promise*<[*OrderBookLevel1*](../interfaces/orderbooklevel1.md)\>

Defined in: [product/ProductAPI.ts:329](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/ProductAPI.ts#L329)

▸ **getProductOrderBook**(`productId`: *string*, `params?`: { `level`: [*TOP\_50\_BIDS\_AND\_ASKS*](../enums/orderbooklevel.md#top_50_bids_and_asks)  }): *Promise*<[*OrderBookLevel2*](../interfaces/orderbooklevel2.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`productId` | *string* |
`params?` | *object* |
`params.level` | [*TOP\_50\_BIDS\_AND\_ASKS*](../enums/orderbooklevel.md#top_50_bids_and_asks) |

**Returns:** *Promise*<[*OrderBookLevel2*](../interfaces/orderbooklevel2.md)\>

Defined in: [product/ProductAPI.ts:333](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/ProductAPI.ts#L333)

▸ **getProductOrderBook**(`productId`: *string*, `params?`: { `level`: [*FULL\_ORDER\_BOOK*](../enums/orderbooklevel.md#full_order_book)  }): *Promise*<[*OrderBookLevel3*](../interfaces/orderbooklevel3.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`productId` | *string* |
`params?` | *object* |
`params.level` | [*FULL\_ORDER\_BOOK*](../enums/orderbooklevel.md#full_order_book) |

**Returns:** *Promise*<[*OrderBookLevel3*](../interfaces/orderbooklevel3.md)\>

Defined in: [product/ProductAPI.ts:337](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/ProductAPI.ts#L337)

___

### getProductStats

▸ **getProductStats**(`productId`: *string*): *Promise*<[*ProductStats*](../interfaces/productstats.md)\>

Get latest 24 hours of movement data for a product.

**`see`** https://docs.pro.coinbase.com/#get-24hr-stats

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`productId` | *string* | Representation for base and counter   |

**Returns:** *Promise*<[*ProductStats*](../interfaces/productstats.md)\>

Defined in: [product/ProductAPI.ts:368](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/ProductAPI.ts#L368)

___

### getProductTicker

▸ **getProductTicker**(`productId`: *string*): *Promise*<[*ProductTicker*](../interfaces/productticker.md)\>

Get snapshot information about the last trade (tick), best bid/ask and 24h volume.

**`see`** https://docs.pro.coinbase.com/#get-product-ticker

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`productId` | *string* | Representation for base and counter   |

**Returns:** *Promise*<[*ProductTicker*](../interfaces/productticker.md)\>

Defined in: [product/ProductAPI.ts:380](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/ProductAPI.ts#L380)

___

### getProducts

▸ **getProducts**(): *Promise*<[*Product*](../interfaces/product.md)[]\>

Get trading details of all available products.

**`see`** https://docs.pro.coinbase.com/#get-products

**Returns:** *Promise*<[*Product*](../interfaces/product.md)[]\>

Defined in: [product/ProductAPI.ts:296](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/ProductAPI.ts#L296)

___

### getTrades

▸ **getTrades**(`productId`: *string*, `pagination?`: [*Pagination*](../interfaces/pagination.md)): *Promise*<[*PaginatedData*](../interfaces/paginateddata.md)<[*Trade*](../interfaces/trade.md)\>\>

Get latest trades for a product.

**`see`** https://docs.pro.coinbase.com/#get-trades

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`productId` | *string* | Representation for base and counter   |
`pagination?` | [*Pagination*](../interfaces/pagination.md) | Pagination field   |

**Returns:** *Promise*<[*PaginatedData*](../interfaces/paginateddata.md)<[*Trade*](../interfaces/trade.md)\>\>

Defined in: [product/ProductAPI.ts:309](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/ProductAPI.ts#L309)

___

### unwatchCandles

▸ **unwatchCandles**(`productId`: *string*, `granularity`: [*CandleGranularity*](../enums/candlegranularity.md)): *void*

Stop watching a specific candle interval.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`productId` | *string* | Representation for base and counter   |
`granularity` | [*CandleGranularity*](../enums/candlegranularity.md) | Desired candle size    |

**Returns:** *void*

Defined in: [product/ProductAPI.ts:272](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/ProductAPI.ts#L272)

___

### watchCandles

▸ **watchCandles**(`productId`: *string*, `granularity`: [*CandleGranularity*](../enums/candlegranularity.md), `lastCandleTime`: *string*): *void*

Watch a specific product ID for new candles. Candles will be emitted through the `ProductEvent.NEW_CANDLE` event.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`productId` | *string* | Representation for base and counter   |
`granularity` | [*CandleGranularity*](../enums/candlegranularity.md) | Desired candle size   |
`lastCandleTime` | *string* | Timestamp (ISO 8601) of last candle received   |

**Returns:** *void*

Handle to stop the watch interval

Defined in: [product/ProductAPI.ts:249](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/ProductAPI.ts#L249)
