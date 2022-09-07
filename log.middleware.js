const expressPino = require("express-pino-logger");

const logRequest = expressPino({
  level: "info",
});

module.exports = { logRequest };
