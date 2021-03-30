[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [CoinbasePro](../modules/coinbasepro.md) / CoinbasePro

# Class: CoinbasePro

[CoinbasePro](../modules/coinbasepro.md).CoinbasePro

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

\+ **new CoinbasePro**(`auth?`: [*ClientAuthentication*](../modules/coinbasepro.md#clientauthentication)): [*CoinbasePro*](coinbasepro.coinbasepro-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`auth` | [*ClientAuthentication*](../modules/coinbasepro.md#clientauthentication) |

**Returns:** [*CoinbasePro*](coinbasepro.coinbasepro-1.md)

Defined in: [CoinbasePro.ts:52](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/CoinbasePro.ts#L52)

## Properties

### rest

• `Readonly` **rest**: [*RESTClient*](client_restclient.restclient.md)

Defined in: [CoinbasePro.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/CoinbasePro.ts#L34)

___

### url

• `Readonly` **url**: [*ClientConnection*](../interfaces/coinbasepro.clientconnection.md)

Defined in: [CoinbasePro.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/CoinbasePro.ts#L35)

___

### ws

• `Readonly` **ws**: [*WebSocketClient*](client_websocketclient.websocketclient.md)

Defined in: [CoinbasePro.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/CoinbasePro.ts#L36)

___

### SETUP

▪ `Static` `Readonly` **SETUP**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`PRODUCTION` | [*ClientConnection*](../interfaces/coinbasepro.clientconnection.md) |
`SANDBOX` | [*ClientConnection*](../interfaces/coinbasepro.clientconnection.md) |

Defined in: [CoinbasePro.ts:38](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/CoinbasePro.ts#L38)
