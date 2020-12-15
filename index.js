let http = require('http');
let app = require('./app/app');
require('dotenv').config();
require('./database');


let port = process.env.PORT || 8080;
let server = http.createServer(app);
server.listen(port , () => console.log("Server run on port" , port));