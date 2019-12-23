const fs = require('fs');
const path = require('path');
require('dotenv-flow').config();

const publicKey = fs.readFileSync(path.resolve(__dirname, './publickey.cer').toString(), 'utf8');
const privateKey = fs.readFileSync(path.resolve(__dirname, './privatekey.pem').toString(), 'utf8');

const env = (name) => {
  if (process.env[name] === undefined) throw new Error(`Config error, env var ${name} not defined.`);
  return process.env[name];
};


const config = {
  app: {
    name: env('APP_NAME'),
    port: env('PORT'),
  },
  postgres: {
    user: env('POSTGRES_USER'),
    database: env('POSTGRES_DB'),
    password: env('POSTGRES_PASSWORD'),
    host: env('POSTGRES_HOSTNAME'),
    port: env('POSTGRES_PORT'),
    max: env('POSTGRES_POOL_SIZE'),
    idleTimeoutMillis: env('POSTGRES_IDLETIMEOUTMILLIS'),
  },
  clients: {
    revolut: env('REVOLUT_API'),
  },
  revolutConfig: {
    publicKey,
    privateKey,
    payload: {
      iss: env('REVOLUT_REDIRECT_URI'),
      sub: env('REVOLUT_CLIENT_ID'),
      aud: env('REVOLUT_AUD'),
    },
    signOptions: {
      expiresIn: env('REVOLUT_TOKEN_EXPIRES'),
      algorithm: env('REVOLUT_ALGORITHM'),
    },
    clientAssertionType: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
    code: 'oa_sand_vppaSr_2_HDZxo69PypFI5DlZDRo6g6tuSHgJv_WQzc',
    grantType: 'authorization_code',
    clientId: env('REVOLUT_CLIENT_ID'),
    token: env('REVOLUT_TOKEN'),
    refreshToken: env('REVOLUT_REFRESH_TOKEN'),
  },
};

module.exports = config;
