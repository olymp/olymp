import 'antd/lib/date-picker/style';
import _DatePicker from 'antd/lib/date-picker';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import moment from 'moment';

var RangePicker = _DatePicker.RangePicker;

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
          value = +moment(value.replace(/"/g, ''));
        }
        return value ? moment(value) : null;
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatePickerInt, [{
    key: 'render',
    value: function render() {
      return React.createElement(RangePicker, _extends({}, this.props, {
        value: this.getValue(),
        placeholder: ['Start', 'Ende'],
        onChange: this.onChange
      }));
    }
  }]);

  return DatePickerInt;
}(Component);

export { DatePickerInt as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2VkaXRzL2RhdGUtcmFuZ2UuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwibW9tZW50IiwiUmFuZ2VQaWNrZXIiLCJEYXRlUGlja2VySW50Iiwib25DaGFuZ2UiLCJlIiwicHJvcHMiLCJ2YWx1ZSIsIm1hcCIsImxlbmd0aCIsInB1c2giLCJnZXRWYWx1ZSIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQzs7QUFFQSxPQUFPQyxNQUFQLE1BQW1CLFFBQW5COztJQUVRQyxXLGVBQUFBLFc7O0lBRWFDLGE7Ozs7Ozs7Ozs7Ozs7O29NQUNuQkMsUSxHQUFXLFVBQUNDLENBQUQsRUFBTztBQUFBLFVBQ1JELFFBRFEsR0FDSyxNQUFLRSxLQURWLENBQ1JGLFFBRFE7O0FBRWhCLFVBQU1HLFFBQVFGLElBQUlBLEVBQUVHLEdBQUYsQ0FBTTtBQUFBLGVBQUssQ0FBQ0gsQ0FBTjtBQUFBLE9BQU4sQ0FBSixHQUFxQixFQUFuQztBQUNBLGFBQU9FLE1BQU1FLE1BQU4sR0FBZSxDQUF0QixFQUF5QjtBQUN2QkYsY0FBTUcsSUFBTixDQUFXLElBQVg7QUFDRDtBQUNETixlQUFTRyxLQUFUO0FBQ0QsSyxRQUVESSxRLEdBQVcsWUFBTTtBQUFBLFVBQ1BKLEtBRE8sR0FDRyxNQUFLRCxLQURSLENBQ1BDLEtBRE87QUFFZjs7QUFDQSxhQUFPLENBQUNBLFNBQVMsRUFBVixFQUFjQyxHQUFkLENBQWtCLFVBQUNELEtBQUQsRUFBVztBQUNsQyxZQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0JBLGtCQUFRLENBQUNOLE9BQU9NLE1BQU1LLE9BQU4sQ0FBYyxJQUFkLEVBQW9CLEVBQXBCLENBQVAsQ0FBVDtBQUNEO0FBQ0QsZUFBT0wsUUFBUU4sT0FBT00sS0FBUCxDQUFSLEdBQXdCLElBQS9CO0FBQ0QsT0FMTSxDQUFQO0FBTUQsSzs7Ozs7NkJBRVE7QUFDUCxhQUNFLG9CQUFDLFdBQUQsZUFDTSxLQUFLRCxLQURYO0FBRUUsZUFBTyxLQUFLSyxRQUFMLEVBRlQ7QUFHRSxxQkFBYSxDQUFDLE9BQUQsRUFBVSxNQUFWLENBSGY7QUFJRSxrQkFBVSxLQUFLUDtBQUpqQixTQURGO0FBUUQ7Ozs7RUE5QndDSixTOztTQUF0QkcsYSIsImZpbGUiOiJwYWNrYWdlcy91aS9lZGl0cy9kYXRlLXJhbmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuY29uc3QgeyBSYW5nZVBpY2tlciB9ID0gRGF0ZVBpY2tlcjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVBpY2tlckludCBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHZhbHVlID0gZSA/IGUubWFwKGUgPT4gK2UpIDogW107XG4gICAgd2hpbGUgKHZhbHVlLmxlbmd0aCA8IDIpIHtcbiAgICAgIHZhbHVlLnB1c2gobnVsbCk7XG4gICAgfVxuICAgIG9uQ2hhbmdlKHZhbHVlKTtcbiAgfTtcblxuICBnZXRWYWx1ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIDIwMTQtMDktMTRUMTA6MzI6MjcuODMxWlxuICAgIHJldHVybiAodmFsdWUgfHwgW10pLm1hcCgodmFsdWUpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhbHVlID0gK21vbWVudCh2YWx1ZS5yZXBsYWNlKC9cIi9nLCAnJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlID8gbW9tZW50KHZhbHVlKSA6IG51bGw7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmFuZ2VQaWNrZXJcbiAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgIHZhbHVlPXt0aGlzLmdldFZhbHVlKCl9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtbJ1N0YXJ0JywgJ0VuZGUnXX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
