[coinbase-pro-node](../README.md) / [Exports](../modules.md) / WebSocketMatchMessage

# Interface: WebSocketMatchMessage

## Hierarchy

- `WebSocketUserMessage`

  ↳ **`WebSocketMatchMessage`**

## Table of contents

### Properties

- [maker_fee_rate](WebSocketMatchMessage.md#maker_fee_rate)
- [maker_order_id](WebSocketMatchMessage.md#maker_order_id)
- [price](WebSocketMatchMessage.md#price)
- [product_id](WebSocketMatchMessage.md#product_id)
- [profile_id](WebSocketMatchMessage.md#profile_id)
- [sequence](WebSocketMatchMessage.md#sequence)
- [side](WebSocketMatchMessage.md#side)
- [size](WebSocketMatchMessage.md#size)
- [taker_fee_rate](WebSocketMatchMessage.md#taker_fee_rate)
- [taker_order_id](WebSocketMatchMessage.md#taker_order_id)
- [time](WebSocketMatchMessage.md#time)
- [trade_id](WebSocketMatchMessage.md#trade_id)
- [type](WebSocketMatchMessage.md#type)
- [user_id](WebSocketMatchMessage.md#user_id)

## Properties

### maker_fee_rate

• `Optional` **maker_fee_rate**: `string`

#### Defined in

[client/WebSocketClient.ts:150](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L150)

---

### maker_order_id

• **maker_order_id**: `string`

#### Defined in

[client/WebSocketClient.ts:151](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L151)

---

### price

• **price**: `string`

#### Defined in

[client/WebSocketClient.ts:152](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L152)

---

### product_id

• **product_id**: `string`

#### Defined in

[client/WebSocketClient.ts:153](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L153)

---

### profile_id

• `Optional` **profile_id**: `string`

#### Inherited from

WebSocketUserMessage.profile_id

#### Defined in

[client/WebSocketClient.ts:276](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L276)

---

### sequence

• **sequence**: `number`

#### Defined in

[client/WebSocketClient.ts:154](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L154)

---

### side

• **side**: `OrderSide`

#### Defined in

[client/WebSocketClient.ts:155](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L155)

---

### size

• **size**: `string`

#### Defined in

[client/WebSocketClient.ts:156](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L156)

---

### taker_fee_rate

• `Optional` **taker_fee_rate**: `string`

#### Defined in

[client/WebSocketClient.ts:157](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L157)

---

### taker_order_id

• **taker_order_id**: `string`

#### Defined in

[client/WebSocketClient.ts:158](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L158)

---

### time

• **time**: `string`

#### Defined in

[client/WebSocketClient.ts:159](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L159)

---

### trade_id

• **trade_id**: `number`

#### Defined in

[client/WebSocketClient.ts:160](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L160)

---

### type

• **type**: [`FULL_MATCH`](../enums/WebSocketResponseType.md#full_match)

#### Defined in

[client/WebSocketClient.ts:161](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L161)

---

### user_id

• `Optional` **user_id**: `string`

#### Inherited from

WebSocketUserMessage.user_id

#### Defined in

[client/WebSocketClient.ts:277](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L277)
