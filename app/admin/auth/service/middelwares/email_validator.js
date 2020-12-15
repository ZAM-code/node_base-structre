// pakeges

let _ = require('lodash');

// routes

let User_Model = require("./../../Model/User")

//code

module.exports = async (req, res, next) => {

    let body_email = _.get(req , 'body.email')
    let user =await User_Model.findOne({email : body_email})
    if (user) {
        return next("email already exist")
    }
    else{
        return next()
    }
    
};
