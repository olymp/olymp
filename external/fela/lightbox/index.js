'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactScrolllock = require('react-scrolllock');

var _reactScrolllock2 = _interopRequireDefault(_reactScrolllock);

var _noImportant = require('aphrodite/no-important');

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

var _Arrow = require('./components/Arrow');

var _Arrow2 = _interopRequireDefault(_Arrow);

var _Container = require('./components/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Footer = require('./components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = require('./components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _PaginatedThumbnails = require('./components/PaginatedThumbnails');

var _PaginatedThumbnails2 = _interopRequireDefault(_PaginatedThumbnails);

var _portal = require('../portal');

var _portal2 = _interopRequireDefault(_portal);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _react2.default.createElement('span', { key: 'closed' });

var _ref2 = _react2.default.createElement(_reactScrolllock2.default, null);

var Lightbox = function (_Component) {
  _inherits(Lightbox, _Component);

  function Lightbox(props) {
    _classCallCheck(this, Lightbox);

    var _this = _possibleConstructorReturn(this, (Lightbox.__proto__ || Object.getPrototypeOf(Lightbox)).call(this, props));

    _this.theme = (0, _utils.deepMerge)(_theme2.default, props.theme);
    _this.classes = _noImportant.StyleSheet.create((0, _utils.deepMerge)(defaultStyles, _this.theme));
    _utils.bindFunctions.call(_this, ['gotoNext', 'gotoPrev', 'closeBackdrop', 'handleKeyboardInput']);
    return _this;
  }

  _createClass(Lightbox, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        theme: this.theme
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isOpen && this.props.enableKeyboardInput) {
        window.addEventListener('keydown', this.handleKeyboardInput);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!_utils.canUseDom) {
        return;
      }

      // preload images
      if (nextProps.preloadNextImage) {
        var currentIndex = this.props.currentImage;
        var nextIndex = nextProps.currentImage + 1;
        var prevIndex = nextProps.currentImage - 1;
        var preloadIndex = void 0;

        if (currentIndex && nextProps.currentImage > currentIndex) {
          preloadIndex = nextIndex;
        } else if (currentIndex && nextProps.currentImage < currentIndex) {
          preloadIndex = prevIndex;
        }

        // if we know the user's direction just get one image
        // otherwise, to be safe, we need to grab one in each direction
        if (preloadIndex) {
          this.preloadImage(preloadIndex);
        } else {
          this.preloadImage(prevIndex);
          this.preloadImage(nextIndex);
        }
      }

      // add/remove event listeners
      if (!this.props.isOpen && nextProps.isOpen && nextProps.enableKeyboardInput) {
        window.addEventListener('keydown', this.handleKeyboardInput);
      }
      if (!nextProps.isOpen && nextProps.enableKeyboardInput) {
        window.removeEventListener('keydown', this.handleKeyboardInput);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.enableKeyboardInput) {
        window.removeEventListener('keydown', this.handleKeyboardInput);
      }
    }

    // ==============================
    // METHODS
    // ==============================

  }, {
    key: 'preloadImage',
    value: function preloadImage(idx) {
      var image = this.props.images[idx];

      if (!image) {
        return;
      }

      var img = new Image();

      img.src = image.src;
      img.srcset = img.srcSet || img.srcset;

      if (image.srcset) {
        img.srcset = image.srcset.join();
      }
    }
  }, {
    key: 'gotoNext',
    value: function gotoNext(event) {
      if (this.props.currentImage === this.props.images.length - 1) {
        return;
      }
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      this.props.onClickNext();
    }
  }, {
    key: 'gotoPrev',
    value: function gotoPrev(event) {
      if (this.props.currentImage === 0) {
        return;
      }
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      this.props.onClickPrev();
    }
  }, {
    key: 'closeBackdrop',
    value: function closeBackdrop(event) {
      // make sure event only happens if they click the backdrop
      // and if the caption is widening the figure element let that respond too
      if (event.target.id === 'lightboxBackdrop' || event.target.tagName === 'FIGURE') {
        this.props.onClose();
      }
    }
  }, {
    key: 'handleKeyboardInput',
    value: function handleKeyboardInput(event) {
      if (event.keyCode === 37) {
        // left
        this.gotoPrev(event);
        return true;
      } else if (event.keyCode === 39) {
        // right
        this.gotoNext(event);
        return true;
      } else if (event.keyCode === 27) {
        // esc
        this.props.onClose();
        return true;
      }
      return false;
    }

    // ==============================
    // RENDERERS
    // ==============================

  }, {
    key: 'renderArrowPrev',
    value: function renderArrowPrev() {
      if (this.props.currentImage === 0) {
        return null;
      }

      return _react2.default.createElement(_Arrow2.default, {
        direction: 'left',
        icon: 'arrowLeft',
        onClick: this.gotoPrev,
        title: this.props.leftArrowTitle,
        type: 'button'
      });
    }
  }, {
    key: 'renderArrowNext',
    value: function renderArrowNext() {
      if (this.props.currentImage === this.props.images.length - 1) {
        return null;
      }

      return _react2.default.createElement(_Arrow2.default, {
        direction: 'right',
        icon: 'arrowRight',
        onClick: this.gotoNext,
        title: this.props.rightArrowTitle,
        type: 'button'
      });
    }
  }, {
    key: 'renderDialog',
    value: function renderDialog() {
      var _props = this.props,
          backdropClosesModal = _props.backdropClosesModal,
          customControls = _props.customControls,
          isOpen = _props.isOpen,
          onClose = _props.onClose,
          showCloseButton = _props.showCloseButton,
          showThumbnails = _props.showThumbnails,
          width = _props.width;


      if (!isOpen) {
        return _ref;
      }

      var offsetThumbnails = 0;
      if (showThumbnails) {
        offsetThumbnails = this.theme.thumbnail.size + this.theme.container.gutter.vertical;
      }

      return _react2.default.createElement(
        _Container2.default,
        {
          key: 'open',
          onClick: !!backdropClosesModal && this.closeBackdrop,
          onTouchEnd: !!backdropClosesModal && this.closeBackdrop
        },
        _react2.default.createElement(
          'div',
          {
            className: (0, _noImportant.css)(this.classes.content),
            style: { marginBottom: offsetThumbnails, maxWidth: width }
          },
          _react2.default.createElement(_Header2.default, {
            customControls: customControls,
            onClose: onClose,
            showCloseButton: showCloseButton,
            closeButtonTitle: this.props.closeButtonTitle
          }),
          this.renderImages()
        ),
        this.renderThumbnails(),
        this.renderArrowPrev(),
        this.renderArrowNext(),
        _ref2
      );
    }
  }, {
    key: 'renderImages',
    value: function renderImages() {
      var _props2 = this.props,
          currentImage = _props2.currentImage,
          images = _props2.images,
          imageCountSeparator = _props2.imageCountSeparator,
          onClickImage = _props2.onClickImage,
          showImageCount = _props2.showImageCount,
          showThumbnails = _props2.showThumbnails;


      if (!images || !images.length) {
        return null;
      }

      var image = images[currentImage];
      image.srcset = image.srcSet || image.srcset;

      var isPdf = image.origin && image.origin.indexOf('.pdf') !== -1;

      var srcset = void 0;
      var sizes = void 0;

      if (image.srcset) {
        srcset = image.srcset.join();
        sizes = '100vw';
      }

      var thumbnailsSize = showThumbnails ? this.theme.thumbnail.size : 0;
      var heightOffset = this.theme.header.height + this.theme.footer.height + thumbnailsSize + this.theme.container.gutter.vertical + 'px';

      return _react2.default.createElement(
        'figure',
        { className: (0, _noImportant.css)(this.classes.figure) },
        isPdf ? _react2.default.createElement(
          'object',
          {
            name: image.caption,
            data: image.origin,
            width: 500,
            height: image.height * 500 / image.width,
            type: 'application/pdf'
          },
          _react2.default.createElement('embed', {
            data: image.origin,
            width: 500,
            height: image.height * 500 / image.width,
            type: 'application/pdf'
          })
        ) : _react2.default.createElement('img', {
          className: (0, _noImportant.css)(this.classes.image),
          onClick: onClickImage || undefined,
          sizes: sizes,
          alt: image.alt,
          src: image.src,
          srcSet: srcset,
          style: {
            cursor: this.props.onClickImage ? 'pointer' : 'auto',
            maxHeight: 'calc(100vh - ' + heightOffset + ')'
          }
        }),
        _react2.default.createElement(_Footer2.default, {
          caption: images[currentImage].caption,
          countCurrent: currentImage + 1,
          countSeparator: imageCountSeparator,
          countTotal: images.length,
          showCount: showImageCount
        })
      );
    }
  }, {
    key: 'renderThumbnails',
    value: function renderThumbnails() {
      var _props3 = this.props,
          images = _props3.images,
          currentImage = _props3.currentImage,
          onClickThumbnail = _props3.onClickThumbnail,
          showThumbnails = _props3.showThumbnails,
          thumbnailOffset = _props3.thumbnailOffset;


      if (!showThumbnails) {
        return;
      }

      return _react2.default.createElement(_PaginatedThumbnails2.default, {
        currentImage: currentImage,
        images: images,
        offset: thumbnailOffset,
        onClickThumbnail: onClickThumbnail
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _portal2.default,
        null,
        this.renderDialog()
      );
    }
  }]);

  return Lightbox;
}(_react.Component);

Lightbox.propTypes = {
  backdropClosesModal: _propTypes2.default.bool,
  closeButtonTitle: _propTypes2.default.string,
  currentImage: _propTypes2.default.number,
  customControls: _propTypes2.default.arrayOf(_propTypes2.default.node),
  enableKeyboardInput: _propTypes2.default.bool,
  imageCountSeparator: _propTypes2.default.string,
  images: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    src: _propTypes2.default.string.isRequired,
    srcset: _propTypes2.default.array,
    caption: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    thumbnail: _propTypes2.default.string
  })).isRequired,
  isOpen: _propTypes2.default.bool,
  leftArrowTitle: _propTypes2.default.string,
  onClickImage: _propTypes2.default.func,
  onClickNext: _propTypes2.default.func,
  onClickPrev: _propTypes2.default.func,
  onClose: _propTypes2.default.func.isRequired,
  preloadNextImage: _propTypes2.default.bool,
  rightArrowTitle: _propTypes2.default.string,
  showCloseButton: _propTypes2.default.bool,
  showImageCount: _propTypes2.default.bool,
  showThumbnails: _propTypes2.default.bool,
  theme: _propTypes2.default.object,
  thumbnailOffset: _propTypes2.default.number,
  width: _propTypes2.default.number
};
Lightbox.defaultProps = {
  closeButtonTitle: 'Close (Esc)',
  currentImage: 0,
  enableKeyboardInput: true,
  imageCountSeparator: ' of ',
  leftArrowTitle: 'Previous (Left arrow key)',
  onClickShowNextImage: true,
  preloadNextImage: true,
  rightArrowTitle: 'Next (Right arrow key)',
  showCloseButton: true,
  showImageCount: true,
  theme: {},
  thumbnailOffset: 2,
  width: 1024
};
Lightbox.childContextTypes = {
  theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
  content: {
    position: 'relative'
  },
  figure: {
    margin: 0 // remove browser default
  },
  image: {
    display: 'block', // removes browser default gutter
    height: 'auto',
    margin: '0 auto', // maintain center on very short screens OR very narrow image
    maxWidth: '100%',

    // disable user select
    WebkitTouchCallout: 'none',
    userSelect: 'none'
  }
};

exports.default = Lightbox;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbGlnaHRib3gvaW5kZXguZXM2Il0sIm5hbWVzIjpbIkxpZ2h0Ym94IiwicHJvcHMiLCJ0aGVtZSIsImNsYXNzZXMiLCJjcmVhdGUiLCJkZWZhdWx0U3R5bGVzIiwiY2FsbCIsImlzT3BlbiIsImVuYWJsZUtleWJvYXJkSW5wdXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5Ym9hcmRJbnB1dCIsIm5leHRQcm9wcyIsInByZWxvYWROZXh0SW1hZ2UiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50SW1hZ2UiLCJuZXh0SW5kZXgiLCJwcmV2SW5kZXgiLCJwcmVsb2FkSW5kZXgiLCJwcmVsb2FkSW1hZ2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaWR4IiwiaW1hZ2UiLCJpbWFnZXMiLCJpbWciLCJJbWFnZSIsInNyYyIsInNyY3NldCIsInNyY1NldCIsImpvaW4iLCJldmVudCIsImxlbmd0aCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwib25DbGlja05leHQiLCJvbkNsaWNrUHJldiIsInRhcmdldCIsImlkIiwidGFnTmFtZSIsIm9uQ2xvc2UiLCJrZXlDb2RlIiwiZ290b1ByZXYiLCJnb3RvTmV4dCIsImxlZnRBcnJvd1RpdGxlIiwicmlnaHRBcnJvd1RpdGxlIiwiYmFja2Ryb3BDbG9zZXNNb2RhbCIsImN1c3RvbUNvbnRyb2xzIiwic2hvd0Nsb3NlQnV0dG9uIiwic2hvd1RodW1ibmFpbHMiLCJ3aWR0aCIsIm9mZnNldFRodW1ibmFpbHMiLCJ0aHVtYm5haWwiLCJzaXplIiwiY29udGFpbmVyIiwiZ3V0dGVyIiwidmVydGljYWwiLCJjbG9zZUJhY2tkcm9wIiwiY29udGVudCIsIm1hcmdpbkJvdHRvbSIsIm1heFdpZHRoIiwiY2xvc2VCdXR0b25UaXRsZSIsInJlbmRlckltYWdlcyIsInJlbmRlclRodW1ibmFpbHMiLCJyZW5kZXJBcnJvd1ByZXYiLCJyZW5kZXJBcnJvd05leHQiLCJpbWFnZUNvdW50U2VwYXJhdG9yIiwib25DbGlja0ltYWdlIiwic2hvd0ltYWdlQ291bnQiLCJpc1BkZiIsIm9yaWdpbiIsImluZGV4T2YiLCJzaXplcyIsInRodW1ibmFpbHNTaXplIiwiaGVpZ2h0T2Zmc2V0IiwiaGVhZGVyIiwiaGVpZ2h0IiwiZm9vdGVyIiwiZmlndXJlIiwiY2FwdGlvbiIsInVuZGVmaW5lZCIsImFsdCIsImN1cnNvciIsIm1heEhlaWdodCIsIm9uQ2xpY2tUaHVtYm5haWwiLCJ0aHVtYm5haWxPZmZzZXQiLCJyZW5kZXJEaWFsb2ciLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwibnVtYmVyIiwiYXJyYXlPZiIsIm5vZGUiLCJzaGFwZSIsImlzUmVxdWlyZWQiLCJhcnJheSIsIm9uZU9mVHlwZSIsImVsZW1lbnQiLCJmdW5jIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwib25DbGlja1Nob3dOZXh0SW1hZ2UiLCJjaGlsZENvbnRleHRUeXBlcyIsInBvc2l0aW9uIiwibWFyZ2luIiwiZGlzcGxheSIsIldlYmtpdFRvdWNoQ2FsbG91dCIsInVzZXJTZWxlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7OztXQXVMYSx3Q0FBTSxLQUFJLFFBQVYsRzs7WUE4QkwsOEQ7O0lBbk5GQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsdUNBQXdCRCxNQUFNQyxLQUE5QixDQUFiO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLHdCQUFXQyxNQUFYLENBQWtCLHNCQUFVQyxhQUFWLEVBQXlCLE1BQUtILEtBQTlCLENBQWxCLENBQWY7QUFDQSx5QkFBY0ksSUFBZCxRQUF5QixDQUN2QixVQUR1QixFQUV2QixVQUZ1QixFQUd2QixlQUh1QixF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cnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTY3JvbGxMb2NrIGZyb20gJ3JlYWN0LXNjcm9sbGxvY2snO1xuaW1wb3J0IHsgY3NzLCBTdHlsZVNoZWV0IH0gZnJvbSAnYXBocm9kaXRlL25vLWltcG9ydGFudCc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vdGhlbWUnO1xuaW1wb3J0IEFycm93IGZyb20gJy4vY29tcG9uZW50cy9BcnJvdyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9Db250YWluZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgUGFnaW5hdGVkVGh1bWJuYWlscyBmcm9tICcuL2NvbXBvbmVudHMvUGFnaW5hdGVkVGh1bWJuYWlscyc7XG5pbXBvcnQgUG9ydGFsIGZyb20gJy4uL3BvcnRhbCc7XG5cbmltcG9ydCB7IGJpbmRGdW5jdGlvbnMsIGNhblVzZURvbSwgZGVlcE1lcmdlIH0gZnJvbSAnLi91dGlscyc7XG5cbmNsYXNzIExpZ2h0Ym94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy50aGVtZSA9IGRlZXBNZXJnZShkZWZhdWx0VGhlbWUsIHByb3BzLnRoZW1lKTtcbiAgICB0aGlzLmNsYXNzZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZShkZWVwTWVyZ2UoZGVmYXVsdFN0eWxlcywgdGhpcy50aGVtZSkpO1xuICAgIGJpbmRGdW5jdGlvbnMuY2FsbCh0aGlzLCBbXG4gICAgICAnZ290b05leHQnLFxuICAgICAgJ2dvdG9QcmV2JyxcbiAgICAgICdjbG9zZUJhY2tkcm9wJyxcbiAgICAgICdoYW5kbGVLZXlib2FyZElucHV0JyxcbiAgICBdKTtcbiAgfVxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRoZW1lOiB0aGlzLnRoZW1lLFxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmIHRoaXMucHJvcHMuZW5hYmxlS2V5Ym9hcmRJbnB1dCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWJvYXJkSW5wdXQpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICghY2FuVXNlRG9tKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gcHJlbG9hZCBpbWFnZXNcbiAgICBpZiAobmV4dFByb3BzLnByZWxvYWROZXh0SW1hZ2UpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMucHJvcHMuY3VycmVudEltYWdlO1xuICAgICAgY29uc3QgbmV4dEluZGV4ID0gbmV4dFByb3BzLmN1cnJlbnRJbWFnZSArIDE7XG4gICAgICBjb25zdCBwcmV2SW5kZXggPSBuZXh0UHJvcHMuY3VycmVudEltYWdlIC0gMTtcbiAgICAgIGxldCBwcmVsb2FkSW5kZXg7XG5cbiAgICAgIGlmIChjdXJyZW50SW5kZXggJiYgbmV4dFByb3BzLmN1cnJlbnRJbWFnZSA+IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBwcmVsb2FkSW5kZXggPSBuZXh0SW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCAmJiBuZXh0UHJvcHMuY3VycmVudEltYWdlIDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIHByZWxvYWRJbmRleCA9IHByZXZJbmRleDtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgd2Uga25vdyB0aGUgdXNlcidzIGRpcmVjdGlvbiBqdXN0IGdldCBvbmUgaW1hZ2VcbiAgICAgIC8vIG90aGVyd2lzZSwgdG8gYmUgc2FmZSwgd2UgbmVlZCB0byBncmFiIG9uZSBpbiBlYWNoIGRpcmVjdGlvblxuICAgICAgaWYgKHByZWxvYWRJbmRleCkge1xuICAgICAgICB0aGlzLnByZWxvYWRJbWFnZShwcmVsb2FkSW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmVsb2FkSW1hZ2UocHJldkluZGV4KTtcbiAgICAgICAgdGhpcy5wcmVsb2FkSW1hZ2UobmV4dEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQvcmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xuICAgIGlmIChcbiAgICAgICF0aGlzLnByb3BzLmlzT3BlbiAmJlxuICAgICAgbmV4dFByb3BzLmlzT3BlbiAmJlxuICAgICAgbmV4dFByb3BzLmVuYWJsZUtleWJvYXJkSW5wdXRcbiAgICApIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlib2FyZElucHV0KTtcbiAgICB9XG4gICAgaWYgKCFuZXh0UHJvcHMuaXNPcGVuICYmIG5leHRQcm9wcy5lbmFibGVLZXlib2FyZElucHV0KSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5Ym9hcmRJbnB1dCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZUtleWJvYXJkSW5wdXQpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlib2FyZElucHV0KTtcbiAgICB9XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gTUVUSE9EU1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBwcmVsb2FkSW1hZ2UoaWR4KSB7XG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLnByb3BzLmltYWdlc1tpZHhdO1xuXG4gICAgaWYgKCFpbWFnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgaW1nLnNyYyA9IGltYWdlLnNyYztcbiAgICBpbWcuc3Jjc2V0ID0gaW1nLnNyY1NldCB8fCBpbWcuc3Jjc2V0O1xuXG4gICAgaWYgKGltYWdlLnNyY3NldCkge1xuICAgICAgaW1nLnNyY3NldCA9IGltYWdlLnNyY3NldC5qb2luKCk7XG4gICAgfVxuICB9XG4gIGdvdG9OZXh0KGV2ZW50KSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY3VycmVudEltYWdlID09PSB0aGlzLnByb3BzLmltYWdlcy5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2xpY2tOZXh0KCk7XG4gIH1cbiAgZ290b1ByZXYoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50SW1hZ2UgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DbGlja1ByZXYoKTtcbiAgfVxuICBjbG9zZUJhY2tkcm9wKGV2ZW50KSB7XG4gICAgLy8gbWFrZSBzdXJlIGV2ZW50IG9ubHkgaGFwcGVucyBpZiB0aGV5IGNsaWNrIHRoZSBiYWNrZHJvcFxuICAgIC8vIGFuZCBpZiB0aGUgY2FwdGlvbiBpcyB3aWRlbmluZyB0aGUgZmlndXJlIGVsZW1lbnQgbGV0IHRoYXQgcmVzcG9uZCB0b29cbiAgICBpZiAoXG4gICAgICBldmVudC50YXJnZXQuaWQgPT09ICdsaWdodGJveEJhY2tkcm9wJyB8fFxuICAgICAgZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdGSUdVUkUnXG4gICAgKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlS2V5Ym9hcmRJbnB1dChldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykge1xuICAgICAgLy8gbGVmdFxuICAgICAgdGhpcy5nb3RvUHJldihldmVudCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAvLyByaWdodFxuICAgICAgdGhpcy5nb3RvTmV4dChldmVudCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAvLyBlc2NcbiAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBSRU5ERVJFUlNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgcmVuZGVyQXJyb3dQcmV2KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRJbWFnZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBcnJvd1xuICAgICAgICBkaXJlY3Rpb249XCJsZWZ0XCJcbiAgICAgICAgaWNvbj1cImFycm93TGVmdFwiXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuZ290b1ByZXZ9XG4gICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLmxlZnRBcnJvd1RpdGxlfVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICByZW5kZXJBcnJvd05leHQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY3VycmVudEltYWdlID09PSB0aGlzLnByb3BzLmltYWdlcy5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFycm93XG4gICAgICAgIGRpcmVjdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgaWNvbj1cImFycm93UmlnaHRcIlxuICAgICAgICBvbkNsaWNrPXt0aGlzLmdvdG9OZXh0fVxuICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5yaWdodEFycm93VGl0bGV9XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgLz5cbiAgICApO1xuICB9XG4gIHJlbmRlckRpYWxvZygpIHtcbiAgICBjb25zdCB7XG4gICAgICBiYWNrZHJvcENsb3Nlc01vZGFsLFxuICAgICAgY3VzdG9tQ29udHJvbHMsXG4gICAgICBpc09wZW4sXG4gICAgICBvbkNsb3NlLFxuICAgICAgc2hvd0Nsb3NlQnV0dG9uLFxuICAgICAgc2hvd1RodW1ibmFpbHMsXG4gICAgICB3aWR0aCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghaXNPcGVuKSB7XG4gICAgICByZXR1cm4gPHNwYW4ga2V5PVwiY2xvc2VkXCIgLz47XG4gICAgfVxuXG4gICAgbGV0IG9mZnNldFRodW1ibmFpbHMgPSAwO1xuICAgIGlmIChzaG93VGh1bWJuYWlscykge1xuICAgICAgb2Zmc2V0VGh1bWJuYWlscyA9XG4gICAgICAgIHRoaXMudGhlbWUudGh1bWJuYWlsLnNpemUgKyB0aGlzLnRoZW1lLmNvbnRhaW5lci5ndXR0ZXIudmVydGljYWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXJcbiAgICAgICAga2V5PVwib3BlblwiXG4gICAgICAgIG9uQ2xpY2s9eyEhYmFja2Ryb3BDbG9zZXNNb2RhbCAmJiB0aGlzLmNsb3NlQmFja2Ryb3B9XG4gICAgICAgIG9uVG91Y2hFbmQ9eyEhYmFja2Ryb3BDbG9zZXNNb2RhbCAmJiB0aGlzLmNsb3NlQmFja2Ryb3B9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Nzcyh0aGlzLmNsYXNzZXMuY29udGVudCl9XG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBvZmZzZXRUaHVtYm5haWxzLCBtYXhXaWR0aDogd2lkdGggfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgIGN1c3RvbUNvbnRyb2xzPXtjdXN0b21Db250cm9sc31cbiAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b249e3Nob3dDbG9zZUJ1dHRvbn1cbiAgICAgICAgICAgIGNsb3NlQnV0dG9uVGl0bGU9e3RoaXMucHJvcHMuY2xvc2VCdXR0b25UaXRsZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHt0aGlzLnJlbmRlckltYWdlcygpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucmVuZGVyVGh1bWJuYWlscygpfVxuICAgICAgICB7dGhpcy5yZW5kZXJBcnJvd1ByZXYoKX1cbiAgICAgICAge3RoaXMucmVuZGVyQXJyb3dOZXh0KCl9XG4gICAgICAgIDxTY3JvbGxMb2NrIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG4gIHJlbmRlckltYWdlcygpIHtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW50SW1hZ2UsXG4gICAgICBpbWFnZXMsXG4gICAgICBpbWFnZUNvdW50U2VwYXJhdG9yLFxuICAgICAgb25DbGlja0ltYWdlLFxuICAgICAgc2hvd0ltYWdlQ291bnQsXG4gICAgICBzaG93VGh1bWJuYWlscyxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghaW1hZ2VzIHx8ICFpbWFnZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBpbWFnZSA9IGltYWdlc1tjdXJyZW50SW1hZ2VdO1xuICAgIGltYWdlLnNyY3NldCA9IGltYWdlLnNyY1NldCB8fCBpbWFnZS5zcmNzZXQ7XG5cbiAgICBjb25zdCBpc1BkZiA9IGltYWdlLm9yaWdpbiAmJiBpbWFnZS5vcmlnaW4uaW5kZXhPZignLnBkZicpICE9PSAtMTtcblxuICAgIGxldCBzcmNzZXQ7XG4gICAgbGV0IHNpemVzO1xuXG4gICAgaWYgKGltYWdlLnNyY3NldCkge1xuICAgICAgc3Jjc2V0ID0gaW1hZ2Uuc3Jjc2V0LmpvaW4oKTtcbiAgICAgIHNpemVzID0gJzEwMHZ3JztcbiAgICB9XG5cbiAgICBjb25zdCB0aHVtYm5haWxzU2l6ZSA9IHNob3dUaHVtYm5haWxzID8gdGhpcy50aGVtZS50aHVtYm5haWwuc2l6ZSA6IDA7XG4gICAgY29uc3QgaGVpZ2h0T2Zmc2V0ID0gYCR7dGhpcy50aGVtZS5oZWFkZXIuaGVpZ2h0ICtcbiAgICAgIHRoaXMudGhlbWUuZm9vdGVyLmhlaWdodCArXG4gICAgICB0aHVtYm5haWxzU2l6ZSArXG4gICAgICB0aGlzLnRoZW1lLmNvbnRhaW5lci5ndXR0ZXIudmVydGljYWx9cHhgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtjc3ModGhpcy5jbGFzc2VzLmZpZ3VyZSl9PlxuICAgICAgICB7aXNQZGYgPyAoXG4gICAgICAgICAgPG9iamVjdFxuICAgICAgICAgICAgbmFtZT17aW1hZ2UuY2FwdGlvbn1cbiAgICAgICAgICAgIGRhdGE9e2ltYWdlLm9yaWdpbn1cbiAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICBoZWlnaHQ9e2ltYWdlLmhlaWdodCAqIDUwMCAvIGltYWdlLndpZHRofVxuICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL3BkZlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGVtYmVkXG4gICAgICAgICAgICAgIGRhdGE9e2ltYWdlLm9yaWdpbn1cbiAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXtpbWFnZS5oZWlnaHQgKiA1MDAgLyBpbWFnZS53aWR0aH1cbiAgICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL3BkZlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvb2JqZWN0PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzKHRoaXMuY2xhc3Nlcy5pbWFnZSl9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrSW1hZ2UgfHwgdW5kZWZpbmVkfVxuICAgICAgICAgICAgc2l6ZXM9e3NpemVzfVxuICAgICAgICAgICAgYWx0PXtpbWFnZS5hbHR9XG4gICAgICAgICAgICBzcmM9e2ltYWdlLnNyY31cbiAgICAgICAgICAgIHNyY1NldD17c3Jjc2V0fVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgY3Vyc29yOiB0aGlzLnByb3BzLm9uQ2xpY2tJbWFnZSA/ICdwb2ludGVyJyA6ICdhdXRvJyxcbiAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBgY2FsYygxMDB2aCAtICR7aGVpZ2h0T2Zmc2V0fSlgLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgY2FwdGlvbj17aW1hZ2VzW2N1cnJlbnRJbWFnZV0uY2FwdGlvbn1cbiAgICAgICAgICBjb3VudEN1cnJlbnQ9e2N1cnJlbnRJbWFnZSArIDF9XG4gICAgICAgICAgY291bnRTZXBhcmF0b3I9e2ltYWdlQ291bnRTZXBhcmF0b3J9XG4gICAgICAgICAgY291bnRUb3RhbD17aW1hZ2VzLmxlbmd0aH1cbiAgICAgICAgICBzaG93Q291bnQ9e3Nob3dJbWFnZUNvdW50fVxuICAgICAgICAvPlxuICAgICAgPC9maWd1cmU+XG4gICAgKTtcbiAgfVxuICByZW5kZXJUaHVtYm5haWxzKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGltYWdlcyxcbiAgICAgIGN1cnJlbnRJbWFnZSxcbiAgICAgIG9uQ2xpY2tUaHVtYm5haWwsXG4gICAgICBzaG93VGh1bWJuYWlscyxcbiAgICAgIHRodW1ibmFpbE9mZnNldCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghc2hvd1RodW1ibmFpbHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2luYXRlZFRodW1ibmFpbHNcbiAgICAgICAgY3VycmVudEltYWdlPXtjdXJyZW50SW1hZ2V9XG4gICAgICAgIGltYWdlcz17aW1hZ2VzfVxuICAgICAgICBvZmZzZXQ9e3RodW1ibmFpbE9mZnNldH1cbiAgICAgICAgb25DbGlja1RodW1ibmFpbD17b25DbGlja1RodW1ibmFpbH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxQb3J0YWw+e3RoaXMucmVuZGVyRGlhbG9nKCl9PC9Qb3J0YWw+O1xuICB9XG59XG5cbkxpZ2h0Ym94LnByb3BUeXBlcyA9IHtcbiAgYmFja2Ryb3BDbG9zZXNNb2RhbDogUHJvcFR5cGVzLmJvb2wsXG4gIGNsb3NlQnV0dG9uVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGN1cnJlbnRJbWFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgY3VzdG9tQ29udHJvbHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcbiAgZW5hYmxlS2V5Ym9hcmRJbnB1dDogUHJvcFR5cGVzLmJvb2wsXG4gIGltYWdlQ291bnRTZXBhcmF0b3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgc3Jjc2V0OiBQcm9wVHlwZXMuYXJyYXksXG4gICAgICBjYXB0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgICAgdGh1bWJuYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICApLmlzUmVxdWlyZWQsXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGxlZnRBcnJvd1RpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrSW1hZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNsaWNrTmV4dDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2xpY2tQcmV2OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcHJlbG9hZE5leHRJbWFnZTogUHJvcFR5cGVzLmJvb2wsXG4gIHJpZ2h0QXJyb3dUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2hvd0Nsb3NlQnV0dG9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd0ltYWdlQ291bnQ6IFByb3BUeXBlcy5ib29sLFxuICBzaG93VGh1bWJuYWlsczogUHJvcFR5cGVzLmJvb2wsXG4gIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0aHVtYm5haWxPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcbkxpZ2h0Ym94LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xvc2VCdXR0b25UaXRsZTogJ0Nsb3NlIChFc2MpJyxcbiAgY3VycmVudEltYWdlOiAwLFxuICBlbmFibGVLZXlib2FyZElucHV0OiB0cnVlLFxuICBpbWFnZUNvdW50U2VwYXJhdG9yOiAnIG9mICcsXG4gIGxlZnRBcnJvd1RpdGxlOiAnUHJldmlvdXMgKExlZnQgYXJyb3cga2V5KScsXG4gIG9uQ2xpY2tTaG93TmV4dEltYWdlOiB0cnVlLFxuICBwcmVsb2FkTmV4dEltYWdlOiB0cnVlLFxuICByaWdodEFycm93VGl0bGU6ICdOZXh0IChSaWdodCBhcnJvdyBrZXkpJyxcbiAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxuICBzaG93SW1hZ2VDb3VudDogdHJ1ZSxcbiAgdGhlbWU6IHt9LFxuICB0aHVtYm5haWxPZmZzZXQ6IDIsXG4gIHdpZHRoOiAxMDI0LFxufTtcbkxpZ2h0Ym94LmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgY29udGVudDoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9LFxuICBmaWd1cmU6IHtcbiAgICBtYXJnaW46IDAsIC8vIHJlbW92ZSBicm93c2VyIGRlZmF1bHRcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLCAvLyByZW1vdmVzIGJyb3dzZXIgZGVmYXVsdCBndXR0ZXJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICBtYXJnaW46ICcwIGF1dG8nLCAvLyBtYWludGFpbiBjZW50ZXIgb24gdmVyeSBzaG9ydCBzY3JlZW5zIE9SIHZlcnkgbmFycm93IGltYWdlXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcblxuICAgIC8vIGRpc2FibGUgdXNlciBzZWxlY3RcbiAgICBXZWJraXRUb3VjaENhbGxvdXQ6ICdub25lJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaWdodGJveDtcbiJdfQ==
