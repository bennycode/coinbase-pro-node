# Coinbase Pro API

Unofficial [Coinbase Pro][1] API written in TypeScript and covered by tests.

## Advantages

What are the advantages of the unofficial API over the [official counterpart](https://github.com/coinbase/coinbase-pro-node)?

- It's not archived and read-only (Pull Requests are always welcome!)
- Source code is written 100% in TypeScript
- Test setup enforces 100% code coverage
- WebSocket reconnection is built-in
- HTTP requests and/or responses are easy to customize

## Usage

### Node.js

**Setup**

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

**REST example**

```javascript
const tradingAccounts = await client.rest.account.listAccounts();
const message = `You can trade "${tradingAccounts.length}" different pairs.`;
console.log(message);
```

**WebSocket example**

```javascript
client.on(WebSocketClient.TOPIC.ON_MESSAGE, event => {
  console.log(`Received event of type "${event.type}".`);
});

await client.ws.connect();

client.ws.subscribeToTickers(['BTC-USD', 'ETH-EUR']);
```

[1]: https://pro.coinbase.com/
