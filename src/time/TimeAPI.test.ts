import {TimeAPI, TimeSkew} from './TimeAPI';
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

  describe('getClockSkew', () => {
    beforeEach(() => jasmine.clock().install());

    afterEach(() => jasmine.clock().uninstall());

    it('handles epochs sent as string', async () => {
      const mockDate = new Date(1610486424105);
      jasmine.clock().mockDate(mockDate);

      const mockPayload: string = '{"iso":"2021-01-12T21:20:24Z","epoch":1610486424.}';

      const timeApi = new TimeAPI(global.REST_URL);

      spyOn(timeApi, 'getTime').and.returnValue(Promise.resolve(mockPayload));

      const clockSkew = await timeApi.getClockSkew();

      expect(clockSkew).toBe(-0.10500001907348633);
    });
  });
});
