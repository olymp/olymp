'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getRangeClientRectsChrome = exports.getRangeClientRectsChrome = function getRangeClientRectsChrome(range) {
  var tempRange = range.cloneRange();
  var clientRects = [];

  for (var ancestor = range.endContainer; ancestor != null; ancestor = ancestor.parentNode) {
    var atCommonAncestor = ancestor === range.commonAncestorContainer;
    if (atCommonAncestor) {
      tempRange.setStart(range.startContainer, range.startOffset);
    } else {
      tempRange.setStart(tempRange.endContainer, 0);
    }
    var rects = Array.from(tempRange.getClientRects());
    clientRects.push(rects);
    if (atCommonAncestor) {
      var _ref;

      clientRects.reverse();
      return (_ref = []).concat.apply(_ref, clientRects);
    }
    tempRange.setEndBefore(ancestor);
  }

  throw new Error('Found an unexpected detached subtree when getting range client rects.');
};

var isChrome = exports.isChrome = typeof navigator !== 'undefined' && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var getRangeClientRects = exports.getRangeClientRects = isChrome ? getRangeClientRectsChrome : function (range) {
  return Array.from(range.getClientRects());
};

var getRangeBoundingClientRect = exports.getRangeBoundingClientRect = function getRangeBoundingClientRect(range) {
  var rects = getRangeClientRects(range);
  var top = 0;
  var right = 0;
  var bottom = 0;
  var left = 0;

  if (rects.length) {
    var _rects$ = rects[0];
    top = _rects$.top;
    right = _rects$.right;
    bottom = _rects$.bottom;
    left = _rects$.left;

    for (var ii = 1; ii < rects.length; ii++) {
      var rect = rects[ii];
      if (rect.height !== 0 || rect.width !== 0) {
        top = Math.min(top, rect.top);
        right = Math.max(right, rect.right);
        bottom = Math.max(bottom, rect.bottom);
        left = Math.min(left, rect.left);
      }
    }
  }

  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: right - left,
    height: bottom - top
  };
};

var getVisibleSelectionRect = exports.getVisibleSelectionRect = function getVisibleSelectionRect() {
  if (typeof window === 'undefined') return null;
  var selection = window.getSelection();
  if (!selection.rangeCount) {
    return null;
  }

  var range = selection.getRangeAt(0);
  var boundingRect = getRangeBoundingClientRect(range);
  var top = boundingRect.top,
      right = boundingRect.right,
      bottom = boundingRect.bottom,
      left = boundingRect.left;


  if (top === 0 && right === 0 && bottom === 0 && left === 0) {
    return null;
  }

  return boundingRect;
};

var getCollapsedClientRect = exports.getCollapsedClientRect = function getCollapsedClientRect() {
  var selection = document.getSelection();
  if (selection.rangeCount === 0 || !selection.getRangeAt || !selection.getRangeAt(0) || !selection.getRangeAt(0).startContainer || !selection.getRangeAt(0).startContainer.getBoundingClientRect) {
    return null;
  }

  var node = selection.getRangeAt(0).startContainer;
  var rect = node.getBoundingClientRect();
  return rect;
};