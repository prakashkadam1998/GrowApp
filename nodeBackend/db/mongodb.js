const mongoose = require('mongoose');
require('dotenv').config();
async function connect(){
    await mongoose.connect(process.env.MongoURL);
}

connect().then((res)=>{
   // console.log(res);
})  
.catch(err=>{
    console.log(err);
})