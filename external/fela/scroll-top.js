'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollTopHelper = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _scrollparent = require('scrollparent');

var _scrollparent2 = _interopRequireDefault(_scrollparent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var scrollTopHelper = exports.scrollTopHelper = function scrollTopHelper(node, func) {
  var parent = (0, _scrollparent2.default)(node);

  var ticking = false;

  var update = function update() {
    func(parent, function () {
      ticking = false;
    });
  };
  var requestTick = function requestTick() {
    if (!ticking) {
      requestAnimationFrame(update);
    }
    ticking = true;
  };

  parent.addEventListener('scroll', requestTick, true);
  return function () {
    return parent.removeEventListener('scroll', requestTick);
  };
};

exports.default = function (ComposedComponent) {
  return function (_Component) {
    _inherits(ScrollDecorator, _Component);

    function ScrollDecorator() {
      _classCallCheck(this, ScrollDecorator);

      // Initial scroll position
      var _this = _possibleConstructorReturn(this, (ScrollDecorator.__proto__ || Object.getPrototypeOf(ScrollDecorator)).call(this));

      _this.state = {
        scrollPosition: _this.getWindowScrollTop()
      };

      // Bind handlers
      _this.handleInterval = _this.handleInterval.bind(_this);
      _this.handleRequestAnimationFrame = _this.handleRequestAnimationFrame.bind(_this);
      return _this;
    }

    _createClass(ScrollDecorator, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        // 50 times per second, change to your needs
        var INTERVAL = 20;
        this.intervalID = setInterval(this.handleInterval, INTERVAL);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        // Remove and reset interval/animationFrame
        clearInterval(this.intervalID);
        cancelAnimationFrame(this.requestID);
        this.requestID = null;
        this.intervalID = null;
      }
    }, {
      key: 'getWindowScrollTop',
      value: function getWindowScrollTop() {
        // Get scroll position, with IE fallback
        if (typeof window === 'undefined') {
          return 0;
        }
        return window.pageYOffset || document.documentElement.scrollTop;
      }
    }, {
      key: 'handleInterval',
      value: function handleInterval() {
        // Interval is only used to throttle animation frame
        cancelAnimationFrame(this.requestID);
        this.requestID = requestAnimationFrame(this.handleRequestAnimationFrame);
      }
    }, {
      key: 'handleRequestAnimationFrame',
      value: function handleRequestAnimationFrame() {
        var scrollPosition = this.state.scrollPosition;

        var newScrollPosition = this.getWindowScrollTop();

        // Update the state only when scroll position is changed
        if (newScrollPosition !== scrollPosition) {
          this.setState({
            scrollPosition: newScrollPosition
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var scrollPosition = this.state.scrollPosition;


        return _react2.default.createElement(ComposedComponent, _extends({}, this.props, { scrollTop: scrollPosition }));
      }
    }]);

    return ScrollDecorator;
  }(_react.Component);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvc2Nyb2xsLXRvcC5lczYiXSwibmFtZXMiOlsic2Nyb2xsVG9wSGVscGVyIiwibm9kZSIsImZ1bmMiLCJwYXJlbnQiLCJ0aWNraW5nIiwidXBkYXRlIiwicmVxdWVzdFRpY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0YXRlIiwic2Nyb2xsUG9zaXRpb24iLCJnZXRXaW5kb3dTY3JvbGxUb3AiLCJoYW5kbGVJbnRlcnZhbCIsImJpbmQiLCJoYW5kbGVSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJJTlRFUlZBTCIsImludGVydmFsSUQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlcXVlc3RJRCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJuZXdTY3JvbGxQb3NpdGlvbiIsInNldFN0YXRlIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsNENBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDN0MsTUFBTUMsU0FBUyw0QkFBYUYsSUFBYixDQUFmOztBQUVBLE1BQUlHLFVBQVUsS0FBZDs7QUFFQSxNQUFNQyxTQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUNuQkgsU0FBS0MsTUFBTCxFQUFhLFlBQU07QUFDakJDLGdCQUFVLEtBQVY7QUFDRCxLQUZEO0FBR0QsR0FKRDtBQUtBLE1BQU1FLGNBQWMsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQUksQ0FBQ0YsT0FBTCxFQUFjO0FBQ1pHLDRCQUFzQkYsTUFBdEI7QUFDRDtBQUNERCxjQUFVLElBQVY7QUFDRCxHQUxEOztBQU9BRCxTQUFPSyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0YsV0FBbEMsRUFBK0MsSUFBL0M7QUFDQSxTQUFPO0FBQUEsV0FBTUgsT0FBT00sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNILFdBQXJDLENBQU47QUFBQSxHQUFQO0FBQ0QsQ0FuQk07O2tCQXFCUTtBQUFBO0FBQUE7O0FBRVgsK0JBQWM7QUFBQTs7QUFHWjtBQUhZOztBQUlaLFlBQUtJLEtBQUwsR0FBYTtBQUNYQyx3QkFBZ0IsTUFBS0Msa0JBQUw7QUFETCxPQUFiOztBQUlBO0FBQ0EsWUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLFlBQUtDLDJCQUFMLEdBQW1DLE1BQUtBLDJCQUFMLENBQWlDRCxJQUFqQyxPQUFuQztBQVZZO0FBYWI7O0FBZlU7QUFBQTtBQUFBLDJDQWlCVTtBQUNuQjtBQUNBLFlBQU1FLFdBQVcsRUFBakI7QUFDQSxhQUFLQyxVQUFMLEdBQWtCQyxZQUFZLEtBQUtMLGNBQWpCLEVBQWlDRyxRQUFqQyxDQUFsQjtBQUNEO0FBckJVO0FBQUE7QUFBQSw2Q0F1Qlk7QUFDckI7QUFDQUcsc0JBQWMsS0FBS0YsVUFBbkI7QUFDQUcsNkJBQXFCLEtBQUtDLFNBQTFCO0FBQ0EsYUFBS0EsU0FBTCxHQUFpQixJQUFqQjtBQUNBLGFBQUtKLFVBQUwsR0FBa0IsSUFBbEI7QUFDRDtBQTdCVTtBQUFBO0FBQUEsMkNBK0JVO0FBQ25CO0FBQ0EsWUFBSSxPQUFPSyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDLGlCQUFPLENBQVA7QUFDRDtBQUNELGVBQU9BLE9BQU9DLFdBQVAsSUFBc0JDLFNBQVNDLGVBQVQsQ0FBeUJDLFNBQXREO0FBQ0Q7QUFyQ1U7QUFBQTtBQUFBLHVDQXVDTTtBQUNmO0FBQ0FOLDZCQUFxQixLQUFLQyxTQUExQjtBQUNBLGFBQUtBLFNBQUwsR0FBaUJkLHNCQUFzQixLQUFLUSwyQkFBM0IsQ0FBakI7QUFDRDtBQTNDVTtBQUFBO0FBQUEsb0RBNkNtQjtBQUFBLFlBQ3BCSixjQURvQixHQUNELEtBQUtELEtBREosQ0FDcEJDLGNBRG9COztBQUU1QixZQUFNZ0Isb0JBQW9CLEtBQUtmLGtCQUFMLEVBQTFCOztBQUVBO0FBQ0EsWUFBSWUsc0JBQXNCaEIsY0FBMUIsRUFBMEM7QUFDeEMsZUFBS2lCLFFBQUwsQ0FBYztBQUNaakIsNEJBQWdCZ0I7QUFESixXQUFkO0FBR0Q7QUFDRjtBQXZEVTtBQUFBO0FBQUEsK0JBeURGO0FBQUEsWUFDQ2hCLGNBREQsR0FDb0IsS0FBS0QsS0FEekIsQ0FDQ0MsY0FERDs7O0FBR1AsZUFBTyw4QkFBQyxpQkFBRCxlQUF1QixLQUFLa0IsS0FBNUIsSUFBbUMsV0FBV2xCLGNBQTlDLElBQVA7QUFDRDtBQTdEVTs7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiJleHRlcm5hbC9mZWxhL3Njcm9sbC10b3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHNjcm9sbHBhcmVudCBmcm9tICdzY3JvbGxwYXJlbnQnO1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsVG9wSGVscGVyID0gKG5vZGUsIGZ1bmMpID0+IHtcbiAgY29uc3QgcGFyZW50ID0gc2Nyb2xscGFyZW50KG5vZGUpO1xuXG4gIGxldCB0aWNraW5nID0gZmFsc2U7XG5cbiAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgIGZ1bmMocGFyZW50LCAoKSA9PiB7XG4gICAgICB0aWNraW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHJlcXVlc3RUaWNrID0gKCkgPT4ge1xuICAgIGlmICghdGlja2luZykge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgfVxuICAgIHRpY2tpbmcgPSB0cnVlO1xuICB9O1xuXG4gIHBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCByZXF1ZXN0VGljaywgdHJ1ZSk7XG4gIHJldHVybiAoKSA9PiBwYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcmVxdWVzdFRpY2spO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9zZWRDb21wb25lbnQgPT5cbiAgY2xhc3MgU2Nyb2xsRGVjb3JhdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIC8vIEluaXRpYWwgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBzY3JvbGxQb3NpdGlvbjogdGhpcy5nZXRXaW5kb3dTY3JvbGxUb3AoKVxuICAgICAgfTtcblxuICAgICAgLy8gQmluZCBoYW5kbGVyc1xuICAgICAgdGhpcy5oYW5kbGVJbnRlcnZhbCA9IHRoaXMuaGFuZGxlSW50ZXJ2YWwuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlUmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gdGhpcy5oYW5kbGVSZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAvLyA1MCB0aW1lcyBwZXIgc2Vjb25kLCBjaGFuZ2UgdG8geW91ciBuZWVkc1xuICAgICAgY29uc3QgSU5URVJWQUwgPSAyMDtcbiAgICAgIHRoaXMuaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKHRoaXMuaGFuZGxlSW50ZXJ2YWwsIElOVEVSVkFMKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIC8vIFJlbW92ZSBhbmQgcmVzZXQgaW50ZXJ2YWwvYW5pbWF0aW9uRnJhbWVcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElEKTtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdElEKTtcbiAgICAgIHRoaXMucmVxdWVzdElEID0gbnVsbDtcbiAgICAgIHRoaXMuaW50ZXJ2YWxJRCA9IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0V2luZG93U2Nyb2xsVG9wKCkge1xuICAgICAgLy8gR2V0IHNjcm9sbCBwb3NpdGlvbiwgd2l0aCBJRSBmYWxsYmFja1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIGhhbmRsZUludGVydmFsKCkge1xuICAgICAgLy8gSW50ZXJ2YWwgaXMgb25seSB1c2VkIHRvIHRocm90dGxlIGFuaW1hdGlvbiBmcmFtZVxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0SUQpO1xuICAgICAgdGhpcy5yZXF1ZXN0SUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVSZXF1ZXN0QW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHtcbiAgICAgIGNvbnN0IHsgc2Nyb2xsUG9zaXRpb24gfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBuZXdTY3JvbGxQb3NpdGlvbiA9IHRoaXMuZ2V0V2luZG93U2Nyb2xsVG9wKCk7XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGUgb25seSB3aGVuIHNjcm9sbCBwb3NpdGlvbiBpcyBjaGFuZ2VkXG4gICAgICBpZiAobmV3U2Nyb2xsUG9zaXRpb24gIT09IHNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNjcm9sbFBvc2l0aW9uOiBuZXdTY3JvbGxQb3NpdGlvblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IHNjcm9sbFBvc2l0aW9uIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSBzY3JvbGxUb3A9e3Njcm9sbFBvc2l0aW9ufSAvPjtcbiAgICB9XG4gIH07XG4iXX0=
