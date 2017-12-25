var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { compose, withPropsOnChange, withState, withProps, getContext } from 'recompose';
import Container from './container';
import Placeholder from './placeholder';
import Img from './img';
import Amp from './amp';

var initVals = function initVals(_ref) {
  var width = _ref.width,
      height = _ref.height,
      maxResolution = _ref.maxResolution,
      ratio = _ref.ratio;

  var isPercentage = false;
  var originalWidth = width;
  var originalHeight = height;

  if (!ratio) {
    ratio = 0.75;
  }

  // width = percent
  if (typeof width === 'string') {
    width = undefined;
    isPercentage = true;
  }

  // if height is set
  if (height) {
    if (width) {
      ratio = height / width;
    } else {
      width = height / ratio;
    }
  }

  // max size, if no size is set
  if (!width && !height) {
    width = Math.sqrt(maxResolution / ratio);
  }

  return {
    originalWidth: originalWidth,
    originalHeight: originalHeight,
    width: width,
    ratio: ratio,
    isPercentage: isPercentage
  };
};

var limitWidth = function limitWidth(_ref2) {
  var width = _ref2.width,
      ratio = _ref2.ratio,
      isPercentage = _ref2.isPercentage,
      minWidth = _ref2.minWidth,
      minHeight = _ref2.minHeight,
      maxWidth = _ref2.maxWidth,
      maxHeight = _ref2.maxHeight,
      maxResolution = _ref2.maxResolution,
      cWidth = _ref2.cWidth;

  // minWidth/minHeight
  if (minWidth && width < minWidth) {
    width = minWidth;
  }
  if (!isPercentage && minHeight && width * ratio < minHeight) {
    width = minHeight / ratio;
  }

  // maxWidth/maxHeight
  if (maxWidth && width > maxWidth) {
    width = maxWidth;
  }
  if (!isPercentage && maxHeight && width * ratio > maxHeight) {
    width = maxHeight / ratio;
  }

  // maxResolution
  if (Math.pow(width, 2) * ratio > maxResolution) {
    width = Math.sqrt(maxResolution / ratio);
  }

  // Container-size
  if (width > cWidth) {
    width = cWidth;
  }

  return Math.round(width);
};

var getMode = function getMode(props) {
  var mode = props.mode,
      ratio = props.ratio,
      srcRatio = props.srcRatio;

  var w = limitWidth(props);

  var defaultResult = {
    layout: 'fill',
    w: w,
    h: Math.round(w * ratio)
  };

  switch (mode) {
    case 'filled':
      // kleinere Seite 100%
      return defaultResult;

    case 'padded':
      // größere Seite 100%
      return {
        layout: 'fixed-height',
        w: w,
        h: Math.round(w * (srcRatio || ratio))
      };

    default:
      return defaultResult;
  }
};

var enhance = compose(getContext({
  amp: PropTypes.bool
}), withState('cWidth', 'setCWidth', undefined), withState('isLoaded', 'setIsLoaded', false), withPropsOnChange(['width', 'height', 'maxResolution', 'ratio'], function (props) {
  return initVals(props);
}), withPropsOnChange(['mode', 'ratio', 'srcRatio', 'cWidth'], function (props) {
  return getMode(props);
}), withProps(function (_ref3) {
  var src = _ref3.src,
      w = _ref3.w,
      h = _ref3.h;
  return {
    url: typeof src === 'function' ? src(w, h) : src,
    lowUrl: typeof src === 'function' ? src(10, 10) : src
  };
}));

var _ref5 = React.createElement('div', null);

var Image = enhance(_class = function (_Component) {
  _inherits(Image, _Component);

  function Image() {
    var _ref4;

    var _temp, _this, _ret;

    _classCallCheck(this, Image);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref4, [this].concat(args))), _this), _this.onResize = function (width) {
      var setCWidth = _this.props.setCWidth;

      setCWidth(width);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Image, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.node = ReactDOM.findDOMNode(this);
      if (this.node) {
        this.onResize(this.node.getBoundingClientRect().width);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          lazy = _props.lazy,
          mode = _props.mode,
          amp = _props.amp,
          src = _props.src,
          srcSet = _props.srcSet,
          alt = _props.alt,
          onClick = _props.onClick,
          circle = _props.circle,
          children = _props.children,
          attributes = _props.attributes,
          width = _props.width,
          ratio = _props.ratio,
          isPercentage = _props.isPercentage,
          layout = _props.layout,
          w = _props.w,
          h = _props.h,
          url = _props.url,
          lowUrl = _props.lowUrl,
          originalWidth = _props.originalWidth,
          originalHeight = _props.originalHeight,
          cWidth = _props.cWidth,
          setCWidth = _props.setCWidth,
          isLoaded = _props.isLoaded,
          setIsLoaded = _props.setIsLoaded,
          containerProps = _objectWithoutProperties(_props, ['className', 'lazy', 'mode', 'amp', 'src', 'srcSet', 'alt', 'onClick', 'circle', 'children', 'attributes', 'width', 'ratio', 'isPercentage', 'layout', 'w', 'h', 'url', 'lowUrl', 'originalWidth', 'originalHeight', 'cWidth', 'setCWidth', 'isLoaded', 'setIsLoaded']);

      if (!w) {
        return _ref5;
      }

      var image = url ? React.createElement(Img, {
        src: url,
        srcSet: srcSet,
        alt: alt,
        width: w >= h ? '100%' : 'auto',
        height: w < h ? '100%' : 'auto',
        circle: circle
        // onLoad={() => setIsLoaded(true)}
      }) : React.createElement(Placeholder, { height: '100%', width: '100%', circle: circle });
      return React.createElement(
        Container,
        _extends({}, containerProps, {
          attributes: attributes,
          className: className,
          width: isPercentage ? originalWidth : w,
          ratio: ratio,
          onClick: onClick
        }),
        !isLoaded && null
        // <Placeholder height="100%" width="100%" circle={circle} />
        ,
        amp && image ? React.createElement(
          Amp,
          { layout: layout, src: url, alt: alt, width: w, height: h },
          image
        ) : image,
        children
      );
    }
  }]);

  return Image;
}(Component)) || _class;

Image.displayName = 'Image';
Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  ratio: PropTypes.number.isRequired,
  srcRatio: PropTypes.number.isRequired,
  mode: PropTypes.oneOf(['filled', 'padded']),
  circle: PropTypes.bool,

  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,

  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  maxResolution: PropTypes.number,

  lazy: PropTypes.bool,
  alt: PropTypes.string,
  onClick: PropTypes.func
};
Image.defaultProps = {
  src: undefined,
  // ratio: 0.75,
  // srcRatio: 0.75,
  mode: 'filled',
  circle: false,

  width: undefined,
  height: undefined,

  minWidth: undefined,
  minHeight: undefined,
  maxWidth: undefined,
  maxHeight: undefined,
  maxResolution: 111000, // 333*333px

  lazy: true,
  alt: '',
  onClick: undefined
};
Image.Placeholder = Placeholder;
export default Image;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvaW1hZ2UvaW1hZ2UuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJQcm9wVHlwZXMiLCJjb21wb3NlIiwid2l0aFByb3BzT25DaGFuZ2UiLCJ3aXRoU3RhdGUiLCJ3aXRoUHJvcHMiLCJnZXRDb250ZXh0IiwiQ29udGFpbmVyIiwiUGxhY2Vob2xkZXIiLCJJbWciLCJBbXAiLCJpbml0VmFscyIsIndpZHRoIiwiaGVpZ2h0IiwibWF4UmVzb2x1dGlvbiIsInJhdGlvIiwiaXNQZXJjZW50YWdlIiwib3JpZ2luYWxXaWR0aCIsIm9yaWdpbmFsSGVpZ2h0IiwidW5kZWZpbmVkIiwiTWF0aCIsInNxcnQiLCJsaW1pdFdpZHRoIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImNXaWR0aCIsInJvdW5kIiwiZ2V0TW9kZSIsIm1vZGUiLCJwcm9wcyIsInNyY1JhdGlvIiwidyIsImRlZmF1bHRSZXN1bHQiLCJsYXlvdXQiLCJoIiwiZW5oYW5jZSIsImFtcCIsImJvb2wiLCJzcmMiLCJ1cmwiLCJsb3dVcmwiLCJJbWFnZSIsIm9uUmVzaXplIiwic2V0Q1dpZHRoIiwibm9kZSIsImZpbmRET01Ob2RlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xhc3NOYW1lIiwibGF6eSIsInNyY1NldCIsImFsdCIsIm9uQ2xpY2siLCJjaXJjbGUiLCJjaGlsZHJlbiIsImF0dHJpYnV0ZXMiLCJpc0xvYWRlZCIsInNldElzTG9hZGVkIiwiY29udGFpbmVyUHJvcHMiLCJpbWFnZSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiZnVuYyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztB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QUFNLFFBSmE7QUFLbkJ3QixVQUFRLEtBTFc7O0FBT25CMUMsU0FBT08sU0FQWTtBQVFuQk4sVUFBUU0sU0FSVzs7QUFVbkJJLFlBQVVKLFNBVlM7QUFXbkJLLGFBQVdMLFNBWFE7QUFZbkJNLFlBQVVOLFNBWlM7QUFhbkJPLGFBQVdQLFNBYlE7QUFjbkJMLGlCQUFlLE1BZEksRUFjSTs7QUFFdkJvQyxRQUFNLElBaEJhO0FBaUJuQkUsT0FBSyxFQWpCYztBQWtCbkJDLFdBQVNsQztBQWxCVSxDQUFyQjtBQW9CQXdCLE1BQU1uQyxXQUFOLEdBQW9CQSxXQUFwQjtBQUNBLGVBQWVtQyxLQUFmIiwiZmlsZSI6ImV4dGVybmFsL2ZlbGEvaW1hZ2UvaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFByb3BzT25DaGFuZ2UsIHdpdGhTdGF0ZSwgd2l0aFByb3BzLCBnZXRDb250ZXh0IH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInO1xuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gJy4vcGxhY2Vob2xkZXInO1xuaW1wb3J0IEltZyBmcm9tICcuL2ltZyc7XG5pbXBvcnQgQW1wIGZyb20gJy4vYW1wJztcblxuY29uc3QgaW5pdFZhbHMgPSAoeyB3aWR0aCwgaGVpZ2h0LCBtYXhSZXNvbHV0aW9uLCByYXRpbyB9KSA9PiB7XG4gIGxldCBpc1BlcmNlbnRhZ2UgPSBmYWxzZTtcbiAgY29uc3Qgb3JpZ2luYWxXaWR0aCA9IHdpZHRoO1xuICBjb25zdCBvcmlnaW5hbEhlaWdodCA9IGhlaWdodDtcblxuICBpZiAoIXJhdGlvKSB7XG4gICAgcmF0aW8gPSAwLjc1O1xuICB9XG5cbiAgLy8gd2lkdGggPSBwZXJjZW50XG4gIGlmICh0eXBlb2Ygd2lkdGggPT09ICdzdHJpbmcnKSB7XG4gICAgd2lkdGggPSB1bmRlZmluZWQ7XG4gICAgaXNQZXJjZW50YWdlID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIGlmIGhlaWdodCBpcyBzZXRcbiAgaWYgKGhlaWdodCkge1xuICAgIGlmICh3aWR0aCkge1xuICAgICAgcmF0aW8gPSBoZWlnaHQgLyB3aWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgd2lkdGggPSBoZWlnaHQgLyByYXRpbztcbiAgICB9XG4gIH1cblxuICAvLyBtYXggc2l6ZSwgaWYgbm8gc2l6ZSBpcyBzZXRcbiAgaWYgKCF3aWR0aCAmJiAhaGVpZ2h0KSB7XG4gICAgd2lkdGggPSBNYXRoLnNxcnQobWF4UmVzb2x1dGlvbiAvIHJhdGlvKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb3JpZ2luYWxXaWR0aCxcbiAgICBvcmlnaW5hbEhlaWdodCxcbiAgICB3aWR0aCxcbiAgICByYXRpbyxcbiAgICBpc1BlcmNlbnRhZ2UsXG4gIH07XG59O1xuXG5jb25zdCBsaW1pdFdpZHRoID0gKHtcbiAgd2lkdGgsXG4gIHJhdGlvLFxuICBpc1BlcmNlbnRhZ2UsXG4gIG1pbldpZHRoLFxuICBtaW5IZWlnaHQsXG4gIG1heFdpZHRoLFxuICBtYXhIZWlnaHQsXG4gIG1heFJlc29sdXRpb24sXG4gIGNXaWR0aCxcbn0pID0+IHtcbiAgLy8gbWluV2lkdGgvbWluSGVpZ2h0XG4gIGlmIChtaW5XaWR0aCAmJiB3aWR0aCA8IG1pbldpZHRoKSB7XG4gICAgd2lkdGggPSBtaW5XaWR0aDtcbiAgfVxuICBpZiAoIWlzUGVyY2VudGFnZSAmJiBtaW5IZWlnaHQgJiYgd2lkdGggKiByYXRpbyA8IG1pbkhlaWdodCkge1xuICAgIHdpZHRoID0gbWluSGVpZ2h0IC8gcmF0aW87XG4gIH1cblxuICAvLyBtYXhXaWR0aC9tYXhIZWlnaHRcbiAgaWYgKG1heFdpZHRoICYmIHdpZHRoID4gbWF4V2lkdGgpIHtcbiAgICB3aWR0aCA9IG1heFdpZHRoO1xuICB9XG4gIGlmICghaXNQZXJjZW50YWdlICYmIG1heEhlaWdodCAmJiB3aWR0aCAqIHJhdGlvID4gbWF4SGVpZ2h0KSB7XG4gICAgd2lkdGggPSBtYXhIZWlnaHQgLyByYXRpbztcbiAgfVxuXG4gIC8vIG1heFJlc29sdXRpb25cbiAgaWYgKHdpZHRoICoqIDIgKiByYXRpbyA+IG1heFJlc29sdXRpb24pIHtcbiAgICB3aWR0aCA9IE1hdGguc3FydChtYXhSZXNvbHV0aW9uIC8gcmF0aW8pO1xuICB9XG5cbiAgLy8gQ29udGFpbmVyLXNpemVcbiAgaWYgKHdpZHRoID4gY1dpZHRoKSB7XG4gICAgd2lkdGggPSBjV2lkdGg7XG4gIH1cblxuICByZXR1cm4gTWF0aC5yb3VuZCh3aWR0aCk7XG59O1xuXG5jb25zdCBnZXRNb2RlID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IG1vZGUsIHJhdGlvLCBzcmNSYXRpbyB9ID0gcHJvcHM7XG4gIGNvbnN0IHcgPSBsaW1pdFdpZHRoKHByb3BzKTtcblxuICBjb25zdCBkZWZhdWx0UmVzdWx0ID0ge1xuICAgIGxheW91dDogJ2ZpbGwnLFxuICAgIHcsXG4gICAgaDogTWF0aC5yb3VuZCh3ICogcmF0aW8pLFxuICB9O1xuXG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgJ2ZpbGxlZCc6XG4gICAgICAvLyBrbGVpbmVyZSBTZWl0ZSAxMDAlXG4gICAgICByZXR1cm4gZGVmYXVsdFJlc3VsdDtcblxuICAgIGNhc2UgJ3BhZGRlZCc6XG4gICAgICAvLyBncsO2w59lcmUgU2VpdGUgMTAwJVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGF5b3V0OiAnZml4ZWQtaGVpZ2h0JyxcbiAgICAgICAgdyxcbiAgICAgICAgaDogTWF0aC5yb3VuZCh3ICogKHNyY1JhdGlvIHx8IHJhdGlvKSksXG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkZWZhdWx0UmVzdWx0O1xuICB9XG59O1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgZ2V0Q29udGV4dCh7XG4gICAgYW1wOiBQcm9wVHlwZXMuYm9vbCxcbiAgfSksXG4gIHdpdGhTdGF0ZSgnY1dpZHRoJywgJ3NldENXaWR0aCcsIHVuZGVmaW5lZCksXG4gIHdpdGhTdGF0ZSgnaXNMb2FkZWQnLCAnc2V0SXNMb2FkZWQnLCBmYWxzZSksXG4gIHdpdGhQcm9wc09uQ2hhbmdlKFsnd2lkdGgnLCAnaGVpZ2h0JywgJ21heFJlc29sdXRpb24nLCAncmF0aW8nXSwgcHJvcHMgPT5cbiAgICBpbml0VmFscyhwcm9wcyksXG4gICksXG4gIHdpdGhQcm9wc09uQ2hhbmdlKFsnbW9kZScsICdyYXRpbycsICdzcmNSYXRpbycsICdjV2lkdGgnXSwgcHJvcHMgPT5cbiAgICBnZXRNb2RlKHByb3BzKSxcbiAgKSxcbiAgd2l0aFByb3BzKCh7IHNyYywgdywgaCB9KSA9PiAoe1xuICAgIHVybDogdHlwZW9mIHNyYyA9PT0gJ2Z1bmN0aW9uJyA/IHNyYyh3LCBoKSA6IHNyYyxcbiAgICBsb3dVcmw6IHR5cGVvZiBzcmMgPT09ICdmdW5jdGlvbicgPyBzcmMoMTAsIDEwKSA6IHNyYyxcbiAgfSkpLFxuKTtcblxuQGVuaGFuY2VcbmNsYXNzIEltYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5ub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgaWYgKHRoaXMubm9kZSkge1xuICAgICAgdGhpcy5vblJlc2l6ZSh0aGlzLm5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVzaXplID0gd2lkdGggPT4ge1xuICAgIGNvbnN0IHsgc2V0Q1dpZHRoIH0gPSB0aGlzLnByb3BzO1xuICAgIHNldENXaWR0aCh3aWR0aCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGxhenksXG4gICAgICBtb2RlLFxuICAgICAgYW1wLFxuICAgICAgc3JjLFxuICAgICAgc3JjU2V0LFxuICAgICAgYWx0LFxuICAgICAgb25DbGljayxcbiAgICAgIGNpcmNsZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyxcbiAgICAgIHdpZHRoLFxuICAgICAgcmF0aW8sXG4gICAgICBpc1BlcmNlbnRhZ2UsXG4gICAgICBsYXlvdXQsXG4gICAgICB3LFxuICAgICAgaCxcbiAgICAgIHVybCxcbiAgICAgIGxvd1VybCxcbiAgICAgIG9yaWdpbmFsV2lkdGgsXG4gICAgICBvcmlnaW5hbEhlaWdodCxcbiAgICAgIGNXaWR0aCxcbiAgICAgIHNldENXaWR0aCxcbiAgICAgIGlzTG9hZGVkLFxuICAgICAgc2V0SXNMb2FkZWQsXG4gICAgICAuLi5jb250YWluZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCF3KSB7XG4gICAgICByZXR1cm4gPGRpdiAvPjtcbiAgICB9XG5cbiAgICBjb25zdCBpbWFnZSA9IHVybCA/IChcbiAgICAgIDxJbWdcbiAgICAgICAgc3JjPXt1cmx9XG4gICAgICAgIHNyY1NldD17c3JjU2V0fVxuICAgICAgICBhbHQ9e2FsdH1cbiAgICAgICAgd2lkdGg9e3cgPj0gaCA/ICcxMDAlJyA6ICdhdXRvJ31cbiAgICAgICAgaGVpZ2h0PXt3IDwgaCA/ICcxMDAlJyA6ICdhdXRvJ31cbiAgICAgICAgY2lyY2xlPXtjaXJjbGV9XG4gICAgICAgIC8vIG9uTG9hZD17KCkgPT4gc2V0SXNMb2FkZWQodHJ1ZSl9XG4gICAgICAvPlxuICAgICkgOiAoXG4gICAgICA8UGxhY2Vob2xkZXIgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIGNpcmNsZT17Y2lyY2xlfSAvPlxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgey4uLmNvbnRhaW5lclByb3BzfVxuICAgICAgICBhdHRyaWJ1dGVzPXthdHRyaWJ1dGVzfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgd2lkdGg9e2lzUGVyY2VudGFnZSA/IG9yaWdpbmFsV2lkdGggOiB3fVxuICAgICAgICByYXRpbz17cmF0aW99XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICA+XG4gICAgICAgIHshaXNMb2FkZWQgJiZcbiAgICAgICAgICBudWxsXG4gICAgICAgICAgLy8gPFBsYWNlaG9sZGVyIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiBjaXJjbGU9e2NpcmNsZX0gLz5cbiAgICAgICAgfVxuICAgICAgICB7YW1wICYmIGltYWdlID8gKFxuICAgICAgICAgIDxBbXAgbGF5b3V0PXtsYXlvdXR9IHNyYz17dXJsfSBhbHQ9e2FsdH0gd2lkdGg9e3d9IGhlaWdodD17aH0+XG4gICAgICAgICAgICB7aW1hZ2V9XG4gICAgICAgICAgPC9BbXA+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgaW1hZ2VcbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuSW1hZ2UuZGlzcGxheU5hbWUgPSAnSW1hZ2UnO1xuSW1hZ2UucHJvcFR5cGVzID0ge1xuICBzcmM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gIHJhdGlvOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHNyY1JhdGlvOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG1vZGU6IFByb3BUeXBlcy5vbmVPZihbJ2ZpbGxlZCcsICdwYWRkZWQnXSksXG4gIGNpcmNsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIG1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtaW5IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1heFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXhIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1heFJlc29sdXRpb246IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgbGF6eTogUHJvcFR5cGVzLmJvb2wsXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG59O1xuSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xuICBzcmM6IHVuZGVmaW5lZCxcbiAgLy8gcmF0aW86IDAuNzUsXG4gIC8vIHNyY1JhdGlvOiAwLjc1LFxuICBtb2RlOiAnZmlsbGVkJyxcbiAgY2lyY2xlOiBmYWxzZSxcblxuICB3aWR0aDogdW5kZWZpbmVkLFxuICBoZWlnaHQ6IHVuZGVmaW5lZCxcblxuICBtaW5XaWR0aDogdW5kZWZpbmVkLFxuICBtaW5IZWlnaHQ6IHVuZGVmaW5lZCxcbiAgbWF4V2lkdGg6IHVuZGVmaW5lZCxcbiAgbWF4SGVpZ2h0OiB1bmRlZmluZWQsXG4gIG1heFJlc29sdXRpb246IDExMTAwMCwgLy8gMzMzKjMzM3B4XG5cbiAgbGF6eTogdHJ1ZSxcbiAgYWx0OiAnJyxcbiAgb25DbGljazogdW5kZWZpbmVkLFxufTtcbkltYWdlLlBsYWNlaG9sZGVyID0gUGxhY2Vob2xkZXI7XG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcbiJdfQ==
