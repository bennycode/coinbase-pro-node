[coinbase-pro-node](README.md) / Exports

# coinbase-pro-node

## Table of contents

### Enumerations

- [AccountType](enums/AccountType.md)
- [CancelOrderPeriod](enums/CancelOrderPeriod.md)
- [CandleGranularity](enums/CandleGranularity.md)
- [CurrencyType](enums/CurrencyType.md)
- [Liquidity](enums/Liquidity.md)
- [OrderBookLevel](enums/OrderBookLevel.md)
- [OrderStatus](enums/OrderStatus.md)
- [OrderType](enums/OrderType.md)
- [ProductEvent](enums/ProductEvent.md)
- [SelfTradePrevention](enums/SelfTradePrevention.md)
- [TimeInForce](enums/TimeInForce.md)
- [WebSocketChannelName](enums/WebSocketChannelName.md)
- [WebSocketEvent](enums/WebSocketEvent.md)
- [WebSocketRequestType](enums/WebSocketRequestType.md)
- [WebSocketResponseType](enums/WebSocketResponseType.md)

### Classes

- [AccountAPI](classes/AccountAPI.md)
- [CandleBucketUtil](classes/CandleBucketUtil.md)
- [CoinbasePro](classes/CoinbasePro.md)
- [CurrencyAPI](classes/CurrencyAPI.md)
- [FeeAPI](classes/FeeAPI.md)
- [FillAPI](classes/FillAPI.md)
- [OrderAPI](classes/OrderAPI.md)
- [ProductAPI](classes/ProductAPI.md)
- [ProfileAPI](classes/ProfileAPI.md)
- [RESTClient](classes/RESTClient.md)
- [TimeAPI](classes/TimeAPI.md)
- [UserAPI](classes/UserAPI.md)
- [WebSocketClient](classes/WebSocketClient.md)

### Interfaces

- [Account](interfaces/Account.md)
- [AccountHistory](interfaces/AccountHistory.md)
- [AccountHistoryDetails](interfaces/AccountHistoryDetails.md)
- [AddressInfo](interfaces/AddressInfo.md)
- [AutoCancelLimitOrder](interfaces/AutoCancelLimitOrder.md)
- [BaseHistoricRateRequest](interfaces/BaseHistoricRateRequest.md)
- [Candle](interfaces/Candle.md)
- [CandleBatchBucket](interfaces/CandleBatchBucket.md)
- [ClientAuthenticationBase](interfaces/ClientAuthenticationBase.md)
- [ClientAuthenticationBaseUrls](interfaces/ClientAuthenticationBaseUrls.md)
- [ClientAuthenticationCustomUrls](interfaces/ClientAuthenticationCustomUrls.md)
- [ClientConnection](interfaces/ClientConnection.md)
- [CoinbaseAccount](interfaces/CoinbaseAccount.md)
- [Currency](interfaces/Currency.md)
- [CurrencyDetail](interfaces/CurrencyDetail.md)
- [FeeTier](interfaces/FeeTier.md)
- [Fill](interfaces/Fill.md)
- [FilledOrder](interfaces/FilledOrder.md)
- [FundTransfer](interfaces/FundTransfer.md)
- [GeneratedAddress](interfaces/GeneratedAddress.md)
- [HistoricRateRequestWithTimeSpan](interfaces/HistoricRateRequestWithTimeSpan.md)
- [Hold](interfaces/Hold.md)
- [LimitOrder](interfaces/LimitOrder.md)
- [OrderBookLevel1](interfaces/OrderBookLevel1.md)
- [OrderBookLevel2](interfaces/OrderBookLevel2.md)
- [OrderBookLevel3](interfaces/OrderBookLevel3.md)
- [OrderBookRequestParameters](interfaces/OrderBookRequestParameters.md)
- [OrderListQueryParam](interfaces/OrderListQueryParam.md)
- [PendingOrder](interfaces/PendingOrder.md)
- [PostOnlyLimitOrder](interfaces/PostOnlyLimitOrder.md)
- [Product](interfaces/Product.md)
- [ProductStats](interfaces/ProductStats.md)
- [ProductTicker](interfaces/ProductTicker.md)
- [Profile](interfaces/Profile.md)
- [SEPADepositInformation](interfaces/SEPADepositInformation.md)
- [TimeSkew](interfaces/TimeSkew.md)
- [Trade](interfaces/Trade.md)
- [TrailingVolume](interfaces/TrailingVolume.md)
- [VerifiedUser](interfaces/VerifiedUser.md)
- [Warning](interfaces/Warning.md)
- [WebSocketChannel](interfaces/WebSocketChannel.md)
- [WebSocketErrorMessage](interfaces/WebSocketErrorMessage.md)
- [WebSocketFullActivateMessage](interfaces/WebSocketFullActivateMessage.md)
- [WebSocketFullChangeMessage](interfaces/WebSocketFullChangeMessage.md)
- [WebSocketFullDoneMessage](interfaces/WebSocketFullDoneMessage.md)
- [WebSocketFullOpenMessage](interfaces/WebSocketFullOpenMessage.md)
- [WebSocketFullReceivedMessage](interfaces/WebSocketFullReceivedMessage.md)
- [WebSocketL2SnapshotMessage](interfaces/WebSocketL2SnapshotMessage.md)
- [WebSocketL2UpdateMessage](interfaces/WebSocketL2UpdateMessage.md)
- [WebSocketMatchMessage](interfaces/WebSocketMatchMessage.md)
- [WebSocketRequest](interfaces/WebSocketRequest.md)
- [WebSocketStatusMessage](interfaces/WebSocketStatusMessage.md)
- [WebSocketSubscription](interfaces/WebSocketSubscription.md)
- [WebSocketTickerMessage](interfaces/WebSocketTickerMessage.md)
- [WireDepositInformation](interfaces/WireDepositInformation.md)

### Type aliases

- [ClientAuthentication](modules.md#clientauthentication)
- [HistoricRateRequest](modules.md#historicraterequest)
- [MarketOrder](modules.md#marketorder)
- [NewOrder](modules.md#neworder)
- [Order](modules.md#order)
- [OrderBook](modules.md#orderbook)
- [WebSocketLastMatchMessage](modules.md#websocketlastmatchmessage)
- [WebSocketResponse](modules.md#websocketresponse)

## Type aliases

### ClientAuthentication

Ƭ **ClientAuthentication**: [`ClientAuthenticationBaseUrls`](interfaces/ClientAuthenticationBaseUrls.md) \| [`ClientAuthenticationCustomUrls`](interfaces/ClientAuthenticationCustomUrls.md)

#### Defined in

[CoinbasePro.ts:26](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/CoinbasePro.ts#L26)

---

### HistoricRateRequest

Ƭ **HistoricRateRequest**: [`BaseHistoricRateRequest`](interfaces/BaseHistoricRateRequest.md) \| [`HistoricRateRequestWithTimeSpan`](interfaces/HistoricRateRequestWithTimeSpan.md)

#### Defined in

[product/ProductAPI.ts:82](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L82)

---

### MarketOrder

Ƭ **MarketOrder**: `BaseOrder` & { `type`: [`MARKET`](enums/OrderType.md#market) } & { `size`: `string` } \| { `funds`: `string` }

#### Defined in

[order/OrderAPI.ts:77](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L77)

---

### NewOrder

Ƭ **NewOrder**: [`LimitOrder`](interfaces/LimitOrder.md) \| [`AutoCancelLimitOrder`](interfaces/AutoCancelLimitOrder.md) \| [`PostOnlyLimitOrder`](interfaces/PostOnlyLimitOrder.md) \| [`MarketOrder`](modules.md#marketorder)

#### Defined in

[order/OrderAPI.ts:57](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L57)

---

### Order

Ƭ **Order**: [`PendingOrder`](interfaces/PendingOrder.md) \| [`FilledOrder`](interfaces/FilledOrder.md)

#### Defined in

[order/OrderAPI.ts:106](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/order/OrderAPI.ts#L106)

---

### OrderBook

Ƭ **OrderBook**: [`OrderBookLevel1`](interfaces/OrderBookLevel1.md) \| [`OrderBookLevel2`](interfaces/OrderBookLevel2.md) \| [`OrderBookLevel3`](interfaces/OrderBookLevel3.md)

#### Defined in

[product/ProductAPI.ts:133](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/product/ProductAPI.ts#L133)

---

### WebSocketLastMatchMessage

Ƭ **WebSocketLastMatchMessage**: `Omit`<[`WebSocketMatchMessage`](interfaces/WebSocketMatchMessage.md), `"type"`\> & { `type`: [`LAST_MATCH`](enums/WebSocketResponseType.md#last_match) }

#### Defined in

[client/WebSocketClient.ts:280](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L280)

---

### WebSocketResponse

Ƭ **WebSocketResponse**: `WebSocketMessage` & { `type`: [`WebSocketResponseType`](enums/WebSocketResponseType.md) }

#### Defined in

[client/WebSocketClient.ts:125](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L125)
