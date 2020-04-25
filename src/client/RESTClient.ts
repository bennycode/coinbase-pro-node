import axios, {AxiosError, AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse} from 'axios';
import {AccountAPI} from '../account/AccountAPI';
import {RequestSetup, SignedRequest} from '../auth/RequestSigner';
import {OrderAPI} from '../order/OrderAPI';
import {Candle, CandleGranularity, ProductAPI, ProductEvent} from '../product/ProductAPI';
import {UserAPI} from '../user/UserAPI';
import {FeeAPI} from '../fee/FeeAPI';
import {FillAPI} from '../fill/FillAPI';
import querystring from 'querystring';
import {ProfileAPI} from '../profile/ProfileAPI';
import axiosRetry, {isNetworkOrIdempotentRequestError} from 'axios-retry';
import util from 'util';
import {EventEmitter} from 'events';
import {getErrorMessage, gotRateLimited, inAirPlaneMode} from '../error/ErrorUtil';

export interface RESTClient {
  on(
    event: ProductEvent.NEW_CANDLE,
    listener: (productId: string, granularity: CandleGranularity, candle: Candle) => void
  ): this;
}

export class RESTClient extends EventEmitter {
  get defaults(): AxiosRequestConfig {
    return this.httpClient.defaults;
  }

  get interceptors(): {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  } {
    return this.httpClient.interceptors;
  }

  readonly account: AccountAPI;
  readonly fee: FeeAPI;
  readonly fill: FillAPI;
  readonly order: OrderAPI;
  readonly product: ProductAPI;
  readonly profile: ProfileAPI;
  readonly user: UserAPI;

  private readonly httpClient: AxiosInstance;
  private readonly logger: (msg: string, ...param: any[]) => void;

  constructor(baseURL: string, private readonly signRequest: (setup: RequestSetup) => Promise<SignedRequest>) {
    super();
    this.logger = util.debuglog('coinbase-pro-node');

    this.httpClient = axios.create({
      baseURL: baseURL,
      timeout: 5000,
    });

    axiosRetry(this.httpClient, {
      retries: Infinity,
      retryCondition: (error: AxiosError) => {
        return isNetworkOrIdempotentRequestError(error) || inAirPlaneMode(error) || gotRateLimited(error);
      },
      retryDelay: (retryCount: number, error: AxiosError) => {
        const errorMessage = getErrorMessage(error);
        this.logger(
          `#${retryCount} There was an error querying "${error.config.baseURL}${error.request.path}": ${errorMessage}`
        );
        /**
         * Rate limits:
         * - 3 requests per second, up to 6 requests per second in bursts for public endpoints
         * - 5 requests per second, up to 10 requests per second in bursts for private endpoints
         * @see https://docs.pro.coinbase.com/#rate-limits
         */
        return 1000;
      },
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

      config.headers = {
        ...config.headers,
        'CB-ACCESS-KEY': signedRequest.key,
        'CB-ACCESS-PASSPHRASE': signedRequest.passphrase,
        'CB-ACCESS-SIGN': signedRequest.signature,
        'CB-ACCESS-TIMESTAMP': signedRequest.timestamp,
      };

      return config;
    });

    this.account = new AccountAPI(this.httpClient);
    this.fee = new FeeAPI(this.httpClient);
    this.fill = new FillAPI(this.httpClient);
    this.order = new OrderAPI(this.httpClient);
    this.product = new ProductAPI(this.httpClient, this);
    this.profile = new ProfileAPI(this.httpClient);
    this.user = new UserAPI(this.httpClient);
  }

  static stringifyPayload(config: AxiosRequestConfig): string {
    if (config.data) {
      return JSON.stringify(config.data);
    }
    const params = querystring.stringify(config.params);
    return params ? `?${params}` : '';
  }
}
