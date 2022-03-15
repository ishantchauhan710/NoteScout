const express = require('express');
const { getNotes, createNote, getNoteById, updateNote, deleteNote } = require('../controllers/noteControllers');
const { authMiddleware } = require('../middlewares/authMiddlewares');

const router = express.Router();
router.route('/').get(authMiddleware,getNotes);
router.route('/createNote').post(authMiddleware,createNote);

router.route("/editnote/:id").get(authMiddleware,getNoteById);

router.route("/getnote/:id").get(authMiddleware,getNoteById);


router.route("/updatenote/:id").post(authMiddleware,updateNote);
router.route("/deletenote/:id").post(authMiddleware,deleteNote);





module.exports = router;