var mysql = require("mysql");
var conexion = mysql.createConnection({
  host: "localhost",
  database: "ficohsa",
  user: "root",
  password: "pollux123",
});

conexion.connect(function (err) {
  if (err) {
    console.error("Error de conexion: " + err.stack);
    return;
  }
  console.log("Conectado con el identificador " + conexion.threadId);
});

module.exports = conexion;
