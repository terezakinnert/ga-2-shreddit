const mongoose = require('mongoose');

const venueSchema = mongoose.Schema({
  name: String,
  address: String,
  image: String,
  website: String,
  // social links?
  capacity: Number,
  closestTube: String,
  description: String,
  avgRating: Number,
  review: [
    {
      username: String,
      title: String,
      content: String,
      rating: { type: Number, min: 1, max: 5},
      image: String,
      date: String
    }
  ]
});


const venueModel = mongoose.Model('Venue', venueSchema);
module.exports = venueModel;
