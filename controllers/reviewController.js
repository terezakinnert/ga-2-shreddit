const Venue = require('../models/venue');

function createReview(req, res) {
  Venue.findById(req.params.venueId)
    .then(venue => {
      console.log('Creating a review', venue, req.body);
      venue.reviews.push(req.body);
      venue.save().then(() => res.redirect(`/venues/${req.params.venueId}`));
    });
}



module.exports = {
  createReviewRoute: createReview
};
