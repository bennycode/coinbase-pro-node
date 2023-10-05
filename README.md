# Coinbase API

![Language Details](https://img.shields.io/github/languages/top/bennycode/coinbase-pro-node) ![Code Coverage](https://img.shields.io/codecov/c/github/bennycode/coinbase-pro-node/main) ![License](https://img.shields.io/npm/l/coinbase-pro-node.svg) ![Package Version](https://img.shields.io/npm/v/coinbase-pro-node.svg)

---

🌟 _Better than the original Coinbase API. [See why](#problems-with-official-coinbase-apis)._ 🌟

Community-maintained [Coinbase API][1] for Node.js & Deno, written in TypeScript and covered by tests.

## Motivation

The purpose of this [coinbase-pro-node][5] package is to maintain a recent Coinbase API for Node.js with type safety through TypeScript.

## Features

- ✅ **Typed.** Source code is 100% TypeScript. No need to install external typings.
- ✅ **Tested.** Code coverage is 100%. No surprises when using "coinbase-pro-node".
- ✅ **Convenient.** Request throttling is built-in. Don't worry about rate limiting.
- ✅ **Comfortable.** More than an API client. You will get extras like [candle watching](https://github.com/bennycode/coinbase-pro-node/blob/main/src/demo/rest-watch-candles.ts).
- ✅ **Maintained.** Automated security updates. No threats from outdated dependencies.
- ✅ **Documented.** Get started with [demo scripts][3] and [generated documentation][4].
- ✅ **Modern.** HTTP client with Promise API. Don't lose yourself in callback hell.
- ✅ **Robust.** WebSocket reconnection is built-in. No problems if your Wi-Fi is gone.
- ✅ **Reliable.** Following [semantic versioning][8]. Get notified about breaking changes.

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

### REST Example

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
  // https://docs.cloud.coinbase.com/exchange/docs#sandbox
  useSandbox: true,
};

const client = new CoinbasePro(auth);

client.rest.account.listAccounts().then(accounts => {
  const message = `You can trade "${accounts.length}" different pairs.`;
  console.log(message);
});
```

### WebSocket Example

If you want to listen to WebSocket messages, have a look at these demo scripts:

- [Subscribe to "ticker" channel (real-time price updates)](https://github.com/bennycode/coinbase-pro-node/blob/main/src/demo/websocket-ticker.ts)
- [Subscribe to authenticated "user" channel](https://github.com/bennycode/coinbase-pro-node/blob/main/src/demo/websocket-user.ts)

### Demos

All [demo scripts][3] are executable from the root directory. If you want to use specific credentials with a demo script, simply add a `.env` file to the root of this package to [modify environment variables](https://github.com/motdotla/dotenv/tree/v8.2.0#usage) used in [init-client.ts](https://github.com/bennyn/coinbase-pro-node/blob/main/src/demo/init-client.ts).

```bash
npx ts-node ./src/demo/dump-candles.ts
```

**Tip:** There is a [.env.defaults](https://github.com/bennycode/coinbase-pro-node/blob/main/.env.defaults) file which serves as a template. Just remove its `.defaults` extension and enter your credentials to get started. Do not commit this file (or your credentials) to any repository!

### Web Frontend Applications

The "coinbase-pro-node" library was built to be used in Node.js environments BUT you can also make use of it in web frontend applications (using React, Vue.js, etc.). However, due to the [CORS restrictions](https://developer.mozilla.org/docs/Web/HTTP/CORS) of modern web browser, you will have to use a proxy server.

A proxy server can be setup with webpack's [DevServer proxy configuration](https://webpack.js.org/configuration/dev-server/#devserverproxy) or [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware).

Here is an example:

**Backend**

```typescript
import {createProxyMiddleware} from 'http-proxy-middleware';
import express from 'express';

const app = express();

app.use(
  '/api-coinbase-pro',
  createProxyMiddleware({
    target: 'https://api.exchange.coinbase.com',
    changeOrigin: true,
    pathRewrite: {
      [`^/api-coinbase-pro`]: '',
    },
  })
);
```

Later on, you can use the proxy URL (`/api-coinbase-pro` from above) in your web application to initialize "coinbase-pro-node" with it:

**Frontend**

```typescript
const client = new CoinbasePro({
  httpUrl: '/api-coinbase-pro',
  apiKey: '',
  apiSecret: '',
  passphrase: '',
  useSandbox: false,
});
```

### Real-world Examples

Checkout [GitHub's dependency graph][6] to see who uses "coinbase-pro-node" in production. There are also [npm packages][7] depending on "coinbase-pro-node".

## Maintainers

[![Benny Neugebauer on Stack Exchange][stack_exchange_bennyn_badge]][stack_exchange_bennyn_url]

## Stargazers

[![Stargazers](https://reporoster.com/stars/bennycode/coinbase-pro-node)](https://github.com/bennycode/coinbase-pro-node/stargazers)

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/bennycode/coinbase-pro-node/issues).

The following commits will help you getting started quickly with the code base:

- [Add REST API endpoint](https://github.com/bennycode/coinbase-pro-node/commit/9920c2f4343985c349b68e2a47d7fe2c42e23e34)
- [Add REST API endpoint (with fixtures)](https://github.com/bennycode/coinbase-pro-node/commit/8a150fecb7d32b7b7cd39a8109985f665aaee26e)

All resources can be found in the [Coinbase Exchange API reference][2]. For the latest updates, check [Coinbase's API Changelog][9].

## License

This project is [MIT](./LICENSE) licensed.

## ⭐️ Show your support ⭐️

[Please leave a star](https://github.com/bennycode/coinbase-pro-node/stargazers) if you find this project useful.

If you like this project, you might also like these related projects:

- [**trading-signals**](https://github.com/bennycode/trading-signals), Technical indicators, written in TypeScript, with arbitrary-precision arithmetic.
- [**ig-trading-api**](https://github.com/bennycode/ig-trading-api), REST API, written in TypeScript, for CFD trading with IG.
- [**binance-api-node**](https://github.com/Ashlar/binance-api-node), Heavily tested and Promise-based Binance API with TypeScript definitions.

---

## Problems with official Coinbase APIs

There are official Coinbase APIs for Node.js, but they all come with some disadvantages leading to decreased developer experience (DX):

1. [Coinbase's first Node.js API](https://github.com/coinbase/coinbase-exchange-node) has no type safety and got deprecated on [July, 19th 2016](https://github.com/coinbase/coinbase-exchange-node/commit/b8347efdb4e2589367c1395b646d283c9c391681)
2. [Coinbase's second Node.js API](https://github.com/coinbase/coinbase-pro-node) has no type safety and got deprecated on [January, 16 2020](https://github.com/coinbase/coinbase-pro-node/issues/393#issuecomment-574993096)
3. [Coinbase's current Node.js API](https://docs.cloud.coinbase.com/exchange/reference) ([OAS spec](https://dash.readme.com/api/v1/api-registry/qgumw1pl3iz4yut)) still lacks type safety and does not incorporate best practices like automatic reconnections and request throttling

## Official Coinbase API

Coinbase is versioning its API through [ReadMe.com](https://readme.com/), so you can generate an API client from their [OpenAPI Specification](https://dash.readme.com/api/v1/api-registry/qgumw1pl3iz4yut). ReadMe provides a Node.js package named "[api](https://www.npmjs.com/package/api)" which allows you to retrieve an automatically generated Node.js client:

### Installation

```bash
npm install api@^4.5.1
```

### Usage

```ts
import api from 'api';

const sdk = api('@coinbase-exchange/v1.0#qgumw1pl3iz4yut');

sdk['ExchangeRESTAPI_GetProductTrades']({
  product_id: 'BTC-USD',
}).then(response => {
  console.log(`Found "${response.length}" trades.`);
});
```

### Drawbacks

The current Coinbase Node.js SDK (provided by the [api package](https://www.npmjs.com/package/api)) does not support typings for response payloads:

![Official Coinbase API](./coinbase-api-screenshot.png 'Type safety problems in official Coinbase API')

[1]: https://pro.coinbase.com/
[2]: https://docs.cloud.coinbase.com/exchange
[3]: https://github.com/bennycode/coinbase-pro-node/tree/main/src/demo
[4]: https://bennycode.com/coinbase-pro-node
[5]: https://www.npmjs.com/package/coinbase-pro-node
[6]: https://github.com/bennycode/coinbase-pro-node/network/dependents
[7]: https://www.npmjs.com/browse/depended/coinbase-pro-node
[8]: https://docs.npmjs.com/about-semantic-versioning
[9]: https://docs.cloud.coinbase.com/exchange/docs/changelog
[stack_exchange_bennyn_badge]: https://stackexchange.com/users/flair/203782.png?theme=default
[stack_exchange_bennyn_url]: https://stackexchange.com/users/203782/benny-neugebauer?tab=accounts
