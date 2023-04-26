const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().alphanum().min(3).max(10)
const price = Joi.number().integer().min(10)

const schemaNewProduct = Joi.object({
  name: name.required(),
  price: price.required()
})

const schemaUpdate = Joi.object({
  id: id.required(),
  name: name,
  price: price
})

const schemaGetProduct = Joi.object({
  id: id.required()
})

module.exports = {
  schemaNewProduct,
  schemaUpdate,
  schemaGetProduct
}
