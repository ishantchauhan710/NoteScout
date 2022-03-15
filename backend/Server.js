const express = require('express');
const app = express();
const dotenv = require('dotenv');
const dummyNotes = require('./util/DummyNotes');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');

const { notFoundMiddleware, errorHandlerMiddleware } = require('./middlewares/errorMiddlewares');

const path = require('path');

app.use(express.json());

dotenv.config();
connectDB();

const PORT = process.env.PORT;

app.use('/api/auth',authRoutes);
app.use("/api/notes",noteRoutes);


__dirname = path.resolve();
if(process.env.NODE_ENV==='production') {
    console.log("Server running in production mode");
    app.use(express.static(path.join(__dirname,'/frontend/build')));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
    })
} else {
    console.log("Server running in development mode");
}



app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



app.listen(PORT);