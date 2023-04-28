const express = require('express')
const AuthController = require('../controllers/AuthController')
const router = express.Router()

// controller

router.get('/login', AuthController.login)
router.get('/register', AuthController.register)
router.post('/register', AuthController.registerPost)
router.get('/logout', AuthController.logout)

module.exports = router
