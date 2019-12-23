const Authentificate = require('../authentificate');

const repository = require('../__mocks__/repository.mocks');
const revolutClient = require('../__mocks__/revolutClient.mocks');

describe.only('[SERVICES] - Authentificate', () => {
  const authentificate = Authentificate(repository, revolutClient);
  test('Should authentificate return html', async () => {
    await authentificate.authentificate();
    expect(revolutClient.getAuthorisationCode).toHaveBeenCalledTimes(1);
  });

  test('should authentificateToken return token', async () => {
    await authentificate.authentificateToken();
    expect(revolutClient.authorisationToken).toHaveBeenCalledTimes(1);
  });

  test('should refresh token', async () => {
    await authentificate.refreshToken();
    expect(revolutClient.refreshUserToken);
  });
});
