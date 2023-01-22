const  mongoose  = require("mongoose");
const validator = require("validator");

//structure of schema 

const Contact =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true, // to remove extra space staring or ending
        minLength:5,
    },
    email:{
        type:String,
        required:true,
        // validator
        validate(value){
            // if email is not valid then throw error
            if(!validator.isEmail(value)){
                throw new Error("Invalid email Id")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10,
    },
    message:{
        type:String,
        trim:true,
        minLength:3,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// crete a new collection
const User = new mongoose.model("User",Contact);    // Users must be  first capital leter and singular form

module.exports = User;