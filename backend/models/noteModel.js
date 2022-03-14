const { default: mongoose } = require("mongoose");

const noteSchema = mongoose.Schema(
    {
        noteTitle: {
            type: String,
            required: true
        },
        noteContent: {
            type: String,
            required: true
        },
        noteCategory: {
            type: String,
            required: true
        },
        noteOwner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        noteImageURL: {
            type: String,
            required: true
        }
    },
    {timeStamps: true}
);

const Note = mongoose.model('Note',noteSchema);
module.exports = Note;