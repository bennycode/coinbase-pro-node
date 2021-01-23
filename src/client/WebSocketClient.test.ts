import WebSocket = require('ws');
import tickerBTCUSD from '../test/fixtures/ws/ticker/BTC-USD.json';
import statusPayload from '../test/fixtures/ws/status/status.json';
import matchesBTCUSD from '../test/fixtures/ws/matches/BTC-USD.json';
import emptySubscriptions from '../test/fixtures/ws/empty-subscriptions.json';
import {
  WebSocketChannelName,
  WebSocketClient,
  WebSocketEvent,
  WebSocketRequestType,
  WebSocketResponseType,
  WebSocketRequest,
  WebSocketChannel,
  WebSocketErrorMessage,
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

  describe('constructor', () => {
    it('it signals an event when the WebSocket connection is established', async done => {
      const ws = createWebSocketClient();
      ws.on(WebSocketEvent.ON_OPEN, () => done());
      ws.connect();
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

  describe('subscribe', () => {
    function mockWebSocketResponse(
      done: DoneFn,
      channels: WebSocketChannel | WebSocketChannel[],
      payload: Object
    ): WebSocketClient {
      server.on('connection', ws => {
        ws.on('message', (message: string) => {
          const request = JSON.parse(message) as WebSocketRequest;

          if (request.type === WebSocketRequestType.SUBSCRIBE) {
            // Send subscription confirmation
            server.clients.forEach(client =>
              client.send(
                JSON.stringify({
                  channels: request.channels,
                  type: WebSocketResponseType.SUBSCRIPTIONS,
                })
              )
            );
            // Send event for subscription
            server.clients.forEach(client => client.send(JSON.stringify(payload)));
          }

          if (request.type === WebSocketRequestType.UNSUBSCRIBE) {
            // Send unsubscribe confirmation
            server.clients.forEach(client => client.send(JSON.stringify(emptySubscriptions)));
          }
        });
      });

      const ws = createWebSocketClient();
      ws.on(WebSocketEvent.ON_SUBSCRIPTION_UPDATE, subscriptions => {
        // Disconnect when there are no more open subscriptions
        if (subscriptions.channels.length === 0) {
          ws.disconnect();
        }
      });
      ws.on(WebSocketEvent.ON_CLOSE, done);
      ws.on(WebSocketEvent.ON_MESSAGE_ERROR, (wsError: WebSocketErrorMessage) => done.fail(wsError.message));
      // Send subscription once the WebSocket is ready
      ws.on(WebSocketEvent.ON_OPEN, () => ws.subscribe(channels));
      return ws;
    }

    it('receives typed messages from "status" channel', async (done: DoneFn) => {
      const channel = {
        name: WebSocketChannelName.STATUS,
      };

      const ws = mockWebSocketResponse(done, channel, statusPayload);

      ws.on(WebSocketEvent.ON_MESSAGE_STATUS, message => {
        expect(message.currencies[2].details.sort_order).toBe(48);
        expect(message.products[72].id).toBe('XRP-USD');
        ws.unsubscribe(channel);
      });

      ws.connect();
    });

    it('receives typed messages from "ticker" channel', async done => {
      const channel = {
        name: WebSocketChannelName.TICKER,
        product_ids: ['BTC-USD'],
      };

      const ws = mockWebSocketResponse(done, channel, tickerBTCUSD);

      ws.on(WebSocketEvent.ON_MESSAGE_TICKER, tickerMessage => {
        expect(tickerMessage.trade_id).toBe(3526965);
        ws.unsubscribe(channel);
      });

      ws.connect();
    });

    it('receives typed messages from multiple "matches" channels', async done => {
      const channels = [
        {
          name: WebSocketChannelName.MATCHES,
          product_ids: ['BTC-USD'],
        },
      ];

      const ws = mockWebSocketResponse(done, channels, matchesBTCUSD);

      ws.on(WebSocketEvent.ON_MESSAGE_MATCHES, message => {
        expect(message.trade_id).toBe(9713921);
        ws.unsubscribe(channels);
      });

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

  describe('unsubscribe', () => {
    it('unsubscribes from all products on a channel', done => {
      server.on('connection', socket => {
        socket.on('message', (message: string) => {
          const request = JSON.parse(message);

          if (request.type === WebSocketRequestType.UNSUBSCRIBE) {
            const response = JSON.stringify(emptySubscriptions);
            server.clients.forEach(client => client.send(response));
          }
        });
      });

      const ws = createWebSocketClient();

      ws.on(WebSocketEvent.ON_SUBSCRIPTION_UPDATE, subscriptions => {
        if (subscriptions.channels.length === 0) {
          ws.disconnect();
        }
      });

      ws.on(WebSocketEvent.ON_CLOSE, done);

      ws.on(WebSocketEvent.ON_OPEN, () => ws.unsubscribe(WebSocketChannelName.TICKER));

      ws.connect();
    });
  });

  describe('setupHeartbeat', () => {
    it('sends ping messages within a defined interval', async done => {
      server.on('connection', socket => {
        socket.on('ping', () => {
          done();
        });
      });

      const ws = createWebSocketClient();
      ws['pingTime'] = 100;

      ws.connect();
    });
  });

  describe('heartbeat', () => {
    it('resets pong timeouts', () => {
      const ws = createWebSocketClient();
      ws['pongTimeout'] = setTimeout(() => {
        fail('I should not get invoked');
      }, 1000);
      ws['heartbeat']();
    });
  });

  describe('onPongTimeout', () => {
    it('does not fail when there is no active socket', () => {
      const ws = createWebSocketClient();
      ws['onPongTimeout']();
    });

    it('reconnects a socket when the pong timeout is exceeded', () => {
      const ws = createWebSocketClient();
      ws.connect();
      ws['onPongTimeout']();
    });
  });

  describe('cleanupListener', () => {
    it('removes ping & pong listener', () => {
      const ws = createWebSocketClient();

      ws['pingInterval'] = setInterval(() => {
        fail('I should not get invoked');
      }, 1000);

      ws['pongTimeout'] = setTimeout(() => {
        fail('I should not get invoked');
      }, 1000);

      ws['cleanupListener']();
    });
  });
});
