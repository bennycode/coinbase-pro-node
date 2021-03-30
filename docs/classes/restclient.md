[coinbase-pro-node](../README.md) / [Exports](../modules.md) / RESTClient

# Class: RESTClient

## Hierarchy

* *EventEmitter*

  ↳ **RESTClient**

## Table of contents

### Constructors

- [constructor](restclient.md#constructor)

### Properties

- [account](restclient.md#account)
- [currency](restclient.md#currency)
- [fee](restclient.md#fee)
- [fill](restclient.md#fill)
- [order](restclient.md#order)
- [product](restclient.md#product)
- [profile](restclient.md#profile)
- [time](restclient.md#time)
- [transfer](restclient.md#transfer)
- [user](restclient.md#user)
- [withdraw](restclient.md#withdraw)

### Accessors

- [defaults](restclient.md#defaults)
- [interceptors](restclient.md#interceptors)

### Methods

- [on](restclient.md#on)
- [stringifyPayload](restclient.md#stringifypayload)

## Constructors

### constructor

\+ **new RESTClient**(`baseURL`: *string*, `signRequest`: (`setup`: RequestSetup) => *Promise*<SignedRequest\>): [*RESTClient*](restclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`baseURL` | *string* |
`signRequest` | (`setup`: RequestSetup) => *Promise*<SignedRequest\> |

**Returns:** [*RESTClient*](restclient.md)

Defined in: [client/RESTClient.ts:53](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L53)

## Properties

### account

• `Readonly` **account**: [*AccountAPI*](accountapi.md)

Defined in: [client/RESTClient.ts:40](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L40)

___

### currency

• `Readonly` **currency**: [*CurrencyAPI*](currencyapi.md)

Defined in: [client/RESTClient.ts:41](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L41)

___

### fee

• `Readonly` **fee**: [*FeeAPI*](feeapi.md)

Defined in: [client/RESTClient.ts:42](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L42)

___

### fill

• `Readonly` **fill**: [*FillAPI*](fillapi.md)

Defined in: [client/RESTClient.ts:43](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L43)

___

### order

• `Readonly` **order**: [*OrderAPI*](orderapi.md)

Defined in: [client/RESTClient.ts:44](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L44)

___

### product

• `Readonly` **product**: [*ProductAPI*](productapi.md)

Defined in: [client/RESTClient.ts:45](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L45)

___

### profile

• `Readonly` **profile**: [*ProfileAPI*](profileapi.md)

Defined in: [client/RESTClient.ts:46](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L46)

___

### time

• `Readonly` **time**: [*TimeAPI*](timeapi.md)

Defined in: [client/RESTClient.ts:47](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L47)

___

### transfer

• `Readonly` **transfer**: *TransferAPI*

Defined in: [client/RESTClient.ts:48](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L48)

___

### user

• `Readonly` **user**: [*UserAPI*](userapi.md)

Defined in: [client/RESTClient.ts:49](https://github.com/bennycode/coinbase-pro-node/blob/c3d8f7c/src/client/RESTClient.ts#L49)

___

### withdraw

• `Readonly` **withdraw**: *WithdrawAPI*

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

▸ **on**(`event`: [*NEW\_CANDLE*](../enums/productevent.md#new_candle), `listener`: (`productId`: *string*, `granularity`: [*CandleGranularity*](../enums/candlegranularity.md), `candle`: [*Candle*](../interfaces/candle.md)) => *void*): [*RESTClient*](restclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*NEW\_CANDLE*](../enums/productevent.md#new_candle) |
`listener` | (`productId`: *string*, `granularity`: [*CandleGranularity*](../enums/candlegranularity.md), `candle`: [*Candle*](../interfaces/candle.md)) => *void* |

**Returns:** [*RESTClient*](restclient.md)

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
