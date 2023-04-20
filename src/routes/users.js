const express = require('express')
const router = express.Router()
const servicesUsers = require('../services/users')

router.get('/', async (req, res) => {
  const users = await servicesUsers.getAllUsers(req, res)
  res.json(users)
})
module.exports = router
