// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
import {CoinbasePro} from '../../CoinbasePro';

declare global {
  namespace NodeJS {
    interface Global {
      client: CoinbasePro;
      REST_URL: string;
    }
  }
}
