const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");

const getNotes = asyncHandler(
    async(req,res) => {
        const notes = await Note.find({noteUser: req.user._id});
        res.json(notes);
    }
);

const createNote = asyncHandler(async(req,res) => {
    const {noteTitle,noteContent,noteCategory,noteImageLink} = req.body;
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
        const note = new Note({noteOwner: req.user._id,noteTitle: noteTitle,noteContent: noteContent, noteCategory: noteCategory,noteImageLink: noteImageLink});
        const createdNote = await note.save();
        res.status(201).json(createdNote);
    }
});

const getNoteById = asyncHandler(async(req,res) => {
    const note = await Note.findById(req.params.id);
    if(note) {
        res.json(note);
    } else {
        res.status(404).json({message: "Note not found"});
    }
});

const updateNote = asyncHandler(async(req,res) => {
    const {noteTitle,noteContent,noteCategory} = req.body;
    const note = await Note.findById(req.params.id);

    if(note) {

        if(note.noteOwner.toString()!==req.user._id.toString()) {
            res.status(401);
            throw new Error("Permission denied");
        } else {
            note.noteTitle = noteTitle
            note.noteContent = noteContent
            note.noteCategory = noteCategory
            const updatedNote = await note.save();
            console.log('Success');
            res.status(200).json(updatedNote);
        }

    } else {
        res.status(404);
        throw new Error("Note not found");
    }

});

const deleteNote = asyncHandler(async(req,res) => {
    const note = await Note.findById(req.params.id);
    if(note) {

        if(note.noteOwner.toString()!==req.user._id.toString()) {
            res.status(401);
            throw new Error("Permission denied");
        } else {
            await note.remove();
            res.status(200).json({message: "Note deleted successfully"});
        }

    } else {
        res.status(404);
        throw new Error("Note not found");
    }

})

module.exports = {getNotes, createNote,getNoteById,updateNote,deleteNote};