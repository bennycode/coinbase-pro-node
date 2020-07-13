import {getErrorMessage, gotRateLimited, inAirPlaneMode} from './ErrorUtil';
import {AxiosError} from 'axios';

describe('ErrorUtil', () => {
  describe('inAirPlaneMode', () => {
    it('recognizes connection aborts', () => {
      const error = {
        code: 'ECONNABORTED',
      } as AxiosError;

      expect(inAirPlaneMode(error)).toBe(true);
    });
  });

  describe('gotRateLimited', () => {
    it('recognizes errors caused by rate limiting', () => {
      const someError = new Error('Something went wrong.') as AxiosError;

      expect(gotRateLimited(someError)).toBe(false);

      const someResponse = {
        response: {},
      } as AxiosError;

      expect(gotRateLimited(someResponse)).toBe(false);

      const rateLimitError = {
        response: {
          status: 429,
        },
      } as AxiosError;

      expect(gotRateLimited(rateLimitError)).toBe(true);
    });
  });

  describe('getErrorMessage', () => {
    it('parses the error message', () => {
      const message = 'Something went wrong.';
      const error = new Error(message) as AxiosError;

      expect(getErrorMessage(error)).toBe(message);
    });

    it('falls back to the standard error message', () => {
      const message = 'Something went wrong.';
      const error = {
        message,
        response: {
          data: {},
        },
      } as AxiosError;

      expect(getErrorMessage(error)).toBe(message);
    });

    it('parses the error message from a server response', () => {
      const message = 'Something went wrong.';
      const error = {
        message,
        response: {
          data: {
            message,
          },
        },
      } as AxiosError;

      expect(getErrorMessage(error)).toBe(message);
    });
  });
});
