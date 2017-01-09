'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _editors = require('./editors');

var _image = require('../../../edits/image');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (type, name) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var subField = arguments[3];

  if (subField && subField.type) {
    if (subField.type.kind === 'LIST' && subField.type.ofType) {
      return _react2.default.createElement(_editors.DetailEditor, _extends({}, props, { tags: true, name: subField.type.ofType.name }));
    }return _react2.default.createElement(_editors.DetailEditor, _extends({}, props, { name: subField.type.name }));
  }
  if (type.kind === 'LIST') {
    if (type.ofType.name === 'String') {
      return _react2.default.createElement(_antd.Select, _extends({}, props, { tags: true, searchPlaceholder: 'Suche ...' }));
    }if (type.ofType.name.indexOf('Nested') === 0) {
      return _react2.default.createElement(_editors.FormEditor, _extends({}, props, { name: type.ofType.name, type: type }));
    }return null;
  }
  if (type.kind === 'OBJECT') {
    if (type.name === 'Image') {
      return _react2.default.createElement(_image2.default, _extends({}, props, { asImg: true, style: { maxWidth: 300, maxHeight: 300, width: 'initial' } }));
    }return null;
  }
  if (type.kind === 'ENUM' && type.enumValues) {
    return _react2.default.createElement(
      _antd.Select,
      props,
      type.enumValues.map(function (x) {
        return _react2.default.createElement(
          _antd.Select.Option,
          { key: x.name, value: x.name },
          x.name
        );
      })
    );
  }
  switch (type.name) {
    case 'Json':
      return _react2.default.createElement(_editors.SlateEditor, _extends({}, props, { placeholder: name }));
    case 'Boolean':
      return _react2.default.createElement(_antd.Checkbox, props);
    case 'Date':
      return _react2.default.createElement(_editors.DateEditor, _extends({}, props, { placeholder: name, format: 'DD.MM.YYYY' }));
    case 'DateTime':
      return _react2.default.createElement(_editors.DateEditor, _extends({}, props, { placeholder: name, format: 'DD.MM.YYYY HH:mm', showTime: { format: 'HH:mm' } }));
    case 'Color':
      return _react2.default.createElement(_antd.Input, _extends({}, props, { placeholder: name, type: 'color', addonBefore: _react2.default.createElement('i', { className: 'fa fa-eyedropper' }) }));
    case 'Markdown':
      return _react2.default.createElement(_antd.Input, _extends({}, props, { placeholder: name, type: 'textarea', autosize: true }));
    case 'Slug':
      return _react2.default.createElement(_antd.Input, _extends({}, props, { placeholder: name, addonBefore: _react2.default.createElement('i', { className: 'fa fa-globe' }) }));
    case 'Email':
      return _react2.default.createElement(_antd.Input, _extends({}, props, { placeholder: name, addonBefore: _react2.default.createElement('i', { className: 'fa fa-envelope-o' }) }));
    case 'PhoneNumber':
      return _react2.default.createElement(_antd.Input, _extends({}, props, { placeholder: name, addonBefore: _react2.default.createElement('i', { className: 'fa fa-phone' }) }));
    case 'Website':
      return _react2.default.createElement(_antd.Input, _extends({}, props, { placeholder: name, addonBefore: _react2.default.createElement('i', { className: 'fa fa-link' }) }));
    case 'TimeRange':
      return _react2.default.createElement(_editors.SliderEditor, props);
    /* case 'user':
      return type.fields.map(field => (
        <Select.Option key={field.name} value={field.name}>{field.name}</Select.Option>
      )); */
    default:
      return _react2.default.createElement(_antd.Input, _extends({}, props, { placeholder: name }));
  }
};