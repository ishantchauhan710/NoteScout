const express = require('express');
const app = express();
const dotenv = require('dotenv');
const dummyNotes = require('./util/DummyNotes');

dotenv.config();
const PORT = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("API is running");
});

app.get("/api/notes",(req,res)=>{
    res.json(dummyNotes);
});

app.get("/api/notes/:noteId",(req,res)=>{
    const note = dummyNotes.find((obj) => obj._id === req.params.noteId);
    res.send(note);
});




app.listen(PORT);