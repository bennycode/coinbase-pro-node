[coinbase-pro-node](../README.md) / [Exports](../modules.md) / WebSocketFullChangeMessage

# Interface: WebSocketFullChangeMessage

## Hierarchy

- `WebSocketUserMessage`

  ↳ **`WebSocketFullChangeMessage`**

## Table of contents

### Properties

- [new_funds](WebSocketFullChangeMessage.md#new_funds)
- [new_size](WebSocketFullChangeMessage.md#new_size)
- [old_funds](WebSocketFullChangeMessage.md#old_funds)
- [old_size](WebSocketFullChangeMessage.md#old_size)
- [order_id](WebSocketFullChangeMessage.md#order_id)
- [price](WebSocketFullChangeMessage.md#price)
- [product_id](WebSocketFullChangeMessage.md#product_id)
- [profile_id](WebSocketFullChangeMessage.md#profile_id)
- [sequence](WebSocketFullChangeMessage.md#sequence)
- [side](WebSocketFullChangeMessage.md#side)
- [time](WebSocketFullChangeMessage.md#time)
- [type](WebSocketFullChangeMessage.md#type)
- [user_id](WebSocketFullChangeMessage.md#user_id)

## Properties

### new_funds

• `Optional` **new_funds**: `string`

#### Defined in

[client/WebSocketClient.ts:249](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L249)

---

### new_size

• `Optional` **new_size**: `string`

#### Defined in

[client/WebSocketClient.ts:250](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L250)

---

### old_funds

• `Optional` **old_funds**: `string`

#### Defined in

[client/WebSocketClient.ts:251](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L251)

---

### old_size

• `Optional` **old_size**: `string`

#### Defined in

[client/WebSocketClient.ts:252](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L252)

---

### order_id

• **order_id**: `string`

#### Defined in

[client/WebSocketClient.ts:253](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L253)

---

### price

• **price**: `string`

#### Defined in

[client/WebSocketClient.ts:254](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L254)

---

### product_id

• **product_id**: `string`

#### Defined in

[client/WebSocketClient.ts:255](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L255)

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

[client/WebSocketClient.ts:256](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L256)

---

### side

• **side**: `OrderSide`

#### Defined in

[client/WebSocketClient.ts:257](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L257)

---

### time

• **time**: `string`

#### Defined in

[client/WebSocketClient.ts:258](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L258)

---

### type

• **type**: [`FULL_CHANGE`](../enums/WebSocketResponseType.md#full_change)

#### Defined in

[client/WebSocketClient.ts:259](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L259)

---

### user_id

• `Optional` **user_id**: `string`

#### Inherited from

WebSocketUserMessage.user_id

#### Defined in

[client/WebSocketClient.ts:277](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L277)
