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
- [OrderSide](enums/orderside.md)
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
- [default](classes/default.md)

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
- [PaginatedData](interfaces/paginateddata.md)
- [Pagination](interfaces/pagination.md)
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
- [ISO_8601_MS_UTC](modules.md#iso_8601_ms_utc)
- [MarketOrder](modules.md#marketorder)
- [NewOrder](modules.md#neworder)
- [Order](modules.md#order)
- [OrderBook](modules.md#orderbook)
- [UUID_V4](modules.md#uuid_v4)
- [WebSocketLastMatchMessage](modules.md#websocketlastmatchmessage)
- [WebSocketResponse](modules.md#websocketresponse)

## Type aliases

### ClientAuthentication

Ƭ **ClientAuthentication**: [_ClientAuthenticationBaseUrls_](interfaces/clientauthenticationbaseurls.md) \| [_ClientAuthenticationCustomUrls_](interfaces/clientauthenticationcustomurls.md)

Defined in: [CoinbasePro.ts:26](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/CoinbasePro.ts#L26)

---

### HistoricRateRequest

Ƭ **HistoricRateRequest**: [_BaseHistoricRateRequest_](interfaces/basehistoricraterequest.md) \| [_HistoricRateRequestWithTimeSpan_](interfaces/historicraterequestwithtimespan.md)

Defined in: [product/ProductAPI.ts:82](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L82)

---

### ISO_8601_MS_UTC

Ƭ **ISO_8601_MS_UTC**: _string_

ISO 8601 timestamp with microseconds in Coordinated Universal Time (UTC), i.e. "2014-11-06T10:34:47.123456Z"

Defined in: [payload/common.ts:2](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/payload/common.ts#L2)

---

### MarketOrder

Ƭ **MarketOrder**: BaseOrder & { `type`: [_MARKET_](enums/ordertype.md#market) } & { `size`: _string_ } \| { `funds`: _string_ }

Defined in: [order/OrderAPI.ts:77](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/order/OrderAPI.ts#L77)

---

### NewOrder

Ƭ **NewOrder**: [_LimitOrder_](interfaces/limitorder.md) \| [_AutoCancelLimitOrder_](interfaces/autocancellimitorder.md) \| [_PostOnlyLimitOrder_](interfaces/postonlylimitorder.md) \| [_MarketOrder_](modules.md#marketorder)

Defined in: [order/OrderAPI.ts:57](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/order/OrderAPI.ts#L57)

---

### Order

Ƭ **Order**: [_PendingOrder_](interfaces/pendingorder.md) \| [_FilledOrder_](interfaces/filledorder.md)

Defined in: [order/OrderAPI.ts:106](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/order/OrderAPI.ts#L106)

---

### OrderBook

Ƭ **OrderBook**: [_OrderBookLevel1_](interfaces/orderbooklevel1.md) \| [_OrderBookLevel2_](interfaces/orderbooklevel2.md) \| [_OrderBookLevel3_](interfaces/orderbooklevel3.md)

Defined in: [product/ProductAPI.ts:133](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/product/ProductAPI.ts#L133)

---

### UUID_V4

Ƭ **UUID_V4**: _string_

UUID, both forms (with and without dashes) are accepted, i.e. "132fb6ae-456b-4654-b4e0-d681ac05cea1" or "132fb6ae456b4654b4e0d681ac05cea1"

Defined in: [payload/common.ts:5](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/payload/common.ts#L5)

---

### WebSocketLastMatchMessage

Ƭ **WebSocketLastMatchMessage**: _Omit_<[_WebSocketMatchMessage_](interfaces/websocketmatchmessage.md), `"type"`\> & { `type`: [_LAST_MATCH_](enums/websocketresponsetype.md#last_match) }

Defined in: [client/WebSocketClient.ts:186](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/client/WebSocketClient.ts#L186)

---

### WebSocketResponse

Ƭ **WebSocketResponse**: WebSocketMessage & { `type`: [_WebSocketResponseType_](enums/websocketresponsetype.md) }

Defined in: [client/WebSocketClient.ts:123](https://github.com/bennycode/coinbase-pro-node/blob/a2d34d0/src/client/WebSocketClient.ts#L123)
