const { Client } = require("pg");

const connectionData = {
  user: "zkfpflriwzgkul",
  host: "ec2-3-211-221-185.compute-1.amazonaws.com",
  database: "dardnfg7fcl5cv",
  password: "ad6945ab866dc16709db3b692b20ca6ba83756b1958e33c9a8969c9c0aad5227",
  port: 5432,
};
const client = new Client(connectionData);

module.exports = client;
