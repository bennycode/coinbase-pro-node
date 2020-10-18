**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / "client/WebSocketClient"

# Module: "client/WebSocketClient"

## Index

### Enumerations

- [WebSocketChannelName](../enums/_client_websocketclient_.websocketchannelname.md)
- [WebSocketEvent](../enums/_client_websocketclient_.websocketevent.md)
- [WebSocketRequestType](../enums/_client_websocketclient_.websocketrequesttype.md)
- [WebSocketResponseType](../enums/_client_websocketclient_.websocketresponsetype.md)

### Classes

- [WebSocketClient](../classes/_client_websocketclient_.websocketclient.md)

### Interfaces

- [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md)
- [WebSocketRequest](../interfaces/_client_websocketclient_.websocketrequest.md)

### Type aliases

- [WebSocketErrorMessage](_client_websocketclient_.md#websocketerrormessage)
- [WebSocketLastMatchMessage](_client_websocketclient_.md#websocketlastmatchmessage)
- [WebSocketMatchMessage](_client_websocketclient_.md#websocketmatchmessage)
- [WebSocketResponse](_client_websocketclient_.md#websocketresponse)
- [WebSocketStatusMessage](_client_websocketclient_.md#websocketstatusmessage)
- [WebSocketSubscription](_client_websocketclient_.md#websocketsubscription)
- [WebSocketTickerMessage](_client_websocketclient_.md#websockettickermessage)

## Type aliases

### WebSocketErrorMessage

Ƭ **WebSocketErrorMessage**: { message: string ; reason: string ; type: [ERROR](../enums/_client_websocketclient_.websocketresponsetype.md#error) }

_Defined in [src/client/WebSocketClient.ts:133](https://github.com/bennyn/coinbase-pro-node/blob/7eff64a/src/client/WebSocketClient.ts#L133)_

#### Type declaration:

| Name      | Type                                                                      |
| --------- | ------------------------------------------------------------------------- |
| `message` | string                                                                    |
| `reason`  | string                                                                    |
| `type`    | [ERROR](../enums/_client_websocketclient_.websocketresponsetype.md#error) |

---

### WebSocketLastMatchMessage

Ƭ **WebSocketLastMatchMessage**: Omit\<[WebSocketMatchMessage](_client_websocketclient_.md#websocketmatchmessage), \"type\"> & { type: [LAST_MATCH](../enums/_client_websocketclient_.websocketresponsetype.md#last_match) }

_Defined in [src/client/WebSocketClient.ts:186](https://github.com/bennyn/coinbase-pro-node/blob/7eff64a/src/client/WebSocketClient.ts#L186)_

---

### WebSocketMatchMessage

Ƭ **WebSocketMatchMessage**: { maker*order_id: UUID_V4 ; price: string ; product_id: string ; sequence: number ; side: OrderSide ; size: string ; taker_order_id: UUID_V4 ; time: ISO_8601_MS_UTC ; trade_id: number ; type: [FULL\_MATCH](../enums/\_client_websocketclient*.websocketresponsetype.md#full_match) }

_Defined in [src/client/WebSocketClient.ts:139](https://github.com/bennyn/coinbase-pro-node/blob/7eff64a/src/client/WebSocketClient.ts#L139)_

#### Type declaration:

| Name             | Type                                                                                |
| ---------------- | ----------------------------------------------------------------------------------- |
| `maker_order_id` | UUID_V4                                                                             |
| `price`          | string                                                                              |
| `product_id`     | string                                                                              |
| `sequence`       | number                                                                              |
| `side`           | OrderSide                                                                           |
| `size`           | string                                                                              |
| `taker_order_id` | UUID_V4                                                                             |
| `time`           | ISO_8601_MS_UTC                                                                     |
| `trade_id`       | number                                                                              |
| `type`           | [FULL_MATCH](../enums/_client_websocketclient_.websocketresponsetype.md#full_match) |

---

### WebSocketResponse

Ƭ **WebSocketResponse**: { type: [WebSocketResponseType](../enums/_client_websocketclient_.websocketresponsetype.md) } & WebSocketMessage

_Defined in [src/client/WebSocketClient.ts:123](https://github.com/bennyn/coinbase-pro-node/blob/7eff64a/src/client/WebSocketClient.ts#L123)_

---

### WebSocketStatusMessage

Ƭ **WebSocketStatusMessage**: { currencies: { convertible*to: string[] ; details: [CurrencyDetail](../interfaces/\_currency_currencyapi*.currencydetail.md) ; funding*account_id: string ; id: string ; max_precision: string ; min_size: string ; name: string ; status: \"online\" ; status_message?: undefined \| string }[] ; products: [Product](../interfaces/\_product_productapi*.product.md) & { type: \"spot\" }[] ; type: [STATUS](../enums/_client_websocketclient_.websocketresponsetype.md#status) }

_Defined in [src/client/WebSocketClient.ts:152](https://github.com/bennyn/coinbase-pro-node/blob/7eff64a/src/client/WebSocketClient.ts#L152)_

#### Type declaration:

| Name | Type |
| --- | --- |
| `currencies` | { convertible*to: string[] ; details: [CurrencyDetail](../interfaces/\_currency_currencyapi*.currencydetail.md) ; funding_account_id: string ; id: string ; max_precision: string ; min_size: string ; name: string ; status: \"online\" ; status_message?: undefined \| string }[] |
| `products` | [Product](../interfaces/_product_productapi_.product.md) & { type: \"spot\" }[] |
| `type` | [STATUS](../enums/_client_websocketclient_.websocketresponsetype.md#status) |

---

### WebSocketSubscription

Ƭ **WebSocketSubscription**: { channels: [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md)[] ; type: [SUBSCRIPTIONS](../enums/_client_websocketclient_.websocketresponsetype.md#subscriptions) }

_Defined in [src/client/WebSocketClient.ts:188](https://github.com/bennyn/coinbase-pro-node/blob/7eff64a/src/client/WebSocketClient.ts#L188)_

#### Type declaration:

| Name       | Type                                                                                      |
| ---------- | ----------------------------------------------------------------------------------------- |
| `channels` | [WebSocketChannel](../interfaces/_client_websocketclient_.websocketchannel.md)[]          |
| `type`     | [SUBSCRIPTIONS](../enums/_client_websocketclient_.websocketresponsetype.md#subscriptions) |

---

### WebSocketTickerMessage

Ƭ **WebSocketTickerMessage**: { best*ask: string ; best_bid: string ; high_24h: string ; last_size: string ; low_24h: string ; open_24h: string ; price: string ; product_id: string ; sequence: number ; side: OrderSide ; time: ISO_8601_MS_UTC ; trade_id: number ; type: [TICKER](../enums/\_client_websocketclient*.websocketresponsetype.md#ticker) ; volume_24h: string ; volume_30d: string }

_Defined in [src/client/WebSocketClient.ts:168](https://github.com/bennyn/coinbase-pro-node/blob/7eff64a/src/client/WebSocketClient.ts#L168)_

#### Type declaration:

| Name         | Type                                                                        |
| ------------ | --------------------------------------------------------------------------- |
| `best_ask`   | string                                                                      |
| `best_bid`   | string                                                                      |
| `high_24h`   | string                                                                      |
| `last_size`  | string                                                                      |
| `low_24h`    | string                                                                      |
| `open_24h`   | string                                                                      |
| `price`      | string                                                                      |
| `product_id` | string                                                                      |
| `sequence`   | number                                                                      |
| `side`       | OrderSide                                                                   |
| `time`       | ISO_8601_MS_UTC                                                             |
| `trade_id`   | number                                                                      |
| `type`       | [TICKER](../enums/_client_websocketclient_.websocketresponsetype.md#ticker) |
| `volume_24h` | string                                                                      |
| `volume_30d` | string                                                                      |
