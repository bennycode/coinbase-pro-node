import {initClient} from './init-client';
import {WebSocketChannelName, WebSocketEvent} from '..';

// 1. Setup Coinbase Pro client
const client = initClient();

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
