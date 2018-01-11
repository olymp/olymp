var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import capitalize from 'lodash/upperFirst';

export default (function (_ref) {
  var prop = _ref.prop,
      onThrottle = _ref.onThrottle,
      throttleProp = _ref.throttleProp,
      getInitialValue = _ref.getInitialValue,
      initialValue = _ref.initialValue,
      cooldown = _ref.cooldown,
      handleUpdate = _ref.handleUpdate;
  return function (WrappedComponent) {
    var WithStateComponent = function (_Component) {
      _inherits(WithStateComponent, _Component);

      function WithStateComponent(props) {
        _classCallCheck(this, WithStateComponent);

        var _this = _possibleConstructorReturn(this, (WithStateComponent.__proto__ || Object.getPrototypeOf(WithStateComponent)).call(this, props));

        _this.throttled = function () {
          if (throttleProp) {
            _this.setState(_defineProperty({}, throttleProp, _this.state[prop]));
          }
          if (onThrottle) {
            onThrottle(_extends({}, _this.props, _this.state));
          }
        };

        _this.set = function (v) {
          _this.setState(_defineProperty({}, prop, v));
          setTimeout(function () {
            if (_this.state[prop] === v) {
              _this.throttled();
            }
          }, cooldown || 500);
        };

        var def = void 0;
        if (getInitialValue) {
          def = getInitialValue(props);
        } else if (initialValue) {
          def = initialValue;
        } else if (props[prop]) {
          def = props[prop];
        }
        _this.state = _defineProperty({}, prop, def);
        if (throttleProp) {
          _this.state[throttleProp] = def;
        }
        return _this;
      }

      _createClass(WithStateComponent, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(newProps, newState) {
          if (!handleUpdate) {
            return true;
          }
          if (newState[prop] !== this.state[prop]) {
            return true;
          }
          return false;
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
          if (newProps[prop] !== this.props[prop]) {
            var newState = _defineProperty({}, prop, newProps[prop]);
            if (throttleProp) {
              newState[throttleProp] = newProps[prop];
            }
            return this.setState(newState);
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var state = _extends({}, this.state, _defineProperty({}, 'set' + capitalize(prop), this.set));
          return React.createElement(WrappedComponent, _extends({}, this.props, state));
        }
      }]);

      return WithStateComponent;
    }(Component);

    return WithStateComponent;
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3V0aWxzL2RlY29yYXRvcnMvdGhyb3R0bGUuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY2FwaXRhbGl6ZSIsInByb3AiLCJvblRocm90dGxlIiwidGhyb3R0bGVQcm9wIiwiZ2V0SW5pdGlhbFZhbHVlIiwiaW5pdGlhbFZhbHVlIiwiY29vbGRvd24iLCJoYW5kbGVVcGRhdGUiLCJXcmFwcGVkQ29tcG9uZW50IiwiV2l0aFN0YXRlQ29tcG9uZW50IiwicHJvcHMiLCJ0aHJvdHRsZWQiLCJzZXRTdGF0ZSIsInN0YXRlIiwic2V0IiwidiIsInNldFRpbWVvdXQiLCJkZWYiLCJuZXdQcm9wcyIsIm5ld1N0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLE9BQU9DLFVBQVAsTUFBdUIsbUJBQXZCOztBQUVBLGdCQUFlO0FBQUEsTUFDYkMsSUFEYSxRQUNiQSxJQURhO0FBQUEsTUFFYkMsVUFGYSxRQUViQSxVQUZhO0FBQUEsTUFHYkMsWUFIYSxRQUdiQSxZQUhhO0FBQUEsTUFJYkMsZUFKYSxRQUliQSxlQUphO0FBQUEsTUFLYkMsWUFMYSxRQUtiQSxZQUxhO0FBQUEsTUFNYkMsUUFOYSxRQU1iQSxRQU5hO0FBQUEsTUFPYkMsWUFQYSxRQU9iQSxZQVBhO0FBQUEsU0FRVCxVQUFDQyxnQkFBRCxFQUFzQjtBQUFBLFFBQ3BCQyxrQkFEb0I7QUFBQTs7QUFFeEIsa0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SUFDWEEsS0FEVzs7QUFBQSxjQWFuQkMsU0FibUIsR0FhUCxZQUFNO0FBQ2hCLGNBQUlSLFlBQUosRUFBa0I7QUFDaEIsa0JBQUtTLFFBQUwscUJBQWlCVCxZQUFqQixFQUFnQyxNQUFLVSxLQUFMLENBQVdaLElBQVgsQ0FBaEM7QUFDRDtBQUNELGNBQUlDLFVBQUosRUFBZ0I7QUFDZEEsb0NBQWdCLE1BQUtRLEtBQXJCLEVBQStCLE1BQUtHLEtBQXBDO0FBQ0Q7QUFDRixTQXBCa0I7O0FBQUEsY0FxQ25CQyxHQXJDbUIsR0FxQ2IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ1gsZ0JBQUtILFFBQUwscUJBQWlCWCxJQUFqQixFQUF3QmMsQ0FBeEI7QUFDQUMscUJBQVcsWUFBTTtBQUNmLGdCQUFJLE1BQUtILEtBQUwsQ0FBV1osSUFBWCxNQUFxQmMsQ0FBekIsRUFBNEI7QUFDMUIsb0JBQUtKLFNBQUw7QUFDRDtBQUNGLFdBSkQsRUFJR0wsWUFBWSxHQUpmO0FBS0QsU0E1Q2tCOztBQUVqQixZQUFJVyxZQUFKO0FBQ0EsWUFBSWIsZUFBSixFQUFxQjtBQUNuQmEsZ0JBQU1iLGdCQUFnQk0sS0FBaEIsQ0FBTjtBQUNELFNBRkQsTUFFTyxJQUFJTCxZQUFKLEVBQWtCO0FBQ3ZCWSxnQkFBTVosWUFBTjtBQUNELFNBRk0sTUFFQSxJQUFJSyxNQUFNVCxJQUFOLENBQUosRUFBaUI7QUFDdEJnQixnQkFBTVAsTUFBTVQsSUFBTixDQUFOO0FBQ0Q7QUFDRCxjQUFLWSxLQUFMLHVCQUFnQlosSUFBaEIsRUFBdUJnQixHQUF2QjtBQUNBLFlBQUlkLFlBQUosRUFBa0I7QUFBRSxnQkFBS1UsS0FBTCxDQUFXVixZQUFYLElBQTJCYyxHQUEzQjtBQUFpQztBQVhwQztBQVlsQjs7QUFkdUI7QUFBQTtBQUFBLDhDQXVCRkMsUUF2QkUsRUF1QlFDLFFBdkJSLEVBdUJrQjtBQUN4QyxjQUFJLENBQUNaLFlBQUwsRUFBbUI7QUFBRSxtQkFBTyxJQUFQO0FBQWM7QUFDbkMsY0FBSVksU0FBU2xCLElBQVQsTUFBbUIsS0FBS1ksS0FBTCxDQUFXWixJQUFYLENBQXZCLEVBQXlDO0FBQ3ZDLG1CQUFPLElBQVA7QUFDRDtBQUNELGlCQUFPLEtBQVA7QUFDRDtBQTdCdUI7QUFBQTtBQUFBLGtEQThCRWlCLFFBOUJGLEVBOEJZO0FBQ2xDLGNBQUlBLFNBQVNqQixJQUFULE1BQW1CLEtBQUtTLEtBQUwsQ0FBV1QsSUFBWCxDQUF2QixFQUF5QztBQUN2QyxnQkFBTWtCLCtCQUNIbEIsSUFERyxFQUNJaUIsU0FBU2pCLElBQVQsQ0FESixDQUFOO0FBR0EsZ0JBQUlFLFlBQUosRUFBa0I7QUFBRWdCLHVCQUFTaEIsWUFBVCxJQUF5QmUsU0FBU2pCLElBQVQsQ0FBekI7QUFBMEM7QUFDOUQsbUJBQU8sS0FBS1csUUFBTCxDQUFjTyxRQUFkLENBQVA7QUFDRDtBQUNGO0FBdEN1QjtBQUFBO0FBQUEsaUNBK0NmO0FBQ1AsY0FBTU4scUJBQWEsS0FBS0EsS0FBbEIsOEJBQWdDYixXQUFXQyxJQUFYLENBQWhDLEVBQXFELEtBQUthLEdBQTFELEVBQU47QUFDQSxpQkFBTyxvQkFBQyxnQkFBRCxlQUFzQixLQUFLSixLQUEzQixFQUFzQ0csS0FBdEMsRUFBUDtBQUNEO0FBbER1Qjs7QUFBQTtBQUFBLE1BQ09kLFNBRFA7O0FBb0QxQixXQUFPVSxrQkFBUDtBQUNELEdBN0RjO0FBQUEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy91dGlscy9kZWNvcmF0b3JzL3Rocm90dGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJ2xvZGFzaC91cHBlckZpcnN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgcHJvcCxcbiAgb25UaHJvdHRsZSxcbiAgdGhyb3R0bGVQcm9wLFxuICBnZXRJbml0aWFsVmFsdWUsXG4gIGluaXRpYWxWYWx1ZSxcbiAgY29vbGRvd24sXG4gIGhhbmRsZVVwZGF0ZSxcbn0pID0+IChXcmFwcGVkQ29tcG9uZW50KSA9PiB7XG4gIGNsYXNzIFdpdGhTdGF0ZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIGxldCBkZWY7XG4gICAgICBpZiAoZ2V0SW5pdGlhbFZhbHVlKSB7XG4gICAgICAgIGRlZiA9IGdldEluaXRpYWxWYWx1ZShwcm9wcyk7XG4gICAgICB9IGVsc2UgaWYgKGluaXRpYWxWYWx1ZSkge1xuICAgICAgICBkZWYgPSBpbml0aWFsVmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKHByb3BzW3Byb3BdKSB7XG4gICAgICAgIGRlZiA9IHByb3BzW3Byb3BdO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZSA9IHsgW3Byb3BdOiBkZWYgfTtcbiAgICAgIGlmICh0aHJvdHRsZVByb3ApIHsgdGhpcy5zdGF0ZVt0aHJvdHRsZVByb3BdID0gZGVmOyB9XG4gICAgfVxuICAgIHRocm90dGxlZCA9ICgpID0+IHtcbiAgICAgIGlmICh0aHJvdHRsZVByb3ApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFt0aHJvdHRsZVByb3BdOiB0aGlzLnN0YXRlW3Byb3BdIH0pO1xuICAgICAgfVxuICAgICAgaWYgKG9uVGhyb3R0bGUpIHtcbiAgICAgICAgb25UaHJvdHRsZSh7IC4uLnRoaXMucHJvcHMsIC4uLnRoaXMuc3RhdGUgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV3UHJvcHMsIG5ld1N0YXRlKSB7XG4gICAgICBpZiAoIWhhbmRsZVVwZGF0ZSkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgaWYgKG5ld1N0YXRlW3Byb3BdICE9PSB0aGlzLnN0YXRlW3Byb3BdKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgICBpZiAobmV3UHJvcHNbcHJvcF0gIT09IHRoaXMucHJvcHNbcHJvcF0pIHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgW3Byb3BdOiBuZXdQcm9wc1twcm9wXSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRocm90dGxlUHJvcCkgeyBuZXdTdGF0ZVt0aHJvdHRsZVByb3BdID0gbmV3UHJvcHNbcHJvcF07IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXQgPSAodikgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtwcm9wXTogdiB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZVtwcm9wXSA9PT0gdikge1xuICAgICAgICAgIHRoaXMudGhyb3R0bGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvb2xkb3duIHx8IDUwMCk7XG4gICAgfTtcbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgW2BzZXQke2NhcGl0YWxpemUocHJvcCl9YF06IHRoaXMuc2V0IH07XG4gICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IHsuLi5zdGF0ZX0gLz47XG4gICAgfVxuICB9XG4gIHJldHVybiBXaXRoU3RhdGVDb21wb25lbnQ7XG59O1xuIl19
