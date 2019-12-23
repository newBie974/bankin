function Revolut(superagent, clientsConfig, revolutConfig, jwt) {
  const {
    payload,
    privateKey,
    signOptions,
    grantType,
    clientId,
    clientAssertionType,
    code,
    token,
    refreshToken,
  } = revolutConfig;
  const clientAssertion = jwt.sign(payload, privateKey, signOptions);
  // const token = 'oa_sand_l9jRVivEXjleTCzc3CVIF7fZK_srcHiQ_F-vTAJxTVY'; 
  // jwt.sign(payload, privateKey, signOptions);
  // const refreshToken = 'oa_sand_un-5mjAxvhFnXUjtaZhAhZ1Yn7lzZzHoWEBMycoOQnw';
  const { revolut: urlApi } = clientsConfig;
  function getAuthorisationCode() {
    try {
      return superagent
        .get('sandbox-business.revolut.com/app-confirm')
        .query({
          client_id: clientId,
          redirect_uri: payload.iss,
        }).then((res) => res.text);
    } catch (err) {
      throw new Error('[REVOLUT] - [CANNOT GET AUTHORISATION CODE]', err);
      // here put logger [logs error]
    }
  }

  function authorisationToken() {
    try {
      return superagent
        .post(`${urlApi}auth/token`)
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({
          grant_type: grantType,
          code,
          client_id: clientId,
          client_assertion_type: clientAssertionType,
          client_assertion: clientAssertion,
        })
        .then((res) => res);
    } catch (err) {
      throw new Error('[REVOLUT] - [CANNOT GET AUTHORISATION CODE]', err);
      // here put logger [logs error]
    }
  }

  function refreshUserToken() {
    try {
      return superagent
        .post(`${urlApi}auth/token`)
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
          code,
          client_id: clientId,
          client_assertion_type: clientAssertionType,
          client_assertion: clientAssertion,
        })
        .then((res) => res.body);
    } catch (err) {
      throw new Error('[REVOLUT] - [CANNOT GET AUTHORISATION CODE]', err);
      // here put logger [logs error]
    }
  }

  function getAccounts() {
    try {
      return superagent
        .get(`${urlApi}accounts`)
        .set('Authorization', `Bearer ${token}`)
        .then((res) => res.body);
    } catch (err) {
      // here put logger [logs error]
      return [];
    }
  }

  function getAccount(id) {
    try {
      return superagent
        .get(`${urlApi}accounts/${id}`)
        .set('Authorization', `Bearer ${token}`)
        .then((res) => res.body);
    } catch (err) {
      // here put logger [logs error]
      return {};
    }
  }
  return {
    getAuthorisationCode,
    authorisationToken,
    getAccounts,
    getAccount,
    refreshUserToken,
  };
}

module.exports = Revolut;
