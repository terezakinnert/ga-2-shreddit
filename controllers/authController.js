const User = require('../models/user');

function registerFormRoute(req, res) {
  res.render('auth/register');
}

function registerRoute(req, res) {
  User.create(req.body)
    .then(result => {
      console.log(`User created ${result}`);
      res.redirect('/login');
    });
}

function loginFormRoute(req, res) {
  res.render('auth/login');
}

function loginRoute(req, res) {
  User.findOne({ email: req.body.email })
    .then(result => {
      if (!result) {
        res.redirect('/login');
      } else {
        req.session.userId = result._id;
        res.redirect('/');
      }
    });
}

function logoutRoute(req, res, next) {
  req.session.regenerate(function() {
    res.redirect('/');
    next();
  });
}

module.exports = {
  registerFormRoute: registerFormRoute,
  registerRoute: registerRoute,
  loginFormRoute: loginFormRoute,
  loginRoute: loginRoute,
  logoutRoute: logoutRoute
};
