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
    closestTube: 'Camden Town',
    description: 'all kinds of cool stuff in Camden'
  }];

Venue.create(venueData)
  .then(result => {
    console.log(`Created ${result.length} venues!`);
    mongoose.connection.close();
  });
