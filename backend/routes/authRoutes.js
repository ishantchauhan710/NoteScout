const express = require('express');
const {registerUserController } = require('../controllers/authControllers.js');
const router = express.Router();

router.route('/').post(registerUserController);

module.exports = router;
