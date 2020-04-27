[coinbase-pro-node](README.md) › [Globals](globals.md)

# coinbase-pro-node

# Coinbase Pro API

![Language Details](https://img.shields.io/github/languages/top/bennyn/coinbase-pro-node) ![Code Coverage](https://img.shields.io/codecov/c/github/bennyn/coinbase-pro-node/master) ![License](https://img.shields.io/npm/l/coinbase-pro-node.svg) ![Package Version](https://img.shields.io/npm/v/coinbase-pro-node.svg) ![Dependency Updates](https://img.shields.io/david/bennyn/coinbase-pro-node.svg)

[Coinbase Pro][1] API for Node.js, written in TypeScript and covered by tests.

## Motivation

This project was created to continue an active **Coinbase Pro API** after Coinbase deprecated the official Node.js library on [January, 16 2020](https://github.com/coinbase/coinbase-node/issues/140#issuecomment-574990136). The official predecessor was also deprecated on [July, 19th 2016](https://github.com/coinbase/coinbase-exchange-node/commit/b8347efdb4e2589367c1395b646d283c9c391681).

## Features

- **Typed.** Source code is 100% TypeScript. No need to install external typings.
- **Tested.** Code coverage is 100%. No surprises when using "coinbase-pro-node".
- **Convenient.** Request throttling is built-in. Don't worry about rate limiting.
- **Comfortable.** More than an API client. You will get extras like [candle watching](https://github.com/bennyn/coinbase-pro-node/blob/master/src/demo/rest-watch-candles.ts).
- **Maintained.** Automated security updates. No threats from outdated dependencies.
- **Documented.** Get started with [demo scripts][3] and [generated documentation][4].
- **Modern.** HTTP client with Promise API. Don't lose yourself in callback hell.
- **Robust.** WebSocket reconnection is built-in. No problems if your Wi-Fi is gone.

## Installation

**npm**

```bash
npm install coinbase-pro-node
```

**Yarn**

```bash
yarn add coinbase-pro-node
```

## Setup

**JavaScript**

```javascript
const {CoinbasePro} = require('coinbase-pro-node');
const client = new CoinbasePro();
```

**TypeScript**

```typescript
import {CoinbasePro} from 'coinbase-pro-node';
const client = new CoinbasePro();
```

## Usage

The [demo section][3] provides many examples on how to use "coinbase-pro-node". There is also an automatically generated [API documentation][4]. For a quick start, here is a simple example for a REST request:

**REST Example**

```typescript
import {CoinbasePro} from 'coinbase-pro-node';

// API Keys can be generated here:
// https://pro.coinbase.com/profile/api
// https://public.sandbox.pro.coinbase.com/profile/api
const auth = {
  apiKey: '',
  apiSecret: '',
  passphrase: '',
  // The Sandbox is for testing only and offers a subset of the products/assets:
  // https://docs.pro.coinbase.com/#sandbox
  useSandbox: true,
};

const client = new CoinbasePro(auth);

client.rest.account.listAccounts().then(accounts => {
  const message = `You can trade "${accounts.length}" different pairs.`;
  console.log(message);
});
```

**WebSocket Examples**

If you want to listen to WebSocket messages, have a look at these demo scripts:

- [Subscribe to "ticker" channel (real-time price updates)](https://github.com/bennyn/coinbase-pro-node/blob/master/src/demo/websocket-ticker.ts)
- [Subscribe to authenticated "user" channel](https://github.com/bennyn/coinbase-pro-node/blob/master/src/demo/websocket-user.ts)

**Real World Examples**

You can checkout [GitHub's dependency graph][6] to see who is using "coinbase-pro-node".

## Resources

- [Coinbase Pro API Reference][2]
- [coinbase-pro-node API docs][4]
- [coinbase-pro-node npm page][5]
- [coinbase-pro-node users][6]

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/bennyn/coinbase-pro-node/issues).

The following commits will help you getting started quickly with the code base:

- [Add REST API endpoint](https://github.com/bennyn/coinbase-pro-node/commit/9920c2f4343985c349b68e2a47d7fe2c42e23e34)
- [Add REST API endpoint (with fixtures)](https://github.com/bennyn/coinbase-pro-node/commit/8a150fecb7d32b7b7cd39a8109985f665aaee26e)

## Maintainers

[![Benny Neugebauer on Stack Exchange][stack_exchange_bennyn_badge]][stack_exchange_bennyn_url]

## License

This project is [MIT](./LICENSE) licensed.

## Show your support

Give a ⭐️ if this project helped you!

[1]: https://pro.coinbase.com/
[2]: https://docs.pro.coinbase.com/
[3]: https://github.com/bennyn/coinbase-pro-node/tree/master/src/demo
[4]: https://benny.work/coinbase-pro-node
[5]: https://www.npmjs.com/package/coinbase-pro-node
[6]: https://github.com/bennyn/coinbase-pro-node/network/dependents
[stack_exchange_bennyn_badge]: https://stackexchange.com/users/flair/203782.png?theme=default
[stack_exchange_bennyn_url]: https://stackexchange.com/users/203782/benny-neugebauer?tab=accounts
