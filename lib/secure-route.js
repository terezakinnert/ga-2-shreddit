function secureRoute(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    console.log('User unauthorised');
    res.redirect('/login');
  }
}

module.exports = secureRoute;
