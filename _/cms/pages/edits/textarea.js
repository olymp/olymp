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

var _getRules = require('../get-rules');

var _getRules2 = _interopRequireDefault(_getRules);

var _layout = require('../layout');

var _layout2 = _interopRequireDefault(_layout);

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
    })(_react2.default.createElement(_input2.default.TextArea, _extends({ placeholder: placeholder || label }, rest)))
  );
};
Input.defaultProps = { layout: _layout2.default, rows: 2 };
exports.default = Input;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9lZGl0cy90ZXh0YXJlYS5lczYiXSwibmFtZXMiOlsiSW5wdXQiLCJpdGVtIiwiZmllbGQiLCJsYWJlbCIsImxheW91dCIsImluaXRpYWxWYWx1ZSIsInJ1bGVzIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwicmVzdCIsImdldEZpZWxkRGVjb3JhdG9yIiwiZGVmYXVsdFByb3BzIiwicm93cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFHQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFFBQVEsU0FBUkEsS0FBUTtBQUFBLE1BQ1pDLElBRFksUUFDWkEsSUFEWTtBQUFBLE1BRVpDLEtBRlksUUFFWkEsS0FGWTtBQUFBLE1BR1pDLEtBSFksUUFHWkEsS0FIWTtBQUFBLE1BSVpDLE1BSlksUUFJWkEsTUFKWTtBQUFBLE1BS1pDLFlBTFksUUFLWkEsWUFMWTtBQUFBLE1BTVpDLEtBTlksUUFNWkEsS0FOWTtBQUFBLE1BT1pDLFdBUFksUUFPWkEsV0FQWTtBQUFBLE1BUVpDLElBUlksUUFRWkEsSUFSWTtBQUFBLE1BU1RDLElBVFM7O0FBQUEsU0FXWjtBQUFBLG1CQUFNLElBQU47QUFBQSxlQUFXLEtBQUtQLEtBQWhCLEVBQXVCLE9BQU9DLEtBQTlCLElBQXlDQyxNQUF6QztBQUNHSSxTQUFLRSxpQkFBTCxDQUF1QlIsS0FBdkIsRUFBOEI7QUFDN0JHLG9CQUFjLG1CQUFJSixJQUFKLEVBQVVDLEtBQVYsQ0FEZTtBQUU3QkksYUFBTyx3QkFBU0EsS0FBVCxFQUFnQkgsS0FBaEI7QUFGc0IsS0FBOUIsRUFHRSw4Q0FBVSxRQUFWLGFBQW1CLGFBQWFJLGVBQWVKLEtBQS9DLElBQTBETSxJQUExRCxFQUhGO0FBREgsR0FYWTtBQUFBLENBQWQ7QUFrQkFULE1BQU1XLFlBQU4sR0FBcUIsRUFBRVAsd0JBQUYsRUFBVVEsTUFBTSxDQUFoQixFQUFyQjtrQkFDZVosSyIsImZpbGUiOiJjbXMvcGFnZXMvZWRpdHMvdGV4dGFyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXQgYXMgQW50SW5wdXQsIEZvcm0gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZ2V0UnVsZXMgZnJvbSAnLi4vZ2V0LXJ1bGVzJztcbmltcG9ydCBsYXlvdXQgZnJvbSAnLi4vbGF5b3V0JztcblxuY29uc3QgSW5wdXQgPSAoe1xuICBpdGVtLFxuICBmaWVsZCxcbiAgbGFiZWwsXG4gIGxheW91dCxcbiAgaW5pdGlhbFZhbHVlLFxuICBydWxlcyxcbiAgcGxhY2Vob2xkZXIsXG4gIGZvcm0sXG4gIC4uLnJlc3Rcbn0pID0+IChcbiAgPEZvcm0uSXRlbSBrZXk9e2ZpZWxkfSBsYWJlbD17bGFiZWx9IHsuLi5sYXlvdXR9PlxuICAgIHtmb3JtLmdldEZpZWxkRGVjb3JhdG9yKGZpZWxkLCB7XG4gICAgICBpbml0aWFsVmFsdWU6IGdldChpdGVtLCBmaWVsZCksXG4gICAgICBydWxlczogZ2V0UnVsZXMocnVsZXMsIGxhYmVsKSxcbiAgICB9KSg8QW50SW5wdXQuVGV4dEFyZWEgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyIHx8IGxhYmVsfSB7Li4ucmVzdH0gLz4pfVxuICA8L0Zvcm0uSXRlbT5cbik7XG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7IGxheW91dCwgcm93czogMiB9O1xuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0=
