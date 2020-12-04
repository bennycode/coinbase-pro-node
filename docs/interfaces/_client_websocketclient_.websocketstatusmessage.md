**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["client/WebSocketClient"](../modules/_client_websocketclient_.md) / WebSocketStatusMessage

# Interface: WebSocketStatusMessage

## Hierarchy

- **WebSocketStatusMessage**

## Index

### Properties

- [currencies](_client_websocketclient_.websocketstatusmessage.md#currencies)
- [products](_client_websocketclient_.websocketstatusmessage.md#products)
- [type](_client_websocketclient_.websocketstatusmessage.md#type)

## Properties

### currencies

• **currencies**: { convertible*to: string[] ; details: [CurrencyDetail](\_currency_currencyapi*.currencydetail.md) ; funding_account_id: string ; id: string ; max_precision: string ; min_size: string ; name: string ; status: \"online\" ; status_message?: undefined \| string }[]

_Defined in [src/client/WebSocketClient.ts:153](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/client/WebSocketClient.ts#L153)_

---

### products

• **products**: [Product](_product_productapi_.product.md) & { type: \"spot\" }[]

_Defined in [src/client/WebSocketClient.ts:164](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/client/WebSocketClient.ts#L164)_

---

### type

• **type**: [STATUS](../enums/_client_websocketclient_.websocketresponsetype.md#status)

_Defined in [src/client/WebSocketClient.ts:165](https://github.com/bennycode/coinbase-pro-node/blob/ee94ab6/src/client/WebSocketClient.ts#L165)_
