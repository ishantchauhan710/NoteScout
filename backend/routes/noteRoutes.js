const express = require('express');
const { getNotes } = require('../controllers/noteControllers');
const { authMiddleware } = require('../middlewares/authMiddlewares');

const router = express.Router();
router.route('/').get(authMiddleware,getNotes);



module.exports = router;