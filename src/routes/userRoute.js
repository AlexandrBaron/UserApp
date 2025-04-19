const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers); // <- odpovídá na GET /users
router.post('/', userController.createUser);

module.exports = router;
