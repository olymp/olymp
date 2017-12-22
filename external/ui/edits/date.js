import 'antd/lib/date-picker/style';
import _DatePicker from 'antd/lib/date-picker';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { createComponent } from 'olymp-fela';

import moment from 'moment';

var StyledDatePicker = createComponent(function () {
  return {
    width: '100%'
  };
}, function (p) {
  return React.createElement(_DatePicker, p);
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
        value = +moment(value.replace(/"/g, ''));
      }
      return value ? moment(value) : undefined;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatePickerInt, [{
    key: 'render',
    value: function render() {
      return React.createElement(StyledDatePicker, _extends({}, this.props, {
        value: this.getValue(),
        onChange: this.onChange
      }));
    }
  }]);

  return DatePickerInt;
}(Component);

export { DatePickerInt as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2VkaXRzL2RhdGUuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlQ29tcG9uZW50IiwibW9tZW50IiwiU3R5bGVkRGF0ZVBpY2tlciIsIndpZHRoIiwicCIsIk9iamVjdCIsImtleXMiLCJEYXRlUGlja2VySW50Iiwib25DaGFuZ2UiLCJwcm9wcyIsInZhbHVlIiwiZSIsImdldFZhbHVlIiwicmVwbGFjZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQzs7QUFFQSxPQUFPQyxNQUFQLE1BQW1CLFFBQW5COztBQUVBLElBQU1DLG1CQUFtQkYsZ0JBQ3ZCO0FBQUEsU0FBTztBQUNMRyxXQUFPO0FBREYsR0FBUDtBQUFBLENBRHVCLEVBSXZCO0FBQUEsU0FBSyxpQ0FBZ0JDLENBQWhCLENBQUw7QUFBQSxDQUp1QixFQUt2QjtBQUFBLFNBQUtDLE9BQU9DLElBQVAsQ0FBWUYsQ0FBWixDQUFMO0FBQUEsQ0FMdUIsQ0FBekI7O0lBUXFCRyxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLFEsR0FBVyxhQUFLO0FBQUEsVUFDTkEsUUFETSxHQUNPLE1BQUtDLEtBRFosQ0FDTkQsUUFETTs7QUFFZCxVQUFNRSxRQUFRLENBQUNDLENBQUQsR0FBSyxJQUFMLEdBQVksQ0FBQ0EsQ0FBM0I7QUFDQUgsZUFBU0UsS0FBVDtBQUNELEssUUFFREUsUSxHQUFXLFlBQU07QUFBQSxVQUNURixLQURTLEdBQ0MsTUFBS0QsS0FETixDQUNUQyxLQURTO0FBRWY7O0FBQ0EsVUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCQSxnQkFBUSxDQUFDVCxPQUFPUyxNQUFNRyxPQUFOLENBQWMsSUFBZCxFQUFvQixFQUFwQixDQUFQLENBQVQ7QUFDRDtBQUNELGFBQU9ILFFBQVFULE9BQU9TLEtBQVAsQ0FBUixHQUF3QkksU0FBL0I7QUFDRCxLOzs7Ozs2QkFFUTtBQUNQLGFBQ0Usb0JBQUMsZ0JBQUQsZUFDTSxLQUFLTCxLQURYO0FBRUUsZUFBTyxLQUFLRyxRQUFMLEVBRlQ7QUFHRSxrQkFBVSxLQUFLSjtBQUhqQixTQURGO0FBT0Q7Ozs7RUF4QndDVCxTOztTQUF0QlEsYSIsImZpbGUiOiJwYWNrYWdlcy91aS9lZGl0cy9kYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBTdHlsZWREYXRlUGlja2VyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoKSA9PiAoe1xuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0pLFxuICBwID0+IDxEYXRlUGlja2VyIHsuLi5wfSAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVQaWNrZXJJbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBvbkNoYW5nZSA9IGUgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsdWUgPSAhZSA/IG51bGwgOiArZTtcbiAgICBvbkNoYW5nZSh2YWx1ZSk7XG4gIH07XG5cbiAgZ2V0VmFsdWUgPSAoKSA9PiB7XG4gICAgbGV0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gMjAxNC0wOS0xNFQxMDozMjoyNy44MzFaXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gK21vbWVudCh2YWx1ZS5yZXBsYWNlKC9cIi9nLCAnJykpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUgPyBtb21lbnQodmFsdWUpIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZERhdGVQaWNrZXJcbiAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgIHZhbHVlPXt0aGlzLmdldFZhbHVlKCl9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0=
