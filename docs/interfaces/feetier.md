[coinbase-pro-node](../README.md) / [Exports](../modules.md) / FeeTier

# Interface: FeeTier

Your fee tier is based upon total USD trading volume over the trailing 30 day period.

**`see`** https://help.coinbase.com/en/pro/trading-and-funding/trading-rules-and-fees/fees.html

## Table of contents

### Properties

- [maker_fee_rate](FeeTier.md#maker_fee_rate)
- [taker_fee_rate](FeeTier.md#taker_fee_rate)
- [usd_volume](FeeTier.md#usd_volume)

## Properties

### maker_fee_rate

• **maker_fee_rate**: `string`

A maker fee is paid when you create ("make") liquidity on the order book, i.e. you create an order which is not matched immediately.

#### Defined in

[fee/FeeAPI.ts:10](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/fee/FeeAPI.ts#L10)

---

### taker_fee_rate

• **taker_fee_rate**: `string`

A taker fee is paid when you remove ("take") liquidity from the order book, i.e. you create an order which matches an existing order (this includes all market orders).

#### Defined in

[fee/FeeAPI.ts:12](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/fee/FeeAPI.ts#L12)

---

### usd_volume

• **usd_volume**: `null` \| `string`

Your 30-day trailing volume which impacts your fee rates.

#### Defined in

[fee/FeeAPI.ts:14](https://github.com/bennycode/coinbase-pro-node/blob/208278f/src/fee/FeeAPI.ts#L14)
