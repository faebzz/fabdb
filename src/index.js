const command = require('./command');
const writer = require('./writer');
function FabDb(name) {
  this.name = name;
  this.init = () => writer.init(this.name);
  this.add = (store, data) => writer.insert(this.name, store, data);
  this.destroy = () => writer.destroy(this.name, false);
  this.destroyLog = () => writer.destroy(this.name, true);
  this.init();
}

module.exports = FabDb;
