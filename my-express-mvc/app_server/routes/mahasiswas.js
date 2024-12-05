const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/controllerMahasiswa");

// Fungsi dan rute index kita gunakan untuk memanggil semua data dalam database MongoDB
//router.get("/mahasiswa", mahasiswaController.Index);


//const mahasiswaController = require('../controllers/mahasiswa'); 
    router.get("/", mahasiswaController.Index); //list mahasiswa 
    router.post("/insert", mahasiswaController.insert); //insert mahasiswa 
    // UTS sampai sini

    router.patch("/update/:id", mahasiswaController.update); //mengupdate mahasiswa 
    router.get("/show/:id", mahasiswaController.show); //show detail mahasiswa by id 
    router.delete("/delete/:id", mahasiswaController.destroy); //delete mahasiswa by id

module.exports = router;