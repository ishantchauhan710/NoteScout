const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");

const getNotes = asyncHandler(
    async(req,res) => {
        const notes = await Note.find({noteUser: req.user._id});
        res.json(notes);
    }
);

const createNote = asyncHandler(async(req,res) => {
    const {noteTitle,noteContent,noteCategory} = req.body;
    if(!noteTitle) {
        res.status(400);
        throw new Error("You must provide a title for your note");
    } else if(!noteContent) {
        res.status(400);
        throw new Error("You must provide a content for your note");
    } else if(!noteCategory) {
        res.status(400);
        throw new Error("You must provide a category for your note");
    } else {
        const note = new Note({noteOwner: req.user._id,noteTitle: noteTitle,noteContent: noteContent, noteCategory: noteCategory});
        const createdNote = await note.save();
        res.status(201).json(createdNote);
    }
});

module.exports = {getNotes, createNote};