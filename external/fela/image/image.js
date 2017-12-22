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
import { compose, withPropsOnChange, withState, withProps } from 'recompose';
import { withAmp } from 'olymp-utils';
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

var enhance = compose(withAmp, withState('cWidth', 'setCWidth', undefined), withState('isLoaded', 'setIsLoaded', false), withPropsOnChange(['width', 'height', 'maxResolution', 'ratio'], function (props) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvaW1hZ2UvaW1hZ2UuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJQcm9wVHlwZXMiLCJjb21wb3NlIiwid2l0aFByb3BzT25DaGFuZ2UiLCJ3aXRoU3RhdGUiLCJ3aXRoUHJvcHMiLCJ3aXRoQW1wIiwiQ29udGFpbmVyIiwiUGxhY2Vob2xkZXIiLCJJbWciLCJBbXAiLCJpbml0VmFscyIsIndpZHRoIiwiaGVpZ2h0IiwibWF4UmVzb2x1dGlvbiIsInJhdGlvIiwiaXNQZXJjZW50YWdlIiwib3JpZ2luYWxXaWR0aCIsIm9yaWdpbmFsSGVpZ2h0IiwidW5kZWZpbmVkIiwiTWF0aCIsInNxcnQiLCJsaW1pdFdpZHRoIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImNXaWR0aCIsInJvdW5kIiwiZ2V0TW9kZSIsIm1vZGUiLCJwcm9wcyIsInNyY1JhdGlvIiwidyIsImRlZmF1bHRSZXN1bHQiLCJsYXlvdXQiLCJoIiwiZW5oYW5jZSIsInNyYyIsInVybCIsImxvd1VybCIsIkltYWdlIiwib25SZXNpemUiLCJzZXRDV2lkdGgiLCJub2RlIiwiZmluZERPTU5vZGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGFzc05hbWUiLCJsYXp5IiwiYW1wIiwic3JjU2V0IiwiYWx0Iiwib25DbGljayIsImNpcmNsZSIsImNoaWxkcmVuIiwiYXR0cmlidXRlcyIsImlzTG9hZGVkIiwic2V0SXNMb2FkZWQiLCJjb250YWluZXJQcm9wcyIsImltYWdlIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJmdW5jIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsIm9uZU9mIiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNB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Vzs7QUFPbkJ6QyxTQUFPTyxTQVBZO0FBUW5CTixVQUFRTSxTQVJXOztBQVVuQkksWUFBVUosU0FWUztBQVduQkssYUFBV0wsU0FYUTtBQVluQk0sWUFBVU4sU0FaUztBQWFuQk8sYUFBV1AsU0FiUTtBQWNuQkwsaUJBQWUsTUFkSSxFQWNJOztBQUV2QmtDLFFBQU0sSUFoQmE7QUFpQm5CRyxPQUFLLEVBakJjO0FBa0JuQkMsV0FBU2pDO0FBbEJVLENBQXJCO0FBb0JBc0IsTUFBTWpDLFdBQU4sR0FBb0JBLFdBQXBCO0FBQ0EsZUFBZWlDLEtBQWYiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9pbWFnZS9pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoUHJvcHNPbkNoYW5nZSwgd2l0aFN0YXRlLCB3aXRoUHJvcHMgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgd2l0aEFtcCB9IGZyb20gJ29seW1wLXV0aWxzJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInO1xuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gJy4vcGxhY2Vob2xkZXInO1xuaW1wb3J0IEltZyBmcm9tICcuL2ltZyc7XG5pbXBvcnQgQW1wIGZyb20gJy4vYW1wJztcblxuY29uc3QgaW5pdFZhbHMgPSAoeyB3aWR0aCwgaGVpZ2h0LCBtYXhSZXNvbHV0aW9uLCByYXRpbyB9KSA9PiB7XG4gIGxldCBpc1BlcmNlbnRhZ2UgPSBmYWxzZTtcbiAgY29uc3Qgb3JpZ2luYWxXaWR0aCA9IHdpZHRoO1xuICBjb25zdCBvcmlnaW5hbEhlaWdodCA9IGhlaWdodDtcblxuICBpZiAoIXJhdGlvKSB7XG4gICAgcmF0aW8gPSAwLjc1O1xuICB9XG5cbiAgLy8gd2lkdGggPSBwZXJjZW50XG4gIGlmICh0eXBlb2Ygd2lkdGggPT09ICdzdHJpbmcnKSB7XG4gICAgd2lkdGggPSB1bmRlZmluZWQ7XG4gICAgaXNQZXJjZW50YWdlID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIGlmIGhlaWdodCBpcyBzZXRcbiAgaWYgKGhlaWdodCkge1xuICAgIGlmICh3aWR0aCkge1xuICAgICAgcmF0aW8gPSBoZWlnaHQgLyB3aWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgd2lkdGggPSBoZWlnaHQgLyByYXRpbztcbiAgICB9XG4gIH1cblxuICAvLyBtYXggc2l6ZSwgaWYgbm8gc2l6ZSBpcyBzZXRcbiAgaWYgKCF3aWR0aCAmJiAhaGVpZ2h0KSB7XG4gICAgd2lkdGggPSBNYXRoLnNxcnQobWF4UmVzb2x1dGlvbiAvIHJhdGlvKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb3JpZ2luYWxXaWR0aCxcbiAgICBvcmlnaW5hbEhlaWdodCxcbiAgICB3aWR0aCxcbiAgICByYXRpbyxcbiAgICBpc1BlcmNlbnRhZ2UsXG4gIH07XG59O1xuXG5jb25zdCBsaW1pdFdpZHRoID0gKHtcbiAgd2lkdGgsXG4gIHJhdGlvLFxuICBpc1BlcmNlbnRhZ2UsXG4gIG1pbldpZHRoLFxuICBtaW5IZWlnaHQsXG4gIG1heFdpZHRoLFxuICBtYXhIZWlnaHQsXG4gIG1heFJlc29sdXRpb24sXG4gIGNXaWR0aCxcbn0pID0+IHtcbiAgLy8gbWluV2lkdGgvbWluSGVpZ2h0XG4gIGlmIChtaW5XaWR0aCAmJiB3aWR0aCA8IG1pbldpZHRoKSB7XG4gICAgd2lkdGggPSBtaW5XaWR0aDtcbiAgfVxuICBpZiAoIWlzUGVyY2VudGFnZSAmJiBtaW5IZWlnaHQgJiYgd2lkdGggKiByYXRpbyA8IG1pbkhlaWdodCkge1xuICAgIHdpZHRoID0gbWluSGVpZ2h0IC8gcmF0aW87XG4gIH1cblxuICAvLyBtYXhXaWR0aC9tYXhIZWlnaHRcbiAgaWYgKG1heFdpZHRoICYmIHdpZHRoID4gbWF4V2lkdGgpIHtcbiAgICB3aWR0aCA9IG1heFdpZHRoO1xuICB9XG4gIGlmICghaXNQZXJjZW50YWdlICYmIG1heEhlaWdodCAmJiB3aWR0aCAqIHJhdGlvID4gbWF4SGVpZ2h0KSB7XG4gICAgd2lkdGggPSBtYXhIZWlnaHQgLyByYXRpbztcbiAgfVxuXG4gIC8vIG1heFJlc29sdXRpb25cbiAgaWYgKHdpZHRoICoqIDIgKiByYXRpbyA+IG1heFJlc29sdXRpb24pIHtcbiAgICB3aWR0aCA9IE1hdGguc3FydChtYXhSZXNvbHV0aW9uIC8gcmF0aW8pO1xuICB9XG5cbiAgLy8gQ29udGFpbmVyLXNpemVcbiAgaWYgKHdpZHRoID4gY1dpZHRoKSB7XG4gICAgd2lkdGggPSBjV2lkdGg7XG4gIH1cblxuICByZXR1cm4gTWF0aC5yb3VuZCh3aWR0aCk7XG59O1xuXG5jb25zdCBnZXRNb2RlID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IG1vZGUsIHJhdGlvLCBzcmNSYXRpbyB9ID0gcHJvcHM7XG4gIGNvbnN0IHcgPSBsaW1pdFdpZHRoKHByb3BzKTtcblxuICBjb25zdCBkZWZhdWx0UmVzdWx0ID0ge1xuICAgIGxheW91dDogJ2ZpbGwnLFxuICAgIHcsXG4gICAgaDogTWF0aC5yb3VuZCh3ICogcmF0aW8pLFxuICB9O1xuXG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgJ2ZpbGxlZCc6XG4gICAgICAvLyBrbGVpbmVyZSBTZWl0ZSAxMDAlXG4gICAgICByZXR1cm4gZGVmYXVsdFJlc3VsdDtcblxuICAgIGNhc2UgJ3BhZGRlZCc6XG4gICAgICAvLyBncsO2w59lcmUgU2VpdGUgMTAwJVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGF5b3V0OiAnZml4ZWQtaGVpZ2h0JyxcbiAgICAgICAgdyxcbiAgICAgICAgaDogTWF0aC5yb3VuZCh3ICogKHNyY1JhdGlvIHx8IHJhdGlvKSksXG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkZWZhdWx0UmVzdWx0O1xuICB9XG59O1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aEFtcCxcbiAgd2l0aFN0YXRlKCdjV2lkdGgnLCAnc2V0Q1dpZHRoJywgdW5kZWZpbmVkKSxcbiAgd2l0aFN0YXRlKCdpc0xvYWRlZCcsICdzZXRJc0xvYWRlZCcsIGZhbHNlKSxcbiAgd2l0aFByb3BzT25DaGFuZ2UoWyd3aWR0aCcsICdoZWlnaHQnLCAnbWF4UmVzb2x1dGlvbicsICdyYXRpbyddLCBwcm9wcyA9PlxuICAgIGluaXRWYWxzKHByb3BzKSxcbiAgKSxcbiAgd2l0aFByb3BzT25DaGFuZ2UoWydtb2RlJywgJ3JhdGlvJywgJ3NyY1JhdGlvJywgJ2NXaWR0aCddLCBwcm9wcyA9PlxuICAgIGdldE1vZGUocHJvcHMpLFxuICApLFxuICB3aXRoUHJvcHMoKHsgc3JjLCB3LCBoIH0pID0+ICh7XG4gICAgdXJsOiB0eXBlb2Ygc3JjID09PSAnZnVuY3Rpb24nID8gc3JjKHcsIGgpIDogc3JjLFxuICAgIGxvd1VybDogdHlwZW9mIHNyYyA9PT0gJ2Z1bmN0aW9uJyA/IHNyYygxMCwgMTApIDogc3JjLFxuICB9KSksXG4pO1xuXG5AZW5oYW5jZVxuY2xhc3MgSW1hZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBpZiAodGhpcy5ub2RlKSB7XG4gICAgICB0aGlzLm9uUmVzaXplKHRoaXMubm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCk7XG4gICAgfVxuICB9XG5cbiAgb25SZXNpemUgPSB3aWR0aCA9PiB7XG4gICAgY29uc3QgeyBzZXRDV2lkdGggfSA9IHRoaXMucHJvcHM7XG4gICAgc2V0Q1dpZHRoKHdpZHRoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgbGF6eSxcbiAgICAgIG1vZGUsXG4gICAgICBhbXAsXG4gICAgICBzcmMsXG4gICAgICBzcmNTZXQsXG4gICAgICBhbHQsXG4gICAgICBvbkNsaWNrLFxuICAgICAgY2lyY2xlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzLFxuICAgICAgd2lkdGgsXG4gICAgICByYXRpbyxcbiAgICAgIGlzUGVyY2VudGFnZSxcbiAgICAgIGxheW91dCxcbiAgICAgIHcsXG4gICAgICBoLFxuICAgICAgdXJsLFxuICAgICAgbG93VXJsLFxuICAgICAgb3JpZ2luYWxXaWR0aCxcbiAgICAgIG9yaWdpbmFsSGVpZ2h0LFxuICAgICAgY1dpZHRoLFxuICAgICAgc2V0Q1dpZHRoLFxuICAgICAgaXNMb2FkZWQsXG4gICAgICBzZXRJc0xvYWRlZCxcbiAgICAgIC4uLmNvbnRhaW5lclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXcpIHtcbiAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgIH1cblxuICAgIGNvbnN0IGltYWdlID0gdXJsID8gKFxuICAgICAgPEltZ1xuICAgICAgICBzcmM9e3VybH1cbiAgICAgICAgc3JjU2V0PXtzcmNTZXR9XG4gICAgICAgIGFsdD17YWx0fVxuICAgICAgICB3aWR0aD17dyA+PSBoID8gJzEwMCUnIDogJ2F1dG8nfVxuICAgICAgICBoZWlnaHQ9e3cgPCBoID8gJzEwMCUnIDogJ2F1dG8nfVxuICAgICAgICBjaXJjbGU9e2NpcmNsZX1cbiAgICAgICAgLy8gb25Mb2FkPXsoKSA9PiBzZXRJc0xvYWRlZCh0cnVlKX1cbiAgICAgIC8+XG4gICAgKSA6IChcbiAgICAgIDxQbGFjZWhvbGRlciBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgY2lyY2xlPXtjaXJjbGV9IC8+XG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lclxuICAgICAgICB7Li4uY29udGFpbmVyUHJvcHN9XG4gICAgICAgIGF0dHJpYnV0ZXM9e2F0dHJpYnV0ZXN9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICB3aWR0aD17aXNQZXJjZW50YWdlID8gb3JpZ2luYWxXaWR0aCA6IHd9XG4gICAgICAgIHJhdGlvPXtyYXRpb31cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgID5cbiAgICAgICAgeyFpc0xvYWRlZCAmJlxuICAgICAgICAgIG51bGxcbiAgICAgICAgICAvLyA8UGxhY2Vob2xkZXIgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIGNpcmNsZT17Y2lyY2xlfSAvPlxuICAgICAgICB9XG4gICAgICAgIHthbXAgJiYgaW1hZ2UgPyAoXG4gICAgICAgICAgPEFtcCBsYXlvdXQ9e2xheW91dH0gc3JjPXt1cmx9IGFsdD17YWx0fSB3aWR0aD17d30gaGVpZ2h0PXtofT5cbiAgICAgICAgICAgIHtpbWFnZX1cbiAgICAgICAgICA8L0FtcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBpbWFnZVxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5JbWFnZS5kaXNwbGF5TmFtZSA9ICdJbWFnZSc7XG5JbWFnZS5wcm9wVHlwZXMgPSB7XG4gIHNyYzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgcmF0aW86IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgc3JjUmF0aW86IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbW9kZTogUHJvcFR5cGVzLm9uZU9mKFsnZmlsbGVkJywgJ3BhZGRlZCddKSxcbiAgY2lyY2xlOiBQcm9wVHlwZXMuYm9vbCxcblxuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgbWluV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1pbkhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgbWF4V2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1heEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgbWF4UmVzb2x1dGlvbjogUHJvcFR5cGVzLm51bWJlcixcblxuICBsYXp5OiBQcm9wVHlwZXMuYm9vbCxcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5JbWFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHNyYzogdW5kZWZpbmVkLFxuICAvLyByYXRpbzogMC43NSxcbiAgLy8gc3JjUmF0aW86IDAuNzUsXG4gIG1vZGU6ICdmaWxsZWQnLFxuICBjaXJjbGU6IGZhbHNlLFxuXG4gIHdpZHRoOiB1bmRlZmluZWQsXG4gIGhlaWdodDogdW5kZWZpbmVkLFxuXG4gIG1pbldpZHRoOiB1bmRlZmluZWQsXG4gIG1pbkhlaWdodDogdW5kZWZpbmVkLFxuICBtYXhXaWR0aDogdW5kZWZpbmVkLFxuICBtYXhIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgbWF4UmVzb2x1dGlvbjogMTExMDAwLCAvLyAzMzMqMzMzcHhcblxuICBsYXp5OiB0cnVlLFxuICBhbHQ6ICcnLFxuICBvbkNsaWNrOiB1bmRlZmluZWQsXG59O1xuSW1hZ2UuUGxhY2Vob2xkZXIgPSBQbGFjZWhvbGRlcjtcbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xuIl19
