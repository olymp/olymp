'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

var _portal = require('../portal');

var _portal2 = _interopRequireDefault(_portal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof window !== 'undefined') {
  require('particles.js');
}

var params = {
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#fff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: '#ffffff',
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'bottom',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble'
      },
      onclick: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5
        }
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

var Snow = function (_Component) {
  _inherits(Snow, _Component);

  function Snow() {
    _classCallCheck(this, Snow);

    return _possibleConstructorReturn(this, (Snow.__proto__ || Object.getPrototypeOf(Snow)).apply(this, arguments));
  }

  _createClass(Snow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof window !== 'undefined') {
        window.particlesJS('snow', params);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (typeof window !== 'undefined' && window.pJSDom && window.pJSDom instanceof Array && window.pJSDom.length > 0) {
        try {
          for (var i = 0; i < window.pJSDom.length; i++) {
            window.pJSDom[i].pJS.fn.vendors.destroypJS();
          }
        } catch (err) {}
      }
      window.pJSDom = [];
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className;

      if (typeof window !== 'undefined') {
        return _react2.default.createElement(
          _portal2.default,
          null,
          _react2.default.createElement('div', { className: className, id: 'snow' })
        );
      }
      return null;
    }
  }]);

  return Snow;
}(_react.Component);

exports.default = (0, _reactFela.createComponent)(function (_ref) {
  var _ref$pointerEvents = _ref.pointerEvents,
      pointerEvents = _ref$pointerEvents === undefined ? 'none' : _ref$pointerEvents;
  return {
    pointerEvents: pointerEvents === true ? undefined : pointerEvents,
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 10000
  };
}, Snow, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvcGFydGljbGVzL3Nub3cuZXM2Il0sIm5hbWVzIjpbIndpbmRvdyIsInJlcXVpcmUiLCJwYXJhbXMiLCJwYXJ0aWNsZXMiLCJudW1iZXIiLCJ2YWx1ZSIsImRlbnNpdHkiLCJlbmFibGUiLCJ2YWx1ZV9hcmVhIiwiY29sb3IiLCJzaGFwZSIsInR5cGUiLCJzdHJva2UiLCJ3aWR0aCIsInBvbHlnb24iLCJuYl9zaWRlcyIsImltYWdlIiwic3JjIiwiaGVpZ2h0Iiwib3BhY2l0eSIsInJhbmRvbSIsImFuaW0iLCJzcGVlZCIsIm9wYWNpdHlfbWluIiwic3luYyIsInNpemUiLCJzaXplX21pbiIsImxpbmVfbGlua2VkIiwiZGlzdGFuY2UiLCJtb3ZlIiwiZGlyZWN0aW9uIiwic3RyYWlnaHQiLCJvdXRfbW9kZSIsImJvdW5jZSIsImF0dHJhY3QiLCJyb3RhdGVYIiwicm90YXRlWSIsImludGVyYWN0aXZpdHkiLCJkZXRlY3Rfb24iLCJldmVudHMiLCJvbmhvdmVyIiwibW9kZSIsIm9uY2xpY2siLCJyZXNpemUiLCJtb2RlcyIsImdyYWIiLCJidWJibGUiLCJkdXJhdGlvbiIsInJlcHVsc2UiLCJwdXNoIiwicGFydGljbGVzX25iIiwicmVtb3ZlIiwicmV0aW5hX2RldGVjdCIsIlNub3ciLCJwYXJ0aWNsZXNKUyIsInBKU0RvbSIsIkFycmF5IiwibGVuZ3RoIiwiaSIsInBKUyIsImZuIiwidmVuZG9ycyIsImRlc3Ryb3lwSlMiLCJlcnIiLCJjbGFzc05hbWUiLCJwcm9wcyIsInBvaW50ZXJFdmVudHMiLCJ1bmRlZmluZWQiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsInpJbmRleCIsIk9iamVjdCIsImtleXMiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQUksT0FBT0EsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQ0MsVUFBUSxjQUFS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LG1CQUFPdUQsTUFBUCxDQUFjRyxDQUFkLEVBQWlCQyxHQUFqQixDQUFxQkMsRUFBckIsQ0FBd0JDLE9BQXhCLENBQWdDQyxVQUFoQztBQUNEO0FBQ0YsU0FKRCxDQUlFLE9BQU9DLEdBQVAsRUFBWSxDQUFFO0FBQ2pCO0FBQ0QvRCxhQUFPdUQsTUFBUCxHQUFnQixFQUFoQjtBQUNEOzs7NkJBQ1E7QUFBQSxVQUNDUyxTQURELEdBQ2UsS0FBS0MsS0FEcEIsQ0FDQ0QsU0FERDs7QUFFUCxVQUFJLE9BQU9oRSxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDLGVBQ0U7QUFBQTtBQUFBO0FBQ0UsaURBQUssV0FBV2dFLFNBQWhCLEVBQTJCLElBQUcsTUFBOUI7QUFERixTQURGO0FBS0Q7QUFDRCxhQUFPLElBQVA7QUFDRDs7Ozs7O2tCQUdZLGdDQUNiO0FBQUEsZ0NBQUdFLGFBQUg7QUFBQSxNQUFHQSxhQUFILHNDQUFtQixNQUFuQjtBQUFBLFNBQWlDO0FBQy9CQSxtQkFBZUEsa0JBQWtCLElBQWxCLEdBQXlCQyxTQUF6QixHQUFxQ0QsYUFEckI7QUFFL0JFLGNBQVUsT0FGcUI7QUFHL0JDLFVBQU0sQ0FIeUI7QUFJL0JDLFNBQUssQ0FKMEI7QUFLL0JDLFdBQU8sQ0FMd0I7QUFNL0JDLFlBQVEsQ0FOdUI7QUFPL0JDLFlBQVE7QUFQdUIsR0FBakM7QUFBQSxDQURhLEVBVWJwQixJQVZhLEVBV2I7QUFBQSxTQUFLcUIsT0FBT0MsSUFBUCxDQUFZQyxDQUFaLENBQUw7QUFBQSxDQVhhLEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9wYXJ0aWNsZXMvc25vdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vcG9ydGFsJztcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJlcXVpcmUoJ3BhcnRpY2xlcy5qcycpO1xufVxuXG5jb25zdCBwYXJhbXMgPSB7XG4gIHBhcnRpY2xlczoge1xuICAgIG51bWJlcjoge1xuICAgICAgdmFsdWU6IDQwMCxcbiAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZV9hcmVhOiA4MDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29sb3I6IHtcbiAgICAgIHZhbHVlOiAnI2ZmZicsXG4gICAgfSxcbiAgICBzaGFwZToge1xuICAgICAgdHlwZTogJ2NpcmNsZScsXG4gICAgICBzdHJva2U6IHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXG4gICAgICB9LFxuICAgICAgcG9seWdvbjoge1xuICAgICAgICBuYl9zaWRlczogNSxcbiAgICAgIH0sXG4gICAgICBpbWFnZToge1xuICAgICAgICBzcmM6ICdpbWcvZ2l0aHViLnN2ZycsXG4gICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgIGhlaWdodDogMTAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG9wYWNpdHk6IHtcbiAgICAgIHZhbHVlOiAwLjUsXG4gICAgICByYW5kb206IHRydWUsXG4gICAgICBhbmltOiB7XG4gICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgIHNwZWVkOiAxLFxuICAgICAgICBvcGFjaXR5X21pbjogMC4xLFxuICAgICAgICBzeW5jOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogMTAsXG4gICAgICByYW5kb206IHRydWUsXG4gICAgICBhbmltOiB7XG4gICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgIHNwZWVkOiA0MCxcbiAgICAgICAgc2l6ZV9taW46IDAuMSxcbiAgICAgICAgc3luYzogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbGluZV9saW5rZWQ6IHtcbiAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICBkaXN0YW5jZTogNTAwLFxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIG9wYWNpdHk6IDAuNCxcbiAgICAgIHdpZHRoOiAyLFxuICAgIH0sXG4gICAgbW92ZToge1xuICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDYsXG4gICAgICBkaXJlY3Rpb246ICdib3R0b20nLFxuICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcbiAgICAgIG91dF9tb2RlOiAnb3V0JyxcbiAgICAgIGJvdW5jZTogZmFsc2UsXG4gICAgICBhdHRyYWN0OiB7XG4gICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgIHJvdGF0ZVg6IDYwMCxcbiAgICAgICAgcm90YXRlWTogMTIwMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgaW50ZXJhY3Rpdml0eToge1xuICAgIGRldGVjdF9vbjogJ2NhbnZhcycsXG4gICAgZXZlbnRzOiB7XG4gICAgICBvbmhvdmVyOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgbW9kZTogJ2J1YmJsZScsXG4gICAgICB9LFxuICAgICAgb25jbGljazoge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIG1vZGU6ICdyZXB1bHNlJyxcbiAgICAgIH0sXG4gICAgICByZXNpemU6IHRydWUsXG4gICAgfSxcbiAgICBtb2Rlczoge1xuICAgICAgZ3JhYjoge1xuICAgICAgICBkaXN0YW5jZTogNDAwLFxuICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBidWJibGU6IHtcbiAgICAgICAgZGlzdGFuY2U6IDQwMCxcbiAgICAgICAgc2l6ZTogNCxcbiAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgc3BlZWQ6IDMsXG4gICAgICB9LFxuICAgICAgcmVwdWxzZToge1xuICAgICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgICBkdXJhdGlvbjogMC40LFxuICAgICAgfSxcbiAgICAgIHB1c2g6IHtcbiAgICAgICAgcGFydGljbGVzX25iOiA0LFxuICAgICAgfSxcbiAgICAgIHJlbW92ZToge1xuICAgICAgICBwYXJ0aWNsZXNfbmI6IDIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHJldGluYV9kZXRlY3Q6IHRydWUsXG59O1xuXG5jbGFzcyBTbm93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB3aW5kb3cucGFydGljbGVzSlMoJ3Nub3cnLCBwYXJhbXMpO1xuICAgIH1cbiAgfVxuICBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB3aW5kb3cucEpTRG9tICYmXG4gICAgICB3aW5kb3cucEpTRG9tIGluc3RhbmNlb2YgQXJyYXkgJiZcbiAgICAgIHdpbmRvdy5wSlNEb20ubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cucEpTRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgd2luZG93LnBKU0RvbVtpXS5wSlMuZm4udmVuZG9ycy5kZXN0cm95cEpTKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICB9XG4gICAgd2luZG93LnBKU0RvbSA9IFtdO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQb3J0YWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9XCJzbm93XCIgLz5cbiAgICAgICAgPC9Qb3J0YWw+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoXG4gICh7IHBvaW50ZXJFdmVudHMgPSAnbm9uZScgfSkgPT4gKHtcbiAgICBwb2ludGVyRXZlbnRzOiBwb2ludGVyRXZlbnRzID09PSB0cnVlID8gdW5kZWZpbmVkIDogcG9pbnRlckV2ZW50cyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBsZWZ0OiAwLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgekluZGV4OiAxMDAwMCxcbiAgfSksXG4gIFNub3csXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuIl19
