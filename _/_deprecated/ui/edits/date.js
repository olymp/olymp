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

var _olympFela = require('olymp-fela');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyledDatePicker = (0, _olympFela.createComponent)(function () {
  return {
    width: '100%'
  };
}, function (p) {
  return _react2.default.createElement(_datePicker2.default, p);
}, function (p) {
  return Object.keys(p);
});

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

      var value = !e ? null : +e;
      onChange(value);
    }, _this.getValue = function () {
      var value = _this.props.value;
      // 2014-09-14T10:32:27.831Z

      if (typeof value === 'string') {
        value = +(0, _moment2.default)(value.replace(/"/g, ''));
      }
      return value ? (0, _moment2.default)(value) : undefined;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatePickerInt, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(StyledDatePicker, _extends({}, this.props, {
        value: this.getValue(),
        onChange: this.onChange
      }));
    }
  }]);

  return DatePickerInt;
}(_react.Component);

exports.default = DatePickerInt;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2VkaXRzL2RhdGUuZXM2Il0sIm5hbWVzIjpbIlN0eWxlZERhdGVQaWNrZXIiLCJ3aWR0aCIsInAiLCJPYmplY3QiLCJrZXlzIiwiRGF0ZVBpY2tlckludCIsIm9uQ2hhbmdlIiwicHJvcHMiLCJ2YWx1ZSIsImUiLCJnZXRWYWx1ZSIsInJlcGxhY2UiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CLGdDQUN2QjtBQUFBLFNBQU87QUFDTEMsV0FBTztBQURGLEdBQVA7QUFBQSxDQUR1QixFQUl2QjtBQUFBLFNBQUssb0RBQWdCQyxDQUFoQixDQUFMO0FBQUEsQ0FKdUIsRUFLdkI7QUFBQSxTQUFLQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBTDtBQUFBLENBTHVCLENBQXpCOztJQVFxQkcsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxRLEdBQVcsYUFBSztBQUFBLFVBQ05BLFFBRE0sR0FDTyxNQUFLQyxLQURaLENBQ05ELFFBRE07O0FBRWQsVUFBTUUsUUFBUSxDQUFDQyxDQUFELEdBQUssSUFBTCxHQUFZLENBQUNBLENBQTNCO0FBQ0FILGVBQVNFLEtBQVQ7QUFDRCxLLFFBRURFLFEsR0FBVyxZQUFNO0FBQUEsVUFDVEYsS0FEUyxHQUNDLE1BQUtELEtBRE4sQ0FDVEMsS0FEUztBQUVmOztBQUNBLFVBQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QkEsZ0JBQVEsQ0FBQyxzQkFBT0EsTUFBTUcsT0FBTixDQUFjLElBQWQsRUFBb0IsRUFBcEIsQ0FBUCxDQUFUO0FBQ0Q7QUFDRCxhQUFPSCxRQUFRLHNCQUFPQSxLQUFQLENBQVIsR0FBd0JJLFNBQS9CO0FBQ0QsSzs7Ozs7NkJBRVE7QUFDUCxhQUNFLDhCQUFDLGdCQUFELGVBQ00sS0FBS0wsS0FEWDtBQUVFLGVBQU8sS0FBS0csUUFBTCxFQUZUO0FBR0Usa0JBQVUsS0FBS0o7QUFIakIsU0FERjtBQU9EOzs7Ozs7a0JBeEJrQkQsYSIsImZpbGUiOiJleHRlcm5hbC91aS9lZGl0cy9kYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBTdHlsZWREYXRlUGlja2VyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoKSA9PiAoe1xuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0pLFxuICBwID0+IDxEYXRlUGlja2VyIHsuLi5wfSAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVQaWNrZXJJbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBvbkNoYW5nZSA9IGUgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsdWUgPSAhZSA/IG51bGwgOiArZTtcbiAgICBvbkNoYW5nZSh2YWx1ZSk7XG4gIH07XG5cbiAgZ2V0VmFsdWUgPSAoKSA9PiB7XG4gICAgbGV0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gMjAxNC0wOS0xNFQxMDozMjoyNy44MzFaXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gK21vbWVudCh2YWx1ZS5yZXBsYWNlKC9cIi9nLCAnJykpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUgPyBtb21lbnQodmFsdWUpIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZERhdGVQaWNrZXJcbiAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgIHZhbHVlPXt0aGlzLmdldFZhbHVlKCl9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0=
