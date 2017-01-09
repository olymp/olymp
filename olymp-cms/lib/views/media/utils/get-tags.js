"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var tags = data.reduce(function (state, file) {
    (file.tags || []).forEach(function (tag) {
      if (state[tag] === undefined) {
        state[tag] = []; // eslint-disable-line no-param-reassign
      }
      state[tag].push(file);
    });return state;
  }, {});
  return Object.keys(tags).map(function (key) {
    return {
      tag: key,
      items: tags[key]
    };
  });
};