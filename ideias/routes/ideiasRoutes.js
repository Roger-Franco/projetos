const express = require('express')
const IdeiaController = require('../controllers/IdeiaController')
const router = express.Router()

// controller

router.get('/', IdeiaController.showIdeias)

module.exports = router
