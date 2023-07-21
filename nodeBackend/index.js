require('./db/mongodb');
require('dotenv').config();
var cors = require('cors');


 
const bodyParser = require('body-parser');
const express = require('express');

const userR = require('./routes/userRoute');
const app = express();
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200,
 }
app.use(cors(corsOptions)) ;
app.use(bodyParser.urlencoded()); // always define before userRoute otherwise undefined in req.body
app.use(bodyParser.json());

//http://localhost:4500/users/
app.use('/users',userR);


app.listen(process.env.PORT,()=>{
    console.log('running');
})

// Flow : route->controller