const Joi = require('joi')

const id = Joi.number();
const name = Joi.string();
const lastName = Joi.string();
const phone = Joi.number();
const email = Joi.string().email()
const password = Joi.string()
const user_id = Joi.number()

const getCustomerSchema = Joi.object({
  id: id.required()
})

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required()
  })
})

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
  user_id
})

module.exports = { getCustomerSchema, createCustomerSchema, updateCustomerSchema };
