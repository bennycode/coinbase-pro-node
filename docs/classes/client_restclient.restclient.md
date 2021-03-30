[coinbase-pro-node](../README.md) / [Exports](../modules.md) / [client/RESTClient](../modules/client_restclient.md) / RESTClient

# Class: RESTClient

[client/RESTClient](../modules/client_restclient.md).RESTClient

## Hierarchy

* *EventEmitter*

  ↳ **RESTClient**

## Table of contents

### Constructors

- [constructor](client_restclient.restclient.md#constructor)

### Properties

- [account](client_restclient.restclient.md#account)
- [currency](client_restclient.restclient.md#currency)
- [fee](client_restclient.restclient.md#fee)
- [fill](client_restclient.restclient.md#fill)
- [order](client_restclient.restclient.md#order)
- [product](client_restclient.restclient.md#product)
- [profile](client_restclient.restclient.md#profile)
- [time](client_restclient.restclient.md#time)
- [transfer](client_restclient.restclient.md#transfer)
- [user](client_restclient.restclient.md#user)
- [withdraw](client_restclient.restclient.md#withdraw)

### Accessors

- [defaults](client_restclient.restclient.md#defaults)
- [interceptors](client_restclient.restclient.md#interceptors)

### Methods

- [on](client_restclient.restclient.md#on)
- [stringifyPayload](client_restclient.restclient.md#stringifypayload)

## Constructors

### constructor

\+ **new RESTClient**(`baseURL`: *string*, `signRequest`: (`setup`: [*RequestSetup*](../interfaces/auth_requestsigner.requestsetup.md)) => *Promise*<[*SignedRequest*](../interfaces/auth_requestsigner.signedrequest.md)\>): [*RESTClient*](client_restclient.restclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`baseURL` | *string* |
`signRequest` | (`setup`: [*RequestSetup*](../interfaces/auth_requestsigner.requestsetup.md)) => *Promise*<[*SignedRequest*](../interfaces/auth_requestsigner.signedrequest.md)\> |

**Returns:** [*RESTClient*](client_restclient.restclient.md)

Defined in: [client/RESTClient.ts:53](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L53)

## Properties

### account

• `Readonly` **account**: [*AccountAPI*](account_accountapi.accountapi.md)

Defined in: [client/RESTClient.ts:40](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L40)

___

### currency

• `Readonly` **currency**: [*CurrencyAPI*](currency_currencyapi.currencyapi.md)

Defined in: [client/RESTClient.ts:41](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L41)

___

### fee

• `Readonly` **fee**: [*FeeAPI*](fee_feeapi.feeapi.md)

Defined in: [client/RESTClient.ts:42](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L42)

___

### fill

• `Readonly` **fill**: [*FillAPI*](fill_fillapi.fillapi.md)

Defined in: [client/RESTClient.ts:43](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L43)

___

### order

• `Readonly` **order**: [*OrderAPI*](order_orderapi.orderapi.md)

Defined in: [client/RESTClient.ts:44](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L44)

___

### product

• `Readonly` **product**: [*ProductAPI*](product_productapi.productapi.md)

Defined in: [client/RESTClient.ts:45](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L45)

___

### profile

• `Readonly` **profile**: [*ProfileAPI*](profile_profileapi.profileapi.md)

Defined in: [client/RESTClient.ts:46](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L46)

___

### time

• `Readonly` **time**: [*TimeAPI*](time_timeapi.timeapi.md)

Defined in: [client/RESTClient.ts:47](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L47)

___

### transfer

• `Readonly` **transfer**: [*TransferAPI*](transfer_transferapi.transferapi.md)

Defined in: [client/RESTClient.ts:48](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L48)

___

### user

• `Readonly` **user**: [*UserAPI*](user_userapi.userapi.md)

Defined in: [client/RESTClient.ts:49](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L49)

___

### withdraw

• `Readonly` **withdraw**: [*WithdrawAPI*](withdraw_withdrawapi.withdrawapi.md)

Defined in: [client/RESTClient.ts:50](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L50)

## Accessors

### defaults

• get **defaults**(): AxiosRequestConfig

**Returns:** AxiosRequestConfig

Defined in: [client/RESTClient.ts:29](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L29)

___

### interceptors

• get **interceptors**(): *object*

**Returns:** *object*

Name | Type |
:------ | :------ |
`request` | *AxiosInterceptorManager*<AxiosRequestConfig\> |
`response` | *AxiosInterceptorManager*<AxiosResponse<any\>\> |

Defined in: [client/RESTClient.ts:33](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L33)

## Methods

### on

▸ **on**(`event`: [*NEW\_CANDLE*](../enums/product_productapi.productevent.md#new_candle), `listener`: (`productId`: *string*, `granularity`: [*CandleGranularity*](../enums/product_productapi.candlegranularity.md), `candle`: [*Candle*](../interfaces/product_productapi.candle.md)) => *void*): [*RESTClient*](client_restclient.restclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*NEW\_CANDLE*](../enums/product_productapi.productevent.md#new_candle) |
`listener` | (`productId`: *string*, `granularity`: [*CandleGranularity*](../enums/product_productapi.candlegranularity.md), `candle`: [*Candle*](../interfaces/product_productapi.candle.md)) => *void* |

**Returns:** [*RESTClient*](client_restclient.restclient.md)

Defined in: [client/RESTClient.ts:21](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L21)

___

### stringifyPayload

▸ `Static`**stringifyPayload**(`config`: AxiosRequestConfig): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`config` | AxiosRequestConfig |

**Returns:** *string*

Defined in: [client/RESTClient.ts:119](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L119)
