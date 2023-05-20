const router = require('express').Router()
const authController = require('../controllers/AuthController')


router.get('/register', authController.registerPage)

module.exports = router
