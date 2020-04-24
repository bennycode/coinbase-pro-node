[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["CoinbasePro"](../modules/_coinbasepro_.md) › [CoinbasePro](_coinbasepro_.coinbasepro.md)

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

- [SETUP](_coinbasepro_.coinbasepro.md#static-setup)

## Constructors

### constructor

\+ **new CoinbasePro**(`auth`: [ClientAuthentication](../interfaces/_coinbasepro_.clientauthentication.md)): _[CoinbasePro](_coinbasepro_.coinbasepro.md)_

_Defined in [src/CoinbasePro.ts:33](https://github.com/bennyn/coinbase-pro-node/blob/98aacfd/src/CoinbasePro.ts#L33)_

**Parameters:**

| Name   | Type                                                                        | Default |
| ------ | --------------------------------------------------------------------------- | ------- |
| `auth` | [ClientAuthentication](../interfaces/_coinbasepro_.clientauthentication.md) | {       |

      apiKey: '',
      apiSecret: '',
      passphrase: '',
      useSandbox: false,
    } |

**Returns:** _[CoinbasePro](_coinbasepro_.coinbasepro.md)_

## Properties

### rest

• **rest**: _[RESTClient](_client_restclient_.restclient.md)_

_Defined in [src/CoinbasePro.ts:17](https://github.com/bennyn/coinbase-pro-node/blob/98aacfd/src/CoinbasePro.ts#L17)_

---

### url

• **url**: _[ClientConnection](../interfaces/_coinbasepro_.clientconnection.md)_

_Defined in [src/CoinbasePro.ts:18](https://github.com/bennyn/coinbase-pro-node/blob/98aacfd/src/CoinbasePro.ts#L18)_

---

### ws

• **ws**: _[WebSocketClient](_client_websocketclient_.websocketclient.md)_

_Defined in [src/CoinbasePro.ts:19](https://github.com/bennyn/coinbase-pro-node/blob/98aacfd/src/CoinbasePro.ts#L19)_

## Object literals

### `Static` SETUP

### ▪ **SETUP**: _object_

_Defined in [src/CoinbasePro.ts:21](https://github.com/bennyn/coinbase-pro-node/blob/98aacfd/src/CoinbasePro.ts#L21)_

▪ **PRODUCTION**: _object_

_Defined in [src/CoinbasePro.ts:25](https://github.com/bennyn/coinbase-pro-node/blob/98aacfd/src/CoinbasePro.ts#L25)_

- **REST**: _string_ = "https://api.pro.coinbase.com"

- **WebSocket**: _string_ = "wss://ws-feed.pro.coinbase.com"

▪ **SANDBOX**: _object_

_Defined in [src/CoinbasePro.ts:29](https://github.com/bennyn/coinbase-pro-node/blob/98aacfd/src/CoinbasePro.ts#L29)_

- **REST**: _string_ = "https://api-public.sandbox.pro.coinbase.com"

- **WebSocket**: _string_ = "wss://ws-feed-public.sandbox.pro.coinbase.com"
