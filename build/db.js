"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// READ .env variable
var dotenv = require("dotenv");
dotenv.config();

// connect to the local mongo dbs.
_mongoose["default"].connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// attempt to connect into the db.
var db = _mongoose["default"].connection;

// 
var handleOpen = function handleOpen() {
  return console.log("✅ Connected to DB");
};
var handleError = function handleError(error) {
  return console.log("❌ DB Error", error);
};

// once - the connection is open, you will use the handleOpen and 
db.on("error", handleError);
db.once("open", handleOpen);