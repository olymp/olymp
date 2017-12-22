var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Component } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

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


        return createComponent(function (p) {
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
  }(Component);

  SkeletorComponent.contextTypes = {
    renderer: PropTypes.object,
    theme: PropTypes.object,
    skeletorLoading: PropTypes.bool
  };

  return SkeletorComponent;
};
export default createSkeletorComponent;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvc2tlbGV0b3IvY3JlYXRlLXNrZWxldG9yLWNvbXBvbmVudC5lczYiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiY3JlYXRlQ29tcG9uZW50IiwiYW5pbWF0aW9uIiwidXNlclNlbGVjdCIsImFuaW1hdGlvbk5hbWUiLCJvcGFjaXR5IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uIiwiZmlsbCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZCIsImNyZWF0ZVNrZWxldG9yQ29tcG9uZW50Iiwic3R5bGVzIiwiY29tcG9uZW50IiwicHJvcEtleXMiLCJTa2VsZXRvckNvbXBvbmVudCIsImNvbnRleHQiLCJza2VsZXRvckNvbG9yIiwidGhlbWUiLCJkYXJrIiwib3ZlcmxheSIsInBvc2l0aW9uIiwib25CZWZvcmUiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ0ZXh0Iiwic2tlbGV0b3JMb2FkaW5nIiwicmVuZGVyZXIiLCJwIiwic2tlbGV0b3IiLCJpc0xvYWRpbmciLCJwcm9wcyIsImNvbnRleHRUeXBlcyIsIm9iamVjdCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxTQUFULFFBQTBCLE9BQTFCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7O0FBRUEsSUFBTUMsWUFBWTtBQUNoQkMsY0FBWSxNQURJO0FBRWhCQyxpQkFBZTtBQUNiLFVBQU07QUFDSkMsZUFBUztBQURMLEtBRE87QUFJYixXQUFPO0FBQ0xBLGVBQVM7QUFESixLQUpNO0FBT2IsWUFBUTtBQUNOQSxlQUFTO0FBREg7QUFQSyxHQUZDO0FBYWhCQyxxQkFBbUIsTUFiSDtBQWNoQkMsMkJBQXlCLFVBZFQ7QUFlaEJDLDJCQUF5QixRQWZUO0FBZ0JoQixT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ImZpbGUiOiJwYWNrYWdlcy9mZWxhL3NrZWxldG9yL2NyZWF0ZS1za2VsZXRvci1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmNvbnN0IGFuaW1hdGlvbiA9IHtcbiAgdXNlclNlbGVjdDogJ25vbmUnLFxuICBhbmltYXRpb25OYW1lOiB7XG4gICAgJzAlJzoge1xuICAgICAgb3BhY2l0eTogMC42NyxcbiAgICB9LFxuICAgICc1MCUnOiB7XG4gICAgICBvcGFjaXR5OiAwLjMzLFxuICAgIH0sXG4gICAgJzEwMCUnOiB7XG4gICAgICBvcGFjaXR5OiAwLjY3LFxuICAgIH0sXG4gIH0sXG4gIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS41cycsXG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAnaW5maW5pdGUnLFxuICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXG4gICcmIConOiB7XG4gICAgYW5pbWF0aW9uTmFtZTogJ25vbmUnLCAvLyBwcmV2ZW50IG5lc3RlZCBhbmltYXRpb25zXG4gIH0sXG59O1xuXG5jb25zdCBmaWxsID0gY29sb3IgPT4gKHtcbiAgY29sb3I6IGAke2NvbG9yfSAhaW1wb3J0YW50YCxcbiAgYmFja2dyb3VuZENvbG9yOiBgJHtjb2xvcn0gIWltcG9ydGFudGAsXG4gIGJhY2tncm91bmQ6IGAke2NvbG9yfSAhaW1wb3J0YW50YCxcbn0pO1xuXG5jb25zdCBjcmVhdGVTa2VsZXRvckNvbXBvbmVudCA9IChzdHlsZXMsIGNvbXBvbmVudCwgcHJvcEtleXMpID0+IHtcbiAgY2xhc3MgU2tlbGV0b3JDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbG9yID0gdGhpcy5jb250ZXh0LnNrZWxldG9yQ29sb3IgfHwgdGhpcy5jb250ZXh0LnRoZW1lLmRhcms7XG5cbiAgICBiYWNrZ3JvdW5kID0ge1xuICAgICAgLi4uZmlsbCh0aGlzLmNvbG9yKSxcbiAgICAgIC4uLmFuaW1hdGlvbixcbiAgICB9O1xuXG4gICAgb3ZlcmxheSA9IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgb25CZWZvcmU6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgLi4uZmlsbCh0aGlzLmNvbG9yKSxcbiAgICAgICAgLi4uYW5pbWF0aW9uLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGV4dCA9IHtcbiAgICAgICcmIGgxJzoge1xuICAgICAgICAuLi5maWxsKHRoaXMuY29sb3IpLFxuICAgICAgfSxcbiAgICAgICcmIGgyJzoge1xuICAgICAgICAuLi5maWxsKHRoaXMuY29sb3IpLFxuICAgICAgfSxcbiAgICAgICcmIGgzJzoge1xuICAgICAgICAuLi5maWxsKHRoaXMuY29sb3IpLFxuICAgICAgfSxcbiAgICAgICcmIGg0Jzoge1xuICAgICAgICAuLi5maWxsKHRoaXMuY29sb3IpLFxuICAgICAgfSxcbiAgICAgICcmIGg1Jzoge1xuICAgICAgICAuLi5maWxsKHRoaXMuY29sb3IpLFxuICAgICAgfSxcbiAgICAgICcmIGg2Jzoge1xuICAgICAgICAuLi5maWxsKHRoaXMuY29sb3IpLFxuICAgICAgfSxcbiAgICAgICcmIHAnOiB7XG4gICAgICAgIC4uLmZpbGwodGhpcy5jb2xvciksXG4gICAgICB9LFxuICAgICAgJyYgc3Bhbic6IHtcbiAgICAgICAgLi4uZmlsbCh0aGlzLmNvbG9yKSxcbiAgICAgIH0sXG4gICAgICAnJiBhJzoge1xuICAgICAgICAuLi5maWxsKHRoaXMuY29sb3IpLFxuICAgICAgfSxcbiAgICAgIC4uLmFuaW1hdGlvbixcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBza2VsZXRvckxvYWRpbmcsIHRoZW1lLCByZW5kZXJlciB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICByZXR1cm4gY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICBwID0+XG4gICAgICAgICAgc3R5bGVzKHtcbiAgICAgICAgICAgIC4uLnAsXG4gICAgICAgICAgICBza2VsZXRvcjogc2tlbGV0b3JMb2FkaW5nXG4gICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhpcy5iYWNrZ3JvdW5kLFxuICAgICAgICAgICAgICAgICAgb3ZlcmxheTogdGhpcy5vdmVybGF5LFxuICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAoKSA9PiAoe30pLFxuICAgICAgICAgICAgICAgICAgb3ZlcmxheTogKCkgPT4gKHt9KSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICgpID0+ICh7fSksXG4gICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIGNvbXBvbmVudCxcbiAgICAgICAgcHJvcEtleXNcbiAgICAgICkodGhpcy5wcm9wcywgeyB0aGVtZSwgcmVuZGVyZXIgfSk7XG4gICAgfVxuICB9XG4gIFNrZWxldG9yQ29tcG9uZW50LmNvbnRleHRUeXBlcyA9IHtcbiAgICByZW5kZXJlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBza2VsZXRvckxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHJldHVybiBTa2VsZXRvckNvbXBvbmVudDtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTa2VsZXRvckNvbXBvbmVudDtcbiJdfQ==
