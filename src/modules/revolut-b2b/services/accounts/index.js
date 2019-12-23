function Accounts(repository, revolutClient) {
  async function getAllAccounts() {
    const accounts = await revolutClient.getAccounts();
    return { accounts };
  }
  return {
    getAllAccounts,
  };
}

module.exports = Accounts;
