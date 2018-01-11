'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/date-picker/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RangePicker = _datePicker2.default.RangePicker;

var DatePickerInt = function (_Component) {
  _inherits(DatePickerInt, _Component);

  function DatePickerInt() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DatePickerInt);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatePickerInt.__proto__ || Object.getPrototypeOf(DatePickerInt)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (e) {
      var onChange = _this.props.onChange;

      var value = e ? e.map(function (e) {
        return +e;
      }) : [];
      while (value.length < 2) {
        value.push(null);
      }
      onChange(value);
    }, _this.getValue = function () {
      var value = _this.props.value;
      // 2014-09-14T10:32:27.831Z

      return (value || []).map(function (value) {
        if (typeof value === 'string') {
          value = +(0, _moment2.default)(value.replace(/"/g, ''));
        }
        return value ? (0, _moment2.default)(value) : null;
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatePickerInt, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(RangePicker, _extends({}, this.props, {
        value: this.getValue(),
        placeholder: ['Start', 'Ende'],
        onChange: this.onChange
      }));
    }
  }]);

  return DatePickerInt;
}(_react.Component);

exports.default = DatePickerInt;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2VkaXRzL2RhdGUtcmFuZ2UuZXM2Il0sIm5hbWVzIjpbIlJhbmdlUGlja2VyIiwiRGF0ZVBpY2tlckludCIsIm9uQ2hhbmdlIiwiZSIsInByb3BzIiwidmFsdWUiLCJtYXAiLCJsZW5ndGgiLCJwdXNoIiwiZ2V0VmFsdWUiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVRQSxXLHdCQUFBQSxXOztJQUVhQyxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLFEsR0FBVyxVQUFDQyxDQUFELEVBQU87QUFBQSxVQUNSRCxRQURRLEdBQ0ssTUFBS0UsS0FEVixDQUNSRixRQURROztBQUVoQixVQUFNRyxRQUFRRixJQUFJQSxFQUFFRyxHQUFGLENBQU07QUFBQSxlQUFLLENBQUNILENBQU47QUFBQSxPQUFOLENBQUosR0FBcUIsRUFBbkM7QUFDQSxhQUFPRSxNQUFNRSxNQUFOLEdBQWUsQ0FBdEIsRUFBeUI7QUFDdkJGLGNBQU1HLElBQU4sQ0FBVyxJQUFYO0FBQ0Q7QUFDRE4sZUFBU0csS0FBVDtBQUNELEssUUFFREksUSxHQUFXLFlBQU07QUFBQSxVQUNQSixLQURPLEdBQ0csTUFBS0QsS0FEUixDQUNQQyxLQURPO0FBRWY7O0FBQ0EsYUFBTyxDQUFDQSxTQUFTLEVBQVYsRUFBY0MsR0FBZCxDQUFrQixVQUFDRCxLQUFELEVBQVc7QUFDbEMsWUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCQSxrQkFBUSxDQUFDLHNCQUFPQSxNQUFNSyxPQUFOLENBQWMsSUFBZCxFQUFvQixFQUFwQixDQUFQLENBQVQ7QUFDRDtBQUNELGVBQU9MLFFBQVEsc0JBQU9BLEtBQVAsQ0FBUixHQUF3QixJQUEvQjtBQUNELE9BTE0sQ0FBUDtBQU1ELEs7Ozs7OzZCQUVRO0FBQ1AsYUFDRSw4QkFBQyxXQUFELGVBQ00sS0FBS0QsS0FEWDtBQUVFLGVBQU8sS0FBS0ssUUFBTCxFQUZUO0FBR0UscUJBQWEsQ0FBQyxPQUFELEVBQVUsTUFBVixDQUhmO0FBSUUsa0JBQVUsS0FBS1A7QUFKakIsU0FERjtBQVFEOzs7Ozs7a0JBOUJrQkQsYSIsImZpbGUiOiJleHRlcm5hbC91aS9lZGl0cy9kYXRlLXJhbmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuY29uc3QgeyBSYW5nZVBpY2tlciB9ID0gRGF0ZVBpY2tlcjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVBpY2tlckludCBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHZhbHVlID0gZSA/IGUubWFwKGUgPT4gK2UpIDogW107XG4gICAgd2hpbGUgKHZhbHVlLmxlbmd0aCA8IDIpIHtcbiAgICAgIHZhbHVlLnB1c2gobnVsbCk7XG4gICAgfVxuICAgIG9uQ2hhbmdlKHZhbHVlKTtcbiAgfTtcblxuICBnZXRWYWx1ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIDIwMTQtMDktMTRUMTA6MzI6MjcuODMxWlxuICAgIHJldHVybiAodmFsdWUgfHwgW10pLm1hcCgodmFsdWUpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhbHVlID0gK21vbWVudCh2YWx1ZS5yZXBsYWNlKC9cIi9nLCAnJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlID8gbW9tZW50KHZhbHVlKSA6IG51bGw7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmFuZ2VQaWNrZXJcbiAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgIHZhbHVlPXt0aGlzLmdldFZhbHVlKCl9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtbJ1N0YXJ0JywgJ0VuZGUnXX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
