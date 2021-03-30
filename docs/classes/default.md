[coinbase-pro-node](../README.md) / [Exports](../modules.md) / default

# Class: default

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [rest](default.md#rest)
- [url](default.md#url)
- [ws](default.md#ws)
- [SETUP](default.md#setup)

## Constructors

### constructor

\+ **new default**(`auth?`: [*ClientAuthentication*](../modules.md#clientauthentication)): [*default*](default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`auth` | [*ClientAuthentication*](../modules.md#clientauthentication) |

**Returns:** [*default*](default.md)

Defined in: [CoinbasePro.ts:52](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/CoinbasePro.ts#L52)

## Properties

### rest

• `Readonly` **rest**: [*RESTClient*](restclient.md)

Defined in: [CoinbasePro.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/CoinbasePro.ts#L34)

___

### url

• `Readonly` **url**: [*ClientConnection*](../interfaces/clientconnection.md)

Defined in: [CoinbasePro.ts:35](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/CoinbasePro.ts#L35)

___

### ws

• `Readonly` **ws**: [*WebSocketClient*](websocketclient.md)

Defined in: [CoinbasePro.ts:36](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/CoinbasePro.ts#L36)

___

### SETUP

▪ `Static` `Readonly` **SETUP**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`PRODUCTION` | [*ClientConnection*](../interfaces/clientconnection.md) |
`SANDBOX` | [*ClientConnection*](../interfaces/clientconnection.md) |

Defined in: [CoinbasePro.ts:38](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/CoinbasePro.ts#L38)
