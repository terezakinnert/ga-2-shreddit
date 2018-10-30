const Venue = require('../models/venue');

function indexRoute(req, res) {
  Venue.find().then(venues => {
    const venueObject = {
      venues: venues
    };
    res.render('venues/index', venueObject);
  });
}

function showRoute(req, res) {
  Venue
    .findById(req.params.id)
    .then(venue => {
      res.render('venues/show', venue);
    });
}

function newRoute(req, res) {
  res.render('venues/new');
}



module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute,
  newRoute: newRoute
};
