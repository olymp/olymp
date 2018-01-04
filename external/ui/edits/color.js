'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/select/style');

require('antd/lib/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _decorators = require('../decorators');

var _faMagic = require('olymp-icons/lib/fa-magic');

var _faMagic2 = _interopRequireDefault(_faMagic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ColorPicker = null;
if (typeof document !== 'undefined') {
  // ColorPicker = require('@mapbox/react-colorpickr');
}

var hasNativePicker = function hasNativePicker() {
  if (!ColorPicker) {
    return true;
  }
  if (typeof document === 'undefined') {
    return true;
  }
  if (!document.createElement) {
    return true;
  }
  var i = document.createElement('input');
  i.setAttribute('type', 'color');
  return i.type !== 'text';
};

var _ref2 = _react2.default.createElement(
  _select2.default.Option,
  { value: 'other', key: 'other' },
  _react2.default.createElement(
    'span',
    { className: 'react-custom-trigger' },
    'Eigene Farbe'
  )
);

var ColorEditor = function ColorEditor(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      _ref$colors = _ref.colors,
      colors = _ref$colors === undefined ? [] : _ref$colors,
      rest = _objectWithoutProperties(_ref, ['value', 'onChange', 'colors']);

  var newColors = [].concat(_toConsumableArray(colors));
  if (!value) {
    value = '#000000';
  }

  var isOwnColor = void 0;
  if (value && value !== 'other') {
    var valueIndex = colors.findIndex(function (color) {
      return (0, _tinycolor2.default)(value).toRgbString() === (0, _tinycolor2.default)(color.color).toRgbString();
    });

    isOwnColor = valueIndex === -1;

    if (isOwnColor) {
      newColors.push({ color: value, name: value });
    }
  }

  var select = void 0;
  if (colors.length) {
    select = _react2.default.createElement(
      _select2.default,
      _extends({
        showSearch: true,
        value: value && (0, _tinycolor2.default)(value).toRgbString()
      }, rest, {
        filterOption: function filterOption(input, option) {
          return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
      }),
      newColors.map(function (color, i) {
        return _react2.default.createElement(
          _select2.default.Option,
          { value: (0, _tinycolor2.default)(color.color).toRgbString(), key: i },
          _react2.default.createElement('i', {
            className: 'fa fa-square',
            style: { color: (0, _tinycolor2.default)(color.color).toRgbString() }
          }),
          ' ',
          color.name
        );
      }),
      _ref2
    );
  }

  // Show Picker
  var picker = void 0;
  if (!colors.length || value === 'other' || isOwnColor) {
    if (hasNativePicker()) {
      picker = _react2.default.createElement(_input2.default, {
        type: 'color',
        style: { width: 100 },
        value: (0, _tinycolor2.default)(value).toHexString(),
        defaultValue: (0, _tinycolor2.default)(value).toHexString(),
        onChange: onChange
      });
    } else {
      picker = _react2.default.createElement(ColorPicker, _extends({}, rest, { value: value }));
    }
  }

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      select
    ),
    _react2.default.createElement(
      'div',
      { style: { marginTop: 2 } },
      picker
    )
  );
};

exports.default = (0, _decorators.withColors)(ColorEditor);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2VkaXRzL2NvbG9yLmVzNiJdLCJuYW1lcyI6WyJDb2xvclBpY2tlciIsImRvY3VtZW50IiwiaGFzTmF0aXZlUGlja2VyIiwiY3JlYXRlRWxlbWVudCIsImkiLCJzZXRBdHRyaWJ1dGUiLCJ0eXBlIiwiQ29sb3JFZGl0b3IiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiY29sb3JzIiwicmVzdCIsIm5ld0NvbG9ycyIsImlzT3duQ29sb3IiLCJ2YWx1ZUluZGV4IiwiZmluZEluZGV4IiwidG9SZ2JTdHJpbmciLCJjb2xvciIsInB1c2giLCJuYW1lIiwic2VsZWN0IiwibGVuZ3RoIiwiaW5wdXQiLCJvcHRpb24iLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJtYXAiLCJwaWNrZXIiLCJ3aWR0aCIsInRvSGV4U3RyaW5nIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEsY0FBYyxJQUFwQjtBQUNBLElBQUksT0FBT0MsUUFBUCxLQUFvQixXQUF4QixFQUFxQztBQUNuQztBQUNEOztBQUVELElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixNQUFJLENBQUNGLFdBQUwsRUFBa0I7QUFDaEIsV0FBTyxJQUFQO0FBQ0Q7QUFDRCxNQUFJLE9BQU9DLFFBQVAsS0FBb0IsV0FBeEIsRUFBcUM7QUFDbkMsV0FBTyxJQUFQO0FBQ0Q7QUFDRCxNQUFJLENBQUNBLFNBQVNFLGFBQWQsRUFBNkI7QUFDM0IsV0FBTyxJQUFQO0FBQ0Q7QUFDRCxNQUFNQyxJQUFJSCxTQUFTRSxhQUFULENBQXVCLE9BQXZCLENBQVY7QUFDQUMsSUFBRUMsWUFBRixDQUFlLE1BQWYsRUFBdUIsT0FBdkI7QUFDQSxTQUFPRCxFQUFFRSxJQUFGLEtBQVcsTUFBbEI7QUFDRCxDQWJEOztZQXVEUTtBQUFBLG1CQUFRLE1BQVI7QUFBQSxJQUFlLE9BQU8sT0FBdEIsRUFBK0IsS0FBSyxPQUFwQztBQUNFO0FBQUE7QUFBQSxNQUFNLFdBQVUsc0JBQWhCO0FBQUE7QUFBQTtBQURGLEM7O0FBeENSLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxPQUErQztBQUFBLE1BQTVDQyxLQUE0QyxRQUE1Q0EsS0FBNEM7QUFBQSxNQUFyQ0MsUUFBcUMsUUFBckNBLFFBQXFDO0FBQUEseUJBQTNCQyxNQUEyQjtBQUFBLE1BQTNCQSxNQUEyQiwrQkFBbEIsRUFBa0I7QUFBQSxNQUFYQyxJQUFXOztBQUNqRSxNQUFNQyx5Q0FBZ0JGLE1BQWhCLEVBQU47QUFDQSxNQUFJLENBQUNGLEtBQUwsRUFBWTtBQUNWQSxZQUFRLFNBQVI7QUFDRDs7QUFFRCxNQUFJSyxtQkFBSjtBQUNBLE1BQUlMLFNBQVNBLFVBQVUsT0FBdkIsRUFBZ0M7QUFDOUIsUUFBTU0sYUFBYUosT0FBT0ssU0FBUCxDQUNqQjtBQUFBLGFBQ0UseUJBQVVQLEtBQVYsRUFBaUJRLFdBQWpCLE9BQW1DLHlCQUFVQyxNQUFNQSxLQUFoQixFQUF1QkQsV0FBdkIsRUFEckM7QUFBQSxLQURpQixDQUFuQjs7QUFLQUgsaUJBQWFDLGVBQWUsQ0FBQyxDQUE3Qjs7QUFFQSxRQUFJRCxVQUFKLEVBQWdCO0FBQ2RELGdCQUFVTSxJQUFWLENBQWUsRUFBRUQsT0FBT1QsS0FBVCxFQUFnQlcsTUFBTVgsS0FBdEIsRUFBZjtBQUNEO0FBQ0Y7O0FBRUQsTUFBSVksZUFBSjtBQUNBLE1BQUlWLE9BQU9XLE1BQVgsRUFBbUI7QUFDakJELGFBQ0U7QUFBQTtBQUFBO0FBQ0Usd0JBREY7QUFFRSxlQUFPWixTQUFTLHlCQUFVQSxLQUFWLEVBQWlCUSxXQUFqQjtBQUZsQixTQUdNTCxJQUhOO0FBSUUsc0JBQWMsc0JBQUNXLEtBQUQsRUFBUUMsTUFBUjtBQUFBLGlCQUNaQSxPQUFPZixLQUFQLENBQWFnQixXQUFiLEdBQTJCQyxPQUEzQixDQUFtQ0gsTUFBTUUsV0FBTixFQUFuQyxLQUEyRCxDQUQvQztBQUFBO0FBSmhCO0FBT0daLGdCQUFVYyxHQUFWLENBQWMsVUFBQ1QsS0FBRCxFQUFRYixDQUFSO0FBQUEsZUFDWjtBQUFBLDJCQUFRLE1BQVI7QUFBQSxZQUFlLE9BQU8seUJBQVVhLE1BQU1BLEtBQWhCLEVBQXVCRCxXQUF2QixFQUF0QixFQUE0RCxLQUFLWixDQUFqRTtBQUNDO0FBQ0UsdUJBQVUsY0FEWjtBQUVFLG1CQUFPLEVBQUVhLE9BQU8seUJBQVVBLE1BQU1BLEtBQWhCLEVBQXVCRCxXQUF2QixFQUFUO0FBRlQsWUFERDtBQUlJLGFBSko7QUFLRUMsZ0JBQU1FO0FBTFIsU0FEWTtBQUFBLE9BQWQsQ0FQSDtBQUFBO0FBQUEsS0FERjtBQXVCRDs7QUFFRDtBQUNBLE1BQUlRLGVBQUo7QUFDQSxNQUFJLENBQUNqQixPQUFPVyxNQUFSLElBQWtCYixVQUFVLE9BQTVCLElBQXVDSyxVQUEzQyxFQUF1RDtBQUNyRCxRQUFJWCxpQkFBSixFQUF1QjtBQUNyQnlCLGVBQ0U7QUFDRSxjQUFLLE9BRFA7QUFFRSxlQUFPLEVBQUVDLE9BQU8sR0FBVCxFQUZUO0FBR0UsZUFBTyx5QkFBVXBCLEtBQVYsRUFBaUJxQixXQUFqQixFQUhUO0FBSUUsc0JBQWMseUJBQVVyQixLQUFWLEVBQWlCcUIsV0FBakIsRUFKaEI7QUFLRSxrQkFBVXBCO0FBTFosUUFERjtBQVNELEtBVkQsTUFVTztBQUNMa0IsZUFBUyw4QkFBQyxXQUFELGVBQWlCaEIsSUFBakIsSUFBdUIsT0FBT0gsS0FBOUIsSUFBVDtBQUNEO0FBQ0Y7O0FBRUQsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDR1k7QUFESCxLQURGO0FBSUU7QUFBQTtBQUFBLFFBQUssT0FBTyxFQUFFVSxXQUFXLENBQWIsRUFBWjtBQUNHSDtBQURIO0FBSkYsR0FERjtBQVVELENBM0VEOztrQkE2RWUsNEJBQVdwQixXQUFYLEMiLCJmaWxlIjoiZXh0ZXJuYWwvdWkvZWRpdHMvY29sb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VsZWN0LCBJbnB1dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHRpbnljb2xvciBmcm9tICd0aW55Y29sb3IyJztcbmltcG9ydCB7IHdpdGhDb2xvcnMgfSBmcm9tICcuLi9kZWNvcmF0b3JzJztcbmltcG9ydCB7IEZhTWFnaWMgfSBmcm9tICdvbHltcC1pY29ucyc7XG5cbmNvbnN0IENvbG9yUGlja2VyID0gbnVsbDtcbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIENvbG9yUGlja2VyID0gcmVxdWlyZSgnQG1hcGJveC9yZWFjdC1jb2xvcnBpY2tyJyk7XG59XG5cbmNvbnN0IGhhc05hdGl2ZVBpY2tlciA9ICgpID0+IHtcbiAgaWYgKCFDb2xvclBpY2tlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKCFkb2N1bWVudC5jcmVhdGVFbGVtZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NvbG9yJyk7XG4gIHJldHVybiBpLnR5cGUgIT09ICd0ZXh0Jztcbn07XG5cbmNvbnN0IENvbG9yRWRpdG9yID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCBjb2xvcnMgPSBbXSwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IG5ld0NvbG9ycyA9IFsuLi5jb2xvcnNdO1xuICBpZiAoIXZhbHVlKSB7XG4gICAgdmFsdWUgPSAnIzAwMDAwMCc7XG4gIH1cblxuICBsZXQgaXNPd25Db2xvcjtcbiAgaWYgKHZhbHVlICYmIHZhbHVlICE9PSAnb3RoZXInKSB7XG4gICAgY29uc3QgdmFsdWVJbmRleCA9IGNvbG9ycy5maW5kSW5kZXgoXG4gICAgICBjb2xvciA9PlxuICAgICAgICB0aW55Y29sb3IodmFsdWUpLnRvUmdiU3RyaW5nKCkgPT09IHRpbnljb2xvcihjb2xvci5jb2xvcikudG9SZ2JTdHJpbmcoKVxuICAgICk7XG5cbiAgICBpc093bkNvbG9yID0gdmFsdWVJbmRleCA9PT0gLTE7XG5cbiAgICBpZiAoaXNPd25Db2xvcikge1xuICAgICAgbmV3Q29sb3JzLnB1c2goeyBjb2xvcjogdmFsdWUsIG5hbWU6IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGxldCBzZWxlY3Q7XG4gIGlmIChjb2xvcnMubGVuZ3RoKSB7XG4gICAgc2VsZWN0ID0gKFxuICAgICAgPFNlbGVjdFxuICAgICAgICBzaG93U2VhcmNoXG4gICAgICAgIHZhbHVlPXt2YWx1ZSAmJiB0aW55Y29sb3IodmFsdWUpLnRvUmdiU3RyaW5nKCl9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICBmaWx0ZXJPcHRpb249eyhpbnB1dCwgb3B0aW9uKSA9PlxuICAgICAgICAgIG9wdGlvbi52YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPj0gMH1cbiAgICAgID5cbiAgICAgICAge25ld0NvbG9ycy5tYXAoKGNvbG9yLCBpKSA9PlxuICAgICAgICAgICg8U2VsZWN0Lk9wdGlvbiB2YWx1ZT17dGlueWNvbG9yKGNvbG9yLmNvbG9yKS50b1JnYlN0cmluZygpfSBrZXk9e2l9PlxuICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtc3F1YXJlXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IHRpbnljb2xvcihjb2xvci5jb2xvcikudG9SZ2JTdHJpbmcoKSB9fVxuICAgICAgICAgICAgLz57JyAnfVxuICAgICAgICAgICAge2NvbG9yLm5hbWV9XG4gICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPilcbiAgICAgICAgKX1cblxuICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT17J290aGVyJ30ga2V5PXsnb3RoZXInfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWFjdC1jdXN0b20tdHJpZ2dlclwiPkVpZ2VuZSBGYXJiZTwvc3Bhbj5cbiAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgPC9TZWxlY3Q+XG4gICAgKTtcbiAgfVxuXG4gIC8vIFNob3cgUGlja2VyXG4gIGxldCBwaWNrZXI7XG4gIGlmICghY29sb3JzLmxlbmd0aCB8fCB2YWx1ZSA9PT0gJ290aGVyJyB8fCBpc093bkNvbG9yKSB7XG4gICAgaWYgKGhhc05hdGl2ZVBpY2tlcigpKSB7XG4gICAgICBwaWNrZXIgPSAoXG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJjb2xvclwiXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDEwMCB9fVxuICAgICAgICAgIHZhbHVlPXt0aW55Y29sb3IodmFsdWUpLnRvSGV4U3RyaW5nKCl9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aW55Y29sb3IodmFsdWUpLnRvSGV4U3RyaW5nKCl9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGlja2VyID0gPENvbG9yUGlja2VyIHsuLi5yZXN0fSB2YWx1ZT17dmFsdWV9IC8+O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtzZWxlY3R9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAyIH19PlxuICAgICAgICB7cGlja2VyfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29sb3JzKENvbG9yRWRpdG9yKTtcbiJdfQ==
