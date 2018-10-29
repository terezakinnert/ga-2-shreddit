const router = require('express').Router();

router.get('/', function(req, res) {
  res.render('home');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/index', function(req, res) {
  res.render('index');
});

module.exports = router;
