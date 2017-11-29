const httpStatus = require("http-status");

// Middleware to ensure this request has a valid session
exports.checkAuth = (req, res, next) => {
  console.log(`Checking session (${req.session.id}:`, JSON.stringify(req.session, null, 2));
  if (!req.session || !req.session.authenticated) {
    console.log('Invalid session, redirecting: authenticated=', req.session.authenticated);
    res.status(httpStatus.UNAUTHORIZED);
    return res.json({ error: httpStatus.UNAUTHORIZED, message: 'Invalid login session'});
  }
  else {
    next();
  }
};