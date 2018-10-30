const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);
const Venue = require('../models/venue');

Venue.collection.drop();

const venueData = [
  {
    name: 'The Windmill',
    address: '22 Blenheim Gardens, London SW2 5BZ',
    image: '',
    website: 'https://www.windmillbrixton.co.uk/',
    capacity: 70,
    closestTube: 'Brixton',
    description: 'all kinds of cool stuff in Brixton'
  },
  {
    name: 'The Black Heart',
    address: '3 Greenland Pl, Camden Town, London NW1 0AP',
    image: '',
    website: 'http://www.ourblackheart.com',
    capacity: 70,
    closestTube: 'Camden',
    description: 'all kinds of cool stuff in Camden'
  }];

Venue.create(venueData)
  .then(result => {
    console.log(`Created ${result.length} venues!`);
    mongoose.connection.close();
  });


// ======================
// name: String,
// address: String,
// image: String,
// website: String,
// // social links?
// capacity: Number,
// closestTube: String,
// description: String,
// avgRating: Number,
// review: [
//   {
//     username: String,
//     title: String,
//     content: String,
//     rating: { type: Number, min: 1, max: 5},
//     image: String,
//     date: String
//   }
// ]
