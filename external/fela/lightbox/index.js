var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ScrollLock from 'react-scrolllock';
import { css, StyleSheet } from 'aphrodite/no-important';
import defaultTheme from './theme';
import Arrow from './components/Arrow';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import PaginatedThumbnails from './components/PaginatedThumbnails';
import Portal from '../portal';

import { bindFunctions, canUseDom, deepMerge } from './utils';

var _ref = React.createElement('span', { key: 'closed' });

var _ref2 = React.createElement(ScrollLock, null);

var Lightbox = function (_Component) {
  _inherits(Lightbox, _Component);

  function Lightbox(props) {
    _classCallCheck(this, Lightbox);

    var _this = _possibleConstructorReturn(this, (Lightbox.__proto__ || Object.getPrototypeOf(Lightbox)).call(this, props));

    _this.theme = deepMerge(defaultTheme, props.theme);
    _this.classes = StyleSheet.create(deepMerge(defaultStyles, _this.theme));
    bindFunctions.call(_this, ['gotoNext', 'gotoPrev', 'closeBackdrop', 'handleKeyboardInput']);
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
      if (!canUseDom) {
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

      return React.createElement(Arrow, {
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

      return React.createElement(Arrow, {
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

      return React.createElement(
        Container,
        {
          key: 'open',
          onClick: !!backdropClosesModal && this.closeBackdrop,
          onTouchEnd: !!backdropClosesModal && this.closeBackdrop
        },
        React.createElement(
          'div',
          {
            className: css(this.classes.content),
            style: { marginBottom: offsetThumbnails, maxWidth: width }
          },
          React.createElement(Header, {
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

      return React.createElement(
        'figure',
        { className: css(this.classes.figure) },
        isPdf ? React.createElement(
          'object',
          {
            name: image.caption,
            data: image.origin,
            width: 500,
            height: image.height * 500 / image.width,
            type: 'application/pdf'
          },
          React.createElement('embed', {
            data: image.origin,
            width: 500,
            height: image.height * 500 / image.width,
            type: 'application/pdf'
          })
        ) : React.createElement('img', {
          className: css(this.classes.image),
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
        React.createElement(Footer, {
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

      return React.createElement(PaginatedThumbnails, {
        currentImage: currentImage,
        images: images,
        offset: thumbnailOffset,
        onClickThumbnail: onClickThumbnail
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        Portal,
        null,
        this.renderDialog()
      );
    }
  }]);

  return Lightbox;
}(Component);

Lightbox.propTypes = {
  backdropClosesModal: PropTypes.bool,
  closeButtonTitle: PropTypes.string,
  currentImage: PropTypes.number,
  customControls: PropTypes.arrayOf(PropTypes.node),
  enableKeyboardInput: PropTypes.bool,
  imageCountSeparator: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    srcset: PropTypes.array,
    caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    thumbnail: PropTypes.string
  })).isRequired,
  isOpen: PropTypes.bool,
  leftArrowTitle: PropTypes.string,
  onClickImage: PropTypes.func,
  onClickNext: PropTypes.func,
  onClickPrev: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  preloadNextImage: PropTypes.bool,
  rightArrowTitle: PropTypes.string,
  showCloseButton: PropTypes.bool,
  showImageCount: PropTypes.bool,
  showThumbnails: PropTypes.bool,
  theme: PropTypes.object,
  thumbnailOffset: PropTypes.number,
  width: PropTypes.number
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
  theme: PropTypes.object.isRequired
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

export default Lightbox;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbGlnaHRib3gvaW5kZXguZXM2Il0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiU2Nyb2xsTG9jayIsImNzcyIsIlN0eWxlU2hlZXQiLCJkZWZhdWx0VGhlbWUiLCJBcnJvdyIsIkNvbnRhaW5lciIsIkZvb3RlciIsIkhlYWRlciIsIlBhZ2luYXRlZFRodW1ibmFpbHMiLCJQb3J0YWwiLCJiaW5kRnVuY3Rpb25zIiwiY2FuVXNlRG9tIiwiZGVlcE1lcmdlIiwiTGlnaHRib3giLCJwcm9wcyIsInRoZW1lIiwiY2xhc3NlcyIsImNyZWF0ZSIsImRlZmF1bHRTdHlsZXMiLCJjYWxsIiwiaXNPcGVuIiwiZW5hYmxlS2V5Ym9hcmRJbnB1dCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlib2FyZElucHV0IiwibmV4dFByb3BzIiwicHJlbG9hZE5leHRJbWFnZSIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRJbWFnZSIsIm5leHRJbmRleCIsInByZXZJbmRleCIsInByZWxvYWRJbmRleCIsInByZWxvYWRJbWFnZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpZHgiLCJpbWFnZSIsImltYWdlcyIsImltZyIsIkltYWdlIiwic3JjIiwic3Jjc2V0Iiwic3JjU2V0Iiwiam9pbiIsImV2ZW50IiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNsaWNrTmV4dCIsIm9uQ2xpY2tQcmV2IiwidGFyZ2V0IiwiaWQiLCJ0YWdOYW1lIiwib25DbG9zZSIsImtleUNvZGUiLCJnb3RvUHJldiIsImdvdG9OZXh0IiwibGVmdEFycm93VGl0bGUiLCJyaWdodEFycm93VGl0bGUiLCJiYWNrZHJvcENsb3Nlc01vZGFsIiwiY3VzdG9tQ29udHJvbHMiLCJzaG93Q2xvc2VCdXR0b24iLCJzaG93VGh1bWJuYWlscyIsIndpZHRoIiwib2Zmc2V0VGh1bWJuYWlscyIsInRodW1ibmFpbCIsInNpemUiLCJjb250YWluZXIiLCJndXR0ZXIiLCJ2ZXJ0aWNhbCIsImNsb3NlQmFja2Ryb3AiLCJjb250ZW50IiwibWFyZ2luQm90dG9tIiwibWF4V2lkdGgiLCJjbG9zZUJ1dHRvblRpdGxlIiwicmVuZGVySW1hZ2VzIiwicmVuZGVyVGh1bWJuYWlscyIsInJlbmRlckFycm93UHJldiIsInJlbmRlckFycm93TmV4dCIsImltYWdlQ291bnRTZXBhcmF0b3IiLCJvbkNsaWNrSW1hZ2UiLCJzaG93SW1hZ2VDb3VudCIsImlzUGRmIiwib3JpZ2luIiwiaW5kZXhPZiIsInNpemVzIiwidGh1bWJuYWlsc1NpemUiLCJoZWlnaHRPZmZzZXQiLCJoZWFkZXIiLCJoZWlnaHQiLCJmb290ZXIiLCJmaWd1cmUiLCJjYXB0aW9uIiwidW5kZWZpbmVkIiwiYWx0IiwiY3Vyc29yIiwibWF4SGVpZ2h0Iiwib25DbGlja1RodW1ibmFpbCIsInRodW1ibmFpbE9mZnNldCIsInJlbmRlckRpYWxvZyIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJudW1iZXIiLCJhcnJheU9mIiwibm9kZSIsInNoYXBlIiwiaXNSZXF1aXJlZCIsImFycmF5Iiwib25lT2ZUeXBlIiwiZWxlbWVudCIsImZ1bmMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJvbkNsaWNrU2hvd05leHRJbWFnZSIsImNoaWxkQ29udGV4dFR5cGVzIiwicG9zaXRpb24iLCJtYXJnaW4iLCJkaXNwbGF5IiwiV2Via2l0VG91Y2hDYWxsb3V0IiwidXNlclNlbGVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLGtCQUF2QjtBQUNBLFNBQVNDLEdBQVQsRUFBY0MsVUFBZCxRQUFnQyx3QkFBaEM7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLFNBQXpCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixvQkFB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QWMsQ0FGUTtBQUd0QlAsdUJBQXFCLElBSEM7QUFJdEJ5RCx1QkFBcUIsTUFKQztBQUt0QnRCLGtCQUFnQiwyQkFMTTtBQU10QnlELHdCQUFzQixJQU5BO0FBT3RCdkYsb0JBQWtCLElBUEk7QUFRdEIrQixtQkFBaUIsd0JBUks7QUFTdEJHLG1CQUFpQixJQVRLO0FBVXRCb0Isa0JBQWdCLElBVk07QUFXdEJqRSxTQUFPLEVBWGU7QUFZdEJrRixtQkFBaUIsQ0FaSztBQWF0Qm5DLFNBQU87QUFiZSxDQUF4QjtBQWVBakQsU0FBU3FHLGlCQUFULEdBQTZCO0FBQzNCbkcsU0FBT2xCLFVBQVVrSCxNQUFWLENBQWlCTDtBQURHLENBQTdCOztBQUlBLElBQU14RixnQkFBZ0I7QUFDcEJvRCxXQUFTO0FBQ1A2QyxjQUFVO0FBREgsR0FEVztBQUlwQnpCLFVBQVE7QUFDTjBCLFlBQVEsQ0FERixDQUNLO0FBREwsR0FKWTtBQU9wQmpGLFNBQU87QUFDTGtGLGFBQVMsT0FESixFQUNhO0FBQ2xCN0IsWUFBUSxNQUZIO0FBR0w0QixZQUFRLFFBSEgsRUFHYTtBQUNsQjVDLGNBQVUsTUFKTDs7QUFNTDtBQUNBOEMsd0JBQW9CLE1BUGY7QUFRTEMsZ0JBQVk7QUFSUDtBQVBhLENBQXRCOztBQW1CQSxlQUFlMUcsUUFBZiIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL2xpZ2h0Ym94L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2Nyb2xsTG9jayBmcm9tICdyZWFjdC1zY3JvbGxsb2NrJztcbmltcG9ydCB7IGNzcywgU3R5bGVTaGVldCB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL3RoZW1lJztcbmltcG9ydCBBcnJvdyBmcm9tICcuL2NvbXBvbmVudHMvQXJyb3cnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFpbmVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFBhZ2luYXRlZFRodW1ibmFpbHMgZnJvbSAnLi9jb21wb25lbnRzL1BhZ2luYXRlZFRodW1ibmFpbHMnO1xuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi9wb3J0YWwnO1xuXG5pbXBvcnQgeyBiaW5kRnVuY3Rpb25zLCBjYW5Vc2VEb20sIGRlZXBNZXJnZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5jbGFzcyBMaWdodGJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMudGhlbWUgPSBkZWVwTWVyZ2UoZGVmYXVsdFRoZW1lLCBwcm9wcy50aGVtZSk7XG4gICAgdGhpcy5jbGFzc2VzID0gU3R5bGVTaGVldC5jcmVhdGUoZGVlcE1lcmdlKGRlZmF1bHRTdHlsZXMsIHRoaXMudGhlbWUpKTtcbiAgICBiaW5kRnVuY3Rpb25zLmNhbGwodGhpcywgW1xuICAgICAgJ2dvdG9OZXh0JyxcbiAgICAgICdnb3RvUHJldicsXG4gICAgICAnY2xvc2VCYWNrZHJvcCcsXG4gICAgICAnaGFuZGxlS2V5Ym9hcmRJbnB1dCcsXG4gICAgXSk7XG4gIH1cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aGVtZTogdGhpcy50aGVtZSxcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiB0aGlzLnByb3BzLmVuYWJsZUtleWJvYXJkSW5wdXQpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlib2FyZElucHV0KTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoIWNhblVzZURvbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHByZWxvYWQgaW1hZ2VzXG4gICAgaWYgKG5leHRQcm9wcy5wcmVsb2FkTmV4dEltYWdlKSB7XG4gICAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLnByb3BzLmN1cnJlbnRJbWFnZTtcbiAgICAgIGNvbnN0IG5leHRJbmRleCA9IG5leHRQcm9wcy5jdXJyZW50SW1hZ2UgKyAxO1xuICAgICAgY29uc3QgcHJldkluZGV4ID0gbmV4dFByb3BzLmN1cnJlbnRJbWFnZSAtIDE7XG4gICAgICBsZXQgcHJlbG9hZEluZGV4O1xuXG4gICAgICBpZiAoY3VycmVudEluZGV4ICYmIG5leHRQcm9wcy5jdXJyZW50SW1hZ2UgPiBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgcHJlbG9hZEluZGV4ID0gbmV4dEluZGV4O1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50SW5kZXggJiYgbmV4dFByb3BzLmN1cnJlbnRJbWFnZSA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBwcmVsb2FkSW5kZXggPSBwcmV2SW5kZXg7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHdlIGtub3cgdGhlIHVzZXIncyBkaXJlY3Rpb24ganVzdCBnZXQgb25lIGltYWdlXG4gICAgICAvLyBvdGhlcndpc2UsIHRvIGJlIHNhZmUsIHdlIG5lZWQgdG8gZ3JhYiBvbmUgaW4gZWFjaCBkaXJlY3Rpb25cbiAgICAgIGlmIChwcmVsb2FkSW5kZXgpIHtcbiAgICAgICAgdGhpcy5wcmVsb2FkSW1hZ2UocHJlbG9hZEluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJlbG9hZEltYWdlKHByZXZJbmRleCk7XG4gICAgICAgIHRoaXMucHJlbG9hZEltYWdlKG5leHRJbmRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkL3JlbW92ZSBldmVudCBsaXN0ZW5lcnNcbiAgICBpZiAoXG4gICAgICAhdGhpcy5wcm9wcy5pc09wZW4gJiZcbiAgICAgIG5leHRQcm9wcy5pc09wZW4gJiZcbiAgICAgIG5leHRQcm9wcy5lbmFibGVLZXlib2FyZElucHV0XG4gICAgKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5Ym9hcmRJbnB1dCk7XG4gICAgfVxuICAgIGlmICghbmV4dFByb3BzLmlzT3BlbiAmJiBuZXh0UHJvcHMuZW5hYmxlS2V5Ym9hcmRJbnB1dCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWJvYXJkSW5wdXQpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5lbmFibGVLZXlib2FyZElucHV0KSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5Ym9hcmRJbnB1dCk7XG4gICAgfVxuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIE1FVEhPRFNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgcHJlbG9hZEltYWdlKGlkeCkge1xuICAgIGNvbnN0IGltYWdlID0gdGhpcy5wcm9wcy5pbWFnZXNbaWR4XTtcblxuICAgIGlmICghaW1hZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGltZy5zcmMgPSBpbWFnZS5zcmM7XG4gICAgaW1nLnNyY3NldCA9IGltZy5zcmNTZXQgfHwgaW1nLnNyY3NldDtcblxuICAgIGlmIChpbWFnZS5zcmNzZXQpIHtcbiAgICAgIGltZy5zcmNzZXQgPSBpbWFnZS5zcmNzZXQuam9pbigpO1xuICAgIH1cbiAgfVxuICBnb3RvTmV4dChldmVudCkge1xuICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRJbWFnZSA9PT0gdGhpcy5wcm9wcy5pbWFnZXMubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrTmV4dCgpO1xuICB9XG4gIGdvdG9QcmV2KGV2ZW50KSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY3VycmVudEltYWdlID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2xpY2tQcmV2KCk7XG4gIH1cbiAgY2xvc2VCYWNrZHJvcChldmVudCkge1xuICAgIC8vIG1ha2Ugc3VyZSBldmVudCBvbmx5IGhhcHBlbnMgaWYgdGhleSBjbGljayB0aGUgYmFja2Ryb3BcbiAgICAvLyBhbmQgaWYgdGhlIGNhcHRpb24gaXMgd2lkZW5pbmcgdGhlIGZpZ3VyZSBlbGVtZW50IGxldCB0aGF0IHJlc3BvbmQgdG9vXG4gICAgaWYgKFxuICAgICAgZXZlbnQudGFyZ2V0LmlkID09PSAnbGlnaHRib3hCYWNrZHJvcCcgfHxcbiAgICAgIGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnRklHVVJFJ1xuICAgICkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUtleWJvYXJkSW5wdXQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgIC8vIGxlZnRcbiAgICAgIHRoaXMuZ290b1ByZXYoZXZlbnQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgLy8gcmlnaHRcbiAgICAgIHRoaXMuZ290b05leHQoZXZlbnQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgLy8gZXNjXG4gICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gUkVOREVSRVJTXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHJlbmRlckFycm93UHJldigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50SW1hZ2UgPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8QXJyb3dcbiAgICAgICAgZGlyZWN0aW9uPVwibGVmdFwiXG4gICAgICAgIGljb249XCJhcnJvd0xlZnRcIlxuICAgICAgICBvbkNsaWNrPXt0aGlzLmdvdG9QcmV2fVxuICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5sZWZ0QXJyb3dUaXRsZX1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgcmVuZGVyQXJyb3dOZXh0KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRJbWFnZSA9PT0gdGhpcy5wcm9wcy5pbWFnZXMubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBcnJvd1xuICAgICAgICBkaXJlY3Rpb249XCJyaWdodFwiXG4gICAgICAgIGljb249XCJhcnJvd1JpZ2h0XCJcbiAgICAgICAgb25DbGljaz17dGhpcy5nb3RvTmV4dH1cbiAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMucmlnaHRBcnJvd1RpdGxlfVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICByZW5kZXJEaWFsb2coKSB7XG4gICAgY29uc3Qge1xuICAgICAgYmFja2Ryb3BDbG9zZXNNb2RhbCxcbiAgICAgIGN1c3RvbUNvbnRyb2xzLFxuICAgICAgaXNPcGVuLFxuICAgICAgb25DbG9zZSxcbiAgICAgIHNob3dDbG9zZUJ1dHRvbixcbiAgICAgIHNob3dUaHVtYm5haWxzLFxuICAgICAgd2lkdGgsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWlzT3Blbikge1xuICAgICAgcmV0dXJuIDxzcGFuIGtleT1cImNsb3NlZFwiIC8+O1xuICAgIH1cblxuICAgIGxldCBvZmZzZXRUaHVtYm5haWxzID0gMDtcbiAgICBpZiAoc2hvd1RodW1ibmFpbHMpIHtcbiAgICAgIG9mZnNldFRodW1ibmFpbHMgPVxuICAgICAgICB0aGlzLnRoZW1lLnRodW1ibmFpbC5zaXplICsgdGhpcy50aGVtZS5jb250YWluZXIuZ3V0dGVyLnZlcnRpY2FsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIGtleT1cIm9wZW5cIlxuICAgICAgICBvbkNsaWNrPXshIWJhY2tkcm9wQ2xvc2VzTW9kYWwgJiYgdGhpcy5jbG9zZUJhY2tkcm9wfVxuICAgICAgICBvblRvdWNoRW5kPXshIWJhY2tkcm9wQ2xvc2VzTW9kYWwgJiYgdGhpcy5jbG9zZUJhY2tkcm9wfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjc3ModGhpcy5jbGFzc2VzLmNvbnRlbnQpfVxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogb2Zmc2V0VGh1bWJuYWlscywgbWF4V2lkdGg6IHdpZHRoIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICBjdXN0b21Db250cm9scz17Y3VzdG9tQ29udHJvbHN9XG4gICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uPXtzaG93Q2xvc2VCdXR0b259XG4gICAgICAgICAgICBjbG9zZUJ1dHRvblRpdGxlPXt0aGlzLnByb3BzLmNsb3NlQnV0dG9uVGl0bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJJbWFnZXMoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnJlbmRlclRodW1ibmFpbHMoKX1cbiAgICAgICAge3RoaXMucmVuZGVyQXJyb3dQcmV2KCl9XG4gICAgICAgIHt0aGlzLnJlbmRlckFycm93TmV4dCgpfVxuICAgICAgICA8U2Nyb2xsTG9jayAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxuICByZW5kZXJJbWFnZXMoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY3VycmVudEltYWdlLFxuICAgICAgaW1hZ2VzLFxuICAgICAgaW1hZ2VDb3VudFNlcGFyYXRvcixcbiAgICAgIG9uQ2xpY2tJbWFnZSxcbiAgICAgIHNob3dJbWFnZUNvdW50LFxuICAgICAgc2hvd1RodW1ibmFpbHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWltYWdlcyB8fCAhaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgaW1hZ2UgPSBpbWFnZXNbY3VycmVudEltYWdlXTtcbiAgICBpbWFnZS5zcmNzZXQgPSBpbWFnZS5zcmNTZXQgfHwgaW1hZ2Uuc3Jjc2V0O1xuXG4gICAgY29uc3QgaXNQZGYgPSBpbWFnZS5vcmlnaW4gJiYgaW1hZ2Uub3JpZ2luLmluZGV4T2YoJy5wZGYnKSAhPT0gLTE7XG5cbiAgICBsZXQgc3Jjc2V0O1xuICAgIGxldCBzaXplcztcblxuICAgIGlmIChpbWFnZS5zcmNzZXQpIHtcbiAgICAgIHNyY3NldCA9IGltYWdlLnNyY3NldC5qb2luKCk7XG4gICAgICBzaXplcyA9ICcxMDB2dyc7XG4gICAgfVxuXG4gICAgY29uc3QgdGh1bWJuYWlsc1NpemUgPSBzaG93VGh1bWJuYWlscyA/IHRoaXMudGhlbWUudGh1bWJuYWlsLnNpemUgOiAwO1xuICAgIGNvbnN0IGhlaWdodE9mZnNldCA9IGAke3RoaXMudGhlbWUuaGVhZGVyLmhlaWdodCArXG4gICAgICB0aGlzLnRoZW1lLmZvb3Rlci5oZWlnaHQgK1xuICAgICAgdGh1bWJuYWlsc1NpemUgK1xuICAgICAgdGhpcy50aGVtZS5jb250YWluZXIuZ3V0dGVyLnZlcnRpY2FsfXB4YDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y3NzKHRoaXMuY2xhc3Nlcy5maWd1cmUpfT5cbiAgICAgICAge2lzUGRmID8gKFxuICAgICAgICAgIDxvYmplY3RcbiAgICAgICAgICAgIG5hbWU9e2ltYWdlLmNhcHRpb259XG4gICAgICAgICAgICBkYXRhPXtpbWFnZS5vcmlnaW59XG4gICAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgICAgaGVpZ2h0PXtpbWFnZS5oZWlnaHQgKiA1MDAgLyBpbWFnZS53aWR0aH1cbiAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9wZGZcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxlbWJlZFxuICAgICAgICAgICAgICBkYXRhPXtpbWFnZS5vcmlnaW59XG4gICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgIGhlaWdodD17aW1hZ2UuaGVpZ2h0ICogNTAwIC8gaW1hZ2Uud2lkdGh9XG4gICAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9wZGZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L29iamVjdD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nzcyh0aGlzLmNsYXNzZXMuaW1hZ2UpfVxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja0ltYWdlIHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIHNpemVzPXtzaXplc31cbiAgICAgICAgICAgIGFsdD17aW1hZ2UuYWx0fVxuICAgICAgICAgICAgc3JjPXtpbWFnZS5zcmN9XG4gICAgICAgICAgICBzcmNTZXQ9e3NyY3NldH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGN1cnNvcjogdGhpcy5wcm9wcy5vbkNsaWNrSW1hZ2UgPyAncG9pbnRlcicgOiAnYXV0bycsXG4gICAgICAgICAgICAgIG1heEhlaWdodDogYGNhbGMoMTAwdmggLSAke2hlaWdodE9mZnNldH0pYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIGNhcHRpb249e2ltYWdlc1tjdXJyZW50SW1hZ2VdLmNhcHRpb259XG4gICAgICAgICAgY291bnRDdXJyZW50PXtjdXJyZW50SW1hZ2UgKyAxfVxuICAgICAgICAgIGNvdW50U2VwYXJhdG9yPXtpbWFnZUNvdW50U2VwYXJhdG9yfVxuICAgICAgICAgIGNvdW50VG90YWw9e2ltYWdlcy5sZW5ndGh9XG4gICAgICAgICAgc2hvd0NvdW50PXtzaG93SW1hZ2VDb3VudH1cbiAgICAgICAgLz5cbiAgICAgIDwvZmlndXJlPlxuICAgICk7XG4gIH1cbiAgcmVuZGVyVGh1bWJuYWlscygpIHtcbiAgICBjb25zdCB7XG4gICAgICBpbWFnZXMsXG4gICAgICBjdXJyZW50SW1hZ2UsXG4gICAgICBvbkNsaWNrVGh1bWJuYWlsLFxuICAgICAgc2hvd1RodW1ibmFpbHMsXG4gICAgICB0aHVtYm5haWxPZmZzZXQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXNob3dUaHVtYm5haWxzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdpbmF0ZWRUaHVtYm5haWxzXG4gICAgICAgIGN1cnJlbnRJbWFnZT17Y3VycmVudEltYWdlfVxuICAgICAgICBpbWFnZXM9e2ltYWdlc31cbiAgICAgICAgb2Zmc2V0PXt0aHVtYm5haWxPZmZzZXR9XG4gICAgICAgIG9uQ2xpY2tUaHVtYm5haWw9e29uQ2xpY2tUaHVtYm5haWx9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8UG9ydGFsPnt0aGlzLnJlbmRlckRpYWxvZygpfTwvUG9ydGFsPjtcbiAgfVxufVxuXG5MaWdodGJveC5wcm9wVHlwZXMgPSB7XG4gIGJhY2tkcm9wQ2xvc2VzTW9kYWw6IFByb3BUeXBlcy5ib29sLFxuICBjbG9zZUJ1dHRvblRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjdXJyZW50SW1hZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIGN1c3RvbUNvbnRyb2xzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXG4gIGVuYWJsZUtleWJvYXJkSW5wdXQ6IFByb3BUeXBlcy5ib29sLFxuICBpbWFnZUNvdW50U2VwYXJhdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHNyY3NldDogUHJvcFR5cGVzLmFycmF5LFxuICAgICAgY2FwdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgICAgIHRodW1ibmFpbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KSxcbiAgKS5pc1JlcXVpcmVkLFxuICBpc09wZW46IFByb3BUeXBlcy5ib29sLFxuICBsZWZ0QXJyb3dUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGlja0ltYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbGlja05leHQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNsaWNrUHJldjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHByZWxvYWROZXh0SW1hZ2U6IFByb3BUeXBlcy5ib29sLFxuICByaWdodEFycm93VGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNob3dDbG9zZUJ1dHRvbjogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dJbWFnZUNvdW50OiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd1RodW1ibmFpbHM6IFByb3BUeXBlcy5ib29sLFxuICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdGh1bWJuYWlsT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbn07XG5MaWdodGJveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsb3NlQnV0dG9uVGl0bGU6ICdDbG9zZSAoRXNjKScsXG4gIGN1cnJlbnRJbWFnZTogMCxcbiAgZW5hYmxlS2V5Ym9hcmRJbnB1dDogdHJ1ZSxcbiAgaW1hZ2VDb3VudFNlcGFyYXRvcjogJyBvZiAnLFxuICBsZWZ0QXJyb3dUaXRsZTogJ1ByZXZpb3VzIChMZWZ0IGFycm93IGtleSknLFxuICBvbkNsaWNrU2hvd05leHRJbWFnZTogdHJ1ZSxcbiAgcHJlbG9hZE5leHRJbWFnZTogdHJ1ZSxcbiAgcmlnaHRBcnJvd1RpdGxlOiAnTmV4dCAoUmlnaHQgYXJyb3cga2V5KScsXG4gIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcbiAgc2hvd0ltYWdlQ291bnQ6IHRydWUsXG4gIHRoZW1lOiB7fSxcbiAgdGh1bWJuYWlsT2Zmc2V0OiAyLFxuICB3aWR0aDogMTAyNCxcbn07XG5MaWdodGJveC5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gIGNvbnRlbnQ6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfSxcbiAgZmlndXJlOiB7XG4gICAgbWFyZ2luOiAwLCAvLyByZW1vdmUgYnJvd3NlciBkZWZhdWx0XG4gIH0sXG4gIGltYWdlOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJywgLy8gcmVtb3ZlcyBicm93c2VyIGRlZmF1bHQgZ3V0dGVyXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgbWFyZ2luOiAnMCBhdXRvJywgLy8gbWFpbnRhaW4gY2VudGVyIG9uIHZlcnkgc2hvcnQgc2NyZWVucyBPUiB2ZXJ5IG5hcnJvdyBpbWFnZVxuICAgIG1heFdpZHRoOiAnMTAwJScsXG5cbiAgICAvLyBkaXNhYmxlIHVzZXIgc2VsZWN0XG4gICAgV2Via2l0VG91Y2hDYWxsb3V0OiAnbm9uZScsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlnaHRib3g7XG4iXX0=
