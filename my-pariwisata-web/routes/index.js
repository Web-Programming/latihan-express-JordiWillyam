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
  // Mengambil data dari form yang dikirim melalui req.body
  const { package, name, email, pnumber, date, payment } = req.body;

  // Kirim data ke template orderdetail.ejs
  res.render('orderdetail', { 
    title: 'Detail Pemesanan Paket', 
    package, 
    name, 
    email, 
    pnumber, 
    date, 
    payment 
  });
});

module.exports = router;
