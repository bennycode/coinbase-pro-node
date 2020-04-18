[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["fee/FeeAPI"](../modules/_fee_feeapi_.md) › [Fee](_fee_feeapi_.fee.md)

# Interface: Fee

## Hierarchy

- **Fee**

## Index

### Properties

- [maker_fee_rate](_fee_feeapi_.fee.md#maker_fee_rate)
- [taker_fee_rate](_fee_feeapi_.fee.md#taker_fee_rate)
- [usd_volume](_fee_feeapi_.fee.md#usd_volume)

## Properties

### maker_fee_rate

• **maker_fee_rate**: _string_

_Defined in [src/fee/FeeAPI.ts:5](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/fee/FeeAPI.ts#L5)_

A maker fee is paid when you create ("make") liquidity on the order book, i.e. you create an order which is not matched immediately.

---

### taker_fee_rate

• **taker_fee_rate**: _string_

_Defined in [src/fee/FeeAPI.ts:7](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/fee/FeeAPI.ts#L7)_

A taker fee is paid when you remove ("take") liquidity from the order book, i.e. you create an order which matches an existing order (this includes all market orders).

---

### usd_volume

• **usd_volume**: _string | null_

_Defined in [src/fee/FeeAPI.ts:9](https://github.com/bennyn/coinbase-pro-node/blob/c83e588/src/fee/FeeAPI.ts#L9)_

Your 30-day trailing volume which impacts your fee rates.
