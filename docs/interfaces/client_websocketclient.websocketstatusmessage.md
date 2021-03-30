[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [client/WebSocketClient](../modules/client_websocketclient.md) / WebSocketStatusMessage

# Interface: WebSocketStatusMessage

[client/WebSocketClient](../modules/client_websocketclient.md).WebSocketStatusMessage

## Table of contents

### Properties

- [currencies](client_websocketclient.websocketstatusmessage.md#currencies)
- [products](client_websocketclient.websocketstatusmessage.md#products)
- [type](client_websocketclient.websocketstatusmessage.md#type)

## Properties

### currencies

• **currencies**: { `convertible_to`: *string*[] ; `details`: [*CurrencyDetail*](currency_currencyapi.currencydetail.md) ; `funding_account_id`: *string* ; `id`: *string* ; `max_precision`: *string* ; `min_size`: *string* ; `name`: *string* ; `status`: *online* ; `status_message?`: *string*  }[]

Defined in: [client/WebSocketClient.ts:153](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L153)

___

### products

• **products**: [*Product*](product_productapi.product.md) & { `type`: *spot*  }[]

Defined in: [client/WebSocketClient.ts:164](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L164)

___

### type

• **type**: [*STATUS*](../enums/client_websocketclient.websocketresponsetype.md#status)

Defined in: [client/WebSocketClient.ts:165](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/WebSocketClient.ts#L165)
