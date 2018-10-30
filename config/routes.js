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

router.route('/venues/:id')
  .get(venueController.showRoute)
  .put(venueController.updateRoute);

router.get('/new', venueController.newRoute);

router.post('/venues', venueController.createRoute);

router.get('/venues/:id/edit', venueController.editRoute);



module.exports = router;
