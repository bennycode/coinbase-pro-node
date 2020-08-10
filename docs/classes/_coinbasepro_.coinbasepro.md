[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["CoinbasePro"](../modules/_coinbasepro_.md) › [CoinbasePro](_coinbasepro_.coinbasepro.md)

# Class: CoinbasePro

## Hierarchy

- **CoinbasePro**

## Index

### Constructors

- [constructor](_coinbasepro_.coinbasepro.md#constructor)

### Properties

- [rest](_coinbasepro_.coinbasepro.md#readonly-rest)
- [url](_coinbasepro_.coinbasepro.md#readonly-url)
- [ws](_coinbasepro_.coinbasepro.md#readonly-ws)

### Object literals

- [SETUP](_coinbasepro_.coinbasepro.md#static-readonly-setup)

## Constructors

### constructor

\+ **new CoinbasePro**(`auth`: [ClientAuthentication](../interfaces/_coinbasepro_.clientauthentication.md)): _[CoinbasePro](_coinbasepro_.coinbasepro.md)_

_Defined in [src/CoinbasePro.ts:35](https://github.com/bennyn/coinbase-pro-node/blob/d0dceee/src/CoinbasePro.ts#L35)_

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

### `Readonly` rest

• **rest**: _[RESTClient](_client_restclient_.restclient.md)_

_Defined in [src/CoinbasePro.ts:19](https://github.com/bennyn/coinbase-pro-node/blob/d0dceee/src/CoinbasePro.ts#L19)_

---

### `Readonly` url

• **url**: _[ClientConnection](../interfaces/_coinbasepro_.clientconnection.md)_

_Defined in [src/CoinbasePro.ts:20](https://github.com/bennyn/coinbase-pro-node/blob/d0dceee/src/CoinbasePro.ts#L20)_

---

### `Readonly` ws

• **ws**: _[WebSocketClient](_client_websocketclient_.websocketclient.md)_

_Defined in [src/CoinbasePro.ts:21](https://github.com/bennyn/coinbase-pro-node/blob/d0dceee/src/CoinbasePro.ts#L21)_

## Object literals

### `Static` `Readonly` SETUP

### ▪ **SETUP**: _object_

_Defined in [src/CoinbasePro.ts:23](https://github.com/bennyn/coinbase-pro-node/blob/d0dceee/src/CoinbasePro.ts#L23)_

▪ **PRODUCTION**: _object_

_Defined in [src/CoinbasePro.ts:27](https://github.com/bennyn/coinbase-pro-node/blob/d0dceee/src/CoinbasePro.ts#L27)_

- **REST**: _string_ = "https://api.pro.coinbase.com"

- **WebSocket**: _string_ = "wss://ws-feed.pro.coinbase.com"

▪ **SANDBOX**: _object_

_Defined in [src/CoinbasePro.ts:31](https://github.com/bennyn/coinbase-pro-node/blob/d0dceee/src/CoinbasePro.ts#L31)_

- **REST**: _string_ = "https://api-public.sandbox.pro.coinbase.com"

- **WebSocket**: _string_ = "wss://ws-feed-public.sandbox.pro.coinbase.com"
