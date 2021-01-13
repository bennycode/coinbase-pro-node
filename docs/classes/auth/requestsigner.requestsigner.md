[coinbase-pro-node](../../README.md) / [Exports](../../modules.md) / [auth/RequestSigner](../../modules/auth_requestsigner.md) / RequestSigner

# Class: RequestSigner

[auth/RequestSigner](../../modules/auth_requestsigner.md).RequestSigner

## Hierarchy

- **RequestSigner**

## Table of contents

### Constructors

- [constructor](requestsigner.requestsigner.md#constructor)

### Methods

- [signRequest](requestsigner.requestsigner.md#signrequest)

## Constructors

### constructor

\+ **new RequestSigner**(): [_RequestSigner_](requestsigner.requestsigner.md)

**Returns:** [_RequestSigner_](requestsigner.requestsigner.md)

## Methods

### signRequest

▸ `Static`**signRequest**(`auth`: [_ClientAuthentication_](../../modules/coinbasepro.md#clientauthentication), `setup`: [_RequestSetup_](../../interfaces/auth/requestsigner.requestsetup.md), `clockSkew`: _number_): [_SignedRequest_](../../interfaces/auth/requestsigner.signedrequest.md)

#### Parameters:

| Name        | Type                                                                        |
| ----------- | --------------------------------------------------------------------------- |
| `auth`      | [_ClientAuthentication_](../../modules/coinbasepro.md#clientauthentication) |
| `setup`     | [_RequestSetup_](../../interfaces/auth/requestsigner.requestsetup.md)       |
| `clockSkew` | _number_                                                                    |

**Returns:** [_SignedRequest_](../../interfaces/auth/requestsigner.signedrequest.md)

Defined in: [auth/RequestSigner.ts:20](https://github.com/bennycode/coinbase-pro-node/blob/7d07dce/src/auth/RequestSigner.ts#L20)
