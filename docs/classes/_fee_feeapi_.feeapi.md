[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["fee/FeeAPI"](../modules/_fee_feeapi_.md) › [FeeAPI](_fee_feeapi_.feeapi.md)

# Class: FeeAPI

## Hierarchy

- **FeeAPI**

## Index

### Constructors

- [constructor](_fee_feeapi_.feeapi.md#constructor)

### Methods

- [getCurrentFees](_fee_feeapi_.feeapi.md#getcurrentfees)

### Object literals

- [URL](_fee_feeapi_.feeapi.md#static-url)

## Constructors

### constructor

\+ **new FeeAPI**(`apiClient`: AxiosInstance): _[FeeAPI](_fee_feeapi_.feeapi.md)_

_Defined in [src/fee/FeeAPI.ts:15](https://github.com/bennyn/coinbase-pro-node/blob/0085625/src/fee/FeeAPI.ts#L15)_

**Parameters:**

| Name        | Type          |
| ----------- | ------------- |
| `apiClient` | AxiosInstance |

**Returns:** _[FeeAPI](_fee_feeapi_.feeapi.md)_

## Methods

### getCurrentFees

▸ **getCurrentFees**(): _Promise‹[Fee](../interfaces/_fee_feeapi_.fee.md)›_

_Defined in [src/fee/FeeAPI.ts:26](https://github.com/bennyn/coinbase-pro-node/blob/0085625/src/fee/FeeAPI.ts#L26)_

Get your current maker & taker fee rates, as well as your 30-day trailing volume. Quoted rates are subject to change.

**`see`** https://docs.pro.coinbase.com/#fees

**`see`** https://help.coinbase.com/en/pro/trading-and-funding/trading-rules-and-fees/fees.html

**Returns:** _Promise‹[Fee](../interfaces/_fee_feeapi_.fee.md)›_

## Object literals

### `Static` URL

### ▪ **URL**: _object_

_Defined in [src/fee/FeeAPI.ts:13](https://github.com/bennyn/coinbase-pro-node/blob/0085625/src/fee/FeeAPI.ts#L13)_

### FEES

• **FEES**: _string_ = `/fees`

_Defined in [src/fee/FeeAPI.ts:14](https://github.com/bennyn/coinbase-pro-node/blob/0085625/src/fee/FeeAPI.ts#L14)_
