"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./404.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "div",
    { className: "ui vertical masthead center aligned segment" },
    _react2.default.createElement(
      "div",
      { className: "ui text container center" },
      _react2.default.createElement(
        "h1",
        { className: "ui inverted header", style: { marginTop: '50px' } },
        "404"
      ),
      _react2.default.createElement(
        "h4",
        null,
        "Die gesuchte Seite wurde nicht gefunden."
      )
    )
  );
};