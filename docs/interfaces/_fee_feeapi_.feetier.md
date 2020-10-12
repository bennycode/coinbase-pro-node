[coinbase-pro-node](../README.md) › [Globals](../globals.md) › ["fee/FeeAPI"](../modules/_fee_feeapi_.md) › [FeeTier](_fee_feeapi_.feetier.md)

# Interface: FeeTier

Your fee tier is based upon total USD trading volume over the trailing 30 day period.

**`see`** https://help.coinbase.com/en/pro/trading-and-funding/trading-rules-and-fees/fees.html

## Hierarchy

- **FeeTier**

## Index

### Properties

- [maker_fee_rate](_fee_feeapi_.feetier.md#maker_fee_rate)
- [taker_fee_rate](_fee_feeapi_.feetier.md#taker_fee_rate)
- [usd_volume](_fee_feeapi_.feetier.md#usd_volume)

## Properties

### maker_fee_rate

• **maker_fee_rate**: _string_

_Defined in [src/fee/FeeAPI.ts:10](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fee/FeeAPI.ts#L10)_

A maker fee is paid when you create ("make") liquidity on the order book, i.e. you create an order which is not matched immediately.

---

### taker_fee_rate

• **taker_fee_rate**: _string_

_Defined in [src/fee/FeeAPI.ts:12](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fee/FeeAPI.ts#L12)_

A taker fee is paid when you remove ("take") liquidity from the order book, i.e. you create an order which matches an existing order (this includes all market orders).

---

### usd_volume

• **usd_volume**: _string | null_

_Defined in [src/fee/FeeAPI.ts:14](https://github.com/bennyn/coinbase-pro-node/blob/ea7299d/src/fee/FeeAPI.ts#L14)_

Your 30-day trailing volume which impacts your fee rates.
