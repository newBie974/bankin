function Authentificate(fastify, handlers) {
  function authentificate() {
    fastify.get('/authentificate/', handlers.authentificate);
  }

  function authentificateToken() {
    fastify.get('/authentificate/token', handlers.authentificateToken);
  }

  function authentificateRefreshToken() {
    fastify.get('/authentificate/refresh_token', handlers.refreshToken);
  }

  function starts() {
    authentificate();
    authentificateToken();
    authentificateRefreshToken();
  }
  return {
    starts,
  };
}

module.exports = Authentificate;
