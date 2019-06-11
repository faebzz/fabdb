const writer = require('./writer');

const init = (name) => {
  return writer.init(name)
}

module.exports = {
  init: (name) => init(name)
}
