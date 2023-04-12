"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// you can make the array of something - type string
var itemSchema = new _mongoose["default"].Schema({
  title: String,
  manufacturer: String,
  distributer: String,
  description: String,
  createdAt: Date,
  price: _mongoose["default"].SchemaTypes.Decimal128,
  unit: String
});

// parameter (name of the model, schema)
var Item = _mongoose["default"].model("item", itemSchema);
var _default = Item;
exports["default"] = _default;