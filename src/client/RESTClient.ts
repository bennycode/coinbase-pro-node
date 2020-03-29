import axios, {AxiosError, AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse} from 'axios';
import {AccountAPI} from '../account/AccountAPI';
import {RequestSigner} from '../auth/RequestSigner';
import {ClientAuthentication} from '../CoinbasePro';
import {OrderAPI} from '../order/OrderAPI';
import {ProductAPI} from '../product/ProductAPI';
import {TimeAPI} from '../time/TimeAPI';
import {UserAPI} from '../user/UserAPI';
import {FillAPI} from '../fill/FillAPI';
import querystring from 'querystring';
import {ProfileAPI} from '../profile/ProfileAPI';
import axiosRetry, {isNetworkOrIdempotentRequestError} from 'axios-retry';
import util from 'util';

export class RESTClient {
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
  readonly fill: FillAPI;
  readonly order: OrderAPI;
  readonly product: ProductAPI;
  readonly profile: ProfileAPI;
  readonly user: UserAPI;

  private readonly httpClient: AxiosInstance;
  private readonly logger: (msg: string, ...param: any[]) => void;

  constructor(baseURL: string, auth: ClientAuthentication) {
    this.logger = util.debuglog('coinbase-pro-node');

    this.httpClient = axios.create({
      baseURL: baseURL,
      timeout: 5000,
    });

    axiosRetry(this.httpClient, {
      retries: Infinity,
      retryCondition: (error: AxiosError) => {
        const gotRateLimited = error.response?.status === 429;
        const inAirplaneMode = error.code === 'ECONNABORTED';
        return isNetworkOrIdempotentRequestError(error) || inAirplaneMode || gotRateLimited;
      },
      retryDelay: (retryCount: number, error: AxiosError) => {
        const errorMessage = error.response?.data.message || error.message;
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
      const clockSkew = await TimeAPI.getClockSkew(baseURL);

      const signedRequest = RequestSigner.signRequest(
        auth,
        {
          httpMethod: String(config.method).toUpperCase(),
          payload: RESTClient.stringifyPayload(config),
          requestPath,
        },
        clockSkew
      );

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
    this.fill = new FillAPI(this.httpClient);
    this.order = new OrderAPI(this.httpClient);
    this.product = new ProductAPI(this.httpClient);
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
