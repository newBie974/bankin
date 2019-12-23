const Accounts = require('../accounts');
const { accounts: serviceMocks } = require('../__mocks__/services.mocks');
const { res, reply } = require('../__mocks__/reply.mocks');

describe.only('[HANDLER] - Accounts', () => {
  const accounts = Accounts(serviceMocks);
  test('[200] - should get all', async () => {
    await accounts.getAllAccounts(res, reply);
    expect(serviceMocks.getAllAccounts).toHaveBeenCalledTimes(1);
    expect(reply.code).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledTimes(1);
  });
});
