const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    //usernam : String
    user_name : {
        type : String,
        required : true
    } ,
    shop_name : {
        type : String,
        required : true,
        unique: true
        
    } ,
    area_name : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    region : {
        type : String,
        required : true
    } ,
    country : {
        type : String,
        required : true
    } ,
    profession : {
        type : String,
        required : false
    } ,
    expert : {
        type : String,
        required : false
    } ,
    email : {
        type : String,
        required : true,
        unique: true
        
    } ,
    password : {
        type : String,
        required : true
    } ,
   
    display_type : {
        type : String,
        default : "ImageAndContent"
    },
    logo : {
        type : String
    },
    isActive : {
        type : Boolean,
        default : true
    },
    createdOn : {
        type : Date,
        default : Date.now()
    }
});

// Model 



module.exports = mongoose.model('user', UserSchema);