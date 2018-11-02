const Venue = require('../models/venue');

function createReview(req, res) {
  Venue.findById(req.params.venueId)
    .then(venue => {
      venue.reviews.push(req.body);
      venue.save().then(() => res.redirect(`/venues/${req.params.venueId}`));
    });
}

function deleteReview(req, res) {
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
