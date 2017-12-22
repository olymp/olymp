var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import capitalize from 'lodash/upperFirst';

export default (function (propertyName, defaultValue) {
  return function (WrappedComponent) {
    var properties = (typeof propertyName === 'undefined' ? 'undefined' : _typeof(propertyName)) !== 'object' ? _defineProperty({}, propertyName, defaultValue) : propertyName;

    var WithStateComponent = function (_Component) {
      _inherits(WithStateComponent, _Component);

      function WithStateComponent() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, WithStateComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = WithStateComponent.__proto__ || Object.getPrototypeOf(WithStateComponent)).call.apply(_ref2, [this].concat(args))), _this), _this.state = properties, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(WithStateComponent, [{
        key: 'render',
        value: function render() {
          var _this2 = this;

          var more = Object.keys(properties).reduce(function (state, key) {
            state[key] = _this2.state[key];
            state['set' + capitalize(key)] = function (v) {
              return _this2.setState(_defineProperty({}, key, v));
            };
            return state;
          }, {});
          return React.createElement(WrappedComponent, _extends({}, this.props, more));
        }
      }]);

      return WithStateComponent;
    }(Component);

    return WithStateComponent;
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3V0aWxzL2RlY29yYXRvcnMvc3RhdGUuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY2FwaXRhbGl6ZSIsInByb3BlcnR5TmFtZSIsImRlZmF1bHRWYWx1ZSIsIldyYXBwZWRDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiV2l0aFN0YXRlQ29tcG9uZW50Iiwic3RhdGUiLCJtb3JlIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsImtleSIsInNldFN0YXRlIiwidiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixtQkFBdkI7O0FBRUEsZ0JBQWUsVUFBQ0MsWUFBRCxFQUFlQyxZQUFmO0FBQUEsU0FBZ0MsVUFBQ0MsZ0JBQUQsRUFBc0I7QUFDbkUsUUFBTUMsYUFBYSxRQUFPSCxZQUFQLHlDQUFPQSxZQUFQLE9BQXdCLFFBQXhCLHVCQUNaQSxZQURZLEVBQ0dDLFlBREgsSUFFZkQsWUFGSjs7QUFEbUUsUUFJN0RJLGtCQUo2RDtBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLG9OQUtqRUMsS0FMaUUsR0FLekRGLFVBTHlEO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGlDQU14RDtBQUFBOztBQUNQLGNBQU1HLE9BQU9DLE9BQU9DLElBQVAsQ0FBWUwsVUFBWixFQUF3Qk0sTUFBeEIsQ0FBK0IsVUFBQ0osS0FBRCxFQUFRSyxHQUFSLEVBQWdCO0FBQzFETCxrQkFBTUssR0FBTixJQUFhLE9BQUtMLEtBQUwsQ0FBV0ssR0FBWCxDQUFiO0FBQ0FMLDBCQUFZTixXQUFXVyxHQUFYLENBQVosSUFBaUM7QUFBQSxxQkFBSyxPQUFLQyxRQUFMLHFCQUFpQkQsR0FBakIsRUFBdUJFLENBQXZCLEVBQUw7QUFBQSxhQUFqQztBQUNBLG1CQUFPUCxLQUFQO0FBQ0QsV0FKWSxFQUlWLEVBSlUsQ0FBYjtBQUtBLGlCQUFPLG9CQUFDLGdCQUFELGVBQXNCLEtBQUtRLEtBQTNCLEVBQXNDUCxJQUF0QyxFQUFQO0FBQ0Q7QUFiZ0U7O0FBQUE7QUFBQSxNQUlsQ1IsU0FKa0M7O0FBZW5FLFdBQU9NLGtCQUFQO0FBQ0QsR0FoQmM7QUFBQSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL3V0aWxzL2RlY29yYXRvcnMvc3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnbG9kYXNoL3VwcGVyRmlyc3QnO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcGVydHlOYW1lLCBkZWZhdWx0VmFsdWUpID0+IChXcmFwcGVkQ29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IHByb3BlcnRpZXMgPSB0eXBlb2YgcHJvcGVydHlOYW1lICE9PSAnb2JqZWN0J1xuICAgID8geyBbcHJvcGVydHlOYW1lXTogZGVmYXVsdFZhbHVlIH1cbiAgICA6IHByb3BlcnR5TmFtZTtcbiAgY2xhc3MgV2l0aFN0YXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHByb3BlcnRpZXM7XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgbW9yZSA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLnJlZHVjZSgoc3RhdGUsIGtleSkgPT4ge1xuICAgICAgICBzdGF0ZVtrZXldID0gdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgICBzdGF0ZVtgc2V0JHtjYXBpdGFsaXplKGtleSl9YF0gPSB2ID0+IHRoaXMuc2V0U3RhdGUoeyBba2V5XTogdiB9KTtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfSwge30pO1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSB7Li4ubW9yZX0gLz47XG4gICAgfVxuICB9XG4gIHJldHVybiBXaXRoU3RhdGVDb21wb25lbnQ7XG59O1xuIl19
