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

\+ **new CoinbasePro**(`auth?`: [_ClientAuthentication_](../modules.md#clientauthentication)): [_default_](default.md)

#### Parameters:

| Name   | Type                                                         |
| :----- | :----------------------------------------------------------- |
| `auth` | [_ClientAuthentication_](../modules.md#clientauthentication) |

**Returns:** [_default_](default.md)

Defined in: [CoinbasePro.ts:52](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/CoinbasePro.ts#L52)

## Properties

### rest

• `Readonly` **rest**: [_RESTClient_](restclient.md)

Defined in: [CoinbasePro.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/CoinbasePro.ts#L34)

---

### url

• `Readonly` **url**: [_ClientConnection_](../interfaces/clientconnection.md)

Defined in: [CoinbasePro.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/CoinbasePro.ts#L35)

---

### ws

• `Readonly` **ws**: [_WebSocketClient_](websocketclient.md)

Defined in: [CoinbasePro.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/CoinbasePro.ts#L36)

---

### SETUP

▪ `Static` `Readonly` **SETUP**: _object_

#### Type declaration:

| Name         | Type                                                    |
| :----------- | :------------------------------------------------------ |
| `PRODUCTION` | [_ClientConnection_](../interfaces/clientconnection.md) |
| `SANDBOX`    | [_ClientConnection_](../interfaces/clientconnection.md) |

Defined in: [CoinbasePro.ts:38](https://github.com/bennycode/coinbase-pro-node/blob/baa73d4/src/CoinbasePro.ts#L38)
