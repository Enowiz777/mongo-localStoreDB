"use strict";

require("./db");
require("./models/item");
var _server = _interopRequireDefault(require("./server"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// .env variables are read.
var dotenv = require("dotenv");
dotenv.config();
console.log(process.env.TEST);

// connect to mongoDB

// import models of items

var PORT = process.env.PORT || 4000;
var handleListening = function handleListening() {
  return console.log("\u2705 Server listenting on http://localhost:".concat(PORT, " \uD83D\uDE80"));
};
_server["default"].listen(PORT, handleListening);