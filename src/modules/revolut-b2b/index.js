const Repository = require('./repository');
const Services = require('./services');
const Handlers = require('./handlers');
const Routers = require('./routers');

function Revolut({
  fastify,
  database,
  revolutClient,
}) {
  const repository = Repository(database);
  const services = Services(repository, revolutClient);
  const handlers = Handlers(services);
  const routers = Routers(fastify, handlers);
  routers.starts();
}

module.exports = Revolut;
