'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _upperFirst = require('lodash/upperFirst');

var _upperFirst2 = _interopRequireDefault(_upperFirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (x) {
  var uml = x.replace(/ae/g, 'ä').replace(/oe/g, 'ö').replace(/ü/g, 'ue').replace(/Ae/g, 'Ä').replace(/Oe/g, 'Ö').replace(/Ue/g, 'Ü');
  var snake = uml.replace(/([A-Z])/g, function ($1) {
    return '-' + $1;
  });
  var capitalized = (0, _upperFirst2.default)(snake);
  return capitalized;
};