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
  console.log(parent);

  var ticking = false;

  var update = function update() {
    func(parent, function () {
      ticking = false;
    });
  };
  var requestTick = function requestTick() {
    console.log('TICK');
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


        return _react2.default.createElement(ComposedComponent, _extends({}, this.props, {
          scrollTop: scrollPosition
        }));
      }
    }]);

    return ScrollDecorator;
  }(_react.Component);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvc2Nyb2xsLXRvcC5lczYiXSwibmFtZXMiOlsic2Nyb2xsVG9wSGVscGVyIiwibm9kZSIsImZ1bmMiLCJwYXJlbnQiLCJjb25zb2xlIiwibG9nIiwidGlja2luZyIsInVwZGF0ZSIsInJlcXVlc3RUaWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGF0ZSIsInNjcm9sbFBvc2l0aW9uIiwiZ2V0V2luZG93U2Nyb2xsVG9wIiwiaGFuZGxlSW50ZXJ2YWwiLCJiaW5kIiwiaGFuZGxlUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiSU5URVJWQUwiLCJpbnRlcnZhbElEIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0SUQiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwibmV3U2Nyb2xsUG9zaXRpb24iLCJzZXRTdGF0ZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLDRDQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQzdDLE1BQU1DLFNBQVMsNEJBQWFGLElBQWIsQ0FBZjtBQUNBRyxVQUFRQyxHQUFSLENBQVlGLE1BQVo7O0FBRUEsTUFBSUcsVUFBVSxLQUFkOztBQUVBLE1BQU1DLFNBQVMsU0FBVEEsTUFBUyxHQUFNO0FBQ25CTCxTQUFLQyxNQUFMLEVBQWEsWUFBTTtBQUNqQkcsZ0JBQVUsS0FBVjtBQUNELEtBRkQ7QUFHRCxHQUpEO0FBS0EsTUFBTUUsY0FBYyxTQUFkQSxXQUFjLEdBQU07QUFDeEJKLFlBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsUUFBSSxDQUFDQyxPQUFMLEVBQWM7QUFDWkcsNEJBQXNCRixNQUF0QjtBQUNEO0FBQ0RELGNBQVUsSUFBVjtBQUNELEdBTkQ7O0FBUUFILFNBQU9PLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRixXQUFsQyxFQUErQyxJQUEvQztBQUNBLFNBQU87QUFBQSxXQUFNTCxPQUFPUSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0gsV0FBckMsQ0FBTjtBQUFBLEdBQVA7QUFDRCxDQXJCTTs7a0JBdUJRO0FBQUE7QUFBQTs7QUFDYiwrQkFBYztBQUFBOztBQUdaO0FBSFk7O0FBSVosWUFBS0ksS0FBTCxHQUFhO0FBQ1hDLHdCQUFnQixNQUFLQyxrQkFBTDtBQURMLE9BQWI7O0FBSUE7QUFDQSxZQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsWUFBS0MsMkJBQUwsR0FBbUMsTUFBS0EsMkJBQUwsQ0FBaUNELElBQWpDLE9BQW5DO0FBVlk7QUFXYjs7QUFaWTtBQUFBO0FBQUEsMkNBY1E7QUFDbkI7QUFDQSxZQUFNRSxXQUFXLEVBQWpCO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQkMsWUFBWSxLQUFLTCxjQUFqQixFQUFpQ0csUUFBakMsQ0FBbEI7QUFDRDtBQWxCWTtBQUFBO0FBQUEsNkNBb0JVO0FBQ3JCO0FBQ0FHLHNCQUFjLEtBQUtGLFVBQW5CO0FBQ0FHLDZCQUFxQixLQUFLQyxTQUExQjtBQUNBLGFBQUtBLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxhQUFLSixVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7QUExQlk7QUFBQTtBQUFBLDJDQTRCUTtBQUNuQjtBQUNBLFlBQUksT0FBT0ssTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQyxpQkFBTyxDQUFQO0FBQ0Q7QUFDRCxlQUFPQSxPQUFPQyxXQUFQLElBQXNCQyxTQUFTQyxlQUFULENBQXlCQyxTQUF0RDtBQUNEO0FBbENZO0FBQUE7QUFBQSx1Q0FvQ0k7QUFDZjtBQUNBTiw2QkFBcUIsS0FBS0MsU0FBMUI7QUFDQSxhQUFLQSxTQUFMLEdBQWlCZCxzQkFBc0IsS0FBS1EsMkJBQTNCLENBQWpCO0FBQ0Q7QUF4Q1k7QUFBQTtBQUFBLG9EQTBDaUI7QUFBQSxZQUNwQkosY0FEb0IsR0FDRCxLQUFLRCxLQURKLENBQ3BCQyxjQURvQjs7QUFFNUIsWUFBTWdCLG9CQUFvQixLQUFLZixrQkFBTCxFQUExQjs7QUFFQTtBQUNBLFlBQUllLHNCQUFzQmhCLGNBQTFCLEVBQTBDO0FBQ3hDLGVBQUtpQixRQUFMLENBQWM7QUFDWmpCLDRCQUFnQmdCO0FBREosV0FBZDtBQUdEO0FBQ0Y7QUFwRFk7QUFBQTtBQUFBLCtCQXNESjtBQUFBLFlBQ0NoQixjQURELEdBQ29CLEtBQUtELEtBRHpCLENBQ0NDLGNBREQ7OztBQUdQLGVBQ0UsOEJBQUMsaUJBQUQsZUFDTSxLQUFLa0IsS0FEWDtBQUVFLHFCQUFXbEI7QUFGYixXQURGO0FBTUQ7QUEvRFk7O0FBQUE7QUFBQTtBQUFBLEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9zY3JvbGwtdG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzY3JvbGxwYXJlbnQgZnJvbSAnc2Nyb2xscGFyZW50JztcblxuZXhwb3J0IGNvbnN0IHNjcm9sbFRvcEhlbHBlciA9IChub2RlLCBmdW5jKSA9PiB7XG4gIGNvbnN0IHBhcmVudCA9IHNjcm9sbHBhcmVudChub2RlKTtcbiAgY29uc29sZS5sb2cocGFyZW50KTtcblxuICBsZXQgdGlja2luZyA9IGZhbHNlO1xuXG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICBmdW5jKHBhcmVudCwgKCkgPT4ge1xuICAgICAgdGlja2luZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCByZXF1ZXN0VGljayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnVElDSycpXG4gICAgaWYgKCF0aWNraW5nKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICB9XG4gICAgdGlja2luZyA9IHRydWU7XG4gIH07XG5cbiAgcGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHJlcXVlc3RUaWNrLCB0cnVlKTtcbiAgcmV0dXJuICgpID0+IHBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCByZXF1ZXN0VGljayk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb3NlZENvbXBvbmVudCA9PiBjbGFzcyBTY3JvbGxEZWNvcmF0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gSW5pdGlhbCBzY3JvbGwgcG9zaXRpb25cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2Nyb2xsUG9zaXRpb246IHRoaXMuZ2V0V2luZG93U2Nyb2xsVG9wKCksXG4gICAgfTtcblxuICAgIC8vIEJpbmQgaGFuZGxlcnNcbiAgICB0aGlzLmhhbmRsZUludGVydmFsID0gdGhpcy5oYW5kbGVJbnRlcnZhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlUmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gdGhpcy5oYW5kbGVSZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAvLyA1MCB0aW1lcyBwZXIgc2Vjb25kLCBjaGFuZ2UgdG8geW91ciBuZWVkc1xuICAgIGNvbnN0IElOVEVSVkFMID0gMjA7XG4gICAgdGhpcy5pbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwodGhpcy5oYW5kbGVJbnRlcnZhbCwgSU5URVJWQUwpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8gUmVtb3ZlIGFuZCByZXNldCBpbnRlcnZhbC9hbmltYXRpb25GcmFtZVxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElEKTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJlcXVlc3RJRCk7XG4gICAgdGhpcy5yZXF1ZXN0SUQgPSBudWxsO1xuICAgIHRoaXMuaW50ZXJ2YWxJRCA9IG51bGw7XG4gIH1cblxuICBnZXRXaW5kb3dTY3JvbGxUb3AoKSB7XG4gICAgLy8gR2V0IHNjcm9sbCBwb3NpdGlvbiwgd2l0aCBJRSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgfVxuXG4gIGhhbmRsZUludGVydmFsKCkge1xuICAgIC8vIEludGVydmFsIGlzIG9ubHkgdXNlZCB0byB0aHJvdHRsZSBhbmltYXRpb24gZnJhbWVcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJlcXVlc3RJRCk7XG4gICAgdGhpcy5yZXF1ZXN0SUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVSZXF1ZXN0QW5pbWF0aW9uRnJhbWUpO1xuICB9XG5cbiAgaGFuZGxlUmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsUG9zaXRpb24gfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgbmV3U2Nyb2xsUG9zaXRpb24gPSB0aGlzLmdldFdpbmRvd1Njcm9sbFRvcCgpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBzdGF0ZSBvbmx5IHdoZW4gc2Nyb2xsIHBvc2l0aW9uIGlzIGNoYW5nZWRcbiAgICBpZiAobmV3U2Nyb2xsUG9zaXRpb24gIT09IHNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2Nyb2xsUG9zaXRpb246IG5ld1Njcm9sbFBvc2l0aW9uLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsUG9zaXRpb24gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvc2VkQ29tcG9uZW50XG4gICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICBzY3JvbGxUb3A9e3Njcm9sbFBvc2l0aW9ufVxuICAgICAgLz5cbiAgICApO1xuICB9XG59O1xuIl19
