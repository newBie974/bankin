const Revolut = require('./Revolut');

function Clients({
  superagent,
  clientsConfig,
  revolutConfig,
  jwt,
}) {
  const revolutClient = Revolut(superagent, clientsConfig, revolutConfig, jwt);
  return {
    revolutClient,
  };
}

module.exports = Clients;
