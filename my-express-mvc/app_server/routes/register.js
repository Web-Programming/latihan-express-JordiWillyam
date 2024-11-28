// routes/registerRouter.js
const express = require('express');
const router = express.Router();
const controllerRegister = require('../controllers/controllerRegister');

// Route untuk menyimpan data registrasi
router.post('/register', controllerRegister.insert);
module.exports = router;