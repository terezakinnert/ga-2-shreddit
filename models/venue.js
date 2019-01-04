const mongoose = require('mongoose');

const venueSchema = mongoose.Schema({
  name: String,
  address: String,
  image: String,
  website: String,
  capacity: Number,
  closestTube: String,
  description: String,
  reviews: [
    {
      username: String,
      title: String,
      content: String,
      rating: { type: Number, min: 1, max: 5},
      image: String
    }
  ]
});

const venueModel = mongoose.model('Venue', venueSchema);
module.exports = venueModel;
