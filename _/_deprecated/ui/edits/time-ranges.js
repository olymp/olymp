'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _timeRange = require('./time-range');

var _timeRange2 = _interopRequireDefault(_timeRange);

var _olympFela = require('olymp-fela');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      var days = _moment2.default.weekdaysMin();
      days.push(days.splice(0, 1)[0]);
      return _react2.default.createElement(
        'div',
        { style: style, className: className },
        newValue.map(function (v, i) {
          return _react2.default.createElement(
            _olympFela.Grid,
            { style: { marginBottom: '10px' }, key: i },
            _react2.default.createElement(
              _olympFela.Grid.Item,
              { medium: 1 },
              '\xA0\xA0',
              days[i],
              '.'
            ),
            _react2.default.createElement(
              _olympFela.Grid.Item,
              { medium: 11 },
              _react2.default.createElement(_timeRange2.default, { value: v, onChange: _this2.onChange(i) })
            )
          );
        })
      );
    }
  }]);

  return TimeRanges;
}(_react.Component);

exports.default = TimeRanges;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2VkaXRzL3RpbWUtcmFuZ2VzLmVzNiJdLCJuYW1lcyI6WyJUaW1lUmFuZ2VzIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInByb3BzIiwibmV3VmFsdWUiLCJsZW5ndGgiLCJwdXNoIiwibWFwIiwieCIsImluZGV4IiwiaSIsInYiLCJzdHlsZSIsImNsYXNzTmFtZSIsImRheXMiLCJ3ZWVrZGF5c01pbiIsInNwbGljZSIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxRLEdBQVc7QUFBQSxhQUFLLGFBQUs7QUFDbkIsWUFBTUMsUUFBUSxNQUFLQyxLQUFMLENBQVdELEtBQVgsSUFBb0IsRUFBbEM7QUFEbUIsWUFFWEQsUUFGVyxHQUVFLE1BQUtFLEtBRlAsQ0FFWEYsUUFGVzs7QUFHbkIsWUFBTUcsd0NBQWVGLEtBQWYsRUFBTjtBQUNBLGVBQU9FLFNBQVNDLE1BQVQsR0FBa0IsQ0FBekIsRUFBNEI7QUFDMUJELG1CQUFTRSxJQUFULENBQWMsRUFBZDtBQUNEO0FBQ0RMLGlCQUFTRyxTQUFTRyxHQUFULENBQWEsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsaUJBQWVBLFVBQVVDLENBQVYsR0FBY0MsQ0FBZCxHQUFrQkgsQ0FBakM7QUFBQSxTQUFiLENBQVQ7QUFDRCxPQVJVO0FBQUEsSzs7Ozs7NkJBVUY7QUFBQTs7QUFBQSxtQkFDc0IsS0FBS0wsS0FEM0I7QUFBQSxVQUNDUyxLQURELFVBQ0NBLEtBREQ7QUFBQSxVQUNRQyxTQURSLFVBQ1FBLFNBRFI7O0FBRVAsVUFBTVgsUUFBUSxLQUFLQyxLQUFMLENBQVdELEtBQVgsSUFBb0IsRUFBbEM7QUFDQSxVQUFNRSx3Q0FBZUYsS0FBZixFQUFOO0FBQ0EsYUFBT0UsU0FBU0MsTUFBVCxHQUFrQixDQUF6QixFQUE0QjtBQUMxQkQsaUJBQVNFLElBQVQsQ0FBYyxFQUFkO0FBQ0Q7QUFDRCxVQUFNUSxPQUFPLGlCQUFPQyxXQUFQLEVBQWI7QUFDQUQsV0FBS1IsSUFBTCxDQUFVUSxLQUFLRSxNQUFMLENBQVksQ0FBWixFQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBVjtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssT0FBT0osS0FBWixFQUFtQixXQUFXQyxTQUE5QjtBQUNHVCxpQkFBU0csR0FBVCxDQUFhLFVBQUNJLENBQUQsRUFBSUQsQ0FBSjtBQUFBLGlCQUNaO0FBQUE7QUFBQSxjQUFNLE9BQU8sRUFBRU8sY0FBYyxNQUFoQixFQUFiLEVBQXVDLEtBQUtQLENBQTVDO0FBQ0U7QUFBQSw4QkFBTSxJQUFOO0FBQUEsZ0JBQVcsUUFBUSxDQUFuQjtBQUFBO0FBQW1DSSxtQkFBS0osQ0FBTCxDQUFuQztBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUEsOEJBQU0sSUFBTjtBQUFBLGdCQUFXLFFBQVEsRUFBbkI7QUFDRSxtRUFBVyxPQUFPQyxDQUFsQixFQUFxQixVQUFVLE9BQUtWLFFBQUwsQ0FBY1MsQ0FBZCxDQUEvQjtBQURGO0FBRkYsV0FEWTtBQUFBLFNBQWI7QUFESCxPQURGO0FBWUQ7Ozs7OztrQkFoQ2tCVixVIiwiZmlsZSI6ImV4dGVybmFsL3VpL2VkaXRzL3RpbWUtcmFuZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaW1lUmFuZ2UgZnJvbSAnLi90aW1lLXJhbmdlJztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVJhbmdlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uQ2hhbmdlID0gaSA9PiB2ID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgW107XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBuZXdWYWx1ZSA9IFsuLi52YWx1ZV07XG4gICAgd2hpbGUgKG5ld1ZhbHVlLmxlbmd0aCA8IDcpIHtcbiAgICAgIG5ld1ZhbHVlLnB1c2goW10pO1xuICAgIH1cbiAgICBvbkNoYW5nZShuZXdWYWx1ZS5tYXAoKHgsIGluZGV4KSA9PiAoaW5kZXggPT09IGkgPyB2IDogeCkpKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdHlsZSwgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSB8fCBbXTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IFsuLi52YWx1ZV07XG4gICAgd2hpbGUgKG5ld1ZhbHVlLmxlbmd0aCA8IDcpIHtcbiAgICAgIG5ld1ZhbHVlLnB1c2goW10pO1xuICAgIH1cbiAgICBjb25zdCBkYXlzID0gbW9tZW50LndlZWtkYXlzTWluKCk7XG4gICAgZGF5cy5wdXNoKGRheXMuc3BsaWNlKDAsIDEpWzBdKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge25ld1ZhbHVlLm1hcCgodiwgaSkgPT4gKFxuICAgICAgICAgIDxHcmlkIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzEwcHgnIH19IGtleT17aX0+XG4gICAgICAgICAgICA8R3JpZC5JdGVtIG1lZGl1bT17MX0+Jm5ic3A7Jm5ic3A7e2RheXNbaV19LjwvR3JpZC5JdGVtPlxuICAgICAgICAgICAgPEdyaWQuSXRlbSBtZWRpdW09ezExfT5cbiAgICAgICAgICAgICAgPFRpbWVSYW5nZSB2YWx1ZT17dn0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoaSl9IC8+XG4gICAgICAgICAgICA8L0dyaWQuSXRlbT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19
