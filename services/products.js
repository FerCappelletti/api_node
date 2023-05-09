const boom = require('@hapi/boom');
const pool = require('../libs/postgres');

const getAllProducts = async (req, res) => {
  try {
    const query = 'SELECT * FROM tasks'
    const response = await pool.query(query)
    return response.rows
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
