const { Client } = require("pg");

const connectionData = {
  user: "postgres",
  host: "localhost",
  database: "ficohsa",
  password: "postgres",
  port: 5432,
};
const client = new Client(connectionData);

module.exports = client;
