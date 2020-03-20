import WebSocket = require('ws');
import {SignedRequest} from '../auth/RequestSigner';
import tickerBTCUSD from '../test/fixtures/ws/ticker/BTC-USD.json';
import matchesBTCUSD from '../test/fixtures/ws/matches/BTC-USD.json';
import tickerUnsubscribeSuccess from '../test/fixtures/ws/ticker/unsubscribe-success.json';
import {
  WebSocketChannelName,
  WebSocketClient,
  WebSocketRequest,
  WebSocketRequestType,
  WebSocketEvent,
  WebSocketResponseType,
} from './WebSocketClient';

const WEBSOCKET_PORT = 8087;
const WEBSOCKET_URL = `ws://localhost:${WEBSOCKET_PORT}`;

let server: WebSocket.Server;

describe('WebSocketClient', () => {
  beforeEach(done => {
    server = new WebSocket.Server({port: WEBSOCKET_PORT});
    server.on('listening', () => done());
  });

  afterEach(done => {
    if (server) {
      server.close(error => {
        if (error) {
          done.fail(error);
        } else {
          done();
        }
      });
    } else {
      done();
    }
  });

  describe('constructor', () => {
    it('it signals an event when the WebSocket connection is established', async done => {
      const client = new WebSocketClient(WEBSOCKET_URL);
      client.on(WebSocketEvent.ON_OPEN, () => done());
      await client.connect();
    });
  });

  describe('subscribe', () => {
    it('receives typed messages from "ticker" channel', async done => {
      server.on('connection', ws => {
        ws.on('message', (message: string) => {
          const request = JSON.parse(message);
          let response: string;

          if (request.type === WebSocketRequestType.SUBSCRIBE) {
            response = JSON.stringify(tickerBTCUSD);
          }

          if (request.type === WebSocketRequestType.UNSUBSCRIBE) {
            response = JSON.stringify(tickerUnsubscribeSuccess);
          }

          server.clients.forEach(client => {
            client.send(response);
          });
        });
      });

      const productIds = ['BTC-USD'];
      const client = new WebSocketClient(WEBSOCKET_URL);

      client.on(WebSocketEvent.ON_MESSAGE_TICKER, tickerMessage => {
        expect(tickerMessage.trade_id).toBe(3526965);
        client.unsubscribe([
          {
            name: WebSocketChannelName.TICKER,
            product_ids: productIds,
          },
        ]);
      });

      client.on(WebSocketEvent.ON_MESSAGE, event => {
        if (event.type === WebSocketResponseType.SUBSCRIPTIONS) {
          done();
        }
      });

      await client.connect();

      client.subscribe([
        {
          name: WebSocketChannelName.TICKER,
          product_ids: productIds,
        },
      ]);
    });

    it('receives typed messages from "matches" channel', async done => {
      server.on('connection', ws => {
        ws.on('message', (message: string) => {
          const request = JSON.parse(message);
          let response: string;

          if (request.type === WebSocketRequestType.SUBSCRIBE) {
            response = JSON.stringify(matchesBTCUSD);
          }

          if (request.type === WebSocketRequestType.UNSUBSCRIBE) {
            response = JSON.stringify(tickerUnsubscribeSuccess);
          }

          server.clients.forEach(client => {
            client.send(response);
          });
        });
      });

      const productIds = ['BTC-USD'];
      const client = new WebSocketClient(WEBSOCKET_URL);

      client.on(WebSocketEvent.ON_MESSAGE_MATCHES, message => {
        expect(message.trade_id).toBe(9713921);
        client.unsubscribe([
          {
            name: WebSocketChannelName.MATCHES,
            product_ids: productIds,
          },
        ]);
      });

      client.on(WebSocketEvent.ON_MESSAGE, event => {
        if (event.type === WebSocketResponseType.SUBSCRIPTIONS) {
          done();
        }
      });

      await client.connect();

      client.subscribe([
        {
          name: WebSocketChannelName.MATCHES,
          product_ids: productIds,
        },
      ]);
    });
  });

  describe('disconnect', () => {
    it('does not do anything if there is no existing connection', () => {
      const client = new WebSocketClient(WEBSOCKET_URL);
      const onClose = jasmine.createSpy('onClose');

      client.on(WebSocketEvent.ON_CLOSE, () => {
        onClose();
      });

      client.disconnect();
      expect(onClose).not.toHaveBeenCalled();
    });

    it('emits an event when an existing connection gets closed', async done => {
      const client = new WebSocketClient(WEBSOCKET_URL);

      client.on(WebSocketEvent.ON_CLOSE, () => {
        done();
      });

      client.on(WebSocketEvent.ON_OPEN, () => {
        client.disconnect();
      });

      await client.connect();
    });
  });

  describe('sendMessage', () => {
    it('does not send a message when there is no active connection', () => {
      const client = new WebSocketClient(WEBSOCKET_URL);
      expect(() => {
        client.sendMessage({
          channels: [WebSocketChannelName.HEARTBEAT],
          type: WebSocketRequestType.UNSUBSCRIBE,
        });
      }).toThrow();
    });

    it('supports authenticated subscriptions', async done => {
      server.on('connection', ws => {
        ws.on('message', (message: string) => {
          const request = JSON.parse(message);

          expect(request.passphrase).toBeDefined();
          expect(request.signature).toBeDefined();
          expect(request.key).toBeDefined();

          done();
        });
      });

      const message: WebSocketRequest = {
        channels: [
          {
            name: WebSocketChannelName.LEVEL2,
            product_ids: ['ETH-USD', 'ETH-EUR'],
          },
        ],
        type: WebSocketRequestType.SUBSCRIBE,
      };

      const signature: SignedRequest = {
        key: 'a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1',
        passphrase: 'a1a1a1a1a1a',
        signature: 'A1A1A1a1a1a1a1a1A1a1A1A1A1a1a1A1a1111aaa1AA=',
        timestamp: 1557702240.0149999,
      };

      const client = new WebSocketClient(WEBSOCKET_URL);

      client.on(WebSocketEvent.ON_OPEN, () => {
        client.sendMessage(message, signature);
      });

      await client.connect();
    });
  });
});
