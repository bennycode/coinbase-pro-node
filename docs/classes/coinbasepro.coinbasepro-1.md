[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [CoinbasePro](../modules/coinbasepro.md) / CoinbasePro

# Class: CoinbasePro

[CoinbasePro](../modules/coinbasepro.md).CoinbasePro

## Hierarchy

- **CoinbasePro**

## Table of contents

### Constructors

- [constructor](coinbasepro.coinbasepro-1.md#constructor)

### Properties

- [rest](coinbasepro.coinbasepro-1.md#rest)
- [url](coinbasepro.coinbasepro-1.md#url)
- [ws](coinbasepro.coinbasepro-1.md#ws)
- [SETUP](coinbasepro.coinbasepro-1.md#setup)

## Constructors

### constructor

\+ **new CoinbasePro**(`auth?`: [_ClientAuthentication_](../modules/coinbasepro.md#clientauthentication)): [_CoinbasePro_](coinbasepro.coinbasepro-1.md)

#### Parameters:

| Name   | Type                                                                     | Default value |
| ------ | ------------------------------------------------------------------------ | ------------- |
| `auth` | [_ClientAuthentication_](../modules/coinbasepro.md#clientauthentication) | ...           |

**Returns:** [_CoinbasePro_](coinbasepro.coinbasepro-1.md)

Defined in: [CoinbasePro.ts:52](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/CoinbasePro.ts#L52)

## Properties

### rest

• `Readonly` **rest**: [_RESTClient_](client_restclient.restclient.md)

Defined in: [CoinbasePro.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/CoinbasePro.ts#L34)

---

### url

• `Readonly` **url**: [_ClientConnection_](../interfaces/coinbasepro.clientconnection.md)

Defined in: [CoinbasePro.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/CoinbasePro.ts#L35)

---

### ws

• `Readonly` **ws**: [_WebSocketClient_](client_websocketclient.websocketclient.md)

Defined in: [CoinbasePro.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/CoinbasePro.ts#L36)

---

### SETUP

▪ `Readonly` `Static` **SETUP**: { `PRODUCTION`: [_ClientConnection_](../interfaces/coinbasepro.clientconnection.md) ; `SANDBOX`: [_ClientConnection_](../interfaces/coinbasepro.clientconnection.md) }

#### Type declaration:

| Name         | Type                                                                |
| ------------ | ------------------------------------------------------------------- |
| `PRODUCTION` | [_ClientConnection_](../interfaces/coinbasepro.clientconnection.md) |
| `SANDBOX`    | [_ClientConnection_](../interfaces/coinbasepro.clientconnection.md) |

Defined in: [CoinbasePro.ts:38](https://github.com/bennycode/coinbase-pro-node/blob/a4b1aac/src/CoinbasePro.ts#L38)
