var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { Link } from 'olymp-router';
import ReactDOM from 'react-dom';
import { compose, withPropsOnChange, withState, getContext } from 'recompose';
import Grid from './grid';
import Container from './container';

export var cloudinaryUrl = function cloudinaryUrl(value, options, responsiveSize) {
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

var enhance = compose(getContext({
  amp: PropTypes.bool
}), withState('cWidth', 'setCWidth', undefined), withState('isLoaded', 'setIsLoaded', false), withState('responsiveSize', 'setResponsiveSize', {}), withPropsOnChange(['value', 'options', 'responsiveSize'], function (_ref) {
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
      this.node = ReactDOM.findDOMNode(this);
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


      return React.createElement(
        'div',
        { className: className, style: { width: width, height: height } },
        React.createElement('img', { src: url, width: '100%', height: 'auto' })
      );
    }
  }]);

  return Image;
}(Component)) || _class;

var _ref6 = React.createElement(
  'span',
  null,
  'Team2'
);

var Item = createComponent(function (_ref4) {
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
  return React.createElement(
    Grid.Item,
    { className: className, medium: size, padding: 10 },
    React.createElement(
      Link,
      { to: '/' + id },
      React.createElement(Image, { className: 'image', value: image }),
      React.createElement(
        'div',
        { className: 'inner' },
        React.createElement(
          'div',
          { className: 'tags' },
          React.createElement('span', null),
          _ref6
        ),
        React.createElement(
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

export default (function (_ref7) {
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
    childs.push(React.createElement(Item, _extends({}, item, { index: index, image: item.image, key: item.id, size: size })));
    return count + size;
  }, 0);
  return React.createElement(
    Container,
    null,
    React.createElement(
      Grid,
      _extends({}, attributes, { className: className, size: 12 }),
      children,
      childs
    )
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvcGFub3JhbWEuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiY3JlYXRlQ29tcG9uZW50IiwiTGluayIsIlJlYWN0RE9NIiwiY29tcG9zZSIsIndpdGhQcm9wc09uQ2hhbmdlIiwid2l0aFN0YXRlIiwiZ2V0Q29udGV4dCIsIkdyaWQiLCJDb250YWluZXIiLCJjbG91ZGluYXJ5VXJsIiwidmFsdWUiLCJvcHRpb25zIiwicmVzcG9uc2l2ZVNpemUiLCJuZXdPcHRpb25zIiwiYyIsImYiLCJxIiwiZmwiLCJkcHIiLCJ1cmwiLCJuZXdVcmwiLCJpbmRleE9mIiwic3Vic3RyIiwiY3JvcCIsImxlbmd0aCIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJxdWVyeSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJqb2luIiwicmVwbGFjZSIsImVuaGFuY2UiLCJhbXAiLCJib29sIiwidW5kZWZpbmVkIiwiSW1hZ2UiLCJvblJlc2l6ZSIsInNldFJlc3BvbnNpdmVTaXplIiwicHJvcHMiLCJNYXRoIiwiZmxvb3IiLCJub2RlIiwiZmluZERPTU5vZGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGFzc05hbWUiLCJJdGVtIiwiaW1hZ2UiLCJ0aGVtZSIsImluZGV4IiwiZGVnIiwiYW5pbWF0aW9uTmFtZSIsImZyb20iLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwidG8iLCJhbmltYXRpb25EZWxheSIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25UaW1pbmdGdW5jdGlvbiIsImFuaW1hdGlvbkZpbGxNb2RlIiwicG9zaXRpb24iLCJvbkhvdmVyIiwiYm94U2hhZG93IiwidHJhbnNpdGlvbiIsImNvbG9yIiwiZGFyazEiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImJvcmRlclJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiZmxleCIsInRvcCIsInBhZGRpbmciLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFdlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW5SaWdodCIsImNvbG9yU2Vjb25kYXJ5IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZXh0ZW5kcyIsIm5hbWUiLCJpZCIsInNpemUiLCJwIiwiaXRlbXMiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJjaGlsZHMiLCJmaWx0ZXIiLCJ4IiwicmVkdWNlIiwiY291bnQiLCJpdGVtIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQztBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLFdBQXJCO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsaUJBQWxCLEVBQXFDQyxTQUFyQyxFQUFnREMsVUFBaEQsUUFBa0UsV0FBbEU7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixhQUF0Qjs7QUFFQSxPQUFPLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQWlCQyxjQUFqQixFQUFvQztBQUMvRCxNQUFNQztBQUNKQyxPQUFHLE1BREM7QUFFSkMsT0FBRyxNQUZDO0FBR0pDLE9BQUcsVUFIQztBQUlKQyxRQUFJLE9BSkE7QUFLSkMsU0FBSztBQUxELEtBTURQLE9BTkMsQ0FBTjs7QUFTQSxNQUFJLENBQUNELEtBQUQsSUFBVSxDQUFDQSxNQUFNUyxHQUFyQixFQUEwQjtBQUN4QixXQUFPLEVBQVA7QUFDRDs7QUFFRCxNQUFN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QUFTLEVBQWIsRUFBaUI7QUFDZixhQUFPQSxLQUFQO0FBQ0Q7QUFDRCxRQUFNVCxPQUFPVSxLQUFLcEQsS0FBTCxDQUFXdkIsTUFBWCxHQUFvQjJFLEtBQUtwRCxLQUFMLENBQVd6QixLQUEvQixHQUF1QyxDQUF2QyxHQUEyQyxDQUF4RDtBQUNBd0UsV0FBT00sSUFBUCxDQUFZLG9CQUFDLElBQUQsZUFBVUQsSUFBVixJQUFnQixPQUFPbEQsS0FBdkIsRUFBOEIsT0FBT2tELEtBQUtwRCxLQUExQyxFQUFpRCxLQUFLb0QsS0FBS1gsRUFBM0QsRUFBK0QsTUFBTUMsSUFBckUsSUFBWjtBQUNBLFdBQU9TLFFBQVFULElBQWY7QUFDRCxHQVBELEVBT0csQ0FQSDtBQVFBLFNBQ0U7QUFBQyxhQUFEO0FBQUE7QUFDRTtBQUFDLFVBQUQ7QUFBQSxtQkFBVUcsVUFBVixJQUFzQixXQUFXL0MsU0FBakMsRUFBNEMsTUFBTSxFQUFsRDtBQUNHZ0QsY0FESDtBQUVHQztBQUZIO0FBREYsR0FERjtBQVFELENBbEJEIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvcGFub3JhbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wc09uQ2hhbmdlLCB3aXRoU3RhdGUsIGdldENvbnRleHQgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IEdyaWQgZnJvbSAnLi9ncmlkJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInO1xuXG5leHBvcnQgY29uc3QgY2xvdWRpbmFyeVVybCA9ICh2YWx1ZSwgb3B0aW9ucywgcmVzcG9uc2l2ZVNpemUpID0+IHtcbiAgY29uc3QgbmV3T3B0aW9ucyA9IHtcbiAgICBjOiAnZmlsbCcsXG4gICAgZjogJ2F1dG8nLFxuICAgIHE6ICdhdXRvOmVjbycsXG4gICAgZmw6ICdsb3NzeScsXG4gICAgZHByOiAyLFxuICAgIC4uLm9wdGlvbnMsXG4gIH07XG5cbiAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUudXJsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3QgbmV3VXJsID1cbiAgICB2YWx1ZS51cmwuaW5kZXhPZignaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS8nKSA9PT0gMFxuICAgICAgPyBgaHR0cHMke3ZhbHVlLnVybC5zdWJzdHIoNCl9YFxuICAgICAgOiB2YWx1ZS51cmw7XG5cbiAgY29uc3QgY3JvcCA9XG4gICAgdmFsdWUuY3JvcCAmJiB2YWx1ZS5jcm9wLmxlbmd0aFxuICAgICAgPyBgd18ke3ZhbHVlLmNyb3BbMF19LGhfJHt2YWx1ZS5jcm9wWzFdfSx4XyR7dmFsdWUuY3JvcFsyXX0seV8ke3ZhbHVlXG4gICAgICAgICAgLmNyb3BbM119LGNfY3JvcC9gXG4gICAgICA6ICcnO1xuXG4gIGlmIChyZXNwb25zaXZlU2l6ZSkge1xuICAgIG5ld09wdGlvbnMudyA9IHJlc3BvbnNpdmVTaXplLndpZHRoO1xuICAgIG5ld09wdGlvbnMuaCA9IHJlc3BvbnNpdmVTaXplLmhlaWdodDtcbiAgfVxuXG4gIGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmtleXMobmV3T3B0aW9ucylcbiAgICAubWFwKGtleSA9PiBgJHtrZXl9XyR7bmV3T3B0aW9uc1trZXldfWApXG4gICAgLmpvaW4oJywnKTtcblxuICBpZiAobmV3VXJsLmluZGV4T2YoJy91cGxvYWQvJykgIT09IC0xKSB7XG4gICAgcmV0dXJuIG5ld1VybC5yZXBsYWNlKCcvdXBsb2FkLycsIGAvdXBsb2FkLyR7Y3JvcH0ke3F1ZXJ5fS9gKTtcbiAgfSBlbHNlIGlmIChuZXdVcmwuaW5kZXhPZignL2ZldGNoLycpICE9PSAtMSkge1xuICAgIHJldHVybiBuZXdVcmwucmVwbGFjZSgnL2ZldGNoLycsIGAvZmV0Y2gvJHtjcm9wfSR7cXVlcnl9L2ApO1xuICB9XG59O1xuXG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICBnZXRDb250ZXh0KHtcbiAgICBhbXA6IFByb3BUeXBlcy5ib29sLFxuICB9KSxcbiAgd2l0aFN0YXRlKCdjV2lkdGgnLCAnc2V0Q1dpZHRoJywgdW5kZWZpbmVkKSxcbiAgd2l0aFN0YXRlKCdpc0xvYWRlZCcsICdzZXRJc0xvYWRlZCcsIGZhbHNlKSxcbiAgd2l0aFN0YXRlKCdyZXNwb25zaXZlU2l6ZScsICdzZXRSZXNwb25zaXZlU2l6ZScsIHt9KSxcbiAgd2l0aFByb3BzT25DaGFuZ2UoWyd2YWx1ZScsICdvcHRpb25zJywgJ3Jlc3BvbnNpdmVTaXplJ10sICh7IHZhbHVlLCBvcHRpb25zLCByZXNwb25zaXZlU2l6ZSB9KSA9PiAoe1xuICAgIHVybDogY2xvdWRpbmFyeVVybCh2YWx1ZSwgb3B0aW9ucywgcmVzcG9uc2l2ZVNpemUpLFxuICB9KSksXG4pO1xuXG5AZW5oYW5jZVxuY2xhc3MgSW1hZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBpZiAodGhpcy5ub2RlKSB7XG4gICAgICB0aGlzLm9uUmVzaXplKHRoaXMubm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG4gICAgfVxuICB9XG5cbiAgb25SZXNpemUgPSAoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcbiAgICBjb25zdCB7IHNldFJlc3BvbnNpdmVTaXplIH0gPSB0aGlzLnByb3BzO1xuICAgIHNldFJlc3BvbnNpdmVTaXplKHsgd2lkdGg6IE1hdGguZmxvb3Iod2lkdGgpLCBoZWlnaHQ6IE1hdGguZmxvb3IoaGVpZ2h0KSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdXJsLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fT5cbiAgICAgICAgPGltZyBzcmM9e3VybH0gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiYXV0b1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IEl0ZW0gPSBjcmVhdGVDb21wb25lbnQoKHsgaW1hZ2UsIHRoZW1lLCBpbmRleCwgZGVnIH0pID0+ICh7XG4gIGFuaW1hdGlvbk5hbWU6IHtcbiAgICBmcm9tOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNjBweCknLFxuICAgIH0sXG4gICAgdG86IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDBweCknLFxuICAgIH0sXG4gIH0sXG4gIGFuaW1hdGlvbkRlbGF5OiBgJHtpbmRleCAqIDUwICogMn1tc2AsXG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBhbmltYXRpb25EdXJhdGlvbjogJzEuNXMnLFxuICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLFxuICBhbmltYXRpb25GaWxsTW9kZTogJ2JvdGgnLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgLy8gb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBoZWlnaHQ6IDI2MCxcbiAgJz4gYSc6IHtcbiAgICBvbkhvdmVyOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjAzLCAxLjAzKScsXG4gICAgICBib3hTaGFkb3c6ICcwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSknLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjZzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLFxuICAgIGNvbG9yOiB0aGVtZS5kYXJrMSxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC4wMDUpIDFweCAxcHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggM3B4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAzMCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcjODA4MDgwMGYnLFxuICAgICc+IC5pbWFnZSc6IHtcbiAgICAgICc+IGltZyc6IHtcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogNSxcbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDUsXG4gICAgICB9LFxuICAgICAgZmxleDogMSxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICAnPiAuaW5uZXInOiB7XG4gICAgICAnPiAudGFncyc6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogLTEyLFxuICAgICAgICAnPiBzcGFuJzoge1xuICAgICAgICAgIHBhZGRpbmc6IDMsXG4gICAgICAgICAgcGFkZGluZ0xlZnQ6IDcsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiA3LFxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICAgICAgICBmb250U2l6ZTogMTAsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgYm94U2hhZG93OiAncmdiYSgwLCAwLCAwLCAwLjAzKSAxcHggMXB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjAzKSAwcHggMXB4IDFweCcsXG4gICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IDQsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnPiBoMyc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yU2Vjb25kYXJ5LFxuICAgICAgICBtYXJnaW5Ub3A6ICcwLjNlbScsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzBlbScsXG4gICAgICB9LFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yLFxuICAgICAgcGFkZGluZzogMTAsXG4gICAgICAvLyBib3JkZXJCb3R0b206ICcycHggc29saWQgIzcwNjI2OScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gIH0sXG4gIGV4dGVuZHM6IGltYWdlLmhlaWdodCA+IGltYWdlLndpZHRoID8ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAnPiAuaW1hZ2UnOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAyMjAsXG4gICAgfSxcbiAgICAnPiAuaW5uZXInOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgZmxleDogMSxcbiAgICB9XG4gIH0gOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICc+IC5pbWFnZSc6IHtcbiAgICAgIGhlaWdodDogMjAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgICc+IC5pbm5lcic6IHtcbiAgICAgIGZsZXg6IDEsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH1cbiAgfSxcbn0pLCAoeyBpbWFnZSwgbmFtZSwgY2xhc3NOYW1lLCBpZCwgc2l6ZSB9KSA9PiAoXG4gIDxHcmlkLkl0ZW0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IG1lZGl1bT17c2l6ZX0gcGFkZGluZz17MTB9PlxuICAgIDxMaW5rIHRvPXtgLyR7aWR9YH0+XG4gICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaW1hZ2VcIiB2YWx1ZT17aW1hZ2V9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgey8qIDxMb2dvIGljb249ezEwfSAvPiZuYnNwOyBPcnRobyAqL31cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+VGVhbTI8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDM+e25hbWV9PC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgPC9HcmlkLkl0ZW0+XG4pLCBwID0+IE9iamVjdC5rZXlzKHApKVxuXG5leHBvcnQgZGVmYXVsdCAoeyBpdGVtcywgYXR0cmlidXRlcyA9IHt9LCBjbGFzc05hbWUsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgY2hpbGRzID0gW107XG4gIGl0ZW1zLmZpbHRlcih4ID0+IHguaW1hZ2UpLnJlZHVjZSgoY291bnQsIGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGNvdW50ID49IDI0KSB7XG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuICAgIGNvbnN0IHNpemUgPSBpdGVtLmltYWdlLmhlaWdodCA+IGl0ZW0uaW1hZ2Uud2lkdGggPyAyIDogNDtcbiAgICBjaGlsZHMucHVzaCg8SXRlbSB7Li4uaXRlbX0gaW5kZXg9e2luZGV4fSBpbWFnZT17aXRlbS5pbWFnZX0ga2V5PXtpdGVtLmlkfSBzaXplPXtzaXplfSAvPik7XG4gICAgcmV0dXJuIGNvdW50ICsgc2l6ZTtcbiAgfSwgMCk7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxHcmlkIHsuLi5hdHRyaWJ1dGVzfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc2l6ZT17MTJ9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtjaGlsZHN9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn07XG4iXX0=
