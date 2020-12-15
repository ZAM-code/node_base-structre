const http = require('http');
const app = require('./app/app');
  require('dotenv').config();

const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port, () => console.log('listen to port', port));