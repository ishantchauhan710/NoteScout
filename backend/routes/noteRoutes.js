const express = require('express');
const { getNotes, createNote, getNoteById, updateNote, deleteNote } = require('../controllers/noteControllers');
const { authMiddleware } = require('../middlewares/authMiddlewares');

const router = express.Router();
router.route('/').get(authMiddleware,getNotes);
router.route('/createNote').post(authMiddleware,createNote);

router.route("/:id").get(authMiddleware,getNoteById)
router.route("/:id").put(authMiddleware,updateNote);
router.route("/:id").delete(authMiddleware,deleteNote);





module.exports = router;