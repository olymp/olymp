'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useColors = exports.withColors = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// defaultColors = [{ color: 'red', name: 'Termin' (optional) }, 'blue', ...]
var withColors = exports.withColors = function withColors(WrappedComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(WithColors, _Component);

    function WithColors() {
      _classCallCheck(this, WithColors);

      return _possibleConstructorReturn(this, (WithColors.__proto__ || Object.getPrototypeOf(WithColors)).apply(this, arguments));
    }

    _createClass(WithColors, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({ colors: this.context.defaultColors }, this.props));
      }
    }]);

    return WithColors;
  }(_react.Component), _class.contextTypes = {
    defaultColors: _propTypes2.default.array
  }, _temp;
};

var useColors = function useColors() {
  var defaultColors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return function (WrappedComponent) {
    var _class2, _temp2;

    return _temp2 = _class2 = function (_Component2) {
      _inherits(UseColors, _Component2);

      function UseColors() {
        _classCallCheck(this, UseColors);

        return _possibleConstructorReturn(this, (UseColors.__proto__ || Object.getPrototypeOf(UseColors)).apply(this, arguments));
      }

      _createClass(UseColors, [{
        key: 'getChildContext',
        value: function getChildContext() {
          return {
            defaultColors: [].concat(_toConsumableArray(defaultColors), _toConsumableArray(this.props.defaultColors || [])).map(function (color) {
              return typeof color === 'string' ? { color: color, name: color } : _extends({ name: color.color }, color);
            })
          };
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props,
              defaultColors = _props.defaultColors,
              rest = _objectWithoutProperties(_props, ['defaultColors']);

          return _react2.default.createElement(WrappedComponent, rest);
        }
      }]);

      return UseColors;
    }(_react.Component), _class2.childContextTypes = {
      defaultColors: _propTypes2.default.array
    }, _temp2;
  };
};
exports.useColors = useColors;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2RlY29yYXRvcnMvY29sb3JzLmVzNiJdLCJuYW1lcyI6WyJ3aXRoQ29sb3JzIiwiY29udGV4dCIsImRlZmF1bHRDb2xvcnMiLCJwcm9wcyIsImNvbnRleHRUeXBlcyIsImFycmF5IiwidXNlQ29sb3JzIiwibWFwIiwiY29sb3IiLCJuYW1lIiwicmVzdCIsImNoaWxkQ29udGV4dFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNPLElBQU1BLGtDQUFhLFNBQWJBLFVBQWE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsK0JBTWI7QUFDUCxlQUNFLDhCQUFDLGdCQUFELGFBQWtCLFFBQVEsS0FBS0MsT0FBTCxDQUFhQyxhQUF2QyxJQUEwRCxLQUFLQyxLQUEvRCxFQURGO0FBR0Q7QUFWcUI7O0FBQUE7QUFBQSw4QkFFZkMsWUFGZSxHQUVBO0FBQ3BCRixtQkFBZSxvQkFBVUc7QUFETCxHQUZBO0FBQUEsQ0FBbkI7O0FBYUEsSUFBTUMsWUFBWSxTQUFaQSxTQUFZO0FBQUEsTUFBQ0osYUFBRCx1RUFBaUIsRUFBakI7QUFBQSxTQUF3QjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwwQ0FNM0I7QUFDaEIsaUJBQU87QUFDTEEsMkJBQWUsNkJBQ1ZBLGFBRFUsc0JBRVQsS0FBS0MsS0FBTCxDQUFXRCxhQUFYLElBQTRCLEVBRm5CLEdBR2JLLEdBSGEsQ0FJYjtBQUFBLHFCQUNFLE9BQU9DLEtBQVAsS0FBaUIsUUFBakIsR0FDSSxFQUFFQSxZQUFGLEVBQVNDLE1BQU1ELEtBQWYsRUFESixjQUVNQyxNQUFNRCxNQUFNQSxLQUZsQixJQUU0QkEsS0FGNUIsQ0FERjtBQUFBLGFBSmE7QUFEVixXQUFQO0FBV0Q7QUFsQjRDO0FBQUE7QUFBQSxpQ0FvQnBDO0FBQUEsdUJBQzRCLEtBQUtMLEtBRGpDO0FBQUEsY0FDQ0QsYUFERCxVQUNDQSxhQUREO0FBQUEsY0FDbUJRLElBRG5COztBQUdQLGlCQUFPLDhCQUFDLGdCQUFELEVBQXNCQSxJQUF0QixDQUFQO0FBQ0Q7QUF4QjRDOztBQUFBO0FBQUEsaUNBRXRDQyxpQkFGc0MsR0FFbEI7QUFDekJULHFCQUFlLG9CQUFVRztBQURBLEtBRmtCO0FBQUEsR0FBeEI7QUFBQSxDQUFsQiIsImZpbGUiOiJleHRlcm5hbC91aS9kZWNvcmF0b3JzL2NvbG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBkZWZhdWx0Q29sb3JzID0gW3sgY29sb3I6ICdyZWQnLCBuYW1lOiAnVGVybWluJyAob3B0aW9uYWwpIH0sICdibHVlJywgLi4uXVxuZXhwb3J0IGNvbnN0IHdpdGhDb2xvcnMgPSBXcmFwcGVkQ29tcG9uZW50ID0+XG4gIGNsYXNzIFdpdGhDb2xvcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICBkZWZhdWx0Q29sb3JzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwcGVkQ29tcG9uZW50IGNvbG9ycz17dGhpcy5jb250ZXh0LmRlZmF1bHRDb2xvcnN9IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbmV4cG9ydCBjb25zdCB1c2VDb2xvcnMgPSAoZGVmYXVsdENvbG9ycyA9IFtdKSA9PiBXcmFwcGVkQ29tcG9uZW50ID0+XG4gIGNsYXNzIFVzZUNvbG9ycyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgZGVmYXVsdENvbG9yczogUHJvcFR5cGVzLmFycmF5LFxuICAgIH07XG5cbiAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZWZhdWx0Q29sb3JzOiBbXG4gICAgICAgICAgLi4uZGVmYXVsdENvbG9ycyxcbiAgICAgICAgICAuLi4odGhpcy5wcm9wcy5kZWZhdWx0Q29sb3JzIHx8IFtdKSxcbiAgICAgICAgXS5tYXAoXG4gICAgICAgICAgY29sb3IgPT5cbiAgICAgICAgICAgIHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyB7IGNvbG9yLCBuYW1lOiBjb2xvciB9XG4gICAgICAgICAgICAgIDogeyBuYW1lOiBjb2xvci5jb2xvciwgLi4uY29sb3IgfVxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IGRlZmF1bHRDb2xvcnMsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4ucmVzdH0gLz47XG4gICAgfVxuICB9O1xuIl19
