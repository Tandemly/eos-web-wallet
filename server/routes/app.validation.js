const Joi = require("joi");

module.exports = {
  // POST /app/register
  register: {
    body: {
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .required()
        .min(6)
        .max(128),
      display_name: Joi.string().allow(""),
      about: Joi.string().allow(""),
      location: Joi.string().allow(""),
      website: Joi.string().allow(""),
      image_url: Joi.string().allow(""),
      phone: Joi.string().allow("")
    }
  },

  // PUT /app/profile
  update: {
    body: {
      email: Joi.string()
        .email()
        .required(),
      display_name: Joi.string().allow(""),
      about: Joi.string().allow(""),
      location: Joi.string().allow(""),
      website: Joi.string().allow(""),
      image_url: Joi.string().allow(""),
      phone: Joi.string().allow("")
    }
  },

  // GET /app/profile/:email
  getProfile: {
    params: {
      email: Joi.string()
        .email()
        .required()
    }
  },

  // POST /app/login
  login: {
    body: {
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .required()
        .min(6)
        .max(128)
    }
  }
};
