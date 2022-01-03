[coinbase-pro-node](../README.md) / [Exports](../modules.md) / WebSocketFullActivateMessage

# Interface: WebSocketFullActivateMessage

## Hierarchy

- `WebSocketUserMessage`

  ↳ **`WebSocketFullActivateMessage`**

## Table of contents

### Properties

- [funds](WebSocketFullActivateMessage.md#funds)
- [order_id](WebSocketFullActivateMessage.md#order_id)
- [private](WebSocketFullActivateMessage.md#private)
- [product_id](WebSocketFullActivateMessage.md#product_id)
- [profile_id](WebSocketFullActivateMessage.md#profile_id)
- [side](WebSocketFullActivateMessage.md#side)
- [size](WebSocketFullActivateMessage.md#size)
- [stop_price](WebSocketFullActivateMessage.md#stop_price)
- [stop_type](WebSocketFullActivateMessage.md#stop_type)
- [timestamp](WebSocketFullActivateMessage.md#timestamp)
- [type](WebSocketFullActivateMessage.md#type)
- [user_id](WebSocketFullActivateMessage.md#user_id)

## Properties

### funds

• **funds**: `string`

#### Defined in

[client/WebSocketClient.ts:263](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L263)

---

### order_id

• **order_id**: `string`

#### Defined in

[client/WebSocketClient.ts:264](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L264)

---

### private

• **private**: `boolean`

#### Defined in

[client/WebSocketClient.ts:265](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L265)

---

### product_id

• **product_id**: `string`

#### Defined in

[client/WebSocketClient.ts:266](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L266)

---

### profile_id

• `Optional` **profile_id**: `string`

#### Inherited from

WebSocketUserMessage.profile_id

#### Defined in

[client/WebSocketClient.ts:276](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L276)

---

### side

• **side**: `OrderSide`

#### Defined in

[client/WebSocketClient.ts:267](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L267)

---

### size

• **size**: `string`

#### Defined in

[client/WebSocketClient.ts:268](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L268)

---

### stop_price

• **stop_price**: `string`

#### Defined in

[client/WebSocketClient.ts:269](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L269)

---

### stop_type

• **stop_type**: `string`

#### Defined in

[client/WebSocketClient.ts:270](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L270)

---

### timestamp

• **timestamp**: `string`

#### Defined in

[client/WebSocketClient.ts:271](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L271)

---

### type

• **type**: [`FULL_ACTIVATE`](../enums/WebSocketResponseType.md#full_activate)

#### Defined in

[client/WebSocketClient.ts:272](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L272)

---

### user_id

• `Optional` **user_id**: `string`

#### Inherited from

WebSocketUserMessage.user_id

#### Defined in

[client/WebSocketClient.ts:277](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/client/WebSocketClient.ts#L277)
