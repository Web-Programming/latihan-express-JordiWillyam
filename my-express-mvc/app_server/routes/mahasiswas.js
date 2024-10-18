const express = require("express");
const router = express.Router();
const mahasiswaController = require ("../controllers/controllerMahasiswa");

// fungsi dam rute index kita gunakan untuk memanggil semua data dalam database mongoDB
router.get("/mahasiswa", mahasiswaController.Index);
module.exports = router;