// pakeges
let express = require('express');
let router = express.Router();

//routes
let adminRoute = require('./../../admin/auth/route/api')
let authMiddleware = require('./../middlewares/authmiddleware')

//use routes
router.use("/admin" , adminRoute)


router.use(authMiddleware);
//routers
router.get('/', (req, res, next) => {
    res.send('Online Shop ');
})

module.exports = router 