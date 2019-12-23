function Authentificate(repository, revolutClient) {
  async function authentificate() {
    const htmlValidation = await revolutClient.getAuthorisationCode();
    return htmlValidation;
  }

  async function authentificateToken() {
    const token = await revolutClient.authorisationToken();
    return { token };
  }

  async function refreshToken() {
    const refreshed = await revolutClient.refreshUserToken();
    return { token: refreshed.access_token };
  }
  return {
    authentificate,
    authentificateToken,
    refreshToken,
  };
}

module.exports = Authentificate;
