var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Halaman Beranda' });
});

// Paket Wisata Page
router.get('/paketwisata', function(req, res, next) {
  res.render('paketwisata', { title: 'Paket Wisata' });
});

// Order Paket Page
router.get('/orderpaket', function(req, res, next) {
  res.render('orderpaket', { title: 'Form Pemesanan Paket' });
});

// Order Detail Page (POST - Mengambil data dari orderpaket)
router.post('/orderdetail', function(req, res, next) {
  res.render('orderdetail', { title: 'Detail Pemesanan Paket' });
});

module.exports = router;
