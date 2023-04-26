const boom = require('@hapi/boom');

const getAllProducts = (req, res) => {
  try {
    const products = []
    const { size } = req.query
    const limit = size
    const {name, price, image} = req.body

    for(let i = 0; i<limit; i++){
      products.push({
        name, price, image
      })
    }
    return products
  } catch (error) {
    console.log(error)
  }

};

const createProduct = (req, res) => {
  try {
    const product = req.body
    return product
  } catch (error) {
    console.log(error)
  }
};

const getProductById = (req, res) => {
  try {
    const { id } = req.params
  res.json({
    'id': id,
    'name': 'Name',
    'price': 2000,
    'category': 'technology'
  })
  } catch (error) {
    console.log(error)
  }
};

const updateProducrById = (req, res) => {
  try {
    const {id} = req.params
    if(id != 1) throw boom.notFound('Product not found')
    const body = req.body
    res.json({
      message: 'success',
      product: body,
      id
    })
  } catch (error) {
    console.log(error)
  }
};

const deleteProductById = (req, res) => {
  try {
    const {id} = req.params
  res.json({
    message: 'deleted',
    id
  })
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProducrById,
  deleteProductById
}
