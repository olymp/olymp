"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var colors = data.reduce(function (state, file) {
    (file.palette || []).forEach(function (color) {
      if (state[color] === undefined) {
        state[color] = 0; // eslint-disable-line no-param-reassign
      }
      state[color] = state[color] + 1; // eslint-disable-line no-param-reassign
    });return state;
  }, {});
  return Object.keys(colors).map(function (color) {
    return {
      color: color,
      count: colors[color]
    };
  });
};