var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* globals document, window */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './cropper.less';

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

var _ref2 = React.createElement(
  'div',
  { className: 'ReactCrop__drag-elements' },
  React.createElement('div', { className: 'ReactCrop__drag-bar ord-n', 'data-ord': 'n' }),
  React.createElement('div', { className: 'ReactCrop__drag-bar ord-e', 'data-ord': 'e' }),
  React.createElement('div', { className: 'ReactCrop__drag-bar ord-s', 'data-ord': 's' }),
  React.createElement('div', { className: 'ReactCrop__drag-bar ord-w', 'data-ord': 'w' }),
  React.createElement('div', { className: 'ReactCrop__drag-handle ord-nw', 'data-ord': 'nw' }),
  React.createElement('div', { className: 'ReactCrop__drag-handle ord-n', 'data-ord': 'n' }),
  React.createElement('div', { className: 'ReactCrop__drag-handle ord-ne', 'data-ord': 'ne' }),
  React.createElement('div', { className: 'ReactCrop__drag-handle ord-e', 'data-ord': 'e' }),
  React.createElement('div', { className: 'ReactCrop__drag-handle ord-se', 'data-ord': 'se' }),
  React.createElement('div', { className: 'ReactCrop__drag-handle ord-s', 'data-ord': 's' }),
  React.createElement('div', { className: 'ReactCrop__drag-handle ord-sw', 'data-ord': 'sw' }),
  React.createElement('div', { className: 'ReactCrop__drag-handle ord-w', 'data-ord': 'w' })
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

      return React.createElement(
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

      return React.createElement(
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
        React.createElement('img', {
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
}(PureComponent);

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
  src: PropTypes.string.isRequired,
  crop: PropTypes.shape({
    aspect: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
  }),
  imageAlt: PropTypes.string,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  keepSelection: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onComplete: PropTypes.func,
  onImageLoaded: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  disabled: PropTypes.bool,
  crossorigin: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
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

export default ReactCrop;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvY29tcG9uZW50cy9jcm9wcGVyLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJFTVBUWV9HSUYiLCJnZXRFbGVtZW50T2Zmc2V0IiwiZWwiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZG9jRWwiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInJlY3RUb3AiLCJ0b3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImNsaWVudFRvcCIsInJlY3RMZWZ0IiwibGVmdCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50TGVmdCIsImdldENsaWVudFBvcyIsImUiLCJwYWdlWCIsInBhZ2VZIiwidG91Y2hlcyIsIngiLCJ5IiwiY2xhbXAiLCJudW0iLCJtaW4iLCJtYXgiLCJNYXRoIiwiaXNDcm9wVmFsaWQiLCJjcm9wIiwid2lkdGgiLCJoZWlnaHQiLCJpbnZlcnNlT3JkIiwib3JkIiwiaW52ZXJzZWRPcmQiLCJSZWFjdENyb3AiLCJzdGF0ZSIsIm9uQ3JvcE1vdXNlVG91Y2hEb3duIiwicHJvcHMiLCJkaXNhYmxlZCIsInByZXZlbnREZWZhdWx0IiwiY2xpZW50UG9zIiwidGFyZ2V0IiwiZGF0YXNldCIsInhJbnZlcnNlZCIsInlJbnZlcnNlZCIsImNyb3BPZmZzZXQiLCJhc3BlY3QiLCJjcm9wU2VsZWN0UmVmIiwiZXZEYXRhIiwiY2xpZW50U3RhcnRYIiwiY2xpZW50U3RhcnRZIiwiY3JvcFN0YXJ0V2lkdGgiLCJjcm9wU3RhcnRIZWlnaHQiLCJjcm9wU3RhcnRYIiwiY3JvcFN0YXJ0WSIsInhDcm9zc092ZXIiLCJ5Q3Jvc3NPdmVyIiwic3RhcnRYQ3Jvc3NPdmVyIiwic3RhcnRZQ3Jvc3NPdmVyIiwiaXNSZXNpemUiLCJtb3VzZURvd25PbkNyb3AiLCJzZXRTdGF0ZSIsImNyb3BJc0FjdGl2ZSIsIm9uQ29tcG9uZW50TW91c2VUb3VjaERvd24iLCJrZWVwU2VsZWN0aW9uIiwib25DaGFuZ2UiLCJpbWFnZVJlZiIsImltYWdlT2Zmc2V0IiwieFBjIiwieVBjIiwibmV4dENyb3AiLCJnZXRQaXhlbENyb3AiLCJvbkRvY01vdXNlVG91Y2hNb3ZlIiwib25EcmFnU3RhcnQiLCJzdHJhaWdodGVuWVBhdGgiLCJ4RGlmZlB4IiwieERpZmZQYyIsInlEaWZmUHgiLCJ5RGlmZlBjIiwicmVzaXplQ3JvcCIsImRyYWdDcm9wIiwib25Db21wb25lbnRLZXlEb3duIiwib25Db21wbGV0ZSIsImtleUNvZGUiLCJ3aGljaCIsIm51ZGdlZCIsIm1ha2VOZXdDcm9wIiwiYXJyb3dLZXkiLCJudWRnZVN0ZXAiLCJyaWdodCIsInVwIiwiZG93biIsIm9uRG9jTW91c2VUb3VjaEVuZCIsIm9uRHJhZ0VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wbGV0ZSIsInJlYWR5U3RhdGUiLCJuYXR1cmFsV2lkdGgiLCJzcmMiLCJvbkltYWdlTG9hZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbWFnZSIsIm9uSW1hZ2VMb2FkZWQiLCJyb3VuZCIsIm5hdHVyYWxIZWlnaHQiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiaW1hZ2VBc3BlY3QiLCJuZXdXaWR0aCIsImFicyIsIm5ld0hlaWdodCIsIm5ld1NpemUiLCJnZXROZXdTaXplIiwibmV3WCIsIm5ld1kiLCJsYXN0WUNyb3Nzb3ZlciIsImNyb3BYQWRqdXN0ZWQiLCJjcm9wWUFkanVzdGVkIiwieHlPcmRzIiwiaW5kZXhPZiIsInhPcmRzIiwieU9yZHMiLCJjcm9zc092ZXJDaGVjayIsImNsaWVudFgiLCJrIiwiZCIsInN0eWxlIiwiZ2V0Q3JvcFN0eWxlIiwibiIsImRlZmF1bHRDcm9wIiwic3dhcFhPcmQiLCJzd2FwWU9yZCIsImludmVyc2VkWE9yZCIsImludmVyc2VkWU9yZCIsImNoaWxkcmVuIiwiY3Jvc3NvcmlnaW4iLCJpbWFnZUFsdCIsImNyb3BTZWxlY3Rpb24iLCJjcmVhdGVDcm9wU2VsZWN0aW9uIiwiY29tcG9uZW50Q2xhc3NlcyIsInB1c2giLCJjb21wb25lbnRSZWYiLCJqb2luIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwibnVtYmVyIiwiYm9vbCIsImZ1bmMiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwibm9kZSIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBTyxnQkFBUDs7QUFFQSxJQUFNQyxZQUNKLHdFQURGOztBQUdBLFNBQVNDLGdCQUFULENBQTBCQyxFQUExQixFQUE4QjtBQUM1QixNQUFNQyxPQUFPRCxHQUFHRSxxQkFBSCxFQUFiO0FBQ0EsTUFBTUMsUUFBUUMsU0FBU0MsZUFBdkI7O0FBRUEsTUFBTUMsVUFBVUwsS0FBS00sR0FBTCxHQUFXQyxPQUFPQyxXQUFsQixHQUFnQ04sTUFBTU8sU0FBdEQ7QUFDQSxNQUFNQyxXQUFXVixLQUFLVyxJQUFMLEdBQVlKLE9BQU9LLFdBQW5CLEdBQWlDVixNQUFNVyxVQUF4RDs7QUFFQSxTQUFPO0FBQ0xQLFNBQUtELE9BREE7QUFFTE0sVUFBTUQ7QUFGRCxHQUFQO0FBSUQ7O0FBRUQsU0FBU0ksWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDdkIsTUFBSUMsY0FBSjtBQUNBLE1BQUlDLGNBQUo7O0FBRUEsTUFBSUYsRUFBRUcsT0FBTixFQUFlO0FBQ2JGLFlBQVFELEVBQUVHLE9BQUYsQ0FBVSxDQUFWLEVBQWFGLEtBQXJCO0FBQ0FDLFlBQVFGLEVBQUVHLE9BQUYsQ0FBVSxDQUFWLEVBQWFELEtBQXJCO0FBQ0QsR0FIRCxNQUdPO0FBQ0xELFlBQVFELEVBQUVDLEtBQVY7QUFDQUMsWUFBUUYsRUFBRUUsS0FBVjtBQUNEOztBQUVELFNBQU87QUFDTEUsT0FBR0gsS0FERTtBQUVMSSxPQUFHSDtBQUZFLEdB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WUFBVXBFLFVBQVUwSixJQUFWLENBQWVKLFVBZkw7QUFnQnBCakUsY0FBWXJGLFVBQVUwSixJQWhCRjtBQWlCcEJqRCxpQkFBZXpHLFVBQVUwSixJQWpCTDtBQWtCcEI5RSxlQUFhNUUsVUFBVTBKLElBbEJIO0FBbUJwQjFELGFBQVdoRyxVQUFVMEosSUFuQkQ7QUFvQnBCakgsWUFBVXpDLFVBQVV5SixJQXBCQTtBQXFCcEJiLGVBQWE1SSxVQUFVcUosTUFyQkg7QUFzQnBCVixZQUFVM0ksVUFBVTJKLFNBQVYsQ0FBb0IsQ0FDNUIzSixVQUFVNEosT0FBVixDQUFrQjVKLFVBQVU2SixJQUE1QixDQUQ0QixFQUU1QjdKLFVBQVU2SixJQUZrQixDQUFwQjtBQXRCVSxDQUF0Qjs7QUE0QkF4SCxVQUFVeUgsWUFBVixHQUF5QjtBQUN2Qi9ILFFBQU1nSSxTQURpQjtBQUV2Qm5CLGVBQWFtQixTQUZVO0FBR3ZCdEgsWUFBVSxLQUhhO0FBSXZCb0csWUFBVSxFQUphO0FBS3ZCaEMsWUFBVSxHQUxhO0FBTXZCRSxhQUFXLEdBTlk7QUFPdkJILFlBQVUsQ0FQYTtBQVF2QkUsYUFBVyxDQVJZO0FBU3ZCM0MsaUJBQWUsS0FUUTtBQVV2QmtCLGNBQVksc0JBQU0sQ0FBRSxDQVZHO0FBV3ZCb0IsaUJBQWUseUJBQU0sQ0FBRSxDQVhBO0FBWXZCN0IsZUFBYSx1QkFBTSxDQUFFLENBWkU7QUFhdkJvQixhQUFXLHFCQUFNLENBQUUsQ0FiSTtBQWN2QjJDLFlBQVVvQjtBQWRhLENBQXpCOztBQWlCQSxlQUFlMUgsU0FBZiIsImZpbGUiOiJwYWNrYWdlcy9jbG91ZGluYXJ5L2NvbXBvbmVudHMvY3JvcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbHMgZG9jdW1lbnQsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICcuL2Nyb3BwZXIubGVzcyc7XG5cbmNvbnN0IEVNUFRZX0dJRiA9XG4gICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3l3QUFBQUFBUUFCQUFBQ0FVd0FPdz09JztcblxuZnVuY3Rpb24gZ2V0RWxlbWVudE9mZnNldChlbCkge1xuICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIGNvbnN0IHJlY3RUb3AgPSByZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIGRvY0VsLmNsaWVudFRvcDtcbiAgY29uc3QgcmVjdExlZnQgPSByZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2NFbC5jbGllbnRMZWZ0O1xuXG4gIHJldHVybiB7XG4gICAgdG9wOiByZWN0VG9wLFxuICAgIGxlZnQ6IHJlY3RMZWZ0LFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRQb3MoZSkge1xuICBsZXQgcGFnZVg7XG4gIGxldCBwYWdlWTtcblxuICBpZiAoZS50b3VjaGVzKSB7XG4gICAgcGFnZVggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgcGFnZVkgPSBlLnRvdWNoZXNbMF0ucGFnZVk7XG4gIH0gZWxzZSB7XG4gICAgcGFnZVggPSBlLnBhZ2VYO1xuICAgIHBhZ2VZID0gZS5wYWdlWTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogcGFnZVgsXG4gICAgeTogcGFnZVksXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsYW1wKG51bSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bSwgbWluKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gaXNDcm9wVmFsaWQoY3JvcCkge1xuICByZXR1cm4gY3JvcCAmJiBjcm9wLndpZHRoICYmIGNyb3AuaGVpZ2h0O1xufVxuXG5mdW5jdGlvbiBpbnZlcnNlT3JkKG9yZCkge1xuICBsZXQgaW52ZXJzZWRPcmQ7XG5cbiAgaWYgKG9yZCA9PT0gJ24nKSBpbnZlcnNlZE9yZCA9ICdzJztcbiAgZWxzZSBpZiAob3JkID09PSAnbmUnKSBpbnZlcnNlZE9yZCA9ICdzdyc7XG4gIGVsc2UgaWYgKG9yZCA9PT0gJ2UnKSBpbnZlcnNlZE9yZCA9ICd3JztcbiAgZWxzZSBpZiAob3JkID09PSAnc2UnKSBpbnZlcnNlZE9yZCA9ICdudyc7XG4gIGVsc2UgaWYgKG9yZCA9PT0gJ3MnKSBpbnZlcnNlZE9yZCA9ICduJztcbiAgZWxzZSBpZiAob3JkID09PSAnc3cnKSBpbnZlcnNlZE9yZCA9ICduZSc7XG4gIGVsc2UgaWYgKG9yZCA9PT0gJ3cnKSBpbnZlcnNlZE9yZCA9ICdlJztcbiAgZWxzZSBpZiAob3JkID09PSAnbncnKSBpbnZlcnNlZE9yZCA9ICdzZSc7XG5cbiAgcmV0dXJuIGludmVyc2VkT3JkO1xufVxuXG5jbGFzcyBSZWFjdENyb3AgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7fTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRG9jTW91c2VUb3VjaE1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Eb2NNb3VzZVRvdWNoTW92ZSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkRvY01vdXNlVG91Y2hFbmQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbkRvY01vdXNlVG91Y2hFbmQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5vbkRvY01vdXNlVG91Y2hFbmQpO1xuXG4gICAgaWYgKHRoaXMuaW1hZ2VSZWYuY29tcGxldGUgfHwgdGhpcy5pbWFnZVJlZi5yZWFkeVN0YXRlKSB7XG4gICAgICBpZiAodGhpcy5pbWFnZVJlZi5uYXR1cmFsV2lkdGggPT09IDApIHtcbiAgICAgICAgLy8gQnJva2VuIGxvYWQgb24gaU9TLCBQUiAjNTFcbiAgICAgICAgLy8gaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9qcXVlcnkvZml4aW5nLWxvYWQtaW4taWUtZm9yLWNhY2hlZC1pbWFnZXMvXG4gICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvODIxNTE2L2Jyb3dzZXItaW5kZXBlbmRlbnQtd2F5LXRvLWRldGVjdC13aGVuLWltYWdlLWhhcy1iZWVuLWxvYWRlZFxuICAgICAgICBjb25zdCBzcmMgPSB0aGlzLmltYWdlUmVmLnNyYztcbiAgICAgICAgdGhpcy5pbWFnZVJlZi5zcmMgPSBFTVBUWV9HSUY7XG4gICAgICAgIHRoaXMuaW1hZ2VSZWYuc3JjID0gc3JjO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbkltYWdlTG9hZCh0aGlzLmltYWdlUmVmKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRG9jTW91c2VUb3VjaE1vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Eb2NNb3VzZVRvdWNoTW92ZSk7XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkRvY01vdXNlVG91Y2hFbmQpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbkRvY01vdXNlVG91Y2hFbmQpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5vbkRvY01vdXNlVG91Y2hFbmQpO1xuICB9XG5cbiAgb25Dcm9wTW91c2VUb3VjaERvd24gPSBlID0+IHtcbiAgICBjb25zdCB7IGNyb3AsIGRpc2FibGVkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBTdG9wIGRyYWcgc2VsZWN0aW9uLlxuXG4gICAgY29uc3QgY2xpZW50UG9zID0gZ2V0Q2xpZW50UG9zKGUpO1xuXG4gICAgLy8gRm9jdXMgZm9yIGRldGVjdGluZyBrZXlwcmVzcy5cbiAgICAvLyB0aGlzLmNvbXBvbmVudFJlZi5mb2N1cygpO1xuXG4gICAgY29uc3Qgb3JkID0gZS50YXJnZXQuZGF0YXNldC5vcmQ7XG4gICAgY29uc3QgeEludmVyc2VkID0gb3JkID09PSAnbncnIHx8IG9yZCA9PT0gJ3cnIHx8IG9yZCA9PT0gJ3N3JztcbiAgICBjb25zdCB5SW52ZXJzZWQgPSBvcmQgPT09ICdudycgfHwgb3JkID09PSAnbicgfHwgb3JkID09PSAnbmUnO1xuXG4gICAgbGV0IGNyb3BPZmZzZXQ7XG5cbiAgICBpZiAoY3JvcC5hc3BlY3QpIHtcbiAgICAgIGNyb3BPZmZzZXQgPSBnZXRFbGVtZW50T2Zmc2V0KHRoaXMuY3JvcFNlbGVjdFJlZik7XG4gICAgfVxuXG4gICAgdGhpcy5ldkRhdGEgPSB7XG4gICAgICBjbGllbnRTdGFydFg6IGNsaWVudFBvcy54LFxuICAgICAgY2xpZW50U3RhcnRZOiBjbGllbnRQb3MueSxcbiAgICAgIGNyb3BTdGFydFdpZHRoOiBjcm9wLndpZHRoLFxuICAgICAgY3JvcFN0YXJ0SGVpZ2h0OiBjcm9wLmhlaWdodCxcbiAgICAgIGNyb3BTdGFydFg6IHhJbnZlcnNlZCA/IGNyb3AueCArIGNyb3Aud2lkdGggOiBjcm9wLngsXG4gICAgICBjcm9wU3RhcnRZOiB5SW52ZXJzZWQgPyBjcm9wLnkgKyBjcm9wLmhlaWdodCA6IGNyb3AueSxcbiAgICAgIHhJbnZlcnNlZCxcbiAgICAgIHlJbnZlcnNlZCxcbiAgICAgIHhDcm9zc092ZXI6IHhJbnZlcnNlZCxcbiAgICAgIHlDcm9zc092ZXI6IHlJbnZlcnNlZCxcbiAgICAgIHN0YXJ0WENyb3NzT3ZlcjogeEludmVyc2VkLFxuICAgICAgc3RhcnRZQ3Jvc3NPdmVyOiB5SW52ZXJzZWQsXG4gICAgICBpc1Jlc2l6ZTogZS50YXJnZXQgIT09IHRoaXMuY3JvcFNlbGVjdFJlZixcbiAgICAgIG9yZCxcbiAgICAgIGNyb3BPZmZzZXQsXG4gICAgfTtcblxuICAgIHRoaXMubW91c2VEb3duT25Dcm9wID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JvcElzQWN0aXZlOiB0cnVlIH0pO1xuICB9O1xuXG4gIG9uQ29tcG9uZW50TW91c2VUb3VjaERvd24gPSBlID0+IHtcbiAgICBjb25zdCB7IGNyb3AsIGRpc2FibGVkLCBrZWVwU2VsZWN0aW9uLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcy5pbWFnZVJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZCB8fCAoa2VlcFNlbGVjdGlvbiAmJiBpc0Nyb3BWYWxpZChjcm9wKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFN0b3AgZHJhZyBzZWxlY3Rpb24uXG5cbiAgICBjb25zdCBjbGllbnRQb3MgPSBnZXRDbGllbnRQb3MoZSk7XG5cbiAgICAvLyBGb2N1cyBmb3IgZGV0ZWN0aW5nIGtleXByZXNzLlxuICAgIC8vIHRoaXMuY29tcG9uZW50UmVmLmZvY3VzKCk7XG5cbiAgICBjb25zdCBpbWFnZU9mZnNldCA9IGdldEVsZW1lbnRPZmZzZXQodGhpcy5pbWFnZVJlZik7XG4gICAgY29uc3QgeFBjID0gKGNsaWVudFBvcy54IC0gaW1hZ2VPZmZzZXQubGVmdCkgLyB0aGlzLmltYWdlUmVmLndpZHRoICogMTAwO1xuICAgIGNvbnN0IHlQYyA9IChjbGllbnRQb3MueSAtIGltYWdlT2Zmc2V0LnRvcCkgLyB0aGlzLmltYWdlUmVmLmhlaWdodCAqIDEwMDtcblxuICAgIGNvbnN0IG5leHRDcm9wID0ge1xuICAgICAgYXNwZWN0OiBjcm9wLmFzcGVjdCxcbiAgICAgIHg6IHhQYyxcbiAgICAgIHk6IHlQYyxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgIH07XG5cbiAgICB0aGlzLmV2RGF0YSA9IHtcbiAgICAgIGNsaWVudFN0YXJ0WDogY2xpZW50UG9zLngsXG4gICAgICBjbGllbnRTdGFydFk6IGNsaWVudFBvcy55LFxuICAgICAgY3JvcFN0YXJ0V2lkdGg6IG5leHRDcm9wLndpZHRoLFxuICAgICAgY3JvcFN0YXJ0SGVpZ2h0OiBuZXh0Q3JvcC5oZWlnaHQsXG4gICAgICBjcm9wU3RhcnRYOiBuZXh0Q3JvcC54LFxuICAgICAgY3JvcFN0YXJ0WTogbmV4dENyb3AueSxcbiAgICAgIHhJbnZlcnNlZDogZmFsc2UsXG4gICAgICB5SW52ZXJzZWQ6IGZhbHNlLFxuICAgICAgeENyb3NzT3ZlcjogZmFsc2UsXG4gICAgICB5Q3Jvc3NPdmVyOiBmYWxzZSxcbiAgICAgIHN0YXJ0WENyb3NzT3ZlcjogZmFsc2UsXG4gICAgICBzdGFydFlDcm9zc092ZXI6IGZhbHNlLFxuICAgICAgaXNSZXNpemU6IHRydWUsXG4gICAgICBvcmQ6ICdudycsXG4gICAgfTtcblxuICAgIHRoaXMubW91c2VEb3duT25Dcm9wID0gdHJ1ZTtcbiAgICBvbkNoYW5nZShuZXh0Q3JvcCwgdGhpcy5nZXRQaXhlbENyb3AobmV4dENyb3ApKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JvcElzQWN0aXZlOiB0cnVlIH0pO1xuICB9O1xuXG4gIG9uRG9jTW91c2VUb3VjaE1vdmUgPSBlID0+IHtcbiAgICBjb25zdCB7IGNyb3AsIGRpc2FibGVkLCBvbkNoYW5nZSwgb25EcmFnU3RhcnQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBvbkRyYWdTdGFydCgpO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm1vdXNlRG93bk9uQ3JvcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gU3RvcCBkcmFnIHNlbGVjdGlvbi5cblxuICAgIGNvbnN0IGV2RGF0YSA9IHRoaXMuZXZEYXRhO1xuICAgIGNvbnN0IGNsaWVudFBvcyA9IGdldENsaWVudFBvcyhlKTtcblxuICAgIGlmIChldkRhdGEuaXNSZXNpemUgJiYgY3JvcC5hc3BlY3QgJiYgZXZEYXRhLmNyb3BPZmZzZXQpIHtcbiAgICAgIGNsaWVudFBvcy55ID0gdGhpcy5zdHJhaWdodGVuWVBhdGgoY2xpZW50UG9zLngpO1xuICAgIH1cblxuICAgIGNvbnN0IHhEaWZmUHggPSBjbGllbnRQb3MueCAtIGV2RGF0YS5jbGllbnRTdGFydFg7XG4gICAgZXZEYXRhLnhEaWZmUGMgPSB4RGlmZlB4IC8gdGhpcy5pbWFnZVJlZi53aWR0aCAqIDEwMDtcblxuICAgIGNvbnN0IHlEaWZmUHggPSBjbGllbnRQb3MueSAtIGV2RGF0YS5jbGllbnRTdGFydFk7XG4gICAgZXZEYXRhLnlEaWZmUGMgPSB5RGlmZlB4IC8gdGhpcy5pbWFnZVJlZi5oZWlnaHQgKiAxMDA7XG5cbiAgICBsZXQgbmV4dENyb3A7XG5cbiAgICBpZiAoZXZEYXRhLmlzUmVzaXplKSB7XG4gICAgICBuZXh0Q3JvcCA9IHRoaXMucmVzaXplQ3JvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0Q3JvcCA9IHRoaXMuZHJhZ0Nyb3AoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZShuZXh0Q3JvcCwgdGhpcy5nZXRQaXhlbENyb3AobmV4dENyb3ApKTtcbiAgfTtcblxuICBvbkNvbXBvbmVudEtleURvd24gPSBlID0+IHtcbiAgICBjb25zdCB7IGNyb3AsIGRpc2FibGVkLCBvbkNoYW5nZSwgb25Db21wbGV0ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGtleUNvZGUgPSBlLndoaWNoO1xuICAgIGxldCBudWRnZWQgPSBmYWxzZTtcblxuICAgIGlmICghaXNDcm9wVmFsaWQoY3JvcCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0Q3JvcCA9IHRoaXMubWFrZU5ld0Nyb3AoKTtcblxuICAgIGlmIChrZXlDb2RlID09PSBSZWFjdENyb3AuYXJyb3dLZXkubGVmdCkge1xuICAgICAgbmV4dENyb3AueCAtPSBSZWFjdENyb3AubnVkZ2VTdGVwO1xuICAgICAgbnVkZ2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFJlYWN0Q3JvcC5hcnJvd0tleS5yaWdodCkge1xuICAgICAgbmV4dENyb3AueCArPSBSZWFjdENyb3AubnVkZ2VTdGVwO1xuICAgICAgbnVkZ2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFJlYWN0Q3JvcC5hcnJvd0tleS51cCkge1xuICAgICAgbmV4dENyb3AueSAtPSBSZWFjdENyb3AubnVkZ2VTdGVwO1xuICAgICAgbnVkZ2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFJlYWN0Q3JvcC5hcnJvd0tleS5kb3duKSB7XG4gICAgICBuZXh0Q3JvcC55ICs9IFJlYWN0Q3JvcC5udWRnZVN0ZXA7XG4gICAgICBudWRnZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChudWRnZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gU3RvcCBkcmFnIHNlbGVjdGlvbi5cbiAgICAgIG5leHRDcm9wLnggPSBjbGFtcChuZXh0Q3JvcC54LCAwLCAxMDAgLSBuZXh0Q3JvcC53aWR0aCk7XG4gICAgICBuZXh0Q3JvcC55ID0gY2xhbXAobmV4dENyb3AueSwgMCwgMTAwIC0gbmV4dENyb3AuaGVpZ2h0KTtcblxuICAgICAgb25DaGFuZ2UobmV4dENyb3AsIHRoaXMuZ2V0UGl4ZWxDcm9wKG5leHRDcm9wKSk7XG4gICAgICBvbkNvbXBsZXRlKG5leHRDcm9wLCB0aGlzLmdldFBpeGVsQ3JvcChuZXh0Q3JvcCkpO1xuICAgIH1cbiAgfTtcblxuICBvbkRvY01vdXNlVG91Y2hFbmQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjcm9wLCBkaXNhYmxlZCwgb25Db21wbGV0ZSwgb25EcmFnRW5kIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgb25EcmFnRW5kKCk7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb3VzZURvd25PbkNyb3ApIHtcbiAgICAgIHRoaXMubW91c2VEb3duT25Dcm9wID0gZmFsc2U7XG5cbiAgICAgIG9uQ29tcGxldGUoY3JvcCwgdGhpcy5nZXRQaXhlbENyb3AoY3JvcCkpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3BJc0FjdGl2ZTogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uSW1hZ2VMb2FkKGltYWdlKSB7XG4gICAgdGhpcy5wcm9wcy5vbkltYWdlTG9hZGVkKGltYWdlKTtcbiAgfVxuXG4gIGdldFBpeGVsQ3JvcChjcm9wKSB7XG4gICAgY29uc3QgeyBpbWFnZVJlZiB9ID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgeDogTWF0aC5yb3VuZChpbWFnZVJlZi5uYXR1cmFsV2lkdGggKiAoY3JvcC54IC8gMTAwKSksXG4gICAgICB5OiBNYXRoLnJvdW5kKGltYWdlUmVmLm5hdHVyYWxIZWlnaHQgKiAoY3JvcC55IC8gMTAwKSksXG4gICAgICB3aWR0aDogTWF0aC5yb3VuZChpbWFnZVJlZi5uYXR1cmFsV2lkdGggKiAoY3JvcC53aWR0aCAvIDEwMCkpLFxuICAgICAgaGVpZ2h0OiBNYXRoLnJvdW5kKGltYWdlUmVmLm5hdHVyYWxIZWlnaHQgKiAoY3JvcC5oZWlnaHQgLyAxMDApKSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0Q3JvcFN0eWxlKCkge1xuICAgIGNvbnN0IHsgY3JvcCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBgJHtjcm9wLnl9JWAsXG4gICAgICBsZWZ0OiBgJHtjcm9wLnh9JWAsXG4gICAgICB3aWR0aDogYCR7Y3JvcC53aWR0aH0lYCxcbiAgICAgIGhlaWdodDogYCR7Y3JvcC5oZWlnaHR9JWAsXG4gICAgfTtcbiAgfVxuXG4gIGdldE5ld1NpemUoKSB7XG4gICAgY29uc3QgeyBjcm9wLCBtaW5XaWR0aCwgbWF4V2lkdGgsIG1pbkhlaWdodCwgbWF4SGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGV2RGF0YSA9IHRoaXMuZXZEYXRhO1xuICAgIGNvbnN0IGltYWdlQXNwZWN0ID0gdGhpcy5pbWFnZVJlZi53aWR0aCAvIHRoaXMuaW1hZ2VSZWYuaGVpZ2h0O1xuXG4gICAgLy8gTmV3IHdpZHRoLlxuICAgIGxldCBuZXdXaWR0aCA9IGV2RGF0YS5jcm9wU3RhcnRXaWR0aCArIGV2RGF0YS54RGlmZlBjO1xuXG4gICAgaWYgKGV2RGF0YS54Q3Jvc3NPdmVyKSB7XG4gICAgICBuZXdXaWR0aCA9IE1hdGguYWJzKG5ld1dpZHRoKTtcbiAgICB9XG5cbiAgICBuZXdXaWR0aCA9IGNsYW1wKG5ld1dpZHRoLCBtaW5XaWR0aCwgbWF4V2lkdGgpO1xuXG4gICAgLy8gTmV3IGhlaWdodC5cbiAgICBsZXQgbmV3SGVpZ2h0O1xuXG4gICAgaWYgKGNyb3AuYXNwZWN0KSB7XG4gICAgICBuZXdIZWlnaHQgPSBuZXdXaWR0aCAvIGNyb3AuYXNwZWN0ICogaW1hZ2VBc3BlY3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0hlaWdodCA9IGV2RGF0YS5jcm9wU3RhcnRIZWlnaHQgKyBldkRhdGEueURpZmZQYztcbiAgICB9XG5cbiAgICBpZiAoZXZEYXRhLnlDcm9zc092ZXIpIHtcbiAgICAgIC8vIENhcCBpZiBwb2xhcml0eSBpcyBpbnZlcnNlZCBhbmQgdGhlIGhlaWdodCBmaWxscyB0aGUgeSBzcGFjZS5cbiAgICAgIG5ld0hlaWdodCA9IE1hdGgubWluKE1hdGguYWJzKG5ld0hlaWdodCksIGV2RGF0YS5jcm9wU3RhcnRZKTtcbiAgICB9XG5cbiAgICBuZXdIZWlnaHQgPSBjbGFtcChuZXdIZWlnaHQsIG1pbkhlaWdodCwgbWF4SGVpZ2h0KTtcblxuICAgIGlmIChjcm9wLmFzcGVjdCkge1xuICAgICAgbmV3V2lkdGggPSBjbGFtcChuZXdIZWlnaHQgKiBjcm9wLmFzcGVjdCAvIGltYWdlQXNwZWN0LCAwLCAxMDApO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogbmV3V2lkdGgsXG4gICAgICBoZWlnaHQ6IG5ld0hlaWdodCxcbiAgICB9O1xuICB9XG5cbiAgZHJhZ0Nyb3AoKSB7XG4gICAgY29uc3QgbmV4dENyb3AgPSB0aGlzLm1ha2VOZXdDcm9wKCk7XG4gICAgY29uc3QgZXZEYXRhID0gdGhpcy5ldkRhdGE7XG4gICAgbmV4dENyb3AueCA9IGNsYW1wKFxuICAgICAgZXZEYXRhLmNyb3BTdGFydFggKyBldkRhdGEueERpZmZQYyxcbiAgICAgIDAsXG4gICAgICAxMDAgLSBuZXh0Q3JvcC53aWR0aCxcbiAgICApO1xuICAgIG5leHRDcm9wLnkgPSBjbGFtcChcbiAgICAgIGV2RGF0YS5jcm9wU3RhcnRZICsgZXZEYXRhLnlEaWZmUGMsXG4gICAgICAwLFxuICAgICAgMTAwIC0gbmV4dENyb3AuaGVpZ2h0LFxuICAgICk7XG4gICAgcmV0dXJuIG5leHRDcm9wO1xuICB9XG5cbiAgcmVzaXplQ3JvcCgpIHtcbiAgICBjb25zdCB7IGNyb3AgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbmV4dENyb3AgPSB0aGlzLm1ha2VOZXdDcm9wKCk7XG4gICAgY29uc3QgZXZEYXRhID0gdGhpcy5ldkRhdGE7XG4gICAgY29uc3Qgb3JkID0gZXZEYXRhLm9yZDtcbiAgICBjb25zdCBpbWFnZUFzcGVjdCA9IHRoaXMuaW1hZ2VSZWYud2lkdGggLyB0aGlzLmltYWdlUmVmLmhlaWdodDtcblxuICAgIC8vIE9uIHRoZSBpbnZlcnNlIGNoYW5nZSB0aGUgZGlmZiBzbyBpdCdzIHRoZSBzYW1lIGFuZFxuICAgIC8vIHRoZSBzYW1lIGFsZ28gYXBwbGllcy5cbiAgICBpZiAoZXZEYXRhLnhJbnZlcnNlZCkge1xuICAgICAgZXZEYXRhLnhEaWZmUGMgLT0gZXZEYXRhLmNyb3BTdGFydFdpZHRoICogMjtcbiAgICB9XG4gICAgaWYgKGV2RGF0YS55SW52ZXJzZWQpIHtcbiAgICAgIGV2RGF0YS55RGlmZlBjIC09IGV2RGF0YS5jcm9wU3RhcnRIZWlnaHQgKiAyO1xuICAgIH1cblxuICAgIC8vIE5ldyBzaXplLlxuICAgIGNvbnN0IG5ld1NpemUgPSB0aGlzLmdldE5ld1NpemUoKTtcblxuICAgIC8vIEFkanVzdCB4L3kgdG8gZ2l2ZSBpbGx1c2lvbiBvZiAnc3RhdGljbmVzcycgYXMgd2lkdGgvaGVpZ2h0IGlzIGluY3JlYXNlZFxuICAgIC8vIHdoZW4gcG9sYXJpdHkgaXMgaW52ZXJzZWQuXG4gICAgbGV0IG5ld1ggPSBldkRhdGEuY3JvcFN0YXJ0WDtcbiAgICBsZXQgbmV3WSA9IGV2RGF0YS5jcm9wU3RhcnRZO1xuXG4gICAgaWYgKGV2RGF0YS54Q3Jvc3NPdmVyKSB7XG4gICAgICBuZXdYID0gbmV4dENyb3AueCArIChuZXh0Q3JvcC53aWR0aCAtIG5ld1NpemUud2lkdGgpO1xuICAgIH1cblxuICAgIGlmIChldkRhdGEueUNyb3NzT3Zlcikge1xuICAgICAgLy8gVGhpcyBub3Qgb25seSByZW1vdmVzIHRoZSBsaXR0bGUgXCJzaGFrZVwiIHdoZW4gaW52ZXJ0aW5nIGF0IGEgZGlhZ29uYWwsIGJ1dCBmb3Igc29tZVxuICAgICAgLy8gcmVhc29uIHkgd2FzIHdheSBvZmYgYXQgZmFzdCBzcGVlZHMgbW92aW5nIHN3LT5uZSB3aXRoIGZpeGVkIGFzcGVjdCBvbmx5LCBJIGNvdWxkbid0XG4gICAgICAvLyBmaWd1cmUgb3V0IHdoeS5cbiAgICAgIGlmIChldkRhdGEubGFzdFlDcm9zc292ZXIgPT09IGZhbHNlKSB7XG4gICAgICAgIG5ld1kgPSBuZXh0Q3JvcC55IC0gbmV3U2l6ZS5oZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdZID0gbmV4dENyb3AueSArIChuZXh0Q3JvcC5oZWlnaHQgLSBuZXdTaXplLmhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRG9uJ3QgbGV0IHRoZSBjcm9wIGdyb3cgb24gdGhlIG9wcG9zaXRlIHNpZGUgd2hlbiBoaXR0aW5nIGFuIHggaW1hZ2UgYm91bmRhcnkuXG4gICAgbGV0IGNyb3BYQWRqdXN0ZWQgPSBmYWxzZTtcbiAgICBpZiAobmV3WCArIG5ld1NpemUud2lkdGggPiAxMDApIHtcbiAgICAgIG5ld1NpemUud2lkdGggPSBjcm9wLndpZHRoICsgKDEwMCAtIChjcm9wLnggKyBjcm9wLndpZHRoKSk7XG4gICAgICBuZXdYID0gY3JvcC54ICsgKDEwMCAtIChjcm9wLnggKyBuZXdTaXplLndpZHRoKSk7XG4gICAgICBjcm9wWEFkanVzdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG5ld1ggPCAwKSB7XG4gICAgICBuZXdTaXplLndpZHRoID0gY3JvcC54ICsgY3JvcC53aWR0aDtcbiAgICAgIG5ld1ggPSAwO1xuICAgICAgY3JvcFhBZGp1c3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNyb3BYQWRqdXN0ZWQgJiYgY3JvcC5hc3BlY3QpIHtcbiAgICAgIC8vIEFkanVzdCBoZWlnaHQgdG8gdGhlIHJlc2l6ZWQgd2lkdGggdG8gbWFpbnRhaW4gYXNwZWN0LlxuICAgICAgbmV3U2l6ZS5oZWlnaHQgPSBuZXdTaXplLndpZHRoIC8gY3JvcC5hc3BlY3QgKiBpbWFnZUFzcGVjdDtcbiAgICAgIC8vIElmIHNpemluZyBpbiB1cCBkaXJlY3Rpb24gd2UgbmVlZCB0byBwaW4gWSBhdCB0aGUgcG9pbnQgaXRcbiAgICAgIC8vIHdvdWxkIGJlIGF0IHRoZSBib3VuZGFyeS5cbiAgICAgIGlmIChuZXdZIDwgY3JvcC55KSB7XG4gICAgICAgIG5ld1kgPSBjcm9wLnkgKyAoY3JvcC5oZWlnaHQgLSBuZXdTaXplLmhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRG9uJ3QgbGV0IHRoZSBjcm9wIGdyb3cgb24gdGhlIG9wcG9zaXRlIHNpZGUgd2hlbiBoaXR0aW5nIGEgeSBpbWFnZSBib3VuZGFyeS5cbiAgICBsZXQgY3JvcFlBZGp1c3RlZCA9IGZhbHNlO1xuICAgIGlmIChuZXdZICsgbmV3U2l6ZS5oZWlnaHQgPiAxMDApIHtcbiAgICAgIG5ld1NpemUuaGVpZ2h0ID0gY3JvcC5oZWlnaHQgKyAoMTAwIC0gKGNyb3AueSArIGNyb3AuaGVpZ2h0KSk7XG4gICAgICBuZXdZID0gY3JvcC55ICsgKDEwMCAtIChjcm9wLnkgKyBuZXdTaXplLmhlaWdodCkpO1xuICAgICAgY3JvcFlBZGp1c3RlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChuZXdZIDwgMCkge1xuICAgICAgbmV3U2l6ZS5oZWlnaHQgPSBjcm9wLnkgKyBjcm9wLmhlaWdodDtcbiAgICAgIG5ld1kgPSAwO1xuICAgICAgY3JvcFlBZGp1c3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNyb3BZQWRqdXN0ZWQgJiYgY3JvcC5hc3BlY3QpIHtcbiAgICAgIC8vIEFkanVzdCB3aWR0aCB0byB0aGUgcmVzaXplZCBoZWlnaHQgdG8gbWFpbnRhaW4gYXNwZWN0LlxuICAgICAgbmV3U2l6ZS53aWR0aCA9IG5ld1NpemUuaGVpZ2h0ICogY3JvcC5hc3BlY3QgLyBpbWFnZUFzcGVjdDtcbiAgICAgIC8vIElmIHNpemluZyBpbiB1cCBkaXJlY3Rpb24gd2UgbmVlZCB0byBwaW4gWCBhdCB0aGUgcG9pbnQgaXRcbiAgICAgIC8vIHdvdWxkIGJlIGF0IHRoZSBib3VuZGFyeS5cbiAgICAgIGlmIChuZXdYIDwgY3JvcC54KSB7XG4gICAgICAgIG5ld1ggPSBjcm9wLnggKyAoY3JvcC53aWR0aCAtIG5ld1NpemUud2lkdGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFwcGx5IHgveS93aWR0aC9oZWlnaHQgY2hhbmdlcyBkZXBlbmRpbmcgb24gb3JkaW5hdGUgKGZpeGVkIGFzcGVjdCBhbHdheXMgYXBwbGllcyBib3RoKS5cbiAgICBpZiAobmV4dENyb3AuYXNwZWN0IHx8IFJlYWN0Q3JvcC54eU9yZHMuaW5kZXhPZihvcmQpID4gLTEpIHtcbiAgICAgIG5leHRDcm9wLnggPSBuZXdYO1xuICAgICAgbmV4dENyb3AueSA9IG5ld1k7XG4gICAgICBuZXh0Q3JvcC53aWR0aCA9IG5ld1NpemUud2lkdGg7XG4gICAgICBuZXh0Q3JvcC5oZWlnaHQgPSBuZXdTaXplLmhlaWdodDtcbiAgICB9IGVsc2UgaWYgKFJlYWN0Q3JvcC54T3Jkcy5pbmRleE9mKG9yZCkgPiAtMSkge1xuICAgICAgbmV4dENyb3AueCA9IG5ld1g7XG4gICAgICBuZXh0Q3JvcC53aWR0aCA9IG5ld1NpemUud2lkdGg7XG4gICAgfSBlbHNlIGlmIChSZWFjdENyb3AueU9yZHMuaW5kZXhPZihvcmQpID4gLTEpIHtcbiAgICAgIG5leHRDcm9wLnkgPSBuZXdZO1xuICAgICAgbmV4dENyb3AuaGVpZ2h0ID0gbmV3U2l6ZS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgZXZEYXRhLmxhc3RZQ3Jvc3NvdmVyID0gZXZEYXRhLnlDcm9zc092ZXI7XG4gICAgdGhpcy5jcm9zc092ZXJDaGVjaygpO1xuICAgIHJldHVybiBuZXh0Q3JvcDtcbiAgfVxuXG4gIHN0cmFpZ2h0ZW5ZUGF0aChjbGllbnRYKSB7XG4gICAgY29uc3QgZXZEYXRhID0gdGhpcy5ldkRhdGE7XG4gICAgY29uc3Qgb3JkID0gZXZEYXRhLm9yZDtcbiAgICBjb25zdCBjcm9wT2Zmc2V0ID0gZXZEYXRhLmNyb3BPZmZzZXQ7XG4gICAgY29uc3QgY3JvcFN0YXJ0V2lkdGggPSBldkRhdGEuY3JvcFN0YXJ0V2lkdGggLyAxMDAgKiB0aGlzLmltYWdlUmVmLndpZHRoO1xuICAgIGNvbnN0IGNyb3BTdGFydEhlaWdodCA9IGV2RGF0YS5jcm9wU3RhcnRIZWlnaHQgLyAxMDAgKiB0aGlzLmltYWdlUmVmLmhlaWdodDtcbiAgICBsZXQgaztcbiAgICBsZXQgZDtcblxuICAgIGlmIChvcmQgPT09ICdudycgfHwgb3JkID09PSAnc2UnKSB7XG4gICAgICBrID0gY3JvcFN0YXJ0SGVpZ2h0IC8gY3JvcFN0YXJ0V2lkdGg7XG4gICAgICBkID0gY3JvcE9mZnNldC50b3AgLSBjcm9wT2Zmc2V0LmxlZnQgKiBrO1xuICAgIH0gZWxzZSB7XG4gICAgICBrID0gLWNyb3BTdGFydEhlaWdodCAvIGNyb3BTdGFydFdpZHRoO1xuICAgICAgZCA9IGNyb3BPZmZzZXQudG9wICsgKGNyb3BTdGFydEhlaWdodCAtIGNyb3BPZmZzZXQubGVmdCAqIGspO1xuICAgIH1cblxuICAgIHJldHVybiBrICogY2xpZW50WCArIGQ7XG4gIH1cblxuICBjcmVhdGVDcm9wU2VsZWN0aW9uKCkge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLmdldENyb3BTdHlsZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtuID0+IHtcbiAgICAgICAgICB0aGlzLmNyb3BTZWxlY3RSZWYgPSBuO1xuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIGNsYXNzTmFtZT1cIlJlYWN0Q3JvcF9fY3JvcC1zZWxlY3Rpb25cIlxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5vbkNyb3BNb3VzZVRvdWNoRG93bn1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLm9uQ3JvcE1vdXNlVG91Y2hEb3dufVxuICAgICAgPlxuICAgICAgICB7IWRpc2FibGVkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlYWN0Q3JvcF9fZHJhZy1lbGVtZW50c1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWFjdENyb3BfX2RyYWctYmFyIG9yZC1uXCIgZGF0YS1vcmQ9XCJuXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVhY3RDcm9wX19kcmFnLWJhciBvcmQtZVwiIGRhdGEtb3JkPVwiZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlYWN0Q3JvcF9fZHJhZy1iYXIgb3JkLXNcIiBkYXRhLW9yZD1cInNcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWFjdENyb3BfX2RyYWctYmFyIG9yZC13XCIgZGF0YS1vcmQ9XCJ3XCIgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWFjdENyb3BfX2RyYWctaGFuZGxlIG9yZC1ud1wiIGRhdGEtb3JkPVwibndcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWFjdENyb3BfX2RyYWctaGFuZGxlIG9yZC1uXCIgZGF0YS1vcmQ9XCJuXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVhY3RDcm9wX19kcmFnLWhhbmRsZSBvcmQtbmVcIiBkYXRhLW9yZD1cIm5lXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVhY3RDcm9wX19kcmFnLWhhbmRsZSBvcmQtZVwiIGRhdGEtb3JkPVwiZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlYWN0Q3JvcF9fZHJhZy1oYW5kbGUgb3JkLXNlXCIgZGF0YS1vcmQ9XCJzZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlYWN0Q3JvcF9fZHJhZy1oYW5kbGUgb3JkLXNcIiBkYXRhLW9yZD1cInNcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWFjdENyb3BfX2RyYWctaGFuZGxlIG9yZC1zd1wiIGRhdGEtb3JkPVwic3dcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWFjdENyb3BfX2RyYWctaGFuZGxlIG9yZC13XCIgZGF0YS1vcmQ9XCJ3XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBtYWtlTmV3Q3JvcCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uUmVhY3RDcm9wLmRlZmF1bHRDcm9wLFxuICAgICAgLi4udGhpcy5wcm9wcy5jcm9wLFxuICAgIH07XG4gIH1cblxuICBjcm9zc092ZXJDaGVjaygpIHtcbiAgICBjb25zdCBldkRhdGEgPSB0aGlzLmV2RGF0YTtcblxuICAgIGlmIChcbiAgICAgICghZXZEYXRhLnhDcm9zc092ZXIgJiZcbiAgICAgICAgLU1hdGguYWJzKGV2RGF0YS5jcm9wU3RhcnRXaWR0aCkgLSBldkRhdGEueERpZmZQYyA+PSAwKSB8fFxuICAgICAgKGV2RGF0YS54Q3Jvc3NPdmVyICYmXG4gICAgICAgIC1NYXRoLmFicyhldkRhdGEuY3JvcFN0YXJ0V2lkdGgpIC0gZXZEYXRhLnhEaWZmUGMgPD0gMClcbiAgICApIHtcbiAgICAgIGV2RGF0YS54Q3Jvc3NPdmVyID0gIWV2RGF0YS54Q3Jvc3NPdmVyO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICghZXZEYXRhLnlDcm9zc092ZXIgJiZcbiAgICAgICAgLU1hdGguYWJzKGV2RGF0YS5jcm9wU3RhcnRIZWlnaHQpIC0gZXZEYXRhLnlEaWZmUGMgPj0gMCkgfHxcbiAgICAgIChldkRhdGEueUNyb3NzT3ZlciAmJlxuICAgICAgICAtTWF0aC5hYnMoZXZEYXRhLmNyb3BTdGFydEhlaWdodCkgLSBldkRhdGEueURpZmZQYyA8PSAwKVxuICAgICkge1xuICAgICAgZXZEYXRhLnlDcm9zc092ZXIgPSAhZXZEYXRhLnlDcm9zc092ZXI7XG4gICAgfVxuXG4gICAgY29uc3Qgc3dhcFhPcmQgPSBldkRhdGEueENyb3NzT3ZlciAhPT0gZXZEYXRhLnN0YXJ0WENyb3NzT3ZlcjtcbiAgICBjb25zdCBzd2FwWU9yZCA9IGV2RGF0YS55Q3Jvc3NPdmVyICE9PSBldkRhdGEuc3RhcnRZQ3Jvc3NPdmVyO1xuXG4gICAgZXZEYXRhLmludmVyc2VkWE9yZCA9IHN3YXBYT3JkID8gaW52ZXJzZU9yZChldkRhdGEub3JkKSA6IGZhbHNlO1xuICAgIGV2RGF0YS5pbnZlcnNlZFlPcmQgPSBzd2FwWU9yZCA/IGludmVyc2VPcmQoZXZEYXRhLm9yZCkgOiBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBjcm9zc29yaWdpbiwgY3JvcCwgZGlzYWJsZWQsIGltYWdlQWx0LCBzcmMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjcm9wSXNBY3RpdmUgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGNyb3BTZWxlY3Rpb247XG5cbiAgICBpZiAoaXNDcm9wVmFsaWQoY3JvcCkpIHtcbiAgICAgIGNyb3BTZWxlY3Rpb24gPSB0aGlzLmNyZWF0ZUNyb3BTZWxlY3Rpb24oKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb25lbnRDbGFzc2VzID0gWydSZWFjdENyb3AnXTtcblxuICAgIGlmIChjcm9wSXNBY3RpdmUpIHtcbiAgICAgIGNvbXBvbmVudENsYXNzZXMucHVzaCgnUmVhY3RDcm9wLS1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBpZiAoY3JvcCkge1xuICAgICAgaWYgKGNyb3AuYXNwZWN0KSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzZXMucHVzaCgnUmVhY3RDcm9wLS1maXhlZC1hc3BlY3QnKTtcbiAgICAgIH1cblxuICAgICAgLy8gSW4gdGhpcyBjYXNlIHdlIGhhdmUgdG8gc2hhZG93IHRoZSBpbWFnZSwgc2luY2UgdGhlIGJveC1zaGFkb3dcbiAgICAgIC8vIG9uIHRoZSBjcm9wIHdvbid0IHdvcmsuXG4gICAgICBpZiAoY3JvcElzQWN0aXZlICYmICghY3JvcC53aWR0aCB8fCAhY3JvcC5oZWlnaHQpKSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzZXMucHVzaCgnUmVhY3RDcm9wLS1jcm9wLWludmlzaWJsZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgY29tcG9uZW50Q2xhc3Nlcy5wdXNoKCdSZWFjdENyb3AtLWRpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtuID0+IHtcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IG47XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17Y29tcG9uZW50Q2xhc3Nlcy5qb2luKCcgJyl9XG4gICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5vbkNvbXBvbmVudE1vdXNlVG91Y2hEb3dufVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5vbkNvbXBvbmVudE1vdXNlVG91Y2hEb3dufVxuICAgICAgICB0YWJJbmRleD1cIjFcIlxuICAgICAgICBvbktleURvd249e3RoaXMub25Db21wb25lbnRLZXlEb3dufVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgcmVmPXtuID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VSZWYgPSBuO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e2Nyb3Nzb3JpZ2lufVxuICAgICAgICAgIGNsYXNzTmFtZT1cIlJlYWN0Q3JvcF9faW1hZ2VcIlxuICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgIG9uTG9hZD17ZSA9PiB0aGlzLm9uSW1hZ2VMb2FkKGUudGFyZ2V0KX1cbiAgICAgICAgICBhbHQ9e2ltYWdlQWx0fVxuICAgICAgICAvPlxuXG4gICAgICAgIHtjcm9wU2VsZWN0aW9ufVxuXG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUmVhY3RDcm9wLnhPcmRzID0gWydlJywgJ3cnXTtcblJlYWN0Q3JvcC55T3JkcyA9IFsnbicsICdzJ107XG5SZWFjdENyb3AueHlPcmRzID0gWydudycsICduZScsICdzZScsICdzdyddO1xuXG5SZWFjdENyb3AuYXJyb3dLZXkgPSB7XG4gIGxlZnQ6IDM3LFxuICB1cDogMzgsXG4gIHJpZ2h0OiAzOSxcbiAgZG93bjogNDAsXG59O1xuXG5SZWFjdENyb3AubnVkZ2VTdGVwID0gMC4yO1xuXG5SZWFjdENyb3AuZGVmYXVsdENyb3AgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHdpZHRoOiAwLFxuICBoZWlnaHQ6IDAsXG59O1xuXG5SZWFjdENyb3AucHJvcFR5cGVzID0ge1xuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY3JvcDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhc3BlY3Q6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgeDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIGltYWdlQWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtaW5XaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgbWluSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXhXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgbWF4SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBrZWVwU2VsZWN0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICBvbkltYWdlTG9hZGVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25EcmFnU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkRyYWdFbmQ6IFByb3BUeXBlcy5mdW5jLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNyb3Nzb3JpZ2luOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxuICAgIFByb3BUeXBlcy5ub2RlLFxuICBdKSxcbn07XG5cblJlYWN0Q3JvcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNyb3A6IHVuZGVmaW5lZCxcbiAgY3Jvc3NvcmlnaW46IHVuZGVmaW5lZCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBpbWFnZUFsdDogJycsXG4gIG1heFdpZHRoOiAxMDAsXG4gIG1heEhlaWdodDogMTAwLFxuICBtaW5XaWR0aDogMCxcbiAgbWluSGVpZ2h0OiAwLFxuICBrZWVwU2VsZWN0aW9uOiBmYWxzZSxcbiAgb25Db21wbGV0ZTogKCkgPT4ge30sXG4gIG9uSW1hZ2VMb2FkZWQ6ICgpID0+IHt9LFxuICBvbkRyYWdTdGFydDogKCkgPT4ge30sXG4gIG9uRHJhZ0VuZDogKCkgPT4ge30sXG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdENyb3A7XG4iXX0=
