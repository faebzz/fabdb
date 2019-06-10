const _ = require('underscore');
const response = require('./response');

const create = (name) => {
  if(_.isUndefined(name))
    return response.error('Attribute name required');
  return response.success(`Datastore with the name ${name} created`);
}

module.exports = {
  create: (name) => create(name)
}
