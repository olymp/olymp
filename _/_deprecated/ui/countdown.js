'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountdownTimer = (_temp = _class = function (_Component) {
  _inherits(CountdownTimer, _Component);

  function CountdownTimer(props) {
    _classCallCheck(this, CountdownTimer);

    var _this = _possibleConstructorReturn(this, (CountdownTimer.__proto__ || Object.getPrototypeOf(CountdownTimer)).call(this, props));

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

      return _react2.default.createElement(
        'div',
        { className: 'timer' },
        this.getFormattedTime(timeRemaining)
      );
    }
  }]);

  return CountdownTimer;
}(_react.Component), _class.propTypes = {
  initialTimeRemaining: _propTypes.number.isRequired,
  interval: _propTypes.number,
  formatFunc: _propTypes.func,
  tickCallback: _propTypes.func,
  completeCallback: _propTypes.func
}, _class.defaultProps = {
  interval: 1000,
  formatFunc: null,
  tickCallback: null,
  completeCallback: null
}, _temp);
exports.default = CountdownTimer;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3VpL2NvdW50ZG93bi5lczYiXSwibmFtZXMiOlsiQ291bnRkb3duVGltZXIiLCJwcm9wcyIsInRpY2siLCJjdXJyZW50VGltZSIsIkRhdGUiLCJub3ciLCJkdCIsInN0YXRlIiwicHJldlRpbWUiLCJpbnRlcnZhbCIsInRpbWVSZW1haW5pbmdJbkludGVydmFsIiwidGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiY291bnRkb3duQ29tcGxldGUiLCJpc01vdW50ZWQiLCJ0aW1lb3V0SWQiLCJjbGVhclRpbWVvdXQiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJjb21wbGV0ZUNhbGxiYWNrIiwidGlja0NhbGxiYWNrIiwiZ2V0Rm9ybWF0dGVkVGltZSIsIm1pbGxpc2Vjb25kcyIsImZvcm1hdEZ1bmMiLCJ0b3RhbFNlY29uZHMiLCJyb3VuZCIsInNlY29uZHMiLCJwYXJzZUludCIsIm1pbnV0ZXMiLCJob3VycyIsImluaXRpYWxUaW1lUmVtYWluaW5nIiwibmV3UHJvcHMiLCJwcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLGM7OztBQWVuQiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdJQUNYQSxLQURXOztBQUFBLFVBaUNuQkMsSUFqQ21CLEdBaUNaLFlBQU07QUFDWCxVQUFNQyxjQUFjQyxLQUFLQyxHQUFMLEVBQXBCO0FBQ0EsVUFBTUMsS0FBSyxNQUFLQyxLQUFMLENBQVdDLFFBQVgsR0FBc0JMLGNBQWMsTUFBS0ksS0FBTCxDQUFXQyxRQUEvQyxHQUEwRCxDQUFyRTtBQUNBLFVBQU1DLFdBQVcsTUFBS1IsS0FBTCxDQUFXUSxRQUE1Qjs7QUFFQTtBQUNBLFVBQU1DLDBCQUEwQkQsV0FBV0gsS0FBS0csUUFBaEQ7QUFDQSxVQUFJRSxVQUFVRCx1QkFBZDs7QUFFQSxVQUFJQSwwQkFBMEJE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QlgsYUFBdEI7QUFESCxPQURGO0FBS0Q7Ozs7NEJBaEhNc0IsUyxHQUFZO0FBQ2pCRix3QkFBc0Isa0JBQU9HLFVBRFo7QUFFakIxQiw2QkFGaUI7QUFHakJnQiw2QkFIaUI7QUFJakJILCtCQUppQjtBQUtqQkQ7QUFMaUIsQyxTQU9aZSxZLEdBQWU7QUFDcEIzQixZQUFVLElBRFU7QUFFcEJnQixjQUFZLElBRlE7QUFHcEJILGdCQUFjLElBSE07QUFJcEJELG9CQUFrQjtBQUpFLEM7a0JBUkhyQixjIiwiZmlsZSI6ImV4dGVybmFsL3VpL2NvdW50ZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBudW1iZXIsIGZ1bmMgfSBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRkb3duVGltZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGluaXRpYWxUaW1lUmVtYWluaW5nOiBudW1iZXIuaXNSZXF1aXJlZCxcbiAgICBpbnRlcnZhbDogbnVtYmVyLFxuICAgIGZvcm1hdEZ1bmM6IGZ1bmMsXG4gICAgdGlja0NhbGxiYWNrOiBmdW5jLFxuICAgIGNvbXBsZXRlQ2FsbGJhY2s6IGZ1bmMsXG4gIH07XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaW50ZXJ2YWw6IDEwMDAsXG4gICAgZm9ybWF0RnVuYzogbnVsbCxcbiAgICB0aWNrQ2FsbGJhY2s6IG51bGwsXG4gICAgY29tcGxldGVDYWxsYmFjazogbnVsbCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGltZVJlbWFpbmluZzogdGhpcy5wcm9wcy5pbml0aWFsVGltZVJlbWFpbmluZyxcbiAgICAgIHRpbWVvdXRJZDogbnVsbCxcbiAgICAgIHByZXZUaW1lOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRpY2soKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS50aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLnRpbWVvdXRJZCk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldlRpbWU6IG51bGwsXG4gICAgICB0aW1lUmVtYWluaW5nOiBuZXdQcm9wcy5pbml0aWFsVGltZVJlbWFpbmluZyxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUucHJldlRpbWUgJiYgdGhpcy5zdGF0ZS50aW1lUmVtYWluaW5nID4gMCkge1xuICAgICAgdGhpcy50aWNrKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUudGltZW91dElkKTtcbiAgfVxuXG4gIHRpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGR0ID0gdGhpcy5zdGF0ZS5wcmV2VGltZSA/IGN1cnJlbnRUaW1lIC0gdGhpcy5zdGF0ZS5wcmV2VGltZSA6IDA7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSB0aGlzLnByb3BzLmludGVydmFsO1xuXG4gICAgLy8gY29ycmVjdCBmb3Igc21hbGwgdmFyaWF0aW9ucyBpbiBhY3R1YWwgdGltZW91dCB0aW1lXG4gICAgY29uc3QgdGltZVJlbWFpbmluZ0luSW50ZXJ2YWwgPSBpbnRlcnZhbCAtIGR0ICUgaW50ZXJ2YWw7XG4gICAgbGV0IHRpbWVvdXQgPSB0aW1lUmVtYWluaW5nSW5JbnRlcnZhbDtcblxuICAgIGlmICh0aW1lUmVtYWluaW5nSW5JbnRlcnZhbCA8IGludGVydmFsIC8gMi4wKSB7XG4gICAgICB0aW1lb3V0ICs9IGludGVydmFsO1xuICAgIH1cblxuICAgIGNvbnN0IHRpbWVSZW1haW5pbmcgPSBNYXRoLm1heCh0aGlzLnN0YXRlLnRpbWVSZW1haW5pbmcgLSBkdCwgMCk7XG4gICAgY29uc3QgY291bnRkb3duQ29tcGxldGUgPSB0aGlzLnN0YXRlLnByZXZUaW1lICYmIHRpbWVSZW1haW5pbmcgPD0gMDtcblxuICAgIGlmICh0aGlzLmlzTW91bnRlZCgpKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS50aW1lb3V0SWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUudGltZW91dElkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0aW1lb3V0SWQ6IGNvdW50ZG93bkNvbXBsZXRlID8gbnVsbCA6IHNldFRpbWVvdXQodGhpcy50aWNrLCB0aW1lb3V0KSxcbiAgICAgICAgcHJldlRpbWU6IGN1cnJlbnRUaW1lLFxuICAgICAgICB0aW1lUmVtYWluaW5nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvdW50ZG93bkNvbXBsZXRlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jb21wbGV0ZUNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY29tcGxldGVDYWxsYmFjaygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnRpY2tDYWxsYmFjaykge1xuICAgICAgdGhpcy5wcm9wcy50aWNrQ2FsbGJhY2sodGltZVJlbWFpbmluZyk7XG4gICAgfVxuICB9O1xuXG4gIGdldEZvcm1hdHRlZFRpbWUgPSAobWlsbGlzZWNvbmRzKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZm9ybWF0RnVuYykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZm9ybWF0RnVuYyhtaWxsaXNlY29uZHMpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvdGFsU2Vjb25kcyA9IE1hdGgucm91bmQobWlsbGlzZWNvbmRzIC8gMTAwMCk7XG5cbiAgICBsZXQgc2Vjb25kcyA9IHBhcnNlSW50KHRvdGFsU2Vjb25kcyAlIDYwLCAxMCk7XG4gICAgbGV0IG1pbnV0ZXMgPSBwYXJzZUludCh0b3RhbFNlY29uZHMgLyA2MCwgMTApICUgNjA7XG4gICAgbGV0IGhvdXJzID0gcGFyc2VJbnQodG90YWxTZWNvbmRzIC8gMzYwMCwgMTApO1xuXG4gICAgc2Vjb25kcyA9IHNlY29uZHMgPCAxMCA/IGAwJHtzZWNvbmRzfWAgOiBzZWNvbmRzO1xuICAgIG1pbnV0ZXMgPSBtaW51dGVzIDwgMTAgPyBgMCR7bWludXRlc31gIDogbWludXRlcztcbiAgICBob3VycyA9IGhvdXJzIDwgMTAgPyBgMCR7aG91cnN9YCA6IGhvdXJzO1xuXG4gICAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0aW1lUmVtYWluaW5nID0gdGhpcy5zdGF0ZS50aW1lUmVtYWluaW5nO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXJcIj5cbiAgICAgICAge3RoaXMuZ2V0Rm9ybWF0dGVkVGltZSh0aW1lUmVtYWluaW5nKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
