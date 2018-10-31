const Venue = require('../models/venue');

function createReview(req, res) {
  Venue.findById(req.params.venueId)
    .then(venue => {
      console.log('Creating a review', venue, req.body);
      venue.reviews.push(req.body);
      venue.save().then(() => res.redirect(`/venues/${req.params.venueId}`));
    });
}

function deleteReview(req, res) {
  console.log('Deleting review', req.params.reviewId);
  Venue
    .findById(req.params.venueId)
    .then(venue => {
      venue.reviews.id(req.params.reviewId).remove();
      venue.save()
        .then(() => res.redirect(`/venues/${req.params.venueId}`));
    });
}

module.exports = {
  createReviewRoute: createReview,
  deleteReviewRoute: deleteReview
};
