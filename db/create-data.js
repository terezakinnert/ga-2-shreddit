const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);
const Venue = require('../models/venue');

Venue.collection.drop();

const venueData = [
  {
    name: 'The Windmill',
    address: '22 Blenheim Gardens, London SW2 5BZ',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Windmill%2C_Brixton_Hill%2C_SW2_%283151353450%29.jpg/1200px-Windmill%2C_Brixton_Hill%2C_SW2_%283151353450%29.jpg',
    website: 'https://www.windmillbrixton.co.uk/',
    capacity: 70,
    closestTube: 'Brixton',
    description: `The pub didn’t set out to be a venue as such but live music there,
    just kinda evolved. Late night sessions at this bar revealed that the regulars carried a wealth
    of experience in musicianship, sound engineering and promoting, and since they drank there anyway
    they decided that they should get a good band down now and again to listen to. The bands came.
    They loved the informality and the fact that the venue bothered to pay them, and, some five years
    later the Windmill is known far beyond the backstreet in Brixton where it’s situated.`
  },
  {
    name: 'The Victoria',
    address: '451 Queensbridge Rd, London E8 3AS',
    image: 'https://i0.wp.com/www.jaguarshoes.com/wp-content/uploads/2017/03/20170928-01-Ph-CFaruolo.jpg?fit=2048%2C1367',
    website: 'http://www.jaguarshoes.com/venue/the-victoria/',
    capacity: 150,
    closestTube: 'Dalston Junction',
    description: `The stunning 50’s bar island takes centre stage in the venue, illuminated,
    and boasting the kind of drinks offer you’d expect to find; JaguarShoes classic cocktails,
    locally brewed craft beers and a selection of new and old world wines. The VICTORIA has a
    long standing heritage as a music venue, we plan to maintain that under JaguarShoes,
    but it’s also a great pub and it feels like for a long time that’s been overlooked.`
  },
  {
    name: 'The Black Heart',
    address: '3 Greenland Pl, Camden Town, London NW1 0AP',
    image: 'https://48cdp72nsn98y4xzwvlsdhp1-wpengine.netdna-ssl.com/wp-content/uploads/sites/13/2014/04/Black-Heart-lo.jpg',
    website: 'http://www.ourblackheart.com',
    capacity: 70,
    closestTube: 'Camden Town',
    description: `Rock pub in a narrow street around the corner from Camden Town station. Separate
    venue space upstairs with a smaller bar.`
  }];

Venue.create(venueData)
  .then(result => {
    console.log(`Created ${result.length} venues!`);
    mongoose.connection.close();
  });
