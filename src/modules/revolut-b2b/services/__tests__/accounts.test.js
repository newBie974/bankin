const Accounts = require('../accounts');

const repository = require('../__mocks__/repository.mocks');
const revolutClient = require('../__mocks__/revolutClient.mocks');

describe.only('[SERVICES] - Accounts', () => {
  const accounts = Accounts(repository, revolutClient);
  test('Should getAllAccounts', async () => {
    await accounts.getAllAccounts();
    expect(revolutClient.getAccounts).toHaveBeenCalledTimes(1);
  });
});
