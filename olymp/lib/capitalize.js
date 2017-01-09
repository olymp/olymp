"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.substring(1);
};