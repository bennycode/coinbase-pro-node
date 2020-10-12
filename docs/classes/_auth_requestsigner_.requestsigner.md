[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["auth/RequestSigner"](../modules/_auth_requestsigner_.md) › [RequestSigner](_auth_requestsigner_.requestsigner.md)

# Class: RequestSigner

## Hierarchy

- **RequestSigner**

## Index

### Methods

- [signRequest](_auth_requestsigner_.requestsigner.md#static-signrequest)

## Methods

### `Static` signRequest

▸ **signRequest**(`auth`: [ClientAuthentication](../interfaces/_coinbasepro_.clientauthentication.md), `setup`: [RequestSetup](../interfaces/_auth_requestsigner_.requestsetup.md), `clockSkew`: number): _[SignedRequest](../interfaces/_auth_requestsigner_.signedrequest.md)_

_Defined in [src/auth/RequestSigner.ts:19](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/auth/RequestSigner.ts#L19)_

**Parameters:**

| Name        | Type                                                                        |
| ----------- | --------------------------------------------------------------------------- |
| `auth`      | [ClientAuthentication](../interfaces/_coinbasepro_.clientauthentication.md) |
| `setup`     | [RequestSetup](../interfaces/_auth_requestsigner_.requestsetup.md)          |
| `clockSkew` | number                                                                      |

**Returns:** _[SignedRequest](../interfaces/_auth_requestsigner_.signedrequest.md)_
