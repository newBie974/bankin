const Accounts = require('./accounts');
const Authentificate = require('./authentificate');

function Services(repository, revolutClient) {
  const accounts = Accounts(repository.accounts, revolutClient);
  const authentificate = Authentificate(repository.authentificate, revolutClient);
  return {
    accounts,
    authentificate,
  };
}

module.exports = Services;
