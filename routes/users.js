const express = require('express')
const router = express.Router()
const servicesUsers = require('../services/users')

router.get('/', async (req, res, next) => {
  try {
    const users = await servicesUsers.getAllUsers(req, res)
    return res.send({users})
  } catch (error) {
    next(error)
  }
})
module.exports = router
