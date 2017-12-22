var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import scrollparent from 'scrollparent';

export var scrollTopHelper = function scrollTopHelper(node, func) {
  var parent = scrollparent(node);
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

export default (function (ComposedComponent) {
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


        return React.createElement(ComposedComponent, _extends({}, this.props, {
          scrollTop: scrollPosition
        }));
      }
    }]);

    return ScrollDecorator;
  }(Component);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvc2Nyb2xsLXRvcC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJzY3JvbGxwYXJlbnQiLCJzY3JvbGxUb3BIZWxwZXIiLCJub2RlIiwiZnVuYyIsInBhcmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0aWNraW5nIiwidXBkYXRlIiwicmVxdWVzdFRpY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0YXRlIiwic2Nyb2xsUG9zaXRpb24iLCJnZXRXaW5kb3dTY3JvbGxUb3AiLCJoYW5kbGVJbnRlcnZhbCIsImJpbmQiLCJoYW5kbGVSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJJTlRFUlZBTCIsImludGVydmFsSUQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlcXVlc3RJRCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJuZXdTY3JvbGxQb3NpdGlvbiIsInNldFN0YXRlIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLE9BQU9DLFlBQVAsTUFBeUIsY0FBekI7O0FBRUEsT0FBTyxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUM3QyxNQUFNQyxTQUFTSixhQUFhRSxJQUFiLENBQWY7QUFDQUcsVUFBUUMsR0FBUixDQUFZRixNQUFaOztBQUVBLE1BQUlHLFVBQVUsS0FBZDs7QUFFQSxNQUFNQyxTQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUNuQkwsU0FBS0MsTUFBTCxFQUFhLFlBQU07QUFDakJHLGdCQUFVLEtBQVY7QUFDRCxLQUZEO0FBR0QsR0FKRDtBQUtBLE1BQU1FLGNBQWMsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCSixZQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBLFFBQUksQ0FBQ0MsT0FBTCxFQUFjO0FBQ1pHLDRCQUFzQkYsTUFBdEI7QUFDRDtBQUNERCxjQUFVLElBQVY7QUFDRCxHQU5EOztBQVFBSCxTQUFPTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0YsV0FBbEMsRUFBK0MsSUFBL0M7QUFDQSxTQUFPO0FBQUEsV0FBTUwsT0FBT1EsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNILFdBQXJDLENBQU47QUFBQSxHQUFQO0FBQ0QsQ0FyQk07O0FBdUJQLGdCQUFlO0FBQUE7QUFBQTs7QUFDYiwrQkFBYztBQUFBOztBQUdaO0FBSFk7O0FBSVosWUFBS0ksS0FBTCxHQUFhO0FBQ1hDLHdCQUFnQixNQUFLQyxrQkFBTDtBQURMLE9BQWI7O0FBSUE7QUFDQSxZQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsWUFBS0MsMkJBQUwsR0FBbUMsTUFBS0EsMkJBQUwsQ0FBaUNELElBQWpDLE9BQW5DO0FBVlk7QUFXYjs7QUFaWTtBQUFBO0FBQUEsMkNBY1E7QUFDbkI7QUFDQSxZQUFNRSxXQUFXLEVBQWpCO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQkMsWUFBWSxLQUFLTCxjQUFqQixFQUFpQ0csUUFBakMsQ0FBbEI7QUFDRDtBQWxCWTtBQUFBO0FBQUEsNkNBb0JVO0FBQ3JCO0FBQ0FHLHNCQUFjLEtBQUtGLFVBQW5CO0FBQ0FHLDZCQUFxQixLQUFLQyxTQUExQjtBQUNBLGFBQUtBLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxhQUFLSixVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7QUExQlk7QUFBQTtBQUFBLDJDQTRCUTtBQUNuQjtBQUNBLFlBQUksT0FBT0ssTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQyxpQkFBTyxDQUFQO0FBQ0Q7QUFDRCxlQUFPQSxPQUFPQyxXQUFQLElBQXNCQyxTQUFTQyxlQUFULENBQXlCQyxTQUF0RDtBQUNEO0FBbENZO0FBQUE7QUFBQSx1Q0FvQ0k7QUFDZjtBQUNBTiw2QkFBcUIsS0FBS0MsU0FBMUI7QUFDQSxhQUFLQSxTQUFMLEdBQWlCZCxzQkFBc0IsS0FBS1EsMkJBQTNCLENBQWpCO0FBQ0Q7QUF4Q1k7QUFBQTtBQUFBLG9EQTBDaUI7QUFBQSxZQUNwQkosY0FEb0IsR0FDRCxLQUFLRCxLQURKLENBQ3BCQyxjQURvQjs7QUFFNUIsWUFBTWdCLG9CQUFvQixLQUFLZixrQkFBTCxFQUExQjs7QUFFQTtBQUNBLFlBQUllLHNCQUFzQmhCLGNBQTFCLEVBQTBDO0FBQ3hDLGVBQUtpQixRQUFMLENBQWM7QUFDWmpCLDRCQUFnQmdCO0FBREosV0FBZDtBQUdEO0FBQ0Y7QUFwRFk7QUFBQTtBQUFBLCtCQXNESjtBQUFBLFlBQ0NoQixjQURELEdBQ29CLEtBQUtELEtBRHpCLENBQ0NDLGNBREQ7OztBQUdQLGVBQ0Usb0JBQUMsaUJBQUQsZUFDTSxLQUFLa0IsS0FEWDtBQUVFLHFCQUFXbEI7QUFGYixXQURGO0FBTUQ7QUEvRFk7O0FBQUE7QUFBQSxJQUFtRGYsU0FBbkQ7QUFBQSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvc2Nyb2xsLXRvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc2Nyb2xscGFyZW50IGZyb20gJ3Njcm9sbHBhcmVudCc7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxUb3BIZWxwZXIgPSAobm9kZSwgZnVuYykgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBzY3JvbGxwYXJlbnQobm9kZSk7XG4gIGNvbnNvbGUubG9nKHBhcmVudCk7XG5cbiAgbGV0IHRpY2tpbmcgPSBmYWxzZTtcblxuICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgZnVuYyhwYXJlbnQsICgpID0+IHtcbiAgICAgIHRpY2tpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgcmVxdWVzdFRpY2sgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1RJQ0snKVxuICAgIGlmICghdGlja2luZykge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgfVxuICAgIHRpY2tpbmcgPSB0cnVlO1xuICB9O1xuXG4gIHBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCByZXF1ZXN0VGljaywgdHJ1ZSk7XG4gIHJldHVybiAoKSA9PiBwYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcmVxdWVzdFRpY2spO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9zZWRDb21wb25lbnQgPT4gY2xhc3MgU2Nyb2xsRGVjb3JhdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIEluaXRpYWwgc2Nyb2xsIHBvc2l0aW9uXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNjcm9sbFBvc2l0aW9uOiB0aGlzLmdldFdpbmRvd1Njcm9sbFRvcCgpLFxuICAgIH07XG5cbiAgICAvLyBCaW5kIGhhbmRsZXJzXG4gICAgdGhpcy5oYW5kbGVJbnRlcnZhbCA9IHRoaXMuaGFuZGxlSW50ZXJ2YWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHRoaXMuaGFuZGxlUmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgLy8gNTAgdGltZXMgcGVyIHNlY29uZCwgY2hhbmdlIHRvIHlvdXIgbmVlZHNcbiAgICBjb25zdCBJTlRFUlZBTCA9IDIwO1xuICAgIHRoaXMuaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKHRoaXMuaGFuZGxlSW50ZXJ2YWwsIElOVEVSVkFMKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vIFJlbW92ZSBhbmQgcmVzZXQgaW50ZXJ2YWwvYW5pbWF0aW9uRnJhbWVcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJRCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0SUQpO1xuICAgIHRoaXMucmVxdWVzdElEID0gbnVsbDtcbiAgICB0aGlzLmludGVydmFsSUQgPSBudWxsO1xuICB9XG5cbiAgZ2V0V2luZG93U2Nyb2xsVG9wKCkge1xuICAgIC8vIEdldCBzY3JvbGwgcG9zaXRpb24sIHdpdGggSUUgZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gIH1cblxuICBoYW5kbGVJbnRlcnZhbCgpIHtcbiAgICAvLyBJbnRlcnZhbCBpcyBvbmx5IHVzZWQgdG8gdGhyb3R0bGUgYW5pbWF0aW9uIGZyYW1lXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0SUQpO1xuICAgIHRoaXMucmVxdWVzdElEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlUmVxdWVzdEFuaW1hdGlvbkZyYW1lKTtcbiAgfVxuXG4gIGhhbmRsZVJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHtcbiAgICBjb25zdCB7IHNjcm9sbFBvc2l0aW9uIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IG5ld1Njcm9sbFBvc2l0aW9uID0gdGhpcy5nZXRXaW5kb3dTY3JvbGxUb3AoKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGUgb25seSB3aGVuIHNjcm9sbCBwb3NpdGlvbiBpcyBjaGFuZ2VkXG4gICAgaWYgKG5ld1Njcm9sbFBvc2l0aW9uICE9PSBzY3JvbGxQb3NpdGlvbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNjcm9sbFBvc2l0aW9uOiBuZXdTY3JvbGxQb3NpdGlvbixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNjcm9sbFBvc2l0aW9uIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb3NlZENvbXBvbmVudFxuICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgc2Nyb2xsVG9wPXtzY3JvbGxQb3NpdGlvbn1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufTtcbiJdfQ==
