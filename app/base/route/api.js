// pakeges
let express = require('express');
let router = express.Router();
//routes

//use routes

//routers
router.get('/', (req, res, next) => {
    res.send('Online Shop ');
})


module.exports = router 