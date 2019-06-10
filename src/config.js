const fs = require('fs');
if(!fs.existsSync('fabdb.json'))
  throw 'No configuration file fabdb.json found';
const config = JSON.parse(fs.readFileSync('fabdb.json'));
module.exports = config;
