[coinbase-pro-node](../README.md) / [Exports](../modules.md) / WebSocketStatusMessage

# Interface: WebSocketStatusMessage

## Table of contents

### Properties

- [currencies](websocketstatusmessage.md#currencies)
- [products](websocketstatusmessage.md#products)
- [type](websocketstatusmessage.md#type)

## Properties

### currencies

• **currencies**: { `convertible_to`: _string_[] ; `details`: [_CurrencyDetail_](currencydetail.md) ; `funding_account_id`: _string_ ; `id`: _string_ ; `max_precision`: _string_ ; `min_size`: _string_ ; `name`: _string_ ; `status`: `"online"` ; `status_message?`: _string_ }[]

Defined in: [client/WebSocketClient.ts:153](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/client/WebSocketClient.ts#L153)

---

### products

• **products**: [_Product_](product.md) & { `type`: `"spot"` }[]

Defined in: [client/WebSocketClient.ts:164](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/client/WebSocketClient.ts#L164)

---

### type

• **type**: [_STATUS_](../enums/websocketresponsetype.md#status)

Defined in: [client/WebSocketClient.ts:165](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/client/WebSocketClient.ts#L165)
