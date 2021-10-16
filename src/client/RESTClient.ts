import axios, {
  AxiosDefaults,
  AxiosError,
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import {AccountAPI} from '../account';
import {RequestSetup, SignedRequest} from '../auth/RequestSigner';
import {OrderAPI} from '../order';
import {Candle, CandleGranularity, ProductAPI, ProductEvent} from '../product';
import {UserAPI} from '../user';
import {FeeAPI} from '../fee';
import {FillAPI} from '../fill';
import querystring from 'querystring';
import {ProfileAPI} from '../profile';
import axiosRetry, {isNetworkOrIdempotentRequestError} from 'axios-retry';
import util from 'util';
import {EventEmitter} from 'events';
import {getErrorMessage, gotRateLimited, inAirPlaneMode} from '../error/ErrorUtil';
import {CurrencyAPI} from '../currency';
import {WithdrawAPI} from '../withdraw';
import {TransferAPI} from '../transfer';
import {TimeAPI} from '../time';

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
  private readonly logger: (msg: string, ...param: any[]) => void;

  constructor(baseURL: string, private readonly signRequest: (setup: RequestSetup) => Promise<SignedRequest>) {
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
          `#${retryCount} There was an error querying "${error.config.baseURL}${error.config.url}": ${errorMessage}`
        );
        /**
         * Rate limits:
         * - 3 requests per second, up to 6 requests per second in bursts for public endpoints
         * - 5 requests per second, up to 10 requests per second in bursts for private endpoints
         * @see https://docs.pro.coinbase.com/#rate-limits
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

      config.headers = {
        ...config.headers,
        'CB-ACCESS-KEY': signedRequest.key,
        'CB-ACCESS-PASSPHRASE': signedRequest.passphrase,
        'CB-ACCESS-SIGN': signedRequest.signature,
        'CB-ACCESS-TIMESTAMP': `${signedRequest.timestamp}`,
      };

      return config;
    });

    this.account = new AccountAPI(this.httpClient);
    this.currency = new CurrencyAPI(this.httpClient);
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
