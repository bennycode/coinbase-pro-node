[coinbase-pro-node](../README.md) / [Exports](../modules.md) / CoinbasePro

# Class: CoinbasePro

## Table of contents

### Constructors

- [constructor](CoinbasePro.md#constructor)

### Properties

- [rest](CoinbasePro.md#rest)
- [url](CoinbasePro.md#url)
- [ws](CoinbasePro.md#ws)
- [SETUP](CoinbasePro.md#setup)

## Constructors

### constructor

• **new CoinbasePro**(`auth?`)

#### Parameters

| Name   | Type                                                         |
| :----- | :----------------------------------------------------------- |
| `auth` | [`ClientAuthentication`](../modules.md#clientauthentication) |

#### Defined in

[CoinbasePro.ts:54](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/CoinbasePro.ts#L54)

## Properties

### rest

• `Readonly` **rest**: [`RESTClient`](RESTClient.md)

#### Defined in

[CoinbasePro.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/CoinbasePro.ts#L34)

---

### url

• `Readonly` **url**: [`ClientConnection`](../interfaces/ClientConnection.md)

#### Defined in

[CoinbasePro.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/CoinbasePro.ts#L35)

---

### ws

• `Readonly` **ws**: [`WebSocketClient`](WebSocketClient.md)

#### Defined in

[CoinbasePro.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/CoinbasePro.ts#L36)

---

### SETUP

▪ `Static` `Readonly` **SETUP**: `Object`

#### Type declaration

| Name         | Type                                                    |
| :----------- | :------------------------------------------------------ |
| `PRODUCTION` | [`ClientConnection`](../interfaces/ClientConnection.md) |
| `SANDBOX`    | [`ClientConnection`](../interfaces/ClientConnection.md) |

#### Defined in

[CoinbasePro.ts:38](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/CoinbasePro.ts#L38)
