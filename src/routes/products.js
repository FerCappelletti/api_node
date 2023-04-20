const express = require('express');
const router = express.Router();
const productServices = require('../services/products')

router.get('/', async (req, res) => {
  const products = await productServices.getAllProducts(req, res)
  res.json(products)
})

router.post('/', async (req, res) => {
  const product = await productServices.createProduct(req, res)
  return res.json({
    message: 'Product created',
    product
  })
})

router.get('/:id', async (req, res) => {
  const product = await productServices.getProductById(req, res)
  return res.json(product)
})

router.patch('/:id', async (req, res) => {
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
