const jwt = require('jsonwebtoken');
const fs = require('fs');
const _ = require('underscore');
const config = require('./config');
const response = require('./response');

const login = (id, secret) => {
  if(!_.isUndefined(config.users) || !_.isArray(config.users))
    return response.data('No users in config found!');
  config.users.forEach((user) => {
    if(user.id === id && user.secret === secret) {
      return response.success('id found');
    };
  });
  return response.error('id or secret not correct!');
}

module.exports = {
  login: (id, secret) => login(id, secret)
}
