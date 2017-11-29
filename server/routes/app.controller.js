const httpStatus = require("http-status");
const { pick, omit } = require('lodash');
const Profile = require("../models/profiles.model");
const moment = require("moment-timezone");
const APIError = require("../APIError");

const allowedFields = [
  "display_name",
  "image_url",
  "phone",
  "about",
  "location",
  "website",
];

/**
 * Returns success if able to create new user
 * @public
 */
exports.register = async (req, res, next) => {
  try {
    const profile = await new Profile(req.body).save();
    res.status(httpStatus.CREATED);
    return res.json(profile.transform());
  } catch (error) {
    console.log("-> error:", error);
    return next(Profile.checkDuplicateEmail(error));
  }
};

/**
 * Returns valid profile if email/password match
 * existing user
 * @public
 */
exports.login = async (req, res, next) => {
  try {
    const profile = await Profile.findAndValidate(req.body);
    req.session.authenticated = true; 
    req.session.user = pick(profile, ['id', 'email']);
    console.log(`(set) session (${req.session.id}):`, JSON.stringify(req.session, null, 2));
    res.status(httpStatus.CREATED);
    return res.json(profile.transform());
  } catch (error) {
    return next(Profile.checkDuplicateEmail(error));
  }
};

exports.updateProfile = async (req, res, next) => {
  try {
    console.log(`(get) session (${req.session.id}):`, JSON.stringify(req.session, null, 2));
    const query = { 'email': req.body.email };
    // const data = omit(req.body, ['email', 'password', 'id']);
    const data = pick(req.body, allowedFields)
    const profile = await Profile.findOneAndUpdate(query, data, { upsert: true, new: true });
    res.status(httpStatus.OK);
    return res.json(profile.transform());
  }
  catch (error) {
    console.log('error:', error);
    res.status(httpStatus.NOT_FOUND);
    return res.json({ message: 'User profile not found' });
  }
};

exports.logout = async (req, res, next) => {
  console.log(`(get) session (${req.session.id}):`, JSON.stringify(req.session, null, 2));
  if (req.session && req.session.authenticated) {
    delete req.session.authenticated;
    delete req.session.user;
  }
  res.status(httpStatus.OK);
  return res.json({ message: 'session terminated' })
}
