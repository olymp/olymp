'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _Thumbnail = require('./Thumbnail');

var _Thumbnail2 = _interopRequireDefault(_Thumbnail);

var _Arrow = require('./Arrow');

var _Arrow2 = _interopRequireDefault(_Arrow);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classes = _noImportant.StyleSheet.create({
  paginatedThumbnails: {
    bottom: _theme2.default.container.gutter.vertical,
    height: _theme2.default.thumbnail.size,
    padding: '0 50px',
    position: 'absolute',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    left: '50%',
    transform: 'translateX(-50%)'
  }
});

var arrowStyles = {
  height: _theme2.default.thumbnail.size + _theme2.default.thumbnail.gutter * 2,
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

      return _react2.default.createElement(_Arrow2.default, {
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

      return _react2.default.createElement(_Arrow2.default, {
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

      return _react2.default.createElement(
        'div',
        { className: (0, _noImportant.css)(classes.paginatedThumbnails) },
        this.renderArrowPrev(),
        thumbnails.map(function (img, idx) {
          return _react2.default.createElement(_Thumbnail2.default, _extends({
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
}(_react.Component);

exports.default = PaginatedThumbnails;


PaginatedThumbnails.propTypes = {
  currentImage: _propTypes2.default.number,
  images: _propTypes2.default.array,
  offset: _propTypes2.default.number,
  onClickThumbnail: _propTypes2.default.func.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9QYWdpbmF0ZWRUaHVtYm5haWxzLmVzNiJdLCJuYW1lcyI6WyJjbGFzc2VzIiwiY3JlYXRlIiwicGFnaW5hdGVkVGh1bWJuYWlscyIsImJvdHRvbSIsImNvbnRhaW5lciIsImd1dHRlciIsInZlcnRpY2FsIiwiaGVpZ2h0IiwidGh1bWJuYWlsIiwic2l6ZSIsInBhZGRpbmciLCJwb3NpdGlvbiIsInRleHRBbGlnbiIsIndoaXRlU3BhY2UiLCJsZWZ0IiwidHJhbnNmb3JtIiwiYXJyb3dTdHlsZXMiLCJ3aWR0aCIsIlBhZ2luYXRlZFRodW1ibmFpbHMiLCJwcm9wcyIsInN0YXRlIiwiaGFzQ3VzdG9tUGFnZSIsImdvdG9QcmV2IiwiYmluZCIsImdvdG9OZXh0IiwibmV4dFByb3BzIiwiY3VycmVudEltYWdlIiwic2V0U3RhdGUiLCJvZmZzZXQiLCJjbGFtcEZpcnN0IiwiZmlyc3QiLCJldmVudCIsIm5ld0ZpcnN0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXRGaXJzdCIsImdldEZpcnN0IiwidmFsdWUiLCJpbWFnZXMiLCJ0b3RhbENvdW50IiwibGVuZ3RoIiwib25DbGlja1RodW1ibmFpbCIsInRodW1ibmFpbHMiLCJiYXNlT2Zmc2V0Iiwic2xpY2UiLCJyZW5kZXJBcnJvd1ByZXYiLCJtYXAiLCJpbWciLCJpZHgiLCJyZW5kZXJBcnJvd05leHQiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJhcnJheSIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsd0JBQVdDLE1BQVgsQ0FBa0I7QUFDaENDLHVCQUFxQjtBQUNuQkMsWUFBUSxnQkFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFFBRFo7QUFFbkJDLFlBQVEs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QUFlLFVBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLGlCQUNkO0FBQ0UsaUJBQUtMLGFBQWFLO0FBRHBCLGFBRU1ELEdBRk47QUFHRSxtQkFBT0osYUFBYUssR0FIdEI7QUFJRSxxQkFBU1AsZ0JBSlg7QUFLRSxvQkFBUUUsYUFBYUssR0FBYixLQUFxQnRCO0FBTC9CLGFBRGM7QUFBQSxTQUFmLENBRkg7QUFXRyxhQUFLdUIsZUFBTDtBQVhILE9BREY7QUFlRDs7Ozs7O2tCQW5Ja0IvQixtQjs7O0FBc0lyQkEsb0JBQW9CZ0MsU0FBcEIsR0FBZ0M7QUFDOUJ4QixnQkFBYyxvQkFBVXlCLE1BRE07QUFFOUJiLFVBQVEsb0JBQVVjLEtBRlk7QUFHOUJ4QixVQUFRLG9CQUFVdUIsTUFIWTtBQUk5QlYsb0JBQWtCLG9CQUFVWSxJQUFWLENBQWVDO0FBSkgsQ0FBaEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9saWdodGJveC9jb21wb25lbnRzL1BhZ2luYXRlZFRodW1ibmFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcywgU3R5bGVTaGVldCB9IGZyb20gJ2FwaHJvZGl0ZS9uby1pbXBvcnRhbnQnO1xuXG5pbXBvcnQgVGh1bWJuYWlsIGZyb20gJy4vVGh1bWJuYWlsJztcbmltcG9ydCBBcnJvdyBmcm9tICcuL0Fycm93JztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSc7XG5cbmNvbnN0IGNsYXNzZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIHBhZ2luYXRlZFRodW1ibmFpbHM6IHtcbiAgICBib3R0b206IHRoZW1lLmNvbnRhaW5lci5ndXR0ZXIudmVydGljYWwsXG4gICAgaGVpZ2h0OiB0aGVtZS50aHVtYm5haWwuc2l6ZSxcbiAgICBwYWRkaW5nOiAnMCA1MHB4JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxuICB9LFxufSk7XG5cbmNvbnN0IGFycm93U3R5bGVzID0ge1xuICBoZWlnaHQ6IHRoZW1lLnRodW1ibmFpbC5zaXplICsgdGhlbWUudGh1bWJuYWlsLmd1dHRlciAqIDIsXG4gIHdpZHRoOiA0MCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2luYXRlZFRodW1ibmFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoYXNDdXN0b21QYWdlOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy5nb3RvUHJldiA9IHRoaXMuZ290b1ByZXYuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdvdG9OZXh0ID0gdGhpcy5nb3RvTmV4dC5iaW5kKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgLy8gQ29tcG9uZW50IHNob3VsZCBiZSBjb250cm9sbGVkLCBmbHVzaCBzdGF0ZSB3aGVuIGN1cnJlbnRJbWFnZSBjaGFuZ2VzXG4gICAgaWYgKG5leHRQcm9wcy5jdXJyZW50SW1hZ2UgIT09IHRoaXMucHJvcHMuY3VycmVudEltYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaGFzQ3VzdG9tUGFnZTogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gTUVUSE9EU1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBnZXRGaXJzdCgpIHtcbiAgICBjb25zdCB7IGN1cnJlbnRJbWFnZSwgb2Zmc2V0IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0aGlzLnN0YXRlLmhhc0N1c3RvbVBhZ2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmNsYW1wRmlyc3QodGhpcy5zdGF0ZS5maXJzdCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNsYW1wRmlyc3QoY3VycmVudEltYWdlIC0gb2Zmc2V0KTtcbiAgfVxuICBzZXRGaXJzdChldmVudCwgbmV3Rmlyc3QpIHtcbiAgICBjb25zdCB7IGZpcnN0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0ID09PSBuZXdGaXJzdCkgeyByZXR1cm47IH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaGFzQ3VzdG9tUGFnZTogdHJ1ZSxcbiAgICAgIGZpcnN0OiBuZXdGaXJzdCxcbiAgICB9KTtcbiAgfVxuICBnb3RvUHJldihldmVudCkge1xuICAgIHRoaXMuc2V0Rmlyc3QoZXZlbnQsIHRoaXMuZ2V0Rmlyc3QoKSAtIHRoaXMucHJvcHMub2Zmc2V0KTtcbiAgfVxuICBnb3RvTmV4dChldmVudCkge1xuICAgIHRoaXMuc2V0Rmlyc3QoZXZlbnQsIHRoaXMuZ2V0Rmlyc3QoKSArIHRoaXMucHJvcHMub2Zmc2V0KTtcbiAgfVxuICBjbGFtcEZpcnN0KHZhbHVlKSB7XG4gICAgY29uc3QgeyBpbWFnZXMsIG9mZnNldCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHRvdGFsQ291bnQgPSAyICogb2Zmc2V0ICsgMTsgLy8gc2hvdyAkb2Zmc2V0IGV4dHJhIHRodW1ibmFpbHMgb24gZWFjaCBzaWRlXG5cbiAgICBpZiAodmFsdWUgPCAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2UgaWYgKHZhbHVlICsgdG90YWxDb3VudCA+IGltYWdlcy5sZW5ndGgpIHtcbiAgICAgIC8vIFRvbyBmYXJcbiAgICAgIHJldHVybiBpbWFnZXMubGVuZ3RoIC0gdG90YWxDb3VudDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFJFTkRFUkVSU1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICByZW5kZXJBcnJvd1ByZXYoKSB7XG4gICAgaWYgKHRoaXMuZ2V0Rmlyc3QoKSA8PSAwKSB7IHJldHVybiBudWxsOyB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFycm93XG4gICAgICAgIGRpcmVjdGlvbj1cImxlZnRcIlxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICBpY29uPVwiYXJyb3dMZWZ0XCJcbiAgICAgICAgb25DbGljaz17dGhpcy5nb3RvUHJldn1cbiAgICAgICAgc3R5bGU9e2Fycm93U3R5bGVzfVxuICAgICAgICB0aXRsZT1cIlByZXZpb3VzIChMZWZ0IGFycm93IGtleSlcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICByZW5kZXJBcnJvd05leHQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQsIGltYWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0b3RhbENvdW50ID0gMiAqIG9mZnNldCArIDE7XG4gICAgaWYgKHRoaXMuZ2V0Rmlyc3QoKSArIHRvdGFsQ291bnQgPj0gaW1hZ2VzLmxlbmd0aCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBcnJvd1xuICAgICAgICBkaXJlY3Rpb249XCJyaWdodFwiXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgIGljb249XCJhcnJvd1JpZ2h0XCJcbiAgICAgICAgb25DbGljaz17dGhpcy5nb3RvTmV4dH1cbiAgICAgICAgc3R5bGU9e2Fycm93U3R5bGVzfVxuICAgICAgICB0aXRsZT1cIk5leHQgKFJpZ2h0IGFycm93IGtleSlcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbWFnZXMsIGN1cnJlbnRJbWFnZSwgb25DbGlja1RodW1ibmFpbCwgb2Zmc2V0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdG90YWxDb3VudCA9IDIgKiBvZmZzZXQgKyAxOyAvLyBzaG93ICRvZmZzZXQgZXh0cmEgdGh1bWJuYWlscyBvbiBlYWNoIHNpZGVcbiAgICBsZXQgdGh1bWJuYWlscyA9IFtdO1xuICAgIGxldCBiYXNlT2Zmc2V0ID0gMDtcbiAgICBpZiAoaW1hZ2VzLmxlbmd0aCA8PSB0b3RhbENvdW50KSB7XG4gICAgICB0aHVtYm5haWxzID0gaW1hZ2VzO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUcnkgdG8gY2VudGVyIGN1cnJlbnQgaW1hZ2UgaW4gbGlzdFxuICAgICAgYmFzZU9mZnNldCA9IHRoaXMuZ2V0Rmlyc3QoKTtcbiAgICAgIHRodW1ibmFpbHMgPSBpbWFnZXMuc2xpY2UoYmFzZU9mZnNldCwgYmFzZU9mZnNldCArIHRvdGFsQ291bnQpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMucGFnaW5hdGVkVGh1bWJuYWlscyl9PlxuICAgICAgICB7dGhpcy5yZW5kZXJBcnJvd1ByZXYoKX1cbiAgICAgICAge3RodW1ibmFpbHMubWFwKChpbWcsIGlkeCkgPT4gKFxuICAgICAgICAgIDxUaHVtYm5haWxcbiAgICAgICAgICAgIGtleT17YmFzZU9mZnNldCArIGlkeH1cbiAgICAgICAgICAgIHsuLi5pbWd9XG4gICAgICAgICAgICBpbmRleD17YmFzZU9mZnNldCArIGlkeH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tUaHVtYm5haWx9XG4gICAgICAgICAgICBhY3RpdmU9e2Jhc2VPZmZzZXQgKyBpZHggPT09IGN1cnJlbnRJbWFnZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgICAge3RoaXMucmVuZGVyQXJyb3dOZXh0KCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblBhZ2luYXRlZFRodW1ibmFpbHMucHJvcFR5cGVzID0ge1xuICBjdXJyZW50SW1hZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5LFxuICBvZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIG9uQ2xpY2tUaHVtYm5haWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuIl19
