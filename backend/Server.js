const express = require('express');
const app = express();
const dotenv = require('dotenv');
const dummyNotes = require('./util/DummyNotes');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');

const { notFoundMiddleware, errorHandlerMiddleware } = require('./middlewares/errorMiddlewares');

app.use(express.json());

dotenv.config();
connectDB();

const PORT = process.env.PORT;


app.use('/api/auth',authRoutes);


app.use("/api/notes",noteRoutes);

console.log("Server running");
console.log("Server running 2");




app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



app.listen(PORT);