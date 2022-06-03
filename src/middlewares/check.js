const checkParams = async (req, res, next) => {
  try {
    if (!req.body.dna) {
      throw new Error("Missing DNA body");
    }
    const validDNA = ["A", "T", "C", "G"];
    req.body.dna.map((line) => {
      const val = line.split("");

      val.some((x) => {
        if (!validDNA.includes(x)) {
          return res.status(400).json({ message: "Bad request body" });
        }
      });
    });

    return next();
  } catch (error) {
    return next(error);
  }
};

const checkStats = async (req, res, next) => {
  // alguna verificacion
  return next();
};

module.exports = { checkParams, checkStats };
