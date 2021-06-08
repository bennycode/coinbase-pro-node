[coinbase-pro-node](../README.md) / [Exports](../modules.md) / CoinbasePro

# Class: CoinbasePro

## Table of contents

### Constructors

- [constructor](coinbasepro.md#constructor)

### Properties

- [rest](coinbasepro.md#rest)
- [url](coinbasepro.md#url)
- [ws](coinbasepro.md#ws)
- [SETUP](coinbasepro.md#setup)

## Constructors

### constructor

• **new CoinbasePro**(`auth?`)

#### Parameters

| Name   | Type                                                       |
| :----- | :--------------------------------------------------------- |
| `auth` | [ClientAuthentication](../modules.md#clientauthentication) |

#### Defined in

[CoinbasePro.ts:52](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/CoinbasePro.ts#L52)

## Properties

### rest

• `Readonly` **rest**: [RESTClient](restclient.md)

#### Defined in

[CoinbasePro.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/CoinbasePro.ts#L34)

---

### url

• `Readonly` **url**: [ClientConnection](../interfaces/clientconnection.md)

#### Defined in

[CoinbasePro.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/CoinbasePro.ts#L35)

---

### ws

• `Readonly` **ws**: [WebSocketClient](websocketclient.md)

#### Defined in

[CoinbasePro.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/CoinbasePro.ts#L36)

---

### SETUP

▪ `Static` `Readonly` **SETUP**: `Object`

#### Type declaration

| Name         | Type                                                  |
| :----------- | :---------------------------------------------------- |
| `PRODUCTION` | [ClientConnection](../interfaces/clientconnection.md) |
| `SANDBOX`    | [ClientConnection](../interfaces/clientconnection.md) |

#### Defined in

[CoinbasePro.ts:38](https://github.com/bennycode/coinbase-pro-node/blob/4fcd15c/src/CoinbasePro.ts#L38)
