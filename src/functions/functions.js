let matrixDNAS = (array) => {
  let matrix = [];
  array.map((line, i) => {
    const el = line.split("");
    matrix.push(el);
  });
  return matrix;
};

module.exports = matrixDNAS