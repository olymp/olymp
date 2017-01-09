"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (files, _ref) {
  var color = _ref.color,
      text = _ref.text,
      tag = _ref.tag;
  return files.filter(function (item) {
    if (color && (item.palette || []).indexOf(color) === -1) {
      return false;
    } else if (tag && (item.tags || []).indexOf(tag) === -1) {
      return false;
    } else if (text && (!item.comment || item.comment.toLowerCase().indexOf(text.toLowerCase()) === -1) && (!item.tags || !item.tags.filter(function (x) {
      return x.toLowerCase().indexOf(text.toLowerCase()) !== -1;
    }).length)) {
      return false;
    }return true;
  });
};