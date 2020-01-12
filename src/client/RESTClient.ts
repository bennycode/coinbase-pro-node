import axios, {AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse} from 'axios';
import {AccountAPI} from '../account/AccountAPI';
import {RequestSigner} from '../auth/RequestSigner';
import {ClientAuthentication} from '../CoinbasePro';
import {OrderAPI} from '../order/OrderAPI';
import {ProductAPI} from '../product/ProductAPI';
import {TimeAPI} from '../time/TimeAPI';
import {UserAPI} from '../user/UserAPI';

class RESTClient {
  get defaults(): AxiosRequestConfig {
    return this.httpClient.defaults;
  }

  get interceptors(): {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  } {
    return this.httpClient.interceptors;
  }

  public account: AccountAPI;
  public order: OrderAPI;
  public product: ProductAPI;
  public user: UserAPI;
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
          payload: JSON.stringify(config.data || {}),
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
    this.order = new OrderAPI(this.httpClient);
    this.user = new UserAPI(this.httpClient);
    this.product = new ProductAPI(this.httpClient);
  }
}

export {RESTClient};
