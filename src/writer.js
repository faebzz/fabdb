const _ = require('underscore');
const fs = require('fs');
const uuidv4 = require('uuid/v4');
const response = require('./response');

const init = (name) => {
  if(_.isUndefined(name))
    return response.error('Attribute name required');
  fs.createWriteStream(`${name}.db`, { overwrite: false });
  return response.success(`datastore with the name ${name} created`);
}

const insert = (instance, store, value) => {
  return writeLogDb(instance, store, value);
}

const destroy = (instance, logOnly=false) => {
  if(logOnly && fs.existsSync(`${instance}.log`)) {
    fs.unlinkSync(`${instance}.log`);
    return response.success('logfile deleted');
  }
  if(fs.existsSync(`${instance}.log`))
      fs.unlinkSync(`${instance}.log`);
  if(fs.existsSync(`${instance}.db`))
      fs.unlinkSync(`${instance}.db`);
  return response.success('logfile and database deleted');
}

const writeLogDb = (instance, store, value) => {
  if(!_.isObject(value)) return response.error('Value is not an object!');
  const entry = {};
  value['_id'] = uuidv4();
  entry['_action'] = 'INSERT';
  entry[store] = value;
  fs.appendFileSync(`${instance}.log`, `${JSON.stringify(entry)};`);
  fs.readFile(`${instance}.log`, 'utf8', (err, data) => {
    if(err) throw err;
    fs.appendFile(`${instance}.db`, data, (err) =>{
      if(err) throw err;
    });
  });
  return response.data(entry[store]);
}

module.exports = {
  init: (name) => init(name),
  insert: (instance, store, value) => insert(instance, store, value),
  destroy: (instance, logOnly) => destroy(instance, logOnly)
}
