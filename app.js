const express = require ("express");  
const app=express();
const abc=require('./routes/post');
const BP=require("body-parser");
const mongoose=require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

//middleware
app.use(BP.json());
app.use(cors());

//Import route

app.use('/post',abc);

// ROUTES

app.get('/',(req,res)=>{
    res.send('we are at home');
});

//connect to db
mongoose.connect(process.env.DB_connection,
    { useNewUrlParser: true ,useUnifiedTopology: true  },
    ()=> console.log('connected to DB'));

// How to boot up the server ?
app.listen(3000,()=>{
    console.log('server running')
});
