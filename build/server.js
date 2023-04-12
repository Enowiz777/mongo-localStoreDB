"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _globalRouter = _interopRequireDefault(require("./globalRouter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// use express server

//const express = require("express");
// new version

// import Mogran

// import Bootstrap
// import bootstrap from 'bootstrap';
var app = (0, _express["default"])();
var logger = (0, _morgan["default"])("dev");
app.use(logger);

// use pug as a view engine.
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/", _globalRouter["default"]);
var _default = app;
exports["default"] = _default;