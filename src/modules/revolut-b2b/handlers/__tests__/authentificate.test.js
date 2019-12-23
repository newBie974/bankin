const Authentificate = require('../authentificate');
const { authentificate: serviceMocks } = require('../__mocks__/services.mocks');
const { res, reply } = require('../__mocks__/reply.mocks');

describe.only('[HANDLER] - Authentificate', () => {
  const authentificate = Authentificate(serviceMocks);
  test('[authentificate] - should authentificate get html from revolut', async () => {
    await authentificate.authentificate(res, reply);
    expect(serviceMocks.authentificate).toHaveBeenCalledTimes(1);
    expect(reply.code).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledTimes(1);
  });

  test('[authentificateToken] - should authentificate from code ang get token', async () => {
    await authentificate.authentificateToken(res, reply);
    expect(serviceMocks.authentificate).toHaveBeenCalledTimes(1);
    expect(reply.code).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledTimes(1);
  });

  test('[refreshToken] - should refresh token to get token', async () => {
    await authentificate.refreshToken(res, reply);
    expect(serviceMocks.refreshToken).toHaveBeenCalledTimes(1);
    expect(reply.code).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledTimes(1);
  });
});
