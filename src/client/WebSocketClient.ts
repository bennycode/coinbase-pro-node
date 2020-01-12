import EventEmitter from 'events';
import ReconnectingWebSocket, {Event, Options} from 'reconnecting-websocket';
import NodeWebSocket = require('ws');
import {SignedRequest} from '../auth/RequestSigner';

export interface WebSocketChannel {
  name: WebSocketChannelName;
  product_ids: string[];
}

export enum WebSocketChannelName {
  FULL = 'full',
  HEARTBEAT = 'heartbeat',
  LEVEL2 = 'level2',
  MATCHES = 'matches',
  TICKER = 'ticker',
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
        WebSocket: NodeWebSocket,
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

  public subscribeToTickers(productIds: string[]): void {
    this.sendMessage({
      channels: [
        {
          name: WebSocketChannelName.TICKER,
          product_ids: productIds,
        },
      ],
      product_ids: productIds,
      type: WebSocketRequestType.SUBSCRIBE,
    });
  }

  public unsubscribeFromTickers(productIds: string[]): void {
    this.sendMessage({
      channels: [
        {
          name: WebSocketChannelName.TICKER,
          product_ids: productIds,
        },
      ],
      product_ids: productIds,
      type: WebSocketRequestType.UNSUBSCRIBE,
    });
  }
}

export {WebSocketClient};
