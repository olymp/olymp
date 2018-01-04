'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animejs = require('animejs');

var _animejs2 = _interopRequireDefault(_animejs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FadeIn = function (_Component) {
  _inherits(FadeIn, _Component);

  function FadeIn() {
    _classCallCheck(this, FadeIn);

    return _possibleConstructorReturn(this, (FadeIn.__proto__ || Object.getPrototypeOf(FadeIn)).apply(this, arguments));
  }

  _createClass(FadeIn, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var target = _reactDom2.default.findDOMNode(this);
      (0, _animejs2.default)({
        targets: target,
        opacity: [0, 1],
        duration: 1000,
        easing: 'linear',
        elasticity: 0
      });
      (0, _animejs2.default)({
        targets: target,
        translateY: [30, 0],
        duration: 1500,
        easing: 'easeOutQuad',
        elasticity: 0
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.Children.only(children);
    }
  }]);

  return FadeIn;
}(_react.Component);

exports.default = FadeIn;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvYW5pbS9mYWRlLmVzNiJdLCJuYW1lcyI6WyJGYWRlSW4iLCJ0YXJnZXQiLCJmaW5kRE9NTm9kZSIsInRhcmdldHMiLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJlYXNpbmciLCJlbGFzdGljaXR5IiwidHJhbnNsYXRlWSIsImNoaWxkcmVuIiwicHJvcHMiLCJDaGlsZHJlbiIsIm9ubHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozt3Q0FDQztBQUNsQixVQUFNQyxTQUFTLG1CQUFTQyxXQUFULENBQXFCLElBQXJCLENBQWY7QUFDQSw2QkFBTTtBQUNKQyxpQkFBU0YsTUFETDtBQUVKRyxpQkFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLENBRkw7QUFHSkMsa0JBQVUsSUFITjtBQUlKQyxnQkFBUSxRQUpKO0FBS0pDLG9CQUFZO0FBTFIsT0FBTjtBQU9BLDZCQUFNO0FBQ0pKLGlCQUFTRixNQURMO0FBRUpPLG9CQUFZLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FGUjtBQUdKSCxrQkFBVSxJQUhOO0FBSUpDLGdCQUFRLGFBSko7QUFLSkMsb0JBQVk7QUFMUixPQUFOO0FBT0Q7Ozs2QkFDUTtBQUFBLFVBQ0NFLFFBREQsR0FDYyxLQUFLQyxLQURuQixDQUNDRCxRQUREOztBQUVQLGFBQU8sZ0JBQU1FLFFBQU4sQ0FBZUMsSUFBZixDQUFvQkgsUUFBcEIsQ0FBUDtBQUNEOzs7Ozs7a0JBckJrQlQsTSIsImZpbGUiOiJleHRlcm5hbC9mZWxhL2FuaW0vZmFkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFkZUluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgYW5pbWUoe1xuICAgICAgdGFyZ2V0czogdGFyZ2V0LFxuICAgICAgb3BhY2l0eTogWzAsIDFdLFxuICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgZWxhc3RpY2l0eTogMCxcbiAgICB9KTtcbiAgICBhbmltZSh7XG4gICAgICB0YXJnZXRzOiB0YXJnZXQsXG4gICAgICB0cmFuc2xhdGVZOiBbMzAsIDBdLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICBlbGFzdGljaXR5OiAwLFxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgfVxufVxuIl19
