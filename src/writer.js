const _ = require('underscore');
const fs = require('fs');
const response = require('./response');

const init = (name) => {
  if(_.isUndefined(name))
    return response.error('Attribute name required');
  fs.createWriteStream(`${name}.db`, { overwrite: false });
  return response.success(`datastore with the name ${name} created`);
}

const writeLogDb = (instance, value) => {
  fs.writeFileSync(`${instance}.log`, value);
  fs.readFile(`${instance}.log`, function (err, data) {
    if (err) throw err;
    
  });
}

module.exports = {
  init: (name) => init(name)
}
