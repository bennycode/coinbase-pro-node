[coinbase-pro-node](../README.md) / [Exports](../modules.md) / WebSocketFullDoneMessage

# Interface: WebSocketFullDoneMessage

## Hierarchy

- `WebSocketUserMessage`

  ↳ **`WebSocketFullDoneMessage`**

## Table of contents

### Properties

- [order_id](WebSocketFullDoneMessage.md#order_id)
- [price](WebSocketFullDoneMessage.md#price)
- [product_id](WebSocketFullDoneMessage.md#product_id)
- [profile_id](WebSocketFullDoneMessage.md#profile_id)
- [reason](WebSocketFullDoneMessage.md#reason)
- [remaining_size](WebSocketFullDoneMessage.md#remaining_size)
- [sequence](WebSocketFullDoneMessage.md#sequence)
- [side](WebSocketFullDoneMessage.md#side)
- [time](WebSocketFullDoneMessage.md#time)
- [type](WebSocketFullDoneMessage.md#type)
- [user_id](WebSocketFullDoneMessage.md#user_id)

## Properties

### order_id

• **order_id**: `string`

#### Defined in

[client/WebSocketClient.ts:237](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L237)

---

### price

• **price**: `string`

#### Defined in

[client/WebSocketClient.ts:238](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L238)

---

### product_id

• **product_id**: `string`

#### Defined in

[client/WebSocketClient.ts:239](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L239)

---

### profile_id

• `Optional` **profile_id**: `string`

#### Inherited from

WebSocketUserMessage.profile_id

#### Defined in

[client/WebSocketClient.ts:276](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L276)

---

### reason

• **reason**: `"filled"` \| `"canceled"`

#### Defined in

[client/WebSocketClient.ts:240](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L240)

---

### remaining_size

• **remaining_size**: `string`

#### Defined in

[client/WebSocketClient.ts:241](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L241)

---

### sequence

• **sequence**: `number`

#### Defined in

[client/WebSocketClient.ts:242](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L242)

---

### side

• **side**: `OrderSide`

#### Defined in

[client/WebSocketClient.ts:243](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L243)

---

### time

• **time**: `string`

#### Defined in

[client/WebSocketClient.ts:244](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L244)

---

### type

• **type**: [`FULL_DONE`](../enums/WebSocketResponseType.md#full_done)

#### Defined in

[client/WebSocketClient.ts:245](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L245)

---

### user_id

• `Optional` **user_id**: `string`

#### Inherited from

WebSocketUserMessage.user_id

#### Defined in

[client/WebSocketClient.ts:277](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L277)
