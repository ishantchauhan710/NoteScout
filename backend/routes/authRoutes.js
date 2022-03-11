const express = require('express');
const {registerUserController, loginUserController } = require('../controllers/authControllers.js');
const router = express.Router();

router.route('/').post(registerUserController);
router.route('/login').post(loginUserController);


module.exports = router;
