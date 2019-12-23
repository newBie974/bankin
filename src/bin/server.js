const fastify = require('fastify')({ logger: true });
const helmet = require('fastify-helmet');
const cors = require('fastify-cors');
const jwt = require('jsonwebtoken');
const superagent = require('superagent');
const database = require('../database');
const config = require('../config');

const Clients = require('../clients');
const Revolut = require('../modules/revolut-b2b');

async function server() {
  try {
    const { revolutConfig, clients: clientsConfig } = config;
    const { revolutClient } = Clients({
      superagent,
      clientsConfig,
      revolutConfig,
      jwt,
    });
    Revolut({
      fastify,
      database,
      revolutClient,
    });

    fastify.register(helmet);
    fastify.register(cors, {
      origin: 'http://localhost:8080', // this part would help for gateway :)
    });
    await fastify.listen(config.app.port || 3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit();
  }
}

server();
