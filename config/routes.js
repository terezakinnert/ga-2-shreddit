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

router.get('/new', venueController.newRoute);

router.route('/venues/:id')
  .get(venueController.showRoute)
  .put(venueController.updateRoute)
  .delete(venueController.deleteRoute);

router.get('/venues/:id/edit', venueController.editRoute);

router.post('/venues', venueController.createRoute);




module.exports = router;
