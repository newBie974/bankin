const Accounts = require('./accounts');
const Authentificate = require('./authentificate');

function Router(fastify, handlers) {
  const accounts = Accounts(fastify, handlers.accounts);
  const authentificate = Authentificate(fastify, handlers.authentificate);

  function starts() {
    accounts.starts();
    authentificate.starts();
  }

  return {
    starts,
  };
}

module.exports = Router;
