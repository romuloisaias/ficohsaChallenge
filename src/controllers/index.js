const matrixDNAS = require("../functions/functions");
const conexion = require("../connection/connection");

const isMutant = async (req, res, next) => {
  try {
    let flagMutant = false;
    let diag = [];

    let newMatrix = matrixDNAS(req.body.dna);
    for (let i = 0; i < newMatrix.length; i++) {
      let countX = 0;

      const el = newMatrix[i];
      diag.push(el[i]);

      for (let j = 0; j < el.length; j++) {
        const x = el[j];
        if (j < 5 && x === el[j + 1]) {
          countX++;
        } else {
          countX = 0;
        }
        if (countX === 3) {
          flagMutant = true;
          console.log("horizontal");
        }
      }
    }
    let countDiag = 0;
    for (let d = 0; d < diag.length; d++) {
      const el = diag[d];
      if (d < 5 && el === diag[d + 1]) {
        countDiag++;
      } else {
        countDiag = 0;
      }
      if (countDiag === 3) {
        flagMutant = true;
        console.log("diagonal");
      }
    }

    for (let i = 0; i < newMatrix.length; i++) {
      let countY = 0;
      const el = newMatrix[i];
      for (let j = 0; j < el.length; j++) {
        const elem = newMatrix[j][i];
        if (j < 5 && elem === newMatrix[j + 1][i]) {
          countY++;
        } else {
          countY = 0;
        }
        if (countY === 3) {
          flagMutant = true;
          console.log("vertical");
        }
      }
    }
    console.log(JSON.stringify(req.body.dna));
    conexion.query(
      "INSERT INTO dna (dna, mutant) VALUES(?, ?)",
      [JSON.stringify(req.body.dna), flagMutant],
      function (error, results, fields) {
        if (error) throw error;
      }
    );

    if (flagMutant) {
      res.status(200).end("OK");
    } else {
      res.status(403).send("Forbbiden");
    }
  } catch (error) {
    console.log(error);
  }
};

const stats = (req, res) => {
  try {
    let query = "SELECT * FROM dna";
    let response = {};
    let mutants = 0;
    let humans = 0;

    conexion.query(query, (err, rows) => {
      if (err) throw err;
      rows.forEach((data) => {
        if (data.mutant) {
          mutants++;
        } else {
          humans++;
        }
      });
      response.count_mutants_dna = mutants;
      response.count_human_dna = humans;
      response.ratio = parseInt(mutants) / parseInt(humans);
      res.status(200).send(response);
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { isMutant, stats };
