const accounts = {
  getAllAccounts: jest.fn(() => true),
};

const authentificate = {
  authentificate: jest.fn(() => true),
  authentificateToken: jest.fn(() => true),
  refreshToken: jest.fn(() => true),
};

module.exports = { accounts, authentificate };
