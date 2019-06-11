const command = require('./command');
const writer = require('./writer');
function FabDb(name) {
  this.name = name;
  this.init();
}
FabDb.prototype.init = () => {
  return writer.init(this.name);
}

module.exports = FabDb;
