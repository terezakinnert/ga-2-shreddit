// const User = require('../models/user');

function registerFormRoute(req, res) {
  res.render('auth/register');
}

// function registerRoute(req, res) {
//
// }
//
//
//
//
function loginFormRoute(req, res) {
  res.render('auth/login');
}
//
//
// loginRoute
//

module.exports = {
  registerFormRoute: registerFormRoute,
  // registerRoute: registerRoute,
  loginFormRoute: loginFormRoute
  // loginRoute: loginRoute
};
