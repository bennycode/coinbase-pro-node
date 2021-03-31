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
- [ISO\_8601\_MS\_UTC](modules.md#iso_8601_ms_utc)
- [MarketOrder](modules.md#marketorder)
- [NewOrder](modules.md#neworder)
- [Order](modules.md#order)
- [OrderBook](modules.md#orderbook)
- [UUID\_V4](modules.md#uuid_v4)
- [WebSocketLastMatchMessage](modules.md#websocketlastmatchmessage)
- [WebSocketResponse](modules.md#websocketresponse)

## Type aliases

### ClientAuthentication

Ƭ **ClientAuthentication**: [*ClientAuthenticationBaseUrls*](interfaces/clientauthenticationbaseurls.md) \| [*ClientAuthenticationCustomUrls*](interfaces/clientauthenticationcustomurls.md)

Defined in: [CoinbasePro.ts:26](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/CoinbasePro.ts#L26)

___

### HistoricRateRequest

Ƭ **HistoricRateRequest**: [*BaseHistoricRateRequest*](interfaces/basehistoricraterequest.md) \| [*HistoricRateRequestWithTimeSpan*](interfaces/historicraterequestwithtimespan.md)

Defined in: [product/ProductAPI.ts:82](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/ProductAPI.ts#L82)

___

### ISO\_8601\_MS\_UTC

Ƭ **ISO\_8601\_MS\_UTC**: *string*

ISO 8601 timestamp with microseconds in Coordinated Universal Time (UTC), i.e. "2014-11-06T10:34:47.123456Z"

Defined in: [payload/common.ts:2](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/payload/common.ts#L2)

___

### MarketOrder

Ƭ **MarketOrder**: BaseOrder & { `type`: [*MARKET*](enums/ordertype.md#market)  } & { `size`: *string*  } \| { `funds`: *string*  }

Defined in: [order/OrderAPI.ts:76](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/order/OrderAPI.ts#L76)

___

### NewOrder

Ƭ **NewOrder**: [*LimitOrder*](interfaces/limitorder.md) \| [*AutoCancelLimitOrder*](interfaces/autocancellimitorder.md) \| [*PostOnlyLimitOrder*](interfaces/postonlylimitorder.md) \| [*MarketOrder*](modules.md#marketorder)

Defined in: [order/OrderAPI.ts:56](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/order/OrderAPI.ts#L56)

___

### Order

Ƭ **Order**: [*PendingOrder*](interfaces/pendingorder.md) \| [*FilledOrder*](interfaces/filledorder.md)

Defined in: [order/OrderAPI.ts:105](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/order/OrderAPI.ts#L105)

___

### OrderBook

Ƭ **OrderBook**: [*OrderBookLevel1*](interfaces/orderbooklevel1.md) \| [*OrderBookLevel2*](interfaces/orderbooklevel2.md) \| [*OrderBookLevel3*](interfaces/orderbooklevel3.md)

Defined in: [product/ProductAPI.ts:133](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/product/ProductAPI.ts#L133)

___

### UUID\_V4

Ƭ **UUID\_V4**: *string*

UUID, both forms (with and without dashes) are accepted, i.e. "132fb6ae-456b-4654-b4e0-d681ac05cea1" or "132fb6ae456b4654b4e0d681ac05cea1"

Defined in: [payload/common.ts:5](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/payload/common.ts#L5)

___

### WebSocketLastMatchMessage

Ƭ **WebSocketLastMatchMessage**: *Omit*<[*WebSocketMatchMessage*](interfaces/websocketmatchmessage.md), *type*\> & { `type`: [*LAST\_MATCH*](enums/websocketresponsetype.md#last_match)  }

Defined in: [client/WebSocketClient.ts:186](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/client/WebSocketClient.ts#L186)

___

### WebSocketResponse

Ƭ **WebSocketResponse**: WebSocketMessage & { `type`: [*WebSocketResponseType*](enums/websocketresponsetype.md)  }

Defined in: [client/WebSocketClient.ts:123](https://github.com/bennycode/coinbase-pro-node/blob/a54e177/src/client/WebSocketClient.ts#L123)
