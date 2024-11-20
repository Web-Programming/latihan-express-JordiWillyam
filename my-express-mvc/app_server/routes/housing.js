const express = require("express");
const router = express.Router();
const housingController = require ("../controllers/controllerHousing");

router.get("/", housingController.index);

module.exports = router;