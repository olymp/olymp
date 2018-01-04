'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./cropper.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* globals document, window */


var EMPTY_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

function getElementOffset(el) {
  var rect = el.getBoundingClientRect();
  var docEl = document.documentElement;

  var rectTop = rect.top + window.pageYOffset - docEl.clientTop;
  var rectLeft = rect.left + window.pageXOffset - docEl.clientLeft;

  return {
    top: rectTop,
    left: rectLeft
  };
}

function getClientPos(e) {
  var pageX = void 0;
  var pageY = void 0;

  if (e.touches) {
    pageX = e.touches[0].pageX;
    pageY = e.touches[0].pageY;
  } else {
    pageX = e.pageX;
    pageY = e.pageY;
  }

  return {
    x: pageX,
    y: pageY
  };
}

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

function isCropValid(crop) {
  return crop && crop.width && crop.height;
}

function inverseOrd(ord) {
  var inversedOrd = void 0;

  if (ord === 'n') inversedOrd = 's';else if (ord === 'ne') inversedOrd = 'sw';else if (ord === 'e') inversedOrd = 'w';else if (ord === 'se') inversedOrd = 'nw';else if (ord === 's') inversedOrd = 'n';else if (ord === 'sw') inversedOrd = 'ne';else if (ord === 'w') inversedOrd = 'e';else if (ord === 'nw') inversedOrd = 'se';

  return inversedOrd;
}

var _ref2 = _react2.default.createElement(
  'div',
  { className: 'ReactCrop__drag-elements' },
  _react2.default.createElement('div', { className: 'ReactCrop__drag-bar ord-n', 'data-ord': 'n' }),
  _react2.default.createElement('div', { className: 'ReactCrop__drag-bar ord-e', 'data-ord': 'e' }),
  _react2.default.createElement('div', { className: 'ReactCrop__drag-bar ord-s', 'data-ord': 's' }),
  _react2.default.createElement('div', { className: 'ReactCrop__drag-bar ord-w', 'data-ord': 'w' }),
  _react2.default.createElement('div', { className: 'ReactCrop__drag-handle ord-nw', 'data-ord': 'nw' }),
  _react2.default.createElement('div', { className: 'ReactCrop__drag-handle ord-n', 'data-ord': 'n' }),
  _react2.default.createElement('div', { className: 'ReactCrop__drag-handle ord-ne', 'data-ord': 'ne' }),
  _react2.default.createElement('div', { className: 'ReactCrop__drag-handle ord-e', 'data-ord': 'e' }),
  _react2.default.createElement('div', { className: 'ReactCrop__drag-handle ord-se', 'data-ord': 'se' }),
  _react2.default.createElement('div', { className: 'ReactCrop__drag-handle ord-s', 'data-ord': 's' }),
  _react2.default.createElement('div', { className: 'ReactCrop__drag-handle ord-sw', 'data-ord': 'sw' }),
  _react2.default.createElement('div', { className: 'ReactCrop__drag-handle ord-w', 'data-ord': 'w' })
);

var ReactCrop = function (_PureComponent) {
  _inherits(ReactCrop, _PureComponent);

  function ReactCrop() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactCrop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactCrop.__proto__ || Object.getPrototypeOf(ReactCrop)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.onCropMouseTouchDown = function (e) {
      var _this$props = _this.props,
          crop = _this$props.crop,
          disabled = _this$props.disabled;


      if (disabled) {
        return;
      }

      e.preventDefault(); // Stop drag selection.

      var clientPos = getClientPos(e);

      // Focus for detecting keypress.
      // this.componentRef.focus();

      var ord = e.target.dataset.ord;
      var xInversed = ord === 'nw' || ord === 'w' || ord === 'sw';
      var yInversed = ord === 'nw' || ord === 'n' || ord === 'ne';

      var cropOffset = void 0;

      if (crop.aspect) {
        cropOffset = getElementOffset(_this.cropSelectRef);
      }

      _this.evData = {
        clientStartX: clientPos.x,
        clientStartY: clientPos.y,
        cropStartWidth: crop.width,
        cropStartHeight: crop.height,
        cropStartX: xInversed ? crop.x + crop.width : crop.x,
        cropStartY: yInversed ? crop.y + crop.height : crop.y,
        xInversed: xInversed,
        yInversed: yInversed,
        xCrossOver: xInversed,
        yCrossOver: yInversed,
        startXCrossOver: xInversed,
        startYCrossOver: yInversed,
        isResize: e.target !== _this.cropSelectRef,
        ord: ord,
        cropOffset: cropOffset
      };

      _this.mouseDownOnCrop = true;
      _this.setState({ cropIsActive: true });
    }, _this.onComponentMouseTouchDown = function (e) {
      var _this$props2 = _this.props,
          crop = _this$props2.crop,
          disabled = _this$props2.disabled,
          keepSelection = _this$props2.keepSelection,
          onChange = _this$props2.onChange;


      if (e.target !== _this.imageRef) {
        return;
      }

      if (disabled || keepSelection && isCropValid(crop)) {
        return;
      }

      e.preventDefault(); // Stop drag selection.

      var clientPos = getClientPos(e);

      // Focus for detecting keypress.
      // this.componentRef.focus();

      var imageOffset = getElementOffset(_this.imageRef);
      var xPc = (clientPos.x - imageOffset.left) / _this.imageRef.width * 100;
      var yPc = (clientPos.y - imageOffset.top) / _this.imageRef.height * 100;

      var nextCrop = {
        aspect: crop.aspect,
        x: xPc,
        y: yPc,
        width: 0,
        height: 0
      };

      _this.evData = {
        clientStartX: clientPos.x,
        clientStartY: clientPos.y,
        cropStartWidth: nextCrop.width,
        cropStartHeight: nextCrop.height,
        cropStartX: nextCrop.x,
        cropStartY: nextCrop.y,
        xInversed: false,
        yInversed: false,
        xCrossOver: false,
        yCrossOver: false,
        startXCrossOver: false,
        startYCrossOver: false,
        isResize: true,
        ord: 'nw'
      };

      _this.mouseDownOnCrop = true;
      onChange(nextCrop, _this.getPixelCrop(nextCrop));
      _this.setState({ cropIsActive: true });
    }, _this.onDocMouseTouchMove = function (e) {
      var _this$props3 = _this.props,
          crop = _this$props3.crop,
          disabled = _this$props3.disabled,
          onChange = _this$props3.onChange,
          onDragStart = _this$props3.onDragStart;


      onDragStart();

      if (disabled) {
        return;
      }

      if (!_this.mouseDownOnCrop) {
        return;
      }

      e.preventDefault(); // Stop drag selection.

      var evData = _this.evData;
      var clientPos = getClientPos(e);

      if (evData.isResize && crop.aspect && evData.cropOffset) {
        clientPos.y = _this.straightenYPath(clientPos.x);
      }

      var xDiffPx = clientPos.x - evData.clientStartX;
      evData.xDiffPc = xDiffPx / _this.imageRef.width * 100;

      var yDiffPx = clientPos.y - evData.clientStartY;
      evData.yDiffPc = yDiffPx / _this.imageRef.height * 100;

      var nextCrop = void 0;

      if (evData.isResize) {
        nextCrop = _this.resizeCrop();
      } else {
        nextCrop = _this.dragCrop();
      }

      onChange(nextCrop, _this.getPixelCrop(nextCrop));
    }, _this.onComponentKeyDown = function (e) {
      var _this$props4 = _this.props,
          crop = _this$props4.crop,
          disabled = _this$props4.disabled,
          onChange = _this$props4.onChange,
          onComplete = _this$props4.onComplete;


      if (disabled) {
        return;
      }

      var keyCode = e.which;
      var nudged = false;

      if (!isCropValid(crop)) {
        return;
      }

      var nextCrop = _this.makeNewCrop();

      if (keyCode === ReactCrop.arrowKey.left) {
        nextCrop.x -= ReactCrop.nudgeStep;
        nudged = true;
      } else if (keyCode === ReactCrop.arrowKey.right) {
        nextCrop.x += ReactCrop.nudgeStep;
        nudged = true;
      } else if (keyCode === ReactCrop.arrowKey.up) {
        nextCrop.y -= ReactCrop.nudgeStep;
        nudged = true;
      } else if (keyCode === ReactCrop.arrowKey.down) {
        nextCrop.y += ReactCrop.nudgeStep;
        nudged = true;
      }

      if (nudged) {
        e.preventDefault(); // Stop drag selection.
        nextCrop.x = clamp(nextCrop.x, 0, 100 - nextCrop.width);
        nextCrop.y = clamp(nextCrop.y, 0, 100 - nextCrop.height);

        onChange(nextCrop, _this.getPixelCrop(nextCrop));
        onComplete(nextCrop, _this.getPixelCrop(nextCrop));
      }
    }, _this.onDocMouseTouchEnd = function () {
      var _this$props5 = _this.props,
          crop = _this$props5.crop,
          disabled = _this$props5.disabled,
          onComplete = _this$props5.onComplete,
          onDragEnd = _this$props5.onDragEnd;


      onDragEnd();

      if (disabled) {
        return;
      }

      if (_this.mouseDownOnCrop) {
        _this.mouseDownOnCrop = false;

        onComplete(crop, _this.getPixelCrop(crop));
        _this.setState({ cropIsActive: false });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactCrop, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('mousemove', this.onDocMouseTouchMove);
      document.addEventListener('touchmove', this.onDocMouseTouchMove);

      document.addEventListener('mouseup', this.onDocMouseTouchEnd);
      document.addEventListener('touchend', this.onDocMouseTouchEnd);
      document.addEventListener('touchcancel', this.onDocMouseTouchEnd);

      if (this.imageRef.complete || this.imageRef.readyState) {
        if (this.imageRef.naturalWidth === 0) {
          // Broken load on iOS, PR #51
          // https://css-tricks.com/snippets/jquery/fixing-load-in-ie-for-cached-images/
          // http://stackoverflow.com/questions/821516/browser-independent-way-to-detect-when-image-has-been-loaded
          var src = this.imageRef.src;
          this.imageRef.src = EMPTY_GIF;
          this.imageRef.src = src;
        } else {
          this.onImageLoad(this.imageRef);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousemove', this.onDocMouseTouchMove);
      document.removeEventListener('touchmove', this.onDocMouseTouchMove);

      document.removeEventListener('mouseup', this.onDocMouseTouchEnd);
      document.removeEventListener('touchend', this.onDocMouseTouchEnd);
      document.removeEventListener('touchcancel', this.onDocMouseTouchEnd);
    }
  }, {
    key: 'onImageLoad',
    value: function onImageLoad(image) {
      this.props.onImageLoaded(image);
    }
  }, {
    key: 'getPixelCrop',
    value: function getPixelCrop(crop) {
      var imageRef = this.imageRef;

      return {
        x: Math.round(imageRef.naturalWidth * (crop.x / 100)),
        y: Math.round(imageRef.naturalHeight * (crop.y / 100)),
        width: Math.round(imageRef.naturalWidth * (crop.width / 100)),
        height: Math.round(imageRef.naturalHeight * (crop.height / 100))
      };
    }
  }, {
    key: 'getCropStyle',
    value: function getCropStyle() {
      var crop = this.props.crop;

      return {
        top: crop.y + '%',
        left: crop.x + '%',
        width: crop.width + '%',
        height: crop.height + '%'
      };
    }
  }, {
    key: 'getNewSize',
    value: function getNewSize() {
      var _props = this.props,
          crop = _props.crop,
          minWidth = _props.minWidth,
          maxWidth = _props.maxWidth,
          minHeight = _props.minHeight,
          maxHeight = _props.maxHeight;

      var evData = this.evData;
      var imageAspect = this.imageRef.width / this.imageRef.height;

      // New width.
      var newWidth = evData.cropStartWidth + evData.xDiffPc;

      if (evData.xCrossOver) {
        newWidth = Math.abs(newWidth);
      }

      newWidth = clamp(newWidth, minWidth, maxWidth);

      // New height.
      var newHeight = void 0;

      if (crop.aspect) {
        newHeight = newWidth / crop.aspect * imageAspect;
      } else {
        newHeight = evData.cropStartHeight + evData.yDiffPc;
      }

      if (evData.yCrossOver) {
        // Cap if polarity is inversed and the height fills the y space.
        newHeight = Math.min(Math.abs(newHeight), evData.cropStartY);
      }

      newHeight = clamp(newHeight, minHeight, maxHeight);

      if (crop.aspect) {
        newWidth = clamp(newHeight * crop.aspect / imageAspect, 0, 100);
      }

      return {
        width: newWidth,
        height: newHeight
      };
    }
  }, {
    key: 'dragCrop',
    value: function dragCrop() {
      var nextCrop = this.makeNewCrop();
      var evData = this.evData;
      nextCrop.x = clamp(evData.cropStartX + evData.xDiffPc, 0, 100 - nextCrop.width);
      nextCrop.y = clamp(evData.cropStartY + evData.yDiffPc, 0, 100 - nextCrop.height);
      return nextCrop;
    }
  }, {
    key: 'resizeCrop',
    value: function resizeCrop() {
      var crop = this.props.crop;

      var nextCrop = this.makeNewCrop();
      var evData = this.evData;
      var ord = evData.ord;
      var imageAspect = this.imageRef.width / this.imageRef.height;

      // On the inverse change the diff so it's the same and
      // the same algo applies.
      if (evData.xInversed) {
        evData.xDiffPc -= evData.cropStartWidth * 2;
      }
      if (evData.yInversed) {
        evData.yDiffPc -= evData.cropStartHeight * 2;
      }

      // New size.
      var newSize = this.getNewSize();

      // Adjust x/y to give illusion of 'staticness' as width/height is increased
      // when polarity is inversed.
      var newX = evData.cropStartX;
      var newY = evData.cropStartY;

      if (evData.xCrossOver) {
        newX = nextCrop.x + (nextCrop.width - newSize.width);
      }

      if (evData.yCrossOver) {
        // This not only removes the little "shake" when inverting at a diagonal, but for some
        // reason y was way off at fast speeds moving sw->ne with fixed aspect only, I couldn't
        // figure out why.
        if (evData.lastYCrossover === false) {
          newY = nextCrop.y - newSize.height;
        } else {
          newY = nextCrop.y + (nextCrop.height - newSize.height);
        }
      }

      // Don't let the crop grow on the opposite side when hitting an x image boundary.
      var cropXAdjusted = false;
      if (newX + newSize.width > 100) {
        newSize.width = crop.width + (100 - (crop.x + crop.width));
        newX = crop.x + (100 - (crop.x + newSize.width));
        cropXAdjusted = true;
      } else if (newX < 0) {
        newSize.width = crop.x + crop.width;
        newX = 0;
        cropXAdjusted = true;
      }

      if (cropXAdjusted && crop.aspect) {
        // Adjust height to the resized width to maintain aspect.
        newSize.height = newSize.width / crop.aspect * imageAspect;
        // If sizing in up direction we need to pin Y at the point it
        // would be at the boundary.
        if (newY < crop.y) {
          newY = crop.y + (crop.height - newSize.height);
        }
      }

      // Don't let the crop grow on the opposite side when hitting a y image boundary.
      var cropYAdjusted = false;
      if (newY + newSize.height > 100) {
        newSize.height = crop.height + (100 - (crop.y + crop.height));
        newY = crop.y + (100 - (crop.y + newSize.height));
        cropYAdjusted = true;
      } else if (newY < 0) {
        newSize.height = crop.y + crop.height;
        newY = 0;
        cropYAdjusted = true;
      }

      if (cropYAdjusted && crop.aspect) {
        // Adjust width to the resized height to maintain aspect.
        newSize.width = newSize.height * crop.aspect / imageAspect;
        // If sizing in up direction we need to pin X at the point it
        // would be at the boundary.
        if (newX < crop.x) {
          newX = crop.x + (crop.width - newSize.width);
        }
      }

      // Apply x/y/width/height changes depending on ordinate (fixed aspect always applies both).
      if (nextCrop.aspect || ReactCrop.xyOrds.indexOf(ord) > -1) {
        nextCrop.x = newX;
        nextCrop.y = newY;
        nextCrop.width = newSize.width;
        nextCrop.height = newSize.height;
      } else if (ReactCrop.xOrds.indexOf(ord) > -1) {
        nextCrop.x = newX;
        nextCrop.width = newSize.width;
      } else if (ReactCrop.yOrds.indexOf(ord) > -1) {
        nextCrop.y = newY;
        nextCrop.height = newSize.height;
      }

      evData.lastYCrossover = evData.yCrossOver;
      this.crossOverCheck();
      return nextCrop;
    }
  }, {
    key: 'straightenYPath',
    value: function straightenYPath(clientX) {
      var evData = this.evData;
      var ord = evData.ord;
      var cropOffset = evData.cropOffset;
      var cropStartWidth = evData.cropStartWidth / 100 * this.imageRef.width;
      var cropStartHeight = evData.cropStartHeight / 100 * this.imageRef.height;
      var k = void 0;
      var d = void 0;

      if (ord === 'nw' || ord === 'se') {
        k = cropStartHeight / cropStartWidth;
        d = cropOffset.top - cropOffset.left * k;
      } else {
        k = -cropStartHeight / cropStartWidth;
        d = cropOffset.top + (cropStartHeight - cropOffset.left * k);
      }

      return k * clientX + d;
    }
  }, {
    key: 'createCropSelection',
    value: function createCropSelection() {
      var _this2 = this;

      var disabled = this.props.disabled;

      var style = this.getCropStyle();

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(n) {
            _this2.cropSelectRef = n;
          },
          style: style,
          className: 'ReactCrop__crop-selection',
          onMouseDown: this.onCropMouseTouchDown,
          onTouchStart: this.onCropMouseTouchDown
        },
        !disabled && _ref2
      );
    }
  }, {
    key: 'makeNewCrop',
    value: function makeNewCrop() {
      return _extends({}, ReactCrop.defaultCrop, this.props.crop);
    }
  }, {
    key: 'crossOverCheck',
    value: function crossOverCheck() {
      var evData = this.evData;

      if (!evData.xCrossOver && -Math.abs(evData.cropStartWidth) - evData.xDiffPc >= 0 || evData.xCrossOver && -Math.abs(evData.cropStartWidth) - evData.xDiffPc <= 0) {
        evData.xCrossOver = !evData.xCrossOver;
      }

      if (!evData.yCrossOver && -Math.abs(evData.cropStartHeight) - evData.yDiffPc >= 0 || evData.yCrossOver && -Math.abs(evData.cropStartHeight) - evData.yDiffPc <= 0) {
        evData.yCrossOver = !evData.yCrossOver;
      }

      var swapXOrd = evData.xCrossOver !== evData.startXCrossOver;
      var swapYOrd = evData.yCrossOver !== evData.startYCrossOver;

      evData.inversedXOrd = swapXOrd ? inverseOrd(evData.ord) : false;
      evData.inversedYOrd = swapYOrd ? inverseOrd(evData.ord) : false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          children = _props2.children,
          crossorigin = _props2.crossorigin,
          crop = _props2.crop,
          disabled = _props2.disabled,
          imageAlt = _props2.imageAlt,
          src = _props2.src;
      var cropIsActive = this.state.cropIsActive;

      var cropSelection = void 0;

      if (isCropValid(crop)) {
        cropSelection = this.createCropSelection();
      }

      var componentClasses = ['ReactCrop'];

      if (cropIsActive) {
        componentClasses.push('ReactCrop--active');
      }

      if (crop) {
        if (crop.aspect) {
          componentClasses.push('ReactCrop--fixed-aspect');
        }

        // In this case we have to shadow the image, since the box-shadow
        // on the crop won't work.
        if (cropIsActive && (!crop.width || !crop.height)) {
          componentClasses.push('ReactCrop--crop-invisible');
        }
      }

      if (disabled) {
        componentClasses.push('ReactCrop--disabled');
      }

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(n) {
            _this3.componentRef = n;
          },
          className: componentClasses.join(' '),
          onTouchStart: this.onComponentMouseTouchDown,
          onMouseDown: this.onComponentMouseTouchDown,
          tabIndex: '1',
          onKeyDown: this.onComponentKeyDown
        },
        _react2.default.createElement('img', {
          ref: function ref(n) {
            _this3.imageRef = n;
          },
          crossOrigin: crossorigin,
          className: 'ReactCrop__image',
          src: src,
          onLoad: function onLoad(e) {
            return _this3.onImageLoad(e.target);
          },
          alt: imageAlt
        }),
        cropSelection,
        children
      );
    }
  }]);

  return ReactCrop;
}(_react.PureComponent);

ReactCrop.xOrds = ['e', 'w'];
ReactCrop.yOrds = ['n', 's'];
ReactCrop.xyOrds = ['nw', 'ne', 'se', 'sw'];

ReactCrop.arrowKey = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
};

ReactCrop.nudgeStep = 0.2;

ReactCrop.defaultCrop = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};

ReactCrop.propTypes = {
  src: _propTypes2.default.string.isRequired,
  crop: _propTypes2.default.shape({
    aspect: _propTypes2.default.number,
    x: _propTypes2.default.number,
    y: _propTypes2.default.number,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number
  }),
  imageAlt: _propTypes2.default.string,
  minWidth: _propTypes2.default.number,
  minHeight: _propTypes2.default.number,
  maxWidth: _propTypes2.default.number,
  maxHeight: _propTypes2.default.number,
  keepSelection: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired,
  onComplete: _propTypes2.default.func,
  onImageLoaded: _propTypes2.default.func,
  onDragStart: _propTypes2.default.func,
  onDragEnd: _propTypes2.default.func,
  disabled: _propTypes2.default.bool,
  crossorigin: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};

ReactCrop.defaultProps = {
  crop: undefined,
  crossorigin: undefined,
  disabled: false,
  imageAlt: '',
  maxWidth: 100,
  maxHeight: 100,
  minWidth: 0,
  minHeight: 0,
  keepSelection: false,
  onComplete: function onComplete() {},
  onImageLoaded: function onImageLoaded() {},
  onDragStart: function onDragStart() {},
  onDragEnd: function onDragEnd() {},
  children: undefined
};

exports.default = ReactCrop;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2NvbXBvbmVudHMvY3JvcHBlci5lczYiXSwibmFtZXMiOlsiRU1QVFlfR0lGIiwiZ2V0RWxlbWVudE9mZnNldCIsImVsIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImRvY0VsIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJyZWN0VG9wIiwidG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjbGllbnRUb3AiLCJyZWN0TGVmdCIsImxlZnQiLCJwYWdlWE9mZnNldCIsImNsaWVudExlZnQiLCJnZXRDbGllbnRQb3MiLCJlIiwicGFnZVgiLCJwYWdlWSIsInRvdWNoZXMiLCJ4IiwieSIsImNsYW1wIiwibnVtIiwibWluIiwibWF4IiwiTWF0aCIsImlzQ3JvcFZhbGlkIiwiY3JvcCIsIndpZHRoIiwiaGVpZ2h0IiwiaW52ZXJzZU9yZCIsIm9yZCIsImludmVyc2VkT3JkIiwiUmVhY3RDcm9wIiwic3RhdGUiLCJvbkNyb3BNb3VzZVRvdWNoRG93biIsInByb3BzIiwiZGlzYWJsZWQiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWVudFBvcyIsInRhcmdldCIsImRhdGFzZXQiLCJ4SW52ZXJzZWQiLCJ5SW52ZXJzZWQiLCJjcm9wT2Zmc2V0IiwiYXNwZWN0IiwiY3JvcFNlbGVjdFJlZiIsImV2RGF0YSIsImNsaWVudFN0YXJ0WCIsImNsaWVudFN0YXJ0WSIsImNyb3BTdGFydFdpZHRoIiwiY3JvcFN0YXJ0SGVpZ2h0IiwiY3JvcFN0YXJ0WCIsImNyb3BTdGFydFkiLCJ4Q3Jvc3NPdmVyIiwieUNyb3NzT3ZlciIsInN0YXJ0WENyb3NzT3ZlciIsInN0YXJ0WUNyb3NzT3ZlciIsImlzUmVzaXplIiwibW91c2VEb3duT25Dcm9wIiwic2V0U3RhdGUiLCJjcm9wSXNBY3RpdmUiLCJvbkNvbXBvbmVudE1vdXNlVG91Y2hEb3duIiwia2VlcFNlbGVjdGlvbiIsIm9uQ2hhbmdlIiwiaW1hZ2VSZWYiLCJpbWFnZU9mZnNldCIsInhQYyIsInlQYyIsIm5leHRDcm9wIiwiZ2V0UGl4ZWxDcm9wIiwib25Eb2NNb3VzZVRvdWNoTW92ZSIsIm9uRHJhZ1N0YXJ0Iiwic3RyYWlnaHRlbllQYXRoIiwieERpZmZQeCIsInhEaWZmUGMiLCJ5RGlmZlB4IiwieURpZmZQYyIsInJlc2l6ZUNyb3AiLCJkcmFnQ3JvcCIsIm9uQ29tcG9uZW50S2V5RG93biIsIm9uQ29tcGxldGUiLCJrZXlDb2RlIiwid2hpY2giLCJudWRnZWQiLCJtYWtlTmV3Q3JvcCIsImFycm93S2V5IiwibnVkZ2VTdGVwIiwicmlnaHQiLCJ1cCIsImRvd24iLCJvbkRvY01vdXNlVG91Y2hFbmQiLCJvbkRyYWdFbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcGxldGUiLCJyZWFkeVN0YXRlIiwibmF0dXJhbFdpZHRoIiwic3JjIiwib25JbWFnZUxvYWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW1hZ2UiLCJvbkltYWdlTG9hZGVkIiwicm91bmQiLCJuYXR1cmFsSGVpZ2h0IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImltYWdlQXNwZWN0IiwibmV3V2lkdGgiLCJhYnMiLCJuZXdIZWlnaHQiLCJuZXdTaXplIiwiZ2V0TmV3U2l6ZSIsIm5ld1giLCJuZXdZIiwibGFzdFlDcm9zc292ZXIiLCJjcm9wWEFkanVzdGVkIiwiY3JvcFlBZGp1c3RlZCIsInh5T3JkcyIsImluZGV4T2YiLCJ4T3JkcyIsInlPcmRzIiwiY3Jvc3NPdmVyQ2hlY2siLCJjbGllbnRYIiwiayIsImQiLCJzdHlsZSIsImdldENyb3BTdHlsZSIsIm4iLCJkZWZhdWx0Q3JvcCIsInN3YXBYT3JkIiwic3dhcFlPcmQiLCJpbnZlcnNlZFhPcmQiLCJpbnZlcnNlZFlPcmQiLCJjaGlsZHJlbiIsImNyb3Nzb3JpZ2luIiwiaW1hZ2VBbHQiLCJjcm9wU2VsZWN0aW9uIiwiY3JlYXRlQ3JvcFNlbGVjdGlvbiIsImNvbXBvbmVudENsYXNzZXMiLCJwdXNoIiwiY29tcG9uZW50UmVmIiwiam9pbiIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJzaGFwZSIsIm51bWJlciIsImJvb2wiLCJmdW5jIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIm5vZGUiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7OytlQUhBOzs7QUFLQSxJQUFNQSxZQUNKLHdFQURGOztBQUdBLFNBQVNDLGdCQUFULENBQTBCQyxFQUExQixFQUE4QjtBQUM1QixNQUFNQyxPQUFPRCxHQUFHRSxxQkFBSCxFQUFiO0FBQ0EsTUFBTUMsUUFBUUMsU0FBU0MsZUFBdkI7O0FBRUEsTUFBTUMsVUFBVUwsS0FBS00sR0FBTCxHQUFXQyxPQUFPQyxXQUFsQixHQUFnQ04sTUFBTU8sU0FBdEQ7QUFDQSxNQUFNQyxXQUFXVixLQUFLVyxJQUFMLEdBQVlKLE9BQU9LLFdBQW5CLEdBQWlDVixNQUFNVyxVQUF4RDs7QUFFQSxTQUFPO0FBQ0xQLFNBQUtELE9BREE7QUFFTE0sVUFBTUQ7QUFGRCxHQUFQO0FBSUQ7O0FBRUQsU0FBU0ksWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDdkIsTUFBSUMsY0FBSjtBQUNBLE1BQUlDLGNBQUo7O0FBRUEsTUFBSUYsRUFBRUcsT0FBTixFQUFlO0FBQ2JGLFlBQVFELEVBQUVHLE9BQUYsQ0FBVSxDQUFWLEVBQWFGLEtBQXJCO0FBQ0FDLFlBQVFGLEVBQUVHLE9BQUYsQ0FBVSxDQUFWLEVBQWFELEtBQXJCO0FBQ0QsR0FIRCxNQUdPO0FBQ0xELFlBQVFELEVBQUVDLEtBQVY7QUFDQUMsWUFBUUYsRUFBRUUsS0FBVjtBQUNEOztBQUVELFNBQU87QUFDTEUsT0FBR0gsS0FERTtBQUVMSSxPQUFHSDtBQUZFLEdBQVA7QUFJRDs7QUFFRCxTQUFTSSxLQUFULENBQWVDLEdBQWYsRUFBb0JDLEdBQXBCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUM1QixTQUFPQyxLQUFLRixHQUFMLENBQVNF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QUFXLG9CQUFVMEQsSUFuQkQ7QUFvQnBCakgsWUFBVSxvQkFBVWdILElBcEJBO0FBcUJwQmIsZUFBYSxvQkFBVVMsTUFyQkg7QUFzQnBCVixZQUFVLG9CQUFVZ0IsU0FBVixDQUFvQixDQUM1QixvQkFBVUMsT0FBVixDQUFrQixvQkFBVUMsSUFBNUIsQ0FENEIsRUFFNUIsb0JBQVVBLElBRmtCLENBQXBCO0FBdEJVLENBQXRCOztBQTRCQXhILFVBQVV5SCxZQUFWLEdBQXlCO0FBQ3ZCL0gsUUFBTWdJLFNBRGlCO0FBRXZCbkIsZUFBYW1CLFNBRlU7QUFHdkJ0SCxZQUFVLEtBSGE7QUFJdkJvRyxZQUFVLEVBSmE7QUFLdkJoQyxZQUFVLEdBTGE7QUFNdkJFLGFBQVcsR0FOWTtBQU92QkgsWUFBVSxDQVBhO0FBUXZCRSxhQUFXLENBUlk7QUFTdkIzQyxpQkFBZSxLQVRRO0FBVXZCa0IsY0FBWSxzQkFBTSxDQUFFLENBVkc7QUFXdkJvQixpQkFBZSx5QkFBTSxDQUFFLENBWEE7QUFZdkI3QixlQUFhLHVCQUFNLENBQUUsQ0FaRTtBQWF2Qm9CLGFBQVcscUJBQU0sQ0FBRSxDQWJJO0FBY3ZCMkMsWUFBVW9CO0FBZGEsQ0FBekI7O2tCQWlCZTFILFMiLCJmaWxlIjoiY21zL2Nsb3VkaW5hcnkvY29tcG9uZW50cy9jcm9wcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFscyBkb2N1bWVudCwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJy4vY3JvcHBlci5sZXNzJztcblxuY29uc3QgRU1QVFlfR0lGID1cbiAgJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veXdBQUFBQUFRQUJBQUFDQVV3QU93PT0nO1xuXG5mdW5jdGlvbiBnZXRFbGVtZW50T2Zmc2V0KGVsKSB7XG4gIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgZG9jRWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgY29uc3QgcmVjdFRvcCA9IHJlY3QudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gZG9jRWwuY2xpZW50VG9wO1xuICBjb25zdCByZWN0TGVmdCA9IHJlY3QubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCAtIGRvY0VsLmNsaWVudExlZnQ7XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IHJlY3RUb3AsXG4gICAgbGVmdDogcmVjdExlZnQsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFBvcyhlKSB7XG4gIGxldCBwYWdlWDtcbiAgbGV0IHBhZ2VZO1xuXG4gIGlmIChlLnRvdWNoZXMpIHtcbiAgICBwYWdlWCA9IGUudG91Y2hlc1swXS5wYWdlWDtcbiAgICBwYWdlWSA9IGUudG91Y2hlc1swXS5wYWdlWTtcbiAgfSBlbHNlIHtcbiAgICBwYWdlWCA9IGUucGFnZVg7XG4gICAgcGFnZVkgPSBlLnBhZ2VZO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBwYWdlWCxcbiAgICB5OiBwYWdlWSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xhbXAobnVtLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobnVtLCBtaW4pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBpc0Nyb3BWYWxpZChjcm9wKSB7XG4gIHJldHVybiBjcm9wICYmIGNyb3Aud2lkdGggJiYgY3JvcC5oZWlnaHQ7XG59XG5cbmZ1bmN0aW9uIGludmVyc2VPcmQob3JkKSB7XG4gIGxldCBpbnZlcnNlZE9yZDtcblxuICBpZiAob3JkID09PSAnbicpIGludmVyc2VkT3JkID0gJ3MnO1xuICBlbHNlIGlmIChvcmQgPT09ICduZScpIGludmVyc2VkT3JkID0gJ3N3JztcbiAgZWxzZSBpZiAob3JkID09PSAnZScpIGludmVyc2VkT3JkID0gJ3cnO1xuICBlbHNlIGlmIChvcmQgPT09ICdzZScpIGludmVyc2VkT3JkID0gJ253JztcbiAgZWxzZSBpZiAob3JkID09PSAncycpIGludmVyc2VkT3JkID0gJ24nO1xuICBlbHNlIGlmIChvcmQgPT09ICdzdycpIGludmVyc2VkT3JkID0gJ25lJztcbiAgZWxzZSBpZiAob3JkID09PSAndycpIGludmVyc2VkT3JkID0gJ2UnO1xuICBlbHNlIGlmIChvcmQgPT09ICdudycpIGludmVyc2VkT3JkID0gJ3NlJztcblxuICByZXR1cm4gaW52ZXJzZWRPcmQ7XG59XG5cbmNsYXNzIFJlYWN0Q3JvcCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0ZSA9IHt9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Eb2NNb3VzZVRvdWNoTW92ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vbkRvY01vdXNlVG91Y2hNb3ZlKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uRG9jTW91c2VUb3VjaEVuZCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uRG9jTW91c2VUb3VjaEVuZCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLm9uRG9jTW91c2VUb3VjaEVuZCk7XG5cbiAgICBpZiAodGhpcy5pbWFnZVJlZi5jb21wbGV0ZSB8fCB0aGlzLmltYWdlUmVmLnJlYWR5U3RhdGUpIHtcbiAgICAgIGlmICh0aGlzLmltYWdlUmVmLm5hdHVyYWxXaWR0aCA9PT0gMCkge1xuICAgICAgICAvLyBCcm9rZW4gbG9hZCBvbiBpT1MsIFBSICM1MVxuICAgICAgICAvLyBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2pxdWVyeS9maXhpbmctbG9hZC1pbi1pZS1mb3ItY2FjaGVkLWltYWdlcy9cbiAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy84MjE1MTYvYnJvd3Nlci1pbmRlcGVuZGVudC13YXktdG8tZGV0ZWN0LXdoZW4taW1hZ2UtaGFzLWJlZW4tbG9hZGVkXG4gICAgICAgIGNvbnN0IHNyYyA9IHRoaXMuaW1hZ2VSZWYuc3JjO1xuICAgICAgICB0aGlzLmltYWdlUmVmLnNyYyA9IEVNUFRZX0dJRjtcbiAgICAgICAgdGhpcy5pbWFnZVJlZi5zcmMgPSBzcmM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uSW1hZ2VMb2FkKHRoaXMuaW1hZ2VSZWYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Eb2NNb3VzZVRvdWNoTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vbkRvY01vdXNlVG91Y2hNb3ZlKTtcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uRG9jTW91c2VUb3VjaEVuZCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uRG9jTW91c2VUb3VjaEVuZCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLm9uRG9jTW91c2VUb3VjaEVuZCk7XG4gIH1cblxuICBvbkNyb3BNb3VzZVRvdWNoRG93biA9IGUgPT4ge1xuICAgIGNvbnN0IHsgY3JvcCwgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFN0b3AgZHJhZyBzZWxlY3Rpb24uXG5cbiAgICBjb25zdCBjbGllbnRQb3MgPSBnZXRDbGllbnRQb3MoZSk7XG5cbiAgICAvLyBGb2N1cyBmb3IgZGV0ZWN0aW5nIGtleXByZXNzLlxuICAgIC8vIHRoaXMuY29tcG9uZW50UmVmLmZvY3VzKCk7XG5cbiAgICBjb25zdCBvcmQgPSBlLnRhcmdldC5kYXRhc2V0Lm9yZDtcbiAgICBjb25zdCB4SW52ZXJzZWQgPSBvcmQgPT09ICdudycgfHwgb3JkID09PSAndycgfHwgb3JkID09PSAnc3cnO1xuICAgIGNvbnN0IHlJbnZlcnNlZCA9IG9yZCA9PT0gJ253JyB8fCBvcmQgPT09ICduJyB8fCBvcmQgPT09ICduZSc7XG5cbiAgICBsZXQgY3JvcE9mZnNldDtcblxuICAgIGlmIChjcm9wLmFzcGVjdCkge1xuICAgICAgY3JvcE9mZnNldCA9IGdldEVsZW1lbnRPZmZzZXQodGhpcy5jcm9wU2VsZWN0UmVmKTtcbiAgICB9XG5cbiAgICB0aGlzLmV2RGF0YSA9IHtcbiAgICAgIGNsaWVudFN0YXJ0WDogY2xpZW50UG9zLngsXG4gICAgICBjbGllbnRTdGFydFk6IGNsaWVudFBvcy55LFxuICAgICAgY3JvcFN0YXJ0V2lkdGg6IGNyb3Aud2lkdGgsXG4gICAgICBjcm9wU3RhcnRIZWlnaHQ6IGNyb3AuaGVpZ2h0LFxuICAgICAgY3JvcFN0YXJ0WDogeEludmVyc2VkID8gY3JvcC54ICsgY3JvcC53aWR0aCA6IGNyb3AueCxcbiAgICAgIGNyb3BTdGFydFk6IHlJbnZlcnNlZCA/IGNyb3AueSArIGNyb3AuaGVpZ2h0IDogY3JvcC55LFxuICAgICAgeEludmVyc2VkLFxuICAgICAgeUludmVyc2VkLFxuICAgICAgeENyb3NzT3ZlcjogeEludmVyc2VkLFxuICAgICAgeUNyb3NzT3ZlcjogeUludmVyc2VkLFxuICAgICAgc3RhcnRYQ3Jvc3NPdmVyOiB4SW52ZXJzZWQsXG4gICAgICBzdGFydFlDcm9zc092ZXI6IHlJbnZlcnNlZCxcbiAgICAgIGlzUmVzaXplOiBlLnRhcmdldCAhPT0gdGhpcy5jcm9wU2VsZWN0UmVmLFxuICAgICAgb3JkLFxuICAgICAgY3JvcE9mZnNldCxcbiAgICB9O1xuXG4gICAgdGhpcy5tb3VzZURvd25PbkNyb3AgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjcm9wSXNBY3RpdmU6IHRydWUgfSk7XG4gIH07XG5cbiAgb25Db21wb25lbnRNb3VzZVRvdWNoRG93biA9IGUgPT4ge1xuICAgIGNvbnN0IHsgY3JvcCwgZGlzYWJsZWQsIGtlZXBTZWxlY3Rpb24sIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzLmltYWdlUmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkIHx8IChrZWVwU2VsZWN0aW9uICYmIGlzQ3JvcFZhbGlkKGNyb3ApKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gU3RvcCBkcmFnIHNlbGVjdGlvbi5cblxuICAgIGNvbnN0IGNsaWVudFBvcyA9IGdldENsaWVudFBvcyhlKTtcblxuICAgIC8vIEZvY3VzIGZvciBkZXRlY3Rpbmcga2V5cHJlc3MuXG4gICAgLy8gdGhpcy5jb21wb25lbnRSZWYuZm9jdXMoKTtcblxuICAgIGNvbnN0IGltYWdlT2Zmc2V0ID0gZ2V0RWxlbWVudE9mZnNldCh0aGlzLmltYWdlUmVmKTtcbiAgICBjb25zdCB4UGMgPSAoY2xpZW50UG9zLnggLSBpbWFnZU9mZnNldC5sZWZ0KSAvIHRoaXMuaW1hZ2VSZWYud2lkdGggKiAxMDA7XG4gICAgY29uc3QgeVBjID0gKGNsaWVudFBvcy55IC0gaW1hZ2VPZmZzZXQudG9wKSAvIHRoaXMuaW1hZ2VSZWYuaGVpZ2h0ICogMTAwO1xuXG4gICAgY29uc3QgbmV4dENyb3AgPSB7XG4gICAgICBhc3BlY3Q6IGNyb3AuYXNwZWN0LFxuICAgICAgeDogeFBjLFxuICAgICAgeTogeVBjLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgfTtcblxuICAgIHRoaXMuZXZEYXRhID0ge1xuICAgICAgY2xpZW50U3RhcnRYOiBjbGllbnRQb3MueCxcbiAgICAgIGNsaWVudFN0YXJ0WTogY2xpZW50UG9zLnksXG4gICAgICBjcm9wU3RhcnRXaWR0aDogbmV4dENyb3Aud2lkdGgsXG4gICAgICBjcm9wU3RhcnRIZWlnaHQ6IG5leHRDcm9wLmhlaWdodCxcbiAgICAgIGNyb3BTdGFydFg6IG5leHRDcm9wLngsXG4gICAgICBjcm9wU3RhcnRZOiBuZXh0Q3JvcC55LFxuICAgICAgeEludmVyc2VkOiBmYWxzZSxcbiAgICAgIHlJbnZlcnNlZDogZmFsc2UsXG4gICAgICB4Q3Jvc3NPdmVyOiBmYWxzZSxcbiAgICAgIHlDcm9zc092ZXI6IGZhbHNlLFxuICAgICAgc3RhcnRYQ3Jvc3NPdmVyOiBmYWxzZSxcbiAgICAgIHN0YXJ0WUNyb3NzT3ZlcjogZmFsc2UsXG4gICAgICBpc1Jlc2l6ZTogdHJ1ZSxcbiAgICAgIG9yZDogJ253JyxcbiAgICB9O1xuXG4gICAgdGhpcy5tb3VzZURvd25PbkNyb3AgPSB0cnVlO1xuICAgIG9uQ2hhbmdlKG5leHRDcm9wLCB0aGlzLmdldFBpeGVsQ3JvcChuZXh0Q3JvcCkpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjcm9wSXNBY3RpdmU6IHRydWUgfSk7XG4gIH07XG5cbiAgb25Eb2NNb3VzZVRvdWNoTW92ZSA9IGUgPT4ge1xuICAgIGNvbnN0IHsgY3JvcCwgZGlzYWJsZWQsIG9uQ2hhbmdlLCBvbkRyYWdTdGFydCB9ID0gdGhpcy5wcm9wcztcblxuICAgIG9uRHJhZ1N0YXJ0KCk7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubW91c2VEb3duT25Dcm9wKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBTdG9wIGRyYWcgc2VsZWN0aW9uLlxuXG4gICAgY29uc3QgZXZEYXRhID0gdGhpcy5ldkRhdGE7XG4gICAgY29uc3QgY2xpZW50UG9zID0gZ2V0Q2xpZW50UG9zKGUpO1xuXG4gICAgaWYgKGV2RGF0YS5pc1Jlc2l6ZSAmJiBjcm9wLmFzcGVjdCAmJiBldkRhdGEuY3JvcE9mZnNldCkge1xuICAgICAgY2xpZW50UG9zLnkgPSB0aGlzLnN0cmFpZ2h0ZW5ZUGF0aChjbGllbnRQb3MueCk7XG4gICAgfVxuXG4gICAgY29uc3QgeERpZmZQeCA9IGNsaWVudFBvcy54IC0gZXZEYXRhLmNsaWVudFN0YXJ0WDtcbiAgICBldkRhdGEueERpZmZQYyA9IHhEaWZmUHggLyB0aGlzLmltYWdlUmVmLndpZHRoICogMTAwO1xuXG4gICAgY29uc3QgeURpZmZQeCA9IGNsaWVudFBvcy55IC0gZXZEYXRhLmNsaWVudFN0YXJ0WTtcbiAgICBldkRhdGEueURpZmZQYyA9IHlEaWZmUHggLyB0aGlzLmltYWdlUmVmLmhlaWdodCAqIDEwMDtcblxuICAgIGxldCBuZXh0Q3JvcDtcblxuICAgIGlmIChldkRhdGEuaXNSZXNpemUpIHtcbiAgICAgIG5leHRDcm9wID0gdGhpcy5yZXNpemVDcm9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRDcm9wID0gdGhpcy5kcmFnQ3JvcCgpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKG5leHRDcm9wLCB0aGlzLmdldFBpeGVsQ3JvcChuZXh0Q3JvcCkpO1xuICB9O1xuXG4gIG9uQ29tcG9uZW50S2V5RG93biA9IGUgPT4ge1xuICAgIGNvbnN0IHsgY3JvcCwgZGlzYWJsZWQsIG9uQ2hhbmdlLCBvbkNvbXBsZXRlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qga2V5Q29kZSA9IGUud2hpY2g7XG4gICAgbGV0IG51ZGdlZCA9IGZhbHNlO1xuXG4gICAgaWYgKCFpc0Nyb3BWYWxpZChjcm9wKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5leHRDcm9wID0gdGhpcy5tYWtlTmV3Q3JvcCgpO1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFJlYWN0Q3JvcC5hcnJvd0tleS5sZWZ0KSB7XG4gICAgICBuZXh0Q3JvcC54IC09IFJlYWN0Q3JvcC5udWRnZVN0ZXA7XG4gICAgICBudWRnZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gUmVhY3RDcm9wLmFycm93S2V5LnJpZ2h0KSB7XG4gICAgICBuZXh0Q3JvcC54ICs9IFJlYWN0Q3JvcC5udWRnZVN0ZXA7XG4gICAgICBudWRnZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gUmVhY3RDcm9wLmFycm93S2V5LnVwKSB7XG4gICAgICBuZXh0Q3JvcC55IC09IFJlYWN0Q3JvcC5udWRnZVN0ZXA7XG4gICAgICBudWRnZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gUmVhY3RDcm9wLmFycm93S2V5LmRvd24pIHtcbiAgICAgIG5leHRDcm9wLnkgKz0gUmVhY3RDcm9wLm51ZGdlU3RlcDtcbiAgICAgIG51ZGdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG51ZGdlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBTdG9wIGRyYWcgc2VsZWN0aW9uLlxuICAgICAgbmV4dENyb3AueCA9IGNsYW1wKG5leHRDcm9wLngsIDAsIDEwMCAtIG5leHRDcm9wLndpZHRoKTtcbiAgICAgIG5leHRDcm9wLnkgPSBjbGFtcChuZXh0Q3JvcC55LCAwLCAxMDAgLSBuZXh0Q3JvcC5oZWlnaHQpO1xuXG4gICAgICBvbkNoYW5nZShuZXh0Q3JvcCwgdGhpcy5nZXRQaXhlbENyb3AobmV4dENyb3ApKTtcbiAgICAgIG9uQ29tcGxldGUobmV4dENyb3AsIHRoaXMuZ2V0UGl4ZWxDcm9wKG5leHRDcm9wKSk7XG4gICAgfVxuICB9O1xuXG4gIG9uRG9jTW91c2VUb3VjaEVuZCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNyb3AsIGRpc2FibGVkLCBvbkNvbXBsZXRlLCBvbkRyYWdFbmQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBvbkRyYWdFbmQoKTtcblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1vdXNlRG93bk9uQ3JvcCkge1xuICAgICAgdGhpcy5tb3VzZURvd25PbkNyb3AgPSBmYWxzZTtcblxuICAgICAgb25Db21wbGV0ZShjcm9wLCB0aGlzLmdldFBpeGVsQ3JvcChjcm9wKSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3JvcElzQWN0aXZlOiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgb25JbWFnZUxvYWQoaW1hZ2UpIHtcbiAgICB0aGlzLnByb3BzLm9uSW1hZ2VMb2FkZWQoaW1hZ2UpO1xuICB9XG5cbiAgZ2V0UGl4ZWxDcm9wKGNyb3ApIHtcbiAgICBjb25zdCB7IGltYWdlUmVmIH0gPSB0aGlzO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBNYXRoLnJvdW5kKGltYWdlUmVmLm5hdHVyYWxXaWR0aCAqIChjcm9wLnggLyAxMDApKSxcbiAgICAgIHk6IE1hdGgucm91bmQoaW1hZ2VSZWYubmF0dXJhbEhlaWdodCAqIChjcm9wLnkgLyAxMDApKSxcbiAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKGltYWdlUmVmLm5hdHVyYWxXaWR0aCAqIChjcm9wLndpZHRoIC8gMTAwKSksXG4gICAgICBoZWlnaHQ6IE1hdGgucm91bmQoaW1hZ2VSZWYubmF0dXJhbEhlaWdodCAqIChjcm9wLmhlaWdodCAvIDEwMCkpLFxuICAgIH07XG4gIH1cblxuICBnZXRDcm9wU3R5bGUoKSB7XG4gICAgY29uc3QgeyBjcm9wIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGAke2Nyb3AueX0lYCxcbiAgICAgIGxlZnQ6IGAke2Nyb3AueH0lYCxcbiAgICAgIHdpZHRoOiBgJHtjcm9wLndpZHRofSVgLFxuICAgICAgaGVpZ2h0OiBgJHtjcm9wLmhlaWdodH0lYCxcbiAgICB9O1xuICB9XG5cbiAgZ2V0TmV3U2l6ZSgpIHtcbiAgICBjb25zdCB7IGNyb3AsIG1pbldpZHRoLCBtYXhXaWR0aCwgbWluSGVpZ2h0LCBtYXhIZWlnaHQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZXZEYXRhID0gdGhpcy5ldkRhdGE7XG4gICAgY29uc3QgaW1hZ2VBc3BlY3QgPSB0aGlzLmltYWdlUmVmLndpZHRoIC8gdGhpcy5pbWFnZVJlZi5oZWlnaHQ7XG5cbiAgICAvLyBOZXcgd2lkdGguXG4gICAgbGV0IG5ld1dpZHRoID0gZXZEYXRhLmNyb3BTdGFydFdpZHRoICsgZXZEYXRhLnhEaWZmUGM7XG5cbiAgICBpZiAoZXZEYXRhLnhDcm9zc092ZXIpIHtcbiAgICAgIG5ld1dpZHRoID0gTWF0aC5hYnMobmV3V2lkdGgpO1xuICAgIH1cblxuICAgIG5ld1dpZHRoID0gY2xhbXAobmV3V2lkdGgsIG1pbldpZHRoLCBtYXhXaWR0aCk7XG5cbiAgICAvLyBOZXcgaGVpZ2h0LlxuICAgIGxldCBuZXdIZWlnaHQ7XG5cbiAgICBpZiAoY3JvcC5hc3BlY3QpIHtcbiAgICAgIG5ld0hlaWdodCA9IG5ld1dpZHRoIC8gY3JvcC5hc3BlY3QgKiBpbWFnZUFzcGVjdDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3SGVpZ2h0ID0gZXZEYXRhLmNyb3BTdGFydEhlaWdodCArIGV2RGF0YS55RGlmZlBjO1xuICAgIH1cblxuICAgIGlmIChldkRhdGEueUNyb3NzT3Zlcikge1xuICAgICAgLy8gQ2FwIGlmIHBvbGFyaXR5IGlzIGludmVyc2VkIGFuZCB0aGUgaGVpZ2h0IGZpbGxzIHRoZSB5IHNwYWNlLlxuICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5hYnMobmV3SGVpZ2h0KSwgZXZEYXRhLmNyb3BTdGFydFkpO1xuICAgIH1cblxuICAgIG5ld0hlaWdodCA9IGNsYW1wKG5ld0hlaWdodCwgbWluSGVpZ2h0LCBtYXhIZWlnaHQpO1xuXG4gICAgaWYgKGNyb3AuYXNwZWN0KSB7XG4gICAgICBuZXdXaWR0aCA9IGNsYW1wKG5ld0hlaWdodCAqIGNyb3AuYXNwZWN0IC8gaW1hZ2VBc3BlY3QsIDAsIDEwMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBuZXdXaWR0aCxcbiAgICAgIGhlaWdodDogbmV3SGVpZ2h0LFxuICAgIH07XG4gIH1cblxuICBkcmFnQ3JvcCgpIHtcbiAgICBjb25zdCBuZXh0Q3JvcCA9IHRoaXMubWFrZU5ld0Nyb3AoKTtcbiAgICBjb25zdCBldkRhdGEgPSB0aGlzLmV2RGF0YTtcbiAgICBuZXh0Q3JvcC54ID0gY2xhbXAoXG4gICAgICBldkRhdGEuY3JvcFN0YXJ0WCArIGV2RGF0YS54RGlmZlBjLFxuICAgICAgMCxcbiAgICAgIDEwMCAtIG5leHRDcm9wLndpZHRoLFxuICAgICk7XG4gICAgbmV4dENyb3AueSA9IGNsYW1wKFxuICAgICAgZXZEYXRhLmNyb3BTdGFydFkgKyBldkRhdGEueURpZmZQYyxcbiAgICAgIDAsXG4gICAgICAxMDAgLSBuZXh0Q3JvcC5oZWlnaHQsXG4gICAgKTtcbiAgICByZXR1cm4gbmV4dENyb3A7XG4gIH1cblxuICByZXNpemVDcm9wKCkge1xuICAgIGNvbnN0IHsgY3JvcCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBuZXh0Q3JvcCA9IHRoaXMubWFrZU5ld0Nyb3AoKTtcbiAgICBjb25zdCBldkRhdGEgPSB0aGlzLmV2RGF0YTtcbiAgICBjb25zdCBvcmQgPSBldkRhdGEub3JkO1xuICAgIGNvbnN0IGltYWdlQXNwZWN0ID0gdGhpcy5pbWFnZVJlZi53aWR0aCAvIHRoaXMuaW1hZ2VSZWYuaGVpZ2h0O1xuXG4gICAgLy8gT24gdGhlIGludmVyc2UgY2hhbmdlIHRoZSBkaWZmIHNvIGl0J3MgdGhlIHNhbWUgYW5kXG4gICAgLy8gdGhlIHNhbWUgYWxnbyBhcHBsaWVzLlxuICAgIGlmIChldkRhdGEueEludmVyc2VkKSB7XG4gICAgICBldkRhdGEueERpZmZQYyAtPSBldkRhdGEuY3JvcFN0YXJ0V2lkdGggKiAyO1xuICAgIH1cbiAgICBpZiAoZXZEYXRhLnlJbnZlcnNlZCkge1xuICAgICAgZXZEYXRhLnlEaWZmUGMgLT0gZXZEYXRhLmNyb3BTdGFydEhlaWdodCAqIDI7XG4gICAgfVxuXG4gICAgLy8gTmV3IHNpemUuXG4gICAgY29uc3QgbmV3U2l6ZSA9IHRoaXMuZ2V0TmV3U2l6ZSgpO1xuXG4gICAgLy8gQWRqdXN0IHgveSB0byBnaXZlIGlsbHVzaW9uIG9mICdzdGF0aWNuZXNzJyBhcyB3aWR0aC9oZWlnaHQgaXMgaW5jcmVhc2VkXG4gICAgLy8gd2hlbiBwb2xhcml0eSBpcyBpbnZlcnNlZC5cbiAgICBsZXQgbmV3WCA9IGV2RGF0YS5jcm9wU3RhcnRYO1xuICAgIGxldCBuZXdZID0gZXZEYXRhLmNyb3BTdGFydFk7XG5cbiAgICBpZiAoZXZEYXRhLnhDcm9zc092ZXIpIHtcbiAgICAgIG5ld1ggPSBuZXh0Q3JvcC54ICsgKG5leHRDcm9wLndpZHRoIC0gbmV3U2l6ZS53aWR0aCk7XG4gICAgfVxuXG4gICAgaWYgKGV2RGF0YS55Q3Jvc3NPdmVyKSB7XG4gICAgICAvLyBUaGlzIG5vdCBvbmx5IHJlbW92ZXMgdGhlIGxpdHRsZSBcInNoYWtlXCIgd2hlbiBpbnZlcnRpbmcgYXQgYSBkaWFnb25hbCwgYnV0IGZvciBzb21lXG4gICAgICAvLyByZWFzb24geSB3YXMgd2F5IG9mZiBhdCBmYXN0IHNwZWVkcyBtb3Zpbmcgc3ctPm5lIHdpdGggZml4ZWQgYXNwZWN0IG9ubHksIEkgY291bGRuJ3RcbiAgICAgIC8vIGZpZ3VyZSBvdXQgd2h5LlxuICAgICAgaWYgKGV2RGF0YS5sYXN0WUNyb3Nzb3ZlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgbmV3WSA9IG5leHRDcm9wLnkgLSBuZXdTaXplLmhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1kgPSBuZXh0Q3JvcC55ICsgKG5leHRDcm9wLmhlaWdodCAtIG5ld1NpemUuaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEb24ndCBsZXQgdGhlIGNyb3AgZ3JvdyBvbiB0aGUgb3Bwb3NpdGUgc2lkZSB3aGVuIGhpdHRpbmcgYW4geCBpbWFnZSBib3VuZGFyeS5cbiAgICBsZXQgY3JvcFhBZGp1c3RlZCA9IGZhbHNlO1xuICAgIGlmIChuZXdYICsgbmV3U2l6ZS53aWR0aCA+IDEwMCkge1xuICAgICAgbmV3U2l6ZS53aWR0aCA9IGNyb3Aud2lkdGggKyAoMTAwIC0gKGNyb3AueCArIGNyb3Aud2lkdGgpKTtcbiAgICAgIG5ld1ggPSBjcm9wLnggKyAoMTAwIC0gKGNyb3AueCArIG5ld1NpemUud2lkdGgpKTtcbiAgICAgIGNyb3BYQWRqdXN0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAobmV3WCA8IDApIHtcbiAgICAgIG5ld1NpemUud2lkdGggPSBjcm9wLnggKyBjcm9wLndpZHRoO1xuICAgICAgbmV3WCA9IDA7XG4gICAgICBjcm9wWEFkanVzdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY3JvcFhBZGp1c3RlZCAmJiBjcm9wLmFzcGVjdCkge1xuICAgICAgLy8gQWRqdXN0IGhlaWdodCB0byB0aGUgcmVzaXplZCB3aWR0aCB0byBtYWludGFpbiBhc3BlY3QuXG4gICAgICBuZXdTaXplLmhlaWdodCA9IG5ld1NpemUud2lkdGggLyBjcm9wLmFzcGVjdCAqIGltYWdlQXNwZWN0O1xuICAgICAgLy8gSWYgc2l6aW5nIGluIHVwIGRpcmVjdGlvbiB3ZSBuZWVkIHRvIHBpbiBZIGF0IHRoZSBwb2ludCBpdFxuICAgICAgLy8gd291bGQgYmUgYXQgdGhlIGJvdW5kYXJ5LlxuICAgICAgaWYgKG5ld1kgPCBjcm9wLnkpIHtcbiAgICAgICAgbmV3WSA9IGNyb3AueSArIChjcm9wLmhlaWdodCAtIG5ld1NpemUuaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEb24ndCBsZXQgdGhlIGNyb3AgZ3JvdyBvbiB0aGUgb3Bwb3NpdGUgc2lkZSB3aGVuIGhpdHRpbmcgYSB5IGltYWdlIGJvdW5kYXJ5LlxuICAgIGxldCBjcm9wWUFkanVzdGVkID0gZmFsc2U7XG4gICAgaWYgKG5ld1kgKyBuZXdTaXplLmhlaWdodCA+IDEwMCkge1xuICAgICAgbmV3U2l6ZS5oZWlnaHQgPSBjcm9wLmhlaWdodCArICgxMDAgLSAoY3JvcC55ICsgY3JvcC5oZWlnaHQpKTtcbiAgICAgIG5ld1kgPSBjcm9wLnkgKyAoMTAwIC0gKGNyb3AueSArIG5ld1NpemUuaGVpZ2h0KSk7XG4gICAgICBjcm9wWUFkanVzdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG5ld1kgPCAwKSB7XG4gICAgICBuZXdTaXplLmhlaWdodCA9IGNyb3AueSArIGNyb3AuaGVpZ2h0O1xuICAgICAgbmV3WSA9IDA7XG4gICAgICBjcm9wWUFkanVzdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY3JvcFlBZGp1c3RlZCAmJiBjcm9wLmFzcGVjdCkge1xuICAgICAgLy8gQWRqdXN0IHdpZHRoIHRvIHRoZSByZXNpemVkIGhlaWdodCB0byBtYWludGFpbiBhc3BlY3QuXG4gICAgICBuZXdTaXplLndpZHRoID0gbmV3U2l6ZS5oZWlnaHQgKiBjcm9wLmFzcGVjdCAvIGltYWdlQXNwZWN0O1xuICAgICAgLy8gSWYgc2l6aW5nIGluIHVwIGRpcmVjdGlvbiB3ZSBuZWVkIHRvIHBpbiBYIGF0IHRoZSBwb2ludCBpdFxuICAgICAgLy8gd291bGQgYmUgYXQgdGhlIGJvdW5kYXJ5LlxuICAgICAgaWYgKG5ld1ggPCBjcm9wLngpIHtcbiAgICAgICAgbmV3WCA9IGNyb3AueCArIChjcm9wLndpZHRoIC0gbmV3U2l6ZS53aWR0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgeC95L3dpZHRoL2hlaWdodCBjaGFuZ2VzIGRlcGVuZGluZyBvbiBvcmRpbmF0ZSAoZml4ZWQgYXNwZWN0IGFsd2F5cyBhcHBsaWVzIGJvdGgpLlxuICAgIGlmIChuZXh0Q3JvcC5hc3BlY3QgfHwgUmVhY3RDcm9wLnh5T3Jkcy5pbmRleE9mKG9yZCkgPiAtMSkge1xuICAgICAgbmV4dENyb3AueCA9IG5ld1g7XG4gICAgICBuZXh0Q3JvcC55ID0gbmV3WTtcbiAgICAgIG5leHRDcm9wLndpZHRoID0gbmV3U2l6ZS53aWR0aDtcbiAgICAgIG5leHRDcm9wLmhlaWdodCA9IG5ld1NpemUuaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoUmVhY3RDcm9wLnhPcmRzLmluZGV4T2Yob3JkKSA+IC0xKSB7XG4gICAgICBuZXh0Q3JvcC54ID0gbmV3WDtcbiAgICAgIG5leHRDcm9wLndpZHRoID0gbmV3U2l6ZS53aWR0aDtcbiAgICB9IGVsc2UgaWYgKFJlYWN0Q3JvcC55T3Jkcy5pbmRleE9mKG9yZCkgPiAtMSkge1xuICAgICAgbmV4dENyb3AueSA9IG5ld1k7XG4gICAgICBuZXh0Q3JvcC5oZWlnaHQgPSBuZXdTaXplLmhlaWdodDtcbiAgICB9XG5cbiAgICBldkRhdGEubGFzdFlDcm9zc292ZXIgPSBldkRhdGEueUNyb3NzT3ZlcjtcbiAgICB0aGlzLmNyb3NzT3ZlckNoZWNrKCk7XG4gICAgcmV0dXJuIG5leHRDcm9wO1xuICB9XG5cbiAgc3RyYWlnaHRlbllQYXRoKGNsaWVudFgpIHtcbiAgICBjb25zdCBldkRhdGEgPSB0aGlzLmV2RGF0YTtcbiAgICBjb25zdCBvcmQgPSBldkRhdGEub3JkO1xuICAgIGNvbnN0IGNyb3BPZmZzZXQgPSBldkRhdGEuY3JvcE9mZnNldDtcbiAgICBjb25zdCBjcm9wU3RhcnRXaWR0aCA9IGV2RGF0YS5jcm9wU3RhcnRXaWR0aCAvIDEwMCAqIHRoaXMuaW1hZ2VSZWYud2lkdGg7XG4gICAgY29uc3QgY3JvcFN0YXJ0SGVpZ2h0ID0gZXZEYXRhLmNyb3BTdGFydEhlaWdodCAvIDEwMCAqIHRoaXMuaW1hZ2VSZWYuaGVpZ2h0O1xuICAgIGxldCBrO1xuICAgIGxldCBkO1xuXG4gICAgaWYgKG9yZCA9PT0gJ253JyB8fCBvcmQgPT09ICdzZScpIHtcbiAgICAgIGsgPSBjcm9wU3RhcnRIZWlnaHQgLyBjcm9wU3RhcnRXaWR0aDtcbiAgICAgIGQgPSBjcm9wT2Zmc2V0LnRvcCAtIGNyb3BPZmZzZXQubGVmdCAqIGs7XG4gICAgfSBlbHNlIHtcbiAgICAgIGsgPSAtY3JvcFN0YXJ0SGVpZ2h0IC8gY3JvcFN0YXJ0V2lkdGg7XG4gICAgICBkID0gY3JvcE9mZnNldC50b3AgKyAoY3JvcFN0YXJ0SGVpZ2h0IC0gY3JvcE9mZnNldC5sZWZ0ICogayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGsgKiBjbGllbnRYICsgZDtcbiAgfVxuXG4gIGNyZWF0ZUNyb3BTZWxlY3Rpb24oKSB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdHlsZSA9IHRoaXMuZ2V0Q3JvcFN0eWxlKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICByZWY9e24gPT4ge1xuICAgICAgICAgIHRoaXMuY3JvcFNlbGVjdFJlZiA9IG47XG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgY2xhc3NOYW1lPVwiUmVhY3RDcm9wX19jcm9wLXNlbGVjdGlvblwiXG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLm9uQ3JvcE1vdXNlVG91Y2hEb3dufVxuICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMub25Dcm9wTW91c2VUb3VjaERvd259XG4gICAgICA+XG4gICAgICAgIHshZGlzYWJsZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVhY3RDcm9wX19kcmFnLWVsZW1lbnRzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlYWN0Q3JvcF9fZHJhZy1iYXIgb3JkLW5cIiBkYXRhLW9yZD1cIm5cIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWFjdENyb3BfX2RyYWctYmFyIG9yZC1lXCIgZGF0YS1vcmQ9XCJlXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVhY3RDcm9wX19kcmFnLWJhciBvcmQtc1wiIGRhdGEtb3JkPVwic1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlYWN0Q3JvcF9fZHJhZy1iYXIgb3JkLXdcIiBkYXRhLW9yZD1cIndcIiAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlYWN0Q3JvcF9fZHJhZy1oYW5kbGUgb3JkLW53XCIgZGF0YS1vcmQ9XCJud1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlYWN0Q3JvcF9fZHJhZy1oYW5kbGUgb3JkLW5cIiBkYXRhLW9yZD1cIm5cIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWFjdENyb3BfX2RyYWctaGFuZGxlIG9yZC1uZVwiIGRhdGEtb3JkPVwibmVcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWFjdENyb3BfX2RyYWctaGFuZGxlIG9yZC1lXCIgZGF0YS1vcmQ9XCJlXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVhY3RDcm9wX19kcmFnLWhhbmRsZSBvcmQtc2VcIiBkYXRhLW9yZD1cInNlXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVhY3RDcm9wX19kcmFnLWhhbmRsZSBvcmQtc1wiIGRhdGEtb3JkPVwic1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlYWN0Q3JvcF9fZHJhZy1oYW5kbGUgb3JkLXN3XCIgZGF0YS1vcmQ9XCJzd1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlYWN0Q3JvcF9fZHJhZy1oYW5kbGUgb3JkLXdcIiBkYXRhLW9yZD1cIndcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIG1ha2VOZXdDcm9wKCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5SZWFjdENyb3AuZGVmYXVsdENyb3AsXG4gICAgICAuLi50aGlzLnByb3BzLmNyb3AsXG4gICAgfTtcbiAgfVxuXG4gIGNyb3NzT3ZlckNoZWNrKCkge1xuICAgIGNvbnN0IGV2RGF0YSA9IHRoaXMuZXZEYXRhO1xuXG4gICAgaWYgKFxuICAgICAgKCFldkRhdGEueENyb3NzT3ZlciAmJlxuICAgICAgICAtTWF0aC5hYnMoZXZEYXRhLmNyb3BTdGFydFdpZHRoKSAtIGV2RGF0YS54RGlmZlBjID49IDApIHx8XG4gICAgICAoZXZEYXRhLnhDcm9zc092ZXIgJiZcbiAgICAgICAgLU1hdGguYWJzKGV2RGF0YS5jcm9wU3RhcnRXaWR0aCkgLSBldkRhdGEueERpZmZQYyA8PSAwKVxuICAgICkge1xuICAgICAgZXZEYXRhLnhDcm9zc092ZXIgPSAhZXZEYXRhLnhDcm9zc092ZXI7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgKCFldkRhdGEueUNyb3NzT3ZlciAmJlxuICAgICAgICAtTWF0aC5hYnMoZXZEYXRhLmNyb3BTdGFydEhlaWdodCkgLSBldkRhdGEueURpZmZQYyA+PSAwKSB8fFxuICAgICAgKGV2RGF0YS55Q3Jvc3NPdmVyICYmXG4gICAgICAgIC1NYXRoLmFicyhldkRhdGEuY3JvcFN0YXJ0SGVpZ2h0KSAtIGV2RGF0YS55RGlmZlBjIDw9IDApXG4gICAgKSB7XG4gICAgICBldkRhdGEueUNyb3NzT3ZlciA9ICFldkRhdGEueUNyb3NzT3ZlcjtcbiAgICB9XG5cbiAgICBjb25zdCBzd2FwWE9yZCA9IGV2RGF0YS54Q3Jvc3NPdmVyICE9PSBldkRhdGEuc3RhcnRYQ3Jvc3NPdmVyO1xuICAgIGNvbnN0IHN3YXBZT3JkID0gZXZEYXRhLnlDcm9zc092ZXIgIT09IGV2RGF0YS5zdGFydFlDcm9zc092ZXI7XG5cbiAgICBldkRhdGEuaW52ZXJzZWRYT3JkID0gc3dhcFhPcmQgPyBpbnZlcnNlT3JkKGV2RGF0YS5vcmQpIDogZmFsc2U7XG4gICAgZXZEYXRhLmludmVyc2VkWU9yZCA9IHN3YXBZT3JkID8gaW52ZXJzZU9yZChldkRhdGEub3JkKSA6IGZhbHNlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGNyb3Nzb3JpZ2luLCBjcm9wLCBkaXNhYmxlZCwgaW1hZ2VBbHQsIHNyYyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGNyb3BJc0FjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgY3JvcFNlbGVjdGlvbjtcblxuICAgIGlmIChpc0Nyb3BWYWxpZChjcm9wKSkge1xuICAgICAgY3JvcFNlbGVjdGlvbiA9IHRoaXMuY3JlYXRlQ3JvcFNlbGVjdGlvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudENsYXNzZXMgPSBbJ1JlYWN0Q3JvcCddO1xuXG4gICAgaWYgKGNyb3BJc0FjdGl2ZSkge1xuICAgICAgY29tcG9uZW50Q2xhc3Nlcy5wdXNoKCdSZWFjdENyb3AtLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGlmIChjcm9wKSB7XG4gICAgICBpZiAoY3JvcC5hc3BlY3QpIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3Nlcy5wdXNoKCdSZWFjdENyb3AtLWZpeGVkLWFzcGVjdCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBJbiB0aGlzIGNhc2Ugd2UgaGF2ZSB0byBzaGFkb3cgdGhlIGltYWdlLCBzaW5jZSB0aGUgYm94LXNoYWRvd1xuICAgICAgLy8gb24gdGhlIGNyb3Agd29uJ3Qgd29yay5cbiAgICAgIGlmIChjcm9wSXNBY3RpdmUgJiYgKCFjcm9wLndpZHRoIHx8ICFjcm9wLmhlaWdodCkpIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3Nlcy5wdXNoKCdSZWFjdENyb3AtLWNyb3AtaW52aXNpYmxlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBjb21wb25lbnRDbGFzc2VzLnB1c2goJ1JlYWN0Q3JvcC0tZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICByZWY9e24gPT4ge1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gbjtcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lbnRDbGFzc2VzLmpvaW4oJyAnKX1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLm9uQ29tcG9uZW50TW91c2VUb3VjaERvd259XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLm9uQ29tcG9uZW50TW91c2VUb3VjaERvd259XG4gICAgICAgIHRhYkluZGV4PVwiMVwiXG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5vbkNvbXBvbmVudEtleURvd259XG4gICAgICA+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICByZWY9e24gPT4ge1xuICAgICAgICAgICAgdGhpcy5pbWFnZVJlZiA9IG47XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17Y3Jvc3NvcmlnaW59XG4gICAgICAgICAgY2xhc3NOYW1lPVwiUmVhY3RDcm9wX19pbWFnZVwiXG4gICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgb25Mb2FkPXtlID0+IHRoaXMub25JbWFnZUxvYWQoZS50YXJnZXQpfVxuICAgICAgICAgIGFsdD17aW1hZ2VBbHR9XG4gICAgICAgIC8+XG5cbiAgICAgICAge2Nyb3BTZWxlY3Rpb259XG5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SZWFjdENyb3AueE9yZHMgPSBbJ2UnLCAndyddO1xuUmVhY3RDcm9wLnlPcmRzID0gWyduJywgJ3MnXTtcblJlYWN0Q3JvcC54eU9yZHMgPSBbJ253JywgJ25lJywgJ3NlJywgJ3N3J107XG5cblJlYWN0Q3JvcC5hcnJvd0tleSA9IHtcbiAgbGVmdDogMzcsXG4gIHVwOiAzOCxcbiAgcmlnaHQ6IDM5LFxuICBkb3duOiA0MCxcbn07XG5cblJlYWN0Q3JvcC5udWRnZVN0ZXAgPSAwLjI7XG5cblJlYWN0Q3JvcC5kZWZhdWx0Q3JvcCA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgd2lkdGg6IDAsXG4gIGhlaWdodDogMCxcbn07XG5cblJlYWN0Q3JvcC5wcm9wVHlwZXMgPSB7XG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjcm9wOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFzcGVjdDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbiAgaW1hZ2VBbHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtaW5IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1heFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXhIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGtlZXBTZWxlY3Rpb246IFByb3BUeXBlcy5ib29sLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uSW1hZ2VMb2FkZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkRyYWdTdGFydDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRHJhZ0VuZDogUHJvcFR5cGVzLmZ1bmMsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY3Jvc3NvcmlnaW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gIF0pLFxufTtcblxuUmVhY3RDcm9wLmRlZmF1bHRQcm9wcyA9IHtcbiAgY3JvcDogdW5kZWZpbmVkLFxuICBjcm9zc29yaWdpbjogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGltYWdlQWx0OiAnJyxcbiAgbWF4V2lkdGg6IDEwMCxcbiAgbWF4SGVpZ2h0OiAxMDAsXG4gIG1pbldpZHRoOiAwLFxuICBtaW5IZWlnaHQ6IDAsXG4gIGtlZXBTZWxlY3Rpb246IGZhbHNlLFxuICBvbkNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgb25JbWFnZUxvYWRlZDogKCkgPT4ge30sXG4gIG9uRHJhZ1N0YXJ0OiAoKSA9PiB7fSxcbiAgb25EcmFnRW5kOiAoKSA9PiB7fSxcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Q3JvcDtcbiJdfQ==
