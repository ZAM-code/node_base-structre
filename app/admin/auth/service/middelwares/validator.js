// pakeges
let _ = require('lodash');

module.exports = (req, res, next) => {
    if (!_.get(req ,'body.user_name')) return next('user_name is require');
    if (!_.get(req , 'body.shop_name')) return next('Shop name is require');

    if (!_.get(req , 'body.area_name')) return next('Area name is require');
    if (!_.get(req , 'body.city')) return next('city is require');
    if (!_.get(req , 'body.region')) return next('region is require');
    if (!_.get(req , 'body.country')) return next('country is require');

    if (!_.get(req, 'body.email')) return next('Email is require');
    if (!_.get(req, 'body.password')) return next('Password is require');
    return next();
};
