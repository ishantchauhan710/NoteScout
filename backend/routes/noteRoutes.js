const express = require('express');
const { getNotes, createNote } = require('../controllers/noteControllers');
const { authMiddleware } = require('../middlewares/authMiddlewares');

const router = express.Router();
router.route('/').get(authMiddleware,getNotes);
router.route('/createNote').post(authMiddleware,createNote);




module.exports = router;