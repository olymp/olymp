var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { createComponent } from 'react-fela';
import { Link } from 'olymp-router';
import ReactDOM from 'react-dom';
import { compose, withPropsOnChange, withState } from 'recompose';
import { withAmp } from 'olymp-utils';
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

var enhance = compose(withAmp, withState('cWidth', 'setCWidth', undefined), withState('isLoaded', 'setIsLoaded', false), withState('responsiveSize', 'setResponsiveSize', {}), withPropsOnChange(['value', 'options', 'responsiveSize'], function (_ref) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvcGFub3JhbWEuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlQ29tcG9uZW50IiwiTGluayIsIlJlYWN0RE9NIiwiY29tcG9zZSIsIndpdGhQcm9wc09uQ2hhbmdlIiwid2l0aFN0YXRlIiwid2l0aEFtcCIsIkdyaWQiLCJDb250YWluZXIiLCJjbG91ZGluYXJ5VXJsIiwidmFsdWUiLCJvcHRpb25zIiwicmVzcG9uc2l2ZVNpemUiLCJuZXdPcHRpb25zIiwiYyIsImYiLCJxIiwiZmwiLCJkcHIiLCJ1cmwiLCJuZXdVcmwiLCJpbmRleE9mIiwic3Vic3RyIiwiY3JvcCIsImxlbmd0aCIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJxdWVyeSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJqb2luIiwicmVwbGFjZSIsImVuaGFuY2UiLCJ1bmRlZmluZWQiLCJJbWFnZSIsIm9uUmVzaXplIiwic2V0UmVzcG9uc2l2ZVNpemUiLCJwcm9wcyIsIk1hdGgiLCJmbG9vciIsIm5vZGUiLCJmaW5kRE9NTm9kZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsYXNzTmFtZSIsIkl0ZW0iLCJpbWFnZSIsInRoZW1lIiwiaW5kZXgiLCJkZWciLCJhbmltYXRpb25OYW1lIiwiZnJvbSIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJ0byIsImFuaW1hdGlvbkRlbGF5IiwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uIiwiYW5pbWF0aW9uRmlsbE1vZGUiLCJwb3NpdGlvbiIsIm9uSG92ZXIiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwiY29sb3IiLCJkYXJrMSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJmbGV4IiwidG9wIiwicGFkZGluZyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsIm1hcmdpblJpZ2h0IiwiY29sb3JTZWNvbmRhcnkiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJleHRlbmRzIiwibmFtZSIsImlkIiwic2l6ZSIsInAiLCJpdGVtcyIsImF0dHJpYnV0ZXMiLCJjaGlsZHJlbiIsImNoaWxkcyIsImZpbHRlciIsIngiLCJyZWR1Y2UiLCJjb3VudCIsIml0ZW0iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsWUFBaEM7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixXQUFyQjtBQUNBLFNBQVNDLE9BQVQsRUFBa0JDLGlCQUFsQixFQUFxQ0MsU0FBckMsUUFBc0QsV0FBdEQ7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGFBQXhCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixRQUFqQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsYUFBdEI7O0FBRUEsT0FBTyxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFpQkMsY0FBakIsRUFBb0M7QUFDL0QsTUFBTUM7QUFDSkMsT0FBRyxNQURDO0FBRUpDLE9BQUcsTUFGQztBQUdKQyxPQUFHLFVBSEM7QUFJSkMsUUFBSSxPQUpBO0FBS0pDLFNBQUs7QUFMRCxLQU1EUCxPQU5DLENBQU47O0FBU0EsTUFBSSxDQUFDRCxLQUFELElBQVUsQ0FBQ0EsTUFBTVMsR0FBckIsRUFBMEI7QUFDeEIsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsTUFBTUMsU0FDSlYsTUFBTVMsR0FBTixDQUFVRSxPQUFWLENBQWtCLDRCQUFsQixNQUFvRCxDQUFwRCxhQUNZWCxNQUFNUyxHQUFOLENBQVVHLE1BQVYsQ0FBaUIsQ0FBakIsQ0FEWixHQUVJWixNQUFNUyxHQUhaOztBQUtBLE1BQU1JLE9BQ0piLE1BQU1hLElBQU4sSUFBY2IsTUFBTWEsSUFBTixDQUFXQyxNQUF6QixVQUNTZCxNQUFNYSxJQUFOLENBQVcsQ0FBWCxDQURULFdBQzRCYixNQUFNYSxJQUFOLENBQVcsQ0FBWCxDQUQ1QixXQUMrQ2IsTUFBTWEsSUFBTixDQUFXLENBQVgsQ0FEL0MsV0FDa0ViLE1BQzNEYSxJQUQyRCxDQUN0RCxDQURzRCxDQURsRSxnQkFHSSxFQUpOOztBQU1BLE1BQUlYLGNBQUosRUFBb0I7QUFDbEJDLGVBQVdZLENBQVgsR0FBZWIsZUFBZWMsS0FBOUI7QUFDQWIsZUFBV2MsQ0FBWCxHQUFlZixlQUFlZ0IsTUFBOUI7QUFDRDs7QUFFRCxNQUFNQyxRQUFRQyxPQUFPQyxJQUFQLENBQVlsQixVQUFaLEVBQ1htQixHQURXLENBQ1A7QUFBQSxXQUFVQyxHQUFWLFNBQWlCcEIsV0FBV29CLEdBQVgsQ0FBakI7QUFBQSxHQURPLEVBRVhDLElBRlcsQ0FFTixHQUZNLENBQWQ7O0FBSUEsTUFBSWQsT0FBT0MsT0FBUCxDQUFlLFVBQWYsTUFBK0IsQ0FBQyxDQUFwQyxFQUF1QztBQUNyQyxXQUFPRCxPQUFPZSxPQUFQLENBQWUsVUFBZixlQUFzQ1osSUFBdEMsR0FBNkNNLEtBQTdDLE9BQVA7QUFDRCxHQUZELE1BRU8sSUFBSVQsT0FBT0MsT0FBUCxDQUFlLFNBQWYsTUFBOEIsQ0FBQyxDQUFuQyxFQUFzQztBQUMzQyxXQUFPRCxPQUFPZSxPQUFQLENBQWUsU0FBZixjQUFvQ1osSUFBcEMsR0FBMkNNLEtBQTNDLE9BQVA7QUFDRDtBQUNGLENBdkNNOztBQTBDUCxJQUFNTyxVQUFVakMsUUFDZEcsT0FEYyxFQUVkRCxVQUFVLFFBQVYsRUFBb0IsV0FBcEIsRUFBaUNnQyxTQUFqQyxDQUZjLEVBR2RoQyxVQUFVLFVBQVYsRUFBc0IsYUFBdEIsRUFBcUMsS0FBckMsQ0FIYyxFQUlkQSxVQUFVLGdCQUFWLEVBQTRCLG1CQUE1QixFQUFpRCxFQUFqRCxDQUpjLEVBS2RELGtCQUFrQixDQUFDLE9BQUQsRUFBVSxTQUFWLEVBQXFCLGdCQUFyQixDQUFsQixFQUEwRDtBQUFBLE1BQUdNLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLE9BQVYsUUFBVUEsT0FBVjtBQUFBLE1BQW1CQyxjQUFuQixRQUFtQkEsY0FBbkI7QUFBQSxTQUF5QztBQUNqR08sU0FBS1YsY0FBY0MsS0FBZCxFQUFxQkMsT0FBckIsRUFBOEJDLGNBQTlCO0FBRDRGLEdBQXpDO0FBQUEsQ0FBMUQsQ0FMYyxDQUFoQjs7SUFXTTBCLEssR0FETEYsTzs7Ozs7Ozs7Ozs7Ozs7c0xBU0NHLFEsR0FBVyxpQkFBdUI7QUFBQSxVQUFwQmIsS0FBb0IsU0FBcEJBLEtBQW9CO0FBQUEsVUFBYkUsTUFBYSxTQUFiQSxNQUFhO0FBQUEsVUFDeEJZLGlCQUR3QixHQUNGLE1BQUtDLEtBREgsQ0FDeEJELGlCQUR3Qjs7QUFFaENBLHdCQUFrQixFQUFFZCxPQUFPZ0IsS0FBS0MsS0FBTCxDQUFXakIsS0FBWCxDQUFULEVBQTRCRSxRQUFRYyxLQUFLQyxLQUFMLENBQVdmLE1BQVgsQ0FBcEMsRUFBbEI7QUFDRCxLOzs7Ozt3Q0FWbUI7QUFDbEIsV0FBS2dCLElBQUwsR0FBWTFDLFNBQVMyQyxXQUFULENBQXFCLElBQXJCLENBQVo7QUFDQSxVQUFJLEtBQUtELElBQVQsRUFBZTtBQUNiLGFBQUtMLFFBQUwsQ0FBYyxLQUFLSyxJQUFMLENBQVVFLHFCQUFWLEVBQWQ7QUFDRDtBQUNGOzs7NkJBT1E7QUFBQSxtQkFNSCxLQUFLTCxLQU5GO0FBQUEsVUFFTHRCLEdBRkssVUFFTEEsR0FGSztBQUFBLFVBR0xPLEtBSEssVUFHTEEsS0FISztBQUFBLFVBSUxFLE1BSkssVUFJTEEsTUFKSztBQUFBLFVBS0xtQixTQUxLLFVBS0xBLFNBTEs7OztBQVFQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0EsU0FBaEIsRUFBMkIsT0FBTyxFQUFFckIsWUFBRixFQUFTRSxjQUFULEVBQWxDO0FBQ0UscUNBQUssS0FBS1QsR0FBVixFQUFlLE9BQU0sTUFBckIsRUFBNEIsUUFBTyxNQUFuQztBQURGLE9BREY7QUFLRDs7OztFQTFCaUJwQixTOztZQXVJVjtBQUFBO0FBQUE7QUFBQTtBQUFBLEM7O0FBMUdWLElBQU1pRCxPQUFPaEQsZ0JBQWdCO0FBQUEsTUFBR2lELEtBQUgsU0FBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsU0FBVUEsS0FBVjtBQUFBLE1BQWlCQyxLQUFqQixTQUFpQkEsS0FBakI7QUFBQSxNQUF3QkMsR0FBeEIsU0FBd0JBLEdBQXhCO0FBQUEsU0FBbUM7QUFDOURDLG1CQUFlO0FBQ2JDLFlBQU07QUFDSkMsaUJBQVMsQ0FETDtBQUVKQyxtQkFBVztBQUZQLE9BRE87QUFLYkMsVUFBSTtBQUNGRixpQkFBUyxDQURQO0FBRUZDLG1CQUFXO0FBRlQ7QUFMUyxLQUQrQztBQVc5REUsb0JBQW1CUCxRQUFRLEVBQVIsR0FBYSxDQUFoQyxPQVg4RDtBQVk5RFEsNkJBQXlCLENBWnFDO0FBYTlEQyx1QkFBbUIsTUFiMkM7QUFjOURDLDZCQUF5QixvQ0FkcUM7QUFlOURDLHVCQUFtQixNQWYyQztBQWdCOURDLGNBQVUsVUFoQm9EO0FBaUI5RDtBQUNBbkMsWUFBUSxHQWxCc0Q7QUFtQjlELFdBQU87QUFDTG9DLGVBQVM7QUFDUFIsbUJBQVcsbUJBREo7QUFFUFMsbUJBQVc7QUFGSixPQURKO0FBS0xDLGtCQUFZLDZDQUxQO0FBTUxDLGFBQU9qQixNQUFNa0IsS0FOUjtBQU9MeEMsY0FBUSxNQVBIO0FBUUxGLGFBQU8sTUFSRjtBQVNMdUMsaUJBQVcsbUVBVE47QUFVTEksZUFBUyxNQVZKO0FBV0xDLHFCQUFlLFFBWFY7QUFZTEMsb0JBQWMsQ0FaVDtBQWFMQywrQkFBeUIsRUFicEI7QUFjTFQsZ0JBQVUsVUFkTDtBQWVMO0FBQ0Esa0JBQVk7QUFDVixpQkFBUztBQUNQVSwrQkFBcUIsQ0FEZDtBQUVQQyxnQ0FBc0I7QUFGZixTQURDO0FBS1ZDLGNBQU0sQ0FMSTtBQU1WakQsZUFBTztBQU5HLE9BaEJQO0FBd0JMLGtCQUFZO0FBQ1YsbUJBQVc7QUFDVHFDLG9CQUFVLFVBREQ7QUFFVGEsZUFBSyxDQUFDLEVBRkc7QUFHVCxvQkFBVTtBQUNSQyxxQkFBUyxDQUREO0FBRVJDLHlCQUFhLENBRkw7QUFHUkMsMEJBQWMsQ0FITjtBQUlSWixtQkFBT2pCLE1BQU1pQixLQUpMO0FBS1JhLHNCQUFVLEVBTEY7QUFNUlQsMEJBQWMsQ0FOTjtBQU9SVSw2QkFBaUIsT0FQVDtBQVFSQyx3QkFBWSxNQVJKO0FBU1JDLDJCQUFlLFdBVFA7QUFVUmxCLHVCQUFXLGtFQVZIO0FBV1JJLHFCQUFTLGNBWEQ7QUFZUmUseUJBQWE7QUFaTDtBQUhELFNBREQ7QUFtQlYsZ0JBQVE7QUFDTmpCLGlCQUFPakIsTUFBTW1DLGNBRFA7QUFFTkMscUJBQVcsT0FGTDtBQUdOQyx3QkFBYztBQUhSLFNBbkJFO0FBd0JWeEIsa0JBQVUsVUF4QkE7QUF5QlY7QUFDQWMsaUJBQVMsRUExQkM7QUEyQlY7QUFDQW5ELGVBQU87QUE1Qkc7QUF4QlAsS0FuQnVEO0FBMEU5RDhELGFBQVN2QyxNQUFNckIsTUFBTixHQUFlcUIsTUFBTXZCLEtBQXJCLEdBQTZCO0FBQ3BDMkMsZUFBUyxNQUQyQjtBQUVwQ0MscUJBQWUsS0FGcUI7QUFHcEMsa0JBQVk7QUFDVjFDLGdCQUFRLE1BREU7QUFFVkYsZUFBTztBQUZHLE9BSHdCO0FBT3BDLGtCQUFZO0FBQ1ZBLGVBQU8sTUFERztBQUVWaUQsY0FBTTtBQUZJO0FBUHdCLEtBQTdCLEdBV0w7QUFDRk4sZUFBUyxNQURQO0FBRUZDLHFCQUFlLFFBRmI7QUFHRixrQkFBWTtBQUNWMUMsZ0JBQVEsR0FERTtBQUVWRixlQUFPO0FBRkcsT0FIVjtBQU9GLGtCQUFZO0FBQ1ZpRCxjQUFNLENBREk7QUFFVmpELGVBQU87QUFGRztBQVBWO0FBckYwRCxHQUFuQztBQUFBLENBQWhCLEVBaUdUO0FBQUEsTUFBR3VCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLE1BQVV3QyxJQUFWLFNBQVVBLElBQVY7QUFBQSxNQUFnQjFDLFNBQWhCLFNBQWdCQSxTQUFoQjtBQUFBLE1BQTJCMkMsRUFBM0IsU0FBMkJBLEVBQTNCO0FBQUEsTUFBK0JDLElBQS9CLFNBQStCQSxJQUEvQjtBQUFBLFNBQ0Y7QUFBQyxRQUFELENBQU0sSUFBTjtBQUFBLE1BQVcsV0FBVzVDLFNBQXRCLEVBQWlDLFFBQVE0QyxJQUF6QyxFQUErQyxTQUFTLEVBQXhEO0FBQ0U7QUFBQyxVQUFEO0FBQUEsUUFBTSxVQUFRRCxFQUFkO0FBQ0UsMEJBQUMsS0FBRCxJQUFPLFdBQVUsT0FBakIsRUFBeUIsT0FBT3pDLEtBQWhDLEdBREY7QUFFRTtBQUFBO0FBQUEsVUFBSyxXQUFVLE9BQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLE1BQWY7QUFDRSwyQ0FERjtBQUFBO0FBQUEsU0FERjtBQU9FO0FBQUE7QUFBQTtBQUFLd0M7QUFBTDtBQVBGO0FBRkY7QUFERixHQURFO0FBQUEsQ0FqR1MsRUFnSFY7QUFBQSxTQUFLM0QsT0FBT0MsSUFBUCxDQUFZNkQsQ0FBWixDQUFMO0FBQUEsQ0FoSFUsQ0FBYjs7QUFrSEEsZ0JBQWUsaUJBQXFEO0FBQUEsTUFBbERDLEtBQWtELFNBQWxEQSxLQUFrRDtBQUFBLCtCQUEzQ0MsVUFBMkM7QUFBQSxNQUEzQ0EsVUFBMkMsb0NBQTlCLEVBQThCO0FBQUEsTUFBMUIvQyxTQUEwQixTQUExQkEsU0FBMEI7QUFBQSxNQUFmZ0QsUUFBZSxTQUFmQSxRQUFlOztBQUNsRSxNQUFNQyxTQUFTLEVBQWY7QUFDQUgsUUFBTUksTUFBTixDQUFhO0FBQUEsV0FBS0MsRUFBRWpELEtBQVA7QUFBQSxHQUFiLEVBQTJCa0QsTUFBM0IsQ0FBa0MsVUFBQ0MsS0FBRCxFQUFRQyxJQUFSLEVBQWNsRCxLQUFkLEVBQXdCO0FBQ3hELFFBQUlpRCxTQUFTLEVBQWIsRUFBaUI7QUFDZixhQUFPQSxLQUFQO0FBQ0Q7QUFDRCxRQUFNVCxPQUFPVSxLQUFLcEQsS0FBTCxDQUFXckIsTUFBWCxHQUFvQnlFLEtBQUtwRCxLQUFMLENBQVd2QixLQUEvQixHQUF1QyxDQUF2QyxHQUEyQyxDQUF4RDtBQUNBc0UsV0FBT00sSUFBUCxDQUFZLG9CQUFDLElBQUQsZUFBVUQsSUFBVixJQUFnQixPQUFPbEQsS0FBdkIsRUFBOEIsT0FBT2tELEtBQUtwRCxLQUExQyxFQUFpRCxLQUFLb0QsS0FBS1gsRUFBM0QsRUFBK0QsTUFBTUMsSUFBckUsSUFBWjtBQUNBLFdBQU9TLFFBQVFULElBQWY7QUFDRCxHQVBELEVBT0csQ0FQSDtBQVFBLFNBQ0U7QUFBQyxhQUFEO0FBQUE7QUFDRTtBQUFDLFVBQUQ7QUFBQSxtQkFBVUcsVUFBVixJQUFzQixXQUFXL0MsU0FBakMsRUFBNEMsTUFBTSxFQUFsRDtBQUNHZ0QsY0FESDtBQUVHQztBQUZIO0FBREYsR0FERjtBQVFELENBbEJEIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvcGFub3JhbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFByb3BzT25DaGFuZ2UsIHdpdGhTdGF0ZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyB3aXRoQW1wIH0gZnJvbSAnb2x5bXAtdXRpbHMnO1xuaW1wb3J0IEdyaWQgZnJvbSAnLi9ncmlkJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInO1xuXG5leHBvcnQgY29uc3QgY2xvdWRpbmFyeVVybCA9ICh2YWx1ZSwgb3B0aW9ucywgcmVzcG9uc2l2ZVNpemUpID0+IHtcbiAgY29uc3QgbmV3T3B0aW9ucyA9IHtcbiAgICBjOiAnZmlsbCcsXG4gICAgZjogJ2F1dG8nLFxuICAgIHE6ICdhdXRvOmVjbycsXG4gICAgZmw6ICdsb3NzeScsXG4gICAgZHByOiAyLFxuICAgIC4uLm9wdGlvbnMsXG4gIH07XG5cbiAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUudXJsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3QgbmV3VXJsID1cbiAgICB2YWx1ZS51cmwuaW5kZXhPZignaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS8nKSA9PT0gMFxuICAgICAgPyBgaHR0cHMke3ZhbHVlLnVybC5zdWJzdHIoNCl9YFxuICAgICAgOiB2YWx1ZS51cmw7XG5cbiAgY29uc3QgY3JvcCA9XG4gICAgdmFsdWUuY3JvcCAmJiB2YWx1ZS5jcm9wLmxlbmd0aFxuICAgICAgPyBgd18ke3ZhbHVlLmNyb3BbMF19LGhfJHt2YWx1ZS5jcm9wWzFdfSx4XyR7dmFsdWUuY3JvcFsyXX0seV8ke3ZhbHVlXG4gICAgICAgICAgLmNyb3BbM119LGNfY3JvcC9gXG4gICAgICA6ICcnO1xuXG4gIGlmIChyZXNwb25zaXZlU2l6ZSkge1xuICAgIG5ld09wdGlvbnMudyA9IHJlc3BvbnNpdmVTaXplLndpZHRoO1xuICAgIG5ld09wdGlvbnMuaCA9IHJlc3BvbnNpdmVTaXplLmhlaWdodDtcbiAgfVxuXG4gIGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmtleXMobmV3T3B0aW9ucylcbiAgICAubWFwKGtleSA9PiBgJHtrZXl9XyR7bmV3T3B0aW9uc1trZXldfWApXG4gICAgLmpvaW4oJywnKTtcblxuICBpZiAobmV3VXJsLmluZGV4T2YoJy91cGxvYWQvJykgIT09IC0xKSB7XG4gICAgcmV0dXJuIG5ld1VybC5yZXBsYWNlKCcvdXBsb2FkLycsIGAvdXBsb2FkLyR7Y3JvcH0ke3F1ZXJ5fS9gKTtcbiAgfSBlbHNlIGlmIChuZXdVcmwuaW5kZXhPZignL2ZldGNoLycpICE9PSAtMSkge1xuICAgIHJldHVybiBuZXdVcmwucmVwbGFjZSgnL2ZldGNoLycsIGAvZmV0Y2gvJHtjcm9wfSR7cXVlcnl9L2ApO1xuICB9XG59O1xuXG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICB3aXRoQW1wLFxuICB3aXRoU3RhdGUoJ2NXaWR0aCcsICdzZXRDV2lkdGgnLCB1bmRlZmluZWQpLFxuICB3aXRoU3RhdGUoJ2lzTG9hZGVkJywgJ3NldElzTG9hZGVkJywgZmFsc2UpLFxuICB3aXRoU3RhdGUoJ3Jlc3BvbnNpdmVTaXplJywgJ3NldFJlc3BvbnNpdmVTaXplJywge30pLFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ3ZhbHVlJywgJ29wdGlvbnMnLCAncmVzcG9uc2l2ZVNpemUnXSwgKHsgdmFsdWUsIG9wdGlvbnMsIHJlc3BvbnNpdmVTaXplIH0pID0+ICh7XG4gICAgdXJsOiBjbG91ZGluYXJ5VXJsKHZhbHVlLCBvcHRpb25zLCByZXNwb25zaXZlU2l6ZSksXG4gIH0pKSxcbik7XG5cbkBlbmhhbmNlXG5jbGFzcyBJbWFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIGlmICh0aGlzLm5vZGUpIHtcbiAgICAgIHRoaXMub25SZXNpemUodGhpcy5ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSA9ICh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICAgIGNvbnN0IHsgc2V0UmVzcG9uc2l2ZVNpemUgfSA9IHRoaXMucHJvcHM7XG4gICAgc2V0UmVzcG9uc2l2ZVNpemUoeyB3aWR0aDogTWF0aC5mbG9vcih3aWR0aCksIGhlaWdodDogTWF0aC5mbG9vcihoZWlnaHQpIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB1cmwsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19PlxuICAgICAgICA8aW1nIHNyYz17dXJsfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCJhdXRvXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgSXRlbSA9IGNyZWF0ZUNvbXBvbmVudCgoeyBpbWFnZSwgdGhlbWUsIGluZGV4LCBkZWcgfSkgPT4gKHtcbiAgYW5pbWF0aW9uTmFtZToge1xuICAgIGZyb206IHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC02MHB4KScsXG4gICAgfSxcbiAgICB0bzoge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMHB4KScsXG4gICAgfSxcbiAgfSxcbiAgYW5pbWF0aW9uRGVsYXk6IGAke2luZGV4ICogNTAgKiAyfW1zYCxcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGFuaW1hdGlvbkR1cmF0aW9uOiAnMS41cycsXG4gIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKScsXG4gIGFuaW1hdGlvbkZpbGxNb2RlOiAnYm90aCcsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAvLyBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIGhlaWdodDogMjYwLFxuICAnPiBhJzoge1xuICAgIG9uSG92ZXI6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMDMsIDEuMDMpJyxcbiAgICAgIGJveFNoYWRvdzogJzAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE1KScsXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNnMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKScsXG4gICAgY29sb3I6IHRoZW1lLmRhcmsxLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYm94U2hhZG93OiAncmdiYSgwLCAwLCAwLCAwLjAwNSkgMXB4IDFweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDFweCAzcHgnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDMwLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIC8vIGJhY2tncm91bmRDb2xvcjogJyM4MDgwODAwZicsXG4gICAgJz4gLmltYWdlJzoge1xuICAgICAgJz4gaW1nJzoge1xuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiA1LFxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogNSxcbiAgICAgIH0sXG4gICAgICBmbGV4OiAxLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgICc+IC5pbm5lcic6IHtcbiAgICAgICc+IC50YWdzJzoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAtMTIsXG4gICAgICAgICc+IHNwYW4nOiB7XG4gICAgICAgICAgcGFkZGluZzogMyxcbiAgICAgICAgICBwYWRkaW5nTGVmdDogNyxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDcsXG4gICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgICAgICAgIGZvbnRTaXplOiAxMCxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuMDMpIDFweCAxcHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDMpIDBweCAxcHggMXB4JyxcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICBtYXJnaW5SaWdodDogNCxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICc+IGgzJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JTZWNvbmRhcnksXG4gICAgICAgIG1hcmdpblRvcDogJzAuM2VtJyxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMGVtJyxcbiAgICAgIH0sXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3IsXG4gICAgICBwYWRkaW5nOiAxMCxcbiAgICAgIC8vIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCAjNzA2MjY5JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgfSxcbiAgZXh0ZW5kczogaW1hZ2UuaGVpZ2h0ID4gaW1hZ2Uud2lkdGggPyB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICc+IC5pbWFnZSc6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6IDIyMCxcbiAgICB9LFxuICAgICc+IC5pbm5lcic6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBmbGV4OiAxLFxuICAgIH1cbiAgfSA6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgJz4gLmltYWdlJzoge1xuICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgJz4gLmlubmVyJzoge1xuICAgICAgZmxleDogMSxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfVxuICB9LFxufSksICh7IGltYWdlLCBuYW1lLCBjbGFzc05hbWUsIGlkLCBzaXplIH0pID0+IChcbiAgPEdyaWQuSXRlbSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gbWVkaXVtPXtzaXplfSBwYWRkaW5nPXsxMH0+XG4gICAgPExpbmsgdG89e2AvJHtpZH1gfT5cbiAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpbWFnZVwiIHZhbHVlPXtpbWFnZX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCI+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7Lyo8TG9nbyBpY29uPXsxMH0gLz4mbmJzcDsgT3J0aG8gKi99XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlRlYW0yPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgzPntuYW1lfTwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gIDwvR3JpZC5JdGVtPlxuKSwgcCA9PiBPYmplY3Qua2V5cyhwKSlcblxuZXhwb3J0IGRlZmF1bHQgKHsgaXRlbXMsIGF0dHJpYnV0ZXMgPSB7fSwgY2xhc3NOYW1lLCBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGNoaWxkcyA9IFtdO1xuICBpdGVtcy5maWx0ZXIoeCA9PiB4LmltYWdlKS5yZWR1Y2UoKGNvdW50LCBpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmIChjb3VudCA+PSAyNCkge1xuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbiAgICBjb25zdCBzaXplID0gaXRlbS5pbWFnZS5oZWlnaHQgPiBpdGVtLmltYWdlLndpZHRoID8gMiA6IDQ7XG4gICAgY2hpbGRzLnB1c2goPEl0ZW0gey4uLml0ZW19IGluZGV4PXtpbmRleH0gaW1hZ2U9e2l0ZW0uaW1hZ2V9IGtleT17aXRlbS5pZH0gc2l6ZT17c2l6ZX0gLz4pO1xuICAgIHJldHVybiBjb3VudCArIHNpemU7XG4gIH0sIDApO1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8R3JpZCB7Li4uYXR0cmlidXRlc30gY2xhc3NOYW1lPXtjbGFzc05hbWV9IHNpemU9ezEyfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7Y2hpbGRzfVxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59O1xuIl19
