'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/icon/style');

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

var _ref2 = _react2.default.createElement(_icon2.default, { type: 'inbox' });

var _ref3 = _react2.default.createElement(_icon2.default, { type: 'check' });

var _ref4 = _react2.default.createElement(_icon2.default, { type: 'delete' });

var StateInput = function StateInput(_ref) {
  var item = _ref.item,
      field = _ref.field,
      label = _ref.label,
      layout = _ref.layout,
      initialValue = _ref.initialValue,
      _ref$rules = _ref.rules,
      rules = _ref$rules === undefined ? ['required'] : _ref$rules,
      placeholder = _ref.placeholder,
      form = _ref.form,
      rest = _objectWithoutProperties(_ref, ['item', 'field', 'label', 'layout', 'initialValue', 'rules', 'placeholder', 'form']);

  return _react2.default.createElement(
    _form2.default.Item,
    _extends({ key: field, label: label }, layout),
    form.getFieldDecorator(field, {
      initialValue: item ? item[field] : undefined,
      rules: (0, _getRules2.default)(rules, label)
    })(_react2.default.createElement(
      _select2.default,
      _extends({ style: { width: '100%' } }, rest),
      _react2.default.createElement(
        _select2.default.Option,
        { value: 'DRAFT' },
        _react2.default.createElement(
          'b',
          { style: { color: 'blue' } },
          _ref2
        ),
        ' ',
        'Ablage'
      ),
      _react2.default.createElement(
        _select2.default.Option,
        { value: 'PUBLISHED' },
        _react2.default.createElement(
          'b',
          { style: { color: 'green' } },
          _ref3
        ),
        ' ',
        'Ver\xF6ffentlicht'
      ),
      _react2.default.createElement(
        _select2.default.Option,
        { value: 'REMOVED' },
        _react2.default.createElement(
          'b',
          { style: { color: 'red' } },
          _ref4
        ),
        ' ',
        'Gel\xF6scht'
      )
    ))
  );
};
StateInput.defaultProps = { layout: _layout2.default };
exports.default = StateInput;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9lZGl0cy9zdGF0ZS5lczYiXSwibmFtZXMiOlsiU3RhdGVJbnB1dCIsIml0ZW0iLCJmaWVsZCIsImxhYmVsIiwibGF5b3V0IiwiaW5pdGlhbFZhbHVlIiwicnVsZXMiLCJwbGFjZWhvbGRlciIsImZvcm0iLCJyZXN0IiwiZ2V0RmllbGREZWNvcmF0b3IiLCJ1bmRlZmluZWQiLCJ3aWR0aCIsImNvbG9yIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7WUFxQlksZ0RBQU0sTUFBSyxPQUFYLEc7O1lBTUEsZ0RBQU0sTUFBSyxPQUFYLEc7O1lBTUEsZ0RBQU0sTUFBSyxRQUFYLEc7O0FBL0JaLElBQU1BLGFBQWEsU0FBYkEsVUFBYTtBQUFBLE1BQ2pCQyxJQURpQixRQUNqQkEsSUFEaUI7QUFBQSxNQUVqQkMsS0FGaUIsUUFFakJBLEtBRmlCO0FBQUEsTUFHakJDLEtBSGlCLFFBR2pCQSxLQUhpQjtBQUFBLE1BSWpCQyxNQUppQixRQUlqQkEsTUFKaUI7QUFBQSxNQUtqQkMsWUFMaUIsUUFLakJBLFlBTGlCO0FBQUEsd0JBTWpCQyxLQU5pQjtBQUFBLE1BTWpCQSxLQU5pQiw4QkFNVCxDQUFDLFVBQUQsQ0FOUztBQUFBLE1BT2pCQyxXQVBpQixRQU9qQkEsV0FQaUI7QUFBQSxNQVFqQkMsSUFSaUIsUUFRakJBLElBUmlCO0FBQUEsTUFTZEMsSUFUYzs7QUFBQSxTQVdqQjtBQUFBLG1CQUFNLElBQU47QUFBQSxlQUFXLEtBQUtQLEtBQWhCLEVBQXVCLE9BQU9DLEtBQTlCLElBQXlDQyxNQUF6QztBQUNHSSxTQUFLRSxpQkFBTCxDQUF1QlIsS0FBdkIsRUFBOEI7QUFDN0JHLG9CQUFjSixPQUFPQSxLQUFLQyxLQUFMLENBQVAsR0FBcUJTLFNBRE47QUFFN0JMLGFBQU8sd0JBQVNBLEtBQVQsRUFBZ0JILEtBQWhCO0FBRnNCLEtBQTlCLEVBSUM7QUFBQTtBQUFBLGlCQUFRLE9BQU8sRUFBRVMsT0FBTyxNQUFULEVBQWYsSUFBc0NILElBQXRDO0FBQ0U7QUFBQSx5QkFBUSxNQUFSO0FBQUEsVUFBZSxPQUFNLE9BQXJCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsT0FBTyxFQUFFSSxPQUFPLE1BQVQsRUFBVjtBQUFBO0FBQUEsU0FERjtBQUdPLFdBSFA7QUFBQTtBQUFBLE9BREY7QUFPRTtBQUFBLHlCQUFRLE1BQVI7QUFBQSxVQUFlLE9BQU0sV0FBckI7QUFDRTtBQUFBO0FBQUEsWUFBRyxPQUFPLEVBQUVBLE9BQU8sT0FBVCxFQUFWO0FBQUE7QUFBQSxTQURGO0FBR08sV0FIUDtBQUFBO0FBQUEsT0FQRjtBQWFFO0FBQUEseUJBQVEsTUFBUjtBQUFBLFVBQWUsT0FBTSxTQUFyQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE9BQU8sRUFBRUEsT0FBTyxLQUFULEVBQVY7QUFBQTtBQUFBLFNBREY7QUFHTyxXQUhQO0FBQUE7QUFBQTtBQWJGLEtBSkQ7QUFESCxHQVhpQjtBQUFBLENBQW5CO0FBdUNBYixXQUFXYyxZQUFYLEdBQTBCLEVBQUVWLHdCQUFGLEVBQTFCO2tCQUNlSixVIiwiZmlsZSI6ImNtcy9wYWdlcy9lZGl0cy9zdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBTZWxlY3QsIEljb24gfSBmcm9tICdhbnRkJztcbmltcG9ydCBnZXRSdWxlcyBmcm9tICcuLi9nZXQtcnVsZXMnO1xuaW1wb3J0IGxheW91dCBmcm9tICcuLi9sYXlvdXQnO1xuXG5jb25zdCBTdGF0ZUlucHV0ID0gKHtcbiAgaXRlbSxcbiAgZmllbGQsXG4gIGxhYmVsLFxuICBsYXlvdXQsXG4gIGluaXRpYWxWYWx1ZSxcbiAgcnVsZXMgPSBbJ3JlcXVpcmVkJ10sXG4gIHBsYWNlaG9sZGVyLFxuICBmb3JtLFxuICAuLi5yZXN0XG59KSA9PiAoXG4gIDxGb3JtLkl0ZW0ga2V5PXtmaWVsZH0gbGFiZWw9e2xhYmVsfSB7Li4ubGF5b3V0fT5cbiAgICB7Zm9ybS5nZXRGaWVsZERlY29yYXRvcihmaWVsZCwge1xuICAgICAgaW5pdGlhbFZhbHVlOiBpdGVtID8gaXRlbVtmaWVsZF0gOiB1bmRlZmluZWQsXG4gICAgICBydWxlczogZ2V0UnVsZXMocnVsZXMsIGxhYmVsKSxcbiAgICB9KShcbiAgICAgIDxTZWxlY3Qgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSB7Li4ucmVzdH0+XG4gICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiRFJBRlRcIj5cbiAgICAgICAgICA8YiBzdHlsZT17eyBjb2xvcjogJ2JsdWUnIH19PlxuICAgICAgICAgICAgPEljb24gdHlwZT1cImluYm94XCIgLz5cbiAgICAgICAgICA8L2I+eycgJ31cbiAgICAgICAgICBBYmxhZ2VcbiAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIlBVQkxJU0hFRFwiPlxuICAgICAgICAgIDxiIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PlxuICAgICAgICAgICAgPEljb24gdHlwZT1cImNoZWNrXCIgLz5cbiAgICAgICAgICA8L2I+eycgJ31cbiAgICAgICAgICBWZXLDtmZmZW50bGljaHRcbiAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIlJFTU9WRURcIj5cbiAgICAgICAgICA8YiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XG4gICAgICAgICAgICA8SWNvbiB0eXBlPVwiZGVsZXRlXCIgLz5cbiAgICAgICAgICA8L2I+eycgJ31cbiAgICAgICAgICBHZWzDtnNjaHRcbiAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgPC9TZWxlY3Q+LFxuICAgICl9XG4gIDwvRm9ybS5JdGVtPlxuKTtcblN0YXRlSW5wdXQuZGVmYXVsdFByb3BzID0geyBsYXlvdXQgfTtcbmV4cG9ydCBkZWZhdWx0IFN0YXRlSW5wdXQ7XG4iXX0=
