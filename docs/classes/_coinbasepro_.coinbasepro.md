**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["CoinbasePro"](../modules/_coinbasepro_.md) / CoinbasePro

# Class: CoinbasePro

## Hierarchy

- **CoinbasePro**

## Index

### Constructors

- [constructor](_coinbasepro_.coinbasepro.md#constructor)

### Properties

- [rest](_coinbasepro_.coinbasepro.md#rest)
- [url](_coinbasepro_.coinbasepro.md#url)
- [ws](_coinbasepro_.coinbasepro.md#ws)

### Object literals

- [SETUP](_coinbasepro_.coinbasepro.md#setup)

## Constructors

### constructor

\+ **new CoinbasePro**(`auth?`: [ClientAuthentication](../interfaces/_coinbasepro_.clientauthentication.md)): [CoinbasePro](_coinbasepro_.coinbasepro.md)

_Defined in [src/CoinbasePro.ts:34](https://github.com/bennycode/coinbase-pro-node/blob/cb84fec/src/CoinbasePro.ts#L34)_

#### Parameters:

| Name   | Type                                                                        | Default value |
| ------ | --------------------------------------------------------------------------- | ------------- |
| `auth` | [ClientAuthentication](../interfaces/_coinbasepro_.clientauthentication.md) | {             |

      apiKey: '',
      apiSecret: '',
      passphrase: '',
      useSandbox: false,
    } |

**Returns:** [CoinbasePro](_coinbasepro_.coinbasepro.md)

## Properties

### rest

• `Readonly` **rest**: [RESTClient](_client_restclient_.restclient.md)

_Defined in [src/CoinbasePro.ts:18](https://github.com/bennycode/coinbase-pro-node/blob/cb84fec/src/CoinbasePro.ts#L18)_

---

### url

• `Readonly` **url**: [ClientConnection](../interfaces/_coinbasepro_.clientconnection.md)

_Defined in [src/CoinbasePro.ts:19](https://github.com/bennycode/coinbase-pro-node/blob/cb84fec/src/CoinbasePro.ts#L19)_

---

### ws

• `Readonly` **ws**: [WebSocketClient](_client_websocketclient_.websocketclient.md)

_Defined in [src/CoinbasePro.ts:20](https://github.com/bennycode/coinbase-pro-node/blob/cb84fec/src/CoinbasePro.ts#L20)_

## Object literals

### SETUP

▪ `Static` `Readonly` **SETUP**: object

_Defined in [src/CoinbasePro.ts:22](https://github.com/bennycode/coinbase-pro-node/blob/cb84fec/src/CoinbasePro.ts#L22)_

#### Properties:

| Name | Type | Value |
| --- | --- | --- |
| `PRODUCTION` | object | { REST: string = "https://api.pro.coinbase.com"; WebSocket: string = "wss://ws-feed.pro.coinbase.com" } |
| `SANDBOX` | object | { REST: string = "https://api-public.sandbox.pro.coinbase.com"; WebSocket: string = "wss://ws-feed-public.sandbox.pro.coinbase.com" } |
