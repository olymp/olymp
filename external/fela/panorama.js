'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloudinaryUrl = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFela = require('react-fela');

var _olympRouter = require('olymp-router');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _recompose = require('recompose');

var _grid = require('./grid');

var _grid2 = _interopRequireDefault(_grid);

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cloudinaryUrl = exports.cloudinaryUrl = function cloudinaryUrl(value, options, responsiveSize) {
  var newOptions = _extends({
    c: 'fill',
    f: 'auto',
    q: 'auto:eco',
    fl: 'lossy',
    dpr: 2
  }, options);

  if (!value || !value.url) {
    return '';
  }

  var newUrl = value.url.indexOf('http://res.cloudinary.com/') === 0 ? 'https' + value.url.substr(4) : value.url;

  var crop = value.crop && value.crop.length ? 'w_' + value.crop[0] + ',h_' + value.crop[1] + ',x_' + value.crop[2] + ',y_' + value.crop[3] + ',c_crop/' : '';

  if (responsiveSize) {
    newOptions.w = responsiveSize.width;
    newOptions.h = responsiveSize.height;
  }

  var query = Object.keys(newOptions).map(function (key) {
    return key + '_' + newOptions[key];
  }).join(',');

  if (newUrl.indexOf('/upload/') !== -1) {
    return newUrl.replace('/upload/', '/upload/' + crop + query + '/');
  } else if (newUrl.indexOf('/fetch/') !== -1) {
    return newUrl.replace('/fetch/', '/fetch/' + crop + query + '/');
  }
};

var enhance = (0, _recompose.compose)((0, _recompose.getContext)({
  amp: _propTypes2.default.bool
}), (0, _recompose.withState)('cWidth', 'setCWidth', undefined), (0, _recompose.withState)('isLoaded', 'setIsLoaded', false), (0, _recompose.withState)('responsiveSize', 'setResponsiveSize', {}), (0, _recompose.withPropsOnChange)(['value', 'options', 'responsiveSize'], function (_ref) {
  var value = _ref.value,
      options = _ref.options,
      responsiveSize = _ref.responsiveSize;
  return {
    url: cloudinaryUrl(value, options, responsiveSize)
  };
}));

var Image = enhance(_class = function (_Component) {
  _inherits(Image, _Component);

  function Image() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Image);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref2, [this].concat(args))), _this), _this.onResize = function (_ref3) {
      var width = _ref3.width,
          height = _ref3.height;
      var setResponsiveSize = _this.props.setResponsiveSize;

      setResponsiveSize({ width: Math.floor(width), height: Math.floor(height) });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Image, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.node = _reactDom2.default.findDOMNode(this);
      if (this.node) {
        this.onResize(this.node.getBoundingClientRect());
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          url = _props.url,
          width = _props.width,
          height = _props.height,
          className = _props.className;


      return _react2.default.createElement(
        'div',
        { className: className, style: { width: width, height: height } },
        _react2.default.createElement('img', { src: url, width: '100%', height: 'auto' })
      );
    }
  }]);

  return Image;
}(_react.Component)) || _class;

var _ref6 = _react2.default.createElement(
  'span',
  null,
  'Team2'
);

var Item = (0, _reactFela.createComponent)(function (_ref4) {
  var image = _ref4.image,
      theme = _ref4.theme,
      index = _ref4.index,
      deg = _ref4.deg;
  return {
    animationName: {
      from: {
        opacity: 0,
        transform: 'translateX(-60px)'
      },
      to: {
        opacity: 1,
        transform: 'translateX(0px)'
      }
    },
    animationDelay: index * 50 * 2 + 'ms',
    animationIterationCount: 1,
    animationDuration: '1.5s',
    animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    animationFillMode: 'both',
    position: 'relative',
    // overflow: 'hidden',
    height: 260,
    '> a': {
      onHover: {
        transform: 'scale(1.03, 1.03)',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)'
      },
      transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
      color: theme.dark1,
      height: '100%',
      width: '100%',
      boxShadow: 'rgba(0, 0, 0, 0.005) 1px 1px 4px, rgba(0, 0, 0, 0.05) 0px 1px 3px',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 5,
      borderBottomRightRadius: 30,
      position: 'relative',
      // backgroundColor: '#8080800f',
      '> .image': {
        '> img': {
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5
        },
        flex: 1,
        width: '100%'
      },
      '> .inner': {
        '> .tags': {
          position: 'absolute',
          top: -12,
          '> span': {
            padding: 3,
            paddingLeft: 7,
            paddingRight: 7,
            color: theme.color,
            fontSize: 10,
            borderRadius: 2,
            backgroundColor: 'white',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            boxShadow: 'rgba(0, 0, 0, 0.03) 1px 1px 4px, rgba(0, 0, 0, 0.03) 0px 1px 1px',
            display: 'inline-block',
            marginRight: 4
          }
        },
        '> h3': {
          color: theme.colorSecondary,
          marginTop: '0.3em',
          marginBottom: '0em'
        },
        position: 'relative',
        // backgroundColor: theme.color,
        padding: 10,
        // borderBottom: '2px solid #706269',
        width: '100%'
      }
    },
    extends: image.height > image.width ? {
      display: 'flex',
      flexDirection: 'row',
      '> .image': {
        height: '100%',
        width: 220
      },
      '> .inner': {
        width: '100%',
        flex: 1
      }
    } : {
      display: 'flex',
      flexDirection: 'column',
      '> .image': {
        height: 200,
        width: '100%'
      },
      '> .inner': {
        flex: 1,
        width: '100%'
      }
    }
  };
}, function (_ref5) {
  var image = _ref5.image,
      name = _ref5.name,
      className = _ref5.className,
      id = _ref5.id,
      size = _ref5.size;
  return _react2.default.createElement(
    _grid2.default.Item,
    { className: className, medium: size, padding: 10 },
    _react2.default.createElement(
      _olympRouter.Link,
      { to: '/' + id },
      _react2.default.createElement(Image, { className: 'image', value: image }),
      _react2.default.createElement(
        'div',
        { className: 'inner' },
        _react2.default.createElement(
          'div',
          { className: 'tags' },
          _react2.default.createElement('span', null),
          _ref6
        ),
        _react2.default.createElement(
          'h3',
          null,
          name
        )
      )
    )
  );
}, function (p) {
  return Object.keys(p);
});

exports.default = function (_ref7) {
  var items = _ref7.items,
      _ref7$attributes = _ref7.attributes,
      attributes = _ref7$attributes === undefined ? {} : _ref7$attributes,
      className = _ref7.className,
      children = _ref7.children;

  var childs = [];
  items.filter(function (x) {
    return x.image;
  }).reduce(function (count, item, index) {
    if (count >= 24) {
      return count;
    }
    var size = item.image.height > item.image.width ? 2 : 4;
    childs.push(_react2.default.createElement(Item, _extends({}, item, { index: index, image: item.image, key: item.id, size: size })));
    return count + size;
  }, 0);
  return _react2.default.createElement(
    _container2.default,
    null,
    _react2.default.createElement(
      _grid2.default,
      _extends({}, attributes, { className: className, size: 12 }),
      children,
      childs
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvcGFub3JhbWEuZXM2Il0sIm5hbWVzIjpbImNsb3VkaW5hcnlVcmwiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJyZXNwb25zaXZlU2l6ZSIsIm5ld09wdGlvbnMiLCJjIiwiZiIsInEiLCJmbCIsImRwciIsInVybCIsIm5ld1VybCIsImluZGV4T2YiLCJzdWJzdHIiLCJjcm9wIiwibGVuZ3RoIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsInF1ZXJ5IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImpvaW4iLCJyZXBsYWNlIiwiZW5oYW5jZSIsImFtcCIsImJvb2wiLCJ1bmRlZmluZWQiLCJJbWFnZSIsIm9uUmVzaXplIiwic2V0UmVzcG9uc2l2ZVNpemUiLCJwcm9wcyIsIk1hdGgiLCJmbG9vciIsIm5vZGUiLCJmaW5kRE9NTm9kZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsYXNzTmFtZSIsIkl0ZW0iLCJpbWFnZSIsInRoZW1lIiwiaW5kZXgiLCJkZWciLCJhbmltYXRpb25OYW1lIiwiZnJvbSIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJ0byIsImFuaW1hdGlvbkRlbGF5IiwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uIiwiYW5pbWF0aW9uRmlsbE1vZGUiLCJwb3NpdGlvbiIsIm9uSG92ZXIiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwiY29sb3IiLCJkYXJrMSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJmbGV4IiwidG9wIiwicGFkZGluZyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsIm1hcmdpblJpZ2h0IiwiY29sb3JTZWNvbmRhcnkiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJleHRlbmRzIiwibmFtZSIsImlkIiwic2l6ZSIsInAiLCJpdGVtcyIsImF0dHJpYnV0ZXMiLCJjaGlsZHJlbiIsImNoaWxkcyIsImZpbHRlciIsIngiLCJyZWR1Y2UiLCJjb3VudCIsIml0ZW0iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsd0NBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBaUJDLGNBQWpCLEVBQW9DO0FBQy9ELE1BQU1DO0FBQ0pDLE9BQUcsTUFEQztBQUVKQyxPQUFHLE1BRkM7QUFHSkMsT0FBRyxVQUhDO0FBSUpDLFFBQUksT0FKQTtBQUtKQyxTQUFLO0FBTEQsS0FNRFAsT0FOQyxDQUFOOztBQVNBLE1BQUksQ0FBQ0QsS0FBRCxJQUFVLENBQUNBLE1BQU1TLEdBQXJCLEVBQTBCO0FBQ3hCLFdBQU8sRUFBUDtBQUNEOztBQUVELE1BQU1DLFNBQ0pWLE1BQU1TLEdBQU4sQ0FBVUUsT0FBVixDQUFrQiw0QkFBbEIsTUFBb0QsQ0FBcEQsYUFDWVgsTUFBTVMsR0FBTixDQUFVRyxNQUFWLENBQWlCLENBQWpCLENBRFosR0FFSVosTUFBTVMsR0FIWjs7QUFLQSxNQUFNSSxPQUNKYixNQUFNYSxJQUFOLElBQWNiLE1BQU1hLElBQU4sQ0FBV0MsTUFBekIsVUFDU2QsTUFBTWEsSUFBTixDQUFXLENBQVgsQ0FEVCxXQUM0QmIsTUFBTWEsSUFBTixDQUFXLENBQVgsQ0FENUIsV0FDK0NiLE1BQU1hLElBQU4sQ0FBVyxDQUFYLENBRC9DLFdBQ2tFYixNQUMzRGEsSUFEMkQsQ0FDdEQsQ0FEc0QsQ0FEbEUsZ0JBR0ksRUFKTjs7QUFNQSxNQUFJWCxjQUFKLEVBQW9CO0FBQ2xCQyxlQUFX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bEQ7QUFDR2dELGNBREg7QUFFR0M7QUFGSDtBQURGLEdBREY7QUFRRCxDIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvcGFub3JhbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wc09uQ2hhbmdlLCB3aXRoU3RhdGUsIGdldENvbnRleHQgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IEdyaWQgZnJvbSAnLi9ncmlkJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInO1xuXG5leHBvcnQgY29uc3QgY2xvdWRpbmFyeVVybCA9ICh2YWx1ZSwgb3B0aW9ucywgcmVzcG9uc2l2ZVNpemUpID0+IHtcbiAgY29uc3QgbmV3T3B0aW9ucyA9IHtcbiAgICBjOiAnZmlsbCcsXG4gICAgZjogJ2F1dG8nLFxuICAgIHE6ICdhdXRvOmVjbycsXG4gICAgZmw6ICdsb3NzeScsXG4gICAgZHByOiAyLFxuICAgIC4uLm9wdGlvbnMsXG4gIH07XG5cbiAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUudXJsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3QgbmV3VXJsID1cbiAgICB2YWx1ZS51cmwuaW5kZXhPZignaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS8nKSA9PT0gMFxuICAgICAgPyBgaHR0cHMke3ZhbHVlLnVybC5zdWJzdHIoNCl9YFxuICAgICAgOiB2YWx1ZS51cmw7XG5cbiAgY29uc3QgY3JvcCA9XG4gICAgdmFsdWUuY3JvcCAmJiB2YWx1ZS5jcm9wLmxlbmd0aFxuICAgICAgPyBgd18ke3ZhbHVlLmNyb3BbMF19LGhfJHt2YWx1ZS5jcm9wWzFdfSx4XyR7dmFsdWUuY3JvcFsyXX0seV8ke3ZhbHVlXG4gICAgICAgICAgLmNyb3BbM119LGNfY3JvcC9gXG4gICAgICA6ICcnO1xuXG4gIGlmIChyZXNwb25zaXZlU2l6ZSkge1xuICAgIG5ld09wdGlvbnMudyA9IHJlc3BvbnNpdmVTaXplLndpZHRoO1xuICAgIG5ld09wdGlvbnMuaCA9IHJlc3BvbnNpdmVTaXplLmhlaWdodDtcbiAgfVxuXG4gIGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmtleXMobmV3T3B0aW9ucylcbiAgICAubWFwKGtleSA9PiBgJHtrZXl9XyR7bmV3T3B0aW9uc1trZXldfWApXG4gICAgLmpvaW4oJywnKTtcblxuICBpZiAobmV3VXJsLmluZGV4T2YoJy91cGxvYWQvJykgIT09IC0xKSB7XG4gICAgcmV0dXJuIG5ld1VybC5yZXBsYWNlKCcvdXBsb2FkLycsIGAvdXBsb2FkLyR7Y3JvcH0ke3F1ZXJ5fS9gKTtcbiAgfSBlbHNlIGlmIChuZXdVcmwuaW5kZXhPZignL2ZldGNoLycpICE9PSAtMSkge1xuICAgIHJldHVybiBuZXdVcmwucmVwbGFjZSgnL2ZldGNoLycsIGAvZmV0Y2gvJHtjcm9wfSR7cXVlcnl9L2ApO1xuICB9XG59O1xuXG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICBnZXRDb250ZXh0KHtcbiAgICBhbXA6IFByb3BUeXBlcy5ib29sLFxuICB9KSxcbiAgd2l0aFN0YXRlKCdjV2lkdGgnLCAnc2V0Q1dpZHRoJywgdW5kZWZpbmVkKSxcbiAgd2l0aFN0YXRlKCdpc0xvYWRlZCcsICdzZXRJc0xvYWRlZCcsIGZhbHNlKSxcbiAgd2l0aFN0YXRlKCdyZXNwb25zaXZlU2l6ZScsICdzZXRSZXNwb25zaXZlU2l6ZScsIHt9KSxcbiAgd2l0aFByb3BzT25DaGFuZ2UoWyd2YWx1ZScsICdvcHRpb25zJywgJ3Jlc3BvbnNpdmVTaXplJ10sICh7IHZhbHVlLCBvcHRpb25zLCByZXNwb25zaXZlU2l6ZSB9KSA9PiAoe1xuICAgIHVybDogY2xvdWRpbmFyeVVybCh2YWx1ZSwgb3B0aW9ucywgcmVzcG9uc2l2ZVNpemUpLFxuICB9KSksXG4pO1xuXG5AZW5oYW5jZVxuY2xhc3MgSW1hZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBpZiAodGhpcy5ub2RlKSB7XG4gICAgICB0aGlzLm9uUmVzaXplKHRoaXMubm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG4gICAgfVxuICB9XG5cbiAgb25SZXNpemUgPSAoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcbiAgICBjb25zdCB7IHNldFJlc3BvbnNpdmVTaXplIH0gPSB0aGlzLnByb3BzO1xuICAgIHNldFJlc3BvbnNpdmVTaXplKHsgd2lkdGg6IE1hdGguZmxvb3Iod2lkdGgpLCBoZWlnaHQ6IE1hdGguZmxvb3IoaGVpZ2h0KSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdXJsLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fT5cbiAgICAgICAgPGltZyBzcmM9e3VybH0gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiYXV0b1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IEl0ZW0gPSBjcmVhdGVDb21wb25lbnQoKHsgaW1hZ2UsIHRoZW1lLCBpbmRleCwgZGVnIH0pID0+ICh7XG4gIGFuaW1hdGlvbk5hbWU6IHtcbiAgICBmcm9tOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNjBweCknLFxuICAgIH0sXG4gICAgdG86IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDBweCknLFxuICAgIH0sXG4gIH0sXG4gIGFuaW1hdGlvbkRlbGF5OiBgJHtpbmRleCAqIDUwICogMn1tc2AsXG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBhbmltYXRpb25EdXJhdGlvbjogJzEuNXMnLFxuICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLFxuICBhbmltYXRpb25GaWxsTW9kZTogJ2JvdGgnLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgLy8gb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBoZWlnaHQ6IDI2MCxcbiAgJz4gYSc6IHtcbiAgICBvbkhvdmVyOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjAzLCAxLjAzKScsXG4gICAgICBib3hTaGFkb3c6ICcwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSknLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjZzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLFxuICAgIGNvbG9yOiB0aGVtZS5kYXJrMSxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC4wMDUpIDFweCAxcHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggM3B4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAzMCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcjODA4MDgwMGYnLFxuICAgICc+IC5pbWFnZSc6IHtcbiAgICAgICc+IGltZyc6IHtcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogNSxcbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDUsXG4gICAgICB9LFxuICAgICAgZmxleDogMSxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICAnPiAuaW5uZXInOiB7XG4gICAgICAnPiAudGFncyc6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogLTEyLFxuICAgICAgICAnPiBzcGFuJzoge1xuICAgICAgICAgIHBhZGRpbmc6IDMsXG4gICAgICAgICAgcGFkZGluZ0xlZnQ6IDcsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiA3LFxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICAgICAgICBmb250U2l6ZTogMTAsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgYm94U2hhZG93OiAncmdiYSgwLCAwLCAwLCAwLjAzKSAxcHggMXB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjAzKSAwcHggMXB4IDFweCcsXG4gICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IDQsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnPiBoMyc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yU2Vjb25kYXJ5LFxuICAgICAgICBtYXJnaW5Ub3A6ICcwLjNlbScsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzBlbScsXG4gICAgICB9LFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yLFxuICAgICAgcGFkZGluZzogMTAsXG4gICAgICAvLyBib3JkZXJCb3R0b206ICcycHggc29saWQgIzcwNjI2OScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gIH0sXG4gIGV4dGVuZHM6IGltYWdlLmhlaWdodCA+IGltYWdlLndpZHRoID8ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAnPiAuaW1hZ2UnOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAyMjAsXG4gICAgfSxcbiAgICAnPiAuaW5uZXInOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgZmxleDogMSxcbiAgICB9XG4gIH0gOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICc+IC5pbWFnZSc6IHtcbiAgICAgIGhlaWdodDogMjAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgICc+IC5pbm5lcic6IHtcbiAgICAgIGZsZXg6IDEsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH1cbiAgfSxcbn0pLCAoeyBpbWFnZSwgbmFtZSwgY2xhc3NOYW1lLCBpZCwgc2l6ZSB9KSA9PiAoXG4gIDxHcmlkLkl0ZW0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IG1lZGl1bT17c2l6ZX0gcGFkZGluZz17MTB9PlxuICAgIDxMaW5rIHRvPXtgLyR7aWR9YH0+XG4gICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaW1hZ2VcIiB2YWx1ZT17aW1hZ2V9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgey8qIDxMb2dvIGljb249ezEwfSAvPiZuYnNwOyBPcnRobyAqL31cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+VGVhbTI8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDM+e25hbWV9PC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgPC9HcmlkLkl0ZW0+XG4pLCBwID0+IE9iamVjdC5rZXlzKHApKVxuXG5leHBvcnQgZGVmYXVsdCAoeyBpdGVtcywgYXR0cmlidXRlcyA9IHt9LCBjbGFzc05hbWUsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgY2hpbGRzID0gW107XG4gIGl0ZW1zLmZpbHRlcih4ID0+IHguaW1hZ2UpLnJlZHVjZSgoY291bnQsIGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGNvdW50ID49IDI0KSB7XG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuICAgIGNvbnN0IHNpemUgPSBpdGVtLmltYWdlLmhlaWdodCA+IGl0ZW0uaW1hZ2Uud2lkdGggPyAyIDogNDtcbiAgICBjaGlsZHMucHVzaCg8SXRlbSB7Li4uaXRlbX0gaW5kZXg9e2luZGV4fSBpbWFnZT17aXRlbS5pbWFnZX0ga2V5PXtpdGVtLmlkfSBzaXplPXtzaXplfSAvPik7XG4gICAgcmV0dXJuIGNvdW50ICsgc2l6ZTtcbiAgfSwgMCk7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxHcmlkIHsuLi5hdHRyaWJ1dGVzfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc2l6ZT17MTJ9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtjaGlsZHN9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn07XG4iXX0=
