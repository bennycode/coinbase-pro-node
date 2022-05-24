[coinbase-pro-node](../README.md) / [Exports](../modules.md) / WebSocketFullReceivedMessage

# Interface: WebSocketFullReceivedMessage

## Hierarchy

- `WebSocketUserMessage`

  ↳ **`WebSocketFullReceivedMessage`**

## Table of contents

### Properties

- [client_oid](WebSocketFullReceivedMessage.md#client_oid)
- [funds](WebSocketFullReceivedMessage.md#funds)
- [order_id](WebSocketFullReceivedMessage.md#order_id)
- [order_type](WebSocketFullReceivedMessage.md#order_type)
- [price](WebSocketFullReceivedMessage.md#price)
- [product_id](WebSocketFullReceivedMessage.md#product_id)
- [profile_id](WebSocketFullReceivedMessage.md#profile_id)
- [sequence](WebSocketFullReceivedMessage.md#sequence)
- [side](WebSocketFullReceivedMessage.md#side)
- [size](WebSocketFullReceivedMessage.md#size)
- [time](WebSocketFullReceivedMessage.md#time)
- [type](WebSocketFullReceivedMessage.md#type)
- [user_id](WebSocketFullReceivedMessage.md#user_id)

## Properties

### client_oid

• **client_oid**: `string`

#### Defined in

[client/WebSocketClient.ts:212](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L212)

---

### funds

• `Optional` **funds**: `string`

#### Defined in

[client/WebSocketClient.ts:213](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L213)

---

### order_id

• **order_id**: `string`

#### Defined in

[client/WebSocketClient.ts:214](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L214)

---

### order_type

• **order_type**: `"limit"` \| `"market"`

#### Defined in

[client/WebSocketClient.ts:215](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L215)

---

### price

• `Optional` **price**: `string`

#### Defined in

[client/WebSocketClient.ts:216](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L216)

---

### product_id

• **product_id**: `string`

#### Defined in

[client/WebSocketClient.ts:217](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L217)

---

### profile_id

• `Optional` **profile_id**: `string`

#### Inherited from

WebSocketUserMessage.profile_id

#### Defined in

[client/WebSocketClient.ts:276](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L276)

---

### sequence

• **sequence**: `number`

#### Defined in

[client/WebSocketClient.ts:218](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L218)

---

### side

• **side**: `OrderSide`

#### Defined in

[client/WebSocketClient.ts:219](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L219)

---

### size

• `Optional` **size**: `string`

#### Defined in

[client/WebSocketClient.ts:220](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L220)

---

### time

• **time**: `string`

#### Defined in

[client/WebSocketClient.ts:221](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L221)

---

### type

• **type**: [`FULL_RECEIVED`](../enums/WebSocketResponseType.md#full_received)

#### Defined in

[client/WebSocketClient.ts:222](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L222)

---

### user_id

• `Optional` **user_id**: `string`

#### Inherited from

WebSocketUserMessage.user_id

#### Defined in

[client/WebSocketClient.ts:277](https://github.com/bennycode/coinbase-pro-node/blob/7770f03/src/client/WebSocketClient.ts#L277)
