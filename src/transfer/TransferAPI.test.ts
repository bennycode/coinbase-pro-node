import nock from 'nock';
import {TransferAPI, TransferType} from './TransferAPI';

describe('TransferAPI', () => {
  afterEach(() => nock.cleanAll());

  const mockWithdrawal = {
    account_id: 'bcf1fc34-3180-4acf-97be-c1c20a719e34',
    amount: '22.00000000',
    canceled_at: null,
    completed_at: '2019-06-18 02:11:26.416758+00',
    created_at: '2019-06-18 02:11:25.610908+00',
    details: {
      coinbase_account_id: '26dbbe94-7321-4ca4-8744-622f5a98a45a',
      coinbase_payment_method_id: '',
      coinbase_transaction_id: '5eeace0cfe2410af68891bcb',
      coinbase_withdrawal_id: '935107c5-b443-4cf4-b9ef-e49f856c4de8',
      crypto_transaction_hash: '217AF4782DFB632121F1EAEF33DBAEC0539A77E5CBFCBA4AA71925ADB2B15D13',
      destination_tag: '567148403',
      destination_tag_name: 'XRP Tag',
      sent_to_address: 'rw2ciyaNshpHe7bCHo4bRWq6pqqynnWKQg',
    },
    id: '6b09bf5e-c94c-405b-b7dc-ad2b27749ce5',
    processed_at: '2019-06-18 02:11:37.996052+00',
    type: 'withdraw',
    user_id: '5eeace07a181d1e866db83e5',
    user_nonce: '1592624441614',
  };

  const mockDeposit = {
    account_id: 'bf091906-ca7f-499e-95fa-5bc15e918b46',
    amount: '40.00000000',
    canceled_at: null,
    completed_at: '2019-06-18 01:37:49.756147+00',
    created_at: '2019-06-18 01:37:48.78953+00',
    details: {
      coinbase_account_id: '7f8803e2-1be5-4a29-bfd2-3bc6645f5a24',
      coinbase_transaction_id: '5eeac652be6cf8b17f7625bd',
      crypto_address: 'rw2ciyaNshpHe7bCHo4bRWq6pqqynnWKQg',
      crypto_transaction_hash: 'B918BF044B6ADA318B36F4F23E7EB141C15BF2B6CFB96FDFC674E907FE235FB1',
      crypto_transaction_id: '5eeac64cc46b34f5332e5326',
      destination_tag: '379156162',
      destination_tag_name: 'XRP Tag',
    },
    id: '6cca6a14-a5e3-4219-9542-86123fc9d6c3',
    processed_at: '2019-06-18 01:37:49.756147+00',
    type: 'deposit',
    user_id: '5eeac63c90b913bf3cf7c92e',
    user_nonce: null,
  };

  describe('getTransfers', () => {
    it('returns withdrawals', async () => {
      const response = [mockWithdrawal];
      nock(global.REST_URL).get(TransferAPI.URL.TRANSFERS).query(true).reply(200, response);
      const withdrawals = await global.client.rest.transfer.getTransfers(TransferType.WITHDRAW);
      expect(withdrawals.data.length).toBe(1);
      expect(withdrawals.data[0].id).toBe('6b09bf5e-c94c-405b-b7dc-ad2b27749ce5');
    });

    it('returns deposits', async () => {
      const response = [mockDeposit];
      nock(global.REST_URL).get(TransferAPI.URL.TRANSFERS).query(true).reply(200, response);
      const deposits = await global.client.rest.transfer.getTransfers(TransferType.DEPOSIT, 'test-profile-id');
      expect(deposits.data.length).toBe(1);
      expect(deposits.data[0].id).toBe('6cca6a14-a5e3-4219-9542-86123fc9d6c3');
    });
  });

  describe('getTranfer', () => {
    it('returns a withdrawal', async () => {
      const response = mockWithdrawal;
      const withdrawalId = '6b09bf5e-c94c-405b-b7dc-ad2b27749ce5';
      const path = `${TransferAPI.URL.TRANSFERS}/${withdrawalId}`;
      nock(global.REST_URL).get(path).reply(200, response);
      const withdrawal = await global.client.rest.transfer.getTransfer(withdrawalId);
      expect(withdrawal.id).toBe(withdrawalId);
    });
  });
});
