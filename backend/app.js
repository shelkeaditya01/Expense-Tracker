const express=require('express');
const cors=require('cors');

const {readdirSync}=require('fs');
require('dotenv').config()
const db=require('./db/db');

const PORT=process.env.PORT || 8080;

const app=express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
readdirSync('./Routes').map((route)=>app.use('/api/v1', require('./Routes/'+route)))

const server=()=>{
    db();
    app.listen(PORT,()=>{
        console.log('Running at the PORT:', PORT);
    })
}

server();