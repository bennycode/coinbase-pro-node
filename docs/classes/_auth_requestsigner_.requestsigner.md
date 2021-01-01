**[coinbase-pro-node](../README.md)**

> [Globals](../globals.md) / ["auth/RequestSigner"](../modules/_auth_requestsigner_.md) / RequestSigner

# Class: RequestSigner

## Hierarchy

- **RequestSigner**

## Index

### Methods

- [signRequest](_auth_requestsigner_.requestsigner.md#signrequest)

## Methods

### signRequest

▸ `Static`**signRequest**(`auth`: [ClientAuthentication](../interfaces/_coinbasepro_.clientauthentication.md), `setup`: [RequestSetup](../interfaces/_auth_requestsigner_.requestsetup.md), `clockSkew`: number): [SignedRequest](../interfaces/_auth_requestsigner_.signedrequest.md)

_Defined in [src/auth/RequestSigner.ts:20](https://github.com/bennycode/coinbase-pro-node/blob/e6678df/src/auth/RequestSigner.ts#L20)_

#### Parameters:

| Name        | Type                                                                        |
| ----------- | --------------------------------------------------------------------------- |
| `auth`      | [ClientAuthentication](../interfaces/_coinbasepro_.clientauthentication.md) |
| `setup`     | [RequestSetup](../interfaces/_auth_requestsigner_.requestsetup.md)          |
| `clockSkew` | number                                                                      |

**Returns:** [SignedRequest](../interfaces/_auth_requestsigner_.signedrequest.md)
