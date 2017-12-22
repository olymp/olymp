var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// defaultColors = [{ color: 'red', name: 'Termin' (optional) }, 'blue', ...]
export var withColors = function withColors(WrappedComponent) {
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
        return React.createElement(WrappedComponent, _extends({ colors: this.context.defaultColors }, this.props));
      }
    }]);

    return WithColors;
  }(Component), _class.contextTypes = {
    defaultColors: PropTypes.array
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

          return React.createElement(WrappedComponent, rest);
        }
      }]);

      return UseColors;
    }(Component), _class2.childContextTypes = {
      defaultColors: PropTypes.array
    }, _temp2;
  };
};
export { useColors };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2RlY29yYXRvcnMvY29sb3JzLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIndpdGhDb2xvcnMiLCJjb250ZXh0IiwiZGVmYXVsdENvbG9ycyIsInByb3BzIiwiY29udGV4dFR5cGVzIiwiYXJyYXkiLCJ1c2VDb2xvcnMiLCJtYXAiLCJjb2xvciIsIm5hbWUiLCJyZXN0IiwiY2hpbGRDb250ZXh0VHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCOztBQUVBO0FBQ0EsT0FBTyxJQUFNQyxhQUFhLFNBQWJBLFVBQWE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsK0JBTWI7QUFDUCxlQUNFLG9CQUFDLGdCQUFELGFBQWtCLFFBQVEsS0FBS0MsT0FBTCxDQUFhQyxhQUF2QyxJQUEwRCxLQUFLQyxLQUEvRCxFQURGO0FBR0Q7QUFWcUI7O0FBQUE7QUFBQSxJQUNDTCxTQURELFVBRWZNLFlBRmUsR0FFQTtBQUNwQkYsbUJBQWVILFVBQVVNO0FBREwsR0FGQTtBQUFBLENBQW5COztBQWFBLElBQU1DLFlBQVksU0FBWkEsU0FBWTtBQUFBLE1BQUNKLGFBQUQsdUVBQWlCLEVBQWpCO0FBQUEsU0FBd0I7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsMENBTTNCO0FBQ2hCLGlCQUFPO0FBQ0xBLDJCQUFlLDZCQUNWQSxhQURVLHNCQUVULEtBQUtDLEtBQUwsQ0FBV0QsYUFBWCxJQUE0QixFQUZuQixHQUdiSyxHQUhhLENBSWI7QUFBQSxxQkFDRSxPQUFPQyxLQUFQLEtBQWlCLFFBQWpCLEdBQ0ksRUFBRUEsWUFBRixFQUFTQyxNQUFNRCxLQUFmLEVBREosY0FFTUMsTUFBTUQsTUFBTUEsS0FGbEIsSUFFNEJBLEtBRjVCLENBREY7QUFBQSxhQUphO0FBRFYsV0FBUDtBQVdEO0FBbEI0QztBQUFBO0FBQUEsaUNBb0JwQztBQUFBLHVCQUM0QixLQUFLTCxLQURqQztBQUFBLGNBQ0NELGFBREQsVUFDQ0EsYUFERDtBQUFBLGNBQ21CUSxJQURuQjs7QUFHUCxpQkFBTyxvQkFBQyxnQkFBRCxFQUFzQkEsSUFBdEIsQ0FBUDtBQUNEO0FBeEI0Qzs7QUFBQTtBQUFBLE1BQ3ZCWixTQUR1QixXQUV0Q2EsaUJBRnNDLEdBRWxCO0FBQ3pCVCxxQkFBZUgsVUFBVU07QUFEQSxLQUZrQjtBQUFBLEdBQXhCO0FBQUEsQ0FBbEIiLCJmaWxlIjoicGFja2FnZXMvdWkvZGVjb3JhdG9ycy9jb2xvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy8gZGVmYXVsdENvbG9ycyA9IFt7IGNvbG9yOiAncmVkJywgbmFtZTogJ1Rlcm1pbicgKG9wdGlvbmFsKSB9LCAnYmx1ZScsIC4uLl1cbmV4cG9ydCBjb25zdCB3aXRoQ29sb3JzID0gV3JhcHBlZENvbXBvbmVudCA9PlxuICBjbGFzcyBXaXRoQ29sb3JzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgZGVmYXVsdENvbG9yczogUHJvcFR5cGVzLmFycmF5LFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlZENvbXBvbmVudCBjb2xvcnM9e3RoaXMuY29udGV4dC5kZWZhdWx0Q29sb3JzfSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG5leHBvcnQgY29uc3QgdXNlQ29sb3JzID0gKGRlZmF1bHRDb2xvcnMgPSBbXSkgPT4gV3JhcHBlZENvbXBvbmVudCA9PlxuICBjbGFzcyBVc2VDb2xvcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgIGRlZmF1bHRDb2xvcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICB9O1xuXG4gICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGVmYXVsdENvbG9yczogW1xuICAgICAgICAgIC4uLmRlZmF1bHRDb2xvcnMsXG4gICAgICAgICAgLi4uKHRoaXMucHJvcHMuZGVmYXVsdENvbG9ycyB8fCBbXSksXG4gICAgICAgIF0ubWFwKFxuICAgICAgICAgIGNvbG9yID0+XG4gICAgICAgICAgICB0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8geyBjb2xvciwgbmFtZTogY29sb3IgfVxuICAgICAgICAgICAgICA6IHsgbmFtZTogY29sb3IuY29sb3IsIC4uLmNvbG9yIH1cbiAgICAgICAgKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBkZWZhdWx0Q29sb3JzLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnJlc3R9IC8+O1xuICAgIH1cbiAgfTtcbiJdfQ==
