// pakeges
let express = require('express');
let router = express.Router();

//routes
let adminRoute = require('./../../admin/auth/route/api')
let authMiddleware = require('./../middlewares/authmiddleware')
let api = require("./api")

//use routes
router.use("/admin" , adminRoute)


router.use(authMiddleware);

router.use("/",api)
//routers


module.exports = router 