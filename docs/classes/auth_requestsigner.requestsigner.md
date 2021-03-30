[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [auth/RequestSigner](../modules/auth_requestsigner.md) / RequestSigner

# Class: RequestSigner

[auth/RequestSigner](../modules/auth_requestsigner.md).RequestSigner

## Table of contents

### Constructors

- [constructor](auth_requestsigner.requestsigner.md#constructor)

### Methods

- [signRequest](auth_requestsigner.requestsigner.md#signrequest)

## Constructors

### constructor

\+ **new RequestSigner**(): [*RequestSigner*](auth_requestsigner.requestsigner.md)

**Returns:** [*RequestSigner*](auth_requestsigner.requestsigner.md)

## Methods

### signRequest

▸ `Static`**signRequest**(`auth`: [*ClientAuthentication*](../modules/coinbasepro.md#clientauthentication), `setup`: [*RequestSetup*](../interfaces/auth_requestsigner.requestsetup.md), `clockSkew`: *number*): [*SignedRequest*](../interfaces/auth_requestsigner.signedrequest.md)

#### Parameters:

Name | Type |
:------ | :------ |
`auth` | [*ClientAuthentication*](../modules/coinbasepro.md#clientauthentication) |
`setup` | [*RequestSetup*](../interfaces/auth_requestsigner.requestsetup.md) |
`clockSkew` | *number* |

**Returns:** [*SignedRequest*](../interfaces/auth_requestsigner.signedrequest.md)

Defined in: [auth/RequestSigner.ts:20](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/auth/RequestSigner.ts#L20)
