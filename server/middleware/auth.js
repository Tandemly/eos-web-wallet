
// Middleware to ensure this request has a valid session
exports.checkAuth = (req, res, next) => {
  console.log('Checking session:', JSON.stringify(req.session, null, 2));
  if (!req.session || !req.session.authenticated) {
    console.log('Invalid session, redirecting: authenticated=', req.session.authenticated);
    res.redirect('/login');
  }
  else {
    next();
  }
};