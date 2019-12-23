const Accounts = require('./accounts');
const Authentificate = require('./authentificate');

function Handlers(services) {
  const accounts = Accounts(services.accounts);
  const authentificate = Authentificate(services.authentificate);
  return {
    accounts,
    authentificate,
  };
}

module.exports = Handlers;
