const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./src/routes/index");

const apiRequestLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10,
  handler: function (req, res /*next*/) {
    return res.status(429).json({
      error: "You sent too many requests. Please wait a while then try again",
    });
  },
});

app.use(apiRequestLimiter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routes);

const port = process.env.PORT || 3525;

app.listen(port, function () {
  console.log(`Server running in http://localhost:${port}`);
});
