# Coinbase Pro API

![Language Details](https://img.shields.io/github/languages/top/bennyn/coinbase-pro-node) [![Code Coverage](https://codecov.io/gh/bennyn/coinbase-pro-node/branch/master/graphs/badge.svg)](https://codecov.io/gh/bennyn/coinbase-pro-node) ![License](https://img.shields.io/npm/l/coinbase-pro-node.svg) ![Package Version](https://img.shields.io/npm/v/coinbase-pro-node.svg) ![Dependency Updates](https://img.shields.io/david/bennyn/coinbase-pro-node.svg)

[Coinbase Pro][1] API for Node.js, written in TypeScript and covered by tests.

## Motivation

This project was created to continue an active **Coinbase Pro API** after Coinbase deprecated the official Node.js library on [January, 16 2020](https://github.com/coinbase/coinbase-node/issues/140#issuecomment-574990136). The official predecessor was also deprecated on [July, 19th 2016](https://github.com/coinbase/coinbase-exchange-node/commit/b8347efdb4e2589367c1395b646d283c9c391681).

## Features

- **Typed.** Source code is 100% TypeScript. No need to install external typings.
- **Tested.** Code coverage is 100%. No surprises when using "coinbase-pro-node".
- **Convenient.** Request throttling is built-in. Don't worry about rate limiting.
- **Robust.** WebSocket reconnection is built-in. No problems if your Wi-Fi is gone.
- **Easy-to-use.** HTTP client with Promise API. No callbacks required.
- **Maintained.** Automated security updates. No threats from outdated dependencies.

## Installation

**npm**

```bash
npm install coinbase-pro-node
```

**Yarn**

```bash
yarn add coinbase-pro-node
```

## Usage

**Node.js setup**

```javascript
const {CoinbasePro} = require('coinbase-pro-node');

// API Keys can be generated here:
// https://pro.coinbase.com/profile/api
// https://public.sandbox.pro.coinbase.com/profile/api
const auth = {
  apiKey: '',
  apiSecret: '',
  passphrase: '',
  useSandbox: true,
};

const client = new CoinbasePro(auth);
```

## REST Example

**List accounts**

```javascript
const tradingAccounts = await client.rest.account.listAccounts();
const message = `You can trade "${tradingAccounts.length}" different pairs.`;
console.log(message);
```

## WebSocket Example

**Subscribe to tickers**

```javascript
const {CoinbasePro, WebSocketChannelName, WebSocketEvent} = require('coinbase-pro-node');

// 1. Setup Coinbase Pro client
const client = new CoinbasePro({
  apiKey: '',
  apiSecret: '',
  passphrase: '',
  useSandbox: false,
});

// 2. Setup WebSocket channel info
const channel = {
  name: WebSocketChannelName.TICKER,
  product_ids: ['BTC-USD', 'ETH-EUR'],
};

// 3. Listen to WebSocket channel updates
client.ws.on(WebSocketEvent.ON_MESSAGE_TICKER, message => {
  // 6. Receive message from WebSocket channel
  console.log(`Received message of type "${message.type}".`, message);
  // 7. Unsubscribe from WebSocket channel
  client.ws.unsubscribe([channel]);
  // 8. Disconnect & end program
  client.ws.disconnect();
});

(async () => {
  // 4. Connect to WebSocket
  await client.ws.connect();
  // 5. Subscribe to WebSocket channel
  client.ws.subscribe([channel]);
})();
```

## Resources

- [Coinbase Pro API Reference][2]
- [Coinbase Pro API][3]
- [Coinbase Pro Trading Toolkit](https://github.com/coinbase/coinbase-pro-trading-toolkit)

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/bennyn/coinbase-pro-node/issues).

The following commits will help you getting started quickly with the code base:

- [Add REST API endpoint](https://github.com/bennyn/coinbase-pro-node/commit/8a150fecb7d32b7b7cd39a8109985f665aaee26e)

## Maintainers

[![Benny Neugebauer on Stack Exchange][stack_exchange_bennyn_badge]][stack_exchange_bennyn_url]

## License

This project is [MIT](./LICENSE) licensed.

## Show your support

Give a ⭐️ if this project helped you!

[1]: https://pro.coinbase.com/
[2]: https://docs.pro.coinbase.com/
[3]: https://github.com/coinbase/coinbase-pro-node
[stack_exchange_bennyn_badge]: http://stackexchange.com/users/flair/203782.png?theme=default
[stack_exchange_bennyn_url]: http://stackexchange.com/users/203782/benny-neugebauer?tab=accounts
