import {EventEmitter} from 'events';
import ReconnectingWebSocket, {Event, ErrorEvent, Options, CloseEvent} from 'reconnecting-websocket';
import WebSocket from 'ws';
import {RequestSetup, SignedRequest} from '../auth/RequestSigner';
import {OrderSide, ISO_8601_MS_UTC, UUID_V4, UserAPI, CurrencyDetail, Product} from '..';

export interface WebSocketChannel {
  name: WebSocketChannelName;
  product_ids?: string[];
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
  /** A special version of the ticker channel that only provides a ticker update about every 5 seconds. */
  TICKER_1000 = 'ticker_1000',
  /** This channel is a version of the full channel that only contains messages that include the authenticated user. Consequently, you need to be authenticated to receive any messages. */
  USER = 'user',
}

export interface WebSocketRequest {
  channels: WebSocketChannel[] | string[];
  type: WebSocketRequestType;
}

export enum WebSocketRequestType {
  SUBSCRIBE = 'subscribe',
  UNSUBSCRIBE = 'unsubscribe',
}

export enum WebSocketResponseType {
  /** Most failure cases will cause an error message (a message with the type "error") to be emitted. */
  ERROR = 'error',
  /**
   * An `activate` message is sent when a stop order is placed. When the stop is triggered the order will be placed and
   * go through the order lifecycle.
   */
  FULL_ACTIVATE = 'activate',
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
   * The order is now open on the order book. This message will only be sent for orders which are not fully filled
   * immediately. The `remaining_size` will indicate how much of the order is unfilled and going on the book.
   *
   * There will be no `open` message for orders which will be filled immediately. There will be no open message for
   * market orders since they are filled immediately.
   */
  FULL_OPEN = 'open',
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
  /** Heartbeats include sequence numbers and last trade ids that can be used to verify no messages were missed. */
  HEARTBEAT = 'heartbeat',
  /**
   * Latest match between two orders.
   */
  LAST_MATCH = 'last_match',
  /** When subscribing to the 'level2' channel it will send an initial snapshot message with the corresponding product ids, bids and asks to represent the entire order book. */
  LEVEL2_SNAPSHOT = 'snapshot',
  /** Subsequent updates of a 'level2' subscription. The `time` property of `l2update` is the time of the event as recorded by our trading engine. Please note that `size` is the updated size at that price level, not a delta. A size of "0" indicates the price level can be removed. */
  LEVEL2_UPDATE = 'l2update',
  /** The status channel will send all products and currencies on a preset interval. */
  STATUS = 'status',
  /** Once a subscribe or unsubscribe message is received, the server will respond with a subscriptions message that lists all channels you are subscribed to. */
  SUBSCRIPTIONS = 'subscriptions',
  /** The ticker channel provides real-time price updates every time a match happens. */
  TICKER = 'ticker',
}

export type WebSocketResponse = WebSocketMessage & {type: WebSocketResponseType};

// Not exported because it will become "WebSocketResponse" once complete
type WebSocketMessage =
  | Record<string, string | number | boolean>
  | WebSocketStatusMessage
  | WebSocketTickerMessage
  | WebSocketMatchMessage
  | WebSocketErrorMessage
  | WebSocketLastMatchMessage
  | WebSocketL2SnapshotMessage
  | WebSocketL2UpdateMessage
  | WebSocketFullReceivedMessage
  | WebSocketFullOpenMessage
  | WebSocketFullDoneMessage
  | WebSocketFullChangeMessage
  | WebSocketFullActivateMessage;

export interface WebSocketErrorMessage {
  message: string;
  reason: string;
  type: WebSocketResponseType.ERROR;
}

export interface WebSocketMatchMessage extends WebSocketUserMessage {
  maker_fee_rate?: string;
  maker_order_id: UUID_V4;
  price: string;
  product_id: string;
  sequence: number;
  side: OrderSide;
  size: string;
  taker_fee_rate?: string;
  taker_order_id: UUID_V4;
  time: ISO_8601_MS_UTC;
  trade_id: number;
  type: WebSocketResponseType.FULL_MATCH;
}

export interface WebSocketStatusMessage {
  currencies: {
    convertible_to: string[];
    details: CurrencyDetail;
    funding_account_id: string;
    id: string;
    max_precision: string;
    min_size: string;
    name: string;
    status: 'online';
    status_message?: string;
  }[];
  products: (Product & {type: 'spot'})[];
  type: WebSocketResponseType.STATUS;
}

export interface WebSocketTickerMessage {
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
}

export interface WebSocketL2SnapshotMessage {
  asks: [string, string][];
  bids: [string, string][];
  product_id: string;
  type: WebSocketResponseType.LEVEL2_SNAPSHOT;
}

export interface WebSocketL2UpdateMessage {
  changes: [string, string, string][];
  product_id: string;
  type: WebSocketResponseType.LEVEL2_UPDATE;
}

export interface WebSocketFullReceivedMessage extends WebSocketUserMessage {
  client_oid: string;
  funds?: string;
  order_id: string;
  order_type: 'limit' | 'market';
  price?: string;
  product_id: string;
  sequence: number;
  side: OrderSide;
  size?: string;
  time: ISO_8601_MS_UTC;
  type: WebSocketResponseType.FULL_RECEIVED;
}

export interface WebSocketFullOpenMessage extends WebSocketUserMessage {
  order_id: string;
  price: string;
  product_id: string;
  remaining_size: string;
  sequence: number;
  side: OrderSide;
  time: ISO_8601_MS_UTC;
  type: WebSocketResponseType.FULL_OPEN;
}

export interface WebSocketFullDoneMessage extends WebSocketUserMessage {
  order_id: string;
  price: string;
  product_id: string;
  reason: 'filled' | 'canceled';
  remaining_size: string;
  sequence: number;
  side: OrderSide;
  time: ISO_8601_MS_UTC;
  type: WebSocketResponseType.FULL_DONE;
}

export interface WebSocketFullChangeMessage extends WebSocketUserMessage {
  new_funds?: string;
  new_size?: string;
  old_funds?: string;
  old_size?: string;
  order_id: string;
  price: string;
  product_id: string;
  sequence: number;
  side: OrderSide;
  time: ISO_8601_MS_UTC;
  type: WebSocketResponseType.FULL_CHANGE;
}

export interface WebSocketFullActivateMessage extends WebSocketUserMessage {
  funds: string;
  order_id: string;
  private: boolean;
  product_id: string;
  side: OrderSide;
  size: string;
  stop_price: string;
  stop_type: string;
  timestamp: string;
  type: WebSocketResponseType.FULL_ACTIVATE;
}

interface WebSocketUserMessage {
  profile_id?: string;
  user_id?: string;
}

export type WebSocketLastMatchMessage = Omit<WebSocketMatchMessage, 'type'> & {type: WebSocketResponseType.LAST_MATCH};

export interface WebSocketSubscription {
  channels: WebSocketChannel[];
  type: WebSocketResponseType.SUBSCRIPTIONS;
}

export enum WebSocketEvent {
  ON_CLOSE = 'WebSocketEvent.ON_CLOSE',
  ON_ERROR = 'WebSocketEvent.ON_ERROR',
  ON_MESSAGE = 'WebSocketEvent.ON_MESSAGE',
  ON_MESSAGE_ERROR = 'WebSocketEvent.ON_MESSAGE_ERROR',
  ON_MESSAGE_FULL_ACTIVATE = 'WebSocketEvent.ON_MESSAGE_FULL_ACTIVATE',
  ON_MESSAGE_FULL_CHANGE = 'WebSocketEvent.ON_MESSAGE_FULL_CHANGE',
  ON_MESSAGE_FULL_DONE = 'WebSocketEvent.ON_MESSAGE_FULL_DONE',
  ON_MESSAGE_FULL_OPEN = 'WebSocketEvent.ON_MESSAGE_FULL_OPEN',
  ON_MESSAGE_FULL_RECEIVED = 'WebSocketEvent.ON_MESSAGE_FULL_RECEIVED',
  ON_MESSAGE_L2SNAPSHOT = 'WebSocketEvent.ON_MESSAGE_L2SNAPSHOT',
  ON_MESSAGE_L2UPDATE = 'WebSocketEvent.ON_MESSAGE_L2UPDATE',
  ON_MESSAGE_MATCHES = 'WebSocketEvent.ON_MESSAGE_MATCHES',
  ON_MESSAGE_STATUS = 'WebSocketEvent.ON_MESSAGE_STATUS',
  ON_MESSAGE_TICKER = 'WebSocketEvent.ON_MESSAGE_TICKER',
  ON_OPEN = 'WebSocketEvent.ON_OPEN',
  ON_SUBSCRIPTION_UPDATE = 'WebSocketEvent.ON_SUBSCRIPTION_UPDATE',
}

export interface WebSocketClient {
  on(event: WebSocketEvent.ON_CLOSE, listener: (event: CloseEvent) => void): this;

  on(event: WebSocketEvent.ON_ERROR, listener: (event: ErrorEvent) => void): this;

  on(event: WebSocketEvent.ON_MESSAGE, listener: (response: WebSocketResponse) => void): this;

  on(event: WebSocketEvent.ON_MESSAGE_ERROR, listener: (errorMessage: WebSocketErrorMessage) => void): this;

  on(
    event: WebSocketEvent.ON_MESSAGE_MATCHES,
    listener: (matchMessage: WebSocketLastMatchMessage | WebSocketMatchMessage) => void
  ): this;

  on(event: WebSocketEvent.ON_MESSAGE_STATUS, listener: (statusMessage: WebSocketStatusMessage) => void): this;

  on(event: WebSocketEvent.ON_MESSAGE_TICKER, listener: (tickerMessage: WebSocketTickerMessage) => void): this;

  on(event: WebSocketEvent.ON_SUBSCRIPTION_UPDATE, listener: (subscriptions: WebSocketSubscription) => void): this;

  on(event: WebSocketEvent.ON_MESSAGE_L2SNAPSHOT, listener: (subscriptions: WebSocketL2SnapshotMessage) => void): this;

  on(event: WebSocketEvent.ON_MESSAGE_L2UPDATE, listener: (subscriptions: WebSocketL2UpdateMessage) => void): this;

  on(
    event: WebSocketEvent.ON_MESSAGE_FULL_RECEIVED,
    listener: (subscriptions: WebSocketFullReceivedMessage) => void
  ): this;

  on(event: WebSocketEvent.ON_MESSAGE_FULL_OPEN, listener: (subscriptions: WebSocketFullOpenMessage) => void): this;

  on(event: WebSocketEvent.ON_MESSAGE_FULL_DONE, listener: (subscriptions: WebSocketFullDoneMessage) => void): this;

  on(event: WebSocketEvent.ON_MESSAGE_FULL_CHANGE, listener: (subscriptions: WebSocketFullChangeMessage) => void): this;

  on(
    event: WebSocketEvent.ON_MESSAGE_FULL_ACTIVATE,
    listener: (subscriptions: WebSocketFullActivateMessage) => void
  ): this;

  on(event: WebSocketEvent.ON_OPEN, listener: (event: Event) => void): this;
}

// eslint-disable-next-line no-redeclare
export class WebSocketClient extends EventEmitter {
  static CLOSE_EVENT_CODE = {
    GOING_AWAY: 1001,
    NORMAL_CLOSURE: 1000,
    PROTOCOL_ERROR: 1002,
    UNSUPPORTED_DATA: 1003,
  };

  private readonly baseURL: string;
  public socket: ReconnectingWebSocket | undefined;

  private pingInterval?: NodeJS.Timeout;
  private pongTimeout?: NodeJS.Timeout;

  private pingTime: number;
  private readonly pongTime: number;

  constructor(baseURL: string, private readonly signRequest: (setup: RequestSetup) => Promise<SignedRequest>) {
    super();
    this.baseURL = baseURL;
    this.pingTime = 10_000;
    this.pongTime = this.pingTime * 1.5;
  }

  /**
   * The websocket feed is publicly available, but connections to it are rate-limited to 1 per 4 seconds per IP.
   *
   * @param reconnectOptions - Reconnect options to be used with the "reconnecting-websocket" package. Note: Options
   *   will be merged with sensible default values.
   * @see https://docs.pro.coinbase.com/#websocket-feed
   */
  connect(reconnectOptions?: Options): ReconnectingWebSocket {
    if (this.socket) {
      throw Error(
        `You established already a WebSocket connection. Please call "disconnect" first before creating a new one.`
      );
    }

    const options = this.mergeOptions(reconnectOptions);
    this.socket = new ReconnectingWebSocket(this.baseURL, [], options);

    this.socket.onclose = (event: CloseEvent): void => {
      this.cleanupListener();
      this.emit(WebSocketEvent.ON_CLOSE, event);
    };

    this.socket.onerror = (event: ErrorEvent): void => {
      this.cleanupListener();
      this.emit(WebSocketEvent.ON_ERROR, event);
    };

    this.socket.onmessage = (event: MessageEvent): void => {
      const response: WebSocketResponse = JSON.parse(event.data);

      // Emit generic event
      this.emit(WebSocketEvent.ON_MESSAGE, response);

      // Emit specific event
      switch (response.type) {
        case WebSocketResponseType.ERROR:
          this.emit(WebSocketEvent.ON_MESSAGE_ERROR, response);
          break;
        case WebSocketResponseType.STATUS:
          this.emit(WebSocketEvent.ON_MESSAGE_STATUS, response);
          break;
        case WebSocketResponseType.SUBSCRIPTIONS:
          this.emit(WebSocketEvent.ON_SUBSCRIPTION_UPDATE, response);
          break;
        case WebSocketResponseType.TICKER:
          this.emit(WebSocketEvent.ON_MESSAGE_TICKER, response);
          break;
        case WebSocketResponseType.FULL_MATCH:
        case WebSocketResponseType.LAST_MATCH:
          this.emit(WebSocketEvent.ON_MESSAGE_MATCHES, response);
          break;
        case WebSocketResponseType.LEVEL2_SNAPSHOT:
          this.emit(WebSocketEvent.ON_MESSAGE_L2SNAPSHOT, response);
          break;
        case WebSocketResponseType.LEVEL2_UPDATE:
          this.emit(WebSocketEvent.ON_MESSAGE_L2UPDATE, response);
          break;
        case WebSocketResponseType.FULL_RECEIVED:
          this.emit(WebSocketEvent.ON_MESSAGE_FULL_RECEIVED, response);
          break;
        case WebSocketResponseType.FULL_OPEN:
          this.emit(WebSocketEvent.ON_MESSAGE_FULL_OPEN, response);
          break;
        case WebSocketResponseType.FULL_DONE:
          this.emit(WebSocketEvent.ON_MESSAGE_FULL_DONE, response);
          break;
        case WebSocketResponseType.FULL_CHANGE:
          this.emit(WebSocketEvent.ON_MESSAGE_FULL_CHANGE, response);
          break;
        case WebSocketResponseType.FULL_ACTIVATE:
          this.emit(WebSocketEvent.ON_MESSAGE_FULL_ACTIVATE, response);
          break;
      }
    };

    this.socket.onopen = (): void => {
      this.emit(WebSocketEvent.ON_OPEN);
      /**
       * The 'ws' package for Node.js exposes a "ping" function, but the WebSocket API in browsers doesn't. Since
       * "coinbase-pro-node" can run in both environments (Node.js & web browsers), we have to check for the existence
       * of "ping".
       *
       * Unfortunately, the "real" WebSocket connection isn't exposed from the "reconnecting-websocket" package:
       * https://github.com/pladaria/reconnecting-websocket/pull/148
       */
      const realWebSocket = this.socket?.['_ws'];
      const hasPingSupport = realWebSocket && typeof realWebSocket.ping === 'function';
      this.setupHeartbeat(hasPingSupport, realWebSocket);
    };

    return this.socket;
  }

  disconnect(reason: string = 'Unknown reason'): void {
    if (this.socket) {
      this.socket.close(WebSocketClient.CLOSE_EVENT_CODE.NORMAL_CLOSURE, reason);
      this.socket = undefined;
    }
  }

  /**
   * A simple function to determine if the websocket appears to be open.
   *
   * @returns True if the websocket has been opened and has not closed.
   */
  get connected(): boolean {
    return undefined !== this.socket;
  }

  async sendMessage(message: WebSocketRequest): Promise<void> {
    if (!this.socket) {
      throw new Error(`Failed to send message of type "${message.type}": You need to connect to the WebSocket first.`);
    }

    /**
     * Authentication will result in a couple of benefits:
     * 1. Messages where you're one of the parties are expanded and have more useful fields
     * 2. You will receive private messages, such as lifecycle information about stop orders you placed
     * @see https://docs.pro.coinbase.com/#subscribe
     */
    const signature = await this.signRequest({
      httpMethod: 'GET',
      payload: '',
      requestPath: `${UserAPI.URL.USERS}/self/verify`,
    });
    Object.assign(message, signature);

    this.socket.send(JSON.stringify(message));
  }

  subscribe(channel: WebSocketChannel | WebSocketChannel[]): void {
    this.sendMessage({
      channels: Array.isArray(channel) ? channel : [channel],
      type: WebSocketRequestType.SUBSCRIBE,
    }).finally(() => {});
  }

  unsubscribe(channel: WebSocketChannelName | WebSocketChannel | WebSocketChannel[]): void {
    this.sendMessage({
      channels: this.mapChannels(channel),
      type: WebSocketRequestType.UNSUBSCRIBE,
    }).finally(() => {});
  }

  private cleanupListener(): void {
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
    }

    if (this.pongTimeout) {
      clearTimeout(this.pongTimeout);
    }
  }

  private heartbeat(): void {
    if (this.pongTimeout) {
      clearTimeout(this.pongTimeout);
    }

    /**
     * Enforce a reconnect when not receiving any 'pong' from Coinbase Pro in time.
     * @see https://github.com/bennycode/coinbase-pro-node/issues/374
     */
    this.pongTimeout = setTimeout(this.onPongTimeout.bind(this), this.pongTime);
  }

  private onPongTimeout(): void {
    this.socket?.reconnect();
  }

  /**
   * Setup a heartbeat with ping/pong interval to avoid broken WebSocket connections:
   * @see https://github.com/websockets/ws#how-to-detect-and-close-broken-connections
   */
  private setupHeartbeat(hasPingSupport: boolean, webSocket: WebSocket): void {
    if (hasPingSupport) {
      // Subscribe to pongs
      webSocket.on('pong', this.heartbeat.bind(this));

      // Send pings
      this.pingInterval = setInterval(() => {
        webSocket.ping(() => {});
      }, this.pingTime) as unknown as NodeJS.Timeout;
    }
  }

  private mergeOptions(reconnectOptions?: Options): Options {
    const defaultOptions: Options = {
      WebSocket,
      connectionTimeout: 2000,
      debug: false,
      maxReconnectionDelay: 4000,
      maxRetries: Infinity,
      minReconnectionDelay: 1000,
      reconnectionDelayGrowFactor: 1,
    };

    return {...defaultOptions, ...reconnectOptions};
  }

  private mapChannels(input: WebSocketChannelName | WebSocketChannel | WebSocketChannel[]): WebSocketChannel[] {
    if (Array.isArray(input)) {
      return input;
    } else if (typeof input === 'string') {
      return [
        {
          name: input,
          product_ids: [],
        },
      ];
    }
    return [input];
  }
}
