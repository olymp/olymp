'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/form/style');

require('antd/lib/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympAntd = require('olymp-antd');

var _getRules = require('../get-rules');

var _getRules2 = _interopRequireDefault(_getRules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Input = function Input(_ref) {
  var item = _ref.item,
      field = _ref.field,
      label = _ref.label,
      layout = _ref.layout,
      initialValue = _ref.initialValue,
      rules = _ref.rules,
      placeholder = _ref.placeholder,
      form = _ref.form,
      rest = _objectWithoutProperties(_ref, ['item', 'field', 'label', 'layout', 'initialValue', 'rules', 'placeholder', 'form']);

  return _react2.default.createElement(
    _form2.default.Item,
    _extends({ key: field, label: label }, layout),
    form.getFieldDecorator(field, {
      initialValue: (0, _get3.default)(item, field),
      rules: (0, _getRules2.default)(rules, label)
    })(_react2.default.createElement(_input2.default, _extends({ placeholder: placeholder || label }, rest)))
  );
};
Input.defaultProps = { layout: _olympAntd.layout };
exports.default = Input;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9lZGl0cy9pbnB1dC5lczYiXSwibmFtZXMiOlsiSW5wdXQiLCJpdGVtIiwiZmllbGQiLCJsYWJlbCIsImxheW91dCIsImluaXRpYWxWYWx1ZSIsInJ1bGVzIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwicmVzdCIsImdldEZpZWxkRGVjb3JhdG9yIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOztBQUVBOzs7Ozs7OztBQUVBLElBQU1BLFFBQVEsU0FBUkEsS0FBUTtBQUFBLE1BQ1pDLElBRFksUUFDWkEsSUFEWTtBQUFBLE1BRVpDLEtBRlksUUFFWkEsS0FGWTtBQUFBLE1BR1pDLEtBSFksUUFHWkEsS0FIWTtBQUFBLE1BSVpDLE1BSlksUUFJWkEsTUFKWTtBQUFBLE1BS1pDLFlBTFksUUFLWkEsWUFMWTtBQUFBLE1BTVpDLEtBTlksUUFNWkEsS0FOWTtBQUFBLE1BT1pDLFdBUFksUUFPWkEsV0FQWTtBQUFBLE1BUVpDLElBUlksUUFRWkEsSUFSWTtBQUFBLE1BU1RDLElBVFM7O0FBQUEsU0FXWjtBQUFBLG1CQUFNLElBQU47QUFBQSxlQUFXLEtBQUtQLEtBQWhCLEVBQXVCLE9BQU9DLEtBQTlCLElBQXlDQyxNQUF6QztBQUNHSSxTQUFLRSxpQkFBTCxDQUF1QlIsS0FBdkIsRUFBOEI7QUFDN0JHLG9CQUFjLG1CQUFJSixJQUFKLEVBQVVDLEtBQVYsQ0FEZTtBQUU3QkksYUFBTyx3QkFBU0EsS0FBVCxFQUFnQkgsS0FBaEI7QUFGc0IsS0FBOUIsRUFHRSwwREFBVSxhQUFhSSxlQUFlSixLQUF0QyxJQUFpRE0sSUFBakQsRUFIRjtBQURILEdBWFk7QUFBQSxDQUFkO0FBa0JBVCxNQUFNVyxZQUFOLEdBQXFCLEVBQUVQLHlCQUFGLEVBQXJCO2tCQUNlSixLIiwiZmlsZSI6ImNtcy9wYWdlcy9lZGl0cy9pbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCBhcyBBbnRJbnB1dCwgRm9ybSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgbGF5b3V0IH0gZnJvbSAnb2x5bXAtYW50ZCc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGdldFJ1bGVzIGZyb20gJy4uL2dldC1ydWxlcyc7XG5cbmNvbnN0IElucHV0ID0gKHtcbiAgaXRlbSxcbiAgZmllbGQsXG4gIGxhYmVsLFxuICBsYXlvdXQsXG4gIGluaXRpYWxWYWx1ZSxcbiAgcnVsZXMsXG4gIHBsYWNlaG9sZGVyLFxuICBmb3JtLFxuICAuLi5yZXN0XG59KSA9PiAoXG4gIDxGb3JtLkl0ZW0ga2V5PXtmaWVsZH0gbGFiZWw9e2xhYmVsfSB7Li4ubGF5b3V0fT5cbiAgICB7Zm9ybS5nZXRGaWVsZERlY29yYXRvcihmaWVsZCwge1xuICAgICAgaW5pdGlhbFZhbHVlOiBnZXQoaXRlbSwgZmllbGQpLFxuICAgICAgcnVsZXM6IGdldFJ1bGVzKHJ1bGVzLCBsYWJlbCksXG4gICAgfSkoPEFudElucHV0IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlciB8fCBsYWJlbH0gey4uLnJlc3R9IC8+KX1cbiAgPC9Gb3JtLkl0ZW0+XG4pO1xuSW5wdXQuZGVmYXVsdFByb3BzID0geyBsYXlvdXQgfTtcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19
