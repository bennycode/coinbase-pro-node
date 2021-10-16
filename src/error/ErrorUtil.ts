import {AxiosError} from 'axios';

export function inAirPlaneMode(error: AxiosError): boolean {
  return error.code === 'ECONNABORTED';
}

export function gotRateLimited(error: AxiosError): boolean {
  return error.response?.status === 429;
}

export function getErrorMessage(error: AxiosError): string {
  const responseWithErrorMessage = error as AxiosError<{message: string}>;
  return responseWithErrorMessage.response?.data.message || error.message;
}
