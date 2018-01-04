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
      value: 6,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#1b1e34'
    },
    shape: {
      type: 'polygon',
      stroke: {
        width: 0,
        color: '#000'
      },
      polygon: {
        nb_sides: 6
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 160,
      random: false,
      anim: {
        enable: true,
        speed: 10,
        size_min: 40,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: '#ffffff',
      opacity: 1,
      width: 2
    },
    move: {
      enable: true,
      speed: 8,
      direction: 'none',
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
        enable: false,
        mode: 'grab'
      },
      onclick: {
        enable: false,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
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

var Bubble = function (_Component) {
  _inherits(Bubble, _Component);

  function Bubble() {
    _classCallCheck(this, Bubble);

    return _possibleConstructorReturn(this, (Bubble.__proto__ || Object.getPrototypeOf(Bubble)).apply(this, arguments));
  }

  _createClass(Bubble, [{
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
        return _react2.default.createElement('div', { className: className, id: 'snow' });
      }
      return null;
    }
  }]);

  return Bubble;
}(_react.Component);

exports.default = (0, _reactFela.createComponent)(function () {
  return {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  };
}, Bubble, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvcGFydGljbGVzL2J1YmJsZS5lczYiXSwibmFtZXMiOlsid2luZG93IiwicmVxdWlyZSIsInBhcmFtcyIsInBhcnRpY2xlcyIsIm51bWJlciIsInZhbHVlIiwiZGVuc2l0eSIsImVuYWJsZSIsInZhbHVlX2FyZWEiLCJjb2xvciIsInNoYXBlIiwidHlwZSIsInN0cm9rZSIsIndpZHRoIiwicG9seWdvbiIsIm5iX3NpZGVzIiwiaW1hZ2UiLCJzcmMiLCJoZWlnaHQiLCJvcGFjaXR5IiwicmFuZG9tIiwiYW5pbSIsInNwZWVkIiwib3BhY2l0eV9taW4iLCJzeW5jIiwic2l6ZSIsInNpemVfbWluIiwibGluZV9saW5rZWQiLCJkaXN0YW5jZSIsIm1vdmUiLCJkaXJlY3Rpb24iLCJzdHJhaWdodCIsIm91dF9tb2RlIiwiYm91bmNlIiwiYXR0cmFjdCIsInJvdGF0ZVgiLCJyb3RhdGVZIiwiaW50ZXJhY3Rpdml0eSIsImRldGVjdF9vbiIsImV2ZW50cyIsIm9uaG92ZXIiLCJtb2RlIiwib25jbGljayIsInJlc2l6ZSIsIm1vZGVzIiwiZ3JhYiIsImJ1YmJsZSIsImR1cmF0aW9uIiwicmVwdWxzZSIsInB1c2giLCJwYXJ0aWNsZXNfbmIiLCJyZW1vdmUiLCJyZXRpbmFfZGV0ZWN0IiwiQnViYmxlIiwicGFydGljbGVzSlMiLCJwSlNEb20iLCJBcnJheSIsImxlbmd0aCIsImkiLCJwSlMiLCJmbiIsInZlbmRvcnMiLCJkZXN0cm95cEpTIiwiZXJyIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsIk9iamVjdCIsImtleXMiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQUksT0FBT0EsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQ0MsVUFBUSxjQUFSO0FBQ0Q7O0FBRUQsSUFBTUMsU0FBUztBQUNiQyxhQUFX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QUFqQixDQUFxQkMsRUFBckIsQ0FBd0JDLE9BQXhCLENBQWdDQyxVQUFoQztBQUNEO0FBQ0YsU0FKRCxDQUlFLE9BQU9DLEdBQVAsRUFBWSxDQUFFO0FBQ2pCO0FBQ0QvRCxhQUFPdUQsTUFBUCxHQUFnQixFQUFoQjtBQUNEOzs7NkJBQ1E7QUFBQSxVQUNDUyxTQURELEdBQ2UsS0FBS0MsS0FEcEIsQ0FDQ0QsU0FERDs7QUFFUCxVQUFJLE9BQU9oRSxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDLGVBQU8sdUNBQUssV0FBV2dFLFNBQWhCLEVBQTJCLElBQUcsTUFBOUIsR0FBUDtBQUNEO0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozs7OztrQkFHWSxnQ0FDYjtBQUFBLFNBQU87QUFDTEUsY0FBVSxVQURMO0FBRUxDLFVBQU0sQ0FGRDtBQUdMQyxTQUFLLENBSEE7QUFJTEMsV0FBTyxDQUpGO0FBS0xDLFlBQVE7QUFMSCxHQUFQO0FBQUEsQ0FEYSxFQVFiakIsTUFSYSxFQVNiO0FBQUEsU0FBS2tCLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsQ0FUYSxDIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvcGFydGljbGVzL2J1YmJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vcG9ydGFsJztcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJlcXVpcmUoJ3BhcnRpY2xlcy5qcycpO1xufVxuXG5jb25zdCBwYXJhbXMgPSB7XG4gIHBhcnRpY2xlczoge1xuICAgIG51bWJlcjoge1xuICAgICAgdmFsdWU6IDYsXG4gICAgICBkZW5zaXR5OiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWVfYXJlYTogODAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICB2YWx1ZTogJyMxYjFlMzQnLFxuICAgIH0sXG4gICAgc2hhcGU6IHtcbiAgICAgIHR5cGU6ICdwb2x5Z29uJyxcbiAgICAgIHN0cm9rZToge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICAgIH0sXG4gICAgICBwb2x5Z29uOiB7XG4gICAgICAgIG5iX3NpZGVzOiA2LFxuICAgICAgfSxcbiAgICAgIGltYWdlOiB7XG4gICAgICAgIHNyYzogJ2ltZy9naXRodWIuc3ZnJyxcbiAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgaGVpZ2h0OiAxMDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgb3BhY2l0eToge1xuICAgICAgdmFsdWU6IDAuMyxcbiAgICAgIHJhbmRvbTogdHJ1ZSxcbiAgICAgIGFuaW06IHtcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgc3BlZWQ6IDEsXG4gICAgICAgIG9wYWNpdHlfbWluOiAwLjEsXG4gICAgICAgIHN5bmM6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiAxNjAsXG4gICAgICByYW5kb206IGZhbHNlLFxuICAgICAgYW5pbToge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiAxMCxcbiAgICAgICAgc2l6ZV9taW46IDQwLFxuICAgICAgICBzeW5jOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgIGRpc3RhbmNlOiAyMDAsXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHdpZHRoOiAyLFxuICAgIH0sXG4gICAgbW92ZToge1xuICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDgsXG4gICAgICBkaXJlY3Rpb246ICdub25lJyxcbiAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICBzdHJhaWdodDogZmFsc2UsXG4gICAgICBvdXRfbW9kZTogJ291dCcsXG4gICAgICBib3VuY2U6IGZhbHNlLFxuICAgICAgYXR0cmFjdDoge1xuICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICByb3RhdGVYOiA2MDAsXG4gICAgICAgIHJvdGF0ZVk6IDEyMDAsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGludGVyYWN0aXZpdHk6IHtcbiAgICBkZXRlY3Rfb246ICdjYW52YXMnLFxuICAgIGV2ZW50czoge1xuICAgICAgb25ob3Zlcjoge1xuICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICBtb2RlOiAnZ3JhYicsXG4gICAgICB9LFxuICAgICAgb25jbGljazoge1xuICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICBtb2RlOiAncHVzaCcsXG4gICAgICB9LFxuICAgICAgcmVzaXplOiB0cnVlLFxuICAgIH0sXG4gICAgbW9kZXM6IHtcbiAgICAgIGdyYWI6IHtcbiAgICAgICAgZGlzdGFuY2U6IDQwMCxcbiAgICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGJ1YmJsZToge1xuICAgICAgICBkaXN0YW5jZTogNDAwLFxuICAgICAgICBzaXplOiA0MCxcbiAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgIG9wYWNpdHk6IDgsXG4gICAgICAgIHNwZWVkOiAzLFxuICAgICAgfSxcbiAgICAgIHJlcHVsc2U6IHtcbiAgICAgICAgZGlzdGFuY2U6IDIwMCxcbiAgICAgICAgZHVyYXRpb246IDAuNCxcbiAgICAgIH0sXG4gICAgICBwdXNoOiB7XG4gICAgICAgIHBhcnRpY2xlc19uYjogNCxcbiAgICAgIH0sXG4gICAgICByZW1vdmU6IHtcbiAgICAgICAgcGFydGljbGVzX25iOiAyLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByZXRpbmFfZGV0ZWN0OiB0cnVlLFxufTtcblxuY2xhc3MgQnViYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB3aW5kb3cucGFydGljbGVzSlMoJ3Nub3cnLCBwYXJhbXMpO1xuICAgIH1cbiAgfVxuICBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB3aW5kb3cucEpTRG9tICYmXG4gICAgICB3aW5kb3cucEpTRG9tIGluc3RhbmNlb2YgQXJyYXkgJiZcbiAgICAgIHdpbmRvdy5wSlNEb20ubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cucEpTRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgd2luZG93LnBKU0RvbVtpXS5wSlMuZm4udmVuZG9ycy5kZXN0cm95cEpTKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICB9XG4gICAgd2luZG93LnBKU0RvbSA9IFtdO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD1cInNub3dcIiAvPjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KFxuICAoKSA9PiAoe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IDAsXG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgfSksXG4gIEJ1YmJsZSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG4iXX0=
