'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref, _ref2) {
  var item = _ref.item,
      form = _ref.form;
  var name = _ref2.name,
      description = _ref2.description;

  if (item[name]) {
    // Wenn Item schon existiert, den vorhandenen Wert nehmen
    return item[name];
  } else if (description && description.indexOf('default:') !== -1) {
    // Wenn ein default-Wert existiert
    return description.split('default:')[1].split(' ')[0].split('\n')[0];
  } else if (name === 'state') {
    // Bei State
    return 'DRAFT';
  } else if (name === 'slug' && form.getFieldValue('name')) {
    // Bei Slug
    var url = '/' + encodeURIComponent(form.getFieldValue('name').split(' ').join('-').toLowerCase()).split('%C3%A4').join('ä').split('%C3%B6').join('ö').split('%C3%BC').join('ü').split('%C3%A4').join('Ä').split('%C3%B6').join('Ö').split('%C3%BC').join('Ü');
    if (form.getFieldValue('date')) {
      url = (0, _moment2.default)(form.getFieldValue('date')).format('DD-MM-YYYY') + '-' + url;
    }
    return url;
  }

  return undefined;
};