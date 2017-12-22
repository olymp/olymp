var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { number, func } from 'prop-types';

var CountdownTimer = (_temp = _class = function (_Component) {
  _inherits(CountdownTimer, _Component);

  function CountdownTimer(props) {
    _classCallCheck(this, CountdownTimer);

    var _this = _possibleConstructorReturn(this, (CountdownTimer.__proto__ || Object.getPrototypeOf(CountdownTimer)).call(this, props));

    _this.getFormattedTime = function (milliseconds) {
      if (_this.props.formatFunc) {
        return _this.props.formatFunc(milliseconds);
      }

      var totalSeconds = Math.round(milliseconds / 1000);

      var seconds = parseInt(totalSeconds % 60, 10);
      var minutes = parseInt(totalSeconds / 60, 10) % 60;
      var hours = parseInt(totalSeconds / 3600, 10);

      seconds = seconds < 10 ? '0' + seconds : seconds;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      hours = hours < 10 ? '0' + hours : hours;

      return hours + ':' + minutes + ':' + seconds;
    };

    _this.tick = function () {
      var currentTime = Date.now();
      var dt = _this.state.prevTime ? currentTime - _this.state.prevTime : 0;
      var interval = _this.props.interval;

      // correct for small variations in actual timeout time
      var timeRemainingInInterval = interval - dt % interval;
      var timeout = timeRemainingInInterval;

      if (timeRemainingInInterval < interval / 2.0) {
        timeout += interval;
      }

      var timeRemaining = Math.max(_this.state.timeRemaining - dt, 0);
      var countdownComplete = _this.state.prevTime && timeRemaining <= 0;

      if (_this.isMounted()) {
        if (_this.state.timeoutId) {
          clearTimeout(_this.state.timeoutId);
        }
        _this.setState({
          timeoutId: countdownComplete ? null : setTimeout(_this.tick, timeout),
          prevTime: currentTime,
          timeRemaining: timeRemaining
        });
      }

      if (countdownComplete) {
        if (_this.props.completeCallback) {
          _this.props.completeCallback();
        }
        return;
      }

      if (_this.props.tickCallback) {
        _this.props.tickCallback(timeRemaining);
      }
    };

    _this.state = {
      timeRemaining: _this.props.initialTimeRemaining,
      timeoutId: null,
      prevTime: null
    };
    return _this;
  }

  _createClass(CountdownTimer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tick();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (this.state.timeoutId) {
        clearTimeout(this.state.timeoutId);
      }
      this.setState({
        prevTime: null,
        timeRemaining: newProps.initialTimeRemaining
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (!this.state.prevTime && this.state.timeRemaining > 0) {
        this.tick();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.state.timeoutId);
    }
  }, {
    key: 'render',
    value: function render() {
      var timeRemaining = this.state.timeRemaining;

      return React.createElement(
        'div',
        { className: 'timer' },
        this.getFormattedTime(timeRemaining)
      );
    }
  }]);

  return CountdownTimer;
}(Component), _class.propTypes = {
  initialTimeRemaining: number.isRequired,
  interval: number,
  formatFunc: func,
  tickCallback: func,
  completeCallback: func
}, _class.defaultProps = {
  interval: 1000,
  formatFunc: null,
  tickCallback: null,
  completeCallback: null
}, _temp);
export { CountdownTimer as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvY291bnRkb3duLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIm51bWJlciIsImZ1bmMiLCJDb3VudGRvd25UaW1lciIsInByb3BzIiwiZ2V0Rm9ybWF0dGVkVGltZSIsImZvcm1hdEZ1bmMiLCJtaWxsaXNlY29uZHMiLCJ0b3RhbFNlY29uZHMiLCJNYXRoIiwicm91bmQiLCJzZWNvbmRzIiwicGFyc2VJbnQiLCJtaW51dGVzIiwiaG91cnMiLCJ0aWNrIiwiY3VycmVudFRpbWUiLCJEYXRlIiwibm93IiwiZHQiLCJzdGF0ZSIsInByZXZUaW1lIiwiaW50ZXJ2YWwiLCJ0aW1lUmVtYWluaW5nSW5JbnRlcnZhbCIsInRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY291bnRkb3duQ29tcGxldGUiLCJpc01vdW50ZWQiLCJ0aW1lb3V0SWQiLCJjbGVhclRpbWVvdXQiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJjb21wbGV0ZUNhbGxiYWNrIiwidGlja0NhbGxiYWNrIiwiaW5pdGlhbFRpbWVSZW1haW5pbmciLCJuZXdQcm9wcyIsInByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLFNBQVNDLE1BQVQsRUFBaUJDLElBQWpCLFFBQTZCLFlBQTdCOztJQUVxQkMsYzs7O0FBZW5CLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0lBQ1hBLEtBRFc7O0FBQUEsVUFpQ25CQyxnQkFqQ21CLEdBaUNBLHdCQUFnQjtBQUNqQyxVQUFJLE1BQUtELEtBQUwsQ0FBV0UsVUFBZixFQUEyQjtBQUN6QixlQUFPLE1BQUtGLEtBQUwsQ0FBV0UsVUFBWCxDQUFzQkMsWUFBdEIsQ0FBUDtBQUNEOztBQUVELFVBQU1DLGVBQWVDLEtBQUtDLEtBQUwsQ0FBV0gsZUFBZSxJQUExQixD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QkFBZ0IsS0FBS0wsS0FBTCxDQUFXSyxhQUFqQzs7QUFFQSxhQUFPO0FBQUE7QUFBQSxVQUFLLFdBQVUsT0FBZjtBQUF3QixhQUFLcEIsZ0JBQUwsQ0FBc0JvQixhQUF0QjtBQUF4QixPQUFQO0FBQ0Q7Ozs7RUE3R3lDekIsUyxVQUNuQ3FDLFMsR0FBWTtBQUNqQkYsd0JBQXNCbEMsT0FBT3FDLFVBRFo7QUFFakJoQixZQUFVckIsTUFGTztBQUdqQkssY0FBWUosSUFISztBQUlqQmdDLGdCQUFjaEMsSUFKRztBQUtqQitCLG9CQUFrQi9CO0FBTEQsQyxTQU9acUMsWSxHQUFlO0FBQ3BCakIsWUFBVSxJQURVO0FBRXBCaEIsY0FBWSxJQUZRO0FBR3BCNEIsZ0JBQWMsSUFITTtBQUlwQkQsb0JBQWtCO0FBSkUsQztTQVJIOUIsYyIsImZpbGUiOiJwYWNrYWdlcy9hdXRoL2NvdW50ZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBudW1iZXIsIGZ1bmMgfSBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRkb3duVGltZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGluaXRpYWxUaW1lUmVtYWluaW5nOiBudW1iZXIuaXNSZXF1aXJlZCxcbiAgICBpbnRlcnZhbDogbnVtYmVyLFxuICAgIGZvcm1hdEZ1bmM6IGZ1bmMsXG4gICAgdGlja0NhbGxiYWNrOiBmdW5jLFxuICAgIGNvbXBsZXRlQ2FsbGJhY2s6IGZ1bmMsXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaW50ZXJ2YWw6IDEwMDAsXG4gICAgZm9ybWF0RnVuYzogbnVsbCxcbiAgICB0aWNrQ2FsbGJhY2s6IG51bGwsXG4gICAgY29tcGxldGVDYWxsYmFjazogbnVsbCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGltZVJlbWFpbmluZzogdGhpcy5wcm9wcy5pbml0aWFsVGltZVJlbWFpbmluZyxcbiAgICAgIHRpbWVvdXRJZDogbnVsbCxcbiAgICAgIHByZXZUaW1lOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRpY2soKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS50aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLnRpbWVvdXRJZCk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldlRpbWU6IG51bGwsXG4gICAgICB0aW1lUmVtYWluaW5nOiBuZXdQcm9wcy5pbml0aWFsVGltZVJlbWFpbmluZyxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUucHJldlRpbWUgJiYgdGhpcy5zdGF0ZS50aW1lUmVtYWluaW5nID4gMCkge1xuICAgICAgdGhpcy50aWNrKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUudGltZW91dElkKTtcbiAgfVxuXG4gIGdldEZvcm1hdHRlZFRpbWUgPSBtaWxsaXNlY29uZHMgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmZvcm1hdEZ1bmMpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmZvcm1hdEZ1bmMobWlsbGlzZWNvbmRzKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b3RhbFNlY29uZHMgPSBNYXRoLnJvdW5kKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xuXG4gICAgbGV0IHNlY29uZHMgPSBwYXJzZUludCh0b3RhbFNlY29uZHMgJSA2MCwgMTApO1xuICAgIGxldCBtaW51dGVzID0gcGFyc2VJbnQodG90YWxTZWNvbmRzIC8gNjAsIDEwKSAlIDYwO1xuICAgIGxldCBob3VycyA9IHBhcnNlSW50KHRvdGFsU2Vjb25kcyAvIDM2MDAsIDEwKTtcblxuICAgIHNlY29uZHMgPSBzZWNvbmRzIDwgMTAgPyBgMCR7c2Vjb25kc31gIDogc2Vjb25kcztcbiAgICBtaW51dGVzID0gbWludXRlcyA8IDEwID8gYDAke21pbnV0ZXN9YCA6IG1pbnV0ZXM7XG4gICAgaG91cnMgPSBob3VycyA8IDEwID8gYDAke2hvdXJzfWAgOiBob3VycztcblxuICAgIHJldHVybiBgJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9YDtcbiAgfTtcblxuICB0aWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBkdCA9IHRoaXMuc3RhdGUucHJldlRpbWUgPyBjdXJyZW50VGltZSAtIHRoaXMuc3RhdGUucHJldlRpbWUgOiAwO1xuICAgIGNvbnN0IGludGVydmFsID0gdGhpcy5wcm9wcy5pbnRlcnZhbDtcblxuICAgIC8vIGNvcnJlY3QgZm9yIHNtYWxsIHZhcmlhdGlvbnMgaW4gYWN0dWFsIHRpbWVvdXQgdGltZVxuICAgIGNvbnN0IHRpbWVSZW1haW5pbmdJbkludGVydmFsID0gaW50ZXJ2YWwgLSBkdCAlIGludGVydmFsO1xuICAgIGxldCB0aW1lb3V0ID0gdGltZVJlbWFpbmluZ0luSW50ZXJ2YWw7XG5cbiAgICBpZiAodGltZVJlbWFpbmluZ0luSW50ZXJ2YWwgPCBpbnRlcnZhbCAvIDIuMCkge1xuICAgICAgdGltZW91dCArPSBpbnRlcnZhbDtcbiAgICB9XG5cbiAgICBjb25zdCB0aW1lUmVtYWluaW5nID0gTWF0aC5tYXgodGhpcy5zdGF0ZS50aW1lUmVtYWluaW5nIC0gZHQsIDApO1xuICAgIGNvbnN0IGNvdW50ZG93bkNvbXBsZXRlID0gdGhpcy5zdGF0ZS5wcmV2VGltZSAmJiB0aW1lUmVtYWluaW5nIDw9IDA7XG5cbiAgICBpZiAodGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUudGltZW91dElkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLnRpbWVvdXRJZCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGltZW91dElkOiBjb3VudGRvd25Db21wbGV0ZSA/IG51bGwgOiBzZXRUaW1lb3V0KHRoaXMudGljaywgdGltZW91dCksXG4gICAgICAgIHByZXZUaW1lOiBjdXJyZW50VGltZSxcbiAgICAgICAgdGltZVJlbWFpbmluZyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb3VudGRvd25Db21wbGV0ZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY29tcGxldGVDYWxsYmFjaykge1xuICAgICAgICB0aGlzLnByb3BzLmNvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy50aWNrQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMucHJvcHMudGlja0NhbGxiYWNrKHRpbWVSZW1haW5pbmcpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGltZVJlbWFpbmluZyA9IHRoaXMuc3RhdGUudGltZVJlbWFpbmluZztcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRpbWVyXCI+e3RoaXMuZ2V0Rm9ybWF0dGVkVGltZSh0aW1lUmVtYWluaW5nKX08L2Rpdj47XG4gIH1cbn1cbiJdfQ==
