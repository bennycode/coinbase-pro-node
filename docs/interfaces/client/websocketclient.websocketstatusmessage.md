[coinbase-pro-node](../../README.md) / [Exports](../../modules.md) / [client/WebSocketClient](../../modules/client_websocketclient.md) / WebSocketStatusMessage

# Interface: WebSocketStatusMessage

[client/WebSocketClient](../../modules/client_websocketclient.md).WebSocketStatusMessage

## Hierarchy

- **WebSocketStatusMessage**

## Table of contents

### Properties

- [currencies](websocketclient.websocketstatusmessage.md#currencies)
- [products](websocketclient.websocketstatusmessage.md#products)
- [type](websocketclient.websocketstatusmessage.md#type)

## Properties

### currencies

• **currencies**: { `convertible_to`: _string_[] ; `details`: [_CurrencyDetail_](../currency/currencyapi.currencydetail.md) ; `funding_account_id`: _string_ ; `id`: _string_ ; `max_precision`: _string_ ; `min_size`: _string_ ; `name`: _string_ ; `status`: _online_ ; `status_message?`: _undefined_ \| _string_ }[]

Defined in: [client/WebSocketClient.ts:153](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/client/WebSocketClient.ts#L153)

---

### products

• **products**: [_Product_](../product/productapi.product.md) & { `type`: _spot_ }[]

Defined in: [client/WebSocketClient.ts:164](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/client/WebSocketClient.ts#L164)

---

### type

• **type**: [_STATUS_](../../enums/client/websocketclient.websocketresponsetype.md#status)

Defined in: [client/WebSocketClient.ts:165](https://github.com/bennycode/coinbase-pro-node/blob/bf1bcdd/src/client/WebSocketClient.ts#L165)
