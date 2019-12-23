function Accounts(services) {
  async function getAllAccounts(req, reply) {
    const accounts = await services.getAllAccounts();
    reply
      .code(200)
      .send(accounts);
  }
  return {
    getAllAccounts,
  };
}

module.exports = Accounts;
