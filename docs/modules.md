[coinbase-pro-node](README.md) / Exports

# coinbase-pro-node

## Table of contents

### Enumerations

- [AccountType](enums/accounttype.md)
- [CancelOrderPeriod](enums/cancelorderperiod.md)
- [CandleGranularity](enums/candlegranularity.md)
- [CurrencyType](enums/currencytype.md)
- [Liquidity](enums/liquidity.md)
- [OrderBookLevel](enums/orderbooklevel.md)
- [OrderStatus](enums/orderstatus.md)
- [OrderType](enums/ordertype.md)
- [ProductEvent](enums/productevent.md)
- [SelfTradePrevention](enums/selftradeprevention.md)
- [TimeInForce](enums/timeinforce.md)
- [WebSocketChannelName](enums/websocketchannelname.md)
- [WebSocketEvent](enums/websocketevent.md)
- [WebSocketRequestType](enums/websocketrequesttype.md)
- [WebSocketResponseType](enums/websocketresponsetype.md)

### Classes

- [AccountAPI](classes/accountapi.md)
- [CandleBucketUtil](classes/candlebucketutil.md)
- [CoinbasePro](classes/coinbasepro.md)
- [CurrencyAPI](classes/currencyapi.md)
- [FeeAPI](classes/feeapi.md)
- [FillAPI](classes/fillapi.md)
- [OrderAPI](classes/orderapi.md)
- [ProductAPI](classes/productapi.md)
- [ProfileAPI](classes/profileapi.md)
- [RESTClient](classes/restclient.md)
- [TimeAPI](classes/timeapi.md)
- [UserAPI](classes/userapi.md)
- [WebSocketClient](classes/websocketclient.md)

### Interfaces

- [Account](interfaces/account.md)
- [AccountHistory](interfaces/accounthistory.md)
- [AccountHistoryDetails](interfaces/accounthistorydetails.md)
- [AutoCancelLimitOrder](interfaces/autocancellimitorder.md)
- [BaseHistoricRateRequest](interfaces/basehistoricraterequest.md)
- [Candle](interfaces/candle.md)
- [CandleBatchBucket](interfaces/candlebatchbucket.md)
- [ClientAuthenticationBase](interfaces/clientauthenticationbase.md)
- [ClientAuthenticationBaseUrls](interfaces/clientauthenticationbaseurls.md)
- [ClientAuthenticationCustomUrls](interfaces/clientauthenticationcustomurls.md)
- [ClientConnection](interfaces/clientconnection.md)
- [CoinbaseAccount](interfaces/coinbaseaccount.md)
- [Currency](interfaces/currency.md)
- [CurrencyDetail](interfaces/currencydetail.md)
- [FeeTier](interfaces/feetier.md)
- [Fill](interfaces/fill.md)
- [FilledOrder](interfaces/filledorder.md)
- [FundTransfer](interfaces/fundtransfer.md)
- [HistoricRateRequestWithTimeSpan](interfaces/historicraterequestwithtimespan.md)
- [Hold](interfaces/hold.md)
- [LimitOrder](interfaces/limitorder.md)
- [OrderBookLevel1](interfaces/orderbooklevel1.md)
- [OrderBookLevel2](interfaces/orderbooklevel2.md)
- [OrderBookLevel3](interfaces/orderbooklevel3.md)
- [OrderBookRequestParameters](interfaces/orderbookrequestparameters.md)
- [OrderListQueryParam](interfaces/orderlistqueryparam.md)
- [PendingOrder](interfaces/pendingorder.md)
- [PostOnlyLimitOrder](interfaces/postonlylimitorder.md)
- [Product](interfaces/product.md)
- [ProductStats](interfaces/productstats.md)
- [ProductTicker](interfaces/productticker.md)
- [Profile](interfaces/profile.md)
- [SEPADepositInformation](interfaces/sepadepositinformation.md)
- [TimeSkew](interfaces/timeskew.md)
- [Trade](interfaces/trade.md)
- [TrailingVolume](interfaces/trailingvolume.md)
- [VerifiedUser](interfaces/verifieduser.md)
- [WebSocketChannel](interfaces/websocketchannel.md)
- [WebSocketErrorMessage](interfaces/websocketerrormessage.md)
- [WebSocketMatchMessage](interfaces/websocketmatchmessage.md)
- [WebSocketRequest](interfaces/websocketrequest.md)
- [WebSocketStatusMessage](interfaces/websocketstatusmessage.md)
- [WebSocketSubscription](interfaces/websocketsubscription.md)
- [WebSocketTickerMessage](interfaces/websockettickermessage.md)
- [WireDepositInformation](interfaces/wiredepositinformation.md)

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

Ƭ **ClientAuthentication**: [ClientAuthenticationBaseUrls](interfaces/clientauthenticationbaseurls.md) \| [ClientAuthenticationCustomUrls](interfaces/clientauthenticationcustomurls.md)

#### Defined in

[CoinbasePro.ts:26](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/CoinbasePro.ts#L26)

---

### HistoricRateRequest

Ƭ **HistoricRateRequest**: [BaseHistoricRateRequest](interfaces/basehistoricraterequest.md) \| [HistoricRateRequestWithTimeSpan](interfaces/historicraterequestwithtimespan.md)

#### Defined in

[product/ProductAPI.ts:82](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/ProductAPI.ts#L82)

---

### MarketOrder

Ƭ **MarketOrder**: `BaseOrder` & { `type`: [MARKET](enums/ordertype.md#market) } & { `size`: `string` } \| { `funds`: `string` }

#### Defined in

[order/OrderAPI.ts:77](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L77)

---

### NewOrder

Ƭ **NewOrder**: [LimitOrder](interfaces/limitorder.md) \| [AutoCancelLimitOrder](interfaces/autocancellimitorder.md) \| [PostOnlyLimitOrder](interfaces/postonlylimitorder.md) \| [MarketOrder](modules.md#marketorder)

#### Defined in

[order/OrderAPI.ts:57](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L57)

---

### Order

Ƭ **Order**: [PendingOrder](interfaces/pendingorder.md) \| [FilledOrder](interfaces/filledorder.md)

#### Defined in

[order/OrderAPI.ts:106](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/order/OrderAPI.ts#L106)

---

### OrderBook

Ƭ **OrderBook**: [OrderBookLevel1](interfaces/orderbooklevel1.md) \| [OrderBookLevel2](interfaces/orderbooklevel2.md) \| [OrderBookLevel3](interfaces/orderbooklevel3.md)

#### Defined in

[product/ProductAPI.ts:133](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/product/ProductAPI.ts#L133)

---

### WebSocketLastMatchMessage

Ƭ **WebSocketLastMatchMessage**: `Omit`<[WebSocketMatchMessage](interfaces/websocketmatchmessage.md), `"type"`\> & { `type`: [LAST_MATCH](enums/websocketresponsetype.md#last_match) }

#### Defined in

[client/WebSocketClient.ts:186](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/client/WebSocketClient.ts#L186)

---

### WebSocketResponse

Ƭ **WebSocketResponse**: `WebSocketMessage` & { `type`: [WebSocketResponseType](enums/websocketresponsetype.md) }

#### Defined in

[client/WebSocketClient.ts:123](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/client/WebSocketClient.ts#L123)
