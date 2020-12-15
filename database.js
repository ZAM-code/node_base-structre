require('dotenv').config();
const mongoose = require('mongoose');
const assert = require('assert');
const db_url = process.env.MONGODB_URI;

mongoose.connect(
    db_url,
    {
       useNewUrlParser : true,
       useUnifiedTopology : true,
       useCreateIndex : true 
    },
    function(error, link)
    {
        assert.equal(error,null, 'DB conncectionfail');

        console.log("DB connection Seccessfull...");
        //console.log(link);
    }
);