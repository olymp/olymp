var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { createComponent } from 'react-fela';
import Portal from '../portal';

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
        return React.createElement('div', { className: className, id: 'snow' });
      }
      return null;
    }
  }]);

  return Bubble;
}(Component);

export default createComponent(function () {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvcGFydGljbGVzL2J1YmJsZS5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjcmVhdGVDb21wb25lbnQiLCJQb3J0YWwiLCJ3aW5kb3ciLCJyZXF1aXJlIiwicGFyYW1zIiwicGFydGljbGVzIiwibnVtYmVyIiwidmFsdWUiLCJkZW5zaXR5IiwiZW5hYmxlIiwidmFsdWVfYXJlYSIsImNvbG9yIiwic2hhcGUiLCJ0eXBlIiwic3Ryb2tlIiwid2lkdGgiLCJwb2x5Z29uIiwibmJfc2lkZXMiLCJpbWFnZSIsInNyYyIsImhlaWdodCIsIm9wYWNpdHkiLCJyYW5kb20iLCJhbmltIiwic3BlZWQiLCJvcGFjaXR5X21pbiIsInN5bmMiLCJzaXplIiwic2l6ZV9taW4iLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwibW92ZSIsImRpcmVjdGlvbiIsInN0cmFpZ2h0Iiwib3V0X21vZGUiLCJib3VuY2UiLCJhdHRyYWN0Iiwicm90YXRlWCIsInJvdGF0ZVkiLCJpbnRlcmFjdGl2aXR5IiwiZGV0ZWN0X29uIiwiZXZlbnRzIiwib25ob3ZlciIsIm1vZGUiLCJvbmNsaWNrIiwicmVzaXplIiwibW9kZXMiLCJncmFiIiwiYnViYmxlIiwiZHVyYXRpb24iLCJyZXB1bHNlIiwicHVzaCIsInBhcnRpY2xlc19uYiIsInJlbW92ZSIsInJldGluYV9kZXRlY3QiLCJCdWJibGUiLCJwYXJ0aWNsZXNKUyIsInBKU0RvbSIsIkFycmF5IiwibGVuZ3RoIiwiaSIsInBKUyIsImZuIiwidmVuZG9ycyIsImRlc3Ryb3lwSlMiLCJlcnIiLCJjbGFzc05hbWUiLCJwcm9wcyIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwiT2JqZWN0Iiwia2V5cyIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDO0FB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SyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUkxRCxPQUFPdUQsTUFBUCxDQUFjRSxNQUFsQyxFQUEwQ0MsR0FBMUMsRUFBK0M7QUFDN0MxRCxtQkFBT3VELE1BQVAsQ0FBY0csQ0FBZCxFQUFpQkMsR0FBakIsQ0FBcUJDLEVBQXJCLENBQXdCQyxPQUF4QixDQUFnQ0MsVUFBaEM7QUFDRDtBQUNGLFNBSkQsQ0FJRSxPQUFPQyxHQUFQLEVBQVksQ0FBRTtBQUNqQjtBQUNEL0QsYUFBT3VELE1BQVAsR0FBZ0IsRUFBaEI7QUFDRDs7OzZCQUNRO0FBQUEsVUFDQ1MsU0FERCxHQUNlLEtBQUtDLEtBRHBCLENBQ0NELFNBREQ7O0FBRVAsVUFBSSxPQUFPaEUsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQyxlQUFPLDZCQUFLLFdBQVdnRSxTQUFoQixFQUEyQixJQUFHLE1BQTlCLEdBQVA7QUFDRDtBQUNELGFBQU8sSUFBUDtBQUNEOzs7O0VBOUJrQm5FLFM7O0FBaUNyQixlQUFlQyxnQkFDYjtBQUFBLFNBQU87QUFDTG9FLGNBQVUsVUFETDtBQUVMQyxVQUFNLENBRkQ7QUFHTEMsU0FBSyxDQUhBO0FBSUxDLFdBQU8sQ0FKRjtBQUtMQyxZQUFRO0FBTEgsR0FBUDtBQUFBLENBRGEsRUFRYmpCLE1BUmEsRUFTYjtBQUFBLFNBQUtrQixPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBVGEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL3BhcnRpY2xlcy9idWJibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgUG9ydGFsIGZyb20gJy4uL3BvcnRhbCc7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByZXF1aXJlKCdwYXJ0aWNsZXMuanMnKTtcbn1cblxuY29uc3QgcGFyYW1zID0ge1xuICBwYXJ0aWNsZXM6IHtcbiAgICBudW1iZXI6IHtcbiAgICAgIHZhbHVlOiA2LFxuICAgICAgZGVuc2l0eToge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlX2FyZWE6IDgwMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb2xvcjoge1xuICAgICAgdmFsdWU6ICcjMWIxZTM0JyxcbiAgICB9LFxuICAgIHNoYXBlOiB7XG4gICAgICB0eXBlOiAncG9seWdvbicsXG4gICAgICBzdHJva2U6IHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgICB9LFxuICAgICAgcG9seWdvbjoge1xuICAgICAgICBuYl9zaWRlczogNixcbiAgICAgIH0sXG4gICAgICBpbWFnZToge1xuICAgICAgICBzcmM6ICdpbWcvZ2l0aHViLnN2ZycsXG4gICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgIGhlaWdodDogMTAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG9wYWNpdHk6IHtcbiAgICAgIHZhbHVlOiAwLjMsXG4gICAgICByYW5kb206IHRydWUsXG4gICAgICBhbmltOiB7XG4gICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgIHNwZWVkOiAxLFxuICAgICAgICBvcGFjaXR5X21pbjogMC4xLFxuICAgICAgICBzeW5jOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogMTYwLFxuICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgIGFuaW06IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBzcGVlZDogMTAsXG4gICAgICAgIHNpemVfbWluOiA0MCxcbiAgICAgICAgc3luYzogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbGluZV9saW5rZWQ6IHtcbiAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB3aWR0aDogMixcbiAgICB9LFxuICAgIG1vdmU6IHtcbiAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA4LFxuICAgICAgZGlyZWN0aW9uOiAnbm9uZScsXG4gICAgICByYW5kb206IGZhbHNlLFxuICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxuICAgICAgb3V0X21vZGU6ICdvdXQnLFxuICAgICAgYm91bmNlOiBmYWxzZSxcbiAgICAgIGF0dHJhY3Q6IHtcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgcm90YXRlWDogNjAwLFxuICAgICAgICByb3RhdGVZOiAxMjAwLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBpbnRlcmFjdGl2aXR5OiB7XG4gICAgZGV0ZWN0X29uOiAnY2FudmFzJyxcbiAgICBldmVudHM6IHtcbiAgICAgIG9uaG92ZXI6IHtcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgbW9kZTogJ2dyYWInLFxuICAgICAgfSxcbiAgICAgIG9uY2xpY2s6IHtcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgbW9kZTogJ3B1c2gnLFxuICAgICAgfSxcbiAgICAgIHJlc2l6ZTogdHJ1ZSxcbiAgICB9LFxuICAgIG1vZGVzOiB7XG4gICAgICBncmFiOiB7XG4gICAgICAgIGRpc3RhbmNlOiA0MDAsXG4gICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBidWJibGU6IHtcbiAgICAgICAgZGlzdGFuY2U6IDQwMCxcbiAgICAgICAgc2l6ZTogNDAsXG4gICAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgICBvcGFjaXR5OiA4LFxuICAgICAgICBzcGVlZDogMyxcbiAgICAgIH0sXG4gICAgICByZXB1bHNlOiB7XG4gICAgICAgIGRpc3RhbmNlOiAyMDAsXG4gICAgICAgIGR1cmF0aW9uOiAwLjQsXG4gICAgICB9LFxuICAgICAgcHVzaDoge1xuICAgICAgICBwYXJ0aWNsZXNfbmI6IDQsXG4gICAgICB9LFxuICAgICAgcmVtb3ZlOiB7XG4gICAgICAgIHBhcnRpY2xlc19uYjogMixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcmV0aW5hX2RldGVjdDogdHJ1ZSxcbn07XG5cbmNsYXNzIEJ1YmJsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgd2luZG93LnBhcnRpY2xlc0pTKCdzbm93JywgcGFyYW1zKTtcbiAgICB9XG4gIH1cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgd2luZG93LnBKU0RvbSAmJlxuICAgICAgd2luZG93LnBKU0RvbSBpbnN0YW5jZW9mIEFycmF5ICYmXG4gICAgICB3aW5kb3cucEpTRG9tLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2luZG93LnBKU0RvbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHdpbmRvdy5wSlNEb21baV0ucEpTLmZuLnZlbmRvcnMuZGVzdHJveXBKUygpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgfVxuICAgIHdpbmRvdy5wSlNEb20gPSBbXTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9XCJzbm93XCIgLz47XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudChcbiAgKCkgPT4gKHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAwLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gIH0pLFxuICBCdWJibGUsXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuIl19
