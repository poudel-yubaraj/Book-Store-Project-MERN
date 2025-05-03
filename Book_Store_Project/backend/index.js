const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5001;
const connectDB=require("./config/dbConnection");
connectDB();
app.use(cors())
app.use(express.json())
app.use('/', require('./routes/userRoutes'));

app.listen(port, ()=>{
    console.log(`The server is connected to the PORT ${port}`);
});