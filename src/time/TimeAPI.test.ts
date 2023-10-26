import {TimeAPI, TimeSkew} from './TimeAPI.js';
import nock from 'nock';

describe('TimeAPI', () => {
  describe('getTime', () => {
    afterEach(() => nock.cleanAll());

    beforeEach(() => {
      nock.cleanAll();

      nock(global.REST_URL)
        .persist()
        .get(TimeAPI.URL.TIME)
        .query(true)
        .reply(() => {
          const date = new Date('2015-01-07T23:47:25.201Z');
          return [
            200,
            JSON.stringify({
              epoch: date.getTime() / 1000,
              iso: date.toISOString(),
            }),
          ];
        });
    });

    it('returns decimal seconds since Unix Epoch', async () => {
      const time = await new TimeAPI(global.REST_URL).getTime();

      const expected: TimeSkew = {
        epoch: 1420674445.201,
        iso: '2015-01-07T23:47:25.201Z',
      };

      expect(time).toEqual(expected);
    });
  });
});
