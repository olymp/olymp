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
        return React.createElement(
          Portal,
          null,
          React.createElement('div', { className: className, id: 'snow' })
        );
      }
      return null;
    }
  }]);

  return Snow;
}(Component);

export default createComponent(function (_ref) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvcGFydGljbGVzL3Nub3cuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlQ29tcG9uZW50IiwiUG9ydGFsIiwid2luZG93IiwicmVxdWlyZSIsInBhcmFtcyIsInBhcnRpY2xlcyIsIm51bWJlciIsInZhbHVlIiwiZGVuc2l0eSIsImVuYWJsZSIsInZhbHVlX2FyZWEiLCJjb2xvciIsInNoYXBlIiwidHlwZSIsInN0cm9rZSIsIndpZHRoIiwicG9seWdvbiIsIm5iX3NpZGVzIiwiaW1hZ2UiLCJzcmMiLCJoZWlnaHQiLCJvcGFjaXR5IiwicmFuZG9tIiwiYW5pbSIsInNwZWVkIiwib3BhY2l0eV9taW4iLCJzeW5jIiwic2l6ZSIsInNpemVfbWluIiwibGluZV9saW5rZWQiLCJkaXN0YW5jZSIsIm1vdmUiLCJkaXJlY3Rpb24iLCJzdHJhaWdodCIsIm91dF9tb2RlIiwiYm91bmNlIiwiYXR0cmFjdCIsInJvdGF0ZVgiLCJyb3RhdGVZIiwiaW50ZXJhY3Rpdml0eSIsImRldGVjdF9vbiIsImV2ZW50cyIsIm9uaG92ZXIiLCJtb2RlIiwib25jbGljayIsInJlc2l6ZSIsIm1vZGVzIiwiZ3JhYiIsImJ1YmJsZSIsImR1cmF0aW9uIiwicmVwdWxzZSIsInB1c2giLCJwYXJ0aWNsZXNfbmIiLCJyZW1vdmUiLCJyZXRpbmFfZGV0ZWN0IiwiU25vdyIsInBhcnRpY2xlc0pTIiwicEpTRG9tIiwiQXJyYXkiLCJsZW5ndGgiLCJpIiwicEpTIiwiZm4iLCJ2ZW5kb3JzIiwiZGVzdHJveXBKUyIsImVyciIsImNsYXNzTmFtZSIsInByb3BzIiwicG9pbnRlckV2ZW50cyIsInVuZGVmaW5lZCIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwiekluZGV4IiwiT2JqZWN0Iiwia2V5cyIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFlBQWhDO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjs7QUFFQSxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakNDLFVBQVEsY0FBUjtBQUNEOztBQUVELElBQU1DLFNBQVM7QUFDYkMsYUFBVztBQUNUQyxZQUFRO0FBQ05DLGFBQU8sR0FERDtBQUVOQyxlQUFTO0FBQ1BDLGdCQUFRLElBREQ7QUFFUEMsb0JBQVk7QUFGTDtBQUZILEtBREM7QUFRVEMsV0FBTztBQUNMSixhQUFPO0FBREYsS0FSRTtBQVdUSyxXQUFPO0FBQ0xDLFlBQU0sUUFERDtBQUVMQyxjQUFRO0FBQ05DLGVBQU8sQ0FERDtBQUVOSixlQUFPO0FBRkQsT0FGSDtBQU1MSyxlQUFTO0FBQ1BDLGtCQUFVO0FBREgsT0FOSjtBQVNMQyxhQUFPO0FBQ0xDLGFBQUssZ0JBREE7QUFFTEosZUFBTyxHQUZGO0FBR0xLLGdCQUFRO0FBSEg7QUFURixLQVhFO0FBMEJUQyxhQUFTO0FBQ1BkLGFBQU8sR0FEQTtBQUVQZSxjQUFRLElBRkQ7QUFHUEMsWUFBTTtBQUNKZCxnQkFBUSxLQURKO0FBRUplLGVBQU8sQ0FGSDtBQUdKQyxxQkFBYSxHQUhUO0FBSUpDLGNBQU07QUFKRjtBQUhDLEtBMUJBO0FBb0NUQyxVQUFNO0FBQ0pwQixhQUFPLEVBREg7QUFFSmUsY0FBUSxJQUZKO0FBR0pDLFlBQU07QUFDSmQsZ0JBQVEsS0FESjtBQUVKZSxlQUFPLEVBRkg7QUFHSkksa0JBQVUsR0FITjtBQUlKRixjQUFNO0FBSkY7QUFIRixLQXBDRztBQThDVEcsaUJBQWE7QUFDWHBCLGNBQVEsS0FERztBQUVYcUIsZ0JBQVUsR0FGQztBQUdYbkIsYUFBTyxTQUhJO0FBSVhVLGVBQVMsR0FKRTtBQUtYTixhQUFPO0FBTEksS0E5Q0o7QUFxRFRnQixVQUFNO0FBQ0p0QixjQUFRLElBREo7QUFFSmUsYUFBTyxDQUZIO0FBR0pRLGlCQUFXLFFBSFA7QUFJSlYsY0FBUSxLQUpKO0FBS0pXLGdCQUFVLEtBTE47QUFNSkMsZ0JBQVUsS0FOTjtBQU9KQyxjQUFRLEtBUEo7QUFRSkMsZUFBUztBQUNQM0IsZ0JBQVEsS0FERDtBQUVQNEIsaUJBQVMsR0FGRjtBQUdQQyxpQkFBUztBQUhGO0FBUkw7QUFyREcsR0FERTtBQXFFYkMsaUJBQWU7QUFDYkMsZUFBVyxRQURFO0FBRWJDLFlBQVE7QUFDTkMsZUFBUztBQUNQakMsZ0JBQVEsSUFERDtBQUVQa0MsY0FBTTtBQUZDLE9BREg7QUFLTkMsZUFBUztBQUNQbkMsZ0JBQVEsSUFERDtBQUVQa0MsY0FBTTtBQUZDLE9BTEg7QUFTTkUsY0FBUTtBQVRGLEtBRks7QUFhYkMsV0FBTztBQUNMQyxZQUFNO0FBQ0pqQixrQkFBVSxHQUROO0FBRUpELHFCQUFhO0FBQ1hSLG1CQUFTO0FBREU7QUFGVCxPQUREO0FBT0wyQixjQUFRO0FBQ05sQixrQkFBVSxHQURKO0FBRU5ILGNBQU0sQ0FGQTtBQUdOc0Isa0JBQVUsR0FISjtBQUlONUIsaUJBQVMsQ0FKSDtBQUtORyxlQUFPO0FBTEQsT0FQSDtBQWNMMEIsZUFBUztBQUNQcEIsa0JBQVUsR0FESDtBQUVQbUIsa0JBQVU7QUFGSCxPQWRKO0FBa0JMRSxZQUFNO0FBQ0pDLHNCQUFjO0FBRFYsT0FsQkQ7QUFxQkxDLGNBQVE7QUFDTkQsc0JBQWM7QUFEUjtBQXJCSDtBQWJNLEdBckVGO0FBNEdiRSxpQkFBZTtBQTVHRixDQUFmOztJQStHTUMsSTs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQ2xCLFVBQUksT0FBT3JELE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakNBLGVBQU9zRCxXQUFQLENBQW1CLE1BQW5CLEVBQTJCcEQsTUFBM0I7QUFDRDtBQUNGOzs7NENBQ3VCO0FBQ3RCLGFBQU8sS0FBUDtBQUNEOzs7MkNBQ3NCO0FBQ3JCLFVBQ0UsT0FBT0YsTUFBUCxLQUFrQixXQUFsQixJQUNBQSxPQUFPdUQsTUFEUCxJQUVBdkQsT0FBT3VELE1BQVAsWUFBeUJDLEtBRnpCLElBR0F4RCxPQUFPdUQsTUFBUCxDQUFjRSxNQUFkLEdBQXVCLENBSnpCLEVBS0U7QUFDQSxZQUFJO0FBQ0YsZUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUkxRCxPQUFPdUQsTUFBUCxDQUFjRSxNQUFsQyxFQUEwQ0MsR0FBMUMsRUFBK0M7QUFDN0MxRCxtQkFBT3VELE1BQVAsQ0FBY0csQ0FBZCxFQUFpQkMsR0FBakIsQ0FBcUJDLEVBQXJCLENBQXdCQyxPQUF4QixDQUFnQ0MsVUFBaEM7QUFDRDtBQUNGLFNBSkQsQ0FJRSxPQUFPQyxHQUFQLEVBQVksQ0FBRTtBQUNqQjtBQUNEL0QsYUFBT3VELE1BQVAsR0FBZ0IsRUFBaEI7QUFDRDs7OzZCQUNRO0FBQUEsVUFDQ1MsU0FERCxHQUNlLEtBQUtDLEtBRHBCLENBQ0NELFNBREQ7O0FBRVAsVUFBSSxPQUFPaEUsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQyxlQUNFO0FBQUMsZ0JBQUQ7QUFBQTtBQUNFLHVDQUFLLFdBQVdnRSxTQUFoQixFQUEyQixJQUFHLE1BQTlCO0FBREYsU0FERjtBQUtEO0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUFsQ2dCbkUsUzs7QUFxQ25CLGVBQWVDLGdCQUNiO0FBQUEsZ0NBQUdvRSxhQUFIO0FBQUEsTUFBR0EsYUFBSCxzQ0FBbUIsTUFBbkI7QUFBQSxTQUFpQztBQUMvQkEsbUJBQWVBLGtCQUFrQixJQUFsQixHQUF5QkMsU0FBekIsR0FBcUNELGFBRHJCO0FBRS9CRSxjQUFVLE9BRnFCO0FBRy9CQyxVQUFNLENBSHlCO0FBSS9CQyxTQUFLLENBSjBCO0FBSy9CQyxXQUFPLENBTHdCO0FBTS9CQyxZQUFRLENBTnVCO0FBTy9CQyxZQUFRO0FBUHVCLEdBQWpDO0FBQUEsQ0FEYSxFQVVicEIsSUFWYSxFQVdiO0FBQUEsU0FBS3FCLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsQ0FYYSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvcGFydGljbGVzL3Nub3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgUG9ydGFsIGZyb20gJy4uL3BvcnRhbCc7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByZXF1aXJlKCdwYXJ0aWNsZXMuanMnKTtcbn1cblxuY29uc3QgcGFyYW1zID0ge1xuICBwYXJ0aWNsZXM6IHtcbiAgICBudW1iZXI6IHtcbiAgICAgIHZhbHVlOiA0MDAsXG4gICAgICBkZW5zaXR5OiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWVfYXJlYTogODAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICB2YWx1ZTogJyNmZmYnLFxuICAgIH0sXG4gICAgc2hhcGU6IHtcbiAgICAgIHR5cGU6ICdjaXJjbGUnLFxuICAgICAgc3Ryb2tlOiB7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBjb2xvcjogJyMwMDAwMDAnLFxuICAgICAgfSxcbiAgICAgIHBvbHlnb246IHtcbiAgICAgICAgbmJfc2lkZXM6IDUsXG4gICAgICB9LFxuICAgICAgaW1hZ2U6IHtcbiAgICAgICAgc3JjOiAnaW1nL2dpdGh1Yi5zdmcnLFxuICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvcGFjaXR5OiB7XG4gICAgICB2YWx1ZTogMC41LFxuICAgICAgcmFuZG9tOiB0cnVlLFxuICAgICAgYW5pbToge1xuICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICBzcGVlZDogMSxcbiAgICAgICAgb3BhY2l0eV9taW46IDAuMSxcbiAgICAgICAgc3luYzogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2l6ZToge1xuICAgICAgdmFsdWU6IDEwLFxuICAgICAgcmFuZG9tOiB0cnVlLFxuICAgICAgYW5pbToge1xuICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICBzcGVlZDogNDAsXG4gICAgICAgIHNpemVfbWluOiAwLjEsXG4gICAgICAgIHN5bmM6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgZGlzdGFuY2U6IDUwMCxcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBvcGFjaXR5OiAwLjQsXG4gICAgICB3aWR0aDogMixcbiAgICB9LFxuICAgIG1vdmU6IHtcbiAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA2LFxuICAgICAgZGlyZWN0aW9uOiAnYm90dG9tJyxcbiAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICBzdHJhaWdodDogZmFsc2UsXG4gICAgICBvdXRfbW9kZTogJ291dCcsXG4gICAgICBib3VuY2U6IGZhbHNlLFxuICAgICAgYXR0cmFjdDoge1xuICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICByb3RhdGVYOiA2MDAsXG4gICAgICAgIHJvdGF0ZVk6IDEyMDAsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGludGVyYWN0aXZpdHk6IHtcbiAgICBkZXRlY3Rfb246ICdjYW52YXMnLFxuICAgIGV2ZW50czoge1xuICAgICAgb25ob3Zlcjoge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIG1vZGU6ICdidWJibGUnLFxuICAgICAgfSxcbiAgICAgIG9uY2xpY2s6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBtb2RlOiAncmVwdWxzZScsXG4gICAgICB9LFxuICAgICAgcmVzaXplOiB0cnVlLFxuICAgIH0sXG4gICAgbW9kZXM6IHtcbiAgICAgIGdyYWI6IHtcbiAgICAgICAgZGlzdGFuY2U6IDQwMCxcbiAgICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYnViYmxlOiB7XG4gICAgICAgIGRpc3RhbmNlOiA0MDAsXG4gICAgICAgIHNpemU6IDQsXG4gICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHNwZWVkOiAzLFxuICAgICAgfSxcbiAgICAgIHJlcHVsc2U6IHtcbiAgICAgICAgZGlzdGFuY2U6IDIwMCxcbiAgICAgICAgZHVyYXRpb246IDAuNCxcbiAgICAgIH0sXG4gICAgICBwdXNoOiB7XG4gICAgICAgIHBhcnRpY2xlc19uYjogNCxcbiAgICAgIH0sXG4gICAgICByZW1vdmU6IHtcbiAgICAgICAgcGFydGljbGVzX25iOiAyLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByZXRpbmFfZGV0ZWN0OiB0cnVlLFxufTtcblxuY2xhc3MgU25vdyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgd2luZG93LnBhcnRpY2xlc0pTKCdzbm93JywgcGFyYW1zKTtcbiAgICB9XG4gIH1cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgd2luZG93LnBKU0RvbSAmJlxuICAgICAgd2luZG93LnBKU0RvbSBpbnN0YW5jZW9mIEFycmF5ICYmXG4gICAgICB3aW5kb3cucEpTRG9tLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2luZG93LnBKU0RvbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHdpbmRvdy5wSlNEb21baV0ucEpTLmZuLnZlbmRvcnMuZGVzdHJveXBKUygpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHt9XG4gICAgfVxuICAgIHdpbmRvdy5wSlNEb20gPSBbXTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UG9ydGFsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPVwic25vd1wiIC8+XG4gICAgICAgIDwvUG9ydGFsPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KFxuICAoeyBwb2ludGVyRXZlbnRzID0gJ25vbmUnIH0pID0+ICh7XG4gICAgcG9pbnRlckV2ZW50czogcG9pbnRlckV2ZW50cyA9PT0gdHJ1ZSA/IHVuZGVmaW5lZCA6IHBvaW50ZXJFdmVudHMsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgbGVmdDogMCxcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHpJbmRleDogMTAwMDAsXG4gIH0pLFxuICBTbm93LFxuICBwID0+IE9iamVjdC5rZXlzKHApLFxuKTtcbiJdfQ==
