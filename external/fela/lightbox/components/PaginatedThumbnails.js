var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';

import Thumbnail from './Thumbnail';
import Arrow from './Arrow';
import theme from '../theme';

var classes = StyleSheet.create({
  paginatedThumbnails: {
    bottom: theme.container.gutter.vertical,
    height: theme.thumbnail.size,
    padding: '0 50px',
    position: 'absolute',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    left: '50%',
    transform: 'translateX(-50%)'
  }
});

var arrowStyles = {
  height: theme.thumbnail.size + theme.thumbnail.gutter * 2,
  width: 40
};

var PaginatedThumbnails = function (_Component) {
  _inherits(PaginatedThumbnails, _Component);

  function PaginatedThumbnails(props) {
    _classCallCheck(this, PaginatedThumbnails);

    var _this = _possibleConstructorReturn(this, (PaginatedThumbnails.__proto__ || Object.getPrototypeOf(PaginatedThumbnails)).call(this, props));

    _this.state = {
      hasCustomPage: false
    };

    _this.gotoPrev = _this.gotoPrev.bind(_this);
    _this.gotoNext = _this.gotoNext.bind(_this);
    return _this;
  }

  _createClass(PaginatedThumbnails, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // Component should be controlled, flush state when currentImage changes
      if (nextProps.currentImage !== this.props.currentImage) {
        this.setState({
          hasCustomPage: false
        });
      }
    }

    // ==============================
    // METHODS
    // ==============================

  }, {
    key: 'getFirst',
    value: function getFirst() {
      var _props = this.props,
          currentImage = _props.currentImage,
          offset = _props.offset;

      if (this.state.hasCustomPage) {
        return this.clampFirst(this.state.first);
      }
      return this.clampFirst(currentImage - offset);
    }
  }, {
    key: 'setFirst',
    value: function setFirst(event, newFirst) {
      var first = this.state.first;


      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (first === newFirst) {
        return;
      }

      this.setState({
        hasCustomPage: true,
        first: newFirst
      });
    }
  }, {
    key: 'gotoPrev',
    value: function gotoPrev(event) {
      this.setFirst(event, this.getFirst() - this.props.offset);
    }
  }, {
    key: 'gotoNext',
    value: function gotoNext(event) {
      this.setFirst(event, this.getFirst() + this.props.offset);
    }
  }, {
    key: 'clampFirst',
    value: function clampFirst(value) {
      var _props2 = this.props,
          images = _props2.images,
          offset = _props2.offset;


      var totalCount = 2 * offset + 1; // show $offset extra thumbnails on each side

      if (value < 0) {
        return 0;
      } else if (value + totalCount > images.length) {
        // Too far
        return images.length - totalCount;
      }
      return value;
    }

    // ==============================
    // RENDERERS
    // ==============================

  }, {
    key: 'renderArrowPrev',
    value: function renderArrowPrev() {
      if (this.getFirst() <= 0) {
        return null;
      }

      return React.createElement(Arrow, {
        direction: 'left',
        size: 'small',
        icon: 'arrowLeft',
        onClick: this.gotoPrev,
        style: arrowStyles,
        title: 'Previous (Left arrow key)',
        type: 'button'
      });
    }
  }, {
    key: 'renderArrowNext',
    value: function renderArrowNext() {
      var _props3 = this.props,
          offset = _props3.offset,
          images = _props3.images;

      var totalCount = 2 * offset + 1;
      if (this.getFirst() + totalCount >= images.length) {
        return null;
      }

      return React.createElement(Arrow, {
        direction: 'right',
        size: 'small',
        icon: 'arrowRight',
        onClick: this.gotoNext,
        style: arrowStyles,
        title: 'Next (Right arrow key)',
        type: 'button'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          images = _props4.images,
          currentImage = _props4.currentImage,
          onClickThumbnail = _props4.onClickThumbnail,
          offset = _props4.offset;


      var totalCount = 2 * offset + 1; // show $offset extra thumbnails on each side
      var thumbnails = [];
      var baseOffset = 0;
      if (images.length <= totalCount) {
        thumbnails = images;
      } else {
        // Try to center current image in list
        baseOffset = this.getFirst();
        thumbnails = images.slice(baseOffset, baseOffset + totalCount);
      }

      return React.createElement(
        'div',
        { className: css(classes.paginatedThumbnails) },
        this.renderArrowPrev(),
        thumbnails.map(function (img, idx) {
          return React.createElement(Thumbnail, _extends({
            key: baseOffset + idx
          }, img, {
            index: baseOffset + idx,
            onClick: onClickThumbnail,
            active: baseOffset + idx === currentImage
          }));
        }),
        this.renderArrowNext()
      );
    }
  }]);

  return PaginatedThumbnails;
}(Component);

export { PaginatedThumbnails as default };


PaginatedThumbnails.propTypes = {
  currentImage: PropTypes.number,
  images: PropTypes.array,
  offset: PropTypes.number,
  onClickThumbnail: PropTypes.func.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9QYWdpbmF0ZWRUaHVtYm5haWxzLmVzNiJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNzcyIsIlN0eWxlU2hlZXQiLCJUaHVtYm5haWwiLCJBcnJvdyIsInRoZW1lIiwiY2xhc3NlcyIsImNyZWF0ZSIsInBhZ2luYXRlZFRodW1ibmFpbHMiLCJib3R0b20iLCJjb250YWluZXIiLCJndXR0ZXIiLCJ2ZXJ0aWNhbCIsImhlaWdodCIsInRodW1ibmFpbCIsInNpemUiLCJwYWRkaW5nIiwicG9zaXRpb24iLCJ0ZXh0QWxpZ24iLCJ3aGl0ZVNwYWNlIiwibGVmdCIsInRyYW5zZm9ybSIsImFycm93U3R5bGVzIiwid2lkdGgiLCJQYWdpbmF0ZWRUaHVtYm5haWxzIiwicHJvcHMiLCJzdGF0ZSIsImhhc0N1c3RvbVBhZ2UiLCJnb3RvUHJldiIsImJpbmQiLCJnb3RvTmV4dCIsIm5leHRQcm9wcyIsImN1cnJlbnRJbWFnZSIsInNldFN0YXRlIiwib2Zmc2V0IiwiY2xhbXBGaXJzdCIsImZpcnN0IiwiZXZlbnQiLCJuZXdGaXJzdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwic2V0Rmlyc3QiLCJnZXRGaXJzdCIsInZhbHVlIiwiaW1hZ2VzIiwidG90YWxDb3VudCIsImxlbmd0aCIsIm9uQ2xpY2tUaHVtYm5haWwiLCJ0aHVtYm5haWxzIiwiYmFzZU9mZnNldCIsInNsaWNlIiwicmVuZGVyQXJyb3dQcmV2IiwibWFwIiwiaW1nIiwiaWR4IiwicmVuZGVyQXJyb3dOZXh0IiwicHJvcFR5cGVzIiwibnVtYmVyIiwiYXJyYXkiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLFNBQVNDLEdBQVQs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VUFBckIsRUFBaUM7QUFDL0JHLHFCQUFhSixNQUFiO0FBQ0QsT0FGRCxNQUVPO0FBQ0w7QUFDQUsscUJBQWEsS0FBS1AsUUFBTCxFQUFiO0FBQ0FNLHFCQUFhSixPQUFPTSxLQUFQLENBQWFELFVBQWIsRUFBeUJBLGFBQWFKLFVBQXRDLENBQWI7QUFDRDs7QUFFRCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVc1QyxJQUFJSyxRQUFRRSxtQkFBWixDQUFoQjtBQUNHLGFBQUsyQyxlQUFMLEVBREg7QUFFR0gsbUJBQVdJLEdBQVgsQ0FBZSxVQUFDQyxHQUFELEVBQU1DLEdBQU47QUFBQSxpQkFDZCxvQkFBQyxTQUFEO0FBQ0UsaUJBQUtMLGFBQWFLO0FBRHBCLGFBRU1ELEdBRk47QUFHRSxtQkFBT0osYUFBYUssR0FIdEI7QUFJRSxxQkFBU1AsZ0JBSlg7QUFLRSxvQkFBUUUsYUFBYUssR0FBYixLQUFxQnRCO0FBTC9CLGFBRGM7QUFBQSxTQUFmLENBRkg7QUFXRyxhQUFLdUIsZUFBTDtBQVhILE9BREY7QUFlRDs7OztFQW5JOEN2RCxTOztTQUE1QndCLG1COzs7QUFzSXJCQSxvQkFBb0JnQyxTQUFwQixHQUFnQztBQUM5QnhCLGdCQUFjbEMsVUFBVTJELE1BRE07QUFFOUJiLFVBQVE5QyxVQUFVNEQsS0FGWTtBQUc5QnhCLFVBQVFwQyxVQUFVMkQsTUFIWTtBQUk5QlYsb0JBQWtCakQsVUFBVTZELElBQVYsQ0FBZUM7QUFKSCxDQUFoQyIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL2xpZ2h0Ym94L2NvbXBvbmVudHMvUGFnaW5hdGVkVGh1bWJuYWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzLCBTdHlsZVNoZWV0IH0gZnJvbSAnYXBocm9kaXRlL25vLWltcG9ydGFudCc7XG5cbmltcG9ydCBUaHVtYm5haWwgZnJvbSAnLi9UaHVtYm5haWwnO1xuaW1wb3J0IEFycm93IGZyb20gJy4vQXJyb3cnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lJztcblxuY29uc3QgY2xhc3NlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgcGFnaW5hdGVkVGh1bWJuYWlsczoge1xuICAgIGJvdHRvbTogdGhlbWUuY29udGFpbmVyLmd1dHRlci52ZXJ0aWNhbCxcbiAgICBoZWlnaHQ6IHRoZW1lLnRodW1ibmFpbC5zaXplLFxuICAgIHBhZGRpbmc6ICcwIDUwcHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgbGVmdDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXG4gIH0sXG59KTtcblxuY29uc3QgYXJyb3dTdHlsZXMgPSB7XG4gIGhlaWdodDogdGhlbWUudGh1bWJuYWlsLnNpemUgKyB0aGVtZS50aHVtYm5haWwuZ3V0dGVyICogMixcbiAgd2lkdGg6IDQwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnaW5hdGVkVGh1bWJuYWlscyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhhc0N1c3RvbVBhZ2U6IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLmdvdG9QcmV2ID0gdGhpcy5nb3RvUHJldi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ290b05leHQgPSB0aGlzLmdvdG9OZXh0LmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAvLyBDb21wb25lbnQgc2hvdWxkIGJlIGNvbnRyb2xsZWQsIGZsdXNoIHN0YXRlIHdoZW4gY3VycmVudEltYWdlIGNoYW5nZXNcbiAgICBpZiAobmV4dFByb3BzLmN1cnJlbnRJbWFnZSAhPT0gdGhpcy5wcm9wcy5jdXJyZW50SW1hZ2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoYXNDdXN0b21QYWdlOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBNRVRIT0RTXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGdldEZpcnN0KCkge1xuICAgIGNvbnN0IHsgY3VycmVudEltYWdlLCBvZmZzZXQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRoaXMuc3RhdGUuaGFzQ3VzdG9tUGFnZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2xhbXBGaXJzdCh0aGlzLnN0YXRlLmZpcnN0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY2xhbXBGaXJzdChjdXJyZW50SW1hZ2UgLSBvZmZzZXQpO1xuICB9XG4gIHNldEZpcnN0KGV2ZW50LCBuZXdGaXJzdCkge1xuICAgIGNvbnN0IHsgZmlyc3QgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3QgPT09IG5ld0ZpcnN0KSB7IHJldHVybjsgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBoYXNDdXN0b21QYWdlOiB0cnVlLFxuICAgICAgZmlyc3Q6IG5ld0ZpcnN0LFxuICAgIH0pO1xuICB9XG4gIGdvdG9QcmV2KGV2ZW50KSB7XG4gICAgdGhpcy5zZXRGaXJzdChldmVudCwgdGhpcy5nZXRGaXJzdCgpIC0gdGhpcy5wcm9wcy5vZmZzZXQpO1xuICB9XG4gIGdvdG9OZXh0KGV2ZW50KSB7XG4gICAgdGhpcy5zZXRGaXJzdChldmVudCwgdGhpcy5nZXRGaXJzdCgpICsgdGhpcy5wcm9wcy5vZmZzZXQpO1xuICB9XG4gIGNsYW1wRmlyc3QodmFsdWUpIHtcbiAgICBjb25zdCB7IGltYWdlcywgb2Zmc2V0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdG90YWxDb3VudCA9IDIgKiBvZmZzZXQgKyAxOyAvLyBzaG93ICRvZmZzZXQgZXh0cmEgdGh1bWJuYWlscyBvbiBlYWNoIHNpZGVcblxuICAgIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgKyB0b3RhbENvdW50ID4gaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgLy8gVG9vIGZhclxuICAgICAgcmV0dXJuIGltYWdlcy5sZW5ndGggLSB0b3RhbENvdW50O1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gUkVOREVSRVJTXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHJlbmRlckFycm93UHJldigpIHtcbiAgICBpZiAodGhpcy5nZXRGaXJzdCgpIDw9IDApIHsgcmV0dXJuIG51bGw7IH1cblxuICAgIHJldHVybiAoXG4gICAgICA8QXJyb3dcbiAgICAgICAgZGlyZWN0aW9uPVwibGVmdFwiXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIGljb249XCJhcnJvd0xlZnRcIlxuICAgICAgICBvbkNsaWNrPXt0aGlzLmdvdG9QcmV2fVxuICAgICAgICBzdHlsZT17YXJyb3dTdHlsZXN9XG4gICAgICAgIHRpdGxlPVwiUHJldmlvdXMgKExlZnQgYXJyb3cga2V5KVwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgLz5cbiAgICApO1xuICB9XG4gIHJlbmRlckFycm93TmV4dCgpIHtcbiAgICBjb25zdCB7IG9mZnNldCwgaW1hZ2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRvdGFsQ291bnQgPSAyICogb2Zmc2V0ICsgMTtcbiAgICBpZiAodGhpcy5nZXRGaXJzdCgpICsgdG90YWxDb3VudCA+PSBpbWFnZXMubGVuZ3RoKSB7IHJldHVybiBudWxsOyB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFycm93XG4gICAgICAgIGRpcmVjdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgaWNvbj1cImFycm93UmlnaHRcIlxuICAgICAgICBvbkNsaWNrPXt0aGlzLmdvdG9OZXh0fVxuICAgICAgICBzdHlsZT17YXJyb3dTdHlsZXN9XG4gICAgICAgIHRpdGxlPVwiTmV4dCAoUmlnaHQgYXJyb3cga2V5KVwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgLz5cbiAgICApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGltYWdlcywgY3VycmVudEltYWdlLCBvbkNsaWNrVGh1bWJuYWlsLCBvZmZzZXQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB0b3RhbENvdW50ID0gMiAqIG9mZnNldCArIDE7IC8vIHNob3cgJG9mZnNldCBleHRyYSB0aHVtYm5haWxzIG9uIGVhY2ggc2lkZVxuICAgIGxldCB0aHVtYm5haWxzID0gW107XG4gICAgbGV0IGJhc2VPZmZzZXQgPSAwO1xuICAgIGlmIChpbWFnZXMubGVuZ3RoIDw9IHRvdGFsQ291bnQpIHtcbiAgICAgIHRodW1ibmFpbHMgPSBpbWFnZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyeSB0byBjZW50ZXIgY3VycmVudCBpbWFnZSBpbiBsaXN0XG4gICAgICBiYXNlT2Zmc2V0ID0gdGhpcy5nZXRGaXJzdCgpO1xuICAgICAgdGh1bWJuYWlscyA9IGltYWdlcy5zbGljZShiYXNlT2Zmc2V0LCBiYXNlT2Zmc2V0ICsgdG90YWxDb3VudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoY2xhc3Nlcy5wYWdpbmF0ZWRUaHVtYm5haWxzKX0+XG4gICAgICAgIHt0aGlzLnJlbmRlckFycm93UHJldigpfVxuICAgICAgICB7dGh1bWJuYWlscy5tYXAoKGltZywgaWR4KSA9PiAoXG4gICAgICAgICAgPFRodW1ibmFpbFxuICAgICAgICAgICAga2V5PXtiYXNlT2Zmc2V0ICsgaWR4fVxuICAgICAgICAgICAgey4uLmltZ31cbiAgICAgICAgICAgIGluZGV4PXtiYXNlT2Zmc2V0ICsgaWR4fVxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja1RodW1ibmFpbH1cbiAgICAgICAgICAgIGFjdGl2ZT17YmFzZU9mZnNldCArIGlkeCA9PT0gY3VycmVudEltYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICB7dGhpcy5yZW5kZXJBcnJvd05leHQoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUGFnaW5hdGVkVGh1bWJuYWlscy5wcm9wVHlwZXMgPSB7XG4gIGN1cnJlbnRJbWFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXksXG4gIG9mZnNldDogUHJvcFR5cGVzLm51bWJlcixcbiAgb25DbGlja1RodW1ibmFpbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG4iXX0=
