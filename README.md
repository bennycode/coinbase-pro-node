# Coinbase Pro API

Unofficial [Coinbase Pro][1] API written in TypeScript and covered by tests.

## Advantages

What are the advantages of this unofficial API over its [official counterpart](https://github.com/coinbase/coinbase-pro-node)?

- **Alive.** It's not archived and read-only. Pull Requests are welcome.
- **Typed.** Source code is 100% TypeScript. No need to install external typings.
- **Tested.** Code coverage is at 100%. No surprises when using.
- **Robust.** WebSocket reconnection is built-in. No problems if your Wi-Fi is gone.
- **Easy-to-use.** HTTP requests are easy to customize. HMAC signing and JSON formatting included.

## Installation

```bash
npm install coinbase-pro-node
```

## Usage

### Node.js Setup

```javascript
const {CoinbasePro} = require('coinbase-pro-node');

// API Keys can be generated here:
// https://pro.coinbase.com/profile/api
const auth = {
  apiKey: '',
  apiSecret: '',
  passphrase: '',
};
const client = new CoinbasePro(auth);
```

### REST Example

```javascript
const tradingAccounts = await client.rest.account.listAccounts();
const message = `You can trade "${tradingAccounts.length}" different pairs.`;
console.log(message);
```

### WebSocket Example

```javascript
client.on(WebSocketClient.TOPIC.ON_MESSAGE, event => {
  console.log(`Received event of type "${event.type}".`);
});

await client.ws.connect();

client.ws.subscribeToTickers(['BTC-USD', 'ETH-EUR']);
```

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/bennyn/coinbase-pro-node/issues).

## License

This project is [MIT](./LICENSE) licensed.

## Show your support

Give a ⭐️ if this project helped you!

[1]: https://pro.coinbase.com/
