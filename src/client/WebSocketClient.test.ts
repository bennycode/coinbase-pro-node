import WebSocket = require('ws');
import {SignedRequest} from '../auth/RequestSigner';
import tickerBTCUSD from '../test/fixtures/ws/ticker/BTC-USD.json';
import matchesBTCUSD from '../test/fixtures/ws/matches/BTC-USD.json';
import tickerUnsubscribeSuccess from '../test/fixtures/ws/ticker/unsubscribe-success.json';
import {
  WebSocketChannelName,
  WebSocketClient,
  WebSocketEvent,
  WebSocketRequest,
  WebSocketRequestType,
  WebSocketResponseType,
} from './WebSocketClient';
import ReconnectingWebSocket from 'reconnecting-websocket';

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
      client.connect();
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

      const client = new WebSocketClient(WEBSOCKET_URL);
      const channel = {
        name: WebSocketChannelName.TICKER,
        product_ids: ['BTC-USD'],
      };

      client.on(WebSocketEvent.ON_MESSAGE_TICKER, tickerMessage => {
        expect(tickerMessage.trade_id).toBe(3526965);
        client.unsubscribe(channel);
      });

      client.on(WebSocketEvent.ON_MESSAGE, event => {
        if (event.type === WebSocketResponseType.SUBSCRIPTIONS) {
          done();
        }
      });

      client.on(WebSocketEvent.ON_OPEN, () => client.subscribe(channel));

      client.connect();
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

      const client = new WebSocketClient(WEBSOCKET_URL);
      const channels = [
        {
          name: WebSocketChannelName.MATCHES,
          product_ids: ['BTC-USD'],
        },
      ];

      client.on(WebSocketEvent.ON_MESSAGE_MATCHES, message => {
        expect(message.trade_id).toBe(9713921);
        client.unsubscribe(channels);
      });

      client.on(WebSocketEvent.ON_MESSAGE, event => {
        if (event.type === WebSocketResponseType.SUBSCRIPTIONS) {
          done();
        }
      });

      client.on(WebSocketEvent.ON_OPEN, () => client.subscribe(channels));

      client.connect();
    });

    it('receives typed error messages', async done => {
      server.on('connection', ws => {
        ws.on('message', (message: string) => {
          const request = JSON.parse(message);

          if (request.type === WebSocketRequestType.SUBSCRIBE) {
            const response = JSON.stringify({
              message: 'Failed to subscribe',
              reason: 'user channel requires authentication',
              type: WebSocketResponseType.ERROR,
            });

            server.clients.forEach(client => {
              client.send(response);
            });
          }
        });
      });

      const client = new WebSocketClient(WEBSOCKET_URL);

      client.on(WebSocketEvent.ON_MESSAGE_ERROR, errorMessage => {
        expect(errorMessage.type).toBe(WebSocketResponseType.ERROR);
        done();
      });

      client.on(WebSocketEvent.ON_OPEN, () => {
        client.subscribe({
          name: WebSocketChannelName.USER,
          product_ids: ['BTC-USD'],
        });
      });

      client.connect();
    });
  });

  describe('connect', () => {
    it('attaches an error listener', async done => {
      const invalidUrl = 'ws://localhost:50001';
      const client = new WebSocketClient(invalidUrl);
      client.on(WebSocketEvent.ON_ERROR, done);
      client.connect();
    });

    it('throws an error when trying to overwrite an existing connection', async done => {
      const client = new WebSocketClient(WEBSOCKET_URL);
      client.connect();
      try {
        client.connect();
        done.fail('No error has been thrown');
      } catch (error) {
        done();
      }
    });

    it('supports custom reconnect options', async () => {
      const client = new WebSocketClient(WEBSOCKET_URL);
      const socket = client.connect({startClosed: true});
      expect(socket.readyState).toBe(ReconnectingWebSocket.CLOSED);
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

      client.connect();
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

      client.connect();
    });
  });
});
