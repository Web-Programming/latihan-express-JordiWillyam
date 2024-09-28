var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page*/
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

// GET route for Contact Us page
router.get('/contact', (req, res) => {
  res.render('contact');
});

// POST route to handle form submission
router.post('/submit-contact', (req, res) => {
  const { name, email, message } = req.body;
  res.render('submit-contact', { name, email, message });
});

module.exports = router;
