import getAccount from '../test/fixtures/rest/accounts/322dfa88-e10d-4678-856d-2930eac3e62d/GET-200.json';
import getAccountHistory from '../test/fixtures/rest/accounts/322dfa88-e10d-4678-856d-2930eac3e62d/ledger/GET-200.json';
import getHolds from '../test/fixtures/rest/accounts/322dfa88-e10d-4678-856d-2930eac3e62d/holds/GET-200.json';
import listAccounts from '../test/fixtures/rest/accounts/GET-200.json';
import nock from 'nock';
import {AccountAPI} from './AccountAPI';

describe('AccountAPI', () => {
  afterAll(() => nock.cleanAll());

  beforeAll(() => {
    nock(global.REST_URL).persist().get(AccountAPI.URL.ACCOUNTS).query(true).reply(200, JSON.stringify(listAccounts));

    nock(global.REST_URL)
      .persist()
      .get(`${AccountAPI.URL.ACCOUNTS}/322dfa88-e10d-4678-856d-2930eac3e62d`)
      .query(true)
      .reply(200, JSON.stringify(getAccount));

    nock(global.REST_URL)
      .persist()
      .get(`${AccountAPI.URL.ACCOUNTS}/322dfa88-e10d-4678-856d-2930eac3e62d/ledger`)
      .query(true)
      .reply(200, JSON.stringify(getAccountHistory));

    nock(global.REST_URL)
      .persist()
      .get(`${AccountAPI.URL.ACCOUNTS}/322dfa88-e10d-4678-856d-2930eac3e62d/holds`)
      .query(true)
      .reply(200, JSON.stringify(getHolds));
  });

  describe('listAccounts', () => {
    it('gets a list of trading accounts', async () => {
      const accounts = await global.client.rest.account.listAccounts();
      expect(accounts.length).toBe(7);
    });
  });

  describe('getAccount', () => {
    it('gets information for a single account', async () => {
      const accounts = await global.client.rest.account.listAccounts();
      const accountId = accounts[0].id;
      const account = await global.client.rest.account.getAccount(accountId);
      expect(account.id).toBe(accountId);
    });
  });

  describe('getAccountHistory', () => {
    it('lists the account activity', async () => {
      const accounts = await global.client.rest.account.listAccounts();
      const accountId = accounts[0].id;
      const history = await global.client.rest.account.getAccountHistory(accountId, {limit: 100});
      expect(history).toBeDefined();
    });
  });

  describe('getHolds', () => {
    it('lists active orders or pending withdraw requests', async () => {
      const accounts = await global.client.rest.account.listAccounts();
      const accountId = accounts[0].id;
      const holds = await global.client.rest.account.getHolds(accountId);
      expect(holds).toBeDefined();
    });
  });
});
