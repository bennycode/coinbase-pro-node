import WebSocket = require('ws');
import tickerBTCUSD from '../test/fixtures/ws/ticker/BTC-USD.json';
import statusPayload from '../test/fixtures/ws/status/status.json';
import matchesBTCUSD from '../test/fixtures/ws/matches/BTC-USD.json';
import l2snapshotBTCUSD from '../test/fixtures/ws/level2/snapshot.json';
import l2updateBTCUSD from '../test/fixtures/ws/level2/l2update.json';
import fullReceivedLimitBTCUSD from '../test/fixtures/ws/full/received-limit.json';
import fullActivateBTCUSD from '../test/fixtures/ws/full/activate.json';
import fullOpenBTCUSD from '../test/fixtures/ws/full/open.json';
import fullDoneBTCUSD from '../test/fixtures/ws/full/done.json';
import fullChangeBTCUSD from '../test/fixtures/ws/full/change.json';
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
    it('attaches an error listener', done => {
      const invalidUrl = 'ws://localhost:50001';
      const ws = createWebSocketClient(invalidUrl);
      ws.on(WebSocketEvent.ON_ERROR, () => {
        done();
      });
      ws.connect();
    });

    it('throws an error when trying to overwrite an existing connection', done => {
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

  describe('connected', () => {
    it('returns false when called before the connection is created', done => {
      const ws = createWebSocketClient();
      expect(ws.connected).toBe(false);
      done();
    });

    it('returns true when called after the connection is created', done => {
      const ws = createWebSocketClient();

      ws.on(WebSocketEvent.ON_CLOSE, () => {
        done();
      });

      ws.on(WebSocketEvent.ON_OPEN, () => {
        expect(ws.connected).toBe(true);

        ws.disconnect();
      });

      ws.connect();
    });

    it('returns false when called after the connection is closed', done => {
      const ws = createWebSocketClient();

      ws.on(WebSocketEvent.ON_CLOSE, () => {
        expect(ws.connected).toBe(false);
        done();
      });

      ws.on(WebSocketEvent.ON_OPEN, () => {
        ws.disconnect();
      });

      ws.connect();
    });
  });

  describe('constructor', () => {
    it('it signals an event when the WebSocket connection is established', done => {
      const ws = createWebSocketClient();
      ws.on(WebSocketEvent.ON_OPEN, async () => {
        await ws.disconnect();
        done();
      });
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

    it('emits an event when an existing connection gets closed', done => {
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
    it('does not send a message when there is no active connection', async () => {
      const ws = createWebSocketClient();
      try {
        await ws.sendMessage({
          channels: [WebSocketChannelName.HEARTBEAT],
          type: WebSocketRequestType.UNSUBSCRIBE,
        });
        fail('No error has been thrown');
      } catch (error) {
        expect(error).toBeDefined();
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
      ws.on(WebSocketEvent.ON_CLOSE, () => {
        done();
      });
      ws.on(WebSocketEvent.ON_MESSAGE_ERROR, (wsError: WebSocketErrorMessage) => done.fail(wsError.message));
      // Send subscription once the WebSocket is ready
      ws.on(WebSocketEvent.ON_OPEN, () => ws.subscribe(channels));
      return ws;
    }

    it('receives typed messages from "status" channel', (done: DoneFn) => {
      const channel = {
        name: WebSocketChannelName.STATUS,
      };

      const ws = mockWebSocketResponse(done, channel, statusPayload);

      ws.on(WebSocketEvent.ON_MESSAGE_STATUS, async message => {
        expect(message.currencies[2].details.sort_order).toBe(48);
        expect(message.products[72].id).toBe('XRP-USD');
        await ws.unsubscribe(channel);
      });

      ws.connect();
    });

    it('receives typed messages from "ticker" channel', done => {
      const channel = {
        name: WebSocketChannelName.TICKER,
        product_ids: ['BTC-USD'],
      };

      const ws = mockWebSocketResponse(done, channel, tickerBTCUSD);

      ws.on(WebSocketEvent.ON_MESSAGE_TICKER, async tickerMessage => {
        expect(tickerMessage.trade_id).toBe(3526965);
        await ws.unsubscribe(channel);
      });

      ws.connect();
    });

    it('receives typed "snapshot" messages from "level2" channel', done => {
      const channel = {
        name: WebSocketChannelName.LEVEL2,
        product_ids: ['BTC-USD'],
      };

      const ws = mockWebSocketResponse(done, channel, l2snapshotBTCUSD);

      ws.on(WebSocketEvent.ON_MESSAGE_L2SNAPSHOT, async snapshotMessage => {
        expect<number>(snapshotMessage.asks.length).toBe(10);
        expect(snapshotMessage.asks[0]).toEqual(['47009.28', '0.00100000']);
        expect<number>(snapshotMessage.bids.length).toBe(10);
        await ws.unsubscribe(channel);
      });

      ws.connect();
    });

    it('receives typed "l2update" messages from "level2" channel', done => {
      const channel = {
        name: WebSocketChannelName.LEVEL2,
        product_ids: ['BTC-USD'],
      };

      const ws = mockWebSocketResponse(done, channel, l2updateBTCUSD);

      ws.on(WebSocketEvent.ON_MESSAGE_L2UPDATE, async updateMessage => {
        expect<number>(updateMessage.changes.length).toBe(5);
        expect(updateMessage.changes[0]).toEqual(['buy', '46961.95', '0.00000000']);
        expect(updateMessage.changes[1]).toEqual(['sell', '47027.24', '0.04443115']);
        await ws.unsubscribe(channel);
      });

      ws.connect();
    });

    it('receives typed "activate" messages from "full" channel', done => {
      const channel = {
        name: WebSocketChannelName.FULL,
        product_ids: ['BTC-USD'],
      };

      const ws = mockWebSocketResponse(done, channel, fullActivateBTCUSD);

      ws.on(WebSocketEvent.ON_MESSAGE_FULL_ACTIVATE, async message => {
        expect(message.profile_id).toBe('30000727-d308-cf50-7b1c-c06deb1934fc');
        expect(message.private).toBe(true);
        expect(message.stop_type).toBe('entry');
        await ws.unsubscribe(channel);
      });

      ws.connect();
    });

    it('receives typed "received" messages from "full" channel', done => {
      const channel = {
        name: WebSocketChannelName.FULL,
        product_ids: ['BTC-USD'],
      };

      const ws = mockWebSocketResponse(done, channel, fullReceivedLimitBTCUSD);

      ws.on(WebSocketEvent.ON_MESSAGE_FULL_RECEIVED, async message => {
        expect(message.order_type).toBe('limit');
        expect(message.order_id).toBe('d50ec984-77a8-460a-b958-66f114b0de9b');
        await ws.unsubscribe(channel);
      });

      ws.connect();
    });

    it('receives typed "open" messages from "full" channel', done => {
      const channel = {
        name: WebSocketChannelName.FULL,
        product_ids: ['BTC-USD'],
      };

      const ws = mockWebSocketResponse(done, channel, fullOpenBTCUSD);

      ws.on(WebSocketEvent.ON_MESSAGE_FULL_OPEN, async message => {
        expect(message.profile_id).toBe(undefined);
        expect(message.remaining_size).toBe('1.00');
        await ws.unsubscribe(channel);
      });

      ws.connect();
    });

    it('receives typed "done" messages from "full" channel', done => {
      const channel = {
        name: WebSocketChannelName.FULL,
        product_ids: ['BTC-USD'],
      };

      const ws = mockWebSocketResponse(done, channel, fullDoneBTCUSD);

      ws.on(WebSocketEvent.ON_MESSAGE_FULL_DONE, async message => {
        expect(message.profile_id).toBe(undefined);
        expect(message.remaining_size).toBe('0');
        expect(message.reason).toBe('filled');
        await ws.unsubscribe(channel);
      });

      ws.connect();
    });

    it('receives typed "change" messages from "full" channel', done => {
      const channel = {
        name: WebSocketChannelName.FULL,
        product_ids: ['BTC-USD'],
      };

      const ws = mockWebSocketResponse(done, channel, fullChangeBTCUSD);

      ws.on(WebSocketEvent.ON_MESSAGE_FULL_CHANGE, async message => {
        expect(message.new_size).toBe('5.23512');
        expect(message.old_size).toBe('12.234412');
        await ws.unsubscribe(channel);
      });

      ws.connect();
    });

    it('receives typed "ticker" messages from the special "ticker_1000" channel', done => {
      const channel = {
        name: WebSocketChannelName.TICKER_1000,
        product_ids: ['BTC-USD'],
      };

      const ws = mockWebSocketResponse(done, channel, tickerBTCUSD);

      ws.on(WebSocketEvent.ON_MESSAGE_TICKER, async tickerMessage => {
        expect(tickerMessage.trade_id).toBe(3526965);
        await ws.unsubscribe(channel);
      });

      ws.connect();
    });

    it('receives typed messages from multiple "matches" channels', done => {
      const channels = [
        {
          name: WebSocketChannelName.MATCHES,
          product_ids: ['BTC-USD'],
        },
      ];

      const ws = mockWebSocketResponse(done, channels, matchesBTCUSD);

      ws.on(WebSocketEvent.ON_MESSAGE_MATCHES, async message => {
        expect(message.trade_id).toBe(9713921);
        await ws.unsubscribe(channels);
      });

      ws.connect();
    });

    it('receives typed error messages', done => {
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

      ws.on(WebSocketEvent.ON_MESSAGE_ERROR, async errorMessage => {
        expect(errorMessage.type).toBe(WebSocketResponseType.ERROR);
        await ws.disconnect();
        done();
      });

      ws.on(WebSocketEvent.ON_OPEN, async () => {
        await ws.subscribe({
          name: WebSocketChannelName.USER,
          product_ids: ['BTC-USD'],
        });
      });

      ws.connect();
    });

    it('does not throw an exception when disconnect is called immediately after an awaited subscribe', done => {
      const ws = createWebSocketClient();

      const channel: WebSocketChannel = {
        name: WebSocketChannelName.TICKER,
        product_ids: ['BTC-USD', 'ETH-USD'],
      };

      ws.on(WebSocketEvent.ON_OPEN, async () => {
        await ws.subscribe(channel);

        expect(() => {
          ws.disconnect();
        }).not.toThrow();
      });

      ws.on(WebSocketEvent.ON_CLOSE, () => {
        done();
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

      ws.on(WebSocketEvent.ON_SUBSCRIPTION_UPDATE, async subscriptions => {
        if (subscriptions.channels.length === 0) {
          await ws.disconnect();
        }
      });

      ws.on(WebSocketEvent.ON_CLOSE, () => {
        done();
      });

      ws.on(WebSocketEvent.ON_OPEN, () => ws.unsubscribe(WebSocketChannelName.TICKER));

      ws.connect();
    });
  });

  describe('setupHeartbeat', () => {
    it('sends ping messages within a defined interval', done => {
      server.on('connection', socket => {
        socket.on('ping', async () => {
          await ws.disconnect();
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
