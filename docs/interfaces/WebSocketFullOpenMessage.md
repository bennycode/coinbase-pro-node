[coinbase-pro-node](../README.md) / [Exports](../modules.md) / WebSocketFullOpenMessage

# Interface: WebSocketFullOpenMessage

## Hierarchy

- `WebSocketUserMessage`

  ↳ **`WebSocketFullOpenMessage`**

## Table of contents

### Properties

- [order_id](WebSocketFullOpenMessage.md#order_id)
- [price](WebSocketFullOpenMessage.md#price)
- [product_id](WebSocketFullOpenMessage.md#product_id)
- [profile_id](WebSocketFullOpenMessage.md#profile_id)
- [remaining_size](WebSocketFullOpenMessage.md#remaining_size)
- [sequence](WebSocketFullOpenMessage.md#sequence)
- [side](WebSocketFullOpenMessage.md#side)
- [time](WebSocketFullOpenMessage.md#time)
- [type](WebSocketFullOpenMessage.md#type)
- [user_id](WebSocketFullOpenMessage.md#user_id)

## Properties

### order_id

• **order_id**: `string`

#### Defined in

[client/WebSocketClient.ts:226](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L226)

---

### price

• **price**: `string`

#### Defined in

[client/WebSocketClient.ts:227](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L227)

---

### product_id

• **product_id**: `string`

#### Defined in

[client/WebSocketClient.ts:228](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L228)

---

### profile_id

• `Optional` **profile_id**: `string`

#### Inherited from

WebSocketUserMessage.profile_id

#### Defined in

[client/WebSocketClient.ts:276](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L276)

---

### remaining_size

• **remaining_size**: `string`

#### Defined in

[client/WebSocketClient.ts:229](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L229)

---

### sequence

• **sequence**: `number`

#### Defined in

[client/WebSocketClient.ts:230](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L230)

---

### side

• **side**: `OrderSide`

#### Defined in

[client/WebSocketClient.ts:231](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L231)

---

### time

• **time**: `string`

#### Defined in

[client/WebSocketClient.ts:232](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L232)

---

### type

• **type**: [`FULL_OPEN`](../enums/WebSocketResponseType.md#full_open)

#### Defined in

[client/WebSocketClient.ts:233](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L233)

---

### user_id

• `Optional` **user_id**: `string`

#### Inherited from

WebSocketUserMessage.user_id

#### Defined in

[client/WebSocketClient.ts:277](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L277)
