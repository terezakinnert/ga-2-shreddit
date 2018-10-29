const router = require('express').Router();

router.get('/', function(req, res) {
  res.send('Welcome to ShreddIt');
});

module.exports = router;
