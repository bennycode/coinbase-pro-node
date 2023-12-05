import axios, {
  AxiosDefaults,
  AxiosError,
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import axiosRetry, {isNetworkOrIdempotentRequestError} from 'axios-retry';
import {EventEmitter} from 'node:events';
import util, {DebugLogger} from 'node:util';
import querystring from 'querystring';
import {AccountAPI} from '../account/index.js';
import {RequestSetup, SignedRequest} from '../auth/RequestSigner.js';
import {CurrencyAPI} from '../currency/index.js';
import {getErrorMessage, gotRateLimited, inAirPlaneMode} from '../error/ErrorUtil.js';
import {ExchangeRateAPI} from '../exchange-rate/ExchangeRateAPI.js';
import {FeeAPI} from '../fee/index.js';
import {FillAPI} from '../fill/index.js';
import {OrderAPI} from '../order/index.js';
import {Candle, CandleGranularity, ProductAPI, ProductEvent} from '../product/index.js';
import {ProfileAPI} from '../profile/index.js';
import {TimeAPI} from '../time/index.js';
import {TransferAPI} from '../transfer/index.js';
import {UserAPI} from '../user/index.js';
import {WithdrawAPI} from '../withdraw/index.js';

export interface RESTClient {
  on(
    event: ProductEvent.NEW_CANDLE,
    listener: (productId: string, granularity: CandleGranularity, candle: Candle) => void
  ): this;
}

// eslint-disable-next-line no-redeclare
export class RESTClient extends EventEmitter {
  get defaults(): AxiosDefaults {
    return this.httpClient.defaults;
  }

  get interceptors(): {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  } {
    return this.httpClient.interceptors;
  }

  readonly account: AccountAPI;
  readonly currency: CurrencyAPI;
  readonly exchangeRate: ExchangeRateAPI;
  readonly fee: FeeAPI;
  readonly fill: FillAPI;
  readonly order: OrderAPI;
  readonly product: ProductAPI;
  readonly profile: ProfileAPI;
  readonly time: TimeAPI;
  readonly transfer: TransferAPI;
  readonly user: UserAPI;
  readonly withdraw: WithdrawAPI;

  private readonly httpClient: AxiosInstance;
  private readonly logger: DebugLogger;

  constructor(
    baseURL: string,
    private readonly signRequest: (setup: RequestSetup) => Promise<SignedRequest>
  ) {
    super();
    this.logger = util.debuglog('coinbase-pro-node');

    this.httpClient = axios.create({
      baseURL: baseURL,
      timeout: 50_000,
    });

    axiosRetry(this.httpClient, {
      retries: Infinity,
      retryCondition: (error: AxiosError) => {
        return isNetworkOrIdempotentRequestError(error) || inAirPlaneMode(error) || gotRateLimited(error);
      },
      retryDelay: (retryCount: number, error: AxiosError) => {
        const errorMessage = getErrorMessage(error);
        this.logger(
          `#${retryCount} There was an error querying "${error.config?.baseURL}${error.config?.url}": ${errorMessage}`
        );
        /**
         * Rate limits:
         * - 3 requests per second, up to 6 requests per second in bursts for public endpoints
         * - 5 requests per second, up to 10 requests per second in bursts for private endpoints
         * @see https://docs.cloud.coinbase.com/exchange/docs/rate-limits
         */
        return 1000;
      },
      shouldResetTimeout: true,
    });

    this.httpClient.interceptors.request.use(async config => {
      const baseURL = String(config.baseURL);
      const url = String(config.url);
      const requestPath = url.replace(baseURL, '');

      const signedRequest = await this.signRequest({
        httpMethod: String(config.method).toUpperCase(),
        payload: RESTClient.stringifyPayload(config),
        requestPath,
      });

      config.headers.set('CB-ACCESS-KEY', signedRequest.key);
      config.headers.set('CB-ACCESS-PASSPHRASE', signedRequest.passphrase);
      config.headers.set('CB-ACCESS-SIGN', signedRequest.signature);
      config.headers.set('CB-ACCESS-TIMESTAMP', `${signedRequest.timestamp}`);

      return config;
    });

    this.account = new AccountAPI(this.httpClient);
    this.currency = new CurrencyAPI(this.httpClient);
    this.exchangeRate = new ExchangeRateAPI();
    this.fee = new FeeAPI(this.httpClient);
    this.fill = new FillAPI(this.httpClient);
    this.order = new OrderAPI(this.httpClient);
    this.product = new ProductAPI(this.httpClient, this);
    this.profile = new ProfileAPI(this.httpClient);
    this.time = new TimeAPI(baseURL);
    this.transfer = new TransferAPI(this.httpClient);
    this.user = new UserAPI(this.httpClient);
    this.withdraw = new WithdrawAPI(this.httpClient);
  }

  static stringifyPayload(config: AxiosRequestConfig): string {
    if (config.data) {
      return JSON.stringify(config.data);
    }
    const params = querystring.stringify(config.params);
    return params ? `?${params}` : '';
  }
}
