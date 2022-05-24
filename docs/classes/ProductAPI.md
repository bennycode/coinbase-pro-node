[coinbase-pro-node](../README.md) / [Exports](../modules.md) / ProductAPI

# Class: ProductAPI

## Table of contents

### Constructors

- [constructor](ProductAPI.md#constructor)

### Properties

- [URL](ProductAPI.md#url)

### Methods

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

[product/ProductAPI.ts:191](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L191)

## Properties

### URL

▪ `Static` `Readonly` **URL**: `Object`

#### Type declaration

| Name       | Type     |
| :--------- | :------- |
| `PRODUCTS` | `string` |

#### Defined in

[product/ProductAPI.ts:178](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L178)

## Methods

### getCandles

▸ **getCandles**(`productId`, `params`): `Promise`<[`Candle`](../interfaces/Candle.md)[]\>

Get historic rates for a product. Rates are returned in grouped buckets (candlesticks) based on requested granularity.

Note: The maximum number of data points for a single request is 300 candles. If your selection of start/end time and granularity will result in more than 300 data points, your request will be rejected. If you wish to retrieve fine granularity data over a larger time range, you will need to make multiple requests with new start/end ranges.

**`see`** https://docs.pro.coinbase.com/#get-historic-rates

#### Parameters

| Name        | Type                                                       | Description                         |
| :---------- | :--------------------------------------------------------- | :---------------------------------- |
| `productId` | `string`                                                   | Representation for base and counter |
| `params`    | [`HistoricRateRequest`](../modules.md#historicraterequest) | -                                   |

#### Returns

`Promise`<[`Candle`](../interfaces/Candle.md)[]\>

#### Defined in

[product/ProductAPI.ts:205](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L205)

---

### getProduct

▸ **getProduct**(`productId`): `Promise`<`undefined` \| [`Product`](../interfaces/Product.md)\>

Get trading details for a specified product.

**`see`** https://docs.pro.coinbase.com/#get-products

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `productId` | `string` |

#### Returns

`Promise`<`undefined` \| [`Product`](../interfaces/Product.md)\>

#### Defined in

[product/ProductAPI.ts:286](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L286)

---

### getProductOrderBook

▸ **getProductOrderBook**(`productId`, `params?`): `Promise`<[`OrderBookLevel1`](../interfaces/OrderBookLevel1.md)\>

Get a list of open orders for a product. The amount of detail shown can be customized with the level parameter. By default, only the inside (i.e. best) bid and ask are returned. This is equivalent to a book depth of 1 level.

**`see`** https://docs.pro.coinbase.com/#get-product-order-book

#### Parameters

| Name | Type | Description |
| :-- | :-- | :-- |
| `productId` | `string` | Representation for base and counter |
| `params?` | `Object` | Amount of detail |
| `params.level` | [`ONLY_BEST_BID_AND_ASK`](../enums/OrderBookLevel.md#only_best_bid_and_ask) | - |

#### Returns

`Promise`<[`OrderBookLevel1`](../interfaces/OrderBookLevel1.md)\>

#### Defined in

[product/ProductAPI.ts:330](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L330)

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

[product/ProductAPI.ts:334](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L334)

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

[product/ProductAPI.ts:338](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L338)

---

### getProductStats

▸ **getProductStats**(`productId`): `Promise`<[`ProductStats`](../interfaces/ProductStats.md)\>

Get latest 24 hours of movement data for a product.

**`see`** https://docs.pro.coinbase.com/#get-24hr-stats

#### Parameters

| Name        | Type     | Description                         |
| :---------- | :------- | :---------------------------------- |
| `productId` | `string` | Representation for base and counter |

#### Returns

`Promise`<[`ProductStats`](../interfaces/ProductStats.md)\>

#### Defined in

[product/ProductAPI.ts:369](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L369)

---

### getProductTicker

▸ **getProductTicker**(`productId`): `Promise`<[`ProductTicker`](../interfaces/ProductTicker.md)\>

Get snapshot information about the last trade (tick), best bid/ask and 24h volume.

**`see`** https://docs.pro.coinbase.com/#get-product-ticker

#### Parameters

| Name        | Type     | Description                         |
| :---------- | :------- | :---------------------------------- |
| `productId` | `string` | Representation for base and counter |

#### Returns

`Promise`<[`ProductTicker`](../interfaces/ProductTicker.md)\>

#### Defined in

[product/ProductAPI.ts:381](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L381)

---

### getProducts

▸ **getProducts**(): `Promise`<[`Product`](../interfaces/Product.md)[]\>

Get trading details of all available products.

**`see`** https://docs.pro.coinbase.com/#get-products

#### Returns

`Promise`<[`Product`](../interfaces/Product.md)[]\>

#### Defined in

[product/ProductAPI.ts:297](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L297)

---

### getTrades

▸ **getTrades**(`productId`, `pagination?`): `Promise`<`PaginatedData`<[`Trade`](../interfaces/Trade.md)\>\>

Get latest trades for a product.

**`see`** https://docs.pro.coinbase.com/#get-trades

#### Parameters

| Name          | Type         | Description                         |
| :------------ | :----------- | :---------------------------------- |
| `productId`   | `string`     | Representation for base and counter |
| `pagination?` | `Pagination` | Pagination field                    |

#### Returns

`Promise`<`PaginatedData`<[`Trade`](../interfaces/Trade.md)\>\>

#### Defined in

[product/ProductAPI.ts:310](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L310)

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

[product/ProductAPI.ts:272](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L272)

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

[product/ProductAPI.ts:249](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L249)
