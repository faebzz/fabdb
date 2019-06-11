const writer = require('./writer');

const init = (name) => {
  return writer.init(name)
}
const add = (instance, store, value) => {
  return writer.init(name)
}

module.exports = {
  init: (name) => init(name),
  add: (instance, store, value) => add(instance, store, value)
}
