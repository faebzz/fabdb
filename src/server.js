const express = require('express');
const bodyParser = require('body-parser');
const about = require('./about');
const writer = require('./writer');
const authorize = require('./authorize');
const config = require('./config');

const start = () => {
  const app = express();
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  app.use(bodyParser.json());
  app.get('/about', (req, res) => {
    res.json(about);
  });
  app.post('/authorize', (req, res) => {
    res.json(authorize.login(req.body.id, req.body.secret));
  });
  app.get('/create/:name', (req, res) => {
    res.json(writer.create(req.params.name));
  });
  app.listen(config.port);
}

module.exports = {
  start: () => start()
}
