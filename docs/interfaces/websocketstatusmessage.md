[coinbase-pro-node](../README.md) / [Exports](../modules.md) / WebSocketStatusMessage

# Interface: WebSocketStatusMessage

## Table of contents

### Properties

- [currencies](WebSocketStatusMessage.md#currencies)
- [products](WebSocketStatusMessage.md#products)
- [type](WebSocketStatusMessage.md#type)

## Properties

### currencies

• **currencies**: { `convertible_to`: `string`[] ; `details`: [`CurrencyDetail`](CurrencyDetail.md) ; `funding_account_id`: `string` ; `id`: `string` ; `max_precision`: `string` ; `min_size`: `string` ; `name`: `string` ; `status`: `"online"` ; `status_message?`: `string` }[]

#### Defined in

[client/WebSocketClient.ts:165](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L165)

---

### products

• **products**: [`Product`](Product.md) & { `type`: `"spot"` }[]

#### Defined in

[client/WebSocketClient.ts:176](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L176)

---

### type

• **type**: [`STATUS`](../enums/WebSocketResponseType.md#status)

#### Defined in

[client/WebSocketClient.ts:177](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L177)
