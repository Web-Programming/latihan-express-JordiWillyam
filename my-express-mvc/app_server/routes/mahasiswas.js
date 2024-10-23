const express = require("express");
const router = express.Router();
const mahasiswaController = require ("../controllers/mahasiswaController");

router.get("/", mahasiswaController.index); //list mahasiswa
router.post("/insert", mahasiswaController.insert); //insert mahasiswa

// UTS hanya get dan post saja indec dan insert
router.patch("/update/:id", mahasiswaController.update); //mengupdate mahasiswa
router.get("/show/:id", mahasiswaController.show); //show detail mahasiswa by id
router.delete("/delete/:id", mahasiswaController.destroy); //delete mahasiswa by id

// fungsi dam rute index kita gunakan untuk memanggil semua data dalam database mongoDB

module.exports = router;