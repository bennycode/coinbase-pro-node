import {AxiosError} from 'axios';

export function inAirPlaneMode(error: AxiosError): boolean {
  return error.code === 'ECONNABORTED';
}

export function gotRateLimited(error: AxiosError): boolean {
  return error.response?.status === 429;
}

/**
 * Possible errors returned from Coinbase Pro API:
 * { message: 'size is too accurate. Smallest unit is 0.00000001' }
 * { message: 'size is too small. Minimum size is 0.10000000' }
 * { message: 'Insufficient funds' }
 * { message: 'NotFound' }
 *
 * Error handling in the official API client:
 * https://github.com/coinbase/coinbase-pro-trading-toolkit/blob/e95c76eb43bda1fd86379612644a79b02948c17a/src/core/Trader.ts#L122-L126
 *
 * @param error Error response wrapped by "axios" request library
 */
export function getErrorMessage(error: AxiosError): string {
  const responseWithErrorMessage = error as AxiosError<{message: string}>;
  return responseWithErrorMessage.response?.data.message || error.message;
}
