const express = require('express')
const IdeiaController = require('../controllers/IdeiaController')
const router = express.Router()

// helpers
// const checkAuth = require('../helpers/auth').checkAuth
const {checkAuth} = require('../helpers/auth')

router.get('/dashboard', checkAuth, IdeiaController.dashboard)
router.get('/', IdeiaController.showIdeias)

module.exports = router
