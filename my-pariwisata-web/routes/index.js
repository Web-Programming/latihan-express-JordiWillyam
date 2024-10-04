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

router.get('/paketwisata2', function(req, res, next) {
  let listpaketwisata = [
    {'nama' : 'Wisata Pulau Kemaro', 'harga' : 500000},
    {'nama' : 'Wisata Punti Kayu', 'harga' : 250000},
    {'nama' : 'Wisata Jakabaring', 'harga' : 100000}
  ]
  res.render('paketwisata2', { title: 'Paket Wisata 2' , listpaketwisata : listpaketwisata});
});

module.exports = router;
