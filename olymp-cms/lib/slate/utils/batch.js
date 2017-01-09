"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var batch = exports.batch = function batch() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;

  var _callback = null;
  return function (callback) {
    _callback = callback;
    setTimeout(function () {
      if (_callback === callback) {
        callback();
      }
    }, limit);
  };
};