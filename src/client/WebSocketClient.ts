import EventEmitter from 'events';
import ReconnectingWebSocket, {Event, Options} from 'reconnecting-websocket';
import WebSocket from 'ws';
import {SignedRequest} from '../auth/RequestSigner';

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

class WebSocketClient extends EventEmitter {
  public static CLOSE_EVENT_CODE = {
    GOING_AWAY: 1001,
    NORMAL_CLOSURE: 1000,
    PROTOCOL_ERROR: 1002,
    UNSUPPORTED_DATA: 1003,
  };

  public static TOPIC = {
    ON_CLOSE: 'WebSocketClient.TOPIC.ON_CLOSE',
    ON_ERROR: 'WebSocketClient.TOPIC.ON_ERROR',
    ON_MESSAGE: 'WebSocketClient.TOPIC.ON_MESSAGE',
    ON_OPEN: 'WebSocketClient.TOPIC.ON_OPEN',
  };
  private readonly baseURL: string;
  private socket: ReconnectingWebSocket | undefined;

  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  public connect(): Promise<ReconnectingWebSocket> {
    return new Promise(resolve => {
      const options: Options = {
        WebSocket,
        connectionTimeout: 4000,
        debug: false,
        maxReconnectionDelay: 10000,
        maxRetries: Infinity,
        minReconnectionDelay: 4000,
        reconnectionDelayGrowFactor: 1.3,
      };

      this.socket = new ReconnectingWebSocket(this.baseURL, [], options);

      this.socket.onclose = (event: Event): void => {
        this.emit(WebSocketClient.TOPIC.ON_CLOSE, event);
      };

      this.socket.onmessage = (event: MessageEvent): void => {
        const message = JSON.parse(event.data);
        this.emit(WebSocketClient.TOPIC.ON_MESSAGE, message);
      };

      this.socket.onopen = (): void => {
        this.emit(WebSocketClient.TOPIC.ON_OPEN);
        resolve(this.socket);
      };
    });
  }

  public disconnect(reason: string = 'Unknown reason'): void {
    if (this.socket) {
      this.socket.close(WebSocketClient.CLOSE_EVENT_CODE.NORMAL_CLOSURE, reason);
    }
  }

  public sendMessage(message: WebSocketRequest, signature?: SignedRequest): void {
    if (!this.socket) {
      throw new Error('You need to connect to the WebSocket first!');
    }

    if (signature) {
      Object.assign(message, signature);
    }

    this.socket.send(JSON.stringify(message));
  }

  public subscribe(channel: WebSocketChannel): void {
    this.sendMessage({
      channels: [channel],
      product_ids: channel.product_ids,
      type: WebSocketRequestType.SUBSCRIBE,
    });
  }

  public unsubscribe(channel: WebSocketChannel): void {
    this.sendMessage({
      channels: [channel],
      product_ids: channel.product_ids,
      type: WebSocketRequestType.UNSUBSCRIBE,
    });
  }
}

export {WebSocketClient};
