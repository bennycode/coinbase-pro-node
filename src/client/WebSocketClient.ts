import {EventEmitter} from 'events';
import ReconnectingWebSocket, {Event, ErrorEvent, Options, CloseEvent} from 'reconnecting-websocket';
import WebSocket from 'ws';
import {SignedRequest} from '../auth/RequestSigner';
import {OrderSide, ISO_8601_MS_UTC, UUID_V4} from '..';

export interface WebSocketChannel {
  name: WebSocketChannelName;
  product_ids: string[];
}

export enum WebSocketChannelName {
  /** The full channel provides real-time updates on orders and trades. These updates can be applied on to a level 3 order book snapshot to maintain an accurate and up-to-date copy of the exchange order book. */
  FULL = 'full',
  /** To receive heartbeat messages for specific products once a second subscribe to the heartbeat channel. Heartbeats also include sequence numbers and last trade ids that can be used to verify no messages were missed. */
  HEARTBEAT = 'heartbeat',
  /** The easiest way to keep a snapshot of the order book is to use the level2 channel. It guarantees delivery of all updates, which reduce a lot of the overhead required when consuming the full channel. */
  LEVEL2 = 'level2',
  /** If you are only interested in match messages you can subscribe to the matches channel. This is useful when you’re consuming the remaining feed using the level 2 channel. Please note that messages can be dropped from this channel. By using the heartbeat channel you can track the last trade id and fetch trades that you missed from the REST API. */
  MATCHES = 'matches',
  /** The status channel will send all products and currencies on a preset interval. */
  STATUS = 'status',
  /** The ticker channel provides real-time price updates every time a match happens. It batches updates in case of cascading matches, greatly reducing bandwidth requirements. */
  TICKER = 'ticker',
  /** This channel is a version of the full channel that only contains messages that include the authenticated user. Consequently, you need to be authenticated to receive any messages. */
  USER = 'user',
}

export interface WebSocketRequest {
  channels: WebSocketChannel[] | string[];
  product_ids?: string[];
  type: WebSocketRequestType;
}

export enum WebSocketRequestType {
  SUBSCRIBE = 'subscribe',
  UNSUBSCRIBE = 'unsubscribe',
}

export enum WebSocketResponseType {
  /** Most failure cases will cause an error message (a message with the type "error") to be emitted. */
  ERROR = 'error',
  /** Once a subscribe or unsubscribe message is received, the server will respond with a subscriptions message that lists all channels you are subscribed to. */
  SUBSCRIPTIONS = 'subscriptions',
  /** Heartbeats include sequence numbers and last trade ids that can be used to verify no messages were missed. */
  HEARTBEAT = 'heartbeat',
  /** The status channel will send all products and currencies on a preset interval. */
  STATUS = 'status',
  /** The ticker channel provides real-time price updates every time a match happens. */
  TICKER = 'ticker',
  /** When subscribing to the 'level2' channel it will send an initial snapshot message with the corresponding product ids, bids and asks to represent the entire order book. */
  LEVEL2_SNAPSHOT = 'snapshot',
  /** Subsequent updates of a 'level2' subscription. The `time` property of `l2update` is the time of the event as recorded by our trading engine. Please note that `size` is the updated size at that price level, not a delta. A size of "0" indicates the price level can be removed. */
  LEVEL2_UPDATE = 'l2update',
  /**
   * A valid order has been received and is now active. This message is emitted for every single valid order as soon as
   * the matching engine receives it whether it fills immediately or not.
   *
   * The `received` message does not indicate a resting order on the order book. It simply indicates a new incoming
   * order which as been accepted by the matching engine for processing. Received orders may cause `match` message to
   * follow if they are able to begin being filled (taker behavior). Self-trade prevention may also trigger change
   * messages to follow if the order size needs to be adjusted. Orders which are not fully filled or canceled due to
   * self-trade prevention result in an `open` message and become resting orders on the order book.
   *
   * Market orders (indicated by the `order_type` field) may have an optional `funds` field which indicates how much
   * quote currency will be used to buy or sell. For example, a `funds` field of "100.00" for the "BTC-USD" product
   * would indicate a purchase of up to "100.00" USD worth of Bitcoin.
   */
  FULL_RECEIVED = 'received',
  /**
   * The order is now open on the order book. This message will only be sent for orders which are not fully filled
   * immediately. The `remaining_size` will indicate how much of the order is unfilled and going on the book.
   *
   * There will be no `open` message for orders which will be filled immediately. There will be no open message for
   * market orders since they are filled immediately.
   */
  FULL_OPEN = 'open',
  /**
   * The order is no longer on the order book. Sent for all orders for which there was a received message. This message
   * can result from an order being canceled or filled. There will be no more messages for this `order_id ` after a
   * done message. The `remaining_size` indicates how much of the order went unfilled; this will be "0" for `filled`
   * orders.
   *
   * All `market` orders will not have a `remaining_size` or `price` field as they are never on the open order book at
   * a given price.
   *
   * A `done` message will be sent for received orders which are fully filled or canceled due to self-trade prevention.
   * There will be no `open` message for such orders. All `done` messages for orders which are not on the book should
   * be ignored when maintaining a real-time order book.
   */
  FULL_DONE = 'done',
  /**
   * A trade occurred between two orders. The aggressor or `taker` order is the one executing immediately after being
   * received and the `maker` order is a resting order on the book. The `side` field indicates the maker order side. If
   * the side is `sell` this indicates the maker was a sell order and the `match` is considered an up-tick. A `buy`
   * side match is a down-tick.
   */
  FULL_MATCH = 'match',
  /**
   * An order has changed. This is the result of self-trade prevention adjusting the order size or available funds.
   * Orders can only decrease in size or funds. All `change` messages are sent anytime an order changes in size; this
   * includes resting orders (open) as well as received but not yet open. All `change` messages are also sent when a
   * new market order goes through self trade prevention and the funds for the market order have changed.
   *
   * Note: `change` messages for received but not yet open orders can be ignored when building a real-time order book.
   * The `side` field of a change message and `price` can be used as indicators for whether the change message is
   * relevant if building from a level 2 book.
   *
   * Any `change` message where the price is `null` indicates that the `change` message is for a market order. Change
   * messages for limit orders will always have a price specified.
   */
  FULL_CHANGE = 'change',
  /**
   * An `activate` message is sent when a stop order is placed. When the stop is triggered the order will be placed and
   * go through the order lifecycle.
   */
  FULL_ACTIVATE = 'activate',
  /**
   * Latest match between two orders.
   */
  LAST_MATCH = 'last_match',
}

export type WebSocketResponse = {type: WebSocketResponseType} & WebSocketMessage;

// Not exported because it will become "WebSocketResponse" once complete
type WebSocketMessage = Record<string, string | number | boolean> | WebSocketTickerMessage | WebSocketMatchMessage;

export type WebSocketTickerMessage = {
  best_ask: string;
  best_bid: string;
  high_24h: string;
  last_size: string;
  low_24h: string;
  open_24h: string;
  price: string;
  product_id: string;
  sequence: number;
  side: OrderSide;
  time: ISO_8601_MS_UTC;
  trade_id: number;
  type: WebSocketResponseType.TICKER;
  volume_24h: string;
  volume_30d: string;
};

export type WebSocketMatchMessage = {
  maker_order_id: UUID_V4;
  price: string;
  product_id: string;
  sequence: number;
  side: OrderSide;
  size: string;
  taker_order_id: UUID_V4;
  time: ISO_8601_MS_UTC;
  trade_id: number;
  type: WebSocketResponseType.FULL_MATCH;
};

export type WebSocketLastMatchMessage = Omit<WebSocketMatchMessage, 'type'> & {type: WebSocketResponseType.LAST_MATCH};

export enum WebSocketEvent {
  ON_CLOSE = 'WebSocketEvent.ON_CLOSE',
  ON_ERROR = 'WebSocketEvent.ON_ERROR',
  ON_MESSAGE = 'WebSocketEvent.ON_MESSAGE',
  ON_MESSAGE_MATCHES = 'WebSocketEvent.ON_MESSAGE_MATCHES',
  ON_MESSAGE_TICKER = 'WebSocketEvent.ON_MESSAGE_TICKER',
  ON_OPEN = 'WebSocketEvent.ON_OPEN',
}

export interface WebSocketClient {
  on(event: WebSocketEvent.ON_CLOSE, listener: (event: CloseEvent) => void): this;

  on(event: WebSocketEvent.ON_ERROR, listener: (event: ErrorEvent) => void): this;

  on(event: WebSocketEvent.ON_MESSAGE, listener: (response: WebSocketResponse) => void): this;

  on(
    event: WebSocketEvent.ON_MESSAGE_MATCHES,
    listener: (matchMessage: WebSocketLastMatchMessage | WebSocketMatchMessage) => void
  ): this;

  on(event: WebSocketEvent.ON_MESSAGE_TICKER, listener: (tickerMessage: WebSocketTickerMessage) => void): this;

  on(event: WebSocketEvent.ON_OPEN, listener: (event: Event) => void): this;
}

export class WebSocketClient extends EventEmitter {
  static CLOSE_EVENT_CODE = {
    GOING_AWAY: 1001,
    NORMAL_CLOSURE: 1000,
    PROTOCOL_ERROR: 1002,
    UNSUPPORTED_DATA: 1003,
  };

  private readonly baseURL: string;
  private socket: ReconnectingWebSocket | undefined;

  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  /**
   * The websocket feed is publicly available, but connections to it are rate-limited to 1 per 4 seconds per IP.
   *
   * @param reconnectOptions - Reconnect options to be used with the "reconnecting-websocket" package
   * @see https://docs.pro.coinbase.com/#websocket-feed
   */
  connect(
    reconnectOptions: Options = {
      connectionTimeout: 1100,
      debug: false,
      maxReconnectionDelay: 10000,
      maxRetries: Infinity,
      minReconnectionDelay: 4000,
      reconnectionDelayGrowFactor: 1,
    }
  ): ReconnectingWebSocket {
    if (this.socket) {
      throw Error(
        `You established already a WebSocket connection. Please call "disconnect" first before creating a new one.`
      );
    }

    this.socket = new ReconnectingWebSocket(this.baseURL, [], {...reconnectOptions, ...{WebSocket}});

    this.socket.onclose = (event: CloseEvent): void => {
      this.emit(WebSocketEvent.ON_CLOSE, event);
    };

    this.socket.onerror = (event: ErrorEvent): void => {
      this.emit(WebSocketEvent.ON_ERROR, event);
    };

    this.socket.onmessage = (event: MessageEvent): void => {
      const response: WebSocketResponse = JSON.parse(event.data);

      // Emit generic event
      this.emit(WebSocketEvent.ON_MESSAGE, response);

      // Emit specific event
      switch (response.type) {
        case WebSocketResponseType.TICKER:
          this.emit(WebSocketEvent.ON_MESSAGE_TICKER, response);
          break;
        case WebSocketResponseType.FULL_MATCH:
        case WebSocketResponseType.LAST_MATCH:
          this.emit(WebSocketEvent.ON_MESSAGE_MATCHES, response);
          break;
      }
    };

    this.socket.onopen = (): void => {
      this.emit(WebSocketEvent.ON_OPEN);
    };

    return this.socket;
  }

  disconnect(reason: string = 'Unknown reason'): void {
    if (this.socket) {
      this.socket.close(WebSocketClient.CLOSE_EVENT_CODE.NORMAL_CLOSURE, reason);
      this.socket = undefined;
    }
  }

  sendMessage(message: WebSocketRequest, signature?: SignedRequest): void {
    if (!this.socket) {
      throw new Error('You need to connect to the WebSocket first!');
    }

    if (signature) {
      Object.assign(message, signature);
    }

    this.socket.send(JSON.stringify(message));
  }

  subscribe(channels: WebSocketChannel[]): void {
    this.sendMessage({
      channels,
      type: WebSocketRequestType.SUBSCRIBE,
    });
  }

  unsubscribe(channels: WebSocketChannel[]): void {
    this.sendMessage({
      channels,
      type: WebSocketRequestType.UNSUBSCRIBE,
    });
  }
}
