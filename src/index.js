const server = require('./server.js');
const args = require('minimist')(process.argv.slice(2));
const about = require('./about');
server.start();
