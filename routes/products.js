const express = require('express');
const router = express.Router();
const productServices = require('../services/products')
const validatorHandler = require('../middlewares/validator_handler')
const {schemaNewProduct, schemaGetProduct, schemaUpdate} = require('../schemas/product')

router.get('/', async (req, res, next) => {
  try {
    const price = price()
    const products = await productServices.getAllProducts(req, res)
    res.json(products)
  } catch (error) {
    next(error)
  }
})

router.post('/',validatorHandler(schemaGetProduct, 'params'), validatorHandler(schemaNewProduct, 'body'), async (req, res) => {
  const product = await productServices.createProduct(req, res)
  return res.json(product)
})

router.get('/:id', validatorHandler(schemaGetProduct, 'params'),async (req, res) => {
  const product = await productServices.getProductById(req, res)
  return res.json(product)
})

router.patch('/:id', validatorHandler(schemaUpdate, 'params'), async (req, res) => {
  const productUpdated = await productServices.updateProducrById(req, res)
  return res.json({
    message: 'Product updated succesfully',
    productUpdated
  })
})

router.delete('/:id', async (req, res) => {
  const productDeleted = await productServices.deleteProductById(req, res)
  return res.send({
    message: 'Product deleted succesfully'
  })
})


module.exports = router
