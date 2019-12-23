function Authentificate(services) {
  async function authentificate(req, reply) {
    const revolutAuth = await services.authentificate();
    reply
      .code(200)
      .send(revolutAuth);
  }

  async function authentificateToken(req, reply) {
    const token = await services.authentificateToken();
    reply
      .code(200)
      .send(token);
  }

  async function refreshToken(req, reply) {
    const refreshed = await services.refreshToken();
    reply
      .code(200)
      .send(refreshed);
  }
  return {
    authentificate,
    authentificateToken,
    refreshToken,
  };
}

module.exports = Authentificate;
