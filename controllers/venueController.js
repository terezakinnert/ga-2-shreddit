const Venue = require('../models/venue');

function indexRoute(req, res) {
  Venue.find().then(venues => {
    const venueObject = {
      venues: venues
    };
    res.render('venues/index', venueObject);
  });
}

module.exports = {
  indexRoute: indexRoute
};
