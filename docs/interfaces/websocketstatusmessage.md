[coinbase-pro-node](../README.md) / [Exports](../modules.md) / WebSocketStatusMessage

# Interface: WebSocketStatusMessage

## Table of contents

### Properties

- [currencies](websocketstatusmessage.md#currencies)
- [products](websocketstatusmessage.md#products)
- [type](websocketstatusmessage.md#type)

## Properties

### currencies

• **currencies**: { `convertible_to`: `string`[] ; `details`: [CurrencyDetail](currencydetail.md) ; `funding_account_id`: `string` ; `id`: `string` ; `max_precision`: `string` ; `min_size`: `string` ; `name`: `string` ; `status`: `"online"` ; `status_message?`: `string` }[]

#### Defined in

[client/WebSocketClient.ts:153](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/client/WebSocketClient.ts#L153)

---

### products

• **products**: [Product](product.md) & { `type`: `"spot"` }[]

#### Defined in

[client/WebSocketClient.ts:164](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/client/WebSocketClient.ts#L164)

---

### type

• **type**: [STATUS](../enums/websocketresponsetype.md#status)

#### Defined in

[client/WebSocketClient.ts:165](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/client/WebSocketClient.ts#L165)
