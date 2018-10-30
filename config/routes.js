const router = require('express').Router();
const venueController = require('../controllers/venueController');
const authController = require('../controllers/authController');

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

router.post('/venues', venueController.createRoute);

router.get('/venues/:id/edit', venueController.editRoute);

router.route('/register')
  .get(authController.registerFormRoute)
  .post(authController.registerRoute);

router.route('/login')
  .get(authController.loginFormRoute)
  .post(authController.loginRoute);




module.exports = router;
