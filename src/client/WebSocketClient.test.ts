import WebSocket = require('ws');
import tickerBTCUSD from '../test/fixtures/ws/ticker/BTC-USD.json';
import matchesBTCUSD from '../test/fixtures/ws/matches/BTC-USD.json';
import tickerUnsubscribeSuccess from '../test/fixtures/ws/ticker/unsubscribe-success.json';
import {
  WebSocketChannelName,
  WebSocketClient,
  WebSocketEvent,
  WebSocketRequestType,
  WebSocketResponseType,
} from './WebSocketClient';
import ReconnectingWebSocket from 'reconnecting-websocket';

const WEBSOCKET_PORT = 8087;
const WEBSOCKET_URL = `ws://localhost:${WEBSOCKET_PORT}`;

let server: WebSocket.Server;

describe('WebSocketClient', () => {
  function createWebSocketClient(url: string = WEBSOCKET_URL): WebSocketClient {
    return new WebSocketClient(url, () => {
      return Promise.resolve({
        key: '',
        passphrase: '',
        signature: '',
        timestamp: Date.now() / 1000,
      });
    });
  }

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
      const ws = createWebSocketClient();
      ws.on(WebSocketEvent.ON_OPEN, () => done());
      ws.connect();
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

      const ws = createWebSocketClient();
      const channel = {
        name: WebSocketChannelName.TICKER,
        product_ids: ['BTC-USD'],
      };

      ws.on(WebSocketEvent.ON_MESSAGE_TICKER, tickerMessage => {
        expect(tickerMessage.trade_id).toBe(3526965);
        ws.unsubscribe(channel);
      });

      ws.on(WebSocketEvent.ON_SUBSCRIPTION_UPDATE, subscriptions => {
        if (subscriptions.channels.length === 0) {
          ws.disconnect();
        }
      });

      ws.on(WebSocketEvent.ON_CLOSE, () => {
        done();
      });

      ws.on(WebSocketEvent.ON_OPEN, () => ws.subscribe(channel));

      ws.connect();
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

      const ws = createWebSocketClient();
      const channels = [
        {
          name: WebSocketChannelName.MATCHES,
          product_ids: ['BTC-USD'],
        },
      ];

      ws.on(WebSocketEvent.ON_MESSAGE_MATCHES, message => {
        expect(message.trade_id).toBe(9713921);
        ws.unsubscribe(channels);
      });

      ws.on(WebSocketEvent.ON_SUBSCRIPTION_UPDATE, subscriptions => {
        if (subscriptions.channels.length === 0) {
          ws.disconnect();
        }
      });

      ws.on(WebSocketEvent.ON_CLOSE, () => {
        done();
      });

      ws.on(WebSocketEvent.ON_OPEN, () => ws.subscribe(channels));

      ws.connect();
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

      const ws = createWebSocketClient();

      ws.on(WebSocketEvent.ON_MESSAGE_ERROR, errorMessage => {
        expect(errorMessage.type).toBe(WebSocketResponseType.ERROR);
        done();
      });

      ws.on(WebSocketEvent.ON_OPEN, () => {
        ws.subscribe({
          name: WebSocketChannelName.USER,
          product_ids: ['BTC-USD'],
        });
      });

      ws.connect();
    });
  });

  describe('connect', () => {
    it('attaches an error listener', async done => {
      const invalidUrl = 'ws://localhost:50001';
      const ws = createWebSocketClient(invalidUrl);
      ws.on(WebSocketEvent.ON_ERROR, done);
      ws.connect();
    });

    it('throws an error when trying to overwrite an existing connection', async done => {
      const ws = createWebSocketClient();
      ws.connect();
      try {
        ws.connect();
        done.fail('No error has been thrown');
      } catch (error) {
        done();
      }
    });

    it('supports custom reconnect options', async () => {
      const ws = createWebSocketClient();
      const socket = ws.connect({startClosed: true});
      expect(socket.readyState).toBe(ReconnectingWebSocket.CLOSED);
    });
  });

  describe('disconnect', () => {
    it('does not do anything if there is no existing connection', () => {
      const ws = createWebSocketClient();
      const onClose = jasmine.createSpy('onClose');

      ws.on(WebSocketEvent.ON_CLOSE, () => {
        onClose();
      });

      ws.disconnect();
      expect(onClose).not.toHaveBeenCalled();
    });

    it('emits an event when an existing connection gets closed', async done => {
      const ws = createWebSocketClient();

      ws.on(WebSocketEvent.ON_CLOSE, () => {
        done();
      });

      ws.on(WebSocketEvent.ON_OPEN, () => {
        ws.disconnect();
      });

      ws.connect();
    });
  });

  describe('sendMessage', () => {
    it('does not send a message when there is no active connection', async done => {
      const ws = createWebSocketClient();
      try {
        await ws.sendMessage({
          channels: [WebSocketChannelName.HEARTBEAT],
          type: WebSocketRequestType.UNSUBSCRIBE,
        });
        done.fail('No error has been thrown');
      } catch (error) {
        expect(error).toBeDefined();
        done();
      }
    });
  });
});
