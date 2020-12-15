// pakages
let express = require('express');
let app = express();

// Routes
let base = require('./base/route/index')
let bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({
    // Because Stripe needs the raw body, we compute it but only when hitting the Stripe callback URL.
    verify: function (req, res, buf) {
        var url = req.originalUrl;
        console.log('------------' + url);
        if (url.startsWith('/notify_transaction_success')) {
            req.rawBody = buf.toString();
        }
    }
}));

// use routes
app.use('/', base);

module.exports = app;