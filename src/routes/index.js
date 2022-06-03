const { Router } = require("express");
const router = Router();
const mutantController = require("../controllers/index");
const { checkParams, checkStats } = require("../middlewares/check");

router.post("/isMutant", checkParams, mutantController.isMutant);
router.get("/stats", checkStats, mutantController.stats);

module.exports = router;
