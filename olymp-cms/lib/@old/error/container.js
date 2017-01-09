"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "div",
    { className: "container-xs-height full-height", image: "/img/poly/*.jpg", random: { end: 6 } },
    _react2.default.createElement(
      "div",
      { className: "row m-n col-xs-height col-middle" },
      _react2.default.createElement(
        "div",
        { className: "col-sm-4 col-sm-offset-4" },
        undefined.props.children
      )
    )
  );
};