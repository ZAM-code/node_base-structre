// pakeges

let _ = require('lodash');

// routes

let User_Model = require("./../../Model/User")

//code

module.exports = async (req, res, next) => {

    let body_shop_name = _.get(req , 'body.shop_name')
    let user =await User_Model.findOne({shop_name : body_shop_name})
    if (user) {
        return next("shop_name already exist try different shop name")
    }
    else{
        return next()
    }
    
};
