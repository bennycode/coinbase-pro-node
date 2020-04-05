# Coinbase Pro API

![Language Details](https://img.shields.io/github/languages/top/bennyn/coinbase-pro-node) [![Code Coverage](https://codecov.io/gh/bennyn/coinbase-pro-node/branch/master/graphs/badge.svg)](https://codecov.io/gh/bennyn/coinbase-pro-node) ![License](https://img.shields.io/npm/l/coinbase-pro-node.svg) ![Package Version](https://img.shields.io/npm/v/coinbase-pro-node.svg) ![Dependency Updates](https://img.shields.io/david/bennyn/coinbase-pro-node.svg)

[Coinbase Pro][1] API for Node.js, written in TypeScript and covered by tests.

## Motivation

This project was created to continue an active **Coinbase Pro API** after Coinbase deprecated the official Node.js library on [January, 16 2020](https://github.com/coinbase/coinbase-node/issues/140#issuecomment-574990136). The official predecessor was also deprecated on [July, 19th 2016](https://github.com/coinbase/coinbase-exchange-node/commit/b8347efdb4e2589367c1395b646d283c9c391681).

## Features

- **Typed.** Source code is 100% TypeScript. No need to install external typings.
- **Tested.** Code coverage is 100%. No surprises when using "coinbase-pro-node".
- **Convenient.** Request throttling is built-in. Don't worry about rate limiting.
- **Comfortable.** More than an API client. You will get extras like candle watching.
- **Maintained.** Automated security updates. No threats from outdated dependencies.
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
  // The Sandbox is for testing only and offers a subset of the products/assets:
  // https://docs.pro.coinbase.com/#sandbox
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
const client = new CoinbasePro();

// 2. Setup WebSocket channel info
const channel = {
  name: WebSocketChannelName.TICKER,
  product_ids: ['BTC-USD', 'ETH-EUR'],
};

// 3. Wait for open WebSocket to send messages
client.ws.on(WebSocketEvent.ON_OPEN, () => {
  // 7. Subscribe to WebSocket channel
  client.ws.subscribe([channel]);
});

// 4. Listen to WebSocket subscription updates
client.ws.on(WebSocketEvent.ON_SUBSCRIPTION_UPDATE, subscriptions => {
  // When there are no more subscriptions...
  if (subscriptions.channels.length === 0) {
    // 10. Disconnect WebSocket (and end program)
    client.ws.disconnect();
  }
});

// 5. Listen to WebSocket channel updates
client.ws.on(WebSocketEvent.ON_MESSAGE_TICKER, tickerMessage => {
  // 8. Receive message from WebSocket channel
  console.info(`Received message of type "${tickerMessage.type}".`, tickerMessage);
  // 9. Unsubscribe from WebSocket channel
  client.ws.unsubscribe([
    {
      name: WebSocketChannelName.TICKER,
      product_ids: [tickerMessage.product_id],
    },
  ]);
});

// 6. Connect to WebSocket
client.ws.connect({debug: true});
```

## Resources

- [Coinbase Pro API Reference][2]
- [Coinbase Pro API][3]
- [Coinbase Pro Trading Toolkit](https://github.com/coinbase/coinbase-pro-trading-toolkit)

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
[3]: https://github.com/coinbase/coinbase-pro-node
[stack_exchange_bennyn_badge]: http://stackexchange.com/users/flair/203782.png?theme=default
[stack_exchange_bennyn_url]: http://stackexchange.com/users/203782/benny-neugebauer?tab=accounts
