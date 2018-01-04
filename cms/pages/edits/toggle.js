'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _switch = require('antd/lib/switch');

var _switch2 = _interopRequireDefault(_switch);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/form/style');

require('antd/lib/switch/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getRules = require('../get-rules');

var _getRules2 = _interopRequireDefault(_getRules);

var _layout = require('../layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Toggle = function Toggle(_ref) {
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
    })(_react2.default.createElement(_switch2.default, rest))
  );
};
Toggle.defaultProps = { layout: _layout2.default };
exports.default = Toggle;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9lZGl0cy90b2dnbGUuZXM2Il0sIm5hbWVzIjpbIlRvZ2dsZSIsIml0ZW0iLCJmaWVsZCIsImxhYmVsIiwibGF5b3V0IiwiaW5pdGlhbFZhbHVlIiwicnVsZXMiLCJwbGFjZWhvbGRlciIsImZvcm0iLCJyZXN0IiwiZ2V0RmllbGREZWNvcmF0b3IiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBR0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVM7QUFBQSxNQUNiQyxJQURhLFFBQ2JBLElBRGE7QUFBQSxNQUViQyxLQUZhLFFBRWJBLEtBRmE7QUFBQSxNQUdiQyxLQUhhLFFBR2JBLEtBSGE7QUFBQSxNQUliQyxNQUphLFFBSWJBLE1BSmE7QUFBQSxNQUtiQyxZQUxhLFFBS2JBLFlBTGE7QUFBQSxNQU1iQyxLQU5hLFFBTWJBLEtBTmE7QUFBQSxNQU9iQyxXQVBhLFFBT2JBLFdBUGE7QUFBQSxNQVFiQyxJQVJhLFFBUWJBLElBUmE7QUFBQSxNQVNWQyxJQVRVOztBQUFBLFNBV2I7QUFBQSxtQkFBTSxJQUFOO0FBQUEsZUFBVyxLQUFLUCxLQUFoQixFQUF1QixPQUFPQyxLQUE5QixJQUF5Q0MsTUFBekM7QUFDR0ksU0FBS0UsaUJBQUwsQ0FBdUJSLEtBQXZCLEVBQThCO0FBQzdCRyxvQkFBYyxtQkFBSUosSUFBSixFQUFVQyxLQUFWLENBRGU7QUFFN0JJLGFBQU8sd0JBQVNBLEtBQVQsRUFBZ0JILEtBQWhCO0FBRnNCLEtBQTlCLEVBR0UsZ0RBQVlNLElBQVosQ0FIRjtBQURILEdBWGE7QUFBQSxDQUFmO0FBa0JBVCxPQUFPVyxZQUFQLEdBQXNCLEVBQUVQLHdCQUFGLEVBQXRCO2tCQUNlSixNIiwiZmlsZSI6ImNtcy9wYWdlcy9lZGl0cy90b2dnbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3dpdGNoLCBGb3JtIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGdldFJ1bGVzIGZyb20gJy4uL2dldC1ydWxlcyc7XG5pbXBvcnQgbGF5b3V0IGZyb20gJy4uL2xheW91dCc7XG5cbmNvbnN0IFRvZ2dsZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsYWJlbCxcbiAgbGF5b3V0LFxuICBpbml0aWFsVmFsdWUsXG4gIHJ1bGVzLFxuICBwbGFjZWhvbGRlcixcbiAgZm9ybSxcbiAgLi4ucmVzdFxufSkgPT4gKFxuICA8Rm9ybS5JdGVtIGtleT17ZmllbGR9IGxhYmVsPXtsYWJlbH0gey4uLmxheW91dH0+XG4gICAge2Zvcm0uZ2V0RmllbGREZWNvcmF0b3IoZmllbGQsIHtcbiAgICAgIGluaXRpYWxWYWx1ZTogZ2V0KGl0ZW0sIGZpZWxkKSxcbiAgICAgIHJ1bGVzOiBnZXRSdWxlcyhydWxlcywgbGFiZWwpLFxuICAgIH0pKDxTd2l0Y2ggey4uLnJlc3R9IC8+KX1cbiAgPC9Gb3JtLkl0ZW0+XG4pO1xuVG9nZ2xlLmRlZmF1bHRQcm9wcyA9IHsgbGF5b3V0IH07XG5leHBvcnQgZGVmYXVsdCBUb2dnbGU7XG4iXX0=
