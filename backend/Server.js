const express = require('express');
const app = express();
const dotenv = require('dotenv');
const dummyNotes = require('./util/DummyNotes');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const { notFoundMiddleware, errorHandlerMiddleware } = require('./middlewares/errorMiddlewares');

app.use(express.json());

dotenv.config();
connectDB();

const PORT = process.env.PORT;

// app.get("/",(req,res)=>{
//     res.send("API is running");
// });



// app.get("/api/notes",(req,res)=>{
//     res.json(dummyNotes);
// });

// app.get("/api/notes/:noteId",(req,res)=>{
//     const note = dummyNotes.find((obj) => obj._id === req.params.noteId);
//     res.send(note);
// });

app.use('/api/auth',authRoutes);


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



app.listen(PORT);