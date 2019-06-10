const message = (msg, type, data) => {
  return {
    message: msg,
    type: type,
    data: data,
    start: new Date(),
    duration: null,
  }
}
const type = {
  INFO: 200,
  ERROR: 400,
  WARN: 300,
  SUCCESS: 100
}

module.exports = {
  info: (msg, data) => message(msg, type.INFO, []),
  error: (msg, data) => message(msg, type.ERROR, []),
  success: (msg, data) => message(msg, type.SUCCESS, []),
  warn: (msg) => message(msg, type.WARN, []),
  data: (data) => message('', type.SUCCESS, data)
}
