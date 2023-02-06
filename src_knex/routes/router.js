const express = require('express')
const userController = require('../controller/userController.js')

const router = express.Router()

router.get('/:id', userController.showById)
router.delete('/:id', userController.deleteById)
router.get('/', userController.showAllUsers)
router.post('/create', userController.createUser)

module.exports = router;