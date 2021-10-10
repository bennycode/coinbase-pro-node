import {AxiosError} from 'axios';

export function inAirPlaneMode(error: AxiosError): boolean {
  return error.code === 'ECONNABORTED';
}

export function gotRateLimited(error: AxiosError): boolean {
  return error.response?.status === 429;
}

export function getErrorMessage(error: AxiosError<{message: string}>): string {
  return error.response?.data.message || error.message;
}
