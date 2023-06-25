const Joi = require("joi");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const registerSchema = Joi.object({
  email: Joi.string().pattern(emailRegex),
  password: Joi.string().min(7).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegex),
  password: Joi.string().min(7).required(),
});

const subscriptionCheckSchema = Joi.object({
  subscription: Joi.string().required(),
});

module.exports = { registerSchema, loginSchema, subscriptionCheckSchema };
