const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    email:
    {
        type:String,
        required:true
    },
    password:{
        type:password,
        required:true
    },

})

const User = mongoose.model('User',UserSchema)
module.exports=User