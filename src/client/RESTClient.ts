import axios, {AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse} from 'axios';
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

  constructor(baseURL: string, auth: ClientAuthentication) {
    this.httpClient = axios.create({
      baseURL: baseURL,
      timeout: 5000,
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
          payload: this.stringifyPayload(config),
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

  private stringifyPayload(config: AxiosRequestConfig): string {
    if (config.data) {
      return JSON.stringify(config.data);
    }
    const params = querystring.stringify(config.params);
    return params ? `?${params}` : '';
  }
}
