import Joi from 'joi';

export const createShopSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    owner: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^\+380\d{9}$/).required()
      .messages({
        'string.pattern.base': 'Phone number must be in the format +380XXXXXXXXX'
      }),
    address: Joi.string().required(),
    city: Joi.string().required(),
    zip: Joi.string().pattern(/^\d{5}$/).required()
      .messages({
        'string.pattern.base': 'Zip code must be exactly 5 digits'
      }),
    delivery: Joi.boolean().required(),
  });


