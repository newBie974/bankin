function Accounts(fastify, handlers) {
  function getAllAccounts() {
    fastify.get('/accounts/', handlers.getAllAccounts);
  }

  function starts() {
    getAllAccounts();
  }
  return {
    starts,
  };
}

module.exports = Accounts;
