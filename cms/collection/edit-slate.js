'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/button/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _slateWriter = require('olymp-slate/slate-writer');

var _slateWriter2 = _interopRequireDefault(_slateWriter);

var _formItem = require('./form-item');

var _formItem2 = _interopRequireDefault(_formItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var enhance = (0, _recompose.compose)((0, _recompose.withState)('isOpen', 'setOpen', false), _recompose.toClass);

exports.default = {
  rule: function rule(_ref) {
    var innerType = _ref.innerType;
    return innerType.name === 'Blocks';
  },
  form: enhance(function (_ref2) {
    var isOpen = _ref2.isOpen,
        setOpen = _ref2.setOpen,
        dataField = _ref2['data-__field'],
        dataMeta = _ref2['data-__meta'],
        onChange = _ref2.onChange,
        value = _ref2.value,
        binding = _ref2.binding,
        label = _ref2.label,
        children = _ref2.children,
        p = _objectWithoutProperties(_ref2, ['isOpen', 'setOpen', 'data-__field', 'data-__meta', 'onChange', 'value', 'binding', 'label', 'children']);

    return _react2.default.createElement(
      _formItem2.default,
      _extends({ label: label }, p),
      _react2.default.createElement(
        _button2.default.Group,
        { 'data-__field': dataField, 'data-__meta': dataMeta },
        _react2.default.createElement(
          _button2.default,
          {
            type: isOpen === true ? 'primary' : 'default',
            onClick: function onClick() {
              return setOpen(!isOpen);
            }
          },
          'Bearbeiten'
        ),
        _react2.default.createElement(
          _button2.default,
          { onClick: function onClick() {
              return setOpen('full');
            } },
          'Vollbildmodus'
        )
      ),
      isOpen && _react2.default.createElement(
        _slateWriter2.default,
        {
          onChange: onChange,
          value: value,
          binding: binding,
          placeholder: label || 'Hier Text eingeben!',
          style: { padding: 20 },
          full: isOpen === 'full',
          setFull: function setFull() {
            return setOpen(false);
          }
        },
        children
      )
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2VkaXQtc2xhdGUuZXM2Il0sIm5hbWVzIjpbImVuaGFuY2UiLCJydWxlIiwiaW5uZXJUeXBlIiwibmFtZSIsImZvcm0iLCJpc09wZW4iLCJzZXRPcGVuIiwiZGF0YUZpZWxkIiwiZGF0YU1ldGEiLCJvbkNoYW5nZSIsInZhbHVlIiwiYmluZGluZyIsImxhYmVsIiwiY2hpbGRyZW4iLCJwIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSx3QkFBUSwwQkFBVSxRQUFWLEVBQW9CLFNBQXBCLEVBQStCLEtBQS9CLENBQVIscUJBQWhCOztrQkFFZTtBQUNiQyxRQUFNO0FBQUEsUUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsV0FBbUJBLFVBQVVDLElBQVYsS0FBbUIsUUFBdEM7QUFBQSxHQURPO0FBRWJDLFFBQU1KLFFBQ0o7QUFBQSxRQUNFSyxNQURGLFNBQ0VBLE1BREY7QUFBQSxRQUVFQyxPQUZGLFNBRUVBLE9BRkY7QUFBQSxRQUdrQkMsU0FIbEIsU0FHRSxjQUhGO0FBQUEsUUFJaUJDLFFBSmpCLFNBSUUsYUFKRjtBQUFBLFFBS0VDLFFBTEYsU0FLRUEsUUFMRjtBQUFBLFFBTUVDLEtBTkYsU0FNRUEsS0FORjtBQUFBLFFBT0VDLE9BUEYsU0FPRUEsT0FQRjtBQUFBLFFBUUVDLEtBUkYsU0FRRUEsS0FSRjtBQUFBLFFBU0VDLFFBVEYsU0FTRUEsUUFURjtBQUFBLFFBVUtDLENBVkwseURBR0UsY0FIRixFQUlFLGFBSkY7O0FBQUEsV0FZRTtBQUFBO0FBQUEsaUJBQVUsT0FBT0YsS0FBakIsSUFBNEJFLENBQTVCO0FBQ0U7QUFBQSx5QkFBUSxLQUFSO0FBQUEsVUFBYyxnQkFBY1AsU0FBNUIsRUFBdUMsZUFBYUMsUUFBcEQ7QUFDRTtBQUFBO0FBQUE7QUFDRSxrQkFBTUgsV0FBVyxJQUFYLEdBQWtCLFNBQWxCLEdBQThCLFNBRHRDO0FBRUUscUJBQVM7QUFBQSxxQkFBTUMsUUFBUSxDQUFDRCxNQUFULENBQU47QUFBQTtBQUZYO0FBQUE7QUFBQSxTQURGO0FBT0U7QUFBQTtBQUFBLFlBQVEsU0FBUztBQUFBLHFCQUFNQyxRQUFRLE1BQVIsQ0FBTjtBQUFBLGFBQWpCO0FBQUE7QUFBQTtBQVBGLE9BREY7QUFXR0QsZ0JBQ0M7QUFBQTtBQUFBO0FBQ0Usb0JBQVVJLFFBRFo7QUFFRSxpQkFBT0MsS0FGVDtBQUdFLG1CQUFTQyxPQUhYO0FBSUUsdUJBQWFDLFNBQVMscUJBSnhCO0FBS0UsaUJBQU8sRUFBRUcsU0FBUyxFQUFYLEVBTFQ7QUFNRSxnQkFBTVYsV0FBVyxNQU5uQjtBQU9FLG1CQUFTO0FBQUEsbUJBQU1DLFFBQVEsS0FBUixDQUFOO0FBQUE7QUFQWDtBQVNHTztBQVRIO0FBWkosS0FaRjtBQUFBLEdBREk7QUFGTyxDIiwiZmlsZSI6ImNtcy9jb2xsZWN0aW9uL2VkaXQtc2xhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSwgdG9DbGFzcywgd2l0aFN0YXRlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCBTbGF0ZVdyaXRlciBmcm9tICdvbHltcC1zbGF0ZS9zbGF0ZS13cml0ZXInO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgRm9ybUl0ZW0gZnJvbSAnLi9mb3JtLWl0ZW0nO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZSh3aXRoU3RhdGUoJ2lzT3BlbicsICdzZXRPcGVuJywgZmFsc2UpLCB0b0NsYXNzKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBydWxlOiAoeyBpbm5lclR5cGUgfSkgPT4gaW5uZXJUeXBlLm5hbWUgPT09ICdCbG9ja3MnLFxuICBmb3JtOiBlbmhhbmNlKFxuICAgICh7XG4gICAgICBpc09wZW4sXG4gICAgICBzZXRPcGVuLFxuICAgICAgJ2RhdGEtX19maWVsZCc6IGRhdGFGaWVsZCxcbiAgICAgICdkYXRhLV9fbWV0YSc6IGRhdGFNZXRhLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICB2YWx1ZSxcbiAgICAgIGJpbmRpbmcsXG4gICAgICBsYWJlbCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgLi4ucFxuICAgIH0pID0+IChcbiAgICAgIDxGb3JtSXRlbSBsYWJlbD17bGFiZWx9IHsuLi5wfT5cbiAgICAgICAgPEJ1dHRvbi5Hcm91cCBkYXRhLV9fZmllbGQ9e2RhdGFGaWVsZH0gZGF0YS1fX21ldGE9e2RhdGFNZXRhfT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPXtpc09wZW4gPT09IHRydWUgPyAncHJpbWFyeScgOiAnZGVmYXVsdCd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFpc09wZW4pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJlYXJiZWl0ZW5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oJ2Z1bGwnKX0+Vm9sbGJpbGRtb2R1czwvQnV0dG9uPlxuICAgICAgICA8L0J1dHRvbi5Hcm91cD5cblxuICAgICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgICA8U2xhdGVXcml0ZXJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIGJpbmRpbmc9e2JpbmRpbmd9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17bGFiZWwgfHwgJ0hpZXIgVGV4dCBlaW5nZWJlbiEnfVxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogMjAgfX1cbiAgICAgICAgICAgIGZ1bGw9e2lzT3BlbiA9PT0gJ2Z1bGwnfVxuICAgICAgICAgICAgc2V0RnVsbD17KCkgPT4gc2V0T3BlbihmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvU2xhdGVXcml0ZXI+XG4gICAgICAgICl9XG4gICAgICA8L0Zvcm1JdGVtPlxuICAgICksXG4gICksXG59O1xuIl19
