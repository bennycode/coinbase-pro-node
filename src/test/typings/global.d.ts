// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {CoinbasePro} from '../../CoinbasePro';

declare global {
  namespace NodeJS {
    interface Global {
      client: CoinbasePro;
      REST_URL: string;
    }
  }
}
