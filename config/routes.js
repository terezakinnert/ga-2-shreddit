const router = require('express').Router();
const venueController = require('../controllers/venueController');

router.get('/', function(req, res) {
  res.render('home');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.route('/venues')
  .get(venueController.indexRoute);

module.exports = router;
