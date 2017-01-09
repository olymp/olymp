'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (array) {
  var attrib = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'name';
  // can be 'name', x => x.name || x.title, (todo: ['name', 'title'], [x => x.name, x => x.title])
  array = [].concat(_toConsumableArray(array));
  var getAttrib = function getAttrib(x) {
    if (attrib && typeof attrib === 'string') return x[attrib];
    if (attrib && typeof attrib === 'function') return attrib(x);
    return '';
  };
  array.sort(function (a, b) {
    return compare(getAttrib(a), getAttrib(b));
  });
  return array;
};

var compare = function compare(left, right, idx) {
  idx = idx === undefined ? 0 : idx++;
  var run = right.length <= left.length ? idx < right.length - 1 : idx < left.length - 1;
  if (!run) {
    if (left[0].localeCompare(right[0]) === 0) {
      return left.localeCompare(right);
    }return left[0].localeCompare(right[0]);
  }

  if (left.localeCompare(right) !== left[0].localeCompare(right[0])) {
    var myLeft = left.slice(1, left.length);
    var myRight = right.slice(1, right.length);
    if (myLeft.localeCompare(myRight) !== myLeft[0].localeCompare(myRight[0])) {
      return compare(myLeft, myRight, idx);
    }
    if (left[0].localeCompare(right[0]) === 0) {
      return compare(myLeft, myRight, idx);
    }return left[0].localeCompare(right[0]);
  }return left.localeCompare(right);
};