var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import TimeRange from './time-range';
import { Grid } from 'olymp-fela';
import moment from 'moment';

var TimeRanges = function (_Component) {
  _inherits(TimeRanges, _Component);

  function TimeRanges() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TimeRanges);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimeRanges.__proto__ || Object.getPrototypeOf(TimeRanges)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (i) {
      return function (v) {
        var value = _this.props.value || [];
        var onChange = _this.props.onChange;

        var newValue = [].concat(_toConsumableArray(value));
        while (newValue.length < 7) {
          newValue.push([]);
        }
        onChange(newValue.map(function (x, index) {
          return index === i ? v : x;
        }));
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimeRanges, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          className = _props.className;

      var value = this.props.value || [];
      var newValue = [].concat(_toConsumableArray(value));
      while (newValue.length < 7) {
        newValue.push([]);
      }
      var days = moment.weekdaysMin();
      days.push(days.splice(0, 1)[0]);
      return React.createElement(
        'div',
        { style: style, className: className },
        newValue.map(function (v, i) {
          return React.createElement(
            Grid,
            { style: { marginBottom: '10px' }, key: i },
            React.createElement(
              Grid.Item,
              { medium: 1 },
              '\xA0\xA0',
              days[i],
              '.'
            ),
            React.createElement(
              Grid.Item,
              { medium: 11 },
              React.createElement(TimeRange, { value: v, onChange: _this2.onChange(i) })
            )
          );
        })
      );
    }
  }]);

  return TimeRanges;
}(Component);

export { TimeRanges as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2VkaXRzL3RpbWUtcmFuZ2VzLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRpbWVSYW5nZSIsIkdyaWQiLCJtb21lbnQiLCJUaW1lUmFuZ2VzIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInByb3BzIiwibmV3VmFsdWUiLCJsZW5ndGgiLCJwdXNoIiwibWFwIiwieCIsImluZGV4IiwiaSIsInYiLCJzdHlsZSIsImNsYXNzTmFtZSIsImRheXMiLCJ3ZWVrZGF5c01pbiIsInNwbGljZSIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixjQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsWUFBckI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFFBQW5COztJQUVxQkMsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxRLEdBQVc7QUFBQSxhQUFLLGFBQUs7QUFDbkIsWUFBTUMsUUFBUSxNQUFLQyxLQUFMLENBQVdELEtBQVgsSUFBb0IsRUFBbEM7QUFEbUIsWUFFWEQsUUFGVyxHQUVFLE1BQUtFLEtBRlAsQ0FFWEYsUUFGVzs7QUFHbkIsWUFBTUcsd0NBQWVGLEtBQWYsRUFBTjtBQUNBLGVBQU9FLFNBQVNDLE1BQVQsR0FBa0IsQ0FBekIsRUFBNEI7QUFDMUJELG1CQUFTRSxJQUFULENBQWMsRUFBZDtBQUNEO0FBQ0RMLGlCQUFTRyxTQUFTRyxHQUFULENBQWEsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsaUJBQWVBLFVBQVVDLENBQVYsR0FBY0MsQ0FBZCxHQUFrQkgsQ0FBakM7QUFBQSxTQUFiLENBQVQ7QUFDRCxPQVJVO0FBQUEsSzs7Ozs7NkJBVUY7QUFBQTs7QUFBQSxtQkFDc0IsS0FBS0wsS0FEM0I7QUFBQSxVQUNDUyxLQURELFVBQ0NBLEtBREQ7QUFBQSxVQUNRQyxTQURSLFVBQ1FBLFNBRFI7O0FBRVAsVUFBTVgsUUFBUSxLQUFLQyxLQUFMLENBQVdELEtBQVgsSUFBb0IsRUFBbEM7QUFDQSxVQUFNRSx3Q0FBZUYsS0FBZixFQUFOO0FBQ0EsYUFBT0UsU0FBU0MsTUFBVCxHQUFrQixDQUF6QixFQUE0QjtBQUMxQkQsaUJBQVNFLElBQVQsQ0FBYyxFQUFkO0FBQ0Q7QUFDRCxVQUFNUSxPQUFPZixPQUFPZ0IsV0FBUCxFQUFiO0FBQ0FELFdBQUtSLElBQUwsQ0FBVVEsS0FBS0UsTUFBTCxDQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLENBQWxCLENBQVY7QUFDQSxhQUNFO0FBQUE7QUFBQSxVQUFLLE9BQU9KLEtBQVosRUFBbUIsV0FBV0MsU0FBOUI7QUFDR1QsaUJBQVNHLEdBQVQsQ0FBYSxVQUFDSSxDQUFELEVBQUlELENBQUo7QUFBQSxpQkFDWjtBQUFDLGdCQUFEO0FBQUEsY0FBTSxPQUFPLEVBQUVPLGNBQWMsTUFBaEIsRUFBYixFQUF1QyxLQUFLUCxDQUE1QztBQUNFO0FBQUMsa0JBQUQsQ0FBTSxJQUFOO0FBQUEsZ0JBQVcsUUFBUSxDQUFuQjtBQUFBO0FBQW1DSSxtQkFBS0osQ0FBTCxDQUFuQztBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUMsa0JBQUQsQ0FBTSxJQUFOO0FBQUEsZ0JBQVcsUUFBUSxFQUFuQjtBQUNFLGtDQUFDLFNBQUQsSUFBVyxPQUFPQyxDQUFsQixFQUFxQixVQUFVLE9BQUtWLFFBQUwsQ0FBY1MsQ0FBZCxDQUEvQjtBQURGO0FBRkYsV0FEWTtBQUFBLFNBQWI7QUFESCxPQURGO0FBWUQ7Ozs7RUFoQ3FDZCxTOztTQUFuQkksVSIsImZpbGUiOiJwYWNrYWdlcy91aS9lZGl0cy90aW1lLXJhbmdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZVJhbmdlIGZyb20gJy4vdGltZS1yYW5nZSc7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVSYW5nZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBvbkNoYW5nZSA9IGkgPT4gdiA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8IFtdO1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBbLi4udmFsdWVdO1xuICAgIHdoaWxlIChuZXdWYWx1ZS5sZW5ndGggPCA3KSB7XG4gICAgICBuZXdWYWx1ZS5wdXNoKFtdKTtcbiAgICB9XG4gICAgb25DaGFuZ2UobmV3VmFsdWUubWFwKCh4LCBpbmRleCkgPT4gKGluZGV4ID09PSBpID8gdiA6IHgpKSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3R5bGUsIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgW107XG4gICAgY29uc3QgbmV3VmFsdWUgPSBbLi4udmFsdWVdO1xuICAgIHdoaWxlIChuZXdWYWx1ZS5sZW5ndGggPCA3KSB7XG4gICAgICBuZXdWYWx1ZS5wdXNoKFtdKTtcbiAgICB9XG4gICAgY29uc3QgZGF5cyA9IG1vbWVudC53ZWVrZGF5c01pbigpO1xuICAgIGRheXMucHVzaChkYXlzLnNwbGljZSgwLCAxKVswXSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtuZXdWYWx1ZS5tYXAoKHYsIGkpID0+IChcbiAgICAgICAgICA8R3JpZCBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fSBrZXk9e2l9PlxuICAgICAgICAgICAgPEdyaWQuSXRlbSBtZWRpdW09ezF9PiZuYnNwOyZuYnNwO3tkYXlzW2ldfS48L0dyaWQuSXRlbT5cbiAgICAgICAgICAgIDxHcmlkLkl0ZW0gbWVkaXVtPXsxMX0+XG4gICAgICAgICAgICAgIDxUaW1lUmFuZ2UgdmFsdWU9e3Z9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlKGkpfSAvPlxuICAgICAgICAgICAgPC9HcmlkLkl0ZW0+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
