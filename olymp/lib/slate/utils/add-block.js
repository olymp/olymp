'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _has = require('./has');

var _slate = require('slate');

var createP = function createP() {
  return _slate.Raw.deserializeNode({ kind: 'block', type: 'paragraph', nodes: [{ kind: 'text', text: '', ranges: [] }] });
};

exports.default = function (value, _ref, _ref2) {
  var type = _ref.type,
      isVoid = _ref.isVoid,
      isAtomic = _ref.isAtomic,
      defaultNodes = _ref.defaultNodes;
  var defaultNode = _ref2.defaultNode;

  if (!defaultNode) defaultNode = 'paragraph';

  var transform = value.transform();
  var document = value.document,
      blocks = value.blocks;

  // Handle everything but list buttons.

  if (type !== 'bulleted-list' && type !== 'numbered-list') {
    var isActive = (0, _has.hasBlock)(value, type);
    var isList = (0, _has.hasBlock)(value, 'bulleted-list-item') || (0, _has.hasBlock)(value, 'numbered-list-item');

    if (isList) {
      transform = transform.setBlock(isActive ? defaultNode : type).unwrapBlock('bulleted-list').unwrapBlock('numbered-list');
    } else if (isAtomic) {
      transform = transform.insertBlock({ type: type, isVoid: isVoid, data: {}, nodes: defaultNodes || _slate.Block.createList([createP()]) });
    } else {
      transform = transform.setBlock(isActive ? defaultNode : type);
    }
  } else {
    // Handle the extra wrapping required for list buttons.
    var _isList = (0, _has.hasBlock)(value, 'bulleted-list-item') || (0, _has.hasBlock)(value, 'numbered-list-item');
    var isType = blocks.some(function (block) {
      return !!document.getClosest(block, function (parent) {
        return parent.type === type;
      });
    });

    if (_isList && isType) {
      transform = transform.setBlock(defaultNode).unwrapBlock('bulleted-list').unwrapBlock('numbered-list');
    } else if (_isList) {
      transform = transform.unwrapBlock(type === 'bulleted-list' ? 'bulleted-list' : 'numbered-list').wrapBlock(type);
    } else {
      transform = transform.setBlock(type === 'bulleted-list' ? 'bulleted-list-item' : 'numbered-list-item').wrapBlock(type);
    }
  }

  return transform.apply();
};