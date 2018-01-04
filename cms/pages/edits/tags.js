'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/form/style');

require('antd/lib/select/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getRules = require('../get-rules');

var _getRules2 = _interopRequireDefault(_getRules);

var _layout = require('../layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TagSelect = function TagSelect(_ref) {
  var item = _ref.item,
      field = _ref.field,
      label = _ref.label,
      layout = _ref.layout,
      initialValue = _ref.initialValue,
      rules = _ref.rules,
      placeholder = _ref.placeholder,
      form = _ref.form,
      options = _ref.options,
      rest = _objectWithoutProperties(_ref, ['item', 'field', 'label', 'layout', 'initialValue', 'rules', 'placeholder', 'form', 'options']);

  return _react2.default.createElement(
    _form2.default.Item,
    _extends({ key: field, label: label }, layout),
    form.getFieldDecorator(field, {
      initialValue: (0, _get3.default)(item, field || '', []) || [],
      rules: (0, _getRules2.default)(rules, label)
    })(_react2.default.createElement(
      _select2.default,
      _extends({
        style: { width: '100%' },
        mode: 'multiple',
        placeholder: placeholder || label
      }, rest),
      options.map(function (value) {
        return _react2.default.createElement(
          _select2.default.Option,
          { key: value },
          value
        );
      })
    ))
  );
};
TagSelect.defaultProps = { layout: _layout2.default };
exports.default = TagSelect;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9lZGl0cy90YWdzLmVzNiJdLCJuYW1lcyI6WyJUYWdTZWxlY3QiLCJpdGVtIiwiZmllbGQiLCJsYWJlbCIsImxheW91dCIsImluaXRpYWxWYWx1ZSIsInJ1bGVzIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwib3B0aW9ucyIsInJlc3QiLCJnZXRGaWVsZERlY29yYXRvciIsIndpZHRoIiwibWFwIiwidmFsdWUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBR0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLFNBQVpBLFNBQVk7QUFBQSxNQUNoQkMsSUFEZ0IsUUFDaEJBLElBRGdCO0FBQUEsTUFFaEJDLEtBRmdCLFFBRWhCQSxLQUZnQjtBQUFBLE1BR2hCQyxLQUhnQixRQUdoQkEsS0FIZ0I7QUFBQSxNQUloQkMsTUFKZ0IsUUFJaEJBLE1BSmdCO0FBQUEsTUFLaEJDLFlBTGdCLFFBS2hCQSxZQUxnQjtBQUFBLE1BTWhCQyxLQU5nQixRQU1oQkEsS0FOZ0I7QUFBQSxNQU9oQkMsV0FQZ0IsUUFPaEJBLFdBUGdCO0FBQUEsTUFRaEJDLElBUmdCLFFBUWhCQSxJQVJnQjtBQUFBLE1BU2hCQyxPQVRnQixRQVNoQkEsT0FUZ0I7QUFBQSxNQVViQyxJQVZhOztBQUFBLFNBWWhCO0FBQUEsbUJBQU0sSUFBTjtBQUFBLGVBQVcsS0FBS1IsS0FBaEIsRUFBdUIsT0FBT0MsS0FBOUIsSUFBeUNDLE1BQXpDO0FBQ0dJLFNBQUtHLGlCQUFMLENBQXVCVCxLQUF2QixFQUE4QjtBQUM3Qkcsb0JBQWMsbUJBQUlKLElBQUosRUFBVUMsU0FBUyxFQUFuQixFQUF1QixFQUF2QixLQUE4QixFQURmO0FBRTdCSSxhQUFPLHdCQUFTQSxLQUFULEVBQWdCSCxLQUFoQjtBQUZzQixLQUE5QixFQUlDO0FBQUE7QUFBQTtBQUNFLGVBQU8sRUFBRVMsT0FBTyxNQUFULEVBRFQ7QUFFRSxjQUFLLFVBRlA7QUFHRSxxQkFBYUwsZUFBZUo7QUFIOUIsU0FJTU8sSUFKTjtBQU1HRCxjQUFRSSxHQUFSLENBQVk7QUFBQSxlQUNYO0FBQUEsMkJBQVEsTUFBUjtBQUFBLFlBQWUsS0FBS0MsS0FBcEI7QUFBNEJBO0FBQTVCLFNBRFc7QUFBQSxPQUFaO0FBTkgsS0FKRDtBQURILEdBWmdCO0FBQUEsQ0FBbEI7QUE4QkFkLFVBQVVlLFlBQVYsR0FBeUIsRUFBRVgsd0JBQUYsRUFBekI7a0JBQ2VKLFMiLCJmaWxlIjoiY21zL3BhZ2VzL2VkaXRzL3RhZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VsZWN0LCBGb3JtIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGdldFJ1bGVzIGZyb20gJy4uL2dldC1ydWxlcyc7XG5pbXBvcnQgbGF5b3V0IGZyb20gJy4uL2xheW91dCc7XG5cbmNvbnN0IFRhZ1NlbGVjdCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsYWJlbCxcbiAgbGF5b3V0LFxuICBpbml0aWFsVmFsdWUsXG4gIHJ1bGVzLFxuICBwbGFjZWhvbGRlcixcbiAgZm9ybSxcbiAgb3B0aW9ucyxcbiAgLi4ucmVzdFxufSkgPT4gKFxuICA8Rm9ybS5JdGVtIGtleT17ZmllbGR9IGxhYmVsPXtsYWJlbH0gey4uLmxheW91dH0+XG4gICAge2Zvcm0uZ2V0RmllbGREZWNvcmF0b3IoZmllbGQsIHtcbiAgICAgIGluaXRpYWxWYWx1ZTogZ2V0KGl0ZW0sIGZpZWxkIHx8ICcnLCBbXSkgfHwgW10sXG4gICAgICBydWxlczogZ2V0UnVsZXMocnVsZXMsIGxhYmVsKSxcbiAgICB9KShcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXIgfHwgbGFiZWx9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICB7b3B0aW9ucy5tYXAodmFsdWUgPT4gKFxuICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17dmFsdWV9Pnt2YWx1ZX08L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9TZWxlY3Q+LFxuICAgICl9XG4gIDwvRm9ybS5JdGVtPlxuKTtcblRhZ1NlbGVjdC5kZWZhdWx0UHJvcHMgPSB7IGxheW91dCB9O1xuZXhwb3J0IGRlZmF1bHQgVGFnU2VsZWN0O1xuIl19
