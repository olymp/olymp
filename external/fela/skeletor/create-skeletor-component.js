'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var animation = {
  userSelect: 'none',
  animationName: {
    '0%': {
      opacity: 0.67
    },
    '50%': {
      opacity: 0.33
    },
    '100%': {
      opacity: 0.67
    }
  },
  animationDuration: '1.5s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  '& *': {
    animationName: 'none' // prevent nested animations
  }
};

var fill = function fill(color) {
  return {
    color: color + ' !important',
    backgroundColor: color + ' !important',
    background: color + ' !important'
  };
};

var createSkeletorComponent = function createSkeletorComponent(styles, component, propKeys) {
  var SkeletorComponent = function (_Component) {
    _inherits(SkeletorComponent, _Component);

    function SkeletorComponent() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SkeletorComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SkeletorComponent.__proto__ || Object.getPrototypeOf(SkeletorComponent)).call.apply(_ref, [this].concat(args))), _this), _this.color = _this.context.skeletorColor || _this.context.theme.dark, _this.background = _extends({}, fill(_this.color), animation), _this.overlay = {
        position: 'relative',
        onBefore: _extends({
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }, fill(_this.color), animation)
      }, _this.text = _extends({
        '& h1': _extends({}, fill(_this.color)),
        '& h2': _extends({}, fill(_this.color)),
        '& h3': _extends({}, fill(_this.color)),
        '& h4': _extends({}, fill(_this.color)),
        '& h5': _extends({}, fill(_this.color)),
        '& h6': _extends({}, fill(_this.color)),
        '& p': _extends({}, fill(_this.color)),
        '& span': _extends({}, fill(_this.color)),
        '& a': _extends({}, fill(_this.color))
      }, animation), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SkeletorComponent, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _context = this.context,
            skeletorLoading = _context.skeletorLoading,
            theme = _context.theme,
            renderer = _context.renderer;


        return (0, _reactFela.createComponent)(function (p) {
          return styles(_extends({}, p, {
            skeletor: skeletorLoading ? {
              background: _this2.background,
              overlay: _this2.overlay,
              text: _this2.text,
              isLoading: true
            } : {
              background: function background() {
                return {};
              },
              overlay: function overlay() {
                return {};
              },
              text: function text() {
                return {};
              },
              isLoading: false
            }
          }));
        }, component, propKeys)(this.props, { theme: theme, renderer: renderer });
      }
    }]);

    return SkeletorComponent;
  }(_react.Component);

  SkeletorComponent.contextTypes = {
    renderer: _propTypes2.default.object,
    theme: _propTypes2.default.object,
    skeletorLoading: _propTypes2.default.bool
  };

  return SkeletorComponent;
};
exports.default = createSkeletorComponent;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvc2tlbGV0b3IvY3JlYXRlLXNrZWxldG9yLWNvbXBvbmVudC5lczYiXSwibmFtZXMiOlsiYW5pbWF0aW9uIiwidXNlclNlbGVjdCIsImFuaW1hdGlvbk5hbWUiLCJvcGFjaXR5IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uIiwiZmlsbCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZCIsImNyZWF0ZVNrZWxldG9yQ29tcG9uZW50Iiwic3R5bGVzIiwiY29tcG9uZW50IiwicHJvcEtleXMiLCJTa2VsZXRvckNvbXBvbmVudCIsImNvbnRleHQiLCJza2VsZXRvckNvbG9yIiwidGhlbWUiLCJkYXJrIiwib3ZlcmxheSIsInBvc2l0aW9uIiwib25CZWZvcmUiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ0ZXh0Iiwic2tlbGV0b3JMb2FkaW5nIiwicmVuZGVyZXIiLCJwIiwic2tlbGV0b3IiLCJpc0xvYWRpbmciLCJwcm9wcyIsImNvbnRleHRUeXBlcyIsIm9iamVjdCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNoQkMsY0FBWSxNQURJO0FBRWhCQyxpQkFBZTtBQUNiLFVBQU07QUFDSkMsZUFBUztBQURMLEtBRE87QUFJYixXQUFPO0FBQ0xBLGVBQVM7QUFESixLQUpNO0FBT2IsWUFBUTtBQUNOQSxlQUFTO0FBREg7QUFQSyxHQUZDO0FBYWhCQyxxQkFBbUIsTUFiSDtBQWNoQkMsMkJBQXlCLFVBZFQ7QUFlaEJDLDJCQUF5QixRQWZUO0FBZ0JoQixTQUFPO0FBQ0xKLG1CQUFlLE1BRFYsQ0FDa0I7QUFEbEI7QUFoQlMsQ0FBbEI7O0FBcUJBLElBQU1LLE9BQU8sU0FBUEEsSUFBTztBQUFBLFNBQVU7QUFDckJDLFdBQVVBLEtBQVYsZ0JBRHFCO0FBRXJCQyxxQkFBb0JELEtBQXBCLGdCQUZxQjtBQUdyQkUsZ0JBQWVGLEtBQWY7QUFIcUIsR0FBVjtBQUFBLENBQWI7O0FBTUEsSUFBTUcsMEJBQTBCLFNBQTFCQSx1QkFBMEIsQ0FBQ0MsTUFBRCxFQUFTQyxTQUFULEVBQW9CQyxRQUFwQixFQUFpQztBQUFBLE1BQ3pEQyxpQkFEeUQ7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQSw4TUFFN0RQLEtBRjZELEdBRXJELE1BQUtRLE9BQUwsQ0FBYUMsYUFBYixJQUE4QixNQUFLRCxPQUFMLENBQWFFLEtBQWIsQ0FBbUJDLElBRkksUUFJN0RULFVBSjZELGdCQUt4REgsS0FBSyxNQUFLQyxLQUFWLENBTHdELEVBTXhEUixTQU53RCxTQVM3RG9CLE9BVDZELEdBU25EO0FBQ1JDLGtCQUFVLFVBREY7QUFFUkM7QUFDRUQsb0JBQVUsVUFEWjtBQUVFRSxlQUFLLENBRlA7QUFHRUMsaUJBQU8sQ0FIVDtBQUlFQyxrQkFBUSxDQUpWO0FBS0VDLGdCQUFNO0FBTFIsV0FNS25CLEtBQUssTUFBS0MsS0FBVixDQU5MLEVBT0tSLFNBUEw7QUFGUSxPQVRtRCxRQXNCN0QyQixJQXRCNkQ7QUF1QjNELDZCQUNLcEIsS0FBSyxNQUFLQyxLQUFWLENBREwsQ0F2QjJEO0FBMEIzRCw2QkFDS0QsS0FBSyxNQUFLQyxLQUFWLENBREwsQ0ExQjJEO0FBNkIzRCw2QkFDS0QsS0FBSyxNQUFLQyxLQUFWLENBREwsQ0E3QjJEO0FBZ0MzRCw2QkFDS0QsS0FBSyxNQUFLQyxLQUFWLENBREwsQ0FoQzJEO0FBbUMzRCw2QkFDS0QsS0FBSyxNQUFLQyxLQUFWLENBREwsQ0FuQzJEO0FBc0MzRCw2QkFDS0QsS0FBSyxNQUFLQyxLQUFWLENBREwsQ0F0QzJEO0FBeUMzRCw0QkFDS0QsS0FBSyxNQUFLQyxLQUFWLENBREwsQ0F6QzJEO0FBNEMzRCwrQkFDS0QsS0FBSyxNQUFLQyxLQUFWLENBREwsQ0E1QzJEO0FBK0MzRCw0QkFDS0QsS0FBSyxNQUFLQyxLQUFWLENBREw7QUEvQzJELFNBa0R4RFIsU0FsRHdEO0FBQUE7O0FBQUE7QUFBQTtBQUFBLCtCQXFEcEQ7QUFBQTs7QUFBQSx1QkFDc0MsS0FBS2dCLE9BRDNDO0FBQUEsWUFDQ1ksZUFERCxZQUNDQSxlQUREO0FBQUEsWUFDa0JWLEtBRGxCLFlBQ2tCQSxLQURsQjtBQUFBLFlBQ3lCVyxRQUR6QixZQUN5QkEsUUFEekI7OztBQUdQLGVBQU8sZ0NBQ0w7QUFBQSxpQkFDRWpCLG9CQUNLa0IsQ0FETDtBQUVFQyxzQkFBVUgsa0JBQ047QUFDRWxCLDBCQUFZLE9BQUtBLFVBRG5CO0FBRUVVLHVCQUFTLE9BQUtBLE9BRmhCO0FBR0VPLG9CQUFNLE9BQUtBLElBSGI7QUFJRUsseUJBQVc7QUFKYixhQURNLEdBT047QUFDRXRCLDBCQUFZO0FBQUEsdUJBQU8sRUFBUDtBQUFBLGVBRGQ7QUFFRVUsdUJBQVM7QUFBQSx1QkFBTyxFQUFQO0FBQUEsZUFGWDtBQUdFTyxvQkFBTTtBQUFBLHVCQUFPLEVBQVA7QUFBQSxlQUhSO0FBSUVLLHlCQUFXO0FBSmI7QUFUTixhQURGO0FBQUEsU0FESyxFQWtCTG5CLFNBbEJLLEVBbUJMQyxRQW5CSyxFQW9CTCxLQUFLbUIsS0FwQkEsRUFvQk8sRUFBRWYsWUFBRixFQUFTVyxrQkFBVCxFQXBCUCxDQUFQO0FBcUJEO0FBN0U0RDs7QUFBQTtBQUFBOztBQStFL0RkLG9CQUFrQm1CLFlBQWxCLEdBQWlDO0FBQy9CTCxjQUFVLG9CQUFVTSxNQURXO0FBRS9CakIsV0FBTyxvQkFBVWlCLE1BRmM7QUFHL0JQLHFCQUFpQixvQkFBVVE7QUFISSxHQUFqQzs7QUFNQSxTQUFPckIsaUJBQVA7QUFDRCxDQXRGRDtrQkF1RmVKLHVCIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvc2tlbGV0b3IvY3JlYXRlLXNrZWxldG9yLWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcblxuY29uc3QgYW5pbWF0aW9uID0ge1xuICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIGFuaW1hdGlvbk5hbWU6IHtcbiAgICAnMCUnOiB7XG4gICAgICBvcGFjaXR5OiAwLjY3LFxuICAgIH0sXG4gICAgJzUwJSc6IHtcbiAgICAgIG9wYWNpdHk6IDAuMzMsXG4gICAgfSxcbiAgICAnMTAwJSc6IHtcbiAgICAgIG9wYWNpdHk6IDAuNjcsXG4gICAgfSxcbiAgfSxcbiAgYW5pbWF0aW9uRHVyYXRpb246ICcxLjVzJyxcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICdpbmZpbml0ZScsXG4gIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcbiAgJyYgKic6IHtcbiAgICBhbmltYXRpb25OYW1lOiAnbm9uZScsIC8vIHByZXZlbnQgbmVzdGVkIGFuaW1hdGlvbnNcbiAgfSxcbn07XG5cbmNvbnN0IGZpbGwgPSBjb2xvciA9PiAoe1xuICBjb2xvcjogYCR7Y29sb3J9ICFpbXBvcnRhbnRgLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGAke2NvbG9yfSAhaW1wb3J0YW50YCxcbiAgYmFja2dyb3VuZDogYCR7Y29sb3J9ICFpbXBvcnRhbnRgLFxufSk7XG5cbmNvbnN0IGNyZWF0ZVNrZWxldG9yQ29tcG9uZW50ID0gKHN0eWxlcywgY29tcG9uZW50LCBwcm9wS2V5cykgPT4ge1xuICBjbGFzcyBTa2VsZXRvckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29sb3IgPSB0aGlzLmNvbnRleHQuc2tlbGV0b3JDb2xvciB8fCB0aGlzLmNvbnRleHQudGhlbWUuZGFyaztcblxuICAgIGJhY2tncm91bmQgPSB7XG4gICAgICAuLi5maWxsKHRoaXMuY29sb3IpLFxuICAgICAgLi4uYW5pbWF0aW9uLFxuICAgIH07XG5cbiAgICBvdmVybGF5ID0ge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBvbkJlZm9yZToge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAuLi5maWxsKHRoaXMuY29sb3IpLFxuICAgICAgICAuLi5hbmltYXRpb24sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0ZXh0ID0ge1xuICAgICAgJyYgaDEnOiB7XG4gICAgICAgIC4uLmZpbGwodGhpcy5jb2xvciksXG4gICAgICB9LFxuICAgICAgJyYgaDInOiB7XG4gICAgICAgIC4uLmZpbGwodGhpcy5jb2xvciksXG4gICAgICB9LFxuICAgICAgJyYgaDMnOiB7XG4gICAgICAgIC4uLmZpbGwodGhpcy5jb2xvciksXG4gICAgICB9LFxuICAgICAgJyYgaDQnOiB7XG4gICAgICAgIC4uLmZpbGwodGhpcy5jb2xvciksXG4gICAgICB9LFxuICAgICAgJyYgaDUnOiB7XG4gICAgICAgIC4uLmZpbGwodGhpcy5jb2xvciksXG4gICAgICB9LFxuICAgICAgJyYgaDYnOiB7XG4gICAgICAgIC4uLmZpbGwodGhpcy5jb2xvciksXG4gICAgICB9LFxuICAgICAgJyYgcCc6IHtcbiAgICAgICAgLi4uZmlsbCh0aGlzLmNvbG9yKSxcbiAgICAgIH0sXG4gICAgICAnJiBzcGFuJzoge1xuICAgICAgICAuLi5maWxsKHRoaXMuY29sb3IpLFxuICAgICAgfSxcbiAgICAgICcmIGEnOiB7XG4gICAgICAgIC4uLmZpbGwodGhpcy5jb2xvciksXG4gICAgICB9LFxuICAgICAgLi4uYW5pbWF0aW9uLFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IHNrZWxldG9yTG9hZGluZywgdGhlbWUsIHJlbmRlcmVyIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgIHJldHVybiBjcmVhdGVDb21wb25lbnQoXG4gICAgICAgIHAgPT5cbiAgICAgICAgICBzdHlsZXMoe1xuICAgICAgICAgICAgLi4ucCxcbiAgICAgICAgICAgIHNrZWxldG9yOiBza2VsZXRvckxvYWRpbmdcbiAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLmJhY2tncm91bmQsXG4gICAgICAgICAgICAgICAgICBvdmVybGF5OiB0aGlzLm92ZXJsYXksXG4gICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICgpID0+ICh7fSksXG4gICAgICAgICAgICAgICAgICBvdmVybGF5OiAoKSA9PiAoe30pLFxuICAgICAgICAgICAgICAgICAgdGV4dDogKCkgPT4gKHt9KSxcbiAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgY29tcG9uZW50LFxuICAgICAgICBwcm9wS2V5c1xuICAgICAgKSh0aGlzLnByb3BzLCB7IHRoZW1lLCByZW5kZXJlciB9KTtcbiAgICB9XG4gIH1cbiAgU2tlbGV0b3JDb21wb25lbnQuY29udGV4dFR5cGVzID0ge1xuICAgIHJlbmRlcmVyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNrZWxldG9yTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgcmV0dXJuIFNrZWxldG9yQ29tcG9uZW50O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNrZWxldG9yQ29tcG9uZW50O1xuIl19
