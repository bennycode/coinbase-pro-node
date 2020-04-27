import {initClient} from './init-client';
import {WebSocketChannelName, WebSocketEvent} from '..';

const client = initClient();

const channel = {
  name: WebSocketChannelName.USER,
  product_ids: ['BTC-USD'],
};

client.ws.on(WebSocketEvent.ON_MESSAGE, message => {
  console.info(`Received message of type "${message.type}".`, message);
});

client.ws.on(WebSocketEvent.ON_MESSAGE_ERROR, errorMessage => {
  throw new Error(`${errorMessage.message}: ${errorMessage.reason}`);
});

client.ws.on(WebSocketEvent.ON_OPEN, () => {
  client.ws.subscribe(channel);
});

client.ws.connect();
