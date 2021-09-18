[coinbase-pro-node](../README.md) / [Exports](../modules.md) / WebSocketStatusMessage

# Interface: WebSocketStatusMessage

## Table of contents

### Properties

- [currencies](WebSocketStatusMessage.md#currencies)
- [products](WebSocketStatusMessage.md#products)
- [type](WebSocketStatusMessage.md#type)

## Properties

### currencies

• **currencies**: { `convertible_to`: `string`[] ; `details`: [`CurrencyDetail`](CurrencyDetail.md) ; `funding_account_id`: `string` ; `id`: `string` ; `max_precision`: `string` ; `min_size`: `string` ; `name`: `string` ; `status`: ``"online"`` ; `status_message?`: `string`  }[]

#### Defined in

[client/WebSocketClient.ts:153](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/client/WebSocketClient.ts#L153)

___

### products

• **products**: [`Product`](Product.md) & { `type`: ``"spot"``  }[]

#### Defined in

[client/WebSocketClient.ts:164](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/client/WebSocketClient.ts#L164)

___

### type

• **type**: [`STATUS`](../enums/WebSocketResponseType.md#status)

#### Defined in

[client/WebSocketClient.ts:165](https://github.com/bennycode/coinbase-pro-node/blob/9734468/src/client/WebSocketClient.ts#L165)
