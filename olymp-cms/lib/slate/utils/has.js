"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasMark = exports.hasMark = function hasMark(editorState, type) {
  return editorState.marks.some(function (mark) {
    return mark.type === type;
  });
};
var hasBlock = exports.hasBlock = function hasBlock(editorState, type) {
  return editorState.blocks.some(function (node) {
    return node.type === type || node.type.indexOf(type + "-") === 0;
  });
};