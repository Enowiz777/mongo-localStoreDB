"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _globalController = require("./globalController");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var globalRouter = _express["default"].Router();

// Route to home, edit, and delete.
globalRouter.route("/").get(_globalController.handleHome).post(_globalController.handleAdd);
globalRouter.route('/search').get(_globalController.searchRoute);
globalRouter.route('/:Id/edit').get(_globalController.getEdit).post(_globalController.postEdit);
globalRouter.route('/:Id/delete').post(_globalController.postDelete);
globalRouter.route('/:Id').get(_globalController.sortRoute);
var _default = globalRouter;
exports["default"] = _default;