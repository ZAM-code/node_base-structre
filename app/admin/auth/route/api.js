// pakeges
let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

//routes
let Services = require("./../service/authServices")
let validator = require("./../service/middelwares/validator")
let email_validator = require("./../service/middelwares/email_validator")
let shop_name_validator = require("./../service/middelwares/shop_name_validator")
let uploader = require("./../../../base/services/single_file_upload/image_upload")

//use routes

// registration
router.post("/Signup",validator ,email_validator,shop_name_validator ,(req,res,next) =>{
    Services.registration(req.body)
    .then(done=>{
        // uploader.upload(req , res)
        res.send(done)
    }, err => next(err))
})

// login

router.post("/login", (req, res, next) => {
    Services.login(req.body)
        .then(data => {
            return res.send(data)
        }, err => next(err))
});
//routers
module.exports = router
