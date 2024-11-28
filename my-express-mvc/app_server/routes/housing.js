const express = require("express");
const router = express.Router();
const housingController = require ("../controllers/controllerHousing");

router.get("/", housingController.index);
router.get('/:id',  housingController.tambah);

module.exports = router;