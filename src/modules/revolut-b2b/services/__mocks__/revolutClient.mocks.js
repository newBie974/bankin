const revolutClient = {
  getAuthorisationCode: jest.fn(() => true),
  authorisationToken: jest.fn(() => true),
  refreshUserToken: jest.fn(() => true),
  getAccounts: jest.fn(() => true),
};

module.exports = revolutClient;
