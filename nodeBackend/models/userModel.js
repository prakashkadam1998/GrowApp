const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema =new Schema({ 
    email:String,
    password:String,
    completeName:String,
    contact:Number,
    about : String,
    posts:[new Schema({
        content:String,
        privacy:String,
        postDate:Date
    }),
   
]
});

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;